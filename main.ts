radio.onReceivedNumber(function (receivedNumber) {
    if (rounds <= 3) {
        if (Myhand == receivedNumber) {
            basic.showString("Tie")
        } else if (Myhand == 1 && receivedNumber == 2) {
            basic.showString("P2 point")
            P1_score += 1
        } else if (Myhand == 2 && receivedNumber == 3) {
            basic.showString("P2 point")
            P1_score += 1
        } else if (Myhand == 3 && receivedNumber == 1) {
            basic.showString("P2 point")
            P1_score += 1
        } else if (Myhand == 2 && receivedNumber == 1) {
            basic.showString("p1 point")
            P2_score += 1
        } else if (Myhand == 3 && receivedNumber == 2) {
            basic.showString("P1 point")
            P2_score += 1
        } else if (Myhand == 1 && receivedNumber == 3) {
            basic.showString("P1 point")
            P2_score += 1
        }
    } else if (P2_score > P1_score) {
        basic.showString("P2 win")
    } else if (P2_score > P1_score) {
        basic.showString("P1 win")
    } else if (P2_score > P1_score) {
        basic.showString("no win")
    }
})
input.onButtonPressed(Button.A, function () {
    Myhand += 1
    if (Myhand == Rockindex) {
        Rock.showImage(0)
    } else if (Myhand == Paperindex) {
        Paper.showImage(0)
    } else if (Myhand == Scissorindex) {
        Scissor.showImage(0)
    }
})
input.onButtonPressed(Button.AB, function () {
    rounds += 1
    radio.sendNumber(Myhand)
})
input.onButtonPressed(Button.B, function () {
    Myhand += -1
    if (Myhand == Rockindex) {
        Rock.showImage(0)
    } else if (Myhand == Paperindex) {
        Paper.showImage(0)
    } else if (Myhand == Scissorindex) {
        Scissor.showImage(0)
    }
})
let Myhand = 0
let P1_score = 0
let P2_score = 0
let rounds = 0
let Scissor: Image = null
let Paper: Image = null
let Rock: Image = null
let Scissorindex = 0
let Paperindex = 0
let Rockindex = 0
radio.setGroup(55)
basic.showIcon(IconNames.Heart)
Rockindex = 1
Paperindex = 2
Scissorindex = 3
Rock = images.createImage(`
    . . . . .
    . # # # .
    # # # # #
    # # # # #
    . . . . .
    `)
Paper = images.createImage(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
Scissor = images.createImage(`
    # # . . #
    # # . # .
    . . # . .
    # # . # .
    # # . . #
    `)
