import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.nio.file.Files;
import java.util.Arrays;
import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;

abstract class CryptoOperation {
    protected final String algorithm;
    protected final byte[] key;

    public CryptoOperation(String algorithm, String key) {
        this.algorithm = algorithm;
        byte[] keyBytes = key.getBytes();
        this.key = Arrays.copyOf(keyBytes, 16);
    }

    public abstract void processFile(File inputFile, File outputFile) throws Exception;
}

class FileEncryptor extends CryptoOperation {
    public FileEncryptor(String key) {
        super("AES", key);
    }

    @Override
    public void processFile(File inputFile, File outputFile) throws Exception {
        SecretKeySpec secretKey = new SecretKeySpec(key, algorithm);
        Cipher cipher = Cipher.getInstance(algorithm);
        cipher.init(Cipher.ENCRYPT_MODE, secretKey);

        try (FileInputStream inputStream = new FileInputStream(inputFile);
             FileOutputStream outputStream = new FileOutputStream(outputFile)) {
            byte[] inputBytes = Files.readAllBytes(inputFile.toPath());
            byte[] outputBytes = cipher.doFinal(inputBytes);
            outputStream.write(outputBytes);
        }
    }
}

class FileDecryptor extends CryptoOperation {
    public FileDecryptor(String key) {
        super("AES", key);
    }

    @Override
    public void processFile(File inputFile, File outputFile) throws Exception {
        SecretKeySpec secretKey = new SecretKeySpec(key, algorithm);
        Cipher cipher = Cipher.getInstance(algorithm);
        cipher.init(Cipher.DECRYPT_MODE, secretKey);

        try (FileInputStream inputStream = new FileInputStream(inputFile);
             FileOutputStream outputStream = new FileOutputStream(outputFile)) {
            byte[] inputBytes = Files.readAllBytes(inputFile.toPath());
            byte[] outputBytes = cipher.doFinal(inputBytes);
            outputStream.write(outputBytes);
        }
    }
}

class CryptoManager {
    private final CryptoOperation operation;

    public CryptoManager(CryptoOperation operation) {
        this.operation = operation;
    }

    public void process(File inputFile, File outputFile) throws Exception {
        if (!inputFile.exists()) {
            throw new IllegalArgumentException("Input file doesn't exist: " + inputFile.getAbsolutePath());
        }
        operation.processFile(inputFile, outputFile);
    }
}

public class Cryptography{
    public static void main(String[] args) {
        try {
            String desktopPath = System.getProperty("user.home") + "/Desktop/";
            File originalFile = new File(desktopPath + "test.txt");
            File encryptedFile = new File(desktopPath + "encrypted.aes");
            File decryptedFile = new File(desktopPath + "decrypted.txt");
            String key = "16ByteSecretKey123";

            System.out.println("Starting encryption...");
            System.out.println("Original file: " + originalFile.getAbsolutePath());
            System.out.println("Encrypted file will be: " + encryptedFile.getAbsolutePath());

            CryptoManager encryptor = new CryptoManager(new FileEncryptor(key));
            encryptor.process(originalFile, encryptedFile);

            System.out.println("Encryption completed successfully!");
            System.out.println("\nStarting decryption...");
            System.out.println("Encrypted file: " + encryptedFile.getAbsolutePath());
            System.out.println("Decrypted file will be: " + decryptedFile.getAbsolutePath());

            CryptoManager decryptor = new CryptoManager(new FileDecryptor(key));
            decryptor.process(encryptedFile, decryptedFile);

            System.out.println("Decryption completed successfully!");
            System.out.println("\nAll operations completed. Check your files:");
            System.out.println("- Original: " + originalFile.getAbsolutePath());
            System.out.println("- Encrypted: " + encryptedFile.getAbsolutePath());
            System.out.println("- Decrypted: " + decryptedFile.getAbsolutePath());

        } catch (Exception e) {
            System.err.println("Error: " + e.getMessage());
            e.printStackTrace();
        }
    }
}