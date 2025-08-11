class StringConcatTest {
    public String concatWithString() {
        String str = "iexceed";
        for (int i = 0; i < 100000; i++) {
            str += "technology";
        }
        return str;
    }

    public String concatWithBuilder() {
        StringBuilder sb = new StringBuilder("iexceed");
        for (int i = 0; i < 100000; i++) {
            sb.append("technology");
        }
        return sb.toString();
    }
}

public class DemoStringPerformance {
    public static void main(String[] args) {
        StringConcatTest test = new StringConcatTest();
        long startString = System.currentTimeMillis();
        test.concatWithString();
        System.out.println(System.currentTimeMillis() - startString);
        long startBuilder = System.currentTimeMillis();
        test.concatWithBuilder();
        System.out.println(System.currentTimeMillis() - startBuilder);
    }
}
