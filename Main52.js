let marks = 43;
if (marks <= 39) {
  console.log("Re appear");
} else if (marks >= 41 && marks <= 59) {
  console.log("Pass");
} else if (marks >= 61 && marks <= 79) {
  console.log("A grade");
} else if (marks >= 81 && marks <= 100) {
  console.log("A++ grade");
} else {
  console.log("Enter the proper marks");
}

let result =
  marks <= 39 ? "Re appear" :
  marks >= 41 && marks <= 59 ? "Pass" :
  marks >= 61 && marks <= 79 ? "A grade" :
  marks >= 81 && marks <= 100 ? "A++ grade" :
  "Enter proper marks";

console.log(result);
