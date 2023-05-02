import { recettesDB } from "./recettesDB.js";
var recipes = document.querySelector(".recepies_container");
function getRandomNonRepeatingIntegers(min, max) {
  // Create an array of integers between min and max
  let integers = [];

  for (let i = min; i <= max; i++) {
    integers.push(i);
  }

  // Shuffle the array
  for (let i = integers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [integers[i], integers[j]] = [integers[j], integers[i]];
  }

  // Return the first 3 elements of the shuffled array
  return integers.slice(0, 3);
}
var random = getRandomNonRepeatingIntegers(1, 10);
function set() {
  for (let index = 0; index < random.length; index++) {
    recipes.innerHTML += `
     <div class="recepie">
          <div class="img_place">
            <img src="../recettes/${random[index]}/1.png" alt="" />
          </div>
          <div class="titel">
            <h3>${recettesDB[random[index] - 1].name}</h3>
          </div>
        </div>
    
    `

    console.log(recettesDB[random[index] - 1].name);
  }
}
set()