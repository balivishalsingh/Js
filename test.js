let myPromise = new Promise((resolve,reject)=>
{
    let x = 1;
    if(x==1)
    {
        resolve('ok done');
    }
    else{
        reject('sorry fail')
    }
})
myPromise.then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})