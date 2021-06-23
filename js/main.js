var game;

window.onload = function () {
    var config = {
        type: Phaser.AUTO,
        width: 640,
        height: 480,
        parent: 'phaser-game',
        backgroundColor: Phaser.Display.Color.HexStringToColor("#F88379"),
        scene: [SceneMain]
    }
    game = new Phaser.Game(config);
}