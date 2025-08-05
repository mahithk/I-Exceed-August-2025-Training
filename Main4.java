public class Main4 {
    public static void main(String[] args) {
        System.out.println("Using StringBuffer:");
        StringBuffer buffer = new StringBuffer("Hello");
        buffer.append(" World");
        buffer.insert(5, ",");
        buffer.replace(6, 11, "Java");
        buffer.reverse();
        System.out.println("Final StringBuffer: " + buffer);

        System.out.println("\nUsing StringBuilder:");
        StringBuilder builder = new StringBuilder("Welcome");
        builder.append(" to Java");
        builder.insert(7, ",");
        builder.delete(0, 1);
        builder.reverse();
        System.out.println("Final StringBuilder: " + builder);
    }
}
