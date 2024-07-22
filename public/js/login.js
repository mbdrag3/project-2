const loginFormHandler = async (event) => {
    event.preventDefault();
    const username = document.querySelector('#login-username')
    const password = document.querySelector('#login-password')
    
    if (username && password) {
        const response = await fetch(`/api/user/login`, {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type' : 'application/json' },

        
        });
        if (response.ok) {
            document.location.replace('/');
        }else {
            alert (response.statusText);
        }
    }
        
};
 
const signupFormHandler = async (event) => {
    event.preventDefault(); 
    const username = document.querySelector('#signup-username').value.trim();
    const password = document.querySelector('#signup-password').value.trim();

    if (username && password) {
        const response = await fetch (`/api/user/signup`,{
            method: 'POST',
            body: JSON.stringify({username, password }),
            headers: { 'Content-Type' : 'application/json' },

        });
        if (response.ok) {
            document.location.replace('/');

        } else {
            alert('Error signing up. Contact site owner.');
            console.log(`${username} & ${password}`)
        }
    }
}

document 
.querySelector('.login-form')
.addEventListener('submit', loginFormHandler);

document 
.querySelector('.signup-form')
.addEventListener('submit', signupFormHandler)