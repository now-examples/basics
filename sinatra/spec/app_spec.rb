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