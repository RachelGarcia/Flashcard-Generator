
//Create a BasicCard constructor. It should accept front and back arguments.
function BasicCard = function(front, back) {
    this.front = front;
    this.back = back;
}// end basicCard

//Create a ClozeCard constructor. It should accept text and cloze arguments.

function ClozeCard = function(text, cloze) {

    this.text = text; 
    this.cloze = cloze; 
    //ClozeCard should have a property or method that contains or returns only the partial text.
    //ClozeCard should have a property or method that contains or returns only the full text.
    //ClozeCard should throw or log an error when the cloze deletion does not appear in the input text.
}//end clozecard

BasicCard.protptype.printInfo = function() {
    console.log("protoype is working");
};


var flashcard = new BasicCard ("", "");
        // "Question"
        console.log(flashcard.front);
        // "answer"
        console.log(flashcard.back);

flashcard.printInfo();

