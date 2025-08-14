import java.util.*;

class Sample {
    ArrayList<String> languages = new ArrayList<String>();

    Sample() {
        languages.add("C");
        languages.add("C++");
        languages.add("Python");
        languages.add("Java");
        languages.add("JavaScript");
        languages.add("Rust");
        languages.add("Go");

        Iterator<String> itr = languages.iterator();
        System.out.println("Using Iterator:");
        while (itr.hasNext()) {
            System.out.println(itr.next());
        }

        ListIterator<String> listItr = languages.listIterator();
        System.out.println("\nUsing ListIterator (Forward):");
        while (listItr.hasNext()) {
            System.out.println(listItr.next());
        }

        System.out.println("\nUsing ListIterator (Backward):");
        while (listItr.hasPrevious()) {
            System.out.println(listItr.previous());
        }

        System.out.println("\nUsing for-each loop:");
        for (String lang : languages) {
            System.out.println(lang);
        }
    }
}

class DemoArrayList {
    public static void main(String[] args) {
        new Sample();
    }
}
