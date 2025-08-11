class Call {
    synchronized public void callMe(String msg) {
        System.out.print("[");
        System.out.print(msg);
        System.out.print("]");
        display();
    }
    public void display() {
        for (char ch = 'A'; ch <= 'J'; ch++) {
            System.out.print(ch);
        }
    }
}
class Caller extends Thread {
    Call obj;
    String str;
    Thread t = new Thread(this);
    Caller(Call obj, String str) {
        this.str = str;
        this.obj = obj;
        t.start();
    }
    public void run() {
        obj.callMe(str);
    }
}
public class DemoSync {
    public static void main(String[] args) throws Exception {
        Call obj = new Call();
        Caller c1 = new Caller(obj, "First");
        c1.join();
        Caller c2 = new Caller(obj, "Second");
        c2.join();
        Caller c3 = new Caller(obj, "Third");
    }
}
