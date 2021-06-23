class SceneMain extends Phaser.Scene {

    constructor() {
        super('SceneMain');
    }

    preload() {
        // This is where we load things into memory
        this.load.image("banana", "images/banana.png");
        this.centerX = game.config.width / 2;
        this.centerY = game.config.height / 2;
        this.score = 0;
        this.alphaFactor = 0.05;
        this.steplength = 15;
        this.text = this.add.text(this.centerX ,40, "Hello, World!", {
            fontFamily: "sans-serif",
            fontSize: 60,
            color: "blue"
        });
        this.repaintScore();
    }

    spawnBanana(x) {
        this.banana = this.add.image(x, this.centerY, "banana");
        this.banana.setInteractive();
        this.banana.on("pointerdown", () => {
            this.banana.destroy();
            this.spawnBanana(Phaser.Math.FloatBetween(0,1) * game.config.width);
            this.score++;
            this.scoreText.destroy();
            this.repaintScore();
        });
    }

    repaintScore() {
        this.text.setOrigin(0.5, 0.5);
        this.scoreText = this.add.text(0,0, this.score, {
            fontFamily: "sans-serif",
            fontSize: 40,
            color: "blue"
        });
    }

    create() {
        // This is where we create and manipulate objects
        this.spawnBanana(this.centerX);
    }

    update() {
        // This is the method that gets looped continuously


        if(this.banana.x <= 0) {
            //banana on the left
            this.steplength *= -1;
            this.banana.resetFlip();
            this.banana.alpha = 0.2;
        } else if(this.banana.x >= game.config.width) {
            //banana on the right
            this.steplength *= -1;
            this.banana.flipX = true;
            this.banana.alpha = 0.2;
        }

        if(this.banana.alpha !== 1) {
            this.banana.alpha += this.alphaFactor;
        }
        this.banana.x += this.steplength;
    }
}