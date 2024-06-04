// function deretKaskus(n) {
//     const result = []
//     const num = n * 3
//     for (let i = 3; i <= num; i += 3) {
//         if (i % 6 == 0 && i % 5 == 0) result.push('KASKUS')
//         else if (i % 6 == 0) result.push('KUS')
//         else if (i % 5 == 0) result.push('KAS')
//         else result.push(i)
//     }
//     return result
// }

// console.log(deretKaskus(10))

function deretKaskus(n) {
    const hasil = []
    for (let i = 1; i <= n; i++) {
        biltiga = i * 3
        if (biltiga % 6 == 0 && biltiga % 5 == 0) hasil.push('KASKUS')
        else if (biltiga % 6 == 0) hasil.push('KUS')
        else if (biltiga % 5 == 0) hasil.push('KAS')
        else hasil.push(i)
    }
    return hasil
}

console.log(deretKaskus(10))