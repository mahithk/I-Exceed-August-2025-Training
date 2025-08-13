import java.io.StringReader;
import java.io.IOException;

public class StringReaderDemo {
    public static void main(String[] args) {
        String data = "Learning StringReader in a different style!";
        StringReader sr = null;
        try {
            sr = new StringReader(data);
            int value = sr.read();
            while (value != -1) {
                char character = (char) value;
                System.out.print(character);
                value = sr.read();
            }
        } catch (IOException ex) {
            System.out.println("Error reading the string: " + ex.getMessage());
        } finally {
            if (sr != null) {
                sr.close();
            }
        }
    }
}
