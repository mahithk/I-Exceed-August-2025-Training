import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;

public class FileDisplay {
    public static void main(String[] args) {
        FileReader fileReader = null;
        try {
            fileReader = new FileReader("example.txt");
            int data;
            while (true) {
                data = fileReader.read();
                if (data == -1) {
                    break;
                }
                System.out.print((char) data);
            }
        } catch (FileNotFoundException e) {
            System.out.println("The file was not found.");
        } catch (IOException e) {
            System.out.println("Error occurred while reading the file.");
        } finally {
            if (fileReader != null) {
                try {
                    fileReader.close();
                } catch (IOException e) {
                    System.out.println("Error closing the file.");
                }
            }
        }
    }
}
