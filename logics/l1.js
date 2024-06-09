const txt = 'NEGIE1'

function reverse(txt) {
    return txt.replace(/[A-Za-z]+/g, x => Array.from(x).reverse().join(''))
}

console.log(reverse(txt))