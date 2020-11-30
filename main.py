while True:
    print("temperature" + input.temperature(TemperatureUnit.FAHRENHEIT))
    if input.temperature(TemperatureUnit.FAHRENHEIT) > 350:
        light.set_all(light.rgb(255, 0, 0))
    elif input.temperature(TemperatureUnit.FAHRENHEIT) > 68:
        light.set_all(light.rgb(255, 255, 8))
    else:
        light.set_all(light.rgb(250, 235, 215))