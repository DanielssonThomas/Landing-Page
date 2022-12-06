const filterCardheadings = document.querySelectorAll('.filter-card-heading');
const filterCardHeadingImages = document.querySelectorAll('.filter-arrows');

const filterPopularity = document.querySelector('.accordion-popularity');
const filterBrand = document.querySelector('.accordion-brand');
const filterVolume = document.querySelector('.accordion-volume');
const filterDesigner = document.querySelector('.accordion-designer');
const filterColor = document.querySelector('.accordion-color');

const filterSection = document.querySelector('.filter-section');
const filterBtn = document.querySelector('.filter-btn');
const filterCloseBtn = document.querySelector('.filter-close');

let currentAccordionIndex = 0;

filterBtn.addEventListener('click', () =>{
    filterSection.classList.toggle('filter-section-open');
})

filterCloseBtn.addEventListener('click', () =>{
    filterSection.classList.toggle('filter-section-open');
})

filterCardheadings.forEach(btn => {
    if(currentAccordionIndex === 0){
        btn.addEventListener('click', () =>{
            filterPopularity.classList.toggle('filter-card-content-open');
            btn.querySelector('img').classList.toggle('filter-arrows-open')
        })
    }

    if(currentAccordionIndex === 1){
        btn.addEventListener('click', () =>{
            filterBrand.classList.toggle('filter-card-content-open');
            btn.querySelector('img').classList.toggle('filter-arrows-open')
        })
    }

    if(currentAccordionIndex === 2){
        btn.addEventListener('click', () =>{
            filterVolume.classList.toggle('filter-card-content-open');
            btn.querySelector('img').classList.toggle('filter-arrows-open')
        })
    }

    if(currentAccordionIndex === 3){
        btn.addEventListener('click', () =>{
            filterDesigner.classList.toggle('filter-card-content-open');
            btn.querySelector('img').classList.toggle('filter-arrows-open')
        })
    }

    if(currentAccordionIndex === 4){
        btn.addEventListener('click', () =>{
            filterColor.classList.toggle('filter-card-content-open');
            btn.querySelector('img').classList.toggle('filter-arrows-open')
        })
    }
    currentAccordionIndex++;
    if(currentAccordionIndex === 5){
        currentAccordionIndex === 0;
    }
});

const navBar = document.querySelector('.filter-cart-nav');
let oldScrollPos = window.pageYOffset;
window.onscroll = () =>{
    if(window.pageYOffset > 423){
        const currentScrollPos = window.pageYOffset;
        if(oldScrollPos > currentScrollPos){
            navBar.classList.remove('filter-cart-nav-close');
        }
        else{
            navBar.classList.add('filter-cart-nav-close');
        }
        oldScrollPos = currentScrollPos;
    }
}