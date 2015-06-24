# Test development server, mic features won't run unless being served
import SimpleHTTPServer
import SocketServer

Handler = SimpleHTTPServer.SimpleHTTPRequestHandler

httpd = SocketServer.TCPServer(("", 5000), Handler)

print "Serving at 127.0.0.1:5000"
httpd.serve_forever()
