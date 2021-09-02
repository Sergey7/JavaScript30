window.addEventListener("keydown", handleKeyBoardDown)

function handleKeyBoardDown(e) {
    audioPlay(e.code);
}

function audioPlay(code) {
    const audio = document.querySelector(`audio[data-key="${code}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    const btn = document.querySelector(`.key[data-key="${code}"]`);
    btn.classList.remove("playing");
    btn.classList.add("playing");
}

let btns = document.querySelectorAll(".key");

function handleTransitionEnd(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove("playing");
}

function handleBtnClick(e) {
    let target = (e.target.dataset['key'])?e.target.dataset['key']:e.target.parentNode.dataset['key'];
    audioPlay(target);
}

btns.forEach(btn => btn.addEventListener("transitionend",handleTransitionEnd))
btns.forEach(btn => btn.addEventListener("click", handleBtnClick))