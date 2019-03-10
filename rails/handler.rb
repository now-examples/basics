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
