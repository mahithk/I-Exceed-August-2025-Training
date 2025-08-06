class Calculator {

    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }

    int add(int a, int b, int c) {
        return a + b + c;
    }

    String add(String a, String b) {
        return a + b;
    }
}

public class DemoOverload {
    public static void main(String[] args) {
        Calculator calc = new Calculator();

        System.out.println(calc.add(5, 10));
        System.out.println(calc.add(4.5, 3.2));
        System.out.println(calc.add(1, 2, 3));
        System.out.println(calc.add("Hello, ", "World!"));
    }
}
