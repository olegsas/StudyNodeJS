// загрузка модуля http
var http = require('http');

// создание http-сервера
http.createServer(function(req,res){

    // заголовок контента
    res.writeHead(200, {'content-type': 'text/plain'});

    // запись сообщения и завершение сигнальной связи
    res.end("Hello, World!\n");
}).listen(8124);

console.log('Server running on 8124');