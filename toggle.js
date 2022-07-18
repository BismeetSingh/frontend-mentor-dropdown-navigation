const toggleMenuVisibility = (index) => {
    let allMenus = document.getElementsByClassName("dropdown_menu");
    let allDropDownIcons = document.getElementsByClassName("dropdown_icon");
    let menu = allMenus[index];
    let icon = allDropDownIcons[index];
    let currentState = menu.style.display;
    let currentStateMenuIcon = icon.style.transform;
    // Keep only 1 menu open at a time.
    for (let menu of allMenus){
        menu.style.display = 'none';
    }

    for (let icon of allDropDownIcons){
        icon.style.transform = 'none';
    }

    menu.style.display  = currentState === 'block' ?'none':'block';
    icon.setAttribute('aria-expanded',menu.style.display === 'block' ? true:false); 
    icon.style.transform = currentStateMenuIcon ===   'rotate(180deg)' ?'none':'rotate(180deg)';
   
}

const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId);
    const navMenu = document.getElementById(navId);
    // const main = document.getElementById('main');
    if (toggle && navMenu){
        toggle.addEventListener('click',()=>{
            navMenu.classList.toggle('show');
            if (toggle.src.indexOf('images/icon-menu.svg') != -1) {
                        toggle.src = 'images/icon-close-menu.svg';
                        // main.style.touchAction = "none";

                    }
                    else {
                        toggle.src = 'images/icon-menu.svg';
                        // main.style.touchAction = "initial";
                    }
        })
    }

}

showMenu ('header_toggle','navbar')