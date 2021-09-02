let inputs = document.querySelectorAll("input");

inputs.forEach(input => input.addEventListener("input", hanleInput))

function hanleInput(e) {
    console.log(this.value);
    suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`)
}