const logins =[
    {
        username: 'ben',
        password: 'yes'
    },
    {
        username: 'josh',
        password: 'no'
    }
]

let testInfo = function(){
    let username = $('#username').val()
    let password = $('#password').val()
    
    for (var i=0; i<logins.length; i++) {
        if (username === logins[i].username && password === logins[i].password) {
            localStorage.setItem('username', username)
            return
        }
    }
    
    $('#error-message').removeClass('hidden')

    event.preventDefault()
}


$(document).ready(function() {
    
    $('#logInBtn').on('click', testInfo)

})
