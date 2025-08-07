class Engine {
    void start() {
        System.out.println("Engine is starting");
    }
}

class DieselEngine extends Engine {
    void start() {
        System.out.println("Diesel engine is starting with heavy sound");
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
        Engine e = new DieselEngine();
        Car c = new Car(e);
        c.startCar();
    }
}
