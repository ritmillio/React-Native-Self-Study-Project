async function myFunc(){
    return 'Hello';

    const promise = new Promise((resolve, reject) =>{
        setTimeout(() => resolve('Hello'), 1000);
    });

    const error = true;
    if (!error){
        const res = await promise;
        return res;
    }else{
        await Promise.reject(new Error('Something went wrong'));
    }
}
myFunc()
    .then(res => console.log(res))
    .catch(error => console.log(error));


async function getUsers(){
    // await resoinse of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    //Only proced once its resolved
    const data = await response.json();
    //Only proced once second promise is resolved
    return data;
}
getUsers().then(users => {console.log(users)});