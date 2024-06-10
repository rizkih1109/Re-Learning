function stringManipulation(word) {
    let vokal = 'aiueo'
    if (!vokal.includes(word.charAt(0))) console.log(word.slice(1).concat(word.charAt(0)) + 'nyo')
    else console.log(word)
}

stringManipulation('ayam')
stringManipulation('bebek')