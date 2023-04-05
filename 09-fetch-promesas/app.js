


// function multiplica(a,b, callback){
//     setTimeout(()=>{
//         callback(a*b);
//     },2000);
// }

// multiplica(5,10,(result) =>{
//     console.log(result);
// });


function multiplica(a,b){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (a && b) {
                resolve(a*b);
            }else{
                reject('valor invalido');
            }
        },1000);
    });
}

multiplica(5,10).then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.error(error);
});

