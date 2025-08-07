import java.lang.reflect.Method;

class Person {
    public void greet(String name) {
        System.out.println("Hello, " + name);
    }

    private int add(int a, int b) {
        return a + b;
    }
}

public class ReflectionExample {
    public static void main(String[] args) throws Exception {
        Person obj = new Person();
        Class<?> clazz = obj.getClass();

        Method greetMethod = clazz.getMethod("greet", String.class);
        greetMethod.invoke(obj, "Mahith");

        Method addMethod = clazz.getDeclaredMethod("add", int.class, int.class);
        addMethod.setAccessible(true);
        Object result = addMethod.invoke(obj, 10, 20);

        System.out.println("Sum: " + result);
    }
}
