function submitInfo(e) {
    e.preventDefault()
    const form = document.getElementById('form')
    const name = form.name.value
    const phone = form.phone.value
    const email = form.email.value
    const password = form.password.value
    // console.log(name,phone,email,password)
    let userDetail = {
        name,
        phone,
        email,
        password
    }
    if (name == "" && phone == "" && email == "" && password == ""){
        alert("Please Fill all the detail")
    } else {
        let arr;
        arr = localStorage.getItem('userDetail')
        if (arr == null) {
            arr = []
            arr.push(userDetail)
            localStorage.setItem('userDetail', JSON.stringify(arr))
        } else {
            arr = localStorage.getItem('userDetail')
            arr = JSON.parse(arr)
            var temp = 0
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].email == email) {
                    temp++
                    break
                }
            }
        }
        if (temp == 0) {
            arr.push(userDetail)
            localStorage.setItem('userDetail', JSON.stringify(arr))
        } else {
            alert('User already Exist')
        }
    }
}