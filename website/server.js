var http=require("http");
var url=require("url");

function start(route){
	http.createServer(function(request,response){
		var pathname=url.parse(request.url).pathname;
		console.log("Received request for path"+pathname);

		route(pathname);

		response.writeHead(200,{"ContentType":"text/plain"});
		response.write("Hello, World");
		response.end();
	}).listen(8888);

	console.log("Server started. Listening at port: 8888");
}

exports.start=start;