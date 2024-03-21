var selected = -1;
function updateStars(number) {
    var elements = document.getElementById("new-review").querySelectorAll("img");
    for (var i = 0; i < elements.length; i++) {
        if (i > number) {
            elements[i].src="images/star-white.png";
        }
        else {
            elements[i].src="images/star-orange.png";
        }
    }
}
function saveStars(number) {
    selected = number;
    updateStars(selected);
}
function revertStars(number) {
    updateStars(selected);
}
document.addEventListener("DOMContentLoaded", function() {
    var elements = document.getElementById("new-review").querySelectorAll("img");
    for (var i = 0; i < elements.length; i++) {
        (function (index) {
            elements[index].addEventListener("click", function() {
                saveStars(index);
            });
            elements[index].addEventListener("mouseover", function() {
                updateStars(index);
            });
            elements[index].addEventListener("mouseout", function() {
                revertStars(index);
            });
        })(i);
    }
});