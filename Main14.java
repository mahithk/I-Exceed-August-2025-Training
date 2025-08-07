class Engine {
    void start() {
        System.out.println("Generic engine starts");
    }
}

class PetrolEngine extends Engine {
    void start() {
        System.out.println("Petrol engine starts");
    }
}

class DieselEngine extends Engine {
    void start() {
        System.out.println("Diesel engine starts");
    }
}

class Car {
    Engine engine;
    Car(Engine engine) {
        this.engine = engine;
    }
    void startCar() {
        engine.start();
    }
}

public class Main {
    public static void main(String[] args) {
        Car petrolCar = new Car(new PetrolEngine());
        Car dieselCar = new Car(new DieselEngine());
        petrolCar.startCar();
        dieselCar.startCar();
    }
}
