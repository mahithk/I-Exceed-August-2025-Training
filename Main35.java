import java.io.ByteArrayInputStream;

public class ByteArrayExample {
    public static void main(String[] args) {
        byte[] data = {72, 101, 108, 108, 111, 33};
        ByteArrayInputStream inputStream = new ByteArrayInputStream(data);
        System.out.println("Bytes available at start: " + inputStream.available());
        int byteValue;
        while ((byteValue = inputStream.read()) != -1) {
            char ch = (char) byteValue;
            System.out.println("Read character: " + ch);
        }
        System.out.println("Bytes available at end: " + inputStream.available());
        byte[] anotherData = {77, 121, 74, 97, 118, 97};
        ByteArrayInputStream secondStream = new ByteArrayInputStream(anotherData);
        System.out.println("Second stream bytes: " + secondStream.available());
        while ((byteValue = secondStream.read()) != -1) {
            System.out.print((char) byteValue + " ");
        }
        System.out.println();
        System.out.println("Second stream remaining bytes: " + secondStream.available());
    }
}
