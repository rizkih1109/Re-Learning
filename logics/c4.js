// Cara pertama

function indexPrime(n) {
    const hasil = [];
    let khusus = n * 20;
    const cekbip = (n) => {
        for (let i = 2; i < n; i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }
    for (let i = 2; i < khusus; i++) {
        if (cekbip(i) == true) {
            hasil.push(i);
        }
    }
    return hasil[n - 1];

}

console.log(indexPrime(4))
console.log(indexPrime(500))
console.log(indexPrime(37786))

// Cara kedua

function indexPrime(param) {
    let count = 0
    for (let i =2; ; i++){
        let cekParam = true
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j == 0) cekParam = false
        }
        if (cekParam == true) count++
        if (count == param) return i
    }
}

console.log(indexPrime(4))
console.log(indexPrime(500))
console.log(indexPrime(37786))
