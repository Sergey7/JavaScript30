const controls = document.querySelectorAll(".inbox input[type='checkbox']")
let lastControl;


controls.forEach(control => control.addEventListener("click", handleChange))
let inBetween = false
function handleChange(e) {
    if (e.shiftKey && lastControl) {
        controls.forEach(control => {
            control.checked = false
            if (control === this || control === lastControl){
                inBetween = !inBetween
            }
            if (inBetween || control === lastControl || control === this) {
                control.checked = true;
            }
            
        })
    } else {
        lastControl = e.target;
    }
}