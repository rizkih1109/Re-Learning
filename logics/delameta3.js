function saham(harga) {
    let nilaiMax = -Infinity
    let nilai = true

    for (let i = 0; i < harga.length; i++) {
        if (harga[i] < harga[i + 1]) {
            nilai = false
            break;
        } 
    }

    if(nilai) return 'harga selalu turun'

    for (let i = 0; i < harga.length; i++) {
        for (let j = 0; j < harga.length; j++) {
            if (i != j) {
                let selisih = harga[i] - harga[j]
                if (selisih > nilaiMax) {
                    nilaiMax = selisih
                }
            }
        }
    }
    return nilaiMax
}

// console.log(saham([100, 90, 80, 75, 65]))
console.log(saham([5, 6, 15, 3, 10, 22, 15]))