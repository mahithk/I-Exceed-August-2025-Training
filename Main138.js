class JsonParser {
    parseData(jsonString) {
        try {
            let data = JSON.parse(jsonString);
            if (!data.name) throw new Error("Missing name field");
            return "Valid data for " + data.name;
        } catch (error) {
            return "Error: " + error.message;
        }
    }
}
const parser = new JsonParser();
console.log(parser.parseData('{"name":"Alice","age":25}'));
console.log(parser.parseData('{"age":30}'));
console.log(parser.parseData('invalid json'));
