import java.io.*;

class DataHolder {
    private int value;

    public void setValue(int v) {
        value = v;
    }

    public int getValue() {
        return value;
    }
}

public class Main {
    public static void main(String[] args) {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        DataHolder holder = new DataHolder();
        try {
            System.out.print("Enter a number: ");
            int num = Integer.parseInt(br.readLine());
            holder.setValue(num);
            System.out.println("Retrieved value: " + holder.getValue());
        } catch (Exception e) {
            System.out.println("An error occurred: " + e.getMessage());
        }
    }
}
