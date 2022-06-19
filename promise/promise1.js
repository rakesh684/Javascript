let userLoggedin=true;
const student=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(userLoggedin){
            resolve()
        }
        else{
            reject()
        }
    },1000)
    setTimeout(()=>{
        userLoggedin=false

    },1500)
})
student.then(()=>{
    console.log("Sucessful")
}).catch(()=>{
    console.log("Unsecessful")
})
