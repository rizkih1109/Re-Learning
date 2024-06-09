const sentence = 'saya sangat senang mengerjakan soal algoritma'

function longest(word) {
    return word.split(' ').reduce((a,b) => a.length > b.length ? a : b)
}

console.log(longest(sentence))