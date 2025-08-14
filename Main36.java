import java.util.*;

class LanguageList {
    ArrayList<String> languages = new ArrayList<>();

    LanguageList() {
        languages.add("Python");
        languages.add("Java");
        languages.add("JavaScript");
        languages.add("Scala");
        languages.add("Go");
        languages.add("Ruby");
        languages.add("Kotlin");

        System.out.println("Using for-each loop:");
        for (String lang : languages) {
            System.out.println(lang);
        }

        System.out.println("\nUsing forEach and lambda:");
        languages.forEach(l -> System.out.println(l.toUpperCase()));

        System.out.println("\nUsing Iterator:");
        Iterator<String> itr = languages.iterator();
        while (itr.hasNext()) {
            System.out.println(itr.next());
        }

        System.out.println("\nUsing ListIterator (forward):");
        ListIterator<String> listItr = languages.listIterator();
        while (listItr.hasNext()) {
            System.out.println(listItr.next());
        }

        System.out.println("\nUsing ListIterator (backward):");
        while (listItr.hasPrevious()) {
            System.out.println(listItr.previous());
        }
    }
}

class DemoArrayList {
    public static void main(String[] args) {
        new LanguageList();
    }
}
