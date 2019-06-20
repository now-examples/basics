require 'webrick'

class Handler < WEBrick::HTTPServlet::AbstractServlet
  def do_GET req, res
    res.body = 'Hello from Ruby Class on Now 2.0!'
  end
end
