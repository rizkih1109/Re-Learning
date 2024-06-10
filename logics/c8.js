function pola(str) {
    const angka = str.split(' ')
    for (let i = 0; i <= 9; i++) {
        for (let j = 0; j <= 9; j++) {
            if (angka[0].replace('#', i) * angka[2] == angka[4].replace('#', j)) return [i,j]
        }
    }
}

console.log(pola("42#3 * 188 = 80#204"))
console.log(pola("8#61 * 895 = 78410#5"))