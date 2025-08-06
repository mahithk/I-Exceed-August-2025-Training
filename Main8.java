class Sample {
    int x = 10;
    static int y = 20;

    public void display() {
        System.out.println("x = " + x);
        System.out.println("y = " + y);
    }

    static void display1() {
        System.out.println("x = " + new Sample().x);
        System.out.println("y = " + y);
    }
}

class DemoStaticVar {
    public static void main(String[] args) {
        Sample obj = new Sample();
        obj.display();
        Sample.display1();
    }
}
