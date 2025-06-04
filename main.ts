namespace SpriteKind {
    export const Tool = SpriteKind.create()
    export const Roll = SpriteKind.create()
    export const Toaster = SpriteKind.create()
    export const shield = SpriteKind.create()
    export const boss = SpriteKind.create()
    export const yuck = SpriteKind.create()
    export const axe = SpriteKind.create()
    export const Swoosh = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.boss, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.player3.changeLifeBy(-1)
    sprites.destroy(otherSprite)
})
info.player2.onScore(20, function () {
    game.showLongText("Your Unlocked The Bagel Shield, It Will Tank One Hit Before Breaking", DialogLayout.Bottom)
    Bagel_Shield = sprites.create(img`
        . . e e e e e e e e e e e e . . 
        . e d d d d d d d d d d d d e . 
        e d d e e e e e e e e e e d d e 
        e d e . . . . . . . . . . e d e 
        e d e . . . . . . . . . . e d e 
        e d e . . . . . . . . . . e d e 
        e d e . . . . . . . . . . e d e 
        e d e . . . . . . . . . . e d e 
        e d e . . . . . . . . . . e d e 
        e d e . . . . . . . . . . e d e 
        e d e . . . . . . . . . . e d e 
        e d e . . . . . . . . . . e d e 
        e d e . . . . . . . . . . e d e 
        e d d e e e e e e e e e e d d e 
        . e d d d d d d d d d d d d e . 
        . . e e e e e e e e e e e e . . 
        `, SpriteKind.shield)
    Bagel_Shield.follow(Toastie)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Roll, function (sprite, otherSprite) {
    sprites.destroy(sprite)
})
sprites.onOverlap(SpriteKind.boss, SpriteKind.axe, function (sprite, otherSprite) {
    sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . e e . . . . e e . . . . 
        . . . e e e e . . e e e e . . . 
        . . . e e e e . . e e e e . . . 
        . . . e d d d e e d d d e . . . 
        . . . e d d d d d d d d e . . . 
        . . . e d f d d f d d d e . . . 
        . f . e d f d d f d d d e . . . 
        . . f e d d d d d d d d e f . . 
        . . . e d d d d d d d d e . f . 
        . . . e d d f d d f d d e . . . 
        . . . e d d d f f d d d e . . . 
        . . . e d d d d d d d d e . . . 
        . . . e e e e e e e e e e . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . . f . . . . . 
        `, SpriteKind.Player).setPosition(150, 76)
    info.player3.changeLifeBy(-1)
    animation.runImageAnimation(
    Toastie,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . e e . . . . e e . . . . 
        . . . e e e e . . e e e e . . . 
        . . . e e e e . . e e e e . . . 
        . . . e e e e e e e e e e . . . 
        . . . e d d d d d d d d e . . . 
        . . . e d d f d d f d d e . . . 
        d 5 . e d d f d d f d d e . . . 
        . d f e d d d d d d d d e . f . 
        . . . e d f d d d f d d e f . . 
        . . . e d f f f f f d d e . . . 
        . . . e d d d d d d d d e . . . 
        . . . e e e e e e e e e e . . . 
        . . . . . f . . . . f . . . . . 
        . . . . f . . . . f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . e e . . . . . e e . . . 
        . . . e e e e . . . e e e e . . 
        . . . e e e e . . . e e e e . . 
        . . . e d d d e e e d d d e . . 
        . . . e d d d d d d d d d e . . 
        . . . e d d f d d f d d d e . . 
        d 5 . e d d f d d f d d d e . . 
        . d f e d d d d d d d d d e . f 
        . . . e d d f d d d f d d e f . 
        . . . e d d f f f f f d d e . . 
        . . . e d d d d d d d d d e . . 
        . . . e e e e e e e e e e e . . 
        . . . . . f . . . . f . . . . . 
        . . . . . . f . . . . f . . . . 
        `],
    500,
    true
    )
    controller.moveSprite(Toastie)
    sprites.destroyAllSpritesOfKind(SpriteKind.Swoosh)
})
info.player2.onScore(35, function () {
    scene.setBackgroundImage(img`
        eeeee2222222222222222222222222222222222ee2222ee2222ee2222222eeeee2222222222222222222222222222222222ee22222eeee222ee2eeeee2222222222222222222222222222222222ee222
        222eeeee22222222222222222222222222222eee2222eeee2222ee222222222eeeee22222222222222222222222222222eee2222eeeee222ee22222eeeee22222222222222222222222222222eee2222
        222222eeeeeee222222222222222222222eeee22222eeeeee2222eee2222222222eeeeeee222222222222222222222eeee22222eeee2222ee222222222eeeeeee222222222222222222222eeee22222e
        222222222eeeeeeeeeeeeee2222222eeeee222222eeee22eee2222eeee22222222222eeeeeeeeeeeeee2222222eeeee222223eeee22222eeee22222222222eeeeeeeeeeeeee2222222eeeee222222eee
        e222222222222222222222222222eeee2222222eeee22222eef22222eeeee222222222222222222222222222eeee2333333eeee22222efe2eeeee222222222222222222222222222eeee2222222eeee2
        eeeeeeee22222222222222222222222222222eee2222222eeeefe222222eeeeeeeee22222222222222333333333333322eee2222222efe22222eeeeeeeee22222222222222222222222222222eee2222
        2222eeeeeeeee222222222222222222222eeee2222222eeeeeeeffe222222222eeeeeeeee222223333333333322222eeee2223322effeee222322222eeeeeeeee222222222222222222222eeee222222
        2223322222222222222222222222222eeee2222222eeeeeeee222efffe222222222222222222222222222222222eeee2233332efffe22eeeee233333222222222222222222222222222eeee2222222ee
        2222233332222222222222222222222222222222eeeeeeeee22222eefffe2222222222222222222222222222222233333332efffee22222eeeee2233333333333333333332222222222222222222eeee
        eeee22233333333333333332222222222222eeeeee222222222eeeee22ffffee22222222223333333333333333333332eeffff22eeeee22222eeeeee23333333333333222222222222222222eeeeeeee
        eeeeeeeeee233333333332222222222eeeeeee2222222222eeeee2222ffeefffffffee2222222222223333333332fffffffeeff2222eeeee222222eeeeeeee222222222222222222222eeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22eeeeeeee2222eee222222ffeeeeeeeeeeffffffffffffffffffffffffeeeeeeeeeeff222222eee2222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeee22222222222222ee22222222222222222222222222effeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffe22222222222222222222222222ee22222222222222eeeeeeeeeee
        eeeeeeeeee22222222222222222eeee2222222222222222222efffeeeeeeeeeeeeeeeeee2eeeeeeeeeeeeeeeeee2eeeeeeeeeeeeeefffe2222222222222222222eeee22222222222222222eeeeeeeeee
        eeeeeeeeee222222222222222222eeeeeeee222222222eeefffeeeeeeeeeeeeeeeeeeeee222222eeeeeeeeee2222eeeeeeeeeeeeeeeeefffeee222222222eeeeeeee222222222222222222eeeeeeeeee
        eeeeeeeee2222222222222222222eeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeee22222222222222222222ee2eeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeee2222222222222222222eeeeeeeee
        eeeeeeeee2222222222222222222ee2222effffffffffffeeeeeeeeeeeeeeeeeeeeeeeee22222222222222222222ee22eeeeeeeeeeeeeeeefffffffffffffe2222ee2222222222222222222eeeeeeeee
        eeeeeeee22e22222222222222222ee2222eeee2efffffffeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeeffffffffe2eeee2222ee22222222222222222e22eeeeeeee
        eeeeeeee2222222222222222222ee22222ee22eeffffffeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeeffffffffee22ee22222ee2222222222222222222eeeeeeee
        eeeeeeee2e2222222222222222eee22222ee22efffffffeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeefffffffffe22ee22222eee2222222222222222e2eeeeeeee
        eeeeeee22e2222222222222222ee222222e22eefffffffeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeefffffffffee22e222222ee2222222222222222e22eeeeeee
        eeeeeee22e222222222222222ee222222ee22effffffffeeeeeeeeeeeeeeeeee2eee22ee22222222222222222222e222eeee2eeeeeeeeeeeefffffffffe22ee222222ee222222222222222e22eeeeeee
        eeeeee22e2222222222222222ee222222e22eeffffffffeeeeeeeeeeeeeeeeee2eee22ee22222222222222222222e2222eee2eeeeeeeeeeeefffffffffee22e222222ee2222222222222222e22eeeeee
        eeeeee22e222222222222222ee222222ee2eeeffffffffeeeeeeeeeeeeeeeeee2ee222e222222222222222222222e2222eee2eeeeeeeeeeeefffffffffe3e2ee222222ee222222222222222e22eeeeee
        eeeee22ee222222222222222ee22222ee22eefffffffffeeeeeeeeeeeeeeeeee2ee222e2222222222222222222222e222eee2eeeeeeeeeeeeffffffffffe322ee22222ee222222222222222ee22eeeee
        eeeee22e222222222222222ee222222ee2eeeffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e222eee2eeeeeeeeeeeeffffffffffe3e2ee222222ee222222222222222e22eeeee
        eeee22ee222222222222222e222222ee22eefffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e222eee22eeeeeeeeeeeeffffffffffe322ee222222e222222222222222ee22eeee
        eeee22ee22e22222222222ee22222ee22eeffffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e222eeee2eeeeeeeeeeeefffffffffff3322ee22222ee22222222222e22ee22eeee
        eeee2ee222222222222222e222222ee32eeffffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeefffffffffffe332ee222222e222222222222222ee2eeee
        eee22ee22e22222222222e222222ee32eeffffffeffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeeffffffffffff3322ee222222e22222222222e22ee22eee
        eee2ee222e22222222222e22222ee23eeeffffffeffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeeffffffffffffe3322ee22222e22222222222e222ee2eee
        ee22ee22e22222222222e222222ee32eefffffffefffeeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeeeffffffffffffe332ee222222e22222222222e22ee22ee
        ee2eee2ee2222222222e222222ee33eeefffffffefffeefeeeeeeeeeeeeeee222ee22ee2222222222222222222222e2222eee22eeeeeeeeeeeeffffffffffffe3322ee222222e2222222222ee2eee2ee
        eeeee22ee2222222222e22222ee33eeeffffffffffffeefeeeeeeeeeeeeeee22eee22ee2222222222222222222222e2222eee22eeeeeeeeeeeefffffffffffffe3322ee22222e2222222222ee22eeeee
        eeeee2ee2222222222222222eee33eeffffffffeffffeefeeeeeeeeeeeeeee22eee22ee2222222222222222222222e2222eee22eeeeeeeeeeeefeffffffffffffe332eee2222222222222222ee2eeeee
        eeee22ee2222222222222222ee33eeeffffffffeffffeefeeeeeeeeeeeeeee22ee222ee2222222222222222222222e2222eee22eeeeeeeeeeeefeffffefffffffe3332ee2222222222222222ee22eeee
        eeee2ee2222222222222222ee33eeefffffffffeffffeefeeeeeeeeeeeeeee22ee222e22222222222222222222222e2222eee22eeeeeeeeeeeeeeffffeffffffffe3322ee2222222222222222ee2eeee
        eeee2ee222222222222222ee333eeffffffffffefffeeeeeeeeeeeeeeeeeee22ee222e22222222222222222222222e2222eee22eeeeeeeeeeeeeeefffefffffffffe3322ee222222222222222ee2eeee
        eee2ee2222222222222222ee33eeeffffffffffefffeeeeeeeeeeeeeeeeeee22ee222e22222222222222222222222e22222ee22eeeeeeeeeeeeeeefffefffffffffee332ee2222222222222222ee2eee
        eee2ee222222222222222ee33eeefffffffffffefffeefeeeeeeeeeeeeeeee22ee222e22222222222222222222222ee2222eee2eeeeeeeeeeeeeeefffeffffffffffe3332ee222222222222222ee2eee
        ee2ee2222222222222222e33eeefffffffffffeefffeefeeeeeeeeeeeeeee222ee222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeffffeffffffffffe3322e2322222222222222ee2ee
        ee2ee222222222222232e333eeffffffffffffeefffeefeeeeeeeeeeeeeee22eee222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffefffffffffffe3322e322222222222222ee2ee
        e2ee2222222222222322e33eeeffffffffffffeefffeefeeeeeeeeeeeeeee22ee2222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffefffffffffffee332e2322222222222222ee2e
        e2ee222222222222332e33eeefffffffffffffeefffeefeeeeeeeeeeeeeee22ee2222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffeffffffffffffe3322e322222222222222ee2e
        eee222222222222332e33eeeffffffffffffffeeffeeeeeeeeeeeeeeeeeee22ee2222222222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffefffffffffffffe3322e322222222222222eee
        eee222222222222322332eefffffffffffffffefffeefeeeeeeeeeeeeeeee22ee2222222222222222222222222222ee2222eee22eeeeeeeeeeeeeeeeffeefffffffffffffe3322322222222222222eee
        ee222222222222332333eeeffffffffffffffeefffeefeeeeeeeeeeeeeee222ee22222222222222222222222222222e2222eee22eeeeeeeeeeeeeeeeffeefffffffffffffee3223322222222222222ee
        ee22222222222332233eeefffffffffffffffeefffeefeeeeeeeeee2eeee222ee22222222222222222222222222222e2222eee22eeeeeeeeeeeeeeeeffeeffffffffffffffee322322222222222222ee
        e22222222222332233eeeffffffffffffffffeefffeefeeeeeeeeee2eeee22eee22222222222222222222222222222e2222eee22eeeeeeeeeeeeeeeefffefffffffffffffffe3323322222222222222e
        e22222222222332332eefffffffffffffffffeefffeefeeeeeeeeeeeeeee22eee22222222222222222222222222222e2222eeee2eeeeeeeeeeeeeeeefffeefffffffffffffffe322322222222222222e
        22222e22222332232eeefffffffffffffffffeefffeefeeeeeeeee2eeeee22ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeeffeefffffffffffffffeee23322222222e22222
        22222e2222332232eeeffffffffffffffffffeeffeefeeeeeeeeee2eeeee22ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeeffeeffffffffffffffffeee2322222222e22222
        222222222332222eeeffffffffffffffffffeefffeefeeeeeeeeee2eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeeffeefffffffffffffffffeee332222222222222
        2222e222233222eeefffffffffffffffffffeefffeefeeeeeeeeee2eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeefffeffffffffffffffffffeee322222222e2222
        2222e222332222eeefffffffffffffffffffeefffeefeeeeeeeeee2eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeefffeefffffffffffffffffeee332222222e2222
        222e222332222eeeffffffffffffffffffffeefffeefeeeeeeeee22eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeefffeeffffffffffffffffffeee322222222e222
        222e22232e22eeefffffffffffffffffffffeefffeefeeeeeeeee2eeeee22eee222222222222222222222222222222222222eee22eeeeeeeeeeeeeeeeeffeefffffffffffffffffffee332e22222e222
        222e22222e2eeeffffffffffffffffffffffeefffefeeeeeeeeee2eeeee22ee2222222222222222222222222222222222222eee22eeeeeeeeeeeeeeeeeffeeffffffffffffffffffffee32e22222e222
        22ee2222e2eeeffffffffffffffffffffffeeffffefeeeeeeeeee2eeee222ee2222222222222222222222222222222222222eee22eeeeeeeeeeeeeeeeefffefffffffffffffffffffffee32e2222ee22
        22e22222e2eeeffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222222222222222222222222222222222222eee222eeeeeeeeeeeeeeeefffeeffffffffffffffffffffee32e22222e22
        22e2222eeeeefffffffffffffffffffffffeefffeefeeeeeeeee22eeee222ee2222222222222222222222222222222222222eee222eeeeeeeeeeeeeeeefffeefffffffffffffffffffffeeeee2222e22
        2ee2222eeeeffffffffffffffffffffffffeefffeefeeeeeeeee22eeee222ee2222222222222222222222222222222222222eeee22e2eeeeeeeeeeeeeefffeeffffffffffffffffffffffeeee2222ee2
        2e2222eeeefffffffffffffffffffffffffeefffefeeeeeeeeee2eeeee222ee2222222222222222222222222222222222222eeee22eeeeeeeeeeeeeeeeeffeefffffffffffffffffffffffeeee2222e2
        2e222eee2effffffffffffffffffffffffeeefffefeeeeeeeeee2eeee222eee222e222222222222222222222222222222222eeee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe2eee222e2
        2e222eee2effffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222e222222222222222222222222222222222eeee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe2eee222e2
        ee22eeee2effffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222e2222222222222222222222222222e22222eee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe2eeee22ee
        ee22eee22effffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222e2222222222222222222222222222e22222eee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe22eee22ee
        eeeeee22eeffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee222ee2222e2222222222222222222222222222e22222eee22ee2eeeeeeeeeeeeeeeffeeffffffffffffffffffffffee22eeeeee
        eeeee222efffffffffffffffffffffffffeeffffeeeeeeeeeee2eeeee222ee2222e2222222222222222222222222222e22222eee222e22eeeeeeeeeeeeeefffeeffffffffffffffffffffffe222eeeee
        2222222eeffffffffffffffffffffffffeeefffeeeeeeeeeee22eeee2222ee2222e2222222222222222222222222222e22222eee222e22eeeeeeeeeeeeeefffeeffffffffffffffffffffffee2222222
        222222eefffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee2222e22222e2222222222222222222222222222e22222eee222ee2eeeeeeeeeeeeeefffeefffffffffffffffffffffffee222222
        22222eeefffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee222ee22222e2222222222222222222222222222e22222eeee22ee2eeeeeeeeeeeeeeeffeefffffffffffffffffffffffeee22222
        222eeeeefffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee222ee22222e2222222222222222222222222222e22222eeee22ee2eeeeeeeeeeeeeeefffeeffffffffffffffffffffffeeeee222
        eeee2eeeeffffffffffffffffffffffffeeffffeeeeeeeeee22eeeee222ee2222ee2222222222222222222222222222e22222eeee22ee2eeeeeeeeeeeeeeefffeefffffffffffffffffffffeeee2eeee
        222e2ee2effffffffffffffffffffffffeeffffeeeeeeeeee22eeee2222ee2222ee2222222222222222222222222222e22222eeee22ee22eeeeeeeeeeeeeefffeefffffffffffffffffffffe2ee2e222
        222e2ee2efffffffffffffffffffffffeeeffffeeeeeeeeee22eeee2222ee2222ee2222222222222222222222222222e22222eeee22ee22eeeeeeeeeeeeeefffeefffffffffffffffffffffe2ee2e222
        222e2ee2efffffffffffffffffffffffeefffffeeeeeeeeee22eeee2222ee2222ee2222222222222222222222222222e22222eeee222e22eeeeeeeeeeeeeeffffeeffffffffffffffffffffe2ee2e222
        222e2ee2efffffffffffffffffffffffeefffffeeeeeeeee22eeeee2222ee2222ee2222222222222222222222222222e22222eeee222e22eeeeeeeeeeeeefffffeeffffffffffffffffffffe2ee2e222
        222e2ee22effffffffffffffffffffffeefffffeeeeeeeee22eeee22222e22222ee2222222222222222222222222222ee2222eeee222ee2eeeeeeeeeeeeeeffffeefffffffffffffffffffe22ee2e222
        222e2ee22effffffffffffffffffffffeeffffeeeeeeeeee22eeee22222e22222ee2222222222222222222222222222ee2222eeeee22ee2eeeeeeeeeeeeeefffffefffffffffffffffffffe22ee2e222
        222e2eee2effffffffffffffffffffffeeffffeeeeeeeeee22eeee22222e22222ee2222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeefffffefffffffffffffffffffe2eee2e222
        222e22ee2eefffffffffffffffffffffefffffeeeeeeeee222eee22222ee22222ee2222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeeffffffffffffffffffffffffee2ee22e222
        222e22ee22efffffffffffffffffffffefffffeeeeeeeee22eeee22222ee22222ee2222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeeefffffffffffffffffffffffe22ee22e222
        222e22ee22efffffffffffffffffffffefffffeeeeeeeee22eeee22222ee22222e22222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeeefffffffffffffffffffffffe22ee22e222
        222e22ee22efffffffffffffffffffffffffffeeeeeeeee22eee222222ee22222e22222222222222222222222222222ee22222eeee222e22eeeeeeeeeeeeeefffffffffffffffffffffffe22ee22e222
        222e22ee222effffffffffffffffffffffffffeeeeeeeee22eee222222ee22222e22222222222222222222222222222ee22222eeee222ee2eeeeeeeeeeeeeeefffffffffffffffffffffe222ee22e222
        222e22eee22effffffffffffffffffffffffffeeeeeeee22eeee222222e222222e22222222222222222222222222222ee22222eeee222ee22eeeeeeeeeeeeeefffffffffffffffffffffe22eee22e222
        222e222ee22effffffffffffffffffffffffffeeeeeeee22eeee222222e222222e22222222222222222222222222222ee22222eeee222ee22eeeeeeeeeeeefffffffffffffffffffffffe22ee222e222
        222e222ee22eeffffffffffffffffffffffffeeeeeeeee22eee2222222e222222ee22222eeee222eeee222eeee22222ee222222eeee22222eeeeeeeeeeeeeffffffffffffffffffffffee22ee222e222
        222e222ee222efffffffbffffffffbbbfffffbbeeeeebeeeeeeee222eebeeeeeeddeeeeeeedeeeeeeeeeeeedeeeeeeeddeeeeeebeee22eeeeeeeebeeeeebbfffffbbbffffffffbfffffe222ee222e222
        222e222ee222ebbfffbbbbbfffffbbbbbbbbbbbbbbbbbbeebbbbeeeeedddeeeedddddeeeddddeeeeddeeeeddddeeedddddeeeedbbbbeeebbbbeebbbbbbbbbbbbbbbbbbfffffbbbbbfffe222ee222e222
        222ee22ee222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee222ee22ee222
        222ee22ee2222ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe2222ee22ee222
        2222e222e2222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee2222e222e2222
        2222e222ee2222ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe2222ee222e2222
        2222e222ee2222ebbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbe2222ee222e2222
        2222e222ee2222eebbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbee2222ee222e2222
        2222e2222e22e22ebbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbe22e22e2222e2222
        222222222e22e22eebbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbee22e22e222222222
        222222222e22e222ebbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbe222e22e222222222
        2222222222e22e22eebbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbee22e22e2222222222
        222222e222e22e222ebbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbe222e22e222e222222
        222222e222222e222eebbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbee222e222222e222222
        222222e2222222e222ebbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbe222e2222222e222222
        222222ee222222e222eebbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbee222e222222ee222222
        2222222e222222e2222ebbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbe2222e222222e2222222
        22222e2e2222222e222eebbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbee222e2222222e2e22222
        22222e2e2222222e222eebbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbee222e2222222e2e22222
        22222e2e22222222e22ebbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbe22e22222222e2e22222
        22222e2ee2222222e22ebbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbe22e2222222ee2e22222
        22222e2ee2222222eeeebbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbeeee2222222ee2e22222
        22222e22e2222222eeebbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbeee2222222e22e22222
        22222ee2e2222222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee2222222e2ee22222
        22222ee2e222222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee222222e2ee22222
        222222e2ee22222ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe22222ee2e222222
        222222e22e2222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee2222e22e222222
        222222e22e22eeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeee22e22e222222
        222222e2eeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeee2e222222
        222222e2ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe2e222222
        222222eeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeee222222
        `)
    info.player3.setLife(15)
    boss = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . e e . . . e e . . . . . 
        . . . e e 7 e . e 7 e e . . . . 
        . . . e 7 e e . e e 7 7 . . . . 
        . . . e 7 7 7 e 7 7 7 e . . . . 
        . . . 7 7 f 7 7 7 f 7 e . . . . 
        . . . e 7 f f 7 f f 7 7 . . . . 
        . . f e 7 7 7 7 7 7 7 e f . . . 
        . f . e 7 7 7 7 7 7 7 e . f . . 
        . f . e 7 f 7 f 7 f 7 7 . f . . 
        . . . e f 7 f 7 f 7 f e . . . . 
        . . . e 7 7 7 7 7 7 7 e . . . . 
        . . . 7 e e e e e e 7 e . . . . 
        . . . . . f . . f . . . . . . . 
        . . . . f . . f . . . . . . . . 
        . . . f . . f . . . . . . . . . 
        `, SpriteKind.boss)
    game.showLongText("The Mold Has Been Summoned", DialogLayout.Bottom)
    boss.setVelocity(60, 70)
    boss.setBounceOnWall(true)
    boss.setStayInScreen(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Tool, function (sprite, otherSprite) {
    info.setScore(10)
    animation.runImageAnimation(
    Toastie,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . e e . . . . e e . . . . 
        . . . e e e e . . e e e e . . . 
        . . . e e e e . . e e e e . . . 
        . . . e e e e e e e e e e . . . 
        . . . e d d d d d d d d e . . . 
        . . . e d d f d d f d d e . . . 
        d 5 . e d d f d d f d d e . . . 
        . d f e d d d d d d d d e . f . 
        . . . e d f d d d f d d e f . . 
        . . . e d f f f f f d d e . . . 
        . . . e d d d d d d d d e . . . 
        . . . e e e e e e e e e e . . . 
        . . . . . f . . . . f . . . . . 
        . . . . f . . . . f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . e e . . . . . e e . . . 
        . . . e e e e . . . e e e e . . 
        . . . e e e e . . . e e e e . . 
        . . . e d d d e e e d d d e . . 
        . . . e d d d d d d d d d e . . 
        . . . e d d f d d f d d d e . . 
        d 5 . e d d f d d f d d d e . . 
        . d f e d d d d d d d d d e . f 
        . . . e d d f d d d f d d e f . 
        . . . e d d f f f f f d d e . . 
        . . . e d d d d d d d d d e . . 
        . . . e e e e e e e e e e e . . 
        . . . . . f . . . . f . . . . . 
        . . . . . . f . . . . f . . . . 
        `],
    500,
    true
    )
    sprites.destroyAllSpritesOfKind(SpriteKind.Roll)
    sprites.destroyAllSpritesOfKind(SpriteKind.Tool)
    game.showLongText("You Got The Grain Gun, Click X to Use It", DialogLayout.Bottom)
    sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . . 5 8 8 5 5 . . . . . . 
        . . . . 8 8 1 1 8 8 8 . . . . . 
        . . . 8 8 8 1 8 1 8 8 8 . . . . 
        . . . . . 8 1 1 8 8 . . . . . . 
        . . . . . 8 1 8 1 8 . . . . . . 
        . . . . . 8 1 1 8 . . . . . . . 
        . . . . . . 8 8 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food).setPosition(32, 88)
    music.play(music.createSong(hex`
                    0078000408020300001c00010a006400f4016400000400000000000000000000000000050000042a0000000400011908000c00011b10001400011d18001c0001191c002000011d20002400012024002800012403001c0001dc00690000045e01000400000000000000000000056400010400032a0000000400011908000c00011b10001400011d18001c0001191c002000011d20002400012024002800012408001c000e050046006603320000040a002d00000064001400013200020100022a0000000400011908000c00011b10001400011d18001c0001191c002000011d200024000120240028000124
                    `), music.PlaybackMode.UntilDone)
    info.setLife(3)
})
browserEvents.X.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (info.score() < 25) {
        Pellet_Grain = sprites.createProjectileFromSprite(assets.image`7 Grains`, Toastie, -60, 0)
    }
    if (info.score() == 30) {
        burnt_grain = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Toastie, -100, 0)
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.player2.changeScoreBy(1)
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.shield, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    animation.runImageAnimation(
    Bagel_Shield,
    [img`
        . . e . e . e . e e e e . e . . 
        . e d . d . d d . d d . d d e . 
        e d d e e . . e e . e e e d d e 
        . . . . . . . . . . . . . . . . 
        e d e . . . . . . . . . . e d e 
        e d . . . . . . . . . . . . . e 
        . . . . . . . . . . . . . e d e 
        e d . . . . . . . . . . . . d . 
        e d e . . . . . . . . . . . d e 
        e d . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . e d e 
        e d . . . . . . . . . . . . . e 
        . . . . . . . . . . . . . e . . 
        e . . e e . . . . e . e e d d . 
        . . . d d . . . . d . . . d e . 
        . . . e . . . . . e e . . e . . 
        `],
    500,
    true
    )
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Swoosh, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroyAllSpritesOfKind(SpriteKind.Swoosh)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    Toastie = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . e e . . . . e e . . . . 
        . . . e e e e . . e e e e . . . 
        . . . e e e e . . e e e e . . . 
        . . . e d d d e e d d d e . . . 
        . . . e d d d d d d d d e . . . 
        . . . e d f d d f d d d e . . . 
        . f . e d f d d f d d d e . . . 
        . . f e d d d d d d d d e f . . 
        . . . e d d d d d d d d e . f . 
        . . . e d d f d d f d d e . . . 
        . . . e d d d f f d d d e . . . 
        . . . e d d d d d d d d e . . . 
        . . . e e e e e e e e e e . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . . f . . . . . 
        `, SpriteKind.Player)
    Toastie.setPosition(150, 76)
    controller.moveSprite(Toastie)
    if (info.player3.score() > 0) {
        animation.runImageAnimation(
        Toastie,
        [img`
            . . . . . e e . . . e e . . . . 
            . . . . e d d e . e d d e . . . 
            . . . . e d f d e d f d e . . . 
            . . . . e d f d d d f d e . . . 
            . . f f e d d d d d d d e f f . 
            . . . . e d f d d d d d e . . 1 
            . . . . e d d f f f d d e . . . 
            . . . . e e e e e e e e e . . . 
            . . . . . . f . 1 f 1 . . . . . 
            . . 1 1 1 f 1 1 1 f 1 1 . . . . 
            . 1 e e e e e e e e e e 1 . . . 
            . e d d d d d d d d d d e . . . 
            . e d e e e e e e e d d e . . . 
            . e d e e e e e e e d d e . . . 
            . e d d d d d d d d d d e . . . 
            . 1 e e e e e e e e e e 1 . . . 
            `,img`
            . . . . . e e . . . e e . . . . 
            . . . . e d d e . e d d e . . . 
            . . . . e d f d e d f d e . . . 
            . . . . e d f d d d f d e . . . 
            . . . f e d d d d d d d e f . . 
            . . f . e d f d d d d d e . f . 
            . . . . e d d f f f d d e . . . 
            . . . . e e e e e e e e e . . . 
            . . . . . . f . 1 f 1 . . . . . 
            . . 1 1 1 1 f 1 1 1 f 1 . . . . 
            . 1 e e e e e e e e e e 1 . . . 
            . e d d d d d d d d d d e . . . 
            . e d e e e e e e e d d e . . . 
            . e d e e e e e e e d d e . . . 
            . e d d d d d d d d d d e . . . 
            . 1 e e e e e e e e e e 1 . . . 
            `],
        100,
        true
        )
    } else {
        animation.runImageAnimation(
        Toastie,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . e e . . . . e e . . . . 
            . . . e e e e . . e e e e . . . 
            . . . e e e e . . e e e e . . . 
            . . . e e e e e e e e e e . . . 
            . . . e d d d d d d d d e . . . 
            . . . e d d f d d f d d e . . . 
            d 5 . e d d f d d f d d e . . . 
            . d f e d d d d d d d d e . f . 
            . . . e d f d d d f d d e f . . 
            . . . e d f f f f f d d e . . . 
            . . . e d d d d d d d d e . . . 
            . . . e e e e e e e e e e . . . 
            . . . . . f . . . . f . . . . . 
            . . . . f . . . . f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . e e . . . . . e e . . . 
            . . . e e e e . . . e e e e . . 
            . . . e e e e . . . e e e e . . 
            . . . e d d d e e e d d d e . . 
            . . . e d d d d d d d d d e . . 
            . . . e d d f d d f d d d e . . 
            d 5 . e d d f d d f d d d e . . 
            . d f e d d d d d d d d d e . f 
            . . . e d d f d d d f d d e f . 
            . . . e d d f f f f f d d e . . 
            . . . e d d d d d d d d d e . . 
            . . . e e e e e e e e e e e . . 
            . . . . . f . . . . f . . . . . 
            . . . . . . f . . . . f . . . . 
            `],
        500,
        true
        )
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.axe, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.axe)
    game.showLongText("You Got The Jame Axe, Use It To Cut Enemies, You Will Have Recoil Though", DialogLayout.Bottom)
})
browserEvents.A.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (info.score() >= 30) {
        animation.stopAnimation(animation.AnimationTypes.All, Toastie)
        info.setScore(18)
        animation.runImageAnimation(
        Toastie,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . e e . . . . e e . . . . 
            . . . e e e e . . e e e e . . . 
            . . . e e e e . . e e e e . . . 
            . . . e e e e e e e e e e . . . 
            . . . e d d d d d d d d e . . . 
            . . . e d d f d d f d d e . . . 
            d 5 . e d d f d d f d d e . . . 
            . d f e d d d d d d d d e . f . 
            . . . e d f d d d f d d e f . . 
            . . . e d f f f f f d d e . . . 
            . . . e d d d d d d d d e . . . 
            . . . e e e e e e e e e e . . . 
            . . . . . f . . . . f . . . . . 
            . . . . f . . . . f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . e e . . . . . e e . . . 
            . . . e e e e . . . e e e e . . 
            . . . e e e e . . . e e e e . . 
            . . . e d d d e e e d d d e . . 
            . . . e d d d d d d d d d e . . 
            . . . e d d f d d f d d d e . . 
            d 5 . e d d f d d f d d d e . . 
            . d f e d d d d d d d d d e . f 
            . . . e d d f d d d f d d e f . 
            . . . e d d f f f f f d d e . . 
            . . . e d d d d d d d d d e . . 
            . . . e e e e e e e e e e e . . 
            . . . . . f . . . . f . . . . . 
            . . . . . . f . . . . f . . . . 
            `],
        500,
        true
        )
        animation.runImageAnimation(
        Toasterio,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . e e . . . e e . . . . . 
            . . . e d d e . e d d e . . . . 
            . . . e d d e e e d d e . . . . 
            . . . f f f f f f f f f . . . . 
            . . f f f f f f f f f f f . . . 
            . . f f 2 f 2 f 2 f 2 f f . . . 
            . . f f 2 f 2 f 2 f 2 f f . . . 
            . . f f 2 f 2 f 2 f 2 f f . . . 
            . . f f f f f f f f f f f . . . 
            . . . f f f f f f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        true
        )
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Roll, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Tool)
    sprites.destroyAllSpritesOfKind(SpriteKind.Roll)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    sprites.destroyAllSpritesOfKind(SpriteKind.axe)
    info.setLife(1)
    info.setScore(26)
    info.player3.setScore(10)
    animation.runImageAnimation(
    Toastie,
    [img`
        . . . . . e e . . . e e . . . . 
        . . . . e d d e . e d d e . . . 
        . . . . e d f d e d f d e . . . 
        . . . . e d f d d d f d e . . . 
        . . f f e d d d d d d d e f f . 
        . . . . e d f d d d d d e . . 1 
        . . . . e d d f f f d d e . . . 
        . . . . e e e e e e e e e . . . 
        . . . . . . f . 1 f 1 . . . . . 
        . . 1 1 1 f 1 1 1 f 1 1 . . . . 
        . 1 e e e e e e e e e e 1 . . . 
        . e d d d d d d d d d d e . . . 
        . e d e e e e e e e d d e . . . 
        . e d e e e e e e e d d e . . . 
        . e d d d d d d d d d d e . . . 
        . 1 e e e e e e e e e e 1 . . . 
        `,img`
        . . . . . e e . . . e e . . . . 
        . . . . e d d e . e d d e . . . 
        . . . . e d f d e d f d e . . . 
        . . . . e d f d d d f d e . . . 
        . . . f e d d d d d d d e f . . 
        . . f . e d f d d d d d e . f . 
        . . . . e d d f f f d d e . . . 
        . . . . e e e e e e e e e . . . 
        . . . . . . f . 1 f 1 . . . . . 
        . . 1 1 1 1 f 1 1 1 f 1 . . . . 
        . 1 e e e e e e e e e e 1 . . . 
        . e d d d d d d d d d d e . . . 
        . e d e e e e e e e d d e . . . 
        . e d e e e e e e e d d e . . . 
        . e d d d d d d d d d d e . . . 
        . 1 e e e e e e e e e e 1 . . . 
        `],
    500,
    true
    )
    game.showLongText("You Have Picked Up The Cinnamon Bun, You Can Shoot Big Rolls with V But Toasters No Longer Work And You Are Weaker", DialogLayout.Bottom)
})
info.player3.onLifeZero(function () {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(sprite)
})
browserEvents.Space.onEvent(browserEvents.KeyEvent.Pressed, function () {
    Toastie = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . e e . . . . e e . . . . 
        . . . e d d e . . e d d e . . . 
        . c . e d d e . . e d d e . . . 
        c a c e d d d e e d d d e . . . 
        c a c e d d d d d d d d e . . . 
        . c . e d f f d d f f d e . . . 
        c . f e d d d d d d d d e . . . 
        . f . e d d d d d d d d e . . . 
        . . f e d d d f f f d d e . . . 
        . . . e d d d d d f d d e . . . 
        . . . e d d d f f f d d e . . . 
        . . . e d d d d d d d d e . . . 
        . . . e e e e e e e e e e . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . . f . . . . . 
        `, SpriteKind.Swoosh)
    Toastie.setPosition(150, 76)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    controller.moveSprite(Toastie)
    if (info.player3.score() > 0) {
        animation.runImageAnimation(
        Toastie,
        [img`
            . . c c . . e e . . . e e . . . 
            . c a a c e d d e . e d d e . . 
            c a a a c e d d d e d d d e . . 
            . c a c f e f d f d f d f e . . 
            . . c f . e d f d d d f d e . . 
            . c . . f e d d d d d d d e . . 
            c . . . . e d d f d d d d e . . 
            . . . . . e f f d d d d d e . . 
            . . . . f e e e e e e e e e . . 
            . . 1 f 1 f 1 1 1 1 1 1 . f . . 
            . 1 e e e e e e e e e e f . . . 
            . e d d d d d d d d d d e . . . 
            . e d e e e e e e e d d e . . . 
            . e d e e e e e e e d d e . . . 
            . e d d d d d d d d d d e . . . 
            . 1 e e e e e e e e e e 1 . . . 
            `,img`
            . . . . . . e e . . . e e . . . 
            . . . . . e d d e . e d d e . . 
            1 . 1 . . e d d d e d d d e . . 
            1 1 1 f . e f d f d f d f e . . 
            . 1 . . f e d f d d d f d e . . 
            c c c c c e d d d d d d d e . . 
            c a c . f e d d f d d d d e . . 
            c a c . . e f f d d d d d e . . 
            . c . . f e e e e e e e e e . . 
            . . 1 f 1 f 1 1 1 1 1 1 . f . . 
            . 1 e e e e e e e e e e f . . . 
            . e d d d d d d d d d d e . . . 
            . e d e e e e e e e d d e . . . 
            . e d e e e e e e e d d e . . . 
            . e d d d d d d d d d d e . . . 
            . 1 e e e e e e e e e e 1 . . . 
            `,img`
            . . . . . . e e . . . e e . . . 
            . . . . . e d d e . e d d e . . 
            . . . . . e d d d e d d d e . . 
            . 1 . . f e f d f d f d f e . . 
            . 1 1 f . e d f d d d f d e . . 
            1 . 1 c . e d d d d d d d e . . 
            1 . c . . e d d f d d d d e . . 
            1 c c . . e f f d d d d d e . . 
            c a a c f e e e e e e e e e . . 
            c a c f 1 f 1 1 1 1 1 1 . f . . 
            . c e e e e e e e e e e f . . . 
            . e d d d d d d d d d d e . . . 
            . e d e e e e e e e d d e . . . 
            . e d e e e e e e e d d e . . . 
            . e d d d d d d d d d d e . . . 
            . 1 e e e e e e e e e e 1 . . . 
            `],
        100,
        true
        )
    } else {
        animation.runImageAnimation(
        Toastie,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . e e . . . e e . . 
            . . c . . . e e e e . e e e e . 
            . c a c . . e e e e . e e e e . 
            . c a a c . e d d d e d d d e . 
            . c a c c . e d d d d d d d e . 
            . . c . c . e f d f d f d f e . 
            . . . . c f e d f d d d f d e . 
            . . . . c . e d d d d d d d e . 
            . . . . c . e d d d f d d d e . 
            . . . . c f e f f f d d d d e . 
            . . . . c . e d d d d d d d e . 
            . . . . . . e d d d d d d d e . 
            . . . . . . e e e e e e e e e . 
            . . . . . . . . f . . f . . . . 
            . . . . . . . . f . . . f . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . e e . . . e e . . 
            . . . 1 . . e e e e . e e e e . 
            . . 1 . 1 . e e e e . e e e e . 
            . c . 1 . 1 e d d d e d d d e . 
            c a c . 1 . e d d d d d d d e . 
            c a a c f . e f d f d f d f e . 
            . c c . c f e d f d d d f d e . 
            . . . . . c e d d d d d d d e . 
            . . . . f . e d d d f d d d e . 
            . . . . . f e f f f d d d d e . 
            . . . . . . e d d d d d d d e . 
            . . . . . . e d d d d d d d e . 
            . . . . . . e e e e e e e e e . 
            . . . . . . . . f . . f . . . . 
            . . . . . . . . f . . . f . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . e e . . . e e . . 
            . . . . . . e e e e . e e e e . 
            . . . . . . e e e e . e e e e . 
            . . . 1 . . e d d d e d d d e . 
            . . 1 . 1 . e d d d d d d d e . 
            . c . 1 . . e f f f d f f f e . 
            c a c . f f e d d d d d d d e . 
            c a a c . . e d d d d d d d e . 
            . c c . c . e d d d d d d d e . 
            . . . . . c e f f f d d d d e . 
            . . . . . . e d d d d d d d e . 
            . . . . . . e d d d d d d d e . 
            . . . . . . e e e e e e e e e . 
            . . . . . . . . f . . f . . . . 
            . . . . . . . . f . . . f . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . e e . . . e e . . 
            . . . . . . e e e e . e e e e . 
            . . . . . . e e e e . e e e e . 
            . . . . . c e d d d e d d d e . 
            1 . 1 . c . e d d d d d d d e . 
            1 . 1 c . . e f f f d f f f e . 
            1 . c . f f e d d d d d d d e . 
            . c c . . . e d d d d d d d e . 
            c a a c f f e d d d d d d d e . 
            c a c . . . e f f f d d d d e . 
            . c . . . . e d d d d d d d e . 
            . . . . . . e d d d d d d d e . 
            . . . . . . e e e e e e e e e . 
            . . . . . . . . f . . f . . . . 
            . . . . . . . . f . . . f . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . e e . . . e e . . 
            . . . . . . e e e e . e e e e . 
            . . . . . . e e e e . e e e e . 
            . . . . . . e d d d e d d d e . 
            . . . . . . e d d d d d d d e . 
            . . . . . . e f d f d f d f e . 
            . . 1 . c f e d f d d d f d e . 
            1 . 1 c f . e d d d d d d d e . 
            1 . c . . . e d d d f d d d e . 
            . c c . . f e f f f d d d d e . 
            c a a c f . e d d d d d d d e . 
            c a c . . . e d d d d d d d e . 
            . c . . . . e e e e e e e e e . 
            . . . . . . . . f . . f . . . . 
            . . . . . . . . f . . . f . . . 
            `],
        100,
        true
        )
    }
    if (info.score() == 30) {
        animation.runImageAnimation(
        Toastie,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f . . . f f . . 
            . . c . . . f e e f . f e e f . 
            . c a c . . f e e f . f e e f . 
            . c a a c . f e e e f e e e f . 
            . c a c c . f e e e e e e e f . 
            . . c . c . f f e f e f e f f . 
            . . . . c f f e f e e e f e f . 
            . . . . c . f e e e e e e e f . 
            . . . . c . f e e e e e e e f . 
            . . . . c f f f f f e e e e f . 
            . . . . c . f e e e f e e e f . 
            . . . . . . f e e e e e e e f . 
            . . . . . . f f f f f f f f f . 
            . . . . . . . . f . . f . . . . 
            . . . . . . . . f . . . f . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f . . . f f . . 
            . . . 1 . . f e e f . f e e f . 
            . . 1 . 1 . f e e f . f e e f . 
            . c . 1 . 1 f e e e f e e e f . 
            c a c . 1 . f e e e e e e e f . 
            c a a c f . f f e f e f e f f . 
            . c c . c f f e f e e e f e f . 
            . . . . . c f e e e e e e e f . 
            . . . . f . f e e e e e e e f . 
            . . . . . f f f f f e e e e f . 
            . . . . . . f e e e f e e e f . 
            . . . . . . f e e e e e e e f . 
            . . . . . . f f f f f f f f f . 
            . . . . . . . . f . . f . . . . 
            . . . . . . . . f . . . f . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f . . . f f . . 
            . . . . . . f e e f . f e e f . 
            . . . . . . f e e f . f e e f . 
            . . . 1 . . f e e e f e e e f . 
            . . 1 . 1 . f e e e e e e e f . 
            . c . 1 . . f f f f e f f f f . 
            c a c . f f f e e e e e e e f . 
            c a a c . . f e e e e e e e f . 
            . c c . c . f e e e e e e e f . 
            . . . . . c f f f f e e e e f . 
            . . . . . . f e e e e e e e f . 
            . . . . . . f e e e e e e e f . 
            . . . . . . f f f f f f f f f . 
            . . . . . . . . f . . f . . . . 
            . . . . . . . . f . . . f . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f . . . f f . . 
            . . . . . . f e e f . f e e f . 
            . . . . . . f e e f . f e e f . 
            . . . . . c f e e e f e e e f . 
            1 . 1 . c . f e e e e e e e f . 
            1 . 1 c . . f f f f e f f f f . 
            1 . c . f f f e e e e e e e f . 
            . c c . . . f e e e e e e e f . 
            c a a c f f f e e e e e e e f . 
            c a c . . . f f f f e e e e f . 
            . c . . . . f e e e e e e e f . 
            . . . . . . f e e e e e e e f . 
            . . . . . . f f f f f f f f f . 
            . . . . . . . . f . . f . . . . 
            . . . . . . . . f . . . f . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f . . . f f . . 
            . . . . . . f e e f . f e e f . 
            . . . . . . f e e f . f e e f . 
            . . . . . . f e e e f e e e f . 
            . . . . . . f e e e e e e e f . 
            . . . . . . f f e f e f e f f . 
            . . 1 . c f f e f e e e f e f . 
            1 . 1 c f . f e e e e e e e f . 
            1 . c . . . f e e e f e e e f . 
            . c c . . f f f f f e e e e f . 
            c a a c f . f e e e e e e e f . 
            c a c . . . f e e e e e e e f . 
            . c . . . . f f f f f f f f f . 
            . . . . . . . . f . . f . . . . 
            . . . . . . . . f . . . f . . . 
            `],
        100,
        true
        )
    }
    music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
})
browserEvents.Space.onEvent(browserEvents.KeyEvent.Released, function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Swoosh)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    Toastie = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . e e . . . . e e . . . . 
        . . . e e e e . . e e e e . . . 
        . . . e e e e . . e e e e . . . 
        . . . e d d d e e d d d e . . . 
        . . . e d d d d d d d d e . . . 
        . . . e d f d d f d d d e . . . 
        . f . e d f d d f d d d e . . . 
        . . f e d d d d d d d d e f . . 
        . . . e d d d d d d d d e . f . 
        . . . e d d f d d f d d e . . . 
        . . . e d d d f f d d d e . . . 
        . . . e d d d d d d d d e . . . 
        . . . e e e e e e e e e e . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . . f . . . . . 
        `, SpriteKind.Player)
    Toastie.setPosition(150, 76)
    controller.moveSprite(Toastie)
    if (info.player3.score() > 0) {
        animation.runImageAnimation(
        Toastie,
        [img`
            . . . . . e e . . . e e . . . . 
            . . . . e d d e . e d d e . . . 
            . . . . e d f d e d f d e . . . 
            . . . . e d f d d d f d e . . . 
            . . f f e d d d d d d d e f f . 
            . . . . e d f d d d d d e . . 1 
            . . . . e d d f f f d d e . . . 
            . . . . e e e e e e e e e . . . 
            . . . . . . f . 1 f 1 . . . . . 
            . . 1 1 1 f 1 1 1 f 1 1 . . . . 
            . 1 e e e e e e e e e e 1 . . . 
            . e d d d d d d d d d d e . . . 
            . e d e e e e e e e d d e . . . 
            . e d e e e e e e e d d e . . . 
            . e d d d d d d d d d d e . . . 
            . 1 e e e e e e e e e e 1 . . . 
            `,img`
            . . . . . e e . . . e e . . . . 
            . . . . e d d e . e d d e . . . 
            . . . . e d f d e d f d e . . . 
            . . . . e d f d d d f d e . . . 
            . . . f e d d d d d d d e f . . 
            . . f . e d f d d d d d e . f . 
            . . . . e d d f f f d d e . . . 
            . . . . e e e e e e e e e . . . 
            . . . . . . f . 1 f 1 . . . . . 
            . . 1 1 1 1 f 1 1 1 f 1 . . . . 
            . 1 e e e e e e e e e e 1 . . . 
            . e d d d d d d d d d d e . . . 
            . e d e e e e e e e d d e . . . 
            . e d e e e e e e e d d e . . . 
            . e d d d d d d d d d d e . . . 
            . 1 e e e e e e e e e e 1 . . . 
            `],
        500,
        true
        )
    } else {
        animation.runImageAnimation(
        Toastie,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . e e . . . . e e . . . . 
            . . . e e e e . . e e e e . . . 
            . . . e e e e . . e e e e . . . 
            . . . e e e e e e e e e e . . . 
            . . . e d d d d d d d d e . . . 
            . . . e d d f d d f d d e . . . 
            d 5 . e d d f d d f d d e . . . 
            . d f e d d d d d d d d e . f . 
            . . . e d f d d d f d d e f . . 
            . . . e d f f f f f d d e . . . 
            . . . e d d d d d d d d e . . . 
            . . . e e e e e e e e e e . . . 
            . . . . . f . . . . f . . . . . 
            . . . . f . . . . f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . e e . . . . . e e . . . 
            . . . e e e e . . . e e e e . . 
            . . . e e e e . . . e e e e . . 
            . . . e d d d e e e d d d e . . 
            . . . e d d d d d d d d d e . . 
            . . . e d d f d d f d d d e . . 
            d 5 . e d d f d d f d d d e . . 
            . d f e d d d d d d d d d e . f 
            . . . e d d f d d d f d d e f . 
            . . . e d d f f f f f d d e . . 
            . . . e d d d d d d d d d e . . 
            . . . e e e e e e e e e e e . . 
            . . . . . f . . . . f . . . . . 
            . . . . . . f . . . . f . . . . 
            `],
        500,
        true
        )
    }
    if (info.score() == 30) {
        animation.runImageAnimation(
        Toastie,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f . . . . f f . . . . 
            . . . f f f f . . f f f f . . . 
            . . . f f f f . . f f f f . . . 
            . . . f e e e f f e e e f . . . 
            . . . f e e e e e e e e f . . . 
            . . . f e e f e e e f e f . . . 
            . . f f e e f e e e f e f f . . 
            . f . f e e e e e e e e f . f . 
            . . . f e e e f f f e e f . . . 
            . . . f e e f e e e f e f . . . 
            . . . f e e e e e e e e f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . . f . . . . f . . . . . 
            . . . . f . . . . f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f . . . . f f . . . . 
            . . . f f f f . . f f f f . . . 
            . . . f f f f . . f f f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . f e e e e e e e e f . . . 
            . . . f e f e e f e e e f . . . 
            . . . f e f e e f e e e f . . . 
            . . f f e e e e e e e e f f . . 
            . f . f e e f f f e e e f . f . 
            . . . f e f e e e f e e f . . . 
            . . . f e e e e e e e e f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . . f . . . . f . . . . . 
            . . . . . . f . . . . f . . . . 
            `],
        500,
        true
        )
    }
    Toastie.setStayInScreen(true)
})
sprites.onOverlap(SpriteKind.shield, SpriteKind.boss, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.shield)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
    info.player3.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Toaster, function (sprite3, otherSprite3) {
    Toasterio.setPosition(1, 0)
    game.showLongText("Your Now Burnt! Bullets Are Faster But Your Fragile. Click A to Become Normal", DialogLayout.Bottom)
    info.setScore(30)
    animation.runImageAnimation(
    Toastie,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f . . . . f f . . . . 
        . . . f f f f . . f f f f . . . 
        . . . f f f f . . f f f f . . . 
        . . . f e e e f f e e e f . . . 
        . . . f e e e e e e e e f . . . 
        . . . f e e f e e e f e f . . . 
        . . f f e e f e e e f e f f . . 
        . f . f e e e e e e e e f . f . 
        . . . f e e e f f f e e f . . . 
        . . . f e e f e e e f e f . . . 
        . . . f e e e e e e e e f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f . . . . f . . . . . 
        . . . . f . . . . f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f . . . . f f . . . . 
        . . . f f f f . . f f f f . . . 
        . . . f f f f . . f f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . f e e e e e e e e f . . . 
        . . . f e f e e f e e e f . . . 
        . . . f e f e e f e e e f . . . 
        . . f f e e e e e e e e f f . . 
        . f . f e e f f f e e e f . f . 
        . . . f e f e e e f e e f . . . 
        . . . f e e e e e e e e f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f . . . . f . . . . . 
        . . . . . . f . . . . f . . . . 
        `],
    500,
    true
    )
    sprites.destroyAllSpritesOfKind(SpriteKind.Toaster)
    Toasterio = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . e e . . . e e . . . . . 
        . . . e d d e . e d d e . . . . 
        . . . e d d e e e d d e . . . . 
        . . . f f f f f f f f f . . . . 
        . . f f 2 f 2 f f 2 f 2 f . . . 
        . . f f 2 f 2 f f 2 f 2 f . . . 
        . . f f 2 f 2 f f 2 f 2 f . . . 
        . . f f 2 f 2 f f 2 f 2 f 1 . . 
        . . f f f f f f f f f f f 1 . . 
        . . . f f f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Toaster)
    Toasterio.setPosition(22, 56)
    animation.runImageAnimation(
    Toasterio,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f . . . . 
        . . f f 4 f 4 f f 4 f 4 f . . . 
        . . f f 4 f 4 f f 4 f 4 f . . . 
        . . f f 4 f 4 f f 4 f 4 f 1 . . 
        . . f f 4 f 4 f f 4 f 4 f 1 . . 
        . . . f f f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    true
    )
    info.setLife(2)
    music.play(music.createSong(hex`0078000408020304001c00100500640000041e000004000000000000000000000000000a040004180000000400012a04000800012708000c0001240c001000012005001c000f0a006400f4010a0000040000000000000000000000000000000002180000000400012a04000800012708000c0001240c001000012009010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800180004000500010a0800090001080c000d000106100011000104`), music.PlaybackMode.UntilDone)
})
info.onLifeZero(function () {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.yuck, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
browserEvents.C.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (info.player3.score() > 0) {
        Toastie.setVelocity(100, -10)
        animation.runImageAnimation(
        Toastie,
        [img`
            . . . . e e e e . . e e e . . . 
            1 . . f e d d f e e f d d e . . 
            1 1 . . f e d d f d d f d e . . 
            1 1 1 f . e d f d d f d d e . . 
            1 1 1 1 f e d d d d d d d e . . 
            . 1 1 1 1 e d d d d f d d e . . 
            . . 1 1 1 1 e e e d d f d e . . 
            1 . 1 1 1 1 . f e e e e e e . . 
            1 1 . 1 1 1 f . . f . . . . . . 
            1 1 1 . 1 1 1 . f . . 1 1 . . . 
            . 1 e e e e e e e e e e 1 . . . 
            . e d d d d d d d d d d e 1 . . 
            1 e d e e e e e e e d d e 1 . . 
            . e d e e e e e e e d d e 1 . . 
            1 e d d d d d d d d d d e 1 . . 
            . 1 e e e e e e e e e e 1 . . . 
            `,img`
            . . . . e e e e . . e e e . . . 
            1 . . f e d d f e e f d d e . . 
            . . . . f e d d f d d f d e . . 
            . . 1 f . e d f d d f d d e . . 
            1 . . 1 f e d d d d d d d e . . 
            . . . . 1 e d d d d f d d e . . 
            . . 1 . 1 1 e e e d d f d e . . 
            1 . . . . 1 . f e e e e e e . . 
            . . . 1 1 1 f . . f . . . . . . 
            1 . 1 . 1 1 1 . f . . 1 . . . . 
            . . e e e e e e e e e e 1 . . . 
            . e d d d d d d d d d d e 1 . . 
            . e d e e e e e e e d d e . . . 
            . e d e e e e e e e d d e 1 . . 
            . e d d d d d d d d d d e . . . 
            . 1 e e e e e e e e e e 1 . . . 
            `,img`
            . . . . e e e e . . e e e . . . 
            1 . . f e d d f e e f d d e . . 
            . . . . f e d d f d d f d e . . 
            1 . 1 f . e d f d d f d d e . . 
            . . . 1 f e d d d d d d d e . . 
            1 . . . 1 e d d d d f d d e . . 
            . . 1 . 1 1 e e e d d f d e . . 
            . 1 . . . 1 . f e e e e e e . . 
            . . . . 1 1 f . . f . . . . . . 
            1 . 1 . . . 1 . f . . 1 . . . . 
            . . e e e e e e e e e e 1 . . . 
            . e d d d d d d d d d d e 1 . . 
            . e d e e e e e e e d d e . . . 
            . e d e e e e e e e d d e 1 . . 
            . e d d d d d d d d d d e . . . 
            . 1 e e e e e e e e e e 1 . . . 
            `],
        200,
        true
        )
    }
    if (19 > info.score()) {
        Toastie.setVelocity(100, -10)
        animation.runImageAnimation(
        Toastie,
        [img`
            e e . . . . e e e e . . . . . . 
            e e e e 5 . e e e e e 5 . . . . 
            e e e e e . 5 e e e e e . . . . 
            . e e e e e e d d d d e . . . . 
            . . e d d d d d d d d e 5 . . . 
            f . e d f d d f d d d e . . . . 
            . f e d d f d d f d d e . . . . 
            . . e d f d d f d d d e 5 . . . 
            f . e d d d d d d d d e . . . . 
            . f e d d d d d d d d e . . . . 
            . . e d f d d d d d d e . 5 . . 
            5 . e d d f d d d d d e . 5 . . 
            5 5 e d d d f d d d d e 5 . . . 
            . 5 e e e e e e e e e e 5 5 . . 
            . 5 5 f f 5 5 5 5 5 5 f f 5 . . 
            . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
            `,img`
            e e . . . . e e e e . . . . . . 
            e e e e 5 . e e e e e 5 . . . . 
            e e e e e . . e e e e e . . . . 
            . e e e e e e d d d d e . . . . 
            . . e d d d d d d d d e . . . . 
            f . e d f d d f d d d e . . . . 
            . f e d d f d d f d d e . . . . 
            . . e d f d d f d d d e 5 . . . 
            f . e d d d d d d d d e . . . . 
            . f e d d d d d d d d e . . . . 
            . . e d f d d d d d d e . 5 . . 
            . . e d d f d d d d d e . . . . 
            . . e d d d f d d d d e 5 . . . 
            5 5 e e e e e e e e e e . . . . 
            . 5 5 f f 5 5 5 5 5 5 f f 5 . . 
            . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
            `,img`
            e e 5 . . . e e e e . . . . . . 
            e e e e . . e e e e e . . . . . 
            e e e e e . . e e e e e 5 . . . 
            . e e e e e e d d d d e . . . . 
            . . e d d d d d d d d e . . . . 
            f . e d f d d f d d d e . . . . 
            . f e d d f d d f d d e . . . . 
            . . e d f d d f d d d e 5 . . . 
            f . e d d d d d d d d e . . . . 
            . f e d d d d d d d d e . . . . 
            . . e d f d d d d d d e . . . . 
            . . e d d f d d d d d e . . . . 
            . . e d d d f d d d d e 5 . . . 
            . . e e e e e e e e e e 5 5 . . 
            . 5 5 f f 5 5 5 5 5 5 f f 5 . . 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
            `],
        200,
        true
        )
    }
    if (info.score() >= 30) {
        Toastie.setVelocity(100, -10)
        animation.runImageAnimation(
        Toastie,
        [img`
            f f . . . . f f f f . . . . . . 
            f f f f 5 . f f f f f 5 . . . . 
            f f f f f . 5 f f f f f . . . . 
            . f f f f f f e e e e f . . . . 
            . . f e e e e e e e e f . . . . 
            . . f e f e e f e e e f . . . . 
            f . f e e f e e f e e f . . . . 
            . f f e f e e f e e e f 5 . . . 
            f . f e e e e e e e e f . . . . 
            . f f e e e e e e e e f . . . . 
            . . f e f e e e e e e f . 5 . . 
            5 . f e e f e e e e e f . 5 . . 
            5 5 f e e e f e e e e f 5 . . . 
            . 5 f f f f f f f f f f 5 5 . . 
            . 5 5 f f 5 5 5 5 5 5 f f 5 . . 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            `,img`
            f f . . . . f f f f . . . . . . 
            f f f f 5 . f f f f f 5 . . . . 
            f f f f f . . f f f f f . . . . 
            . f f f f f f e e e e f . . . . 
            . . f e e e e e e e e f . . . . 
            f . f e f e e f e e e f . . . . 
            . f f e e f e e f e e f . . . . 
            . . f e f e e f e e e f 5 . . . 
            f . f e e e e e e e e f . . . . 
            . f f e e e e e e e e f . . . . 
            . . f e f e e e e e e f . 5 . . 
            . . f e e f e e e e e f . . . . 
            . . f e e e f e e e e f 5 . . . 
            5 5 f f f f f f f f f f . . . . 
            . 5 5 f f 5 5 5 5 5 5 f f 5 . . 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            `,img`
            f f 5 . . . f f f f . . . . . . 
            f f f f . . f f f f f . . . . . 
            f f f f f . . f f f f f 5 . . . 
            . f f f f f f e e e e f . . . . 
            . . f e e e e e e e e f . . . . 
            f . f e f e e f e e e f . . . . 
            . f f e e f e e f e e f . . . . 
            . . f e f e e f e e e f 5 . . . 
            f . f e e e e e e e e f . . . . 
            . f f e e e e e e e e f . . . . 
            . . f e f e e e e e e f . . . . 
            . . f e e f e e e e e f . . . . 
            . . f e e e f e e e e f 5 . . . 
            . . f f f f f f f f f f 5 5 . . 
            . 5 5 f f 5 5 5 5 5 5 f f 5 . . 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            `],
        200,
        true
        )
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.setScore(18)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    sprites.destroyAllSpritesOfKind(SpriteKind.Roll)
    game.showLongText("You Have Collected Butter! Hold C To Slide.", DialogLayout.Bottom)
    music.play(music.createSong(hex`
                    0078000408020300001c00010a006400f4016400000400000000000000000000000000050000042a0000000400011908000c00011b10001400011d18001c0001191c002000011d20002400012024002800012403001c0001dc00690000045e01000400000000000000000000056400010400032a0000000400011908000c00011b10001400011d18001c0001191c002000011d20002400012024002800012408001c000e050046006603320000040a002d00000064001400013200020100022a0000000400011908000c00011b10001400011d18001c0001191c002000011d200024000120240028000124
                    `), music.PlaybackMode.UntilDone)
})
browserEvents.C.onEvent(browserEvents.KeyEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Toastie)
    Toastie.setVelocity(0, 0)
    if (19 > info.score()) {
        animation.runImageAnimation(
        Toastie,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . e e . . . . e e . . . . 
            . . . e e e e . . e e e e . . . 
            . . . e e e e . . e e e e . . . 
            . . . e e e e e e e e e e . . . 
            . . . e d d d d d d d d e . . . 
            . . . e d d f d d f d d e . . . 
            d 5 . e d d f d d f d d e . . . 
            . d f e d d d d d d d d e . f . 
            . . . e d f d d d f d d e f . . 
            . . . e d f f f f f d d e . . . 
            . . . e d d d d d d d d e . . . 
            . . . e e e e e e e e e e . . . 
            . . . . . f . . . . f . . . . . 
            . . . . f . . . . f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . e e . . . . . e e . . . 
            . . . e e e e . . . e e e e . . 
            . . . e e e e . . . e e e e . . 
            . . . e d d d e e e d d d e . . 
            . . . e d d d d d d d d d e . . 
            . . . e d d f d d f d d d e . . 
            d 5 . e d d f d d f d d d e . . 
            . d f e d d d d d d d d d e . f 
            . . . e d d f d d d f d d e f . 
            . . . e d d f f f f f d d e . . 
            . . . e d d d d d d d d d e . . 
            . . . e e e e e e e e e e e . . 
            . . . . . f . . . . f . . . . . 
            . . . . . . f . . . . f . . . . 
            `],
        500,
        true
        )
    } else {
        animation.runImageAnimation(
        Toastie,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . e e . . . . e e . . . . 
            . . . e e e e . . e e e e . . . 
            . . . e e e e . . e e e e . . . 
            . . . e e e e e e e e e e . . . 
            . . . e d d d d d d d d e . . . 
            . . . e d d d d d d d d e . . . 
            . . f e d d f d d f d d e f f . 
            . f . e d d d d d d d d e . . . 
            . . . e d d f d d d f d e . . . 
            . . . e d d d f f f d d e . . . 
            . . . e d d d d d d d d e . . . 
            . . . e e e e e e e e e e . . . 
            . . . . . f . . . . f . . . . . 
            . . . . . . f . . . . f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . e e . . . . e e . . . 
            . . . . e e e e . . e e e e . . 
            . . . . e e e e . . e e e e . . 
            . . . . e e e e e e e e e e . . 
            . . . . e d d d d d d d d e . . 
            . . . . e d d d d d d d d e . . 
            . . f . e d d d d d d d d e . . 
            . . . f e d f d d d f d d e f f 
            . . . . e d d d d d d d d e . . 
            . . . . e d f d d d f d d e . . 
            . . . . e d d f f f d d d e . . 
            . . . . e d d d d d d d d e . . 
            . . . . e e e e e e e e e e . . 
            . . . . . . f . . . . f . . . . 
            . . . . . f . . . . f . . . . . 
            `],
        500,
        true
        )
    }
    if (info.score() >= 30) {
        animation.runImageAnimation(
        Toastie,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f . . . . f f . . . . 
            . . . f f f f . . f f f f . . . 
            . . . f f f f . . f f f f . . . 
            . . . f e e e f f e e e f . . . 
            . . . f e e e e e e e e f . . . 
            . . . f e e f e e e f e f . . . 
            . . f f e e f e e e f e f f . . 
            . f . f e e e e e e e e f . f . 
            . . . f e e e f f f e e f . . . 
            . . . f e e f e e e f e f . . . 
            . . . f e e e e e e e e f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . . f . . . . f . . . . . 
            . . . . f . . . . f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . f f . . . . f f . . . . 
            . . . f f f f . . f f f f . . . 
            . . . f f f f . . f f f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . f e e e e e e e e f . . . 
            . . . f e f e e f e e e f . . . 
            . . . f e f e e f e e e f . . . 
            . . f f e e e e e e e e f f . . 
            . f . f e e f f f e e e f . f . 
            . . . f e f e e e f e e f . . . 
            . . . f e e e e e e e e f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . . f . . . . f . . . . . 
            . . . . . . f . . . . f . . . . 
            `],
        500,
        true
        )
    }
    if (info.player3.score() > 0) {
        animation.runImageAnimation(
        Toastie,
        [img`
            . . . . . e e . . . e e . . . . 
            . . . . e d d e . e d d e . . . 
            . . . . e d f d e d f d e . . . 
            . . . . e d f d d d f d e . . . 
            . . f f e d d d d d d d e f f . 
            . . . . e d f d d d d d e . . . 
            . . . . e d d f f f d d e . . . 
            . . . . e e e e e e e e e . . . 
            . . . . . . f . 1 f 1 . . . . . 
            . . 1 1 1 f 1 1 1 f 1 1 . . . . 
            . 1 e e e e e e e e e e 1 . . . 
            . e d d d d d d d d d d e . . . 
            . e d e e e e e e e d d e . . . 
            . e d e e e e e e e d d e . . . 
            . e d d d d d d d d d d e . . . 
            . 1 e e e e e e e e e e 1 . . . 
            `,img`
            . . . . . e e . . . e e . . . . 
            . . . . e d d e . e d d e . . . 
            . . . . e d f d e d f d e . . . 
            . . . . e d f d d d f d e . . . 
            . . . f e d d d d d d d e f . . 
            . . f . e d f d d d d d e . f . 
            . . . . e d d f f f d d e . . . 
            . . . . e e e e e e e e e . . . 
            . . . . . . f . 1 f 1 . . . . . 
            . . 1 1 1 1 f 1 1 1 f 1 . . . . 
            . 1 e e e e e e e e e e 1 . . . 
            . e d d d d d d d d d d e . . . 
            . e d e e e e e e e d d e . . . 
            . e d e e e e e e e d d e . . . 
            . e d d d d d d d d d d e . . . 
            . 1 e e e e e e e e e e 1 . . . 
            `],
        500,
        true
        )
    }
})
browserEvents.V.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (info.player3.score() >= 10) {
        Bun_Beam = sprites.create(img`
            . . . . . . . . . . . 1 1 1 . . 
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            1 e 1 e 1 1 1 1 e 1 e 1 e e e 1 
            e d 1 d d 1 1 d d d d 1 d d d e 
            e d d d d d 1 d d d d d d d d e 
            e d d d d d d d d d d d d d d e 
            e d d d d d d d d d d d d d d e 
            e d d d d d d d d d d d d d d e 
            e d d d d d d d d d d d d d d e 
            e e e e e e e e e e e e e e e e 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Roll)
        sprites.destroy(Bun_Beam)
        Bun_Beam = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 1 1 1 . . . . . 
            . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            1 e e 1 e e 1 e e 1 e e e e e 1 
            e d d 1 d d d d d 1 d d d d d e 
            e d d d d d d d d 1 d d d d d e 
            e d d d d d d d d d d d d d d e 
            e d d d d d d d d d d d d d d e 
            e d d d d d d d d d d d d d d e 
            e d d d d d d d d d d d d d d e 
            e e e e e e e e e e e e e e e e 
            `, Toastie, -60, 0)
        sprites.destroyAllSpritesOfKind(SpriteKind.Swoosh)
        controller.moveSprite(Toastie)
        animation.runImageAnimation(
        Toastie,
        [img`
            . . . . . e e . . . e e . . . . 
            . . . . e d d e . e d d e . . . 
            . . . . e d f d e d f d e . . . 
            . . . . e d f d d d f d e . . . 
            . . f f e d d d d d d d e f f . 
            . . . . e d f d d d d d e . . 1 
            . . . . e d d f f f d d e . . . 
            . . . . e e e e e e e e e . . . 
            . . . . . . f . 1 f 1 . . . . . 
            . . 1 1 1 f 1 1 1 f 1 1 . . . . 
            . 1 e e e e e e e e e e 1 . . . 
            . e d d d d d d d d d d e . . . 
            . e d e e e e e e e d d e . . . 
            . e d e e e e e e e d d e . . . 
            . e d d d d d d d d d d e . . . 
            . 1 e e e e e e e e e e 1 . . . 
            `,img`
            . . . . . e e . . . e e . . . . 
            . . . . e d d e . e d d e . . . 
            . . . . e d f d e d f d e . . . 
            . . . . e d f d d d f d e . . . 
            . . . f e d d d d d d d e f . . 
            . . f . e d f d d d d d e . f . 
            . . . . e d d f f f d d e . . . 
            . . . . e e e e e e e e e . . . 
            . . . . . . f . 1 f 1 . . . . . 
            . . 1 1 1 1 f 1 1 1 f 1 . . . . 
            . 1 e e e e e e e e e e 1 . . . 
            . e d d d d d d d d d d e . . . 
            . e d e e e e e e e d d e . . . 
            . e d e e e e e e e d d e . . . 
            . e d d d d d d d d d d e . . . 
            . 1 e e e e e e e e e e 1 . . . 
            `],
        100,
        true
        )
    }
})
sprites.onOverlap(SpriteKind.boss, SpriteKind.Roll, function (sprite, otherSprite) {
    info.player3.changeLifeBy(-1)
    sprites.destroy(otherSprite)
})
let mold: Sprite = null
let Rye_Guy: Sprite = null
let BreadRoll: Sprite = null
let The_Knight: Sprite = null
let evil_toastie: Sprite = null
let Butter_Snake: Sprite = null
let Bun_Beam: Sprite = null
let Toasterio: Sprite = null
let boss: Sprite = null
let Bagel_Shield: Sprite = null
let Toastie: Sprite = null
let burnt_grain: Sprite = null
let Pellet_Grain: Sprite = null
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999111111111119999999999999999999999999999999999999991111999999999999999999999999999999999999999999111111111111
    99999999999999999999999999999999999999999999999999991ddddddddd19999999999999999999999999991111199999991dd11999999999999999999999999999999999999999991dddddddddd1
    99999999999999999999999999999911111999999999999999991ddddddddd19999999999999999999999999991ddd199999991ddd1999999999999999999991111999999999999999991dddddddddd1
    9999999999999999999999999999911ddd1199999999999999991d11dddddd19999999999999999999999999111ddd111999911ddd1199999999999999999911dd1199999999999999991dd1d1ddddd1
    999999999999999999999999999911ddddd199999999999999991ddddddd1d199999999111999999111111191ddddddd199991ddddd19999999999999999111dddd199999999999999991dddddd11dd1
    99999911119999999999999999991dddddd199911199999999991ddddddddd1999999911d19999991ddddd191ddddddd199911ddddd119999999999999991dddddd199911119999999991dddddddddd1
    9999991dd19999999999999999991ddd1d119991d199999999991ddddddddd199999991dd19999991ddddd191ddddddd199911ddddd119999999999999991ddd1d119991dd19999999991dddd1ddddd1
    1111111dd19111111991111111111dddddd19111d111999999991ddddddd1d111111111dd19999991ddddd111d11dddd19111ddddddd11111991111111111dddddd19911dd11999999991ddddddd1dd1
    d11dddddd191d1dd1991ddddddddddd1ddd111ddddd1111111111ddddddd1d11d11ddd1dd199999911dd1dd11ddddddd191dddddddddd1dd1991ddddddddddddd1d1111dddd1191111111dddddd11ddd
    dddd1dddd191dddd19911d1dd1ddddddddd111ddddd111dd1dd11ddddddddd11dddd1d1dd11111111dddddd11dd1dddd191ddddddddddddd1991dd1ddd1dddddddd1111dddd1191d11dd1ddddddddddd
    ddddddddd111dd1d1111dddddddddddddddd11dddddd11ddddddddddddddddd1ddddddddd11d11d11ddddddddddddddd191ddddddddddd1d1111dddddddddddddddd11dddddd111ddddddddddddddddd
    d11d1dddd1ddddddd1dd1d1ddddddddddddd11ddddddd1dddd11ddddddddddddd1111ddddddd1ddd11dd1ddddddddddd111ddddddddddddddd1ddd1ddddddddddddd11ddddddd111d11ddddddddddddd
    ddddddddd1ddddddd1dddddddddddddddddddd1dddddd11ddddddddddddddddddddddddddddd1ddd1ddddddddddddddd1d1ddddddddddddddd1dddddddddddddddddddddddddd1dddddddddddddddddd
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11ccccccccccc11cccccccccccc11ccccccccccc11ccccccccccc11cccccccccccc11ccccccccccc11ccccccccccc11cccccccccccc11ccccccccccc11ccccccccccc11cccccccccccc11ccccccccccc
    11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc
    11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc11cdddddddddc11cddddddddddc11cdddddddddc
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd1111111d
    11ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d1111111
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbcbddbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    1111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd111
    111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbcbbcbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbddbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd1111111d111d1111d111dd11dd
    d11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11d
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd11111111111d1111d111dd11dd1111111111dddd1111111d
    11ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d111111111ddd111111dddd11dd11111111111d1d1111111
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbccbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
    bccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccc
    ccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbb
    bbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbddbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddbbbbbbbbbbbbbbbbbdd1111111111dddd11111ddb
    bbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111ddbbbbbbbbbbbbbbbbbdd11111111111d1d11111dd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    ccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcc
    dbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbd
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    `)
info.setLife(3)
info.player2.setLife(3)
info.player2.setScore(0)
sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . e e e e e e e e . . . . . 
    . . e d d d d d d d d e . . . . 
    . . e d e 1 1 1 1 e d e . . . . 
    . . e d 1 d d d d 1 d e . . . . 
    . . e d 1 d d d d 1 d e . . . . 
    . . e d e 1 1 1 1 e d e . . . . 
    . . e d d d d d d d d e . . . . 
    . . . e e e e e e e e . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Roll).setPosition(14, 30)
