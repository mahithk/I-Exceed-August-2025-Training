class Sample extends Thread {
    public void run() {
        for (var i = 0; i < 10; i++) {
            try {
                System.out.println(i);
                Thread.sleep(1000);
            } catch (Exception e) {
            }
        }
    }
}

public class DemoThread6 {
    public static void main(String[] args) throws InterruptedException {
        Sample obj = new Sample();
        obj.start();
        for (var i = 0; i < 10; i++) {
            System.out.println("main\t" + i);
            Thread.sleep(1000);
        }
    }
}
