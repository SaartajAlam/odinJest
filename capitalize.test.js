const capitalize = require("./capitalize")

test("capitalize abc to become Abc", () => {
    expect(capitalize('abc')).toEqual('Abc');
})