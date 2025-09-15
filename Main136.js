class FileReader {
    constructor(files) {
        this.files = files;
    }
    readFile(fileName) {
        try {
            if (!this.files.includes(fileName)) {
                throw new Error("File not found: " + fileName);
            }
            return "Reading content of " + fileName;
        } catch (error) {
            return error.message;
        } finally {
            console.log("Read attempt finished for: " + fileName);
        }
    }
}
const reader = new FileReader(["data.txt", "report.pdf", "image.png"]);
console.log(reader.readFile("data.txt"));
console.log(reader.readFile("notes.doc"));
