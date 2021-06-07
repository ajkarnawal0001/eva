
const menu = [
    {
        image: "https://i.ndtvimg.com/i/2018-01/radha-ballavi_620x333_81517311731.jpg",
        price: 630,
        discription: "famous Chole Bhature",
        time:"40 Min"
    },
    {
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/mexican-chicken-burger_1-b5cca6f.jpg?quality=90&resize=440%2C400",
        price: 330,
        discription: "Burger",
        time:"10 min"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe0wyL-v7l-jktpGk--_AzbVFiuGBrx1xc1g&usqp=CAU",
        price:990,
        discription: "Chicken Lolipop",
        time:"20 min"
    },
    {
        image: "https://assets.traveltriangle.com/blog/wp-content/uploads/2015/09/Lahem-Bl-Ajin.jpg",
        price:200,
        discription: "Samosa",
        time:"15 min"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcT8CSF5X8CvUNmgAOmVEANlFJS0v1tlkT5g&usqp=CAU",
        price: 90,
        discription: "Momos",
        time:"5 min"
    },
    {
        image: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/02/Khandvi.jpg",
        price:450,
        discription: "Basen Roll",
        time:"50 min"
    },
    {
        image: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/best_and_worst_italian_dishes_slideshow/650x350_best_and_worst_italian_dishes_slideshow.jpg",
        price:170,
        discription: "Noodles",
        time:"10 min"
    },
    {
        image: "https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2558%2Ftrend20190904054432.jpg",
        price:300,
        discription: "Kaua Briyani",
        time:"30 Min"
    },
    {
        image: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/umar/Paneer_Sizzler_in_Chilli_Garlic_Sauce_with_Rice.jpg",
        price:600,
        discription: "Sizzler Veg",
        time:"30 min"
    },
    {
        image: "https://www.archanaskitchen.com/images/archanaskitchen/0-Affiliate-Articles/Sizzling_dragon_chicken_sizzler.jpg",
        price:700,
        discription: "Chicken Sizzler",
        time:'80 min'
    },
    {
        image: "https://vaya.in/recipes/wp-content/uploads/2019/01/Chicken-Sizzler.jpg",
        price:850,
        discription: "Special Sizzler",
        time:"10 Min"
    },
    {
        image: "https://i.pinimg.com/originals/f1/a8/ed/f1a8ed179f801da897464fa836957075.jpg",
        price:15,
        discription: "Masala tea",
        time:"2 min"
    }
]
let arr = localStorage.getItem("dishes")
arr = JSON.parse(arr)
if (arr == null) {
    localStorage.setItem("dishes", JSON.stringify(menu))
}

function appendDish(info) {
    let menu = document.getElementById("menu")
    menu.innerHTML = ""
    for (let i = 0; i < info.length; i++){
        let box = document.createElement("div")
        let img = document.createElement('img')
        img.src = info[i].image
        let h3price = document.createElement("h3")
        h3price.innerHTML = `Price is ${info[i].price}`
        let h4dis = document.createElement('h4')
        h4dis.innerHTML = `Discription: ${info[i].discription}`
        let h4time = document.createElement('h4')
        h4time.innerHTML = info[i].time
        let btn = document.createElement('button')
        btn.innerText = "add to cart"
        btn.style.display = 'block'
        btn.onclick = function () {
            addcart(info)
        }
        menu.append(box)
        menu.append(btn)
        box.append(img,h3price,h4dis,h4time)
    }
}

let info = localStorage.getItem('dishes')
info = JSON.parse(info)
appendDish(info)

function addcart(el) {
    let cart;
    let arr2;
    arr2 = localStorage.getItem('cart')
    
    if (cart == null) {
        arr2=[]
    } else {
        // arr2 = localStorage.getItem('cart')
        arr2 = JSON.parse(arr2)
    }
    arr2 = JSON.parse(el)
    console.log(arr2)
}

function showCart() {
    window.location.href="cart.html"
}