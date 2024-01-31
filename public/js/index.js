import data from "../data/molengeek.json" assert { type: "json" }

// console.log (data.partenaires);
// Array.from(data.partenaires).forEach(partenaire => {
//     console.log(partenaire);
// });

let body = document.body;
let partenaires = data.partenaires;

let partners_list_pics = [];

for (let links of Object.entries(partenaires)) {

    let logo_index = links[1].logo.replace(/&quot;/g, '');
    partners_list_pics.push(logo_index);

}

for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
  }


console.log(partners_list_pics);

let picElements = body.querySelectorAll(".pic");
console.log(picElements.length);

for (let i = 0; i < 2; i++) {
    picElements[i].style.backgroundImage = `url(${partners_list_pics[i]})`;
    picElements[i].style.backgroundSize = `100% 100%`;
    picElements[i].style.position = `absolute`;
}
for (let i = 2; i < 4; i++) {
    picElements[i].style.backgroundImage = `url(${partners_list_pics[i]})`;
        picElements[i].style.backgroundSize = `100% 100%`;
            picElements[i].style.position = `absolute`;


}
for (let i = 4; i < 6; i++) {
    picElements[i].style.backgroundImage = `url(${partners_list_pics[i]})`;
        picElements[i].style.backgroundSize = `100% 100%`;
            picElements[i].style.position = `absolute`;


}
for (let i = 6; i < picElements.length; i++) {
    picElements[i].style.backgroundImage = `url(${partners_list_pics[i]})`;
        picElements[i].style.backgroundSize = `100% 100%`;
            picElements[i].style.position = `absolute`;


}
// body.querySelector(".pics").style.height ="500px"


// body.querySelector(".pics").style.width = `100%`;
// body.querySelector(".pics").style.height = `400px`;
// const object1 = {
//     a: 'somestring',
//     b: 42,
//   };
  
//   for (const [key, value] of Object.entries(object1)) {
//     console.log(`${key}: ${value}`);
//   }
  
//   // Expected output:
//   // "a: somestring"
//   // "b: 42"
  