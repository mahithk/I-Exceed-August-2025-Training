import java.io.*;

class Employee implements Serializable {
    private int code;
    private String name;
    private String role;
    private double pay;

    public Employee(int code, String name, String role, double pay) {
        this.code = code;
        this.name = name;
        this.role = role;
        this.pay = pay;
    }

    public int getCode() { return code; }
    public String getName() { return name; }
    public String getRole() { return role; }
    public double getPay() { return pay; }
}

public class EmployeeData {
    public static void main(String[] args) throws Exception {
        Employee emp = new Employee(101, "Anil", "Manager", 95000);
        ObjectOutputStream out = new ObjectOutputStream(new FileOutputStream("empdata.bin"));
        out.writeObject(emp);
        out.close();
        ObjectInputStream in = new ObjectInputStream(new FileInputStream("empdata.bin"));
        Employee loaded = (Employee) in.readObject();
        in.close();
        System.out.println("Name: " + loaded.getName());
        System.out.println("Code: " + loaded.getCode());
        System.out.println("Role: " + loaded.getRole());
        System.out.println("Pay: " + loaded.getPay());
    }
}
