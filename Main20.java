class Sample extends Thread {
    Thread t = new Thread(this);

    public void run() {
        for (int i = 0; i < 10; i++) {
            try {
                System.out.println(i);
                t.sleep(1000);
            } catch (InterruptedException e) {
            }
        }
    }
}

public class DemoThreadJoin {
    public static void main(String[] args) throws InterruptedException {
        Sample obj1 = new Sample();
        Sample obj2 = new Sample();
        Sample obj3 = new Sample();

        obj1.start();
        obj1.join();

        obj2.start();
        obj2.join();

        obj3.start();
    }
}
