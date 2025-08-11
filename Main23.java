class Display {
    synchronized public void showMessage(String msg) {
        System.out.print("<");
        System.out.print(msg.toUpperCase());
        System.out.print(">");
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
        }
    }
}

class Worker extends Thread {
    Display displayObj;
    String text;

    Worker(Display obj, String text) {
        this.displayObj = obj;
        this.text = text;
        start();
    }

    public void run() {
        displayObj.showMessage(text);
    }
}

public class SyncDemo {
    public static void main(String[] args) {
        Display shared = new Display();
        Worker w1 = new Worker(shared, "hello");
        Worker w2 = new Worker(shared, "hi");
        Worker w3 = new Worker(shared, "welcome");
    }
}
