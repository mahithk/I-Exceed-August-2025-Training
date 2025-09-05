function EventEmitter() {
    this.events = {};
}

EventEmitter.prototype.on = function(event, listener) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(listener);
};

EventEmitter.prototype.emit = function(event, data) {
    if (this.events[event]) {
        this.events[event].forEach(listener => listener(data));
    }
};

let emitter = new EventEmitter();
emitter.on("message", (msg) => console.log("Listener 1:", msg));
emitter.on("message", (msg) => console.log("Listener 2:", msg));
emitter.emit("message", "Hello Callbacks!");
