document.addEventListener("DOMContentLoaded", function() {
    const hamburgerButton = document.querySelector('.menu-button');
    const menu = document.querySelector('.menu-container');
    const closeIcon = document.querySelector('.menu-close-button');

    hamburgerButton.addEventListener("click", toggleMenu);
    closeIcon.addEventListener("click", toggleMenu);

    function toggleMenu() {
        console.log("toggle check");
        // Toggle the 'showMenu' class on the menu
        menu.classList.toggle("showMenu");
    
        // Check if 'showMenu' class is present
        if (menu.classList.contains("showMenu")) {
            // If 'showMenu' class is present, set close icon visibility to 'block'
            menu.style.display = "block";
        } else {
            // If 'showMenu' class is not present, set close icon visibility to 'none'
            menu.style.display = "none";
        }
    }
    
});