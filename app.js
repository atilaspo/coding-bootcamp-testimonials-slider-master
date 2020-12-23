let slide1 = document.querySelector('.container__review');
let slide2 = document.querySelector('.container__review2');
let arrowNext = document.querySelectorAll('.nextBtn');
let arrowPrev = document.querySelectorAll('.prevBtn');

arrowNext.forEach(function (btn) {
    btn.addEventListener('click', goNext);
})

arrowPrev.forEach(function(btn) {
    btn.addEventListener('click', goBack);
})

function goNext() {
        slide1.classList.add('hidden');
        slide2.classList.remove('hidden');
}

function goBack() {
        slide2.classList.add('hidden');
        slide1.classList.remove('hidden');
}


