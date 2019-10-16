
var ShadedBackground = "rgb(183, 189, 194)";

function cardActivationBasedOnSuit(state, FirstPosition, subSuit) {
	var PositionsArr = [];
    if (FirstPosition == "north") {
		PositionsArr.push("east");
		PositionsArr.push("south");
		PositionsArr.push("west");
    }
    else if (FirstPosition == "east") {
		PositionsArr.push("north");
		PositionsArr.push("south");
		PositionsArr.push("west");
	}
    else if (FirstPosition == "south") {
		PositionsArr.push("north");
		PositionsArr.push("east");
		PositionsArr.push("west");
    }
    else if (FirstPosition == "west") {
		PositionsArr.push("north");
		PositionsArr.push("east");
		PositionsArr.push("south");
    }
    OpenCloseCards(subSuit, PositionsArr);
}

function OpenCloseCards(subSuit, PositionsArr) {
	var DisplayedCards = 0;
    var ShadedCards = 0;
	
	if(isInArray("north", PositionsArr) && document.title == "Player 1") {
		for (var i = 0; i < northArr.length; i++) {
            var subSuitS = northArr[i].substr(2, 1);
            if (subSuitS != subSuit) {
                document.getElementById(northArr[i]).style.pointerEvents = "none";
                document.getElementById(northArr[i]).style.background = ShadedBackground;
            }
            if (!document.getElementById(northArr[i]).classList.contains("fadingCards")) {
                DisplayedCards++;
            }
            if (!document.getElementById(northArr[i]).classList.contains("fadingCards") &&
               document.getElementById(northArr[i]).style.background == ShadedBackground) {
                ShadedCards++;
            }
        }
        if (DisplayedCards == ShadedCards) {
            for (var i = 0; i < northArr.length; i++) {
                document.getElementById(northArr[i]).style.pointerEvents = "auto";
                document.getElementById(northArr[i]).style.background = "white";
            }
        }
		DisplayedCards = 0;
        ShadedCards = 0;
	}
	else if(isInArray("east", PositionsArr) && document.title == "Player 2") {
		for (var i = 0; i < eastArr.length; i++) {
            var subSuitS = eastArr[i].substr(2, 1);
            if (subSuitS != subSuit) {
                document.getElementById(eastArr[i]).style.pointerEvents = "none";
                document.getElementById(eastArr[i]).style.background = ShadedBackground;
            }
            if (!document.getElementById(eastArr[i]).classList.contains("fadingCards")) {
                DisplayedCards++;
            }
            if (!document.getElementById(eastArr[i]).classList.contains("fadingCards") &&
                document.getElementById(eastArr[i]).style.background == ShadedBackground) {
                ShadedCards++;
            }
        }
        if (DisplayedCards == ShadedCards) {
            for (var i = 0; i < eastArr.length; i++) {
                document.getElementById(eastArr[i]).style.pointerEvents = "auto";
                document.getElementById(eastArr[i]).style.background = "white";
            }
        }
		DisplayedCards = 0;
        ShadedCards = 0;
	}
	else if(isInArray("south", PositionsArr) && document.title == "Player 3") {
		for (var i = 0; i < southArr.length; i++) {
            var subSuitS = southArr[i].substr(2, 1);
            if (subSuitS != subSuit) {
                document.getElementById(southArr[i]).style.pointerEvents = "none";
                document.getElementById(southArr[i]).style.background = ShadedBackground;
            }
            if (!document.getElementById(southArr[i]).classList.contains("fadingCards")) {
                DisplayedCards++;
            }
            if (!document.getElementById(southArr[i]).classList.contains("fadingCards") &&
                document.getElementById(southArr[i]).style.background == ShadedBackground) {
                ShadedCards++;
            }
        }
        if (DisplayedCards == ShadedCards) {
            for (var i = 0; i < southArr.length; i++) {
                document.getElementById(southArr[i]).style.pointerEvents = "auto";
                document.getElementById(southArr[i]).style.background = "white";
            }
        }
		DisplayedCards = 0;
        ShadedCards = 0;
	}
	else if(isInArray("west", PositionsArr) && document.title == "Player 4") {
		for (var i = 0; i < westArr.length; i++) {
            var subSuitS = westArr[i].substr(2, 1);
            if (subSuitS != subSuit) {
                document.getElementById(westArr[i]).style.pointerEvents = "none";
                document.getElementById(westArr[i]).style.background = ShadedBackground;
            }
            if (!document.getElementById(westArr[i]).classList.contains("fadingCards")) {
                DisplayedCards++;
            }
            if (!document.getElementById(westArr[i]).classList.contains("fadingCards") &&
                document.getElementById(westArr[i]).style.background == ShadedBackground) {
                ShadedCards++;
            }
        }
        if (DisplayedCards == ShadedCards) {
            for (var i = 0; i < westArr.length; i++) {
                document.getElementById(westArr[i]).style.pointerEvents = "auto";
                document.getElementById(westArr[i]).style.background = "white";
            }
        }
		DisplayedCards = 0;
        ShadedCards = 0;
	}
}

