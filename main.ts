let temp = 0
basic.forever(function () {
    temp = input.temperature() * (9 / 5) + 32
    basic.showNumber(temp)
})
