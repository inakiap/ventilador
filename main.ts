input.onButtonPressed(Button.A, function () {
    activo = true
})
input.onButtonPressed(Button.B, function () {
    activo = false
})
let activo = false
edubitTrafficLightBit.setLed(LedColor.Green, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
basic.forever(function () {
    if (edubitPotentioBit.comparePot(PotCompareType.MoreThan, 5) && activo) {
        edubitMotors.runMotor(MotorChannel.M1, MotorDirection.Forward, edubitPotentioBit.readPotValue())
        edubitTrafficLightBit.setLed(LedColor.Green, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
        edubitTrafficLightBit.setLed(LedColor.Red, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
        images.createBigImage(`
            # # # . . # # . . #
            . . . . . . . . . .
            . . # # # . . # # .
            . . . . . . . . . .
            . # . # # # . # # #
            `).scrollImage(1, edubitPotentioBit.readPotValue())
    } else {
        edubitMotors.brakeMotor(MotorChannel.M1)
        edubitTrafficLightBit.setLed(LedColor.Red, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.Off))
        edubitTrafficLightBit.setLed(LedColor.Green, edubitTrafficLightBit.digitalStatePicker(DigitalIoState.On))
    }
})
basic.forever(function () {
    basic.showIcon(IconNames.No)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
})
