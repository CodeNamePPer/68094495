const h1 = document.getElementById("h01")
console.log(h1)
const img1 = document.getElementById("img01")
function main(){
  console.log("Main")
  h1.innerHTML = "Hello Lisa"
  img1.src="img/listen.jpg"
  h1.style.color = "#ff0000ff"
  h1.style.textAlign="right"
}