const express = require("express");
var path = require('path');
var alert = require("alert-node")

const app = express();
// создаем парсер для данных в формате json
const jsonParser = express.json();
app.use(express.static(path.join(__dirname)));
  
app.post("/*", jsonParser, function (request, response) {
    console.log(request.body);

    if (request.body["userName"] === "Dimon"){
        request.body["userName"] = "Dimoooon tyrytyryty"
    }
    
    if (request.headers["user-agent"] === "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36"){
        alert("Hands on table " + request.body["userName"])
    }
     
    response.json(request.body); // отправляем пришедший ответ обратно
});
  
app.get("/*", function(request, response){
      
    response.sendFile(__dirname + "index.html");
});
  
app.listen(3000);