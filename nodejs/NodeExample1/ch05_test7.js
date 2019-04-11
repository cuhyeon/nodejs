/*jslint devel: true */
/* eslint-disable no-console */
/*eslint no-undef: "error"*/
/*eslint-env node*/
var http = require("http");

var options = {
    host : 'www.google.com',
    port : 80,
    path : "/"
};

var req = http.get(options, function(res) {
    //응답 처리
    var resData = '';
        res.on("data", function(chunk) {
            resData += chunk;
        });
    
        res.on("end", function() {
        console.log(resData);
    });
});

req.on("error", function(err) {
    console.log("오류발생 : " + err.message);
});
        