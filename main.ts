while (true) {
    console.log("temperature" + input.temperature(TemperatureUnit.Fahrenheit))
    if (input.temperature(TemperatureUnit.Fahrenheit) > 350) {
        light.setAll(light.rgb(255, 0, 0))
    } else if (input.temperature(TemperatureUnit.Fahrenheit) > 68) {
        light.setAll(light.rgb(255, 255, 8))
    } else {
        light.setAll(light.rgb(250, 235, 215))
    }
    
}
