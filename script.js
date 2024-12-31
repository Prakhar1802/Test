let phone = document.querySelector(".contact-details");
document.querySelector("#phone").onclick = () => {
    phone.classList.toggle("active");
    cart_box.classList.remove("active");
    login_box.classList.remove("active");
    navbar.classList.remove("active");
    more_box.classList.remove("active");
}
// Shopping-cart slider

let cart_box = document.querySelector(".shopping-cart");
document.querySelector("#shopping").onclick = () => {
    cart_box.classList.toggle("active");
    phone.classList.remove("active");
    login_box.classList.remove("active");
    navbar.classList.remove("active");
    more_box.classList.remove("active");
}

// login-form slider

let login_box = document.querySelector(".login-form");
document.querySelector("#login").onclick = () => {
    login_box.classList.toggle("active");
    phone.classList.remove("active");
    cart_box.classList.remove("active");
    navbar.classList.remove("active");
    more_box.classList.remove("active");
}

// mobile view slider code
let navbar = document.querySelector(".navbar");
document.querySelector("#menu-bar").onclick = () => {
    navbar.classList.toggle("active");
    phone.classList.remove("active");
    cart_box.classList.remove("active");
    login_box.classList.remove("active");
    more_box.classList.remove("active");
}

window.onscroll = () => {
    phone.classList.remove("active");
    cart_box.classList.remove("active");
    login_box.classList.remove("active");
    navbar.classList.remove("active")
    more_box.classList.remove("active");
}

// more slider
let more_box = document.querySelector(".more");
document.querySelector("#read-1").onclick = () => {
    more_box.classList.toggle("active");
    phone.classList.remove("active");
    cart_box.classList.remove("active");
    login_box.classList.remove("active");
    navbar.classList.remove("active")
}
document.querySelector("#cross-1").onclick = () => {
    more_box.classList.remove("active");
    phone.classList.remove("active");
    cart_box.classList.remove("active");
    login_box.classList.remove("active");
    navbar.classList.remove("active")
}

let more_box_1 = document.querySelector(".more");
document.querySelector("#read-2").onclick = () => {
    more_box_1.classList.toggle("active");
    phone.classList.remove("active");
    cart_box.classList.remove("active");
    login_box.classList.remove("active");
    navbar.classList.remove("active")
}
document.querySelector("#cross-2").onclick = () => {
    more_box_1.classList.remove("active");
    phone.classList.remove("active");
    cart_box.classList.remove("active");
    login_box.classList.remove("active");
    navbar.classList.remove("active")
}
let more_box_2 = document.querySelector(".more");
document.querySelector("#read-3").onclick = () => {
    more_box_2.classList.toggle("active");
    phone.classList.remove("active");
    cart_box.classList.remove("active");
    login_box.classList.remove("active");
    navbar.classList.remove("active")
}
document.querySelector("#cross-3").onclick = () => {
    more_box_2.classList.remove("active");
    phone.classList.remove("active");
    cart_box.classList.remove("active");
    login_box.classList.remove("active");
    navbar.classList.remove("active")
}

var counter = 1
setInterval(function () {
    document.getElementById("radio" + counter).checked = true;
    counter++
    if (counter > 4) {
        counter = 1

    }
}, 5000);

let product = {
    data: [
        {
            id: 1,
            name: "Bag",
            category: "arrival",
            price: 20,
            img: "Media/Bag1.png",
            quantity: 1
        },
        {
            id: 2,
            name: "Bottle",
            category: "arrival",
            price: 22,
            img: "Media/Bottle1.jpg",
            quantity: 1
        },
        {
            id: 3,
            name: "Cup",
            category: "arrival",
            price: 10,
            img: "Media/Cup1.jpg",
            quantity: 1
        },
        {
            id: 4,
            name: "Tshirt",
            category: "arrival",
            price: 18,
            img: "Media/Tshirt1.jpg",
            quantity: 1
        },
        {
            id: 5,
            name: "Bag",
            category: "arrival",
            price: 15,
            img: "Media/Bag1.png",
            quantity: 1
        },
        {
            id: 6,
            name: "Bag",
            category: "arrival",
            price: 15,
            img: "Media/Bag1.png",
            quantity: 1
        }
    ]
}


