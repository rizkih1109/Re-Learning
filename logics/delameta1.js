let angka = [2,7,11,15]

function check(param) {
    const hasil = []
    let nilai = false
    for (let i = 0; i < angka.length; i++) {
        for (let j = i + 1; j <angka.length; j++) {
            if (angka[i] + angka[j] == param) {
                nilai = true
                hasil.push(i, j)
            } 
        }
    }
    if(!nilai) return 'no way'
    return hasil
}

console.log(check(11))
console.log(check(22))
console.log(check(13))
console.log(check(9))