const btnJours = document.querySelectorAll('.jour');
const imgMeal = document.querySelector('.img-plat');
const descriptionMeal = document.querySelector('.description-plat');

let currentMeal = 1;


const getMeals = (event) => {
    if(event.target.textContent === "Lundi 13") {
        currentMeal = 1
        descriptionMeal.textContent ="Salade de quinoa, avocat, radis, chou pak choï, framboise, mousse de ricotta aux herbes"
    };  
    if(event.target.textContent === "Mardi 14") {
        currentMeal = 2
        descriptionMeal.textContent = "Poulet Teriyaki"
    };  
    if(event.target.textContent === "Mercredi 15") {
        currentMeal = 3
        descriptionMeal.textContent = "Summer Bowl"
    };  
    if(event.target.textContent === "Jeudi 16") {
        currentMeal = 4
        descriptionMeal.textContent = "Poké Bowl au saumon mariné au sésame, mangue, avocat, oignons frits"
    };  
    if(event.target.textContent === "Vendredi 17") {
        currentMeal = 5
        descriptionMeal.textContent = "Moussaka végétarienne"
    };  
    imgMeal.src = `./src/images/images plats/meal${currentMeal}.png`
    imgMeal.classList.add('blur');
    setTimeout(() => imgMeal.classList.remove('blur'),200)
    console.log(event.target.textContent)
}


btnJours.forEach( btn => {
    btn.addEventListener('click', getMeals)
});



