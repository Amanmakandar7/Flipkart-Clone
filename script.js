
const images=[
    "https://rukminim2.flixcart.com/fk-p-flap/2000/980/image/c6f134842b98dc08.jpg?q=60",
    "https://rukminim2.flixcart.com/fk-p-flap/2000/980/image/7b88fec080f67315.jpg?q=60",
    "https://rukminim2.flixcart.com/fk-p-flap/2000/980/image/5f233695e9c0d969.png?q=60",
    "https://rukminim2.flixcart.com/fk-p-flap/2000/980/image/098f15a9532f26d6.png?q=60",
    "https://rukminim2.flixcart.com/fk-p-flap/2000/980/image/7b88fec080f67315.jpg?q=60",
    "https://rukminim2.flixcart.com/fk-p-flap/2000/980/image/c6f134842b98dc08.jpg?q=60",
    "https://rukminim2.flixcart.com/fk-p-flap/2000/980/image/7b88fec080f67315.jpg?q=60",
    "https://rukminim2.flixcart.com/fk-p-flap/2000/980/image/5f233695e9c0d969.png?q=60",
    "https://rukminim2.flixcart.com/fk-p-flap/2000/980/image/098f15a9532f26d6.png?q=60",
    "https://rukminim2.flixcart.com/fk-p-flap/2000/980/image/7b88fec080f67315.jpg?q=60"
]


const suggest_images=[
    "shoe1.jpg",
    "shoe2.avif",
    "shoe33.png",
    "shoe4.webp",
    "shoe5.png",
    "shoe6.avif",
    "shoe7.png",
    "shoe8.png",

   ]

const Prod_img1=[
    "shoe11.png",
    "shoe22.png",
    "shoe3.webp",
    "shoe44.webp",
    "shoe55.png",
    "shoe66.png",
    "shoe77.jpg",
    "shoe88.jpg",
]

const fashion_images =[
    "https://rukminim2.flixcart.com/fk-p-flap/2100/3160/image/5e57380440c71805.png?q=60",
    "https://rukminim2.flixcart.com/fk-p-flap/2100/3160/image/c0ffdda4c2abb0b7.jpg?q=60",
    "https://rukminim2.flixcart.com/fk-p-flap/2100/3160/image/889f1b369ae663e2.png?q=60",
    "https://rukminim2.flixcart.com/fk-p-flap/1020/1540/image/5741e3a5942e22ee.jpg?q=60",
    "https://rukminim2.flixcart.com/fk-p-flap/2100/3160/image/6a1b3fe308a661e3.jpg?q=60"
]

const suggest_labels = [
    "JQR MIRAGE Running Shoes",
    "T-Shirts",
    "Watches",
    "Bags",
    "Jeans",
    "Jackets",
    "Sunglasses",
    "Caps",
    "Sneakers"
];
const prices = [
    "₹999",
    "₹3000",
    "₹2000",
    "₹4500",
    "₹9100",
    "₹830",
    "₹290",
    "₹230",
    "₹3000"
];

const cart =[];

const slide_cont = document.getElementById("slide-cont");
const sugg_img_div = document.getElementById("suggest-div");
const for_u = document.getElementById("for-you");

const fash = document.getElementById("fashion")

const cart_btn_top = document.getElementById("cart");
const cart_container = document.getElementById("cart-container");
const sugg_heading = document.getElementById("heading")
const cart_page = document.getElementById("cart-page");

const price_details = document.getElementById("price-detal")

const login_wrapper = document.querySelector(".login-wrapper");
const box = document.getElementById("box1");

const productDetail = document.getElementById("product-detail");
const detailImage = document.getElementById("detail-image");
const detailName = document.getElementById("detail-name");
const detailPrice = document.getElementById("detail-price");
const product_img_div = document.getElementById("prod_img_div")

const collage_container = document.createElement("div");
product_img_div.append(collage_container);

const order_popup = document.getElementById("order-popup");
const order_message = document.getElementById("order-message");
const close_order_popup =
    document.getElementById("close-order-popup");

const detailCartBtn = document.getElementById("detail-cart-btn");
const detailBuyBtn = document.getElementById("detail-buy-btn");

// function openProduct(index) {

//     slide_cont.style.display = "none";
//     sugg_heading.style.display = "none";
//     sugg_img_div.style.display = "none";
//     productDetail.style.display = "flex";

//     detailImage.src = suggest_images[index];
//     detailName.textContent = suggest_labels[index];
//     detailPrice.textContent = prices[index];

