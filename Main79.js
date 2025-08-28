function stringOperations(input) {
    let length = input.length;
    let upper = input.toUpperCase();
    let lower = input.toLowerCase();
    let firstChar = input.charAt(0);
    let lastChar = input.charAt(length - 1);
    let subStr = input.substring(1, 5);
    let replaced = input.replace(/a/g, "@");
    let words = input.split(" ");
    let reversed = input.split("").reverse().join("");
    let includesWord = input.includes("test");
    let indexOfWord = input.indexOf("test");
    let trimmed = input.trim();
    let concatStr = input.concat(" Example");
    let sliced = input.slice(2, 7);
    let repeatStr = input.repeat(2);
    let pad = input.padStart(length + 5, "*");
    let searchWord = input.search("test");
    console.log("Original:", input);
    console.log("Upper:", upper);
    console.log("Lower:", lower);
    console.log("First Char:", firstChar);
    console.log("Last Char:", lastChar);
    console.log("Substring(1-5):", subStr);
    console.log("Replaced:", replaced);
    console.log("Words:", words);
    console.log("Reversed:", reversed);
    console.log("Includes 'test':", includesWord);
    console.log("Index of 'test':", indexOfWord);
    console.log("Trimmed:", trimmed);
    console.log("Concatenated:", concatStr);
    console.log("Sliced:", sliced);
    console.log("Repeated:", repeatStr);
    console.log("Padded:", pad);
    console.log("Search 'test':", searchWord);
}

stringOperations(" This is a test string ");
