// const promise1= new Promise(function(resolve,reject){
//    //do an aync task
//    //do call Db
   
//    setTimeout(function(){
//         console.log("Async task 1 completed");
//         resolve();
//    },1000);
// });

// promise1.then(function(){
//     console.log("Promise1 resolved");
// })



// new Promise(function(resolve,reject){
//     //do an aync task
//     //do call Db
    
//     setTimeout(function(){
//          console.log("Async task 2 completed");
//          resolve();
//     },3000);
 
// }).then(function(){
//     console.log("Promise2 resolved");
// })

// const promise3= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({name:"John",age:30});
//     },4000);
//  });

// promise3.then(function(user){
//     console.log(user);
//     console.log("Promise3 resolved");
// })

// const promise4= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let err=true;
//         if(err){
//             resolve({name:"piku",age:21});
//         }
//         else{
//             reject("Promise4 rejected");
//         }
//     },5000);
// });

// promise4.then(function(user){
//     console.log(user);
//     return user.name;
// }).then((username)=>{
//     console.log(username);
// }).catch(function(err){
//     console.log(err);
// }).finally(()=>{
//     console.log("promise4 is resolved or rejected")
// });

// const promise5= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let err=true;
//         if(!err){
//             resolve({subject:"Maths",marks:90});
//         }
//         else{
//             reject("Promise5 rejected!!");
//         }
//     },5000);
// });

// async function getMarks(){
//     try {
//         const res = await promise5;
//         console.log(res);
        
//     } catch (error) {
//         console.log(error);
//     }
// };

// getMarks();


// async function getAllPhotoes(){
//    try {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     // console.log(res);
//     const data = await res.json();
//     console.log(data);
//    } catch (err) {
//     console.log(`error of getting pics ${err}`);
//    }
// }

// getAllPhotoes();


fetch('https://jsonplaceholder.typicode.com/users')   
.then(function(user){
    // console.log(user);
    return user.json();

})
.then(function(data){
    console.log(data);
})
.catch(function(){
    console.log("User is rejected");
})
.finally(function(){
    console.log("User is  resolved or rejected");
});











