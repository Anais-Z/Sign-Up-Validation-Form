//created the variable which represents the document body
const body = document.body

const emailSection = document.querySelector(".the-email")
const passwordSection = document.querySelector(".the-password")
const confirmPassSection = document.querySelector(".confirm-password")

//created the variable which represents the message that the email was entered wrong
const emailError = document.createElement("p")

//created the variable which represents the message that the password was entered wrong
const passError = document.createElement("p")


//created the variable which represents the message that the re-enter password was entered wrong
const rePassError = document.createElement("p")



//created var for the email text input
const email = document.querySelector("input[name='email']")

//created var for the password text input
const password = document.querySelector("input[name='password']")

//created var for the re-enter password text input
const rePassword = document.querySelector("input[name='rePassword']")

//created var representing the submit button
const submit = document.querySelector(".submit")

const emailDiv = document.querySelector(".the-email")



const checkEmail = (email) => {

    //creating an array which has the characters from the email string
    const emailArray = [email.length];

    //copying the characters into the array
    for(var i = 0; i < email.length; i++){
        emailArray[i] = email.charAt(i)
    } 

    if(!emailArray.includes('@')){
        emailError.innerText = 'Include the "@" in email'
        return emailSection.append(emailError);
    }else if(emailArray.indexOf("@") === emailArray.length - 1){
        emailError.innerText = 'Include text after the "@" in email'
            return emailSection.append(emailError);
    }else{
        console.log("Email requirements passed");
    }
   
}

const checkPassword = (password) =>{
    const passArray = [password.length];

    for(var i = 0; i < password.length; i++){
        passArray[i] = password.charAt(i);
    }
    
    if (passArray.length < 8){
        passError.innerText = "Password requires at least 8 characters"
            return passwordSection.append(passError);
    }else{
        console.log('Password requirements passed')
    }
}

const reEnterPassword = (confirmedPass, password) => {
    if(confirmedPass !== password ){
        rePassError.innerText = "Passwords do not match"
            return confirmPassSection.append(rePassError)
    }else{
        console.log("Password confirmed")
    }
}

submit.addEventListener('click', () =>{
    checkEmail(email.value)
    checkPassword(password.value)
    reEnterPassword(rePassword.value, password.value)
})

