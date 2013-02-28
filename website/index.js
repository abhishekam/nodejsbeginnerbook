//Code to access various modules
var server=require("./server");
var router=require("./router");


server.start(router.route);