const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const btn = document.getElementById('btn');
const nameInput = document.getElementById('name');
const msg = document.getElementById('msg');


btn.addEventListener('click', async ()=>{
    const name =nameInput.value;
    const res = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({name})
    });

    const data = await res.json();
    msg.textContent = data.message;
});


//Al hacer click, activamos el menú y la animación del icono
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Opcional: cerrar el menú cuando se hace clic en un enlace
document.querySelectorAll(".nav-link").forEach(n =>
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    })
)