//     detailImage.classList.add("detalied-img");
//     detailName.classList.add("detail-name")

//     // old collage images cleared
//     collage_container.innerHTML = "";

//     const collage_img_div = document.createElement("div");
//     const collage_img1 = document.createElement("img");

//     collage_img1.src = Prod_img1[index];
//     collage_img1.classList.add("coll-img1")
    

//     collage_img_div.append(collage_img1);
//     collage_container.append(collage_img_div);


//     detailCartBtn.onclick = () => {

//         const product = {
//             image: suggest_images[index],
//             name: suggest_labels[index],
//             price: prices[index]
//         };

//         cart.push(product);

//         console.log(cart);
//     };

    
    

//     history.pushState(
//         { productId: index },
//         "",
//         `?product=${index}`
//     );
// }
function openProduct(index) {

    // =========================
    // HIDE FOR YOU PAGE
    // =========================

    slide_cont.style.display = "none";
    sugg_heading.style.display = "none";
    sugg_img_div.style.display = "none";


    // =========================
    // SHOW PRODUCT DETAIL
    // =========================

    productDetail.style.display = "flex";


    // =========================
    // PRODUCT DETAILS
    // =========================

    detailImage.src = suggest_images[index];

    detailName.textContent = suggest_labels[index];

    detailPrice.textContent = prices[index];


    // Classes
    detailImage.classList.add("detalied-img");

    detailName.classList.add("detail-name");


    // =========================
    // CLEAR OLD COLLAGE
    // =========================

    collage_container.innerHTML = "";


    // =========================
    // CREATE COLLAGE IMAGE
    // =========================

    const collage_img_div =
        document.createElement("div");

    const collage_img1 =
        document.createElement("img");


    collage_img1.src =
        Prod_img1[index];

    collage_img1.classList.add(
        "coll-img1"
    );


    collage_img_div.append(
        collage_img1
    );

    collage_container.append(
        collage_img_div
    );


    // =========================
    // ADD TO CART BUTTON
    // =========================

    detailCartBtn.onclick = () => {

        const product = {

            image: suggest_images[index],

            name: suggest_labels[index],

            price: prices[index]

        };


        cart.push(product);

        console.log(cart);

    };


    // =========================
    // BUY NOW BUTTON
    // =========================

    detailBuyBtn.onclick = () => {

        const product = {

            image: suggest_images[index],

            name: suggest_labels[index],

            price: prices[index]

        };


        // Add current product to cart
        cart.push(product);


        console.log(cart);


        // =========================
        // HIDE PRODUCT DETAIL
        // =========================

        productDetail.style.display = "none";


        // =========================
        // HIDE FOR YOU
        // =========================

        slide_cont.style.display = "none";

        sugg_heading.style.display = "none";

        sugg_img_div.style.display = "none";


        // =========================
        // SHOW CART
        // =========================

        cart_page.style.display = "flex";


        // =========================
        // CLEAR OLD CART DISPLAY
        // =========================

        cart_container.innerHTML = "";


        // =========================
        // DISPLAY CART PRODUCTS
        // =========================

        cart.forEach((product) => {

            const card =
                document.createElement("div");

            card.classList.add("cards");


            const image =
                document.createElement("img");

            image.src = product.image;

            image.classList.add("img");


            const name =
                document.createElement("p");

            name.textContent = product.name;

            name.classList.add("name");


            const price =
                document.createElement("p");

            price.textContent = product.price;

            price.classList.add("price");


            const label_price =
                document.createElement("div");


            label_price.append(
                name,
                price
            );


            card.append(
                image,
                label_price
            );


            cart_container.append(
                card
            );

        });

    };


    // =========================
    // BROWSER HISTORY
    // =========================

    history.pushState(
        { productId: index },
        "",
        `?product=${index}`
    );

}



let sliderStarted = false;


// function showForYou() {

//     // Don't create everything again
//     if (sliderStarted) {
//         return;
//     }

//     sliderStarted = true;

    
//     // CREATE SLIDER IMAGES
    

//     images.forEach((img) => {

//         const image = document.createElement("img");

//         image.src = img;
//         image.classList.add("slide-img");

//         slide_cont.append(image);
//     });


    
//     // START SLIDER
    

//     let index = 0;

//     const slider = setInterval(() => {

//         index++;

//         slide_cont.style.transform =
//             `translateX(-${index * 500}px)`;

//         if (index >= images.length - 1) {
//             clearInterval(slider);
//         }

