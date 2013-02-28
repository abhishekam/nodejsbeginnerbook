function route(handle,pathname,response,request){
	console.log("Attempting to route to "+pathname);
	if (typeof(handle[pathname])=='function')
	{
		handle[pathname](response,request);
	}
	else
	{
		console.log("Handler not found for path "+pathname)

		response.writeHead(404,{"ContentType":"text/plain"});
		response.write("404 Error: Not Found");
		response.end();
	}
}
exports.route=route;