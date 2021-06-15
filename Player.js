class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.xPosition1 = 0;
    this.xPosition2 = 0;
    this.name = null
    this.rank = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
     // xPosition1:this.xPosition1,
      //xPosition2:this.xPosition2,           
    });
  }

  updateXPos1(){
    var player1 = "players/player1";
    database.ref(player1).set({
      xPosition1:this.xPosition1,
      xPosition2:this.xPosition2
    })
    console.log(this.xPosition1)
    console.log(this.xPosition1)
  }
  updateXPos2(){
    var player2 = "players/player2";
    database.ref(player2).set({
      xPosition1:this.xPosition1,
      xPosition2:this.xPosition2
    })
    console.log(this.xPosition1)
    console.log(this.xPosition1)
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  getCarsAtEnd() {
    database.ref('CarsAtEnd').on("value",(data)=>{
      this.rank = data.val();
    })
  }

  static updateCarsAtEnd(rank) {
    database.ref('/').update({
      CarsAtEnd:rank
    })
  }
}
