var http = require('http')
const urlModule = require('url') //?核心模块，帮助我们解析url地址，获得pathname和query
var server = http.createServer()

server.on('request', function (request, response) {
  const {
    pathname: url,
    query
  } = urlModule.parse(request.url, true)
  /* const url = request.url; */
  if (url === '/getscript') {
    //拼接一个合法的js脚本
    var data = {
      name: '李明',
      age: '18',
      gender: '男孩子'

    }

    var scriptStr = `${query.callback}(${JSON.stringify(data)})` //模板字符串：``待补充
    //response.end发送给客户端
    response.end(scriptStr)
  } else {
    response.end('404')
  }


  console.log('收到客户端的请求了，请求路径是：' + request.url)

  // 告诉浏览器转码格式为utf-8
  response.setHeader('Content-Type', 'text/plain; charset=utf-8')
  response.end('这是响应的数据')

})

server.listen(5000, function () {
  console.log('服务器启动成功了，可以通过 http://127.0.0.1:5000/ 来进行访问')
})