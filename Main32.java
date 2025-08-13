import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class FileReadExample {
    public static void main(String[] args) {
        FileReadExample example = new FileReadExample();
        example.displayFileContent("data.txt");
    }

    public void displayFileContent(String fileName) {
        BufferedReader reader = null;
        try {
            FileReader fileReader = new FileReader(fileName);
            reader = new BufferedReader(fileReader);
            String textLine = reader.readLine();
            while (textLine != null) {
                System.out.println(textLine);
                textLine = reader.readLine();
            }
        } catch (IOException ex) {
            System.out.println("Error reading file: " + ex.getMessage());
        } finally {
            try {
                if (reader != null) {
                    reader.close();
                }
            } catch (IOException ex) {
                System.out.println("Error closing reader.");
            }
        }
    }
}