Pellet_Grain = sprites.create(assets.image`7 Grains`, SpriteKind.Projectile)
burnt_grain = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
Toastie = sprites.create(assets.image`Toastie`, SpriteKind.Player)
controller.moveSprite(Toastie)
animation.runImageAnimation(
Toastie,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . e e . . . . e e . . . . 
    . . . e e e e . . e e e e . . . 
    . . . e e e e . . e e e e . . . 
    . . . e d d d e e d d d e . . . 
    . . . e d d d d d d d d e . . . 
    . . . e d d f d d d f d e . . . 
    . . f e d d f d d d f d e f f . 
    . f . e d d d d d d d d e . . . 
    . . . e d d f d d d f d e . . . 
    . . . e d d d f f f d d e . . . 
    . . . e d d d d d d d d e . . . 
    . . . e e e e e e e e e e . . . 
    . . . . . f . . . . f . . . . . 
    . . . . . . f . . . . f . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . e e . . . . e e . . . 
    . . . . e e e e . . e e e e . . 
    . . . . e e e e . . e e e e . . 
    . . . . e d d d e e d d d e . . 
    . . . . e d d d d d d d d e . . 
    . . . . e d d d f d d f d e . . 
    . . f . e d d d f d d f d e . . 
    . . . f e d d d d d d d d e f f 
    . . . . e d d f d d d f d e . . 
    . . . . e d d d f f f d d e . . 
    . . . . e d d d d d d d d e . . 
    . . . . e d d d d d d d d e . . 
    . . . . e e e e e e e e e e . . 
    . . . . . . f . . . . f . . . . 
    . . . . . f . . . . f . . . . . 
    `],
500,
true
)
info.setScore(5)
sprites.create(assets.image`Grain Gun`, SpriteKind.Tool).setPosition(50, 40)
sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . c c . . . . . . 
    . . . . . . . c a a c . . . . . 
    . . . . . . c c a a c . . . . . 
    . . . . . c a a a a c . . . . . 
    . . . . . . c c c c . . . . . . 
    . . . . . . . . . c . . . . . . 
    . . . . . . . . c . . . . . . . 
    . . . . . . . c . . . . . . . . 
    . . . . . . c . . . . . . . . . 
    . . . . . c . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.axe).setPosition(64, 75)
game.onUpdateInterval(5000, function () {
    Toastie.setStayInScreen(true)
    for (let index = 0; index < 1; index++) {
        if (info.score() > 10) {
            Butter_Snake = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 8 . . . . . . . . 
                . . 8 8 8 8 8 8 . . . . . . . . 
                . . 8 1 1 1 8 8 5 5 5 5 5 f . . 
                . . 8 8 8 8 8 5 5 5 5 5 5 f . . 
                . . 8 1 1 1 8 5 5 5 5 5 5 5 . . 
                . . 8 1 8 1 8 5 5 5 5 5 5 5 . . 
                5 5 8 1 1 1 8 5 5 5 5 5 5 5 5 . 
                `, SpriteKind.Enemy)
            evil_toastie = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . e e . . . . . . . 
                . . . . . . e e e e . . . . . . 
                . . . . . . f e e f . . e e . . 
                . . . . . . e f f e . . d d . . 
                . . . . . . f e e f . . e e . . 
                . . . . . . f e e f . . d d . . 
                . . . . . . e e e e . f e e . . 
                . . . . . f e e e e f . . . . . 
                . . . . f . e e e e . . . . . . 
                . . . . . . f e e e . . . . . . 
                . . . . . . e f f e . . . . . . 
                . . . . . . e e e e . . . . . . 
                . . . . . . f e e f . . . . . . 
                . . . . . f . . . . f . . . . . 
                `, SpriteKind.Enemy)
            The_Knight = sprites.create(img`
                . . . . 1 1 . . . 1 1 . . . . . 
                . . . 1 . 1 . . . 1 . 1 . . . . 
                . . 1 . . . . . . . . . 1 . . . 
                . . 1 . . . . . . . . . 1 . . . 
                . . . 1 1 1 1 1 1 1 1 1 . . . . 
                . . . . 1 f 1 1 1 f 1 . . . . . 
                . . . . 1 f 1 1 1 f 1 . . . . . 
                . . . . 1 1 1 1 1 1 1 . . . . . 
                . . . . 1 1 1 1 1 1 1 . . . . . 
                . . . . . 1 1 1 1 1 . . . . . . 
                . . . . . b b b b . . d d . . . 
                . . . . . b b f f . d d d . . . 
                . . . . b b f f f f d d . . . . 
                . . . b b b b f f d . . . . . . 
                . . . . . . f f f . . . . . . . 
                . . . . . . f . f . . . . . . . 
                `, SpriteKind.Enemy)
            BreadRoll = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . e e . . e e . . . . 
                . . . . . e d d e e d d e . . . 
                . . . . . e d f d d f d e . . . 
                . . . . . e d f d d f d e . . . 
                . . . . . e e e e e e e e . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Enemy)
            Butter_Snake.setPosition(randint(-50, 50), randint(-50, 50))
            Butter_Snake.setVelocity(5, 5)
            evil_toastie.setPosition(randint(-100, 100), randint(-100, 100))
            The_Knight.setPosition(randint(-100, 100), randint(-100, 100))
            BreadRoll.setPosition(randint(-100, 100), randint(-100, 100))
            The_Knight.setVelocity(-20, 10)
            BreadRoll.setVelocity(90, 80)
            evil_toastie.setVelocity(10, 10)
            The_Knight.follow(Toastie)
            The_Knight.follow(Toastie)
            if (info.score() < 30) {
                Toasterio = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . e e . . . e e . . . . . 
                    . . . e d d e . e d d e . . . . 
                    . . . e d d e e e d d e . . . . 
                    . . . f f f f f f f f f . . . . 
                    . . f f 2 f 2 f f 2 f 2 f . . . 
                    . . f f 2 f 2 f f 2 f 2 f . . . 
                    . . f f 2 f 2 f f 2 f 2 f . . . 
                    . . f f 2 f 2 f f 2 f 2 f 1 . . 
                    . . f f f f f f f f f f f 1 . . 
                    . . . f f f f f f f f f . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Toaster)
                Toasterio.setPosition(22, 56)
            } else {
                Toasterio = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . f f f f f f f f f . . . . 
                    . . f f 4 f 4 f 4 f 4 f f . . . 
                    . . f f 4 f 4 f 4 f 4 f f . . . 
                    . . f f 4 f 4 f 4 f 4 f f . . . 
                    . . f f f f f f f f f f f . . . 
                    . . . f f f f f f f f f . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Toaster)
                Toasterio.setPosition(22, 56)
            }
        }
        if (info.player2.score() > 10) {
            scene.setBackgroundImage(img`
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777778888888888888888777777777777777777777777777777777777777777777777
                7777777777777777777777777777777777777777777777777777777777777777777777777777777777777778888888888888888888888888888888888888888777777777777777777777777777777777
                7777777777777777777777777777788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888877777777777777777777777777777
                7777777777777777777777777777888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888877777777777777777777777777
                7777777777777777777777777777888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888877777777777777777777
                7777777777777777777777777788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888887777777777777777777
                7777777777777777777777778888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888887777777777777777777
                7777777777777777777777788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888887777777777777777777
                7777777777777777777777888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888877777777777777777
                7777777777777777777778888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888777777777777777
                7777777777777777777888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888887777777777777
                7777777777777777788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888877777777777
                7777777777777777888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888777777777
                7777777777777788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888887777777
                7777777777788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888777777
                7777777778888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888877777
                7777777788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888777
                7777778888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888777
                7777788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888777
                7777788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888777
                7777888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888777
                7777888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888777
                7777888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888777
                7777788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888877877777
                7777888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888877777777
                7777788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888877777777
                7777877888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888887887777777777
                7777777888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888877777777777777
                7777778878887888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888777877777777777777777
                7777777777887888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888777777777777777777777777
                7777777777877888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888887777777777777777777777777
                7777777777777788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888877777777777777777777777777
                7777777777777788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888877777777777777777777777777
                7777777777777788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888777777777777777777777777777
                7777777777777777888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888877777777777777777777777777
                7777777777777777888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888887777777777777777777777777777
                7777777777777778888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888887777777777777777777777777777
                7777777777777888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888887777777777777777777777777
                7777777777777888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888877777777777777777777
                7777777777888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888887777777777777777
                7777777888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888887777777
                7777778888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888777
                7777788888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888887
                7888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                ee88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
                `)
            sprites.destroy(Butter_Snake)
            sprites.destroyAllSpritesOfKind(SpriteKind.Toaster)
            evil_toastie = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . e e . . . . . . . 
                . . . . . . e e e e . . . . . . 
                . . . . . . f e e f . . e e . . 
                . . . . . . e f f e . . d d . . 
                . . . . . . f e e f . . e e . . 
                . . . . . . f e e f . . d d . . 
                . . . . . . e e e e . f e e . . 
                . . . . . f e e e e f . . . . . 
                . . . . f . e e e e . . . . . . 
                . . . . . . f e e e . . . . . . 
                . . . . . . e f f e . . . . . . 
                . . . . . . e e e e . . . . . . 
                . . . . . . f e e f . . . . . . 
                . . . . . f . . . . f . . . . . 
                `, SpriteKind.Enemy)
            Rye_Guy = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . e e e e e e e e e e e e . . 
                . e d e d e f e e f e d e e e . 
                . e e e e e e e e e e e e d e . 
                . e e e d e f f f f e d e e e . 
                . . e e e e e e e e e e e e . . 
                . . . f . . . . . . . f . . . . 
                . . f . . . . . . . f . . . . . 
                . . . f . . . . . . . f . . . . 
                . . . f . . . . . . . f . . . . 
                `, SpriteKind.Enemy)
            BreadRoll = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . e e . . e e . . . . 
                . . . . . e d d e e d d e . . . 
                . . . . . e d f d d f d e . . . 
                . . . . . e d f d d f d e . . . 
                . . . . . e e e e e e e e . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Enemy)
            if (info.score() < 30) {
                Toasterio = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . e e . . . e e . . . . . 
                    . . . e d d e . e d d e . . . . 
                    . . . e d d e e e d d e . . . . 
                    . . . f f f f f f f f f . . . . 
                    . . f f 2 f 2 f f 2 f 2 f . . . 
                    . . f f 2 f 2 f f 2 f 2 f . . . 
                    . . f f 2 f 2 f f 2 f 2 f . . . 
                    . . f f 2 f 2 f f 2 f 2 f 1 . . 
                    . . f f f f f f f f f f f 1 . . 
                    . . . f f f f f f f f f . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Toaster)
                Toasterio.setPosition(19, 26)
            } else {
                Toasterio = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . f f f f f f f f f . . . . 
                    . . f f 4 f 4 f 4 f 4 f f . . . 
                    . . f f 4 f 4 f 4 f 4 f f . . . 
                    . . f f 4 f 4 f 4 f 4 f f 1 . . 
                    . . f f f f f f f f f f f 1 . . 
                    . . . f f f f f f f f f . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Toaster)
                Toasterio.setPosition(19, 26)
            }
            Rye_Guy.setPosition(randint(-50, 50), randint(-50, 50))
            evil_toastie.setPosition(randint(-50, 50), randint(-50, 50))
            BreadRoll.setPosition(randint(-100, 100), randint(-100, 100))
            BreadRoll.setVelocity(90, 80)
            evil_toastie.setVelocity(30, 10)
            evil_toastie.follow(Toastie, 100)
            Rye_Guy.setVelocity(50, 50)
        }
        if (info.player3.score() > 0) {
            sprites.destroyAllSpritesOfKind(SpriteKind.Toaster)
        }
        if (info.player2.score() > 34) {
            sprites.destroyAllSpritesOfKind(SpriteKind.Toaster)
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            scene.setBackgroundImage(img`
                eeeee2222222222222222222222222222222222ee2222ee2222ee2222222eeeee2222222222222222222222222222222222ee22222eeee222ee2eeeee2222222222222222222222222222222222ee222
                222eeeee22222222222222222222222222222eee2222eeee2222ee222222222eeeee22222222222222222222222222222eee2222eeeee222ee22222eeeee22222222222222222222222222222eee2222
                222222eeeeeee222222222222222222222eeee22222eeeeee2222eee2222222222eeeeeee222222222222222222222eeee22222eeee2222ee222222222eeeeeee222222222222222222222eeee22222e
                222222222eeeeeeeeeeeeee2222222eeeee222222eeee22eee2222eeee22222222222eeeeeeeeeeeeee2222222eeeee222223eeee22222eeee22222222222eeeeeeeeeeeeee2222222eeeee222222eee
                e222222222222222222222222222eeee2222222eeee22222eef22222eeeee222222222222222222222222222eeee2333333eeee22222efe2eeeee222222222222222222222222222eeee2222222eeee2
                eeeeeeee22222222222222222222222222222eee2222222eeeefe222222eeeeeeeee22222222222222333333333333322eee2222222efe22222eeeeeeeee22222222222222222222222222222eee2222
                2222eeeeeeeee222222222222222222222eeee2222222eeeeeeeffe222222222eeeeeeeee222223333333333322222eeee2223322effeee222322222eeeeeeeee222222222222222222222eeee222222
                2223322222222222222222222222222eeee2222222eeeeeeee222efffe222222222222222222222222222222222eeee2233332efffe22eeeee233333222222222222222222222222222eeee2222222ee
                2222233332222222222222222222222222222222eeeeeeeee22222eefffe2222222222222222222222222222222233333332efffee22222eeeee2233333333333333333332222222222222222222eeee
                eeee22233333333333333332222222222222eeeeee222222222eeeee22ffffee22222222223333333333333333333332eeffff22eeeee22222eeeeee23333333333333222222222222222222eeeeeeee
                eeeeeeeeee233333333332222222222eeeeeee2222222222eeeee2222ffeefffffffee2222222222223333333332fffffffeeff2222eeeee222222eeeeeeee222222222222222222222eeeeeeeeeeeee
                eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22eeeeeeee2222eee222222ffeeeeeeeeeeffffffffffffffffffffffffeeeeeeeeeeff222222eee2222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
                eeeeeeeeeee22222222222222ee22222222222222222222222222effeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffe22222222222222222222222222ee22222222222222eeeeeeeeeee
                eeeeeeeeee22222222222222222eeee2222222222222222222efffeeeeeeeeeeeeeeeeee2eeeeeeeeeeeeeeeeee2eeeeeeeeeeeeeefffe2222222222222222222eeee22222222222222222eeeeeeeeee
                eeeeeeeeee222222222222222222eeeeeeee222222222eeefffeeeeeeeeeeeeeeeeeeeee222222eeeeeeeeee2222eeeeeeeeeeeeeeeeefffeee222222222eeeeeeee222222222222222222eeeeeeeeee
                eeeeeeeee2222222222222222222eeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeee22222222222222222222ee2eeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeee2222222222222222222eeeeeeeee
                eeeeeeeee2222222222222222222ee2222effffffffffffeeeeeeeeeeeeeeeeeeeeeeeee22222222222222222222ee22eeeeeeeeeeeeeeeefffffffffffffe2222ee2222222222222222222eeeeeeeee
                eeeeeeee22e22222222222222222ee2222eeee2efffffffeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeeffffffffe2eeee2222ee22222222222222222e22eeeeeeee
                eeeeeeee2222222222222222222ee22222ee22eeffffffeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeeffffffffee22ee22222ee2222222222222222222eeeeeeee
                eeeeeeee2e2222222222222222eee22222ee22efffffffeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeefffffffffe22ee22222eee2222222222222222e2eeeeeeee
                eeeeeee22e2222222222222222ee222222e22eefffffffeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeefffffffffee22e222222ee2222222222222222e22eeeeeee
                eeeeeee22e222222222222222ee222222ee22effffffffeeeeeeeeeeeeeeeeee2eee22ee22222222222222222222e222eeee2eeeeeeeeeeeefffffffffe22ee222222ee222222222222222e22eeeeeee
                eeeeee22e2222222222222222ee222222e22eeffffffffeeeeeeeeeeeeeeeeee2eee22ee22222222222222222222e2222eee2eeeeeeeeeeeefffffffffee22e222222ee2222222222222222e22eeeeee
                eeeeee22e222222222222222ee222222ee2eeeffffffffeeeeeeeeeeeeeeeeee2ee222e222222222222222222222e2222eee2eeeeeeeeeeeefffffffffe3e2ee222222ee222222222222222e22eeeeee
                eeeee22ee222222222222222ee22222ee22eefffffffffeeeeeeeeeeeeeeeeee2ee222e2222222222222222222222e222eee2eeeeeeeeeeeeffffffffffe322ee22222ee222222222222222ee22eeeee
                eeeee22e222222222222222ee222222ee2eeeffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e222eee2eeeeeeeeeeeeffffffffffe3e2ee222222ee222222222222222e22eeeee
                eeee22ee222222222222222e222222ee22eefffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e222eee22eeeeeeeeeeeeffffffffffe322ee222222e222222222222222ee22eeee
                eeee22ee22e22222222222ee22222ee22eeffffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e222eeee2eeeeeeeeeeeefffffffffff3322ee22222ee22222222222e22ee22eeee
                eeee2ee222222222222222e222222ee32eeffffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeefffffffffffe332ee222222e222222222222222ee2eeee
                eee22ee22e22222222222e222222ee32eeffffffeffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeeffffffffffff3322ee222222e22222222222e22ee22eee
                eee2ee222e22222222222e22222ee23eeeffffffeffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeeffffffffffffe3322ee22222e22222222222e222ee2eee
                ee22ee22e22222222222e222222ee32eefffffffefffeeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeeeffffffffffffe332ee222222e22222222222e22ee22ee
                ee2eee2ee2222222222e222222ee33eeefffffffefffeefeeeeeeeeeeeeeee222ee22ee2222222222222222222222e2222eee22eeeeeeeeeeeeffffffffffffe3322ee222222e2222222222ee2eee2ee
                eeeee22ee2222222222e22222ee33eeeffffffffffffeefeeeeeeeeeeeeeee22eee22ee2222222222222222222222e2222eee22eeeeeeeeeeeefffffffffffffe3322ee22222e2222222222ee22eeeee
                eeeee2ee2222222222222222eee33eeffffffffeffffeefeeeeeeeeeeeeeee22eee22ee2222222222222222222222e2222eee22eeeeeeeeeeeefeffffffffffffe332eee2222222222222222ee2eeeee
                eeee22ee2222222222222222ee33eeeffffffffeffffeefeeeeeeeeeeeeeee22ee222ee2222222222222222222222e2222eee22eeeeeeeeeeeefeffffefffffffe3332ee2222222222222222ee22eeee
                eeee2ee2222222222222222ee33eeefffffffffeffffeefeeeeeeeeeeeeeee22ee222e22222222222222222222222e2222eee22eeeeeeeeeeeeeeffffeffffffffe3322ee2222222222222222ee2eeee
                eeee2ee222222222222222ee333eeffffffffffefffeeeeeeeeeeeeeeeeeee22ee222e22222222222222222222222e2222eee22eeeeeeeeeeeeeeefffefffffffffe3322ee222222222222222ee2eeee
                eee2ee2222222222222222ee33eeeffffffffffefffeeeeeeeeeeeeeeeeeee22ee222e22222222222222222222222e22222ee22eeeeeeeeeeeeeeefffefffffffffee332ee2222222222222222ee2eee
                eee2ee222222222222222ee33eeefffffffffffefffeefeeeeeeeeeeeeeeee22ee222e22222222222222222222222ee2222eee2eeeeeeeeeeeeeeefffeffffffffffe3332ee222222222222222ee2eee
                ee2ee2222222222222222e33eeefffffffffffeefffeefeeeeeeeeeeeeeee222ee222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeffffeffffffffffe3322e2322222222222222ee2ee
                ee2ee222222222222232e333eeffffffffffffeefffeefeeeeeeeeeeeeeee22eee222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffefffffffffffe3322e322222222222222ee2ee
                e2ee2222222222222322e33eeeffffffffffffeefffeefeeeeeeeeeeeeeee22ee2222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffefffffffffffee332e2322222222222222ee2e
                e2ee222222222222332e33eeefffffffffffffeefffeefeeeeeeeeeeeeeee22ee2222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffeffffffffffffe3322e322222222222222ee2e
                eee222222222222332e33eeeffffffffffffffeeffeeeeeeeeeeeeeeeeeee22ee2222222222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffefffffffffffffe3322e322222222222222eee
                eee222222222222322332eefffffffffffffffefffeefeeeeeeeeeeeeeeee22ee2222222222222222222222222222ee2222eee22eeeeeeeeeeeeeeeeffeefffffffffffffe3322322222222222222eee
                ee222222222222332333eeeffffffffffffffeefffeefeeeeeeeeeeeeeee222ee22222222222222222222222222222e2222eee22eeeeeeeeeeeeeeeeffeefffffffffffffee3223322222222222222ee
                ee22222222222332233eeefffffffffffffffeefffeefeeeeeeeeee2eeee222ee22222222222222222222222222222e2222eee22eeeeeeeeeeeeeeeeffeeffffffffffffffee322322222222222222ee
                e22222222222332233eeeffffffffffffffffeefffeefeeeeeeeeee2eeee22eee22222222222222222222222222222e2222eee22eeeeeeeeeeeeeeeefffefffffffffffffffe3323322222222222222e
                e22222222222332332eefffffffffffffffffeefffeefeeeeeeeeeeeeeee22eee22222222222222222222222222222e2222eeee2eeeeeeeeeeeeeeeefffeefffffffffffffffe322322222222222222e
                22222e22222332232eeefffffffffffffffffeefffeefeeeeeeeee2eeeee22ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeeffeefffffffffffffffeee23322222222e22222
                22222e2222332232eeeffffffffffffffffffeeffeefeeeeeeeeee2eeeee22ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeeffeeffffffffffffffffeee2322222222e22222
                222222222332222eeeffffffffffffffffffeefffeefeeeeeeeeee2eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeeffeefffffffffffffffffeee332222222222222
                2222e222233222eeefffffffffffffffffffeefffeefeeeeeeeeee2eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeefffeffffffffffffffffffeee322222222e2222
                2222e222332222eeefffffffffffffffffffeefffeefeeeeeeeeee2eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeefffeefffffffffffffffffeee332222222e2222
                222e222332222eeeffffffffffffffffffffeefffeefeeeeeeeee22eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeefffeeffffffffffffffffffeee322222222e222
                222e22232e22eeefffffffffffffffffffffeefffeefeeeeeeeee2eeeee22eee222222222222222222222222222222222222eee22eeeeeeeeeeeeeeeeeffeefffffffffffffffffffee332e22222e222
                222e22222e2eeeffffffffffffffffffffffeefffefeeeeeeeeee2eeeee22ee2222222222222222222222222222222222222eee22eeeeeeeeeeeeeeeeeffeeffffffffffffffffffffee32e22222e222
                22ee2222e2eeeffffffffffffffffffffffeeffffefeeeeeeeeee2eeee222ee2222222222222222222222222222222222222eee22eeeeeeeeeeeeeeeeefffefffffffffffffffffffffee32e2222ee22
                22e22222e2eeeffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222222222222222222222222222222222222eee222eeeeeeeeeeeeeeeefffeeffffffffffffffffffffee32e22222e22
                22e2222eeeeefffffffffffffffffffffffeefffeefeeeeeeeee22eeee222ee2222222222222222222222222222222222222eee222eeeeeeeeeeeeeeeefffeefffffffffffffffffffffeeeee2222e22
                2ee2222eeeeffffffffffffffffffffffffeefffeefeeeeeeeee22eeee222ee2222222222222222222222222222222222222eeee22e2eeeeeeeeeeeeeefffeeffffffffffffffffffffffeeee2222ee2
                2e2222eeeefffffffffffffffffffffffffeefffefeeeeeeeeee2eeeee222ee2222222222222222222222222222222222222eeee22eeeeeeeeeeeeeeeeeffeefffffffffffffffffffffffeeee2222e2
                2e222eee2effffffffffffffffffffffffeeefffefeeeeeeeeee2eeee222eee222e222222222222222222222222222222222eeee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe2eee222e2
                2e222eee2effffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222e222222222222222222222222222222222eeee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe2eee222e2
                ee22eeee2effffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222e2222222222222222222222222222e22222eee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe2eeee22ee
                ee22eee22effffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222e2222222222222222222222222222e22222eee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe22eee22ee
                eeeeee22eeffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee222ee2222e2222222222222222222222222222e22222eee22ee2eeeeeeeeeeeeeeeffeeffffffffffffffffffffffee22eeeeee
                eeeee222efffffffffffffffffffffffffeeffffeeeeeeeeeee2eeeee222ee2222e2222222222222222222222222222e22222eee222e22eeeeeeeeeeeeeefffeeffffffffffffffffffffffe222eeeee
                2222222eeffffffffffffffffffffffffeeefffeeeeeeeeeee22eeee2222ee2222e2222222222222222222222222222e22222eee222e22eeeeeeeeeeeeeefffeeffffffffffffffffffffffee2222222
                222222eefffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee2222e22222e2222222222222222222222222222e22222eee222ee2eeeeeeeeeeeeeefffeefffffffffffffffffffffffee222222
                22222eeefffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee222ee22222e2222222222222222222222222222e22222eeee22ee2eeeeeeeeeeeeeeeffeefffffffffffffffffffffffeee22222
                222eeeeefffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee222ee22222e2222222222222222222222222222e22222eeee22ee2eeeeeeeeeeeeeeefffeeffffffffffffffffffffffeeeee222
                eeee2eeeeffffffffffffffffffffffffeeffffeeeeeeeeee22eeeee222ee2222ee2222222222222222222222222222e22222eeee22ee2eeeeeeeeeeeeeeefffeefffffffffffffffffffffeeee2eeee
                222e2ee2effffffffffffffffffffffffeeffffeeeeeeeeee22eeee2222ee2222ee2222222222222222222222222222e22222eeee22ee22eeeeeeeeeeeeeefffeefffffffffffffffffffffe2ee2e222
                222e2ee2efffffffffffffffffffffffeeeffffeeeeeeeeee22eeee2222ee2222ee2222222222222222222222222222e22222eeee22ee22eeeeeeeeeeeeeefffeefffffffffffffffffffffe2ee2e222
                222e2ee2efffffffffffffffffffffffeefffffeeeeeeeeee22eeee2222ee2222ee2222222222222222222222222222e22222eeee222e22eeeeeeeeeeeeeeffffeeffffffffffffffffffffe2ee2e222
                222e2ee2efffffffffffffffffffffffeefffffeeeeeeeee22eeeee2222ee2222ee2222222222222222222222222222e22222eeee222e22eeeeeeeeeeeeefffffeeffffffffffffffffffffe2ee2e222
                222e2ee22effffffffffffffffffffffeefffffeeeeeeeee22eeee22222e22222ee2222222222222222222222222222ee2222eeee222ee2eeeeeeeeeeeeeeffffeefffffffffffffffffffe22ee2e222
                222e2ee22effffffffffffffffffffffeeffffeeeeeeeeee22eeee22222e22222ee2222222222222222222222222222ee2222eeeee22ee2eeeeeeeeeeeeeefffffefffffffffffffffffffe22ee2e222
                222e2eee2effffffffffffffffffffffeeffffeeeeeeeeee22eeee22222e22222ee2222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeefffffefffffffffffffffffffe2eee2e222
                222e22ee2eefffffffffffffffffffffefffffeeeeeeeee222eee22222ee22222ee2222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeeffffffffffffffffffffffffee2ee22e222
                222e22ee22efffffffffffffffffffffefffffeeeeeeeee22eeee22222ee22222ee2222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeeefffffffffffffffffffffffe22ee22e222
                222e22ee22efffffffffffffffffffffefffffeeeeeeeee22eeee22222ee22222e22222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeeefffffffffffffffffffffffe22ee22e222
                222e22ee22efffffffffffffffffffffffffffeeeeeeeee22eee222222ee22222e22222222222222222222222222222ee22222eeee222e22eeeeeeeeeeeeeefffffffffffffffffffffffe22ee22e222
                222e22ee222effffffffffffffffffffffffffeeeeeeeee22eee222222ee22222e22222222222222222222222222222ee22222eeee222ee2eeeeeeeeeeeeeeefffffffffffffffffffffe222ee22e222
                222e22eee22effffffffffffffffffffffffffeeeeeeee22eeee222222e222222e22222222222222222222222222222ee22222eeee222ee22eeeeeeeeeeeeeefffffffffffffffffffffe22eee22e222
                222e222ee22effffffffffffffffffffffffffeeeeeeee22eeee222222e222222e22222222222222222222222222222ee22222eeee222ee22eeeeeeeeeeeefffffffffffffffffffffffe22ee222e222
                222e222ee22eeffffffffffffffffffffffffeeeeeeeee22eee2222222e222222ee22222eeee222eeee222eeee22222ee222222eeee22222eeeeeeeeeeeeeffffffffffffffffffffffee22ee222e222
                222e222ee222efffffffbffffffffbbbfffffbbeeeeebeeeeeeee222eebeeeeeeddeeeeeeedeeeeeeeeeeeedeeeeeeeddeeeeeebeee22eeeeeeeebeeeeebbfffffbbbffffffffbfffffe222ee222e222
                222e222ee222ebbfffbbbbbfffffbbbbbbbbbbbbbbbbbbeebbbbeeeeedddeeeedddddeeeddddeeeeddeeeeddddeeedddddeeeedbbbbeeebbbbeebbbbbbbbbbbbbbbbbbfffffbbbbbfffe222ee222e222
                222ee22ee222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee222ee22ee222
                222ee22ee2222ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe2222ee22ee222
                2222e222e2222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee2222e222e2222
                2222e222ee2222ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe2222ee222e2222
                2222e222ee2222ebbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbe2222ee222e2222
                2222e222ee2222eebbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbee2222ee222e2222
                2222e2222e22e22ebbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbe22e22e2222e2222
                222222222e22e22eebbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbee22e22e222222222
                222222222e22e222ebbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbe222e22e222222222
                2222222222e22e22eebbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbee22e22e2222222222
                222222e222e22e222ebbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbe222e22e222e222222
                222222e222222e222eebbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbee222e222222e222222
                222222e2222222e222ebbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbe222e2222222e222222
                222222ee222222e222eebbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbee222e222222ee222222
                2222222e222222e2222ebbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbe2222e222222e2222222
                22222e2e2222222e222eebbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbee222e2222222e2e22222
                22222e2e2222222e222eebbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbee222e2222222e2e22222
                22222e2e22222222e22ebbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbe22e22222222e2e22222
                22222e2ee2222222e22ebbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbe22e2222222ee2e22222
                22222e2ee2222222eeeebbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbeeee2222222ee2e22222
                22222e22e2222222eeebbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbeee2222222e22e22222
                22222ee2e2222222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee2222222e2ee22222
                22222ee2e222222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee222222e2ee22222
                222222e2ee22222ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe22222ee2e222222
                222222e22e2222eebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbee2222e22e222222
                222222e22e22eeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeee22e22e222222
                222222e2eeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeee2e222222
                222222e2ebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbe2e222222
                222222eeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeee222222
                `)
            evil_toastie = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 7 7 7 . . . . . . . 
                . . . . . 7 f 7 f 7 . . . . . . 
                . . . . . 7 f 7 f 7 . . . . . . 
                . . . . . 7 7 7 7 7 . . . . . . 
                . . . . 7 7 7 7 7 7 7 . . . . . 
                . . . . 7 7 7 7 7 7 7 . . . . . 
                . . . 7 7 7 7 7 7 7 7 7 . . . . 
                . . 7 7 7 7 7 7 7 7 7 7 7 . . . 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                `, SpriteKind.Enemy)
            Butter_Snake = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 7 7 7 . . . . . . . 
                . . . . . 7 f 7 f 7 . . . . . . 
                . . . . . 7 f 7 f 7 . . . . . . 
                . . . . . 7 7 7 7 7 . . . . . . 
                . . . . 7 7 7 7 7 7 7 . . . . . 
                . . . . 7 7 7 7 7 7 7 . . . . . 
                . . . 7 7 7 7 7 7 7 7 7 . . . . 
                . . 7 7 7 7 7 7 7 7 7 7 7 . . . 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                `, SpriteKind.Enemy)
            Rye_Guy = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 7 7 7 . . . . . . . 
                . . . . . 7 f 7 f 7 . . . . . . 
                . . . . . 7 f 7 f 7 . . . . . . 
                . . . . . 7 7 7 7 7 . . . . . . 
                . . . . 7 7 7 7 7 7 7 . . . . . 
                . . . . 7 7 7 7 7 7 7 . . . . . 
                . . . 7 7 7 7 7 7 7 7 7 . . . . 
                . . 7 7 7 7 7 7 7 7 7 7 7 . . . 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                `, SpriteKind.Enemy)
            The_Knight = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 7 7 7 . . . . . . . 
                . . . . . 7 f 7 f 7 . . . . . . 
                . . . . . 7 f 7 f 7 . . . . . . 
                . . . . . 7 7 7 7 7 . . . . . . 
                . . . . 7 7 7 7 7 7 7 . . . . . 
                . . . . 7 7 7 7 7 7 7 . . . . . 
                . . . 7 7 7 7 7 7 7 7 7 . . . . 
                . . 7 7 7 7 7 7 7 7 7 7 7 . . . 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                `, SpriteKind.Enemy)
            BreadRoll = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . 7 7 7 . . . . . . . 
                . . . . . 7 f 7 f 7 . . . . . . 
                . . . . . 7 f 7 f 7 . . . . . . 
                . . . . . 7 7 7 7 7 . . . . . . 
                . . . . 7 7 7 7 7 7 7 . . . . . 
                . . . . 7 7 7 7 7 7 7 . . . . . 
                . . . 7 7 7 7 7 7 7 7 7 . . . . 
                . . 7 7 7 7 7 7 7 7 7 7 7 . . . 
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
                `, SpriteKind.Enemy)
            Butter_Snake.setPosition(randint(-50, 50), randint(-50, 50))
            Butter_Snake.setVelocity(5, 5)
            evil_toastie.setPosition(randint(-100, 100), randint(-100, 100))
            BreadRoll.setPosition(randint(-100, 100), randint(-100, 100))
            BreadRoll.setVelocity(90, 80)
            mold = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 7 7 7 7 . . . . . . . 
                . . . . 7 7 7 7 7 7 . . . . . . 
                . . . . . 7 7 7 7 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.yuck)
            mold = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 7 7 7 7 . . . . . . . 
                . . . . 7 7 7 7 7 7 . . . . . . 
                . . . . . 7 7 7 7 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, boss, 50, 0)
        }
    }
})
game.onUpdateInterval(100, function () {
    if (info.player3.life() <= 2) {
        boss.setVelocity(40, 50)
        animation.runImageAnimation(
        boss,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . e . . . . . . . . . . 
            . . . . e 7 e . . . . . . . . . 
            . . . . e 7 7 e e . . . . . . . 
            . . . . e 7 7 7 7 e e . . . . . 
            . . . . e 7 7 7 7 7 7 e . . . . 
            . . . 7 7 f 7 f 7 f 7 f . . . . 
            . . . 7 e 7 f 7 7 7 f 7 7 . . . 
            . . . 7 e 7 7 7 7 7 7 e 7 . . . 
            . . . . e 7 f 7 f 7 7 e 7 . . . 
            . . . . e f 7 f 7 f 7 e 7 . . . 
            . . . . e 7 7 7 7 7 7 e 7 7 . . 
            . . . . 7 e e e e e e 7 7 7 7 7 
            7 7 7 7 7 f f 7 7 7 f f 7 7 7 7 
            `],
        100,
        true
        )
    }
})
