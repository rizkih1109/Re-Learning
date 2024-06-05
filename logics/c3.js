// Cara Pertama

// function romawi(n) {
//     const lib = [
//         [1000, 'M'],
//         [900, 'CM'],
//         [500, 'D'],
//         [400, 'CD'],
//         [100, 'C'],
//         [90, 'XC'],
//         [50, 'L'],
//         [40, 'XL'],
//         [10, 'X'],
//         [9, 'IX'],
//         [5, 'V'],
//         [4, 'IV'],
//         [1, 'I'],
//     ]

//     if (n === 0 ) return '';
//     for (let i = 0; i < lib.length; i++) {
//         if (n >= lib[i][0]) {
//             return lib[i][1] + romawi(n - lib[i][0])
//         }
//     }
// }

// console.log('Script Testing untuk Konversi Romawi\n')
// console.log('input | expected | result')
// console.log('4     | IV       | ', romawi(4))
// console.log('9     | IX       | ', romawi(9))
// console.log('13    | XIII     | ', romawi(13))
// console.log('1453  | MCDLIII  | ', romawi(1453))
// console.log('1646  | MCDXLVI  | ', romawi(1646))


// Cara Kedua

function romawi(n) {
    const lib = {
        M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90,
        L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1
    }

    let hasil = ''
    for (let x in lib) {
        while (n >= lib[x]) {
            n -= lib[x]
            hasil += x
        }
    }
    return hasil
}

console.log('Script Testing untuk Konversi Romawi\n')
console.log('input | expected | result')
console.log('4     | IV       | ', romawi(4))
console.log('9     | IX       | ', romawi(9))
console.log('13    | XIII     | ', romawi(13))
console.log('1453  | MCDLIII  | ', romawi(1453))
console.log('1646  | MCDXLVI  | ', romawi(1646))