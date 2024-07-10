function funcToggle1 () {
    let toggle= document.getElementById("toggle-1")
    let nameInput =  document.getElementById("name")

    if(toggle.checked == true){
        nameInput.style.display = "none";
    }
    else{
        nameInput.style.display = "block";
    }
}

function funcToggle2 () {
    let toggle= document.getElementById("toggle-2")
    let lastName =  document.getElementById("lastname")

    if(toggle.checked == true){
        lastName.style.display = "none";
    }
    else{
        lastName.style.display = "block";
    }
}

function funcToggle3 () {
    let toggle= document.getElementById("toggle-3")
    let email =  document.getElementById("email")

    if(toggle.checked == true){
        email.style.display = "none";
    }
    else{
        email.style.display = "block";
    }
}

function funcToggle4 () {
    let toggle= document.getElementById("toggle-4")
    let company =  document.getElementById("password")

    if(toggle.checked == true){
        company.style.display = "none";
    }
    else{
        company.style.display = "block";
    }
}

function funcToggle5 () {
    let toggle= document.getElementById("toggle-5")
    let jobTitle =  document.getElementById("phone_number")

    if(toggle.checked == true){
        jobTitle.style.display = "none";
    }
    else{
        jobTitle.style.display = "block";
    }
}

function funcToggle6 () {
    let toggle = document.getElementById("toggle-6")
    let textArea =  document.getElementById("job-title")

    if(toggle.checked == true){
        textArea.style.display = "none";
    }
    else{
        textArea.style.display = "block";
    }
}

function funcToggle7 () {
    let toggle = document.getElementById("toggle-7")
    let textArea =  document.getElementById("textarea")

    if(toggle.checked == true){
        textArea.style.display = "none";
    }
    else{
        textArea.style.display = "block";
    }
}





const name = document.getElementById('name');
const lastname = document.getElementById('lastname')
const email = document.getElementById('email');
const password = document.getElementById('password');
const phone_number = document.getElementById('phone_number');
const job = document.getElementById('job-title');
const textarea = document.getElementById('textarea')
const checkbox = document.getElementById('checkbox')
const form = document.getElementById('form');

const name_error = document.getElementById('name_error');
const lastname_error = document.getElementById('lastname_error');
const email_error = document.getElementById('email_error');
const password_error = document.getElementById('password_error');
const phone_number_error = document.getElementById('phone_number_error');
const job_error = document.getElementById('job_error');
const textarea_error = document.getElementById('textarea_error')
const checkbox_error = document.getElementById('checkbox_error')


form.addEventListener('submit',(e) => {


    var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

   
    if (!name.value || name.value.trim().length < 4) {
        e.preventDefault();
        
        if (!name.value) {
            name_error.innerHTML = "Name is required";
        } else if (name.value.trim().length < 4) {
            name_error.innerHTML = "Name must be at least 4 characters long";
        }
    } else {
        name_error.innerHTML = "";
    }


    if (!lastname.value || lastname.value.trim().length < 4) {
        e.preventDefault();
        
        if (!lastname.value) {
            lastname_error.innerHTML = "Lastname is required";
        } else if (lastname.value.trim().length < 4) {
            lastname_error.innerHTML = "Lastname must be at least 4 characters long";
        }
    } else {
        lastname_error.innerHTML = "";
    }


    if(!email.value.match(email_check))
    {
       e.preventDefault();
       email_error.innerHTML = "Valid Email is required";
    } else{
       email_error.innerHTML = "";
    }


    if(password.value.length <= 5){
        e.preventDefault();
        password_error.innerHTML = "Password must be more than 6 characters";
     }else{
       password_error.innerHTML = "";
     }
  
     if(password.value.length >= 20) {
        e.preventDefault();
        password_error.innerHTML = "Password cannot be more than 20 characters";
     }
  
     if(password.value === 'password'){
        e.preventDefault();
        password_error.innerHTML = "Password cannot be password";
      }



      if (isNaN(phone_number.value) || phone_number.value.length >= 10  || phone_number.value.length < 9) {
        e.preventDefault();
    
        if (isNaN(phone_number.value)) {
            phone_number_error.innerHTML = "Only numbers allowed";
        } else if (phone_number.value.length > 12) {
            phone_number_error.innerHTML = "Length should be less than 12 ";
        }  else if (phone_number.value.length < 10) {
            phone_number_error.innerHTML = "Length should be greater than 9";
        }else {
            phone_number_error.innerHTML = "";
        }
    }


        if(textarea.value=='') {
         textarea_error.innerHTML="Describe your experience !"
        } else {
            textarea_error.innerHTML="";
        }
    
        if (!checkbox.checked) {
           checkbox_error.innerHTML="You must agree to the terms first";
        }else{
            checkbox_error.innerHTML=""
        }

        if (
            name_error.innerHTML === "" &&
            lastname_error.innerHTML === "" &&
            email_error.innerHTML === "" &&
            password_error.innerHTML === "" &&
            phone_number_error.innerHTML === "" &&
            textarea_error.innerHTML === "" &&
            checkbox_error.innerHTML === "" &&
            job_error.innerHTML === ""
        ) {
            // All conditions are met, show the "ok" alert
            alert("The application was registered. We will contact you as soon as possible.Thank you");
            
        } else {
            // Some conditions are not met, prevent the form submission
            e.preventDefault();
        }
        

jobTitle()



});

function jobTitle() {
    if (job.value == "Job Title") {
        job_error.innerHTML = "Please select an option!";
        return false;
    }
    job_error.innerHTML = "";
    return true;
}
