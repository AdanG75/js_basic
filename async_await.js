async function doTask1(callback) {
    return new Promise( (resolve, reject) => {
        try {
            setTimeout(() => resolve(callback('Task 1')), 300);
        } catch {
            reject (new Error("An unexpected error occurs!"))
        }
    }) 
  }
  
async function doTask2(callback) {
    return new Promise( (resolve, reject) => {
        try {
            setTimeout(() => resolve(callback('Task 2')), 300);
        } catch {
            reject (new Error("An unexpected error occurs!"))
        }
    }) 
}
  
async function doTask3(callback) {
    return new Promise( (resolve, reject) => {
        try {
            setTimeout(() => resolve(callback('Task 3')), 300);
        } catch {
            reject (new Error("An unexpected error occurs!"))
        }
    }) 
}

async function runCode() {
    const strings = [];
    
    await doTask1((rta1) => {
        strings.push(rta1);
    });
    await doTask2((rta2) => {
        strings.push(rta2);
    });
    await doTask3((rta3) => {
        strings.push(rta3);
    });
      
    return strings;
}


async function printAsyncResult(callback) {
    const result = await callback
    console.log(result)
}

printAsyncResult(runCode())