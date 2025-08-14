import java.util.ArrayList;
import java.util.List;

class ArrayListModifiedExample {
    public static void main(String[] args) {
        List<String> languages = new ArrayList<String>();

        languages.add("Java");
        languages.add("Python");
        languages.add("C++");
        languages.add("JavaScript");
        languages.add("Ruby");

        System.out.println("Programming Languages: " + languages);

        String secondLanguage = languages.get(1);
        System.out.println("Second Language: " + secondLanguage);

        languages.set(2, "C#");
        System.out.println("After Modifying Third Language: " + languages);

        languages.remove("Ruby");
        System.out.println("After Removing Ruby: " + languages);

        boolean hasJava = languages.contains("Java");
        System.out.println("Contains Java? " + hasJava);

        int size = languages.size();
        System.out.println("Size of List: " + size);

        languages.clear();
        System.out.println("After Clearing: " + languages);

        System.out.println("Is List Empty? " + languages.isEmpty());
    }
}
