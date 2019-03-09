require 'sinatra/base'
require_relative File.expand_path('../config/environment', __dir__)

class NowExample < Sinatra::Base

  get '/' do
    { :welcome => 'Welcome to Now 2.0 with Ruby and Sinatra' }.to_json
  end
  
end

