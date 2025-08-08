class DemoThread7 {
    public static void main(String[] args) {
        Thread thread1 = new Thread() {
            public void run() {
                for (var i = 0; i < 10; i++) {
                    System.out.println("Thread 1 - Value: " + i);
                    try {
                        Thread.sleep(200);
                    } catch (InterruptedException e) {
                        System.out.println("Thread 1 Interrupted");
                    }
                }
            }
        };

        Thread thread2 = new Thread() {
            public void run() {
                for (var i = 10; i < 20; i++) {
                    System.out.println("Thread 2 - Value: " + i);
                    try {
                        Thread.sleep(300);
                    } catch (InterruptedException e) {
                        System.out.println("Thread 2 Interrupted");
                    }
                }
            }
        };

        Thread thread3 = new Thread() {
            public void run() {
                for (var i = 20; i < 30; i++) {
                    System.out.println("Thread 3 - Value: " + i);
                    try {
                        Thread.sleep(400);
                    } catch (InterruptedException e) {
                        System.out.println("Thread 3 Interrupted");
                    }
                }
            }
        };

        thread1.start();
        thread2.start();
        thread3.start();
    }
}
