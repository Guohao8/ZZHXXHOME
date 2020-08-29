
var express = require("express"),
  connect = require("connect"),
  app = express(),
  PORT = 3000;

// use使中间件挂到当前服务器上
app.use(connect.bodyParser())
// express.statice()可以指定一个文件夹被特定的文件路径访问，__dirname是一个可用的全局Node变量，表示此文件所在目录的完整绝对路径
// 这里的意思是，通过/assets路径就可以访问/dist/assets路径下的文件
app.use('/assets', express.static(__dirname + "/dist/assets"))
// get()方法 使我们能够相应指向特定URL的HTTP 的 GET请求。请求地址，返回数据
// 当使用GET方法对指定的URL进行请求时，回调函数会被执行。request：请求，response：响应
// 请求的内容通过request对象传入回调函数，request对象中包含有：告诉服务器当前连接是从哪个页面链接过来的，用户使用的哪种浏览器以及一些其他信息
// 回调函数的参数还有response对象，其中也包括一些属性和方法，可以通过设置这些属性和调用这些方法，来改变要发送给此请求的浏览器的输出信息和HTTP报头信息（HTTP的协议和版本）
app.get("/", function (request, response) {
  // response的send()方法使我们能够发送数据给发出请求的浏览器。
  response.send("<h1>Hello Xx</h1>")
});
// post()方法就是接受后台以post请求发送过来的数据。（服务器发送数据到浏览器）
app.post("/email", function (request, response) {
  // response的send()方法使我们能够发送数据给发出请求的浏览器。  
  response.send("<h1>Hello Xx</h1>")
});
// listen就是监听端口，会对指定的端口处理，接受由前台向后台发出的请求。
app.listen(PORT)

console.log("xxxxxxxxxxxx http://127.0.0.1:" + PORT) 
