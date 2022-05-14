const carousel = document.querySelector(".carousel")
const carouselUl = document.querySelector(".carousel-ul")
const prev = document.querySelector(".prev")
const next = document.querySelector(".next")
const slidesLi = document.querySelectorAll(".slide")
const carouselBtn = document.getElementsByClassName("carousel-button")
const bottomPart = document.querySelector(".bottom-part")
const imgSmall = document.querySelectorAll('.bottom-part img')

let currentIndex = 0;

slidesLi.forEach((slideItem, index) => {
    slideItem.style.left = `${1536 * index}px`;
})

if (currentIndex == slidesLi.length - 1)
    carouselBtn.style.backgroundColor = 'red';



next.addEventListener("click", function() {
    console.log("sasd")
    if (currentIndex < slidesLi.length - 1) {
        currentIndex += 1;
        carouselUl.style.transform = `translateX(${currentIndex* -1536}px)`;
    } else {
        return;
    }
    console.log(currentIndex)

})

prev.addEventListener("click", function() {
    if (currentIndex === 0) {
        return;
    } else {
        currentIndex -= 1;
        carouselUl.style.transform = `translateX(${currentIndex* -1536}px)`;
    }
    console.log(currentIndex)
})

imgSmall.forEach(function(indicator, index) {
    indicator.addEventListener("click", function() {

        carouselUl.style.transform = `translateX(${index* -1536}px)`;
        carouselUl.style.transition = "transform 1.5s ease"
        console.log(currentIndex)
        console.log(`index: ${index}`)
    })


})


function findMin() {
    let minNum = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (minNum > arguments[i]) {
            minNum = arguments[i]
        }
    }
    return minNum;
}

const a = findMin(2, 34, 5, -2, 23, -222, 23233, -999, 343)
console.log(a)