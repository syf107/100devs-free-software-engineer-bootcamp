//Create a button that adds 1 to a botScore stored in localStorage
if (!localStorage.getItem("botScore")) {
  localStorage.setItem("botScore", 0);
}

document.querySelector("button").addEventListener("click", anotherOne);

function anotherOne() {
  //   const value = document.querySelector("input").value;
  let botScore = Number(localStorage.getItem("botScore"));
  botScore = botScore + 1;
  localStorage.setItem("botScore", botScore);
}
