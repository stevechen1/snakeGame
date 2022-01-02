import Food from './Food'
import ScorePanel from './ScorePanel'
import Snake from  './Snake'

class GameControl {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    direction: string = 'ArrowRight'
    isAlive: boolean = true
    constructor () {
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel()
        this.init()
    }
    init () {
        document.addEventListener('keydown',this.keydownHandler.bind(this))
        
        this.run()
    }
    keydownHandler(event: KeyboardEvent){
        console.log(event.key);
        
        this.direction = event.key
    }
    run () {
        let x = this.snake.X
        let y = this.snake.Y
        switch (this.direction) {
            case 'ArrowUp' :
                case 'UP':
                    case 'w':

                y -= 10
                break;
            case 'ArrowDown':
                case 'Down':
                    case 's':
                y += 10
                break;
            case 'ArrowLeft':
                case 'Left':
                    case 'a':
                x -= 10
                break;
            case 'ArrowRight':
                case 'Right':
                    case 'd':
                x += 10
                break;
        }
        this.checkEat(x,y)
        try {
            // console.log('start',x,y);
            this.snake.X = x 
            this.snake.Y = y
        } catch (error) {
            console.log(error);
            
            // alert('GameOver')
            this.isAlive = false
        }
        this.isAlive && setTimeout(this.run.bind(this), 200-(this.scorePanel.level-1)*30);
    }
    checkEat (X: number,Y: number) {
        if(X === this.food.X && Y === this.food.Y) {
            this.food.change()
            this.scorePanel.addScore()
            this.snake.addBody()
        }
    }

}
export default GameControl

// const food = new Food()
// food.change()
// console.log(food.X,food.Y);

// const score = new ScorePanel()
// console.log(score.addScore());
// for (let i = 0; i < 50; i++) {
//     score.addScore()
// }

// const snake = new Snake()
// snake.X = 200
// console.log(snake.X + '@000');
