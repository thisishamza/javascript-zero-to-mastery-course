const cart = ["shoes", "shirt", "hat"];

const promise = createOrder(cart);
console.log(promise)
promise.then(function (orderId){
    console.log(orderId)
    proceedToPayment(orderId);
}).catch(function (err){
    console.log(err.message);
    // handleError(err);
})
function createOrder(cart){
    const pr = new Promise(function(resolve, reject){
        //createOrder
        //validateCart
        //orderId
        if (!validateCard(cart)) {
            const err = new Error("Invalid cart");
            reject(err);
        }
        // logic to create order
        const orderId = "12345";
        if(orderId){
            setTimeout(function (){
                resolve(orderId);
            }, 5000);
        }

    });
    return pr;
}

function validateCard(cart) {
    return false; // Assume the cart is valid for this example
}


// now promise chaining
// whatever we are chaining that should be returned from the previous promise.

const cart = ["shoes", "shirt", "hat"];

createOrder(cart).then(function (orderId){
    console.log(orderId);
    return orderId;
}).then(function(orderId){
  return proceedToPayment(orderId);
}).then(function (paymentInfo){
    console.log(paymentInfo);
}).catch(function (err){
    console.log(err.message);
    // handleError(err);
}).then(function(){
    console.log("this will always execute");
})
function createOrder(cart){
    const pr = new Promise(function(resolve, reject){
        //createOrder
        //validateCart
        //orderId
        if (!validateCart(cart)) {
            const err = new Error("Invalid cart");
            reject(err);
        }
        // logic to create order
        const orderId = "12345";
        if(orderId){
            setTimeout(function (){
                resolve(orderId);
            }, 5000);
        }

    });
    return pr;
}

function validateCart(cart) {
    return true; // Assume the cart is valid for this example
}

function proceedToPayment(orderId) {
    return new Promise(function(resolve, reject){
        resolve("Payment successful for order: " + orderId);
    })
}