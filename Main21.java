import java.io.File;
import java.io.IOException;

class FileOperations {
    public static void main(String[] args) throws IOException {
        File dir = new File("d:/java_prg/java_blore_aug25/docs");
        if (!dir.exists()) {
            boolean createdDir = dir.mkdirs();
            System.out.println("Directory created: " + createdDir);
        } else {
            System.out.println("Directory already exists.");
        }

        File file = new File(dir, "report.txt");
        if (!file.exists()) {
            boolean createdFile = file.createNewFile();
            System.out.println("File created: " + createdFile);
        } else {
            System.out.println("File already exists.");
        }

        System.out.println("Absolute Path: " + file.getAbsolutePath());
        System.out.println("Is Absolute Path? " + file.isAbsolute());
        System.out.println("File Exists? " + file.exists());

        if (file.exists()) {
            System.out.println("Readable? " + file.canRead());
            System.out.println("Writable? " + file.canWrite());
        }

        boolean deleted = file.delete();
        System.out.println("File deleted: " + deleted);
        System.out.println("File Exists after deletion? " + file.exists());
    }
}
