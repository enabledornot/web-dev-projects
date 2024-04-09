/* add in your functions here */

function update_price(id) {
    var element = document.getElementById(id);
    var cells = element.children;
    var amount = parseInt(cells[2].children[0].value);
    var cost = parseFloat(cells[3].innerHTML);
    cells[4].innerHTML = "$"+(cost * amount).toFixed(2);
}