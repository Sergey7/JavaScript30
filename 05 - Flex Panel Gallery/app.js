const panels = document.querySelectorAll(".panel")

function handelToggle() {
    this.classList.toggle("open")
}

function handelTransitionend(e) {
    if (e.propertyName.includes('flex')){
        this.classList.toggle("open-active")
    };   
}

panels.forEach(panel => panel.addEventListener("click", handelToggle))
panels.forEach(panel => panel.addEventListener("transitionend", handelTransitionend))