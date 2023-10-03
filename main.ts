input.onButtonPressed(Button.A, function () {
    reading = input.lightLevel()
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    basic.pause(500)
    basic.showString("M")
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showNumber(reading)
    basic.pause(500)
    basic.showString("M")
})
let reading = 0
basic.showString("M")
reading = input.lightLevel()
basic.pause(100)
