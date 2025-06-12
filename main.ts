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
sprites.onOverlap(SpriteKind.shield, SpriteKind.boss, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.shield)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
    info.player3.changeLifeBy(-1)
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
    assets.animation`phew`,
    500,
    true
    )
    game.showLongText("You Have Picked Up The Cinnamon Bun, You Can Shoot Big Rolls with V But Toasters No Longer Work And You Are Weaker", DialogLayout.Bottom)
})
info.player2.onScore(20, function () {
    game.showLongText("Your Unlocked The Bagel Shield, It Will Tank One Hit Before Breaking", DialogLayout.Bottom)
    Bagel_Shield = sprites.create(assets.image`bagel`, SpriteKind.shield)
    Bagel_Shield.follow(Toastie)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Roll, function (sprite, otherSprite) {
    sprites.destroy(sprite)
})
browserEvents.A.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (info.score() >= 30) {
        animation.stopAnimation(animation.AnimationTypes.All, Toastie)
        info.setScore(18)
        animation.runImageAnimation(
        Toastie,
        assets.animation`i thought i was done bru`,
        500,
        true
        )
        animation.runImageAnimation(
        Toasterio,
        assets.animation`rigged`,
        500,
        true
        )
    }
})
sprites.onOverlap(SpriteKind.boss, SpriteKind.axe, function (sprite, otherSprite) {
    sprites.create(assets.image`toastie`, SpriteKind.Player).setPosition(150, 76)
    info.player3.changeLifeBy(-1)
    animation.runImageAnimation(
    Toastie,
    assets.animation`pew`,
    500,
    true
    )
    controller.moveSprite(Toastie)
    sprites.destroyAllSpritesOfKind(SpriteKind.Swoosh)
})
info.player2.onScore(35, function () {
    scene.setBackgroundImage(assets.image`lgiths gun action`)
    info.player3.setLife(15)
    boss = sprites.create(assets.image`king shreak`, SpriteKind.boss)
    game.showLongText("The Mold Has Been Summoned", DialogLayout.Bottom)
    boss.setVelocity(60, 70)
    boss.setBounceOnWall(true)
    boss.setStayInScreen(true)
})
browserEvents.Space.onEvent(browserEvents.KeyEvent.Pressed, function () {
    Toastie = sprites.create(assets.image`w`, SpriteKind.Swoosh)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    controller.moveSprite(Toastie)
    Toastie.setPosition(131, 95)
    if (info.player3.score() > 0) {
        animation.runImageAnimation(
        Toastie,
        assets.animation`lighter`,
        100,
        true
        )
    } else {
        animation.runImageAnimation(
        Toastie,
        assets.animation`swif`,
        100,
        true
        )
    }
    if (info.score() == 30) {
        animation.runImageAnimation(
        Toastie,
        assets.animation`burnt siwg`,
        100,
        true
        )
    }
    Toastie.setStayInScreen(true)
    music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Tool, function (sprite, otherSprite) {
    info.setScore(10)
    animation.runImageAnimation(
    Toastie,
    assets.animation`wow`,
    500,
    true
    )
    sprites.destroyAllSpritesOfKind(SpriteKind.Roll)
    sprites.destroyAllSpritesOfKind(SpriteKind.Tool)
    game.showLongText("You Got The Grain Gun, Click X to Use It", DialogLayout.Bottom)
    sprites.create(assets.image`butter`, SpriteKind.Food).setPosition(32, 88)
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
        burnt_grain = sprites.createProjectileFromSprite(assets.image`burnt`, Toastie, -100, 0)
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.player2.changeScoreBy(1)
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Swoosh, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroyAllSpritesOfKind(SpriteKind.Swoosh)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    Toastie = sprites.create(assets.image`wq`, SpriteKind.Player)
    Toastie.setPosition(150, 76)
    controller.moveSprite(Toastie)
    if (info.player3.score() > 0) {
        animation.runImageAnimation(
        Toastie,
        assets.animation`chse`,
        100,
        true
        )
    } else {
        animation.runImageAnimation(
        Toastie,
        assets.animation`phew pw`,
        500,
        true
        )
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Toaster, function (sprite3, otherSprite3) {
    Toasterio.setPosition(1, 0)
    game.showLongText("Your Now Burnt! Bullets Are Faster But Your Fragile. Click A to Become Normal", DialogLayout.Bottom)
    info.setScore(30)
    animation.runImageAnimation(
    Toastie,
    assets.animation`bur`,
    500,
    true
    )
    sprites.destroyAllSpritesOfKind(SpriteKind.Toaster)
    Toasterio = sprites.create(assets.image`Toasterio`, SpriteKind.Toaster)
    Toasterio.setPosition(22, 56)
    animation.runImageAnimation(
    Toasterio,
    assets.animation`boomp lsdt`,
    500,
    true
    )
    info.setLife(2)
    music.play(music.createSong(assets.song`thats right i remeber him`), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.axe, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.axe)
    game.showLongText("You Got The Jam Axe, Use It To Cut Enemies, After Its Use You Will Return To Jam Spawn", DialogLayout.Bottom)
})
info.player3.onLifeZero(function () {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.shield, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    animation.runImageAnimation(
    Bagel_Shield,
    assets.animation`useless`,
    500,
    true
    )
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
    sprites.destroy(otherSprite)
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
        assets.animation`creeam`,
        200,
        true
        )
    }
    if (19 > info.score()) {
        Toastie.setVelocity(100, -10)
        animation.runImageAnimation(
        Toastie,
        assets.animation`cheese`,
        200,
        true
        )
    }
    if (info.score() >= 30) {
        Toastie.setVelocity(100, -10)
        animation.runImageAnimation(
        Toastie,
        assets.animation`chess`,
        200,
        true
        )
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(sprite)
})
browserEvents.C.onEvent(browserEvents.KeyEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, Toastie)
    Toastie.setVelocity(0, 0)
    if (19 > info.score()) {
        animation.runImageAnimation(
        Toastie,
        assets.animation`chess is hard`,
        500,
        true
        )
    } else {
        animation.runImageAnimation(
        Toastie,
        assets.animation`nt really when you kow the rules`,
        500,
        true
        )
    }
    if (info.score() >= 30) {
        animation.runImageAnimation(
        Toastie,
        assets.animation`i cant spell`,
        500,
        true
        )
    }
    if (info.player3.score() > 0) {
        animation.runImageAnimation(
        Toastie,
        assets.animation`rip`,
        500,
        true
        )
    }
})
browserEvents.V.onEvent(browserEvents.KeyEvent.Pressed, function () {
    if (info.player3.score() >= 10) {
        bunz = sprites.create(assets.image`roll`, SpriteKind.Roll)
        sprites.destroy(bunz)
        bunz = sprites.createProjectileFromSprite(assets.image`roll`, Toastie, -40, 0)
        sprites.destroyAllSpritesOfKind(SpriteKind.Swoosh)
        controller.moveSprite(Toastie)
        animation.runImageAnimation(
        Toastie,
        assets.animation`sheesh`,
        100,
        true
        )
    }
})
browserEvents.Space.onEvent(browserEvents.KeyEvent.Released, function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Swoosh)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    Toastie = sprites.create(assets.image`toasie`, SpriteKind.Player)
    Toastie.setPosition(131, 95)
    controller.moveSprite(Toastie)
    if (info.player3.score() > 0) {
        animation.runImageAnimation(
        Toastie,
        assets.animation`cup o wauh`,
        500,
        true
        )
    } else {
        animation.runImageAnimation(
        Toastie,
        assets.animation`ws`,
        500,
        true
        )
    }
    if (info.score() == 30) {
        animation.runImageAnimation(
        Toastie,
        assets.animation`coolio`,
        500,
        true
        )
    }
    Toastie.setStayInScreen(true)
})
sprites.onOverlap(SpriteKind.boss, SpriteKind.Roll, function (sprite, otherSprite) {
    info.player3.changeLifeBy(-1)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.boss, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.player3.changeLifeBy(-1)
    sprites.destroy(otherSprite)
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
let mold: Sprite = null
let Rye_Guy: Sprite = null
let BreadRoll: Sprite = null
let The_Knight: Sprite = null
let evil_toastie: Sprite = null
let Butter_Snake: Sprite = null
let bunz: Sprite = null
let boss: Sprite = null
let Toasterio: Sprite = null
let Bagel_Shield: Sprite = null
let Toastie: Sprite = null
let burnt_grain: Sprite = null
let Pellet_Grain: Sprite = null
scene.setBackgroundImage(assets.image`road`)
info.setLife(3)
info.player2.setLife(3)
info.player2.setScore(0)
sprites.create(assets.image`bun roll`, SpriteKind.Roll).setPosition(14, 30)
Pellet_Grain = sprites.create(assets.image`7 Grains`, SpriteKind.Projectile)
burnt_grain = sprites.create(assets.image`burnt boy`, SpriteKind.Projectile)
Toastie = sprites.create(assets.image`Toastie`, SpriteKind.Player)
controller.moveSprite(Toastie)
animation.runImageAnimation(
Toastie,
assets.animation`bsmsb`,
500,
true
)
info.setScore(5)
sprites.create(assets.image`Grain Gun`, SpriteKind.Tool).setPosition(50, 40)
sprites.create(assets.image`jamaxe`, SpriteKind.axe).setPosition(44, 77)
game.onUpdateInterval(5000, function () {
    Toastie.setStayInScreen(true)
    for (let index = 0; index < 1; index++) {
        if (info.score() > 10) {
            Butter_Snake = sprites.create(assets.image`butter snail`, SpriteKind.Enemy)
            evil_toastie = sprites.create(assets.image`evil oastie`, SpriteKind.Enemy)
            The_Knight = sprites.create(assets.image`hollow knight`, SpriteKind.Enemy)
            BreadRoll = sprites.create(assets.image`dinneroll`, SpriteKind.Enemy)
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
                Toasterio = sprites.create(assets.image`revalis gale is now ready`, SpriteKind.Toaster)
                Toasterio.setPosition(22, 56)
            } else {
                Toasterio = sprites.create(assets.image`boomp`, SpriteKind.Toaster)
                Toasterio.setPosition(22, 56)
            }
        }
        if (info.player2.score() > 10) {
            scene.setBackgroundImage(assets.image`lassi`)
            sprites.destroy(Butter_Snake)
            sprites.destroyAllSpritesOfKind(SpriteKind.Toaster)
            evil_toastie = sprites.create(assets.image`sxcab`, SpriteKind.Enemy)
            Rye_Guy = sprites.create(assets.image`rye guy`, SpriteKind.Enemy)
            BreadRoll = sprites.create(assets.image`dinner roll`, SpriteKind.Enemy)
            if (info.score() < 30) {
                Toasterio = sprites.create(assets.image`close boomp`, SpriteKind.Toaster)
                Toasterio.setPosition(19, 26)
            } else {
                Toasterio = sprites.create(assets.image`more boomp`, SpriteKind.Toaster)
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
            scene.setBackgroundImage(assets.image`stage light`)
            evil_toastie = sprites.create(assets.image`shreak`, SpriteKind.Enemy)
            Butter_Snake = sprites.create(assets.image`shreak 2`, SpriteKind.Enemy)
            Rye_Guy = sprites.create(assets.image`shreak 3`, SpriteKind.Enemy)
            The_Knight = sprites.create(assets.image`shreak 4`, SpriteKind.Enemy)
            BreadRoll = sprites.create(assets.image`shreak 5`, SpriteKind.Enemy)
            Butter_Snake.setPosition(randint(-50, 50), randint(-50, 50))
            Butter_Snake.setVelocity(5, 5)
            evil_toastie.setPosition(randint(-100, 100), randint(-100, 100))
            BreadRoll.setPosition(randint(-100, 100), randint(-100, 100))
            BreadRoll.setVelocity(90, 80)
            mold = sprites.create(assets.image`bel`, SpriteKind.yuck)
            mold = sprites.createProjectileFromSprite(assets.image`ms`, boss, 50, 0)
        }
    }
})
game.onUpdateInterval(100, function () {
    if (info.player3.life() <= 2) {
        boss.setVelocity(40, 50)
        animation.runImageAnimation(
        boss,
        assets.animation`shreak ded`,
        100,
        true
        )
    }
})
