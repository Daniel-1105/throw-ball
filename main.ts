controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . 3 1 1 3 . . . . . . 
        . . . . . 2 1 1 1 1 2 . . . . . 
        . . . . . 2 1 1 1 1 2 . . . . . 
        . . . . . . 3 1 1 3 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, -100, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeScoreBy(1)
})
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    ....ffffff.........ccc..
    ....ff22ccf.......cc4f..
    .....ffccccfff...cc44f..
    ....cc24442222cccc442f..
    ...c9b4422222222cc422f..
    ..c9999b222222222222fc..
    .c2b991119222222222c22c.
    c2222b11992222ccccccc22f
    f222222222222c222ccfffff
    .f2222222222444222f.....
    ..ff2222222cf444222f....
    ....ffffffffff444222c...
    .........f2cfffc2222c...
    .........fcc2ffffffff...
    ..........fc2ffff.......
    ...........fffff........
    `, SpriteKind.Player)
mySprite.setPosition(145, 60)
let mySprite2 = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
    2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
    2 1 1 2 2 2 2 2 2 2 2 2 2 1 1 2 
    2 1 1 2 2 2 2 2 2 2 2 2 2 1 1 2 
    2 1 1 2 2 1 1 1 1 1 1 2 2 1 1 2 
    2 1 1 2 2 1 1 1 1 1 1 2 2 1 1 2 
    2 1 1 2 2 1 1 2 2 1 1 2 2 1 1 2 
    2 1 1 2 2 1 1 2 2 1 1 2 2 1 1 2 
    2 1 1 2 2 1 1 1 1 1 1 2 2 1 1 2 
    2 1 1 2 2 1 1 1 1 1 1 2 2 1 1 2 
    2 1 1 2 2 2 2 2 2 2 2 2 2 1 1 2 
    2 1 1 2 2 2 2 2 2 2 2 2 2 1 1 2 
    2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
    2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Enemy)
info.startCountdown(10)
info.setScore(0)
