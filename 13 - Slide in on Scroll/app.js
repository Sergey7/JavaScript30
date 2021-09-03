// Функция, что бы скролл работал не так часто
function debounce(func, wait = 10, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
}


window.addEventListener("scroll", debounce(handleScroll)) 
const slides = document.querySelectorAll(".slide-in")

function handleScroll(e) {  
    slides.forEach(slide => {
        // координата низа экрана, который сейчас виден
        const slideInAt = (window.scrollY + window.innerHeight);
        // координата низа фото
        const slideBottom = slide.offsetTop + slide.height;
        // проверка, что координата низа экрана ниже половины фото
        const isHalfShow = slideInAt > slide.offsetTop + slide.height / 2;
        // проверка, что координата скролла больше низа фото(то есть фото уже не видно)
        const isScrolled = window.scrollY > slideBottom;
        // если больше пол фото в видимости и не проскролено, показываем фото.
        if (isHalfShow && !isScrolled) {
            slide.classList.add("active")
        } else {
            slide.classList.remove("active")
        }
    })

}