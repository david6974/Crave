input.onButtonPressed(Button.A, function () {
    basic.showString("Hello!")
    basic.showLeds(`
        # # # # #
        # # # # #
        . # . # .
        . # . # .
        . # # # .
        `)
    kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Forward, 100)
    kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, 100)
    basic.pause(2000)
    kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, 100)
    kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Reverse, 100)
    basic.pause(1100)
    kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, 100)
    kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, 100)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Duck)
    kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor1)
    kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor1)
    kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, 0)
    kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Forward, 0)
})
basic.forever(function () {
	
})
