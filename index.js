const searchInput = document.querySelector('#search');
const recipe = document.querySelectorAll('.recipe');

searchInput.addEventListener('keyup', function(event){
    const word = event.target.value.toLowerCase();
    recipe.forEach(item => {
        item.querySelector('p').textContent.toLowerCase().includes(word) ? (item.style.display = 'flex') : (item.style.display = "none");
    })
})