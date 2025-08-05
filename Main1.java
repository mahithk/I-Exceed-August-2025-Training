import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
class InputHandler {
    private BufferedReader reader;
    public InputHandler() {
        reader = new BufferedReader(new InputStreamReader(System.in));
    }

    public int readInteger() throws IOException {
        String input = reader.readLine();
        return Integer.parseInt(input);
    }
}
class Calculator {
    private InputHandler handler;

    public Calculator() {
        handler = new InputHandler();
    }
    public void performAddition() {
        try {
            int number1 = handler.readInteger();
            int number2 = handler.readInteger();
            int result = number1 + number2;
            System.out.println(result);
        } catch (Exception e) {
            System.out.println("Invalid input. Please enter valid integers.");
        }
    }
}
public class Main1 {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        calc.performAddition();
    }
}
