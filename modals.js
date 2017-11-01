var modal = document.getElementById('modal-1');
var btn = document.getElementById("btn-1");
var span = document.getElementById("close-1");

// var modal = document.getElementById('modal-2');
// var btn = document.getElementById("btn-2");
// var span = document.getElementById("close-2");

btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function setModalWidth(array, value) {
    for(i = 0; i < array.length; i++) {
        array[i].style.width = value;
    }
}

function checkViewWidth() {
    var resWidth = window.innerWidth;
    var modArray = document.getElementsByClassName('modal-content');
    var width = '';
    if(resWidth <= 360) {
        width = '100%';
    }
    else if(resWidth > 360 && resWidth <= 1200) {
        width = '90%';        
    }
    else {
        width = '50%';
    }
    this.setModalWidth(modArray, width);               
}


