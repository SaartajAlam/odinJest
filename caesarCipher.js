function caesarCipher(str, num){
    res = []
    for (let i = 0; i < str.length; i++){
        if (!isAlpha(str.charAt(i))) {
            res.push(str.charAt(i))
            continue;
        }
        let code = 0
        if (isUpper(str.charAt(i))){
            code = 65 + ((str.charCodeAt(i) - 65 + num ) % 26)
        }
        else {
            code = 97 + ((str.charCodeAt(i) - 97 + num ) % 26)
        }
        res.push(String.fromCodePoint(code))
    }
    return res.join("")
}

function isAlpha(char){
    let code = char.charCodeAt(0)
    return (code >= 65 && code <= 90) || (code >= 97 && code <= 122)
}

function isUpper(char){
    let code = char.charCodeAt(0)
    return code >= 65 && code <= 90
}

module.exports = caesarCipher