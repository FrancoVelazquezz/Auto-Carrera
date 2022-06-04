import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>`;

let lap1: number = Number(prompt("Ingrese la vuelta 1"));
let lap2: number = Number(prompt("Ingrese la vuelta 2"));
let lap3: number = Number(prompt("Ingrese la vuelta 3"));
let lap4: number = Number(prompt("Ingrese la vuelta 4"));

let totalTime = lap1 + lap2 + lap3 + lap4;
console.log("El tiempo total es de: " + totalTime);
console.log("El promedio de vuelta es de: " + totalTime / 4);
