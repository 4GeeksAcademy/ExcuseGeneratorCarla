/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  /* const selectorhtml = document.getElementById("excuse");
  selectorhtml.textContent = GeneradorDeExcusas;
  document.getElementById("generateExcuseBtn")
  .addEventListener("click", ()) => {location.reload();
    */

  let who = ["El perro", "Mi abuela", "La tortuga", "El pájaro", "Mi hijo"];
  let action = ["se comió", "se hizo pipi", "rompió", "ahogó", "tiró"];
  let what = ["mis deberes", "las llaves", "el coche", "la casa", "el trabajo"];
  let when = [
    "antes de clase",
    "justo ahora",
    "cuando terminé",
    "durante la comida",
    "mientras estaba rezando"
  ];

  function GeneradorDeExcusas(who, action, what, when) {
    let randomWho = Math.floor(Math.random() * who.length);
    let randomAction = Math.floor(Math.random() * action.length);
    let randomWhat = Math.floor(Math.random() * what.length);
    let randomWhen = Math.floor(Math.random() * when.length);
    return (
      "A lo mejor no te lo vas a creer, pero..." +
      randomWho +
      " " +
      randomAction +
      " " +
      randomWhat +
      " " +
      randomWhen
    );
  }
  console.log(GeneradorDeExcusas);
};
