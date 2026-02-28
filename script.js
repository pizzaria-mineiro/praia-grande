// SLIDER AUTOMÁTICO
const slider = document.querySelector(".slider");
let scrollAmount = 0;

setInterval(() => {
    scrollAmount += 370;
    if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0;
    }
    slider.scrollTo({
        left: scrollAmount,
        behavior: "smooth"
    });
}, 3000);


// ANIMAÇÃO AO ROLAR
const elements = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

elements.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});


// CONTADOR ANIMADO
const counters = document.querySelectorAll(".numero");

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = target / 200;

        if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCount, 10);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});
