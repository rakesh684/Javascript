var isLoggedIn=false
function checkLoggedIn(){
   var User=new Promise((resolved,reject)=>{
    setTimeout(()=>{
        if(isLoggedIn){
            resolved("User Logged in !")
        }
        else{
            reject("Invalid Password")
        }
    },1000)
   }) 
   return User
}
checkLoggedIn().then((successMsg)=>{
       console.log(successMsg)
}).catch((Unknown)=>{
    console.log(Unknown)
})