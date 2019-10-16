

function cardActivationBasedOnSuit(state, FirstPosition, subSuit){
    var SuitCount = 0;
    var blockedCount = 0;
        if(FirstPosition == "north"){
            /*var index = northArr.indexOf(ClickedCard);
            if (index !== -1) northArr.splice(index, 1);*/
            for(var i=0; i<eastArr.length; i++){
                var subSuitS = eastArr[i].substr(2, 1);
                if(subSuitS != subSuit){
                    document.getElementById(eastArr[i]).style.pointerEvents = "none";
                    document.getElementById(eastArr[i]).style.background="#b7bdc2";
                }

                // if(document.getElementById(eastArr[i]).style.pointerEvents == "none"
                // && document.getElementById(eastArr[i]).style.display == "block"){
                //     nonSuitCount++;
                // }

                // if(document.getElementById(eastArr[i]).style.display == "block"){
                //     blockedCount++;
                // }
            }

              if(nonSuitCount == blockedCount){
                 for(var i=0; i<eastArr.length; i++){
                        document.getElementById(eastArr[i]).style.pointerEvents = "auto";
                        document.getElementById(eastArr[i]).style.background = "white";
                }
            console.log("East" + SuitCount);
            
            }
            nonSuitCount = 0;
    
            for(var i=0; i<southArr.length; i++){
                var subSuitS = southArr[i].substr(2, 1);
                if(subSuitS != subSuit){
                    document.getElementById(southArr[i]).style.pointerEvents = "none";
                    document.getElementById(southArr[i]).style.background="#b7bdc2";
                    suitCount++;
                }
                // else {
                //     suitCount++;
                // }
            }
            console.log("South" + suitCount);
            if(suitCount == southArr.length){
                for(var i=0; i<southArr.length; i++){
                    document.getElementById(southArr[i]).style.pointerEvents = "auto";
                    document.getElementById(southArr[i]).style.background = "white";
                }
            }
            suitCount = 0;

            for(var i=0; i<westArr.length; i++){
                var subSuitS = westArr[i].substr(2, 1);
                if(subSuitS != subSuit){
                    document.getElementById(westArr[i]).style.pointerEvents = "none";
                    document.getElementById(westArr[i]).style.background="#b7bdc2";
                    suitCount++;
                }
                // else {
                //     suitCount++;
                // }
            }
            console.log("West" + suitCount);
            if(suitCount == westArr.length){
                for(var i=0; i<westArr.length; i++){
                    document.getElementById(westArr[i]).style.pointerEvents = "auto";
                    document.getElementById(westArr[i]).style.background = "white";
                }
            }
            suitCount = 0;
        }
        ///////////////////////////////////////////////////////////////////////////////////////////
        //2
    if(FirstPosition=="east"){
        alert(ClickedCard);
        /*var index = eastArr.indexOf(ClickedCard);
        if (index !== -1) eastArr.splice(index, 1);*/
        for(var i=0; i<southArr.length; i++){
            var subSuitS = southArr[i].substr(2, 1);
            if(subSuitS != subSuit){
                document.getElementById(westArr[i]).style.pointerEvents = "none";
                document.getElementById(southArr[i]).style.background="#b7bdc2";
            }
        }


        for(var i=0; i<westArr.length; i++){
            var subSuitS = westArr[i].substr(2, 1);
            if(subSuitS != subSuit){
                document.getElementById(westArr[i]).style.pointerEvents = "none";
                document.getElementById(westArr[i]).style.background="#b7bdc2";
            }
        }

        for(var i=0; i<northArr.length; i++){
            var subSuitS = northArr[i].substr(2, 1);
            if(subSuitS != subSuit){
                document.getElementById(westArr[i]).style.pointerEvents = "none";
                document.getElementById(northArr[i]).style.background="#b7bdc2";
            }
        }
    }
    //3
    if(FirstPosition=="south"){
        /*var index = southArr.indexOf(ClickedCard);
        if (index !== -1) southArr.splice(index, 1);*/
        for(var i=0; i<westArr.length; i++){
            var subSuitS = westArr[i].substr(2, 1);
            if(subSuitS != subSuit){
                document.getElementById(westArr[i]).style.pointerEvents = "none";
                document.getElementById(westArr[i]).style.background="#b7bdc2";
            }
        }

        for(var i=0; i<northArr.length; i++){
            var subSuitS = northArr[i].substr(2, 1);
            if(subSuitS != subSuit){
                document.getElementById(westArr[i]).style.pointerEvents = "none";
                document.getElementById(northArr[i]).style.background="#b7bdc2";
            }
        }

        for(var i=0; i<eastArr.length; i++){
            var subSuitS = eastArr[i].substr(2, 1);
            if(subSuitS != subSuit){
                document.getElementById(westArr[i]).style.pointerEvents = "none";
                document.getElementById(eastArr[i]).style.background="#b7bdc2";
            }
        }
    }
    //4
    if(FirstPosition=="west"){
        /*var index = westArr.indexOf(ClickedCard);
        if (index !== -1) westArr.splice(index, 1);*/
        for(var i=0; i<southArr.length; i++){
            var subSuitS = southArr[i].substr(2, 1);
            if(subSuitS != subSuit){
                document.getElementById(westArr[i]).style.pointerEvents = "none";
                document.getElementById(southArr[i]).style.background="#b7bdc2";
            }
        }

        for(var i=0; i<westArr.length; i++){
            var subSuitS = westArr[i].substr(2, 1);
            if(subSuitS != subSuit){
                document.getElementById(westArr[i]).style.pointerEvents = "none";
                document.getElementById(westArr[i]).style.background="#b7bdc2";
            }
        }

        for(var i=0; i<northArr.length; i++){
            var subSuitS = northArr[i].substr(2, 1);
            if(subSuitS != subSuit){
                document.getElementById(westArr[i]).style.pointerEvents = "none";
                document.getElementById(northArr[i]).style.background="#b7bdc2";
            }
        }
    }
    // end suits
}

// able cards after every trick
function ableCards(){
    console.log(northArr);
    for(var i=0; i<northArr.length; i++){ 
       
        document.getElementById(northArr[i]).style.pointerEvents  = "auto";
        document.getElementById(northArr[i]).style.background="white";
        }
//2
    for(var i=0; i<eastArr.length; i++){ 
        document.getElementById(eastArr[i]).style.pointerEvents  = "auto";
        document.getElementById(eastArr[i]).style.background="white";
        }                                 

//3
    for(var i=0; i<southArr.length; i++){ 
        document.getElementById(southArr[i]).style.pointerEvents  = "auto";
        document.getElementById(southArr[i]).style.background="white";
        }
//4
    for(var i=0; i<westArr.length; i++){ 
        document.getElementById(westArr[i]).style.pointerEvents  = "auto";
        document.getElementById(westArr[i]).style.background="white";
        }
                       
}