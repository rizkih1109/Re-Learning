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

console.log(indexPrime(4));