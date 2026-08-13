const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;

        const increment = target / 100;

        if(current < target){

            counter.innerText = Math.ceil(current + increment);

            setTimeout(updateCounter,20);

        }else{

            counter.innerText = target;

        }

    };

    updateCounter();

});

function changePreview(card,image){

    document
    .getElementById("mainPreview")
    .src=image;

    document
    .querySelectorAll(".thumb-item")
    .forEach(item=>item.classList.remove("active"));

    card.classList.add("active");

}
function changePreview(card,image){

    const preview=document.getElementById("mainPreview");

    preview.style.opacity=0;

    setTimeout(()=>{

        preview.src=image;

        preview.style.opacity=1;

    },200);

    document
    .querySelectorAll(".thumb-item")
    .forEach(item=>item.classList.remove("active"));

    card.classList.add("active");

}
const reveals = document.querySelectorAll(".reveal");

function revealCards() {

    const trigger = window.innerHeight - 100;

    reveals.forEach(card => {

        const top = card.getBoundingClientRect().top;

        if (top < trigger) {

            card.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealCards);

revealCards();
function changePreview(card, image){

    document.getElementById("mainPreview").src = image;

    document.querySelectorAll(".thumb-item").forEach(item=>{
        item.classList.remove("active");
    });

    card.classList.add("active");

}