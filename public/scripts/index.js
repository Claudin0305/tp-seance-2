// let h1Index = document.getElementById("h1-index");
// console.log(h1Index, h1Index.innerText);
// h1Index.innerText = "New text";
// let paragraphes = document.getElementsByClassName("paragraphe");
// console.log(paragraphes)
// console.log("Bonjour tout le monde!");

let h1Index = document.querySelector("#h1-index");
console.log(h1Index);
let paragraphes = document.querySelectorAll(".paragraphe");
console.log(paragraphes);

const h1s = document.querySelectorAll("h1");
console.log(h1s);

const btn = document.querySelector("#clic");
console.log(btn);
// if(btn){

//     btn.addEventListener("click", (e) => {
//       console.log("On clique sur le button");
//     });
// }

const div = document.querySelector("#parent");
btn?.addEventListener("click", (e) => {
  if (div) {
    //creation noeud html
    let p = document.createElement("p");
    p.innerText = "Nouveau paragraphe créer!";
    //Ajout element au DOM
    div.appendChild(p);
  }
  console.log("On clique sur le button");
});
let btnRemove = document.querySelector("#remove");
btnRemove?.addEventListener("click", (e) => {
  if (div) {
    const children = div.children;
    if (children.length > 2) {
      const lastChild = children[children.length - 1];
      console.log(lastChild);
      div.removeChild(lastChild);
    } else {
      alert("Vous ne pouvez plus remove!");
    }
  }
});
// if(btn!==null){

//     btn.addEventListener("click", (e) => {
//       console.log("On clique sur le button");
//     });
// }
console.log("Fin");
// h1
// p
