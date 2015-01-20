describe ("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });
    
  describe("by default", function() {

    it("starts at 20 degrees", function() {
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe("the temperature", function() {
    it("can increase", function() {
      thermostat.increaseTemperature(2);
      expect(thermostat.temperature).toEqual(22);
    });

    it("can decrease", function() {
      thermostat.decreaseTemperature(2);
      expect(thermostat.temperature).toEqual(18);
    });

    it("can be set to a minimum of 10", function() {
      thermostat.decreaseTemperature(11);
      expect(thermostat.temperature).toBeGreaterThan(9);
    });

  });



  // describe("you can change temperature", function() {
  //   it ("by increasing it with the up button", function() {
  //     thermostat.pressUp();
  //     expect(thermostat.temperature).toEqual(21);
  //   });
  // });

});

// DONE... Thermostat starts at 20 degrees DONE. 
// The minimum temperature is 10 degrees
// If power saving mode is on, the maximum temperature is 25 degrees
// If power saving mode is off, the maximum temperature is 32 degrees
// Power saving mode is on by default
// You can reset the temperature to 20 by hitting the reset button
// thermostat should color the display based on energy usage - < 18 is green, < 25 is yellow, otherwise red
// You can increase the temp with the up button
// You can decrease the temp with the down button