//     }, 2500);


    
//     // CREATE PRODUCTS
    

//     suggest_images.forEach((img, index) => {

//         // Main card
//         const card = document.createElement("div");
//         card.classList.add("card");


//         // Product image
//         const image = document.createElement("img");

//         image.src = img;
//         image.classList.add("img");


//         // Label + Price container
//         const label_price_div = document.createElement("div");

//         label_price_div.classList.add("label-price-div");


//         // Product label
//         const label = document.createElement("p");

//         label.textContent = suggest_labels[index];


//         // Product price
//         const price = document.createElement("p");

//         price.textContent = prices[index];


//         // Button container
//         const btn_div = document.createElement("div");


//         // Add to Cart button
//         const cart_btn = document.createElement("button");

//         cart_btn.classList.add("cart-btn");
//         cart_btn.textContent = "Add to Cart";


//         // Label + Price
//         label_price_div.append(label);
//         label_price_div.append(price);


//         // Button
//         btn_div.append(cart_btn);


//         // Label/Price + Button
//         const label_price_btn_div = document.createElement("div");

//         label_price_btn_div.classList.add(
//             "label-price-btn-div"
//         );

//         label_price_btn_div.append(label_price_div);
//         label_price_btn_div.append(btn_div);


//         // Image + Label/Price/Button
//         card.append(image);
//         card.append(label_price_btn_div);


//         // Card inside main container
//         sugg_img_div.append(card);


        
//         // ADD TO CART LOGIC
        

//         cart_btn.addEventListener("click", () => {

//             const product = {

//                 image: suggest_images[index],

//                 name: suggest_labels[index],

//                 price: prices[index]

//             };

//             cart.push(product);

//             console.log(cart);

//         });


        
//         // PRODUCT DETAIL PAGE
        

//         image.addEventListener("click", () => {

//             openProduct(index);

//         });

//     });


   
//     // CART BUTTON
    

//     cart_btn_top.addEventListener("click", () => {


//         // CLEAR HOMEPAGE CONTENT
//         productDetail.style.display = "none";

//         cart_container.innerHTML = "";

//         slide_cont.innerHTML = "";

//         sugg_img_div.innerHTML = "";

//         sugg_heading.textContent = "";


//         // Show cart page
//         cart_page.style.display = "flex";


//         // CART PRODUCTS

//         cart.forEach((product) => {

//             const card = document.createElement("div");


//             const image = document.createElement("img");

//             const name = document.createElement("p");

//             const price = document.createElement("p");


//             const label_price = document.createElement("div");


//             // Product data
//             image.src = product.image;

//             name.textContent = product.name;

//             price.textContent = product.price;


//             // Add name + price
//             label_price.append(name);

//             label_price.append(price);


//             // Classes
//             card.classList.add("cards");

//             image.classList.add("img");

//             name.classList.add("name");

//             price.classList.add("price");


//             // Card structure
//             card.append(image);

//             card.append(label_price);


//             // Add card to cart
//             cart_container.append(card);

//         });


        
//         // PRICE DETAILS
        

//         price_details.innerHTML = "";


//         // CALCULATE TOTAL PRICE

//         let totalPrice = 0;


//         cart.forEach((product) => {

//             const price = parseInt(
//                 String(product.price).replace(/\D/g, ""),
//                 10
//             ) || 0;

//             totalPrice += price;

//         });


//         // PRICE DETAILS HEADING

//         const heading = document.createElement("h3");

//         heading.textContent = "Price Details";


//         // ITEM PRICE

//         const item_price = document.createElement("p");

//         item_price.textContent =
//             `Price (${cart.length} items) ₹${totalPrice}`;


//         // DELIVERY CHARGES

//         const delivery = document.createElement("p");

//         delivery.textContent =
//             "Delivery Charges ₹40";


//         // TOTAL AMOUNT

//         const total = document.createElement("p");

//         total.textContent =
//             `Total Amount ₹${totalPrice + 40}`;


        
//         // PAYMENT METHOD
        

//         const payment_heading = document.createElement("h4");

//         payment_heading.textContent = "Payment Method";


//         const payment_div = document.createElement("div");

//         payment_div.classList.add("payment-method");


//         // CASH ON DELIVERY

//         const cod_label = document.createElement("label");


//         const cod_radio = document.createElement("input");

//         cod_radio.type = "radio";

//         cod_radio.name = "payment";

//         cod_radio.value = "cod";


//         cod_label.append(cod_radio);

//         cod_label.append(" Cash on Delivery");


