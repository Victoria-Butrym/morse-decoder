const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let sentence = expr.split("**********");
    let decoded = "";

    for(let i = 0; i < sentence.length; i++) {
        let lettersCount = sentence[i].length / 10; //the amount of letters in a word
        let words = [];
        position = 0;

        for(let j = 0; j < lettersCount; j++) {
            let currentLetter = sentence[i].substr(position, 10); //dividing to a single letter

            currentLetter = currentLetter.replace(/00/gi, '');
            currentLetter = currentLetter.replace(/10/gi, '.');
            currentLetter = currentLetter.replace(/11/gi, '-');

            position += 10; //move to another letter
            words[j] = currentLetter;
        }

        for(let k = 0; k < words.length; k++) {
            decoded += MORSE_TABLE[words[k]];
        }
        decoded += " ";
    }

    decoded = decoded.replace(/\s$/, '');

    return decoded;
}



module.exports = {
    decode
}