function displayitems() {
    var arrival = document.getElementById("arrival");

    const arrival_data = product.data.filter(item => item.category == "arrival")
    // console.log(vegitable_data);



    arrival_data.map(item => {
        var wrapper = document.createElement("div");
        wrapper.setAttribute("class", "wrapper");

        var swiper_slide = document.createElement("div");
        swiper_slide.setAttribute("class", "box");

        var image = document.createElement("img");
        image.src = item.img;

        var h1 = document.createElement("h1");
        h1.innerText = item.name;

        var price = document.createElement("div");
        price.setAttribute("class", "price");
        price.innerText = "₹" + item.price + ".00/-"

        var rating_star = document.createElement("div");
        rating_star.setAttribute("class", "stars");

        var star1 = document.createElement('i');
        star1.setAttribute("id", "star1");
        star1.setAttribute("class", "fa fa-star");

        var star2 = document.createElement('i');
        star2.setAttribute("id", "star2");
        star2.setAttribute("class", "fa fa-star");

        var star3 = document.createElement('i');
        star3.setAttribute("id", "star3");
        star3.setAttribute("class", "fa fa-star");

        var star4 = document.createElement('i');
        star4.setAttribute("id", "star4");
        star4.setAttribute("class", "fa fa-star");

        var star5 = document.createElement('i');
        star5.setAttribute("id", "star5");
        star5.setAttribute("class", "fa fa-star-half-empty");

        rating_star.appendChild(star1);
        rating_star.appendChild(star2);
        rating_star.appendChild(star3);
        rating_star.appendChild(star4);
        rating_star.appendChild(star5);

        var cart = document.createElement("a");
        cart.setAttribute("class", "btn add-to-cart");
        cart.setAttribute("id", item.id)
        cart.href = "#products"
        cart.innerText = "Add"

        swiper_slide.appendChild(image);
        swiper_slide.appendChild(h1);
        swiper_slide.appendChild(price);
        swiper_slide.appendChild(rating_star);
        swiper_slide.appendChild(cart);

        wrapper.appendChild(swiper_slide);
        arrival.appendChild(wrapper);

    })
}

displayitems()

// add to cart script

document.querySelectorAll('.add-to-cart').forEach(item => {
    item.addEventListener('click', addToCart);
})

var cartdata = [];
function addToCart() {
    var itemtoadd = this.previousSibling.previousSibling.previousSibling.innerText;
    var itemobj = product.data.find(element => element.name == itemtoadd);

    var index = cartdata.indexOf(itemobj);
    if (index === -1) {
        cartdata = [...cartdata, itemobj];
    }
    else if (index > -1) {
        alert("Added in Cart")
    }

    document.getElementById("shopping").innerText = " " + cartdata.length;
    total_amount();
    cart_item();

}

// cart item script
function cart_item() {
    var tablebody = document.getElementById("table_body");
    tablebody.innerHTML = "";

    cartdata.map(item => {
        var tablerow = document.createElement("tr");
        var rowdata1 = document.createElement("td");
        var img = document.createElement("img");
        img.src = item.img;
        rowdata1.appendChild(img);

        var rowdata2 = document.createElement("td");
        rowdata2.innerText = item.name;

        var rowdata3 = document.createElement("td");
        var btn1 = document.createElement("button");
        btn1.setAttribute("class", "btn dec_btn");
        btn1.innerHTML = "-";
        var span = document.createElement("span");
        span.innerText = item.quantity;

        var btn2 = document.createElement("button");
        btn2.setAttribute("class", "btn inc_btn");
        btn2.innerHTML = "+";

        rowdata3.appendChild(btn1);
        rowdata3.appendChild(span);
        rowdata3.appendChild(btn2);

        var rowdata4 = document.createElement("td");
        rowdata4.innerText = item.price;

        var rowdata5 = document.createElement("td");
        var trash = document.createElement("i");
        trash.setAttribute("class", "fa fa-trash");
        rowdata5.appendChild(trash);

        tablerow.appendChild(rowdata1);
        tablerow.appendChild(rowdata2);
        tablerow.appendChild(rowdata3);
        tablerow.appendChild(rowdata4);
        tablerow.appendChild(rowdata5);

        tablebody.appendChild(tablerow);
    })
    document.querySelectorAll(".inc_btn").forEach(item => {
        item.addEventListener("click", increaseitem);
    })
    document.querySelectorAll(".dec_btn").forEach(item => {
        item.addEventListener("click", decreaseitem);
    })
}

var curr_price = 0;

function increaseitem() {
    let item_to_inc = this.parentNode.previousSibling.innerText;
    console.log(item_to_inc);

    var inc_obj = cartdata.find(element => element.name == item_to_inc);
    inc_obj.quantity = inc_obj.quantity + 1;

    curr_price = (inc_obj.price * inc_obj.quantity - inc_obj.price * (inc_obj.quantity - 1)) / (inc_obj.quantity - 1);

    inc_obj.price = curr_price * inc_obj.quantity;
    total_amount();
    cart_item();
}

var flag = false;

function decreaseitem() {
    let item_to_dec = this.parentNode.previousSibling.innerText;

    let dec_obj = cartdata.find(element => element.name == item_to_dec);
    let ind = cartdata.indexOf(dec_obj);
    if (dec_obj.quantity > 1) {
        curr_price = (dec_obj.price * dec_obj.quantity - dec_obj.price * (dec_obj.quantity - 1)) / (dec_obj.quantity);
        dec_obj.quantity -= 1;
        dec_obj.price = curr_price * dec_obj.quantity;
    }
    else {
        cartdata.splice(ind, 1);
        document.getElementById("shopping").innerHTML = " " + cartdata.length;
        if (cartdata.length < 1 && flag) {
            flag = false;
            alert("Currently no item in cart");
        }
    }
    total_amount()
    cart_item();
}

function total_amount() {
    var sum = 0;
    cartdata.map(item => {
        sum += item.price;
    })
    document.getElementById("total_item").innerText = "Total item : " + cartdata.length;
    document.getElementById("total_price").innerText = "Total price : ₹" + sum;
}