//         // UPI

//         const upi_label = document.createElement("label");


//         const upi_radio = document.createElement("input");

//         upi_radio.type = "radio";

//         upi_radio.name = "payment";

//         upi_radio.value = "upi";


//         upi_label.append(upi_radio);

//         upi_label.append(" UPI");


//         // Add payment options
//         payment_div.append(cod_label);

//         payment_div.append(upi_label);


        
//         // PLACE ORDER BUTTON
        

//         const place_order_btn = document.createElement("button");

//         place_order_btn.textContent = "Place Order";

//         place_order_btn.classList.add("place-order-btn");


        
//         // APPEND PRICE DETAILS
        

//         price_details.append(

//             heading,

//             item_price,

//             delivery,

//             total,

//             payment_heading,

//             payment_div,

//             place_order_btn

//         );


        
//         // PLACE ORDER LOGIC
        

//         place_order_btn.addEventListener("click", () => {


//             const selected_payment =
//                 document.querySelector(
//                     'input[name="payment"]:checked'
//                 );


//             // No payment selected
//             if (!selected_payment) {

//                 alert("Please select a payment method");

//                 return;

//             }


//             // COD
//             if (selected_payment.value === "cod") {

//                 order_message.textContent =
//                 `Payment: Cash on Delivery | Amount: ₹${totalPrice + 40}`;

//                 order_popup.style.display = "flex";

//             }


//             // UPI
//             if (selected_payment.value === "upi") {

//                 order_message.textContent =
//             `Payment: UPI | Amount: ₹${totalPrice + 40}`;

//             order_popup.style.display = "flex";

//             }

//                close_order_popup.addEventListener("click", () => {

//             order_popup.style.display = "none";

//             });

//         });

     
//     });

// }


//login dropdown

