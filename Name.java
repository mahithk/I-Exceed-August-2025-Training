import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class DataStreamExample {
    public static void main(String[] args) {
        String fileName = "data.bin";
        try (DataOutputStream dos = new DataOutputStream(new FileOutputStream(fileName))) {
            dos.writeInt(25);
            dos.writeDouble(99.99);
            dos.writeUTF("Hello World");
        } catch (IOException e) {
            e.printStackTrace();
        }
        try (DataInputStream dis = new DataInputStream(new FileInputStream(fileName))) {
            int num = dis.readInt();
            double decimal = dis.readDouble();
            String text = dis.readUTF();
            System.out.println("Int: " + num);
            System.out.println("Double: " + decimal);
            System.out.println("String: " + text);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
