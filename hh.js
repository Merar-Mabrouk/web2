import { recettesDB } from "./recettesDB.js";

var indexDefaultRcipe = document.querySelector(".default_recipe");
// //  this part i work in index.html
// // responsive page//
var menu1 = document.querySelector(".menu");
var ul1 = document.querySelector("ul");

menu1.addEventListener("click", () => {
  ul1.classList.toggle("displays");
});
//this functin on reloed will change recipe
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

// Example usage:

var tableRandom = getRandomNonRepeatingIntegers(1, 10);

function default_recipe() {
  for (let index = 0; index < tableRandom.length; index++) {
    indexDefaultRcipe.innerHTML += `  
            <div class="recipe">
                    <img src="../assets/recettes/${
                      tableRandom[index]
                    }/2.png" alt="">  
                    <div>
                      <h1>${recettesDB[tableRandom[index] - 1].name}</h1>
                      <h1> 4/10 </h1>
                    </div>
                    <button id='${tableRandom[index] - 1}'>see details</button>
            </div>
`;
  }
}
default_recipe();
var btn = document.getElementById("btnrecipe");
function changeLocation() {
  location = "../html/catalogue.html";
}
btn.addEventListener("click", changeLocation);
var btns = indexDefaultRcipe.getElementsByTagName("button");
for (let index = 0; index < btns.length; index++) {
  btns[index].addEventListener("click", () => {
    location = "../html/details.html?recipe=" + btns[index].id;
  });
}
