async function loadDashboard(){

const res=await fetch("http://localhost:5000/api/products")

const products=await res.json()

document.getElementById("totalProducts").innerText=products.length

let total=0

products.forEach(p=>{

total+=p.stock

})

document.getElementById("totalStock").innerText=total

}

loadDashboard()