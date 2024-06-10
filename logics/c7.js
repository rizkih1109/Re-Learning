function weirdMultiply(sentence) {
    let angka = sentence.toString().split('').map(Number)
    if (sentence <= 9) return sentence
    let hasil = angka.reduce((total, num) => total * num)
    return weirdMultiply(hasil)
}

console.log(weirdMultiply(39));
console.log(weirdMultiply(999));
console.log(weirdMultiply(3));