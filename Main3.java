public class Main3 {
    private String outerMessage = "This is the outer class.";
    class Inner {
        void display() {
            System.out.println("Accessing from Inner Class:");
            System.out.println(outerMessage);
        }
    }
    public void showInner() {
        Inner inner = new Inner();
        inner.display();
    }
    public static void main(String[] args) {
        Main3 outer = new Main3();
        outer.showInner();
    }
}
