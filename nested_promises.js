function doTask1(callback) {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve(callback('Task 1'));
            }, 300);
        } catch {
            reject(new Error("Unexpected error!"));
        }
    });
}
  
function doTask2(callback) {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve(callback('Task 2'));
            }, 300);
        } catch {
            reject(new Error("Unexpected error!"));
        }
    });
}
  
function doTask3(callback) {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve(callback('Task 3'));
            }, 300);
      } catch {
            reject(new Error("Unexpected error!"));
      }
    });
}

function runCode() {
    const strings = [];
    return new Promise((resolve) => {
        doTask1((result) => {
            strings.push(result)
        }).then ( () => {
            return doTask2 ( (result) => {
                strings.push(result)
            })
        }).then( () => {
            return doTask3 ( (result) => {
                strings.push(result)
            })
        }).then( () => {
            resolve(strings);
        });
    });
}

runCode()
    .then( (result) => {
        console.log(result)
    })
    .catch( (error) => {
        console.log(error.message)
    })
