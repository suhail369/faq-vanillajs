// Variable assign
const toggleBtns = document.querySelectorAll('.faq-toggle');

// Event Listner
toggleBtns.forEach(toggleBtn => {
    toggleBtn.addEventListener('click', () => {
        toggleBtn.parentNode.classList.toggle('active')
    })
})