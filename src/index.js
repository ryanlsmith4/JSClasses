import Phaser from 'phaser'
import { print2dArray, gen2DimArray } from './testQ'
// import  sayHello, { sayYo, sayHi } from './utils'
const arr = [1,2,3,4,5]
gen2DimArray(8,9)


var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('logo', 'assets/logo.png');
}

function create ()
{
    var logo = this.add.image(400, 150, 'logo');
    var text = this.add.text(400, 300, 'Hello World');

    this.tweens.add({
        targets: logo,
        y: 450,
        duration: 2000,
        ease: 'Power2',
        yoyo: true,
        loop: -1
    });

}
