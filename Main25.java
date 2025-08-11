class WorkerThread extends Thread {
    private String taskName;

    WorkerThread(String name) {
        taskName = name;
    }

    public void run() {
        for (var i = 0; i < 10; i++) {
            System.out.println(Thread.currentThread().getName() + " - " + taskName + " iteration " + i);
        }
    }
}

public class MultiThreadDemo {
    public static void main(String[] args) {
        WorkerThread thread1 = new WorkerThread("Task A");
        WorkerThread thread2 = new WorkerThread("Task B");

        thread1.setName("Worker-1");
        thread2.setName("Worker-2");

        thread1.start();
        thread2.start();

        for (var i = 0; i < 10; i++) {
            System.out.println("Main thread running iteration " + i);
        }
    }
}
