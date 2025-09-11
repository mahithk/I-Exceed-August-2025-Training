import java.util.*;

public class WordCounter {
    public static void main(String[] args) {
        String text = "java is powerful and java is popular but java is complex";
        String[] words = text.split(" ");
        Map<String, Integer> map = new HashMap<>();

        for (String word : words) {
            map.put(word, map.getOrDefault(word, 0) + 1);
        }

        for (Map.Entry<String, Integer> entry : map.entrySet()) {
            System.out.println(entry.getKey() + " : " + entry.getValue());
        }

        String mostUsed = "";
        int max = 0;
        for (Map.Entry<String, Integer> entry : map.entrySet()) {
            if (entry.getValue() > max) {
                max = entry.getValue();
                mostUsed = entry.getKey();
            }
        }
        System.out.println("Most Frequent Word: " + mostUsed + " (" + max + ")");
    }
}
