

function appendCart(el) {
    let menu = document.getElementById("addCart")
    menu.innerHTML = ""
    for (let i = 0; i < el.length; i++){
        let box = document.createElement("div")
        let img = document.createElement('img')
        img.src = el[i].image
        let h3price = document.createElement("h3")
        h3price.innerHTML = `Price is ${el[i].price}`
        let h4dis = document.createElement('h4')
        h4dis.innerHTML = `Discription: ${el[i].discription}`
        let h4time = document.createElement('h4')
        h4time.innerHTML = el[i].time
        menu.append(box)
        box.append(img,h3price,h4dis,h4time)
    }
}

let el = localStorage.getItem('cart')
el = JSON.parse(el)
appendCart(el)

function submitt() {
    let arr = ["Your order is accepted,", "Your order is being cooked,", "Your order is ready,","Order out for delivery","Order delivered"]
    let i = 0;
    if (i == 0) {
        var set =  setInterval(function () {
            alert(arr[i])
            i++
            if (i == 5) {
                clearInterval(set)
            }
    },3000)
    }
}
submitt()