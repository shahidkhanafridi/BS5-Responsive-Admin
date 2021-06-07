// function displaySidebar() {
//     var el = window.document.getElementById("sidebar-outer");
//     if (el.style.marginLeft == -300) {
//         el.style.marginLeft = 0;
//     } else {
//         el.style.marginLeft = -300;;
//     }
// }

function classToggle() {
    this.parentElement.parentElement.classList.toggle('full-outer');
    this.parentElement.parentElement.classList.toggle('full-outer-toggled');

}
document.querySelector('#menu-toggle').addEventListener('click', classToggle);

function sideMenuToggler(){
    var elm = document.getElementById("sidebar");
    if(elm.offsetLeft==-300){
        elm.offsetLeft=0;
    }else{
        elm.offsetLeft=-300;
    }
    console.log(elm);
}

var allElements = document.getElementsByClassName('list-group-item');

var elmLenght = allElements.length;
for (var i = 0; i < elmLenght; i++) {
    allElements[i].addEventListener('click', function (event) {
        //event.currentTarget.nextElementSibling.className
        var nextSibling = event.currentTarget.nextElementSibling;
        if(nextSibling.className.trim().toLowerCase()=="list-group"){
            if(nextSibling.style.display=="block"){
                event.currentTarget.nextElementSibling.style.display="none";
            }else{
                event.currentTarget.nextElementSibling.style.display="block";
            }
        }
       
        event.stopPropagation();
    });
}
