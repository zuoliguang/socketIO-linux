# socketIO-linux 
该案例简单展示 nodeJS 开发消息推送，聊天等应用，版本开发环境centOS6.5 
## 安装:<br>
* 1、保证安装了 node 
* 2、该目录下执行 npm install 
* 3、运行文件 node app.js 访问 index.html 位置即可 记得防火墙打开8000的端口; 
* 4、客户端可使用:
  <pre><code>
  <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script><br>
  <script src="/socket.io/socket.io.js"></script><br>
  <script><br>
        var socket = io.connect('http://192.168.147.130:8000'); // 该位置使用自己的项目地址<br>
        var message = document.getElementById('message');<br>
        $(message.form).submit(function() {<br>
          socket.emit('message', { text: message.value });<br>
          return false;<br>
        });<br>
        socket.on('push message', function (data) {<br>
          alert(data.text);<br>
          //该位置展示传输信息<br>
        });<br>
  </script>
  </code></pre>
