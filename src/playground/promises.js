const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
   // resolve("Resolved")
    reject("Something went wrong")
    }, 2600)
})

promise.then((data) => {
    console.log('1', data)   
    return 'some data'
}).then((str) => {
    console.log('this should run', str)
}).catch((error) => {
    console.log('error: ', error)
})

promise.then((data) => {
    console.log('1', data)   

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("This is my other promise")
        }, 5000)
    })


}).then((str) => {
    console.log('this should run', str)
}).catch((error) => {
    console.log('error: ', error)
})


// could just use then( resolveFn, rejectFn )