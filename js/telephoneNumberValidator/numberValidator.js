const FORMAT =
    /(^1?\s?\d{10})|(^1?\s?[(]\d{3}[)]\s?\d{3}-\d{4})|(^1?\s?\d{3}\s?-?\d{3}\s?-?\d{4})/
;

function telephoneCheck(str) {
    const digits = str.replace(/\D/g, '');
    if (digits === 10 && str[0] !== '1') {
        return !!str.match(new RegExp(FORMAT));
    } else if (digits === 11 && str[0] === '1') {
        return !!str.match(new RegExp(FORMAT));
    }
    return false;
}
