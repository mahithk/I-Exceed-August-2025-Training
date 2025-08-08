class Sample extends Thread {
    Thread t = new Thread(this);

    public void run() {
        t.setName("i-exceed thread");
        System.out.println("Inside run method\t" + t.getName());
        for (int i = 1; i <= 5; i++) {
            System.out.println(t.getName() + " is running iteration " + i);
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
                System.out.println("Thread interrupted");
            }
        }
        System.out.println(t.getName() + " has finished execution");
    }
}

class DemoThread3 {
    public static void main(String asd[]) {
        System.out.println("Name in Main method\t" + Thread.currentThread().getName());
        Sample obj = new Sample();
        obj.start();
        for (int i = 1; i <= 5; i++) {
            System.out.println(Thread.currentThread().getName() + " is running iteration " + i);
            try {
                Thread.sleep(700);
            } catch (InterruptedException e) {
                System.out.println("Main thread interrupted");
            }
        }
        System.out.println(Thread.currentThread().getName() + " has finished execution");
    }
}
