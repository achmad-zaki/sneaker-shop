const navbarNav = document.querySelector(".navbar-nav")

navbarNav.addEventListener('click', function(e) {
    const targetMenu = e.target;

    if(targetMenu.classList.contains('nav-link')) {
        const menuLinkActive = document.querySelector("ul li a.active")

        if(menuLinkActive !== null && targetMenu.getAttribute("href") !== menuLinkActive.getAttribute("href")) {
            menuLinkActive.classList.remove('active')
        }

        targetMenu.classList.add("active")
    }
})

function myFunction() {
    
    const input = document.getElementById('input-text').value;
    const cardToastFailed = document.getElementById('card-toast-failed')
    const cardToastSuccess = document.getElementById('card-toast-success')

    if(input == "") {
        cardToastFailed.className = "failed"
        setTimeout(function() {
            cardToastFailed.className = cardToastFailed.className.replace("failed", "");
        },3000)
    } else {
        cardToastSuccess.className = "success"
        setTimeout(function() {
            cardToastSuccess.className = cardToastSuccess.className.replace("success", "");
        },3000)
    }
}
