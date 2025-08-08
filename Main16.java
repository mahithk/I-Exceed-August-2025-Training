class Sample extends Thread {
    public Sample(String name) {
        super(name);
    }

    public void run() {
        System.out.println("Thread " + Thread.currentThread().getName() + " is starting.");
        try {
            for (int i = 1; i <= 5; i++) {
                System.out.println("Thread " + Thread.currentThread().getName() + " - Count: " + i);
                Thread.sleep(500);
            }
        } catch (InterruptedException e) {
            System.out.println("Thread " + Thread.currentThread().getName() + " interrupted.");
        }
        System.out.println("Thread " + Thread.currentThread().getName() + " has finished.");
    }
}

class DemoThread2 {
    public static void main(String[] args) {
        Sample obj1 = new Sample("Alpha");
        Sample obj2 = new Sample("Beta");
        Sample obj3 = new Sample("Gamma");

        obj1.start();
        obj2.start();
        obj3.start();

        try {
            obj1.join();
            obj2.join();
            obj3.join();
        } catch (InterruptedException e) {
            System.out.println("Main thread interrupted.");
        }

        System.out.println("All threads have completed execution.");
    }
}
