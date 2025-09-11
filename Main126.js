import java.util.*;

class Student {
    String name;
    int marks;
    Student(String name, int marks) {
        this.name = name;
        this.marks = marks;
    }
}

public class StudentGrades {
    public static void main(String[] args) {
        List<Student> list = new ArrayList<>();
        list.add(new Student("Alice", 85));
        list.add(new Student("Bob", 72));
        list.add(new Student("Charlie", 90));
        list.add(new Student("David", 67));
        list.add(new Student("Eve", 95));

        list.sort((a, b) -> b.marks - a.marks);

        for (Student s : list) {
            System.out.println(s.name + " - " + s.marks);
        }

        int sum = 0;
        for (Student s : list) sum += s.marks;
        double avg = (double) sum / list.size();
        System.out.println("Average Marks: " + avg);

        Optional<Student> top = list.stream().max(Comparator.comparingInt(s -> s.marks));
        top.ifPresent(s -> System.out.println("Topper: " + s.name));
    }
}
