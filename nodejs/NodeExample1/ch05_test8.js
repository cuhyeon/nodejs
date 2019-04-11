/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/
var http = require("http");

var opts = {
    host : 'www.google.com',
    port : 80,
    method : "POST",
    path : "/",
    headers : {}
};

var resData = "";
var req = http.request(opts, function(res) {
    //응답처리
    res.on("data", function(chunk) {
        resData += chunk;
    });

    res.on("end", function() {
        console.log(resData);
    });
});
opts.headers["Content-Type"] = "application/x-www-form-urencoded";
req.data = "q=actor";
opts.headers["Content-Length"] = req.data.length;

req.on("error", function(err) {
    console.log("오류발생 :" + err.message);
    
    //요청전송
    req.write(req.data);
    req.end();
}