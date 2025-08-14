import java.util.ArrayList;

public class ArrayListExampleModified {
    public static void main(String[] args) {
        ArrayList<String> languages = new ArrayList<String>();
        languages.add("JAVA");
        languages.add("PYTHON");
        languages.add("C++");
        languages.add("JAVASCRIPT");
        languages.add("KOTLIN");
        languages.add("RUBY");
        languages.add("GO");
        System.out.println("Initial List: " + languages);
        
        boolean removed = languages.remove("RUBY");
        System.out.println("Removed RUBY: " + removed);
        
        removed = languages.remove("SWIFT");
        System.out.println("Removed SWIFT: " + removed);
        
        removed = languages.remove("JAVA");
        System.out.println("Removed JAVA: " + removed);
        
        System.out.println("List after removals: " + languages);
        
        removed = languages.remove("C++");
        System.out.println("Removed C++: " + removed);
        
        removed = languages.remove("KOTLIN");
        System.out.println("Removed KOTLIN: " + removed);
        
        System.out.println("Final List: " + languages);
    }
}
