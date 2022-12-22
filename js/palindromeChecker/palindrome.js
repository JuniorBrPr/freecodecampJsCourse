function palindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, '');
    str = str.toLowerCase();
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

palindrome("eye");