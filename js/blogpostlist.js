
//contactform

var form = {};

document.addEventListener("DOMContentLoaded", function() {
    form.Name = document.getElementById('Name');
   
    form.email = document.getElementById('email');
  
    form.question = document.getElementById('question');
})


   function ifNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
   }
//control if email is correct format
   function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
   }

   //sending form

   function sendForm() {
    form.Name = getName();

    if (isValid()) {
        let usr =new
    }

    