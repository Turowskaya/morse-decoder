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
    'space':  ' ',
};

function decode(expr) {
    let arr = [];

    for (i=0; i<expr.length; i=i+10){
     arr.push(expr.slice(i, i+10));
    }

    let arr2 = [];

    for(i=0; i<arr.length; i++){

        let str = '';

        for(j=0; j<arr[i].length; j= j+2){

            if(arr[i].includes('*')){
            arr2.push('space');
            break;
            } else if(arr[i].slice(j, j+2) === '10'){
            str = str + '.';
            } else if (arr[i].slice(j, j+2) === '11'){
            str = str + '-';
            }
        }
        arr2.push(str);
    }

    let arr3 = [];

    for(i=0; i<arr2.length; i++){
        for (let key in MORSE_TABLE){
            if(arr2[i] === key){
                arr3.push(MORSE_TABLE[key]);
            }
        }
    }

    return arr3.join('');

}

module.exports = {
    decode
}