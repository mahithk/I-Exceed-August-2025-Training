class DemoBlock {
    static {
        System.out.println("Inside first static block");
    }
    static {
        System.out.println("Inside second static block");
    }
    {
        System.out.println("Inside first instance block");
    }
    {
        System.out.println("Inside second instance block");
    }
    DemoBlock() {
        System.out.println("Inside default constructor");
        System.out.println("Object created successfully");
    }
    DemoBlock(String message) {
        System.out.println("Inside parameterized constructor");
        System.out.println("Message: " + message);
    }
    public static void main(String[] args) {
        System.out.println("Inside main method");
        DemoBlock obj1 = new DemoBlock();
        DemoBlock obj2 = new DemoBlock("Hello from parameterized constructor");
    }
}
