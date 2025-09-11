import java.util.*;

public class UniqueEmails {
    public static void main(String[] args) {
        String[] emails = {
            "test.email+alex@leetcode.com",
            "test.e.mail+bob.cathy@leetcode.com",
            "testemail+david@lee.tcode.com",
            "test.email@leetcode.com"
        };

        Set<String> set = new HashSet<>();
        for (String email : emails) {
            String[] parts = email.split("@");
            String local = parts[0].split("\\+")[0];
            local = local.replace(".", "");
            set.add(local + "@" + parts[1]);
        }

        System.out.println("Unique Emails Count: " + set.size());
        for (String e : set) {
            System.out.println(e);
        }
    }
}
