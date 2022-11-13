var expect = require("chai").expect;
const Card = require('../scripts.js')

describe("Test card class", ()=> {
   
    it("Should have length of 26 for both the hands", () => {
        let card = new Card();
        var hand1cards = card.addHand1Card();
        var hand2cards = card.addHand2Card();

        expect(hand1cards).to.have.length(26);
        expect(hand2cards).to.have.length(26);

    })

    it("Card Hands Should not be null", () => {
        let card = new Card()
        var hand1cards = card.addHand1Card();
        var hand2cards = card.addHand2Card();

        
        expect(hand1cards).to.not.be.null;
        expect(hand2cards).to.not.be.null;
    })

    
})
