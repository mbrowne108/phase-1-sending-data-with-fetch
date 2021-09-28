const userData = {
    name: 'Steve',
    email: 'steve@steve.com'
}

const configObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(userData)
}

function submitData(name, email) {
    return fetch('http://localhost:3000/users', configObj)
        .then(res => res.json())
        .then(data => document.body.innerHTML = data.id)
        .catch(function (error) {
            alert("Unauthorized Access");
            document.body.innerHTML = error.message;
          })
}