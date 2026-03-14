const API = "http://localhost:5000/api/products"

async function loadProducts() {

const res = await fetch(API)

const products = await res.json()

const table = document.getElementById("productTable")
const emptyState = document.getElementById("emptyState")

// Show empty state if no products
if(products.length === 0){
emptyState.classList.remove("d-none")
}else{
emptyState.classList.add("d-none")
}

let html = ""

products.forEach(p => {

html += `
<tr>
<td>${p.Id}</td>
<td>${p.Name}</td>
<td>${p.sku}</td>
<td style="color:${p.Stock < 5 ? 'red' : 'black'}">
${p.Stock}
</td>
</tr>
`

})

table.innerHTML = html

}

// Load products when page opens
loadProducts()


// Search functionality
const searchBox = document.getElementById("searchBox")

if(searchBox){
searchBox.addEventListener("keyup", function(){

let value = this.value.toLowerCase()

document.querySelectorAll("#productTable tr").forEach(row => {

row.style.display = row.innerText.toLowerCase().includes(value) ? "" : "none"

})

})
}


// Add product
async function addProduct(){

const name = document.getElementById("name").value
const sku = document.getElementById("sku").value
const stock = document.getElementById("stock").value

await fetch(API,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
Name:name,
sku:sku,
Stock:stock
})
})

alert("Product added successfully")

window.location="products.html"

}