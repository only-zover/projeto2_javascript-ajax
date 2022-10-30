const bt = document.querySelector('#bt')
const user = document.querySelector('#user')
const password = document.querySelector('#password')

bt.addEventListener('click', () => {
    let list = {
        "email": user.value,
        "password": password.value
    }

    list = JSON.stringify(list)

    var xhr = new XMLHttpRequest()

        xhr.open("POST", "https://reqres.in/api/login", true)
        xhr.setRequestHeader("Content-type", "application/json")
        xhr.send(list)
        xhr.onreadystatechange = function() {
  
        if (xhr.readyState == 4 && xhr.status == 200) {
            let data = xhr.responseText;
            let token = data.split('"')[3]

            localStorage.setItem('token', token)
            window.location.href = 'search.html'
            }
        }
})