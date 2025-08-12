import java.io.*;
import java.nio.file.*;
import java.util.regex.*;

public class CommentRemover {
    public static void main(String[] args) throws IOException {
        String inputFile = "Sample.java";
        String outputFile = "CleanedSample.java";
        String content = Files.readString(Path.of(inputFile));
        String cleaned = removeComments(content);
        Files.writeString(Path.of(outputFile), cleaned);
        StringBuilder sb = new StringBuilder();
        sb.append("StringBuilder in Java is a mutable sequence of characters. ")
          .append("It provides methods like append, insert, delete, and reverse for efficient string modifications. ")
          .append("File reading in Java can be done using java.nio.file.Files or traditional streams. ")
          .append("Removing comments from Java code can be achieved with regex matching for single-line and multi-line comments. ")
          .append("This program demonstrates StringBuilder usage, file reading, and Java comment removal.");
        System.out.println(sb.toString());
    }

    private static String removeComments(String code) {
        String singleLine = "//.*";
        String multiLine = "/\\*[\\s\\S]*?\\*/";
        return code.replaceAll(singleLine, "").replaceAll(multiLine, "");
    }
}
