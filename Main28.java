import java.io.*;

public class DataInputExample {
    public static void main(String[] args) {
        try {
            FileOutputStream fos = new FileOutputStream("data.bin");
            DataOutputStream dos = new DataOutputStream(fos);
            dos.writeInt(123);
            dos.writeDouble(45.67);
            dos.writeUTF("Hello World");
            dos.close();
            FileInputStream fis = new FileInputStream("data.bin");
            DataInputStream dis = new DataInputStream(fis);
            int num = dis.readInt();
            double val = dis.readDouble();
            String text = dis.readUTF();
            dis.close();
            System.out.println("Int: " + num);
            System.out.println("Double: " + val);
            System.out.println("UTF String: " + text);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
