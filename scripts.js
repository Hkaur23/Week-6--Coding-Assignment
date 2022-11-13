
class Deck {

/**
 * 
 * @param {* Hand1 array integer} hand1 
 * @param {* Hand 2 array integer} hand2 
 * @param {* player 1 as a string} player1 
 * @param {* player 2 as a string} player2 
 */    
playGame(hand1, hand2, player1, player2) {
        var win1=0,win2=0,tie=0;
        for (var i = 0; i < 26; i++) {
            if(hand1[i]>hand2[i])
                win1+=1;
            else if(hand1[i]<hand2[i])
                win2+=1;
            else
                tie+=1;
        }
        console.log(player1+" winning hands:"+win1);
        console.log(player2+" winning hands:"+win2);
        console.log("Number of ties:"+tie);
        if(win1>win2)
            console.log(player1+" wins");
        else if(win1<win2)
            console.log(player2+" wins");
        else{
            var x = Math.floor(Math.random()*13)+2;
            var y = Math.floor(Math.random()*13)+2;
            if(x>y)
                console.log(player1+" wins");
            else if(x<y)
                console.log(player2+" wins");
            else
                console.log("It's a tie");
        }
}   
}

class Card {

    /**
     *  method for adding hands for first deck
     * @returns hand 1
     */
addHand1Card() {
    var hand1 = [];
    for (var i = 0; i < 26; i++) {
        var x = Math.floor(Math.random()*13)+2;
        hand1.push()
        hand1.push(x);
    }
    return hand1;
}

/**
 * method for adding hands for second deck
 * @returns hand 2 cards
 */
addHand2Card() {
    var hand2 = [];
    for (var i = 0; i < 26; i++) {
        var y=Math.floor(Math.random()*13)+2;
        hand2.push(y);
    }
    return hand2;
}
       
}

module.exports = Card // 👈 Export class

/**
 * Class Player
 */
class Player {

    /**
     * Method for adding first player
     * @returns player 1 details
     */
    addPlayer1(player1) {
        return player1;
    }

    /**
     * Method for adding second player
     * @returns player 2 details
     */
    addPlayer2(player2) {
        return player2;
    }
    
}



//Instantiating Player class
var player = new Player();
var player1 = player.addPlayer1("John");
var player2 = player.addPlayer2("Derek");

//Instantiating Card class
var hands = new Card();
var hand1 = hands.addHand1Card();
var hand2 = hands.addHand2Card();

//Instantiating Deck class
var playGame = new Deck();
playGame.playGame(hand1,hand2, player1, player2);
