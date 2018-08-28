using Merly

server = Merly.app()
@page "/" "Hello World from Julia !!!"
server.start(Dict("host" => "0.0.0.0","port" => 8080))