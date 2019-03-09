require 'rack/test'
require_relative File.expand_path('../app/app', __dir__)

set :environment, :test

def app
  NowExample
end

def parsed_body
  JSON.parse last_response.body
end

RSpec.configure do |config|
  config.expect_with :rspec do |expectations|
    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end

  
  config.mock_with :rspec do |mocks|
    mocks.verify_partial_doubles = true
  end

  
  config.shared_context_metadata_behavior = :apply_to_host_groups

end
