class Statistics {
    constructor() {
        this.gameResults = [];
    }

    addGameToStatistics(win, bid){
        let gameResult = {
            win: win,
            bid: bid,
        }
        this.gameResults.push(gameResult)
        console.log("Stats Added")
    }

    showGameStatistics() {
        let games = this.gameResults.length;
        let wins = this.gameResults.filter(result => result.win).length; // filter return array when callback true
        let losses = this.gameResults.filter(result => !result.win).length;
        console.log(wins, losses);
        return [games, wins, losses];
    }

}

// const stats = new Statistics()