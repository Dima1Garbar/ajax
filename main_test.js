document.getElementById("button").addEventListener("click", function (e) {e.preventDefault()
   
   // получаем данные формы
   let registerForm = document.forms["messForm"];
   let userName = registerForm.elements["name"].value;
   let userMess = registerForm.elements["message"].value;


   // сериализуем данные в json
   let user = JSON.stringify({userName: userName, userMess: userMess});
   let request = new XMLHttpRequest();


   // посылаем запрос на адрес "/user"
   request.open("POST", "/*", true);
   request.setRequestHeader("Content-Type", "application/json");

   request.addEventListener("load", function () {

      // получаем и парсим ответ сервера
       let receivedUser = JSON.parse(request.response);
       console.log(receivedUser.userName, "-", receivedUser.userMess);   // смотрим ответ сервера

       var doc = document.getElementById('all_mess');
       var newMess = document.createElement('div');
       newMess.innerHTML = `${receivedUser.userName}: ${receivedUser.userMess}`;
       doc.appendChild(newMess);
   });




   request.send(user);

   document.getElementById('message').value = '';
  }
);