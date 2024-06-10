function sentenceManipulation(word) {
    let vokal = 'aiueo'
    let kalimat = ''
    for (let x of word.split(' ')) {
        if (!vokal.includes(x.charAt(0))) kalimat += (x.slice(1).concat(x.charAt(0)) + 'nyo ')
        else kalimat += x + ' '
    }
    console.log(kalimat)
}

sentenceManipulation('ibu pergi ke pasar bersama aku')