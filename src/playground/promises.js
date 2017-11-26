const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
   // resolve("Resolved")
    reject("Something went wrong")
    }, 2600)
})

promise.then((data) => {
    console.log(data)
}).catch((error) => {
    console.log('error: ', error)
})

// could just use then( resolveFn, rejectFn )