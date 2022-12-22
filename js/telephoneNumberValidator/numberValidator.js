const formats = [
    /^1?\s?\d{3}-\d{3}-\d{4}/,
    /^1?\s?[(]\d{3}[)]\d{3}-\d{4}/,
    /^1?\s?[(]\d{3}[)]\s\d{3}-\d{4}/,
    /^1?\s?\d{3}\s\d{3}\s\d{4}/,
    /^1?\s?\d{10}/,
    /^1?\s?\d{3}\s\d{3}\s\d{4}/,
    /^1\s\d{3}\s\d{3}\s\d{4}/
];

function telephoneCheck(str) {
    let c = 0;
    if (str.replace(/\D/g, '').length === 10
        || str.replace(/\D/g, '').length === 11 && str[0] === '1') {
        formats.forEach(format => {
            if (str.match(new RegExp(format))) {
                c++;
            }
        })
    }
    return c > 0;
}