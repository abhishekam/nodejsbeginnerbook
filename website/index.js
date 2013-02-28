//Code to access various modules
var server=require("./server");
var router=require("./router");
var handler=require("./requestHandlers");

handle={};
handle["/"]=handler.start;
handle["/start"]=handler.start;
handle["/upload"]=handler.upload;
handle["/show"]=handler.show;

server.start(router.route,handle);