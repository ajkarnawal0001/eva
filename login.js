function span() {
    document.getElementById("id01").style.display='none'
}
function checkInfo(e) {
    e.preventDefault()
    const form = document.getElementById('form')
    const email = form.email.value
    const password = form.password.value
    // console.log(name,phone,email,password)
    let userDetail = {
        email,
        password
    }
    if (email == "" && password == ""){
        alert("Please Fill all the detail")
    } else {
        let arr = localStorage.getItem('userDetail')
        arr = JSON.parse(arr)
        for (let i = 0; i < arr.length; i++){
            if (arr[i].email == email && arr[i].password == password) {
                window.location.href="menu.html"
            }
        }
    }
}