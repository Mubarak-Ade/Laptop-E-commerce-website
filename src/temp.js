function coding () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Coding")
        }, 4000);
    })
}

function sleeping () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Sleeping")
        }, 1000);
    })
}

function awake () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("has woken")
        }, 8000);
    })
}

coding().then(value => {console.log(value); return sleeping()
        .then(value => {console.log(value); return awake()
        .then(value => console.log(value))})})