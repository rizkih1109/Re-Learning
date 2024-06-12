let konstanta = 0
function Kaprekar(arr) {
    konstanta++
    let angka = arr.toString().split('').map(Number)
    let angka1 = parseInt(angka.sort((a,b) => a - b).join(''))
    let angka2 = parseInt(angka.sort((a,b) => b - a).join(''))
    
    let hasil = [angka1, angka2]
    let kap = hasil.reduce((total, num) => num - total)
    if (kap != 6174) return Kaprekar(kap)
    else return konstanta
}
console.log(Kaprekar(4621))
