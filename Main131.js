function wordFrequency(text) {
    let words = text.toLowerCase().split(/\W+/);
    let freqMap = new Map();
    for (let word of words) {
        if (word) {
            if (freqMap.has(word)) {
                freqMap.set(word, freqMap.get(word) + 1);
            } else {
                freqMap.set(word, 1);
            }
        }
    }
    return freqMap;
}
let text = "Map collections are powerful and Map stores key-value pairs";
let result = wordFrequency(text);
for (let [key, value] of result) {
    console.log(key, value);
}
