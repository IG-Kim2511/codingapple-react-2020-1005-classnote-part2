const express = require('express');
const path = require('path');
const app = express();

/* 
2. server.js만들고, 기본 템플릿 복붙

4.
package.json 설치 
$ npm init

express 설치
$ npm install express

미리보기
nodemon server.js
*/

const http = require('http').createServer(app);
http.listen(8080, function () {
  console.log('listening on 8080')
}); 

app.use(express.static(path.join(__dirname, '/build')));

app.get('/', function (요청, 응답) {
  응답.sendFile(path.join(__dirname, '/build/index.html'));
});




app.get('*', function (요청, 응답) {
    응답.sendFile(path.join(__dirname, '/build/index.html'));
  });