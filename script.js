function chunkString(str, chunkLength) {
    let chunks = [];
    for (let i = 0; i < str.length; i += chunkLength) {
        chunks.push(str.substring(i, i + chunkLength));
    }
    return chunks;
}
console.log(chunkString("Hello, world!", 5)); // ["Hello", ", wor", "ld!"]
console.log(chunkString("12345", 2)); // ["12", "34", "5"]
console.log(chunkString("abc", 5));