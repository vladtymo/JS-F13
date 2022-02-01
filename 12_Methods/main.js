// object
let conditioner = {
    // properties
    model: "Samsung S350",
    year: 2018,
    mode: "Cooling",
    temperature: 22.5,
    minTemperature: 16,
    maxTemperature: 32,
    isOn: false,
    // methods
    // show: function() {
    //     document.write(`<div>${this.model}: ${this.mode} ${this.temperature}ºC</div>`);
    // }
    show() {
        if (this.isOn)
            document.write(`<div>${this.model}: ${this.mode} ${this.temperature}ºC</div>`);
        else
            document.write(`<div>Conditioner ${this.model} is OFF</div>`);
    },
    switchPower() {
        this.isOn = !this.isOn;
    },
    setHeatingMode() {
        this.mode = "Heating";
    },
    setCoolingMode() {
        this.mode = "Cooling";
    },
    setTemperature(newT) {
        if(newT >= this.minTemperature && newT <= this.maxTemperature)
            this.temperature = newT;
        else
            console.warn(`Can not set T. The value must be in range ${this.minTemperature}-${this.maxTemperature}ºC`);
    },
    increaseT() {
        if(this.temperature < this.maxTemperature)
            this.temperature += 0.5;
        else
            console.warn(`Can not increate T. You reached the max value of ${this.maxTemperature}ºC`);
    },
    decreaseT() {
        if (this.temperature > this.minTemperature)
            this.temperature -= 0.5;
        else
            console.warn(`Can not decrease T. You reached the min value of ${this.minTemperature}ºC`);
    }
}

// function
// function showConditioner(conditioner) {
//     document.write(`<div>${conditioner.model}: ${conditioner.mode} ${conditioner.temperature}ºC</div>`);
// }
//showConditioner(conditioner);

conditioner.setHeatingMode();
conditioner.show();

conditioner.switchPower();

conditioner.setCoolingMode();
conditioner.setTemperature(8);

conditioner.decreaseT();
conditioner.decreaseT();
conditioner.decreaseT();
conditioner.decreaseT();

conditioner.show();
