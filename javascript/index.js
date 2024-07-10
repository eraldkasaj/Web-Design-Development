/* SEARCH*/

function search() {
   const searchInput = document.getElementsByClassName('search')
     alert(`404 \n Page not found !'`)
}








/*      LOG IN   */
const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementById('form');

const email_error = document.getElementById('email_error');
const pass_error = document.getElementById('pass_error');




form.addEventListener('submit',(e)=>
{  
   let hasErrors = false;
   var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;


   if(!email.value.match(email_check))
   {
      e.preventDefault();
      email_error.innerHTML = "Valid Email is required";
      hasErrors = true;
   } else{
      email_error.innerHTML = "";
   }

   if(password.value.length <= 5){
      e.preventDefault();
      pass_error.innerHTML = "Password must be more than 6 characters";
      hasErrors = true;
   }else{
     pass_error.innerHTML = "";
   }

   if(password.value.length >= 20) {
      e.preventDefault();
      pass_error.innerHTML = "Password cannot be more than 20 characters";
      hasErrors = true;
   }

   if(password.value === 'password'){
      e.preventDefault();
      pass_error.innerHTML = "Password cannot be password";
      hasErrors = true;
    }

if (!hasErrors) {
    alert('Login me sukses')
   }
   })



/* subscribe*/
   const input_news = document.getElementsByClassName('input-news')
   const input_news_error = document.getElementsByClassName('input_news_error')
   const subscribe_btn = document.getElementsByClassName('subscribe-btn')

   var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   function subscribe() {

      for (let i = 0; i < input_news.length; i++) {
         const currentInput = input_news[i];
         const currentError = input_news_error[i];

         if (!currentInput.value.match(email_check)) {
            currentError.innerHTML = "Valid Email is required";
          } else {
            currentError.innerHTML = "";
    }
   }
   const hasErrors = Array.from(input_news_error).some(error => error.innerHTML !== "");

  if (!hasErrors) {
    alert("Subscription successful! Thank You for Subscribing");
  }
 }
