// contoh block scope

let globalScope = "global scope";

function coba(param) {
    let functionScope = "function scope";

    if (param) {
        let decisionScope = 'decision scope 1'
        globalScope = 'ini global scope' // mengupdate value diatas
        console.log("1. ", globalScope, "2. ", functionScope, "3. ", decisionScope)
    }
    else if (param) {
        let decisionScope = 'decision scope 2';
        console.log("1. ", globalScope, "2. ", functionScope, "3. ", decisionScoe)
    }
}

coba(true) // karena jika true maka if kondisi
console.log(globalScope) // terupdate valuenya