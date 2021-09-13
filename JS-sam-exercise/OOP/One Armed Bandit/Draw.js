class Draw {
    constructor() {
        this.opitions = ['red', 'green', 'blue']
        let _result = this.drawResult();
        this.getDrawResult = () => _result;
    }

    drawResult() {
        let colors = [];
        for (let i = 0; i < this.opitions.length; i++){
            const index = Math.floor(Math.random() * this.opitions.length)
            const color = this.opitions[index];
            colors.push(color);
            
        }
        return colors;
    }
}

