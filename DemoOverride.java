interface Greetings {
    static void sayHello() {
        System.out.println("Hello Mahi from static method in interface");
    }
}

class Person {
    String name;
    int age;

    Person() {
        this.name = "Mahi";
        this.age = 21;
    }

    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    void showDetails() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}

class Employee extends Person {
    String designation;

    Employee(String name, int age, String designation) {
        super(name, age);
        this.designation = designation;
    }

    
    void showDetails() {
        System.out.println("Name: " + name + ", Age: " + age + ", Designation: " + designation);
    }
}

public class DemoOverride {
    public static void main(String[] args) {
        Greetings.sayHello();

        Person p1 = new Person();
        Person p2 = new Person("Alice", 30);
        Employee e1 = new Employee("Bob", 40, "Manager");

        p1.showDetails();
        p2.showDetails();
        e1.showDetails();
    }
}
