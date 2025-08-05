import java.io.DataInputStream;
import java.io.IOException;
public class Main5 {
    public static void main(String[] args) {
        DataInputStream dis = new DataInputStream(System.in);
        try {
            System.out.print("Enter a number: ");
            String input = dis.readLine();
            int number = Integer.parseInt(input);
            System.out.println("You entered: " + number);
        } catch (IOException e) {
            System.out.println("Error reading input.");
        } catch (NumberFormatException e) {
            System.out.println("Invalid number format.");
        }
    }
}
