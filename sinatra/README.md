# Sinatra

In this example we will be deploying a simple "Hello World" example with Ruby.

### Getting started with Ruby

- Create an `app` folder with an `app.rb` file with the following code:

```ruby
require 'sinatra/base'

class NowExample < Sinatra::Base

  get '/' do
    { :welcome => 'Welcome to Now 2.0 with Ruby and Sinatra' }.to_json
  end

end
```

- Next create a `config.ru` file inside the `app` folder with the following code:

```ruby
require 'rack'
require_relative './app'

set :root, __dir__

run NowExample
```

- We're all set now, lets create our `handler.rb` file in the root of our folder
```ruby
require 'rack'
require 'json'

# Might not be efficient on Now due to frequent deployment
# efficient on AWS tho
# $app ||= Rack::Builder.parse_file("#{__dir__}/app/config.ru").first
$app = Rack::Builder.parse_file("#{__dir__}/app/config.ru").first

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

    body_content = body.map(&:to_s).join(' ')

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

- Lastly, before we forget. We have to install and track our dependencies for this app. Now let's create our `Gemfile` in the root of our project
```ruby
# frozen_string_literal: true

source "https://rubygems.org"

git_source(:github) {|repo_name| "https://github.com/#{repo_name}" }

# gem "rails"

gem "sinatra", "~> 2.0"
```

## OPTIONAL 

### NOTE: If we want to run the app on our development machine, we'll need to run `$ bundle install` command after every changes made to our `Gemfile`


This is all we need for a fully functional sinatra app. But, we shouldn't stop here just because this is functional, we should make our app more robust

- First, let's change our application server from the default (`WEBrick`)[https://ruby-doc.org/stdlib-2.0.0/libdoc/webrick/rdoc/WEBrick.html] to a better production performant alternative (`Puma`)[http://puma.io/]. Let's add this line to the bottom of our `Gemfile`
```ruby
gem "puma", "~> 3.12"
```

- We need to configure our app to be puma aware and we also need to create configuration file for `puma`. Create a folder with name `config` and create the following files with codes respectively inside the folder:

 `environment.rb` 

```ruby
require 'sinatra/base'

configure {
  set :server, :puma
}
```

`puma.rb`

```ruby
workers Integer(ENV['WEB_CONCURRENCY'] || 2)
threads_count = Integer(ENV['RAILS_MAX_THREADS'] || 5)
threads threads_count, threads_count

preload_app!

rackup DefaultRackup
```
Now we will add the following line to our `app.rb` file below `require 'sinatra'` 
```ruby
require_relative File.expand_path('../config/environment', __dir__)
```

- Next, we need to write test for app. THis is useful to verify what our app does under certain conditions. We will be using (`rspec`)[http://rspec.info/] as our test-suite. `rspec` will be added to our `Gemfile` allong with it's dependency by adding the following lines to the bottom of our `Gemfile`.
```ruby
group :test, :development do
  gem "rspec", "~> 3.8"
  gem "rack-test", "~> 1.1"
end
```

- Next, we'have to run `$ bundle install` command in a CLI that is pointing to this app. After that, we will run `$ rspec --init` in our CLI again. We will replace the content of the `.rspec` file that was created for us when we initialize `rspec` with the following:
```config
--require spec_helper
--color
--require spec_helper
--format documentation
--no-fail-fast
```

- Also, we will paste the following line in our `spec_helper.rb` file that is in `spec` folder. We will paste this below the first line
```ruby
require_relative File.expand_path('../app/app', __dir__)

set :environment, :test

def app
  NowExample
end

def parsed_body
  JSON.parse last_response.body
end
```

- Finally, we will create a the actual test for our app. Create file `app_spec.rb` inside `spec` folder and paste the following:
```ruby
require File.expand_path "../spec_helper.rb", __FILE__

RSpec.describe 'Sinatra Lambda Example API' do

  include Rack::Test::Methods

  context 'response' do
    before(:each) { get '/'}

    it "has http status OK" do
      expect(last_response).to be_ok
    end

    it "returns correct documents" do
      payload = parsed_body

      expect(payload).to have_key "welcome"
      expect(payload["welcome"]).to_not be_nil
      expect(payload["welcome"]).to eq 'Welcome to Now 2.0 with Ruby and Sinatra'
    end
  end

end
```

- Now run `rspec` in your previously opened CLI window to see the result of the test.



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
