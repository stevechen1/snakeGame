class ScorePanel  {
    score = 0;
    level = 1;
    scoreELe: HTMLElement;
    levelEle: HTMLElement;
    maxLevel:number;
    upScore: number;
    constructor(level:number = 10,up:number = 10){
        this.scoreELe = document.querySelector('#score')!;
        this.levelEle = document.querySelector('#level')!;
        this.maxLevel = level
        this.upScore = up
    }
    addScore () {
        this.scoreELe.innerText = ++this.score + ''
        if(this.score % this.upScore  === 0){
           this.addLevel()
        }
    }
    addLevel () {
       console.log('eat one');
       if(this.level < this.maxLevel){
        this.levelEle.innerText = ++this.level + ''
       }
     
    }
}
export default ScorePanel