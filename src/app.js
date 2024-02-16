let Excusa = "";
window.onload = function() {
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

  let randomWho = Math.floor(Math.random() * who.length);
  let randomAction = Math.floor(Math.random() * action.length);
  let randomWhat = Math.floor(Math.random() * what.length);
  let randomWhen = Math.floor(Math.random() * when.length);

  Excusa =
    "A lo mejor no te lo vas a creer, pero..." +
    who[randomWho] +
    " " +
    action[randomAction] +
    " " +
    what[randomWhat] +
    " " +
    when[randomWhen];
  console.log(Excusa);
};

const element = document.getElementById("botonExcusa");
element.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("aquiLaExcusa").innerHTML = Excusa;
}
