let email = document.querySelector('.email');
let password = document.querySelector('.password');

document.form[0].addEventListener('submit',(e) =>{
    if(email.value!='' && password.value !=''){
        
    }
    e.preventDefault();
    e.append(email.value);
    e.append(password.value);
    fetch('backend\main\src\main\java\com\traveleasy\main\MainApplication.java', {
        body: credenziali,
        method: 'post'
    });

})