import java.io.*;
import java.nio.file.*;

public class FileReadWrite {
    public static void main(String[] args) {
        try {
            String content = "Hello World!\nJava File Handling Example.";
            Path path = Paths.get("example.txt");
            Files.write(path, content.getBytes());
            System.out.println("File exists: " + Files.exists(path));
            System.out.println("File size: " + Files.size(path) + " bytes");
            System.out.println("Absolute path: " + path.toAbsolutePath());
            String data = new String(Files.readAllBytes(path));
            System.out.println("Content:\n" + data);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
