import java.util.*;

class Task {
    String name;
    int priority;
    Task(String name, int priority) {
        this.name = name;
        this.priority = priority;
    }
}

public class TaskScheduler {
    public static void main(String[] args) {
        PriorityQueue<Task> queue = new PriorityQueue<>((a, b) -> b.priority - a.priority);

        queue.add(new Task("Write Report", 2));
        queue.add(new Task("Fix Bug", 5));
        queue.add(new Task("Update Website", 3));
        queue.add(new Task("Attend Meeting", 4));
        queue.add(new Task("Code Review", 1));

        while (!queue.isEmpty()) {
            Task t = queue.poll();
            System.out.println("Executing Task: " + t.name + " (Priority " + t.priority + ")");
        }
    }
}
