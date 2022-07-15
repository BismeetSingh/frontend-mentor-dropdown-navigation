const toggleMenuVisibility = (index) => {
    document.getElementsByClassName("dropdown")[index].classList.toggle("show");
    let img = document.getElementsByClassName('toggle-menu')[index].src;
    if (img.indexOf('images/icon-arrow-down.svg') != -1) {
        document.getElementsByClassName('toggle-menu')[index].src = 'images/icon-arrow-up.svg';
    }
    else {
        document.getElementsByClassName('toggle-menu')[index].src = 'images/icon-arrow-down.svg';
    }

}