function showForYou() {

    // Agar already create ho chuka hai,
    // to dobara create mat karo
    if (sliderStarted) {
        return;
    }

    sliderStarted = true;


    
    // CREATE SLIDER
    

    images.forEach((img) => {

        const image = document.createElement("img");

        image.src = img;
        image.classList.add("slide-img");

        slide_cont.append(image);
    });


    
    // START SLIDER
    

    let index = 0;

    const slider = setInterval(() => {

        index++;

        slide_cont.style.transform =
            `translateX(-${index * 500}px)`;

        if (index >= images.length - 1) {
            clearInterval(slider);
        }

    }, 2500);


    
    // CREATE PRODUCTS
    

    suggest_images.forEach((img, index) => {

        const card = document.createElement("div");
        card.classList.add("card");


        // Product image
        const image = document.createElement("img");

        image.src = img;
        image.classList.add("img");


        // Label + price
        const label_price_div = document.createElement("div");

        label_price_div.classList.add("label-price-div");


        const label = document.createElement("p");

        label.textContent = suggest_labels[index];


        const price = document.createElement("p");

        price.textContent = prices[index];


        label_price_div.append(label, price);


        
        // ADD TO CART BUTTON
        

        const btn_div = document.createElement("div");

        const cart_btn = document.createElement("button");

        cart_btn.classList.add("cart-btn");

        cart_btn.textContent = "Add to Cart";

        btn_div.append(cart_btn);


        // Label + Price + Button
        const label_price_btn_div =
            document.createElement("div");

        label_price_btn_div.classList.add(
            "label-price-btn-div"
        );

        label_price_btn_div.append(
            label_price_div,
            btn_div
        );


        // Complete card
        card.append(
            image,
            label_price_btn_div
        );

        sugg_img_div.append(card);


        
        // ADD TO CART LOGIC
        

        cart_btn.addEventListener("click", () => {

            const product = {

                image: suggest_images[index],

                name: suggest_labels[index],

                price: prices[index]

            };

            cart.push(product);

            console.log(cart);

        });


        
        // PRODUCT DETAIL
        

        image.addEventListener("click", () => {

            openProduct(index);

        });

    });


    
    // TOP CART BUTTON
    

    cart_btn_top.addEventListener("click", () => {

        // Hide For You
        slide_cont.style.display = "none";

        sugg_heading.style.display = "none";

        sugg_img_div.style.display = "none";


        // Hide Product Detail
        productDetail.style.display = "none";


        // Show Cart
        cart_page.style.display = "flex";


        // Clear ONLY cart products
        cart_container.innerHTML = "";


        
        // CART PRODUCTS
        

        cart.forEach((product) => {

            const card = document.createElement("div");

            card.classList.add("cards");


            const image = document.createElement("img");

            image.src = product.image;

            image.classList.add("img");


            const name = document.createElement("p");

            name.textContent = product.name;

            name.classList.add("name");


            const price = document.createElement("p");

            price.textContent = product.price;

            price.classList.add("price");


            const label_price =
                document.createElement("div");


            label_price.append(
                name,
                price
            );


            card.append(
                image,
                label_price
            );


            cart_container.append(card);

        });


        
        // PRICE DETAILS
        

        price_details.innerHTML = "";


        let totalPrice = 0;


        cart.forEach((product) => {

            const price = parseInt(
                String(product.price)
                    .replace(/\D/g, ""),
                10
            ) || 0;

            totalPrice += price;

        });


        // Heading
        const heading =
            document.createElement("h3");

        heading.textContent =
            "Price Details";


        // Item price
        const item_price =
            document.createElement("p");

        item_price.textContent =
            `Price (${cart.length} items) ₹${totalPrice}`;


        // Delivery
        const delivery =
            document.createElement("p");

        delivery.textContent =
            "Delivery Charges ₹40";


        // Total
        const total =
            document.createElement("p");

        total.textContent =
            `Total Amount ₹${totalPrice + 40}`;


        
        // PAYMENT METHOD
        

        const payment_heading =
            document.createElement("h4");

        payment_heading.textContent =
            "Payment Method";


        const payment_div =
            document.createElement("div");

        payment_div.classList.add(
            "payment-method"
        );


        // COD
        const cod_label =
            document.createElement("label");

        const cod_radio =
            document.createElement("input");

        cod_radio.type = "radio";

        cod_radio.name = "payment";

        cod_radio.value = "cod";


        cod_label.append(
            cod_radio,
            " Cash on Delivery"
        );


        // UPI
        const upi_label =
            document.createElement("label");

        const upi_radio =
            document.createElement("input");

        upi_radio.type = "radio";

        upi_radio.name = "payment";

        upi_radio.value = "upi";


        upi_label.append(
            upi_radio,
            " UPI"
        );


        payment_div.append(
            cod_label,
            upi_label
        );


        
        // PLACE ORDER
        

        const place_order_btn =
            document.createElement("button");

        place_order_btn.textContent =
            "Place Order";

        place_order_btn.classList.add(
            "place-order-btn"
        );


        price_details.append(
            heading,
            item_price,
            delivery,
            total,
            payment_heading,
            payment_div,
            place_order_btn
        );


        
        // PLACE ORDER LOGIC
        

        place_order_btn.addEventListener(
            "click",
            () => {

                const selected_payment =
                    document.querySelector(
                        'input[name="payment"]:checked'
                    );


                // No payment selected
                if (!selected_payment) {
                    alert("please select a payment method")

        
                    return;
                }


                // COD
                if (
                    selected_payment.value === "cod"
                ) {

                    order_message.textContent =
                        `Payment: Cash on Delivery | Amount: ₹${totalPrice + 40}`;

                    order_popup.style.display =
                        "flex";
                }


                // UPI
                if (
                    selected_payment.value === "upi"
                ) {

                    order_message.textContent =
                        `Payment: UPI | Amount: ₹${totalPrice + 40}`;

                    order_popup.style.display =
                        "flex";
                }
                close_order_popup.addEventListener("click", () => {

                order_popup.style.display = "none";

                });

            }
        );

    });

}
login_wrapper.addEventListener("mouseenter", () => {
    box.classList.add("box1");
});

login_wrapper.addEventListener("mouseleave", () => {
    box.classList.remove("box1");
});




for_u.addEventListener("click", () => {

   

    cart_page.style.display = "none";


    
    // HIDE PRODUCT DETAIL
    

    productDetail.style.display = "none";


    
    // SHOW FOR YOU
    

    slide_cont.style.display = "flex";

    sugg_heading.style.display = "block";

    sugg_img_div.style.display = "flex";


    
    // SHOW EXISTING CONTENT
    

    showForYou();

});

window.addEventListener("popstate", () => {

    productDetail.style.display = "none";
    sugg_img_div.style.display = "flex";
    slide_cont.style.display = "flex"


});

showForYou();



fash.addEventListener("click", () => {

    // slide_cont.innerHTML = "";
    sugg_img_div.innerHTML = "";

    fashion_images.forEach((img) => {

        const image = document.createElement("img");

        image.src = img;
        image.classList.add("img");

        sugg_img_div.append(image);
    });

});



