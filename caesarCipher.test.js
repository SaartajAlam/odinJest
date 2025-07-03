const caesarCipher = require("./caesarCipher")

test('Caesar Cipher', () => {
    expect(caesarCipher('xyz', 3)).toEqual('abc')
    expect(caesarCipher('HeLLo', 3)).toEqual('KhOOr')
    expect(caesarCipher('Hello, World!', 3)).toEqual('Khoor, Zruog!')
})