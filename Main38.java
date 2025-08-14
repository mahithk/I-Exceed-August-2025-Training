import java.util.*;

public class ParagraphIterator {
    public static void main(String[] args) {
        List<String> paragraph = new ArrayList<>();
        paragraph.add("The sun was setting behind the hills.");
        paragraph.add("A gentle breeze whispered through the trees.");
        paragraph.add("Birds were returning to their nests.");
        paragraph.add("The sky was painted in shades of orange and purple.");
        paragraph.add("It was a perfect evening to take a walk.");

        ListIterator<String> iterator = paragraph.listIterator();

        System.out.println("Reading paragraph in forward order:");
        while (iterator.hasNext()) {
            String line = iterator.next();
            System.out.println(line);
        }

        System.out.println();
        System.out.println("Reading paragraph in reverse order:");
        while (iterator.hasPrevious()) {
            String line = iterator.previous();
            System.out.println(line);
        }

        System.out.println();
        System.out.println("Re-reading every second line in forward order:");
        iterator = paragraph.listIterator();
        int index = 0;
        while (iterator.hasNext()) {
            String line = iterator.next();
            if (index % 2 == 0) {
                System.out.println(line);
            }
            index++;
        }
    }
}
