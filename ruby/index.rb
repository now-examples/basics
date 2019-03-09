require 'webrick'

class handler < WEBrick::HTTPServlet::AbstractServlet
  
  def do_GET request, response
    status, content_type, body = sample_response request

    response.status = status
    response['Content-Type'] = content_type
    response.body = body
  end

  private

  def sample_response(req)
    200, 'text/plain', "Hello from Ruby on Now 2.0!"
  end
end
