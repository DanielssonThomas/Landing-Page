const filterBtn = document.getElementById('filterBtn');
const filters = document.querySelector('.filter-section');
const filter = document.querySelector('.filter');

filterBtn.addEventListener('click', () =>{
    filters.classList.toggle('filter-section');
    filter.classList.toggle('filter-open');
});