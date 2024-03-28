radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("" + (receivedNumber))
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("123")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("456")
})
basic.showLeds(`
    # # . . .
    . . # # .
    . . # # .
    . # . # #
    # # # # #
    `)
radio.setGroup(60)
