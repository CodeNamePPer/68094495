// const tname = document.getElementById("txtname")
const num = document.getElementById("num00")
const out = document.getElementById("result")




const num1 = document.getElementById("num01")

const num2 = document.getElementById("num02")




console.log(num)
// console.log(tname)
console.log(out)

function findMin(){
 let n1 = parseFloat(num1.value)
 let n2 = parseFloat(num2.value)
  console.log("min")
  console.log(n1,n2)
  console.log("Min : ",Math.min(n1,n2))
}
function findMax(){
 let n1 = parseFloat(num1.value)
 let n2 = parseFloat(num2.value)
  console.log("max")
  console.log(n1,n2)
  console.log("Max : ",Math.max(n1,n2))
}

function main(){
  // let n = num.value
  // out.innerHTML = "Num : " + n
  // console.log(typeof(n))

  // let num1 = Number(num.value)
  // out.innerHTML = "number : " + num1
  // console.log(typeof(num1))


  //Math PI
  // let r = parseFloat(num.value)
  // console.log(Math.PI)
  // let area = Math.PI * (r**2)
  
  // out.innerHTML = "Area : " + area.toFixed(2)
  // console.log(area)


  // let n = parseFloat(num.value)
  // console.log("round ==>" ,Math.round(n)) //ปัดตัวที่ใกล้ที่สุด
  // console.log("ceil ==>" ,Math.ceil(n)) //ปัดขึ้น
  // console.log("floor ==>" ,Math.floor(n)) //ปัดลง

  let n = parseFloat(num.value)
  console.log("pow ==> ",Math.pow(n,2))
  console.log("pow ==> ",Math.sqrt(n))
  console.log("pow ==> ",Math.abs(n))

}

function randomdata(){
    console.log("Random",Math.random())
}