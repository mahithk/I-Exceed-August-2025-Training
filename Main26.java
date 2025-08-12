import java.io.*;
import java.util.regex.*;

public class RemoveComments {
    public static void main(String[] args) {
        if (args.length != 2) {
            System.out.println("Usage: java RemoveComments <inputFile> <outputFile>");
            return;
        }
        StringBuffer buffer = new StringBuffer();
        try (BufferedReader reader = new BufferedReader(new FileReader(args[0]))) {
            String line;
            while ((line = reader.readLine()) != null) {
                buffer.append(line).append("\n");
            }
        } catch (IOException e) {
            e.printStackTrace();
            return;
        }
        String code = buffer.toString();
        code = code.replaceAll("//.*", "");
        code = code.replaceAll("/\\*.*?\\*/", "");
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(args[1]))) {
            writer.write(code);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
