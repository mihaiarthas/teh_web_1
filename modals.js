
function setModalWidth(array, value) {
    for (i = 0; i < array.length; i++) {
        array[i].style.width = value;
    }
}

function checkViewWidth() {
    var resWidth = window.innerWidth;
    var modArray = document.getElementsByClassName('modal-content');
    var width = '';
    if (resWidth <= 360) {
        width = '100%';
    }
    else if (resWidth > 360 && resWidth <= 1200) {
        width = '90%';
    }
    else {
        width = '50%';
    }
    this.setModalWidth(modArray, width);
}

var modal = new Object();
var btn = new Object();
var span = new Object();

function openModal(id) {
    this.modal = document.getElementById('modal-' + id);
    this.btn = document.getElementById('btn-' + id);
    this.span = document.getElementById('close-' + id);

    modal.style.display = "block";

    if(this.isNullOrUndefined(span.onclick)) {
        span.onclick = function () {
            modal.style.display = "none";
        }
    }

    if(this.isNullOrUndefined(window.onclick)) {
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
 
}

function isNullOrUndefined(object) {
    if(object === null || object === undefined) {
        return true;
    }
    return false;
}


