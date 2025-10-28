/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: Isaac Ip 
 * Created on: Oct 2025
 * This program uses while statements.
*/

// variables
let loopCounter = 4
let neopixelStrip: neopixel.Strip = null

// cleanup
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    loopCounter = 4
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.White))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.White))
    neopixelStrip.show()
    while (loopCounter >= 0) {
        neopixelStrip.setPixelColor(loopCounter, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.show()
        basic.showNumber(loopCounter)
        loopCounter -= 1
        basic.pause(1000)
    }
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
