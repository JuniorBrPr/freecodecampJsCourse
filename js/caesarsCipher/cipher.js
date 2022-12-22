function rot13(str) {
    let strCharArr = str.split('');
    let newStr = '';

    strCharArr.map(char => {
        let charCode = char.charCodeAt(0);
        if (charCode >= 65 && charCode <= 90) {
            charCode += 13;
            if (charCode > 90) {
                charCode -= 26;
            }
        }
        newStr += String.fromCharCode(charCode);
    });

    return newStr;
}

rot13("SERR PBQR PNZC");