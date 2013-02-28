var http=require("http");
var url=require("url");

function start(route,handle){
	http.createServer(function(request,response){
		var pathname=url.parse(request.url).pathname;
		console.log("Received request for path "+pathname);
		//var postData="";
		// request.setEncoding("utf8");
		// request.addListener("data", function(chunk){
		// 	postData+=chunk;
		// });
		// request.addListener("end",function(){
		// 	route(handle,pathname,response,postData);
		// });
		route(handle,pathname,response,request);
	}).listen(8888);

	console.log("Server started. Listening at port: 8888");
}

exports.start=start;

