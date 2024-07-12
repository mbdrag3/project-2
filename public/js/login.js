const loginFormHandler = async (event) => {
    event.preventDefault();
    const username = document.querySelector('#username-login')
    const password = document.querySelector('#password-login')
    
    if (email && password) {
        const response = await fetch('', {
            method: 'POST',
            body: JSON.stringify({ username, password}),
            headers:{ 'Content-Type' : 'application/json'},
        
        });
        if (response.ok) {
            document.location.replace( );
        }else {
            alert (response.statusText);
        }
    }
        
};
 
const signupFormHandler = async (event) => {
    event.preventDefault(); 
    const name = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && password) {
        const response = await fetch ('',{
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: { 'Content-Type' : 'appliction/json'},
        });
        if (response.ok) {
            document.location.replace('/profile');

        } else {
            alert(response.statusText);
        }
    }
}

document 
.querySelector('.login-form')
.addEventListener('submit', loginFormHandler);

document 
.querySelector('.signup-form')
.addEventListener('submit', signupFormHandler)