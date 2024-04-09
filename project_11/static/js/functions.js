/* add in your functions here */
var total_prices = {};
function update_price(id) {
    var element = document.getElementById(id);
    var cells = element.children;
    var amount = parseInt(cells[2].children[0].value);
    var cost = parseFloat(cells[3].innerHTML.substring(1));
    cells[4].innerHTML = "$"+(cost * amount).toFixed(2);
    total_prices[id] = (cost * amount);
    var sum = 0.0;
    for (var key in total_prices) {
        if (total_prices.hasOwnProperty(key)) {
            sum += total_prices[key];
        }
    }
    var subtotal = sum;
    var tax = subtotal * 0.06;
    var shipping = Math.ceil(subtotal/100) * 5;
    var grandtotal = subtotal + shipping + tax;
    document.getElementById("subtotal").innerHTML = "$"+subtotal.toFixed(2);
    document.getElementById("tax").innerHTML = "$"+tax.toFixed(2);
    document.getElementById("shipping").innerHTML = "$"+shipping.toFixed(2);
    document.getElementById("grandtotal").innerHTML = "$"+grandtotal.toFixed(2);
}