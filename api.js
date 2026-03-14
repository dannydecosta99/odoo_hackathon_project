const API_URL="http://localhost:5000/api"

async function login(email,password){

const res=await fetch(API_URL+"/auth/login",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({email,password})

})

return res.json()

}