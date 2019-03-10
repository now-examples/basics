# Ruby ON Rails 

In this example we will be deploying a Ruby On Rails API.

### Getting started with Rails

- Open a terminal/CMD window in a convenient folder on your machine and run:

```bash
$ rails new now_example --api
```

- We can make all required modifications from this point on.

- We're all set now, lets create our `handler.rb` file in the root of our app
```ruby
require 'rack'
require 'json'

# Might not be efficient on Now due to frequent deployment
# efficient on AWS tho
# $app ||= Rack::Builder.parse_file("#{__dir__}/config.ru").first
$app = Rack::Builder.parse_file("#{__dir__}/config.ru").first

def handler(event:, context:)
  body = event['body']
  querystring = Rack::Utils.build_query(event['queryStringParameters']) if event['queryStringParameters']

  env = {
    'REQUEST_METHOD' => event['httpMethod'],
    'SCRIPT_NAME' => '',
    'PATH_INFO' => event['path'] || '',
    'QUERY_STRING' => querystring || '',
    'SERVER_NAME' => 'localhost',
    'SERVER_PORT' => 443,
    'CONTENT_TYPE' => event['headers']['content-type'],

    'rack.version' => Rack::VERSION,
    'rack.url_scheme' => 'https',
    'rack.input' => StringIO.new(body || ''),
    'rack.errors' => $stderr,
  }
  # Pass request headers to Rack if they are available
  unless event['headers'].nil?
    event['headers'].each { |key, value| env["HTTP_#{key}"] = value }
  end

  begin
    status, headers, body = $app.call(env)

    body_content = body.each(&:to_s).join(',')
    response = {
      'statusCode' => status,
      'headers' => headers,
      'body' => body_content
    }

  rescue Exception => msg
    # If there is any exception, we return a 500 error with an error message
    response = {
      'statusCode' => 500,
      'body' => msg
    }
  end
  response.to_json
end
```

- We're all done



### Deploy with Now

First we need to create a `now.json` configuration file to instruct Now how to build the project.

For this example we will be using our newest version [Now 2.0](https://zeit.co/now).

By adding the `version` key to the `now.json` file, we can specify which Now Platform version to use.

We also need to define each builders we would like to use. [Builders](https://zeit.co/docs/v2/deployments/builders/overview/) are modules that take a deployment's source and return an output, consisting of [either static files or dynamic Lambdas](https://zeit.co/docs/v2/deployments/builds/#sources-and-outputs).

In this case we are going to use `@now/ruby` to build and deploy the all Ruby files. We will also define a name for our project (optional).

```json
{
    "version": 2,
    "name": "ruby",
    "builds": [
        { "src": "*.rb", "use": "@now/ruby" }
    ]
}
```

Visit our [documentation](https://zeit.co/docs/v2/deployments/configuration) for more information on the `now.json` configuration file.

We are now ready to deploy the app.

```
now
```
