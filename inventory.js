const API="http://localhost:5000/api/inventory"

async function loadInventory(){

const res=await fetch(API)

const data=await res.json()

let html=""

data.forEach(i=>{

html+=`
<tr>
<td>${i.id}</td>
<td>${i.product_id}</td>
<td>${i.quantity}</td>
<td>${i.type}</td>
</tr>
`

})

document.getElementById("inventoryTable").innerHTML=html

}

loadInventory()