function ResetAfterTrick() {
	for (var i = 0; i < northArr.length; i++) {
        document.getElementById(northArr[i]).style.background = "white";
	}
	for (var i = 0; i < eastArr.length; i++) {
        document.getElementById(eastArr[i]).style.background = "white";
	}
	for (var i = 0; i < southArr.length; i++) {
        document.getElementById(southArr[i]).style.background = "white";
	}
	for (var i = 0; i < westArr.length; i++) {
        document.getElementById(westArr[i]).style.background = "white";
	}
}

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}

function cardsActivationBasedOnPlayer(CurrentPlayer) {

    console.log("i came here");
    if(CurrentPlayer == "north"){
        for(var i=0; i<northArr.length; i++){
            document.getElementById(northArr[i]).style.pointerEvents = "none";
        }
        if(document.title == "Player 2") {
            for(var i=0; i<eastArr.length; i++){
				if(document.getElementById(eastArr[i]).style.background != ShadedBackground) {
					document.getElementById(eastArr[i]).style.pointerEvents = "auto";
				}
            }
        }
        for(var i=0; i<southArr.length; i++){
            document.getElementById(southArr[i]).style.pointerEvents = "none";
        }
        for(var i=0; i<westArr.length; i++){
            document.getElementById(westArr[i]).style.pointerEvents = "none";
        }
    }
    
    //2
    if(CurrentPlayer == "east"){
        for(var i=0; i<eastArr.length; i++){ 
            document.getElementById(eastArr[i]).style.pointerEvents = "none";
        }
        for(var i=0; i<northArr.length; i++){
            document.getElementById(northArr[i]).style.pointerEvents = "none";
        }
        if(document.title == "Player 3") {
            for(var i=0; i<southArr.length; i++){
				if(document.getElementById(southArr[i]).style.background != ShadedBackground) {
					document.getElementById(southArr[i]).style.pointerEvents = "auto";
				}
            }
        }
        for(var i=0; i<westArr.length; i++){
            document.getElementById(westArr[i]).style.pointerEvents = "none";
        }
    }
    
    //3
    if(CurrentPlayer == "south"){
        for(var i=0; i<southArr.length; i++){ 
            document.getElementById(southArr[i]).style.pointerEvents = "none";
        }
        for(var i=0; i<eastArr.length; i++){ 
            document.getElementById(eastArr[i]).style.pointerEvents = "none";
        }
        for(var i=0; i<northArr.length; i++){
            document.getElementById(northArr[i]).style.pointerEvents = "none";
        }
        if(document.title == "Player 4") {
            for(var i=0; i<westArr.length; i++){
				if(document.getElementById(westArr[i]).style.background != ShadedBackground) {
					document.getElementById(westArr[i]).style.pointerEvents = "auto";
				}
            }
        }
    }
    
    //4
    if(CurrentPlayer == "west"){
        if(document.title == "Player 1") {
            for(var i=0; i<northArr.length; i++){
				if(document.getElementById(northArr[i]).style.background != ShadedBackground) {
					document.getElementById(northArr[i]).style.pointerEvents = "auto";
				}
            } 
        }
        for(var i=0; i<westArr.length; i++){ 
            document.getElementById(westArr[i]).style.pointerEvents = "none";
        }
        for(var i=0; i<southArr.length; i++){ 
            document.getElementById(southArr[i]).style.pointerEvents = "none";
        }
        for(var i=0; i<eastArr.length; i++){ 
            document.getElementById(eastArr[i]).style.pointerEvents = "none";
        }                                  
    }
}