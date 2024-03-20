const commonFirstNames = ["John", "Mary", "James", "Jennifer", "Robert", "Linda", "Michael", "Elizabeth", "William", "Susan"];
const commonLastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Garcia", "Rodriguez", "Martinez"];

window.onload = function() {
   const r1 = Math.floor(Math.random() * commonFirstNames.length);
   const r2 = Math.floor(Math.random() * commonLastNames.length);
   document.getElementById("name").innerHTML = commonFirstNames[r1] + " " + commonLastNames[r2];
}