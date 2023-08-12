 

 //executor
//produce
 const ponj1=new Promise((resolve, reject)=>{

    setTimeout(() => {

        let roll_no=[1,2,3,4,5];
        resolve(roll_no);
        reject("Error while communicating!!!");
    }, 3000);

 });

// promises consume 
// then method

ponj1.then((roll_no)=>{

    console.log(roll_no);

}).catch((error)=>{

    console.log(error);

});

// catch method

