const toggleBtn = document.querySelector('.toggle-menu');
const links = document.querySelector('.links');

toggleBtn.addEventListener('click', function(){  
links.classList.toggle('.show-links');
});