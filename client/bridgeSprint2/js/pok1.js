

// import { EACCES } from "constants";

var cardBtn;
var btnIndex = 0;
var btnSouth = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
var cardidShuffle = [];
var northArr = [];
var southArr = [];
var eastArr = [];
var westArr = [];
var finalBiding = "";
let playerId = "";
var coY = 0;
var coX = 0;
var m;
var jsonResult = '';
var we = document.getElementById("we");
var they = document.getElementById("they");
var PlayedCardsArr = []; // Collect the played cards for each player before trick
var lastPidResultHTML = '';
var bg="";
var firstplayedcardresult = "";
var position = "";
var  ClickedCard ="";
//dummy variables
var posCount = 1;
var pidCount = 0;
var CurrentPidder="north";
var countArr =[];
let playerPos = ["noth"];
var position = "";
var finalPos = "";
var res;
var lastpid="";
var finalBg;
var pidId = ["pc1", "pd1", "ph1", "ps1", "pn1",
"pc2", "pd2", "ph2", "ps2", "pn2",
"pc3", "pd3", "ph3", "ps3", "pn3",
"pc4", "pd4", "ph4", "ps4", "pn4",
"pc5", "pd5", "ph5", "ps5", "pn5",
"pc6", "pd6", "ph6", "ps6", "pn6",
"pc7", "pd7", "ph7", "ps7", "pn7",
];
var data1=0;
var data2=0;
var nickname;
//play
var playerNick = "";
var nickName = document.getElementById("nickName");
var playn= document.getElementById("playn");
var NextPlayer = "";
  
var declarerscore;
var defenderscore;

//var firstplayedcardresult = "47s09";
var start="";


$("#playn").click(function(event) {
    // event.preventDefault();
    playerNick = nickName.value;
    games.emit('sendnicknametoserver', playerNick);
     playerNick = '';
});
 

games.on('nickname',function(data){
    nickname=data;
console.log(nickname);
});


// function ableSuit(firstplayedcardresult)
// {
//     alert(firstplayedcardresult);
// }
var Id;
initplayer();
function initplayer()
{
 Id=sessionStorage.getItem("playerid");
 console.log(Id);    
}


var room=Id.substr(0,2);
var table=Id.substr(2,2);
var playerrr =Id.substr(4,2);
games.emit("playerroom",Id);



games.on("welcome",function(data){
console.log(data);


});



games.emit("joinroom",room);
games.emit("jointable",table);

games.on("newuser",(res)  => console.log(res));
//console.log("roooooooooooooooom");
games.on("roomcounterm",(res)  => console.log("players in table counts "+res));

//console.log("roooooooooooooooom1");
games.on("roomcountermm",(res)  => console.log(res));





games.on("err",(err) => console.log(err));



games.on("success",(res) => console.log(res));



console.log("dec "+declarerscore);


console.log("def "+defenderscore);


var $container = document.getElementById('container');

// create Deck
var deck = Deck();
 
// add to DOM
deck.mount($container);
setId();

deck.shuffle();

games.on('BiddModalResult',function(data){
   document.getElementById("modalOverlay").innerHTML = "";
   document.getElementById("modalOverlay").innerHTML = data;
   lastPidResultHTML = document.getElementById("div_biddresult").innerHTML;
});

games.on('cardsJSON',function(data){
   jsonResult = data;
   fillArrays();
   //distForFirstThreePlayers();
   //put code of distforfirst3players inside dist
   dist();
   document.getElementById("modalOverlay").style.display = "block";
   bidActivation(CurrentPidder);
});
//dist();
init_game();
//$(document).ajaxStop(function () {
  //  dist();
//});
/*$.when(fillArraysFromAjax()).done(function (){
dist();
});*/
//dist();

setPiddingId();

// main function
function setId() {

    var y = "";
    var cardsId = ["25d0k", "24d0q", "23d0j", "22d10", "21d09", "20d08", "19d07", "18d06", "17d05", "16d04", "15d03", "14d02", "26d01",
        "12c0k", "11c0q", "10c0j", "09c10", "08c09", "07c08", "06c07", "05c06", "04c05", "03c04", "02c03", "01c02", "13c01",
        "38h0k", "37h0q", "36h0j", "35h10", "34h09", "33h08", "32h07", "31h06", "30h05", "29h04", "28h03", "27h02", "39h01",
        "51s0k", "50s0q", "49s0j", "48s10", "47s09", "46s08", "45s07", "44s06", "43s05", "42s04", "41s03", "40s02", "52s01"
    ];

    deck.cards.forEach(function(card, i) {
        document.getElementsByClassName("card")[i].setAttribute("id", cardsId[i]);
    });
}

//////////////// Start Global Functions /////////////////////

deck.cards.forEach(function (card, i) {
    card.enableDragging();
    cardTemp = card.$el.id;
    cardidShuffle.push(cardTemp);
});

function init_game() {
    games.on('id',function (data) {
        // player north
        if(  playerrr == "p1") {
            document.title = "Player 1";
            if(data[1]==4){
                distributecards();
            }
        }
        // player east
        else if( playerrr == "p2") {
            document.title = "Player 2";
            if(data[1]==4){
                distributecards();
            }
        }

        // player south
        else if(playerrr == "p3" ) {
            document.title = "Player 3";
            if(data[1]==4){
                distributecards();
            }
        }
        // player west
        else if( playerrr == "p4") {
            document.title = "Player 4";
          if(data[1]==4){
            distributecards();
        }
         // southPosition();
        }
      });
//check that they are 4 players
}

function distributecards()
{
    //console.log("no of players in table"+data[1]);
    var temp = "";
    for (var i = 0; i < 13; i++) {
        temp = cardidShuffle[i];
        northArr.push(temp);
        northArr.sort();
    }
    for (var i = 13; i < 26; i++) {
        temp = cardidShuffle[i];
        eastArr.push(temp);
        eastArr.sort();
    }
    for (var i = 26; i < 39; i++) {
        temp = cardidShuffle[i];
        southArr.push(temp);
        southArr.sort();
    }
    for (var i = 39; i < 52; i++) {
        temp = cardidShuffle[i];
        westArr.push(temp);
        westArr.sort();
    }
    // json format
    jsonResult += '[';
    jsonResult += '   {';
    jsonResult += '      "direction":"north",';
    jsonResult += '      "cards":{';
    for (var i = 0; i < northArr.length; i++) {
        jsonResult += '         "e' + (i + 1) + '":"' + northArr[i] + '",';
    }
    jsonResult = jsonResult.substring(0, jsonResult.length - 1);
    jsonResult += '      }';
    jsonResult += '   },';
    jsonResult += '   {';
    jsonResult += '      "direction":"south",';
    jsonResult += '      "cards":{';
    for (var i = 0; i < southArr.length; i++) {
        jsonResult += '         "e' + (i + 1) + '":"' + southArr[i] + '",';
    }
    jsonResult = jsonResult.substring(0, jsonResult.length - 1);
    jsonResult += '      }';
    jsonResult += '   },';
    jsonResult += '   {';
    jsonResult += '      "direction":"east",';
    jsonResult += '      "cards":{';
    for (var i = 0; i < eastArr.length; i++) {
        jsonResult += '         "e' + (i + 1) + '":"' + eastArr[i] + '",';
    }
    jsonResult = jsonResult.substring(0, jsonResult.length - 1);
    jsonResult += '      }';
    jsonResult += '   },';
    jsonResult += '   {';
    jsonResult += '      "direction":"west",';
    jsonResult += '      "cards":{';
    for (var i = 0; i < westArr.length; i++) {
        jsonResult += '         "e' + (i + 1) + '":"' + westArr[i] + '",';
    }
    jsonResult = jsonResult.substring(0, jsonResult.length - 1);
    jsonResult += '      }';
    jsonResult += '   }';
    jsonResult += ']';
    jsonResult = jsonResult.replace(/\s/g, "");
    games.emit('json', jsonResult);

}

/*function fillArrays(result) {
var testJSON = '[{"direction":"north","cards":{"e1":"01c02","e2":"05c06","e3":"12c0k","e4":"15d03","e5":"27h02","e6":"28h03","e7":"30h05","e8":"31h06","e9":"37h0q","e10":"38h0k","e11":"43s05","e12":"48s10","e13":"51s0k"}},{"direction":"south","cards":{"e1":"02c03","e2":"04c05","e3":"07c08","e4":"10c0j","e5":"19d07","e6":"20d08","e7":"23d0j","e8":"24d0q","e9":"32h07","e10":"42s04","e11":"45s07","e12":"47s09","e13":"49s0j"}},{"direction":"east","cards":{"e1":"13c01","e2":"16d04","e3":"17d05","e4":"21d09","e5":"25d0k","e6":"26d01","e7":"33h08","e8":"35h10","e9":"39h01","e10":"40s02","e11":"41s03","e12":"44s06","e13":"50s0q"}},{"direction":"west","cards":{"e1":"03c04","e2":"06c07","e3":"08c09","e4":"09c10","e5":"11c0q","e6":"14d02","e7":"18d06","e8":"22d10","e9":"29h04","e10":"34h09","e11":"36h0j","e12":"46s08","e13":"52s01"}}]'; 

//var testJSON = result;
var mainJSON = JSON.parse(testJSON);
var objJSONnorth = mainJSON[0].cards ;
var objJSONsouth = mainJSON[1].cards ;
var objJSONeast = mainJSON[2].cards ;
var objJSONwest = mainJSON[3].cards ;

// northArr
for (x in objJSONnorth) {
    northArr.push(objJSONnorth[x]);
  }
// southArr
for (x in objJSONsouth) {
    southArr.push(objJSONsouth[x]);
  }
// eastArr
for (x in objJSONeast) {
    eastArr.push(objJSONeast[x]);
  }
// westArr
for (x in objJSONwest) {
    westArr.push(objJSONwest[x]);
  }

console.log(northArr);
console.log(southArr);
console.log(eastArr);
console.log(westArr);


console.log(mainJSON[0].cards.e1);
}*/


/*function fillArraysFromAjax() {
var url = "http://localhost:3000/client/bridgeSprint2/temp.txt";
$.ajax({
    url: url, // where you wanna post
    processData: false,
    contentType: 'application/json; charset=utf-8',
    complete: fillArrays
});
}*/

function fillArrays() {
//var testJSON = '[{"direction":"north","cards":{"e1":"01c02","e2":"05c06","e3":"12c0k","e4":"15d03","e5":"27h02","e6":"28h03","e7":"30h05","e8":"31h06","e9":"37h0q","e10":"38h0k","e11":"43s05","e12":"48s10","e13":"51s0k"}},{"direction":"south","cards":{"e1":"02c03","e2":"04c05","e3":"07c08","e4":"10c0j","e5":"19d07","e6":"20d08","e7":"23d0j","e8":"24d0q","e9":"32h07","e10":"42s04","e11":"45s07","e12":"47s09","e13":"49s0j"}},{"direction":"east","cards":{"e1":"13c01","e2":"16d04","e3":"17d05","e4":"21d09","e5":"25d0k","e6":"26d01","e7":"33h08","e8":"35h10","e9":"39h01","e10":"40s02","e11":"41s03","e12":"44s06","e13":"50s0q"}},{"direction":"west","cards":{"e1":"03c04","e2":"06c07","e3":"08c09","e4":"09c10","e5":"11c0q","e6":"14d02","e7":"18d06","e8":"22d10","e9":"29h04","e10":"34h09","e11":"36h0j","e12":"46s08","e13":"52s01"}}]';
var mainJSON = JSON.parse(jsonResult);
var objJSONnorth = mainJSON[0].cards;
var objJSONsouth = mainJSON[1].cards;
var objJSONeast = mainJSON[2].cards;
var objJSONwest = mainJSON[3].cards;

// northArr
for (x in objJSONnorth) {
    northArr.push(objJSONnorth[x]);
  }
// southArr
for (x in objJSONsouth) {
    southArr.push(objJSONsouth[x]);
  }
// eastArr
for (x in objJSONeast) {
    eastArr.push(objJSONeast[x]);
  }
// westArr
for (x in objJSONwest) {
    westArr.push(objJSONwest[x]);
}
}

// click function on screen and return json for player id and card id

$(".card").click(function() {
    var position = '';
    if(document.title == "Player 1") {
        position = "north";
    }
    else if(document.title == "Player 2") {
        position = "east";
    }
    else if(document.title == "Player 3") {
        position = "south";
    }
    else if(document.title == "Player 4") {
        position = "west";
    }

    var cardId = $(this).attr("id");

    $('#'+position).append($(this));
    coY = $('#'+position).offset().top;
    coX = $('#'+position).offset().left;
    $(this).offset({
        top: coY,
        left: coX
    });
    //cardsActivationBasedOnPlayer(position); // Not Use
    ///////////////////////////
    // convert to json format
    
    var jsonResult = '[';
    jsonResult += '{ "position" : " ';
    jsonResult += position;
    jsonResult += '" , "card" : "';
    jsonResult += cardId;
    jsonResult += '"}]';
    jsonResult = jsonResult.replace(/\s/g, "");
    games.emit('PlayedCard',jsonResult);
    
});

// function removeCards(PlayedCardsArr) {
//     for(var i=0; i < PlayedCardsArr.length; i++) {
//         var elem = document.getElementById(PlayedCardsArr[i]);
//         $(elem).addClass("hidden");
//         // elem.style.display = "none"; //Uncommented by Khaled 25-7-2019
//         //elem.parentNode.removeChild(elem);
//     }
// }
function removeCards(PlayedCardsArr) {
    for(var i=0; i<PlayedCardsArr.length; i++) {
        var elem = document.getElementById(PlayedCardsArr[i]);
        $(elem).addClass("fadingCards");
        // elem.style.display = "none";
        //elem.parentNode.removeChild(elem);
    }
}

games.on('lastpid',function(data){
lastpid = data;
console.log(lastpid);
 //finalBg = document.getElementById(lastpid).style.backgroundImage;
// document.getElementById("finalBidding").style.backgroundImage = finalBg;
console.log(finalBg);
});



//////////////// End Global Functions /////////////////////

// function distForFirstThreePlayers() {
//     var dumy1 = [];
//     var cardTemp = "";
//     if (document.title == "Player 1") {
//         // rearrange player position
//         $('#oldNorth').attr('id', 'south');
//         $('#oldEast').attr('id', 'west');
//         $('#oldSouth').attr('id', 'north');
//         $('#oldWest').attr('id', 'east');
//         deck.cards.forEach(function(card, i) {

//             cardTemp = card.$el.id;
//             for (var y = 0; y < northArr.length; y++) {
//                 if (northArr[y] == cardTemp) {
//                     card.setSide('front');
//                 }
//             }
//         });
//         for (var i = 0; i < southArr.length; i++) {
//             m = document.getElementById(southArr[i]);
//             document.getElementById("north").appendChild(m);
//             $(m).animate({
//                 left: -200 + i * 30,
//                 top: -370,
//                 zIndex: i,
//             });
//         }


//         for (var i = 0; i < westArr.length; i++) {
//             m = document.getElementById(westArr[i]);
//             document.getElementById("north").appendChild(m);
//             $(m).addClass("dis"); //disables
//             $(m).animate({
//                 left: 350,
//                 top: -250 + i * 30,
//                 zIndex: i,
//             });
//         }


//         for (var i = 0; i < northArr.length; i++) {
//             m = document.getElementById(northArr[i]);
//             document.getElementById("north").appendChild(m);
//             $(m).addClass("dis"); //disables
//             $(m).animate({
//                 left: -200 + i * 30,
//                 top: 170,
//                 zIndex: i,
//             });
//         }

//         for (var i = 0; i < eastArr.length; i++) {
//             m = document.getElementById(eastArr[i]);
//             document.getElementById("north").appendChild(m);
//             $(m).addClass("dis"); //disables
//             $(m).animate({
//                 left: -350,
//                 top: -250 + i * 30,
//                 zIndex: i,
//             });
//         }
//         //////////////////////////////////media query//////////////////////////////
//         function media1024(x2) {

//             if (x2.matches) { // If media query matches
//                 //     
//                 /////////////////////////////player1////////////////////////////////
//                 for (var i = 0; i < northArr.length; i++) {
//                     m = document.getElementById(northArr[i]);
//                     document.getElementById("hero").appendChild(m);
//                     $(m).animate({
//                         left: 370 + i * 30,
//                         top: 60,
//                         zIndex: i,
//                     });
//                     cardBtn = document.createElement("BUTTON");
//                     cardBtn.className = "cardbutton";
//                     document.getElementById("hero").appendChild(cardBtn);
//                     document.getElementsByClassName("cardbutton")[i].setAttribute("id", btnSouth[i]);
//                     $(cardBtn).animate({
//                         left: 370 + i * 30,
//                         top: 60,
//                         zIndex: i,
//                     });
//                 }

//                 //         /////////////////////////////player2////////////////////////////////
//                 for (var i = 0; i < eastArr.length; i++) {
//                     m = document.getElementById(eastArr[i]);
//                     document.getElementById("hero").appendChild(m);
//                     $(m).animate({
//                         left: 800,
//                         top: 250 + i * 25,
//                         zIndex: i,
//                     });
//                 }
//                 //       /////////////////////////////player3////////////////////////////////
//                 for (var i = 0; i < southArr.length; i++) {
//                     m = document.getElementById(southArr[i]);
//                     document.getElementById("hero").appendChild(m);
//                     $(m).animate({
//                         left: 370 + i * 30,
//                         top: 750,
//                         zIndex: i,
//                     });
//                 }
//                 //////////////////////////////////////////player4////////////////////////////////
//                 for (var i = 0; i < westArr.length; i++) {
//                     m = document.getElementById(westArr[i]);
//                     document.getElementById("hero").appendChild(m);
//                     $(m).animate({
//                         left: 280,
//                         top: 250 + i * 25,
//                         zIndex: i,
//                     });
//                 }
//             }
//         }
//         var x2 = window.matchMedia("(max-width: 1024px)");
//         media1024(x2); // Call listener function at run time
//         x2.addListener(media1024);

//         // media (800)
//         function media8(x1) {
                                                    
//             if (x1.matches) { // If media query matches
//           //     
//                /////////////////////////////player1////////////////////////////////
//           for(var i=0;i<northArr.length;i++){
//             m=document.getElementById(northArr[i]);
//             document.getElementById("hero").appendChild(m);
//             $(m).animate({
//                       left:150+i*30,
//                       top:80,
//                       zIndex:i,
//                   });


//                   cardBtn = document.createElement("BUTTON");
//                   cardBtn.className="cardbutton";
//                   document.getElementById("hero").appendChild(cardBtn);
//                   document.getElementsByClassName("cardbutton")[i].setAttribute("id", btnSouth[i]);
//                   $(cardBtn).animate({
//                    left:150+i*30,
//                    top:80,
//                    zIndex:i,
               
//                  }); 

//            }
             
//           //         /////////////////////////////player2////////////////////////////////
//           for(var i=0;i<eastArr.length;i++){
//             m=document.getElementById(eastArr[i]);
//             document.getElementById("hero").appendChild(m);
//             $(m).animate({
//                       left:650,
//                       top:200+i*25,
//                       zIndex:i,
//                   });
//                 }
//           //       /////////////////////////////player3////////////////////////////////
//           for(var i=0;i<southArr.length;i++){
//             m=document.getElementById(southArr[i]);
//             document.getElementById("hero").appendChild(m);
//             $(m).animate({
//                       left:150+i*30,
//                       top:750,
//                       zIndex:i,
                  
//                     }); 

                   
               
//                   }  

//           //         /////////////////////////////player4////////////////////////////////
//           for(var i=0;i<westArr.length;i++){
//             m=document.getElementById(westArr[i]);
//             document.getElementById("hero").appendChild(m);
//             $(m).animate({
//               left:30,
//               top:200+i*25,
//                       zIndex:i,
//                   });    }  

//             }
//           }
//           var x1 = window.matchMedia("(max-width: 800px)");
//           media8(x1); // Call listener function at run time
//           x1.addListener(media8);
//         // media320

//         // media767

//         function media7(x) {

//             if (x.matches) {
//                 // If media query matches

//                 //       /////////////////////////////player1////////////////////////////////


//                 for (var i = 0; i < northArr.length; i++) {
//                     m = document.getElementById(northArr[i]);
//                     document.getElementById("hero").appendChild(m);
//                     $(m).animate({
//                         left: 25 + i * 23,
//                         top: 70,
//                         zIndex: i,
//                     });
//                     cardBtn = document.createElement("BUTTON");
//                     cardBtn.className = "cardbutton";
//                     document.getElementById("hero").appendChild(cardBtn);
//                     document.getElementsByClassName("cardbutton")[i].setAttribute("id", btnSouth[i]);
//                     $(cardBtn).animate({
//                         left: 25 + i * 23,
//                         top: 70,
//                         zIndex: i,

//                     });

//                 }

//                 //         /////////////////////////////player2////////////////////////////////
//                 for (var i = 0; i < eastArr.length; i++) {
//                     m = document.getElementById(eastArr[i]);
//                     document.getElementById("hero").appendChild(m);
//                     $(m).animate({
//                         left: 300,
//                         top: 145 + i * 23,
//                         zIndex: i,
//                     });
//                 }
//                 //       /////////////////////////////player3////////////////////////////////
//                 for (var i = 0; i < southArr.length; i++) {
//                     m = document.getElementById(southArr[i]);
//                     document.getElementById("hero").appendChild(m);
//                     $(m).animate({
//                         left: 25 + i * 23,
//                         top: 510,
//                         zIndex: i,

//                     });
//                 }
//                 //         /////////////////////////////player4////////////////////////////////
//                 for (var i = 0; i < westArr.length; i++) {
//                     m = document.getElementById(westArr[i]);

//                     document.getElementById("hero").appendChild(m);

//                     $(m).animate({
//                         left: 40,
//                         top: 145 + i * 23,
//                         zIndex: i

//                     });
//                 }
//             }

//         }
//         var x = window.matchMedia("(max-width: 767px)");
//         media7(x); // Call listener function at run time
//         x.addListener(media7);

        

//         $(".cardbutton").click(function() {
//             btnIndex = $(this).css('z-index');
//             var getIndex = document.getElementById(northArr[btnIndex]);

//             $(this).hide();
//             $('#drag-two').append($(getIndex));
//             coY = $('#drag-two').offset().top;
//             coX = $('#drag-two').offset().left;
//             $(getIndex).offset({
//                 top: coY,
//                 left: coX
//             });

//             $(".cardbutton").addClass("dis"); //disables
//             // convert to json format
//             var jsonResult = '[';
//             jsonResult += '   {';
//             jsonResult += '"player1"';
//             jsonResult += ':{ "position" : " ';
//             jsonResult += playerId;
//             jsonResult += '" , "card" : "';
//             jsonResult += southArr[btnIndex];
//             jsonResult += '"}}]';
//             jsonResult = jsonResult.replace(/\s/g, "");
//            // console.log(jsonResult);

//         });
//     } else if (document.title == "Player 2") {
//         // rearrange player position
//         $('#oldNorth').attr('id', 'west');
//         $('#oldEast').attr('id', 'north');
//         $('#oldSouth').attr('id', 'east');
//         $('#oldWest').attr('id', 'south');

//         deck.cards.forEach(function(card, i) { 
//                 cardTemp = card.$el.id;
//                 for(var y=0;y<eastArr.length;y++){
//                     if (eastArr[y]==cardTemp) {
//                         card.setSide('front');
//                     } 
//             }
//             });
//             for (var i = 0; i < westArr.length; i++) {
//                 m = document.getElementById(westArr[i]);
//                 document.getElementById("east").appendChild(m);
//                 $(m).addClass("dis"); //disables
//                 $(m).animate({
//                     left: -200 + i * 30,
//                     top: -370,
//                     zIndex: i,
//                 });
//             }
        
        
//             for (var i = 0; i < northArr.length; i++) {
//                 m = document.getElementById(northArr[i]);
//                 document.getElementById("east").appendChild(m);
//                 $(m).animate({
//                     left: 350,
//                     top: -250 + i * 30,
//                     zIndex: i,
//                 });
//             }
        
        
//             for (var i = 0; i < eastArr.length; i++) {
//                 m = document.getElementById(eastArr[i]);
//                 document.getElementById("east").appendChild(m);
//                 $(m).addClass("dis"); //disables
//                 $(m).animate({
//                     left: -200 + i * 30,
//                     top: 170,
//                     zIndex: i,
//                 });
//             }
        
//             for (var i = 0; i < southArr.length; i++) {
//                 m = document.getElementById(southArr[i]);
//                 document.getElementById("east").appendChild(m);
//                 $(m).addClass("dis"); //disables
//                 $(m).animate({
//                     left: -350,
//                     top: -250 + i * 30,
//                     zIndex: i,
//                 });
//             }
// /*
//             socket.on('oncard1',function(data){
//                 console.log(data);
//                             });
// */
//      games.on('result3',function(data){
//     console.log("resuuuuuuuuuuuuuult");
// });

//             // ////////////////////////////////media query///////////////////////////////////////////////////
//         function media1024(x2) {

//             if (x2.matches) { // If media query matches
//                 //     
//                 /////////////////////////////player1////////////////////////////////
//                 for (var i = 0; i < northArr.length; i++) {
//                     m = document.getElementById(northArr[i]);
//                     document.getElementById("hero").appendChild(m);
//                     $(m).animate({
//                         left: 370 + i * 30,
//                         top: 60,
//                         zIndex: i,
//                     });
//                 }
    
//                 //         /////////////////////////////player2////////////////////////////////
//                 for (var i = 0; i < eastArr.length; i++) {
//                     m = document.getElementById(eastArr[i]);
//                     document.getElementById("hero").appendChild(m);
//                     $(m).animate({
//                         left: 800,
//                         top: 250 + i * 25,
//                         zIndex: i,
//                     });
//                     cardBtn = document.createElement("BUTTON");
//                     cardBtn.className = "cardbutton";
//                     document.getElementById("hero").appendChild(cardBtn);
//                     document.getElementsByClassName("cardbutton")[i].setAttribute("id", btnSouth[i]);
//                     $(cardBtn).animate({
//                         left: 800 ,
//                         top: 250 + i * 25,
//                         zIndex: i,
//                     });
//                 }
//                 //       /////////////////////////////player3////////////////////////////////
//                 for (var i = 0; i < southArr.length; i++) {
//                     m = document.getElementById(southArr[i]);
//                     document.getElementById("hero").appendChild(m);
//                     $(m).animate({
//                         left: 370 + i * 30,
//                         top: 750,
//                         zIndex: i,
//                     });
//                 }
//                 //////////////////////////////////////////player4////////////////////////////////
//                 for (var i = 0; i < westArr.length; i++) {
//                     m = document.getElementById(westArr[i]);
//                     document.getElementById("hero").appendChild(m);
//                     $(m).animate({
//                         left: 280,
//                         top: 250 + i * 25,
//                         zIndex: i,
//                     });
//                 }
//             }
//         }
//         var x2 = window.matchMedia("(max-width: 1024px)");
//         media1024(x2); // Call listener function at run time
//         x2.addListener(media1024);

//         // media (800)
//         function media8(x1) {
                                                    
//             if (x1.matches) { // If media query matches
//           //     
//                /////////////////////////////player1////////////////////////////////
//           for(var i=0;i<northArr.length;i++){
//             m=document.getElementById(northArr[i]);
//             document.getElementById("hero").appendChild(m);
//             $(m).animate({
//                       left:150+i*30,
//                       top:80,
//                       zIndex:i,
//                   });
//            }
             
//           //         /////////////////////////////player2////////////////////////////////
//           for(var i=0;i<eastArr.length;i++){
//             m=document.getElementById(eastArr[i]);
//             document.getElementById("hero").appendChild(m);
//             $(m).animate({
//                       left:650,
//                       top:200+i*25,
//                       zIndex:i,
//                   });

//                   cardBtn = document.createElement("BUTTON");
//                   cardBtn.className="cardbutton";
//                   document.getElementById("hero").appendChild(cardBtn);
//                   document.getElementsByClassName("cardbutton")[i].setAttribute("id", btnSouth[i]);
//                   $(cardBtn).animate({
//                     left:650,
//                     top:200+i*25,
//                     zIndex:i,
               
//                  }); 
//                 }
//           //       /////////////////////////////player3////////////////////////////////
//           for(var i=0;i<southArr.length;i++){
//             m=document.getElementById(southArr[i]);
//             document.getElementById("hero").appendChild(m);
//             $(m).animate({
//                       left:150+i*30,
//                       top:750,
//                       zIndex:i,
                  
//                     }); 

                  

               
//                   }  
//           //         /////////////////////////////player4////////////////////////////////
//           for(var i=0;i<westArr.length;i++){
//             m=document.getElementById(westArr[i]);
//             document.getElementById("hero").appendChild(m);
//             $(m).animate({
//               left:30,
//               top:200+i*25,
//                       zIndex:i,
//                   });    }  

//             }
//           }
//           var x1 = window.matchMedia("(max-width: 800px)");
//           media8(x1); // Call listener function at run time
//           x1.addListener(media8);

// // media320

// // media767

// function media7(x) {

//     if (x.matches) {
//         // If media query matches

//         //       /////////////////////////////player1////////////////////////////////


//         for (var i = 0; i < northArr.length; i++) {
//             m = document.getElementById(northArr[i]);
//             document.getElementById("hero").appendChild(m);
//             $(m).animate({
//                 left: 25 + i * 23,
//                 top: 70,
//                 zIndex: i,
//             });

//         }

//         //         /////////////////////////////player2////////////////////////////////
//         for (var i = 0; i < eastArr.length; i++) {
//             m = document.getElementById(eastArr[i]);
//             document.getElementById("hero").appendChild(m);
//             $(m).animate({
//                 left: 300,
//                 top: 145 + i * 23,
//                 zIndex: i,
//             });
//             cardBtn = document.createElement("BUTTON");
//             cardBtn.className = "cardbutton";
//             document.getElementById("hero").appendChild(cardBtn);
//             document.getElementsByClassName("cardbutton")[i].setAttribute("id", btnSouth[i]);
//             $(cardBtn).animate({
//                 left: 300,
//                 top: 145 + i * 23,
//                 zIndex: i,

//             });
//         }
//         //       /////////////////////////////player3////////////////////////////////
//         for (var i = 0; i < southArr.length; i++) {
//             m = document.getElementById(southArr[i]);
//             document.getElementById("hero").appendChild(m);
//             $(m).animate({
//                 left: 25 + i * 23,
//                 top: 510,
//                 zIndex: i

//             });
//         }
//         //         /////////////////////////////player4////////////////////////////////
//         for (var i = 0; i < westArr.length; i++) {
//             m = document.getElementById(westArr[i]);

//             document.getElementById("hero").appendChild(m);

//             $(m).animate({
//                 left: 40,
//                 top: 145 + i * 23,
//                 zIndex: i

//             });
//         }
//     }

// }
//         var x = window.matchMedia("(max-width: 767px)");
//         media7(x); // Call listener function at run time
//         x.addListener(media7);

//         $(".cardbutton").click(function() {
//             btnIndex = $(this).css('z-index');
//             var getIndex = document.getElementById(eastArr[btnIndex]);
        
//             $(this).hide();
//             $('#dragMedia').append($(getIndex));
//             coY = $('#dragMedia').offset().top;
//             coX = $('#dragMedia').offset().left;
//             $(getIndex).offset({
//                 top: coY,
//                 left: coX
//             });
        
//             $(".cardbutton").addClass("dis"); //disables
//             // convert to json format
//             var jsonResult = '[';
//             jsonResult += '   {';
//             jsonResult += '"player1"';
//             jsonResult += ':{ "position" : " ';
//             jsonResult += playerId;
//             jsonResult += '" , "card" : "';
//             jsonResult += southArr[btnIndex];
//             jsonResult += '"}}]';
//             jsonResult = jsonResult.replace(/\s/g, "");
//       //      console.log(jsonResult);
        
//         });
//     } else if (document.title == "Player 3") {
//         $('#oldNorth').attr('id', 'north');
//         $('#oldEast').attr('id', 'east');
//         $('#oldSouth').attr('id', 'south');
//         $('#oldWest').attr('id', 'west');
//          deck.cards.forEach(function(card, i) { 
                
//                 cardTemp = card.$el.id;
//                 for(var y=0;y<southArr.length;y++){
//                     if (southArr[y]==cardTemp) {
//                         card.setSide('front');
//                     } 
//             }
//             });
//             for (var i = 0; i < northArr.length; i++) {
//                 m = document.getElementById(northArr[i]);
//                 document.getElementById("south").appendChild(m);
//                 $(m).addClass("dis"); //disables
//                 $(m).animate({
//                     left: -200 + i * 30,
//                     top: -370,
//                     zIndex: i,
//                 });
//             }
        
        
//             for (var i = 0; i < eastArr.length; i++) {
//                 m = document.getElementById(eastArr[i]);
//                 document.getElementById("south").appendChild(m);
//                 $(m).addClass("dis"); //disables
//                 $(m).animate({
//                     left: 350,
//                     top: -250 + i * 30,
//                     zIndex: i,
//                 });
//             }
        
        
//             for (var i = 0; i < southArr.length; i++) {
//                 m = document.getElementById(southArr[i]);
//                 document.getElementById("south").appendChild(m);
//                 $(m).animate({
//                     left: -200 + i * 30,
//                     top: 170,
//                     zIndex: i,
//                 });
//             }
        
//             for (var i = 0; i < westArr.length; i++) {
//                 m = document.getElementById(westArr[i]);
//                 document.getElementById("south").appendChild(m);
//                 $(m).addClass("dis"); //disables
//                 $(m).animate({
//                     left: -350,
//                     top: -250 + i * 30,
//                     zIndex: i,
//                 });
//             }
// /*
//             socket.on('oncard1',function(data){
//                 console.log(data);
//                             });
// */
          
//             function media1024(x2) {

//                 if (x2.matches) { // If media query matches
//                     //     
//                     /////////////////////////////player1////////////////////////////////
//                     for (var i = 0; i < northArr.length; i++) {
//                         m = document.getElementById(northArr[i]);
//                         document.getElementById("hero").appendChild(m);
//                         $(m).animate({
//                             left: 370 + i * 30,
//                             top: 60,
//                             zIndex: i,
//                         });
//                     }
        
//                     //         /////////////////////////////player2////////////////////////////////
//                     for (var i = 0; i < eastArr.length; i++) {
//                         m = document.getElementById(eastArr[i]);
//                         document.getElementById("hero").appendChild(m);
//                         $(m).animate({
//                             left: 800,
//                             top: 250 + i * 25,
//                             zIndex: i,
//                         });
//                     }
//                     //       /////////////////////////////player3////////////////////////////////
//                     for (var i = 0; i < southArr.length; i++) {
//                         m = document.getElementById(southArr[i]);
//                         document.getElementById("hero").appendChild(m);
//                         $(m).animate({
//                             left: 370 + i * 30,
//                             top: 750,
//                             zIndex: i,
//                         });
//                         cardBtn = document.createElement("BUTTON");
//                         cardBtn.className = "cardbutton";
//                         document.getElementById("hero").appendChild(cardBtn);
//                         document.getElementsByClassName("cardbutton")[i].setAttribute("id", btnSouth[i]);
//                         $(cardBtn).animate({
//                             left: 370 + i * 30,
//                             top: 750,
//                             zIndex: i,
//                         });
//                     }
//                     //////////////////////////////////////////player4////////////////////////////////
//                     for (var i = 0; i < westArr.length; i++) {
//                         m = document.getElementById(westArr[i]);
//                         document.getElementById("hero").appendChild(m);
//                         $(m).animate({
//                             left: 280,
//                             top: 250 + i * 25,
//                             zIndex: i,
//                         });
//                     }
//                 }
//             }
//             var x2 = window.matchMedia("(max-width: 1024px)");
//             media1024(x2); // Call listener function at run time
//             x2.addListener(media1024);
    
//             // media (800)
//     function media8(x1) {
                                                    
//                 if (x1.matches) { // If media query matches
//               //     
//                    /////////////////////////////player1////////////////////////////////
//               for(var i=0;i<northArr.length;i++){
//                 m=document.getElementById(northArr[i]);
//                 document.getElementById("hero").appendChild(m);
//                 $(m).animate({
//                           left:150+i*30,
//                           top:80,
//                           zIndex:i,
//                       });
//                }
                 
//               //         /////////////////////////////player2////////////////////////////////
//               for(var i=0;i<eastArr.length;i++){
//                 m=document.getElementById(eastArr[i]);
//                 document.getElementById("hero").appendChild(m);
//                 $(m).animate({
//                           left:650,
//                           top:200+i*25,
//                           zIndex:i,
//                       });
//                     }
//               //       /////////////////////////////player3////////////////////////////////
//               for(var i=0;i<southArr.length;i++){
//                 m=document.getElementById(southArr[i]);
//                 document.getElementById("hero").appendChild(m);
//                 $(m).animate({
//                           left:150+i*30,
//                           top:750,
//                           zIndex:i,
                      
//                         }); 

//                         cardBtn = document.createElement("BUTTON");
//                         cardBtn.className="cardbutton";
//                         document.getElementById("hero").appendChild(cardBtn);
//                         document.getElementsByClassName("cardbutton")[i].setAttribute("id", btnSouth[i]);
//                         $(cardBtn).animate({
//                             left:150+i*30,
//                             top:750,
//                             zIndex:i,
                     
//                        }); 

                   
//                       }  

                        


//               //         /////////////////////////////player4////////////////////////////////
//               for(var i=0;i<westArr.length;i++){
//                 m=document.getElementById(westArr[i]);
//                 document.getElementById("hero").appendChild(m);
//                 $(m).animate({
//                   left:30,
//                   top:200+i*25,
//                           zIndex:i,
//                       });    }  

//                 }
//               }
//               var x1 = window.matchMedia("(max-width: 800px)");
//               media8(x1); // Call listener function at run time
//               x1.addListener(media8);
//     // media320
    
//     // media767
    
//     function media7(x) {
    
//         if (x.matches) {
//             // If media query matches
    
//             //       /////////////////////////////player1////////////////////////////////
    
    
//             for (var i = 0; i < northArr.length; i++) {
//                 m = document.getElementById(northArr[i]);
//                 document.getElementById("hero").appendChild(m);
//                 $(m).animate({
//                     left: 25 + i * 23,
//                     top: 70,
//                     zIndex: i,
//                 });
    
//             }
    
//             //         /////////////////////////////player2////////////////////////////////
//             for (var i = 0; i < eastArr.length; i++) {
//                 m = document.getElementById(eastArr[i]);
//                 document.getElementById("hero").appendChild(m);
//                 $(m).animate({
//                     left: 300,
//                     top: 145 + i * 23,
//                     zIndex: i,
//                 });
//             }
//             //       /////////////////////////////player3////////////////////////////////
//             for (var i = 0; i < southArr.length; i++) {
//                 m = document.getElementById(southArr[i]);
//                 document.getElementById("hero").appendChild(m);
//                 $(m).animate({
//                     left: 25 + i * 23,
//                     top: 510,
//                     zIndex: i,
    
//                 });
//                 cardBtn = document.createElement("BUTTON");
//                 cardBtn.className = "cardbutton";
//                 document.getElementById("hero").appendChild(cardBtn);
//                 document.getElementsByClassName("cardbutton")[i].setAttribute("id", btnSouth[i]);
//                 $(cardBtn).animate({
//                     left: 25 + i * 23,
//                     top: 510,
//                     zIndex: i,
    
//                 });
//             }
//             //         /////////////////////////////player4////////////////////////////////
//             for (var i = 0; i < westArr.length; i++) {
//                 m = document.getElementById(westArr[i]);
    
//                 document.getElementById("hero").appendChild(m);
    
//                 $(m).animate({
//                     left: 40,
//                     top: 145 + i * 23,
//                     zIndex: i
    
//                 });
//             }
//         }
    
//     }
//             var x = window.matchMedia("(max-width: 767px)");
//             media7(x); // Call listener function at run time
//             x.addListener(media7);
    
//             $(".cardbutton").click(function() {
//                 btnIndex = $(this).css('z-index');
//                 var getIndex = document.getElementById(southArr[btnIndex]);
            
//                 $(this).hide();
//                 $('#drag-three').append($(getIndex));
//                 coY = $('#drag-three').offset().top;
//                 coX = $('#drag-three').offset().left;
//                 $(getIndex).offset({
//                     top: coY,
//                     left: coX
//                 });
            
//                 $(".cardbutton").addClass("dis"); //disables
//                 // convert to json format
//                 var jsonResult = '[';
//                 jsonResult += '   {';
//                 jsonResult += '"player1"';
//                 jsonResult += ':{ "position" : " ';
//                 jsonResult += playerId;
//                 jsonResult += '" , "card" : "';
//                 jsonResult += southArr[btnIndex];
//                 jsonResult += '"}}]';
//                 jsonResult = jsonResult.replace(/\s/g, "");
//              //   console.log(jsonResult);
            
//             });
//     }
// }

function dist() {
    var dumy1 = [];
    var cardTemp = "";
// we handle tab according to its player position and card (position & clicks)
// changed the if condition from if(data[1] == 1) to this to handel the position from the clicked button on the table  reham 16/9/2019
    // games.on('id',function (data) {
    //     // player north
    //     if(  playerrr == "p1") {
    //         document.title = "Player 1";
    //         // if(data[1]==4){
    //         // distributecards();
    //         // }
    //     }
    //     // player east
    //     else if( playerrr == "p2") {
    //         document.title = "Player 2";
    //         // if(data[1]==4){
    //         //     distributecards();
    //         //     }
    //     }

    //     // player south
    //     else if(playerrr == "p3" ) {
    //         document.title = "Player 3";
    //         // if(data[1]==4){
    //         //     distributecards();
    //         //     }
    //     }
    //     // player west
    //     else if( playerrr == "p4") {
    //         document.title = "Player 4";
    //      //  if(data[1]==4){
    //    //         distributecards();
    //       //  }
    //         // southPosition();

    //     }
    //   });
    
    
      var dumy1 = [];
      var cardTemp = "";
      if (document.title == "Player 1") {
          // rearrange player position
          $('#oldNorth').attr('id', 'south');
          $('#oldEast').attr('id', 'west');
          $('#oldSouth').attr('id', 'north');
          $('#oldWest').attr('id', 'east');
          deck.cards.forEach(function(card, i) {
  
              cardTemp = card.$el.id;
              for (var y = 0; y < northArr.length; y++) {
                  if (northArr[y] == cardTemp) {
                      card.setSide('front');
                  }
              }
          });
          for (var i = 0; i < southArr.length; i++) {
              m = document.getElementById(southArr[i]);
              document.getElementById("north").appendChild(m);
              $(m).animate({
                  left: -200 + i * 30,
                  top: -370,
                  zIndex: i,
              });
          }
  
  
          for (var i = 0; i < westArr.length; i++) {
              m = document.getElementById(westArr[i]);
              document.getElementById("north").appendChild(m);
              $(m).addClass("dis"); //disables
              $(m).animate({
                  left: 350,
                  top: -250 + i * 30,
                  zIndex: i,
              });
          }
  
  
          for (var i = 0; i < northArr.length; i++) {
              m = document.getElementById(northArr[i]);
              document.getElementById("north").appendChild(m);
              $(m).addClass("dis"); //disables
              $(m).animate({
                  left: -200 + i * 30,
                  top: 170,
                  zIndex: i,
              });
          }
  
          for (var i = 0; i < eastArr.length; i++) {
              m = document.getElementById(eastArr[i]);
              document.getElementById("north").appendChild(m);
              $(m).addClass("dis"); //disables
              $(m).animate({
                  left: -350,
                  top: -250 + i * 30,
                  zIndex: i,
              });
          }
          //////////////////////////////////media query//////////////////////////////
          function media1024(x2) {
  
              if (x2.matches) { // If media query matches
                  //     
                  /////////////////////////////player1////////////////////////////////
                  for (var i = 0; i < northArr.length; i++) {
                      m = document.getElementById(northArr[i]);
                      document.getElementById("hero").appendChild(m);
                      $(m).animate({
                          left: 370 + i * 30,
                          top: 60,
                          zIndex: i,
                      });
                      cardBtn = document.createElement("BUTTON");
                      cardBtn.className = "cardbutton";
                      document.getElementById("hero").appendChild(cardBtn);
                      document.getElementsByClassName("cardbutton")[i].setAttribute("id", btnSouth[i]);
                      $(cardBtn).animate({
                          left: 370 + i * 30,
                          top: 60,
                          zIndex: i,
                      });
                  }
  
                  //         /////////////////////////////player2////////////////////////////////
                  for (var i = 0; i < eastArr.length; i++) {
                      m = document.getElementById(eastArr[i]);
                      document.getElementById("hero").appendChild(m);
                      $(m).animate({
                          left: 800,
                          top: 250 + i * 25,
                          zIndex: i,
                      });
                  }
                  //       /////////////////////////////player3////////////////////////////////
                  for (var i = 0; i < southArr.length; i++) {
                      m = document.getElementById(southArr[i]);
                      document.getElementById("hero").appendChild(m);
                      $(m).animate({
                          left: 370 + i * 30,
                          top: 750,
                          zIndex: i,
                      });
                  }
                  //////////////////////////////////////////player4////////////////////////////////
                  for (var i = 0; i < westArr.length; i++) {
                      m = document.getElementById(westArr[i]);
                      document.getElementById("hero").appendChild(m);
                      $(m).animate({
                          left: 280,
                          top: 250 + i * 25,
                          zIndex: i,
                      });
                  }
              }
          }
          var x2 = window.matchMedia("(max-width: 1024px)");
          media1024(x2); // Call listener function at run time
          x2.addListener(media1024);
  
          // media (800)
          function media8(x1) {
                                                      
              if (x1.matches) { // If media query matches
            //     
                 /////////////////////////////player1////////////////////////////////
            for(var i=0;i<northArr.length;i++){
              m=document.getElementById(northArr[i]);
              document.getElementById("hero").appendChild(m);
              $(m).animate({
                        left:150+i*30,
                        top:80,
                        zIndex:i,
                    });
  
  
                    cardBtn = document.createElement("BUTTON");
                    cardBtn.className="cardbutton";
                    document.getElementById("hero").appendChild(cardBtn);
                    document.getElementsByClassName("cardbutton")[i].setAttribute("id", btnSouth[i]);
                    $(cardBtn).animate({
                     left:150+i*30,
                     top:80,
                     zIndex:i,
                 
                   }); 
  
             }
               
            //         /////////////////////////////player2////////////////////////////////
            for(var i=0;i<eastArr.length;i++){
              m=document.getElementById(eastArr[i]);
              document.getElementById("hero").appendChild(m);
              $(m).animate({
                        left:650,
                        top:200+i*25,
                        zIndex:i,
                    });
                  }
            //       /////////////////////////////player3////////////////////////////////
            for(var i=0;i<southArr.length;i++){
              m=document.getElementById(southArr[i]);
              document.getElementById("hero").appendChild(m);
              $(m).animate({
                        left:150+i*30,
                        top:750,
                        zIndex:i,
                    
                      }); 
  
                     
                 
                    }  
  
            //         /////////////////////////////player4////////////////////////////////
            for(var i=0;i<westArr.length;i++){
              m=document.getElementById(westArr[i]);
              document.getElementById("hero").appendChild(m);
              $(m).animate({
                left:30,
                top:200+i*25,
                        zIndex:i,
                    });    }  
  
              }
            }
            var x1 = window.matchMedia("(max-width: 800px)");
            media8(x1); // Call listener function at run time
            x1.addListener(media8);
          // media320
  
          // media767
  
          function media7(x) {
  
              if (x.matches) {
                  // If media query matches
  
                  //       /////////////////////////////player1////////////////////////////////
  
  
                  for (var i = 0; i < northArr.length; i++) {
                      m = document.getElementById(northArr[i]);
                      document.getElementById("hero").appendChild(m);
                      $(m).animate({
                          left: 25 + i * 23,
                          top: 70,
                          zIndex: i,
                      });
                      cardBtn = document.createElement("BUTTON");
                      cardBtn.className = "cardbutton";
                      document.getElementById("hero").appendChild(cardBtn);
                      document.getElementsByClassName("cardbutton")[i].setAttribute("id", btnSouth[i]);
                      $(cardBtn).animate({
                          left: 25 + i * 23,
                          top: 70,
                          zIndex: i,
  
                      });
  
                  }
  
                  //         /////////////////////////////player2////////////////////////////////
                  for (var i = 0; i < eastArr.length; i++) {
                      m = document.getElementById(eastArr[i]);
                      document.getElementById("hero").appendChild(m);
                      $(m).animate({
                          left: 300,
                          top: 145 + i * 23,
                          zIndex: i,
                      });
                  }
                  //       /////////////////////////////player3////////////////////////////////
                  for (var i = 0; i < southArr.length; i++) {
                      m = document.getElementById(southArr[i]);
                      document.getElementById("hero").appendChild(m);
                      $(m).animate({
                          left: 25 + i * 23,
                          top: 510,
                          zIndex: i,
  
                      });
                  }
                  //         /////////////////////////////player4////////////////////////////////
                  for (var i = 0; i < westArr.length; i++) {
                      m = document.getElementById(westArr[i]);
  
                      document.getElementById("hero").appendChild(m);
  
                      $(m).animate({
                          left: 40,
                          top: 145 + i * 23,
                          zIndex: i
  
                      });
                  }
              }
  
          }
          var x = window.matchMedia("(max-width: 767px)");
          media7(x); // Call listener function at run time
          x.addListener(media7);
  
          
  
          $(".cardbutton").click(function() {
              btnIndex = $(this).css('z-index');
              var getIndex = document.getElementById(northArr[btnIndex]);
  
              $(this).hide();
              $('#drag-two').append($(getIndex));
              coY = $('#drag-two').offset().top;
              coX = $('#drag-two').offset().left;
              $(getIndex).offset({
                  top: coY,
                  left: coX
              });
  
              $(".cardbutton").addClass("dis"); //disables
              // convert to json format
              var jsonResult = '[';
              jsonResult += '   {';
              jsonResult += '"player1"';
              jsonResult += ':{ "position" : " ';
              jsonResult += playerId;
              jsonResult += '" , "card" : "';
              jsonResult += southArr[btnIndex];
              jsonResult += '"}}]';
              jsonResult = jsonResult.replace(/\s/g, "");
             // console.log(jsonResult);
  
          });
      } else if (document.title == "Player 2") {
          // rearrange player position
          $('#oldNorth').attr('id', 'west');
          $('#oldEast').attr('id', 'north');
          $('#oldSouth').attr('id', 'east');
          $('#oldWest').attr('id', 'south');
  
          deck.cards.forEach(function(card, i) { 
                  cardTemp = card.$el.id;
                  for(var y=0;y<eastArr.length;y++){
                      if (eastArr[y]==cardTemp) {
                          card.setSide('front');
                      } 
              }
              });
              for (var i = 0; i < westArr.length; i++) {
                  m = document.getElementById(westArr[i]);
                  document.getElementById("east").appendChild(m);
                  $(m).addClass("dis"); //disables
                  $(m).animate({
                      left: -200 + i * 30,
                      top: -370,
                      zIndex: i,
                  });
              }
          
          
              for (var i = 0; i < northArr.length; i++) {
                  m = document.getElementById(northArr[i]);
                  document.getElementById("east").appendChild(m);
                  $(m).animate({
                      left: 350,
                      top: -250 + i * 30,
                      zIndex: i,
                  });
              }
          
          
              for (var i = 0; i < eastArr.length; i++) {
                  m = document.getElementById(eastArr[i]);
                  document.getElementById("east").appendChild(m);
                  $(m).addClass("dis"); //disables
                  $(m).animate({
                      left: -200 + i * 30,
                      top: 170,
                      zIndex: i,
                  });
              }
          
              for (var i = 0; i < southArr.length; i++) {
                  m = document.getElementById(southArr[i]);
                  document.getElementById("east").appendChild(m);
                  $(m).addClass("dis"); //disables
                  $(m).animate({
                      left: -350,
                      top: -250 + i * 30,
                      zIndex: i,
                  });
              }
  /*
              socket.on('oncard1',function(data){
                  console.log(data);
                              });
  */
       games.on('result3',function(data){
      console.log("resuuuuuuuuuuuuuult");
  });
  
              // ////////////////////////////////media query///////////////////////////////////////////////////
          function media1024(x2) {
  
              if (x2.matches) { // If media query matches
                  //     
                  /////////////////////////////player1////////////////////////////////
                  for (var i = 0; i < northArr.length; i++) {
                      m = document.getElementById(northArr[i]);
                      document.getElementById("hero").appendChild(m);
                      $(m).animate({
                          left: 370 + i * 30,
                          top: 60,
                          zIndex: i,
                      });
                  }
      
                  //         /////////////////////////////player2////////////////////////////////
                  for (var i = 0; i < eastArr.length; i++) {
                      m = document.getElementById(eastArr[i]);
                      document.getElementById("hero").appendChild(m);
                      $(m).animate({
                          left: 800,
                          top: 250 + i * 25,
                          zIndex: i,
                      });
                      cardBtn = document.createElement("BUTTON");
                      cardBtn.className = "cardbutton";
                      document.getElementById("hero").appendChild(cardBtn);
                      document.getElementsByClassName("cardbutton")[i].setAttribute("id", btnSouth[i]);
                      $(cardBtn).animate({
                          left: 800 ,
                          top: 250 + i * 25,
                          zIndex: i,
                      });
                  }
                  //       /////////////////////////////player3////////////////////////////////
                  for (var i = 0; i < southArr.length; i++) {
                      m = document.getElementById(southArr[i]);
                      document.getElementById("hero").appendChild(m);
                      $(m).animate({
                          left: 370 + i * 30,
                          top: 750,
                          zIndex: i,
                      });
                  }
                  //////////////////////////////////////////player4////////////////////////////////
                  for (var i = 0; i < westArr.length; i++) {
                      m = document.getElementById(westArr[i]);
                      document.getElementById("hero").appendChild(m);
                      $(m).animate({
                          left: 280,
                          top: 250 + i * 25,
                          zIndex: i,
                      });
                  }
              }
          }
          var x2 = window.matchMedia("(max-width: 1024px)");
          media1024(x2); // Call listener function at run time
          x2.addListener(media1024);
  
          // media (800)
          function media8(x1) {
                                                      
              if (x1.matches) { // If media query matches
            //     
                 /////////////////////////////player1////////////////////////////////
            for(var i=0;i<northArr.length;i++){
              m=document.getElementById(northArr[i]);
              document.getElementById("hero").appendChild(m);
              $(m).animate({
                        left:150+i*30,
                        top:80,
                        zIndex:i,
                    });
             }
               
            //         /////////////////////////////player2////////////////////////////////
            for(var i=0;i<eastArr.length;i++){
              m=document.getElementById(eastArr[i]);
              document.getElementById("hero").appendChild(m);
              $(m).animate({
                        left:650,
                        top:200+i*25,
                        zIndex:i,
                    });
  
                    cardBtn = document.createElement("BUTTON");
                    cardBtn.className="cardbutton";
                    document.getElementById("hero").appendChild(cardBtn);
                    document.getElementsByClassName("cardbutton")[i].setAttribute("id", btnSouth[i]);
                    $(cardBtn).animate({
                      left:650,
                      top:200+i*25,
                      zIndex:i,
                 
                   }); 
                  }
            //       /////////////////////////////player3////////////////////////////////
            for(var i=0;i<southArr.length;i++){
              m=document.getElementById(southArr[i]);
              document.getElementById("hero").appendChild(m);
              $(m).animate({
                        left:150+i*30,
                        top:750,
                        zIndex:i,
                    
                      }); 
  
                    
  
                 
                    }  
            //         /////////////////////////////player4////////////////////////////////
            for(var i=0;i<westArr.length;i++){
              m=document.getElementById(westArr[i]);
              document.getElementById("hero").appendChild(m);
              $(m).animate({
                left:30,
                top:200+i*25,
                        zIndex:i,
                    });    }  
  
              }
            }
            var x1 = window.matchMedia("(max-width: 800px)");
            media8(x1); // Call listener function at run time
            x1.addListener(media8);
  
  // media320
  
  // media767
  
  function media7(x) {
  
      if (x.matches) {
          // If media query matches
  
          //       /////////////////////////////player1////////////////////////////////
  
  
          for (var i = 0; i < northArr.length; i++) {
              m = document.getElementById(northArr[i]);
              document.getElementById("hero").appendChild(m);
              $(m).animate({
                  left: 25 + i * 23,
                  top: 70,
                  zIndex: i,
              });
  
          }
  
          //         /////////////////////////////player2////////////////////////////////
          for (var i = 0; i < eastArr.length; i++) {
              m = document.getElementById(eastArr[i]);
              document.getElementById("hero").appendChild(m);
              $(m).animate({
                  left: 300,
                  top: 145 + i * 23,
                  zIndex: i,
              });
              cardBtn = document.createElement("BUTTON");
              cardBtn.className = "cardbutton";
              document.getElementById("hero").appendChild(cardBtn);
              document.getElementsByClassName("cardbutton")[i].setAttribute("id", btnSouth[i]);
              $(cardBtn).animate({
                  left: 300,
                  top: 145 + i * 23,
                  zIndex: i,
  
              });
          }
          //       /////////////////////////////player3////////////////////////////////
          for (var i = 0; i < southArr.length; i++) {
              m = document.getElementById(southArr[i]);
              document.getElementById("hero").appendChild(m);
              $(m).animate({
                  left: 25 + i * 23,
                  top: 510,
                  zIndex: i
  
              });
          }
          //         /////////////////////////////player4////////////////////////////////
          for (var i = 0; i < westArr.length; i++) {
              m = document.getElementById(westArr[i]);
  
              document.getElementById("hero").appendChild(m);
  
              $(m).animate({
                  left: 40,
                  top: 145 + i * 23,
                  zIndex: i
  
              });
          }
      }
  
  }
          var x = window.matchMedia("(max-width: 767px)");
          media7(x); // Call listener function at run time
          x.addListener(media7);
  
          $(".cardbutton").click(function() {
              btnIndex = $(this).css('z-index');
              var getIndex = document.getElementById(eastArr[btnIndex]);
          
              $(this).hide();
              $('#dragMedia').append($(getIndex));
              coY = $('#dragMedia').offset().top;
              coX = $('#dragMedia').offset().left;
              $(getIndex).offset({
                  top: coY,
                  left: coX
              });
          
              $(".cardbutton").addClass("dis"); //disables
              // convert to json format
              var jsonResult = '[';
              jsonResult += '   {';
              jsonResult += '"player1"';
              jsonResult += ':{ "position" : " ';
              jsonResult += playerId;
              jsonResult += '" , "card" : "';
              jsonResult += southArr[btnIndex];
              jsonResult += '"}}]';
              jsonResult = jsonResult.replace(/\s/g, "");
        //      console.log(jsonResult);
          
          });
      } else if (document.title == "Player 3") {
          $('#oldNorth').attr('id', 'north');
          $('#oldEast').attr('id', 'east');
          $('#oldSouth').attr('id', 'south');
          $('#oldWest').attr('id', 'west');
           deck.cards.forEach(function(card, i) { 
                  
                  cardTemp = card.$el.id;
                  for(var y=0;y<southArr.length;y++){
                      if (southArr[y]==cardTemp) {
                          card.setSide('front');
                      } 
              }
              });
              for (var i = 0; i < northArr.length; i++) {
                  m = document.getElementById(northArr[i]);
                  document.getElementById("south").appendChild(m);
                  $(m).addClass("dis"); //disables
                  $(m).animate({
                      left: -200 + i * 30,
                      top: -370,
                      zIndex: i,
                  });
              }
          
          
              for (var i = 0; i < eastArr.length; i++) {
                  m = document.getElementById(eastArr[i]);
                  document.getElementById("south").appendChild(m);
                  $(m).addClass("dis"); //disables
                  $(m).animate({
                      left: 350,
                      top: -250 + i * 30,
                      zIndex: i,
                  });
              }
          
          
              for (var i = 0; i < southArr.length; i++) {
                  m = document.getElementById(southArr[i]);
                  document.getElementById("south").appendChild(m);
                  $(m).animate({
                      left: -200 + i * 30,
                      top: 170,
                      zIndex: i,
                  });
              }
          
              for (var i = 0; i < westArr.length; i++) {
                  m = document.getElementById(westArr[i]);
                  document.getElementById("south").appendChild(m);
                  $(m).addClass("dis"); //disables
                  $(m).animate({
                      left: -350,
                      top: -250 + i * 30,
                      zIndex: i,
                  });
              }
  /*
              socket.on('oncard1',function(data){
                  console.log(data);
                              });
  */
            
              function media1024(x2) {
  
                  if (x2.matches) { // If media query matches
                      //     
                      /////////////////////////////player1////////////////////////////////
                      for (var i = 0; i < northArr.length; i++) {
                          m = document.getElementById(northArr[i]);
                          document.getElementById("hero").appendChild(m);
                          $(m).animate({
                              left: 370 + i * 30,
                              top: 60,
                              zIndex: i,
                          });
                      }
          
                      //         /////////////////////////////player2////////////////////////////////
                      for (var i = 0; i < eastArr.length; i++) {
                          m = document.getElementById(eastArr[i]);
                          document.getElementById("hero").appendChild(m);
                          $(m).animate({
                              left: 800,
                              top: 250 + i * 25,
                              zIndex: i,
                          });
                      }
                      //       /////////////////////////////player3////////////////////////////////
                      for (var i = 0; i < southArr.length; i++) {
                          m = document.getElementById(southArr[i]);
                          document.getElementById("hero").appendChild(m);
                          $(m).animate({
                              left: 370 + i * 30,
                              top: 750,
                              zIndex: i,
                          });
                          cardBtn = document.createElement("BUTTON");
                          cardBtn.className = "cardbutton";
                          document.getElementById("hero").appendChild(cardBtn);
                          document.getElementsByClassName("cardbutton")[i].setAttribute("id", btnSouth[i]);
                          $(cardBtn).animate({
                              left: 370 + i * 30,
                              top: 750,
                              zIndex: i,
                          });
                      }
                      //////////////////////////////////////////player4////////////////////////////////
                      for (var i = 0; i < westArr.length; i++) {
                          m = document.getElementById(westArr[i]);
                          document.getElementById("hero").appendChild(m);
                          $(m).animate({
                              left: 280,
                              top: 250 + i * 25,
                              zIndex: i,
                          });
                      }
                  }
              }
              var x2 = window.matchMedia("(max-width: 1024px)");
              media1024(x2); // Call listener function at run time
              x2.addListener(media1024);
      
              // media (800)
      function media8(x1) {
                                                      
                  if (x1.matches) { // If media query matches
                //     
                     /////////////////////////////player1////////////////////////////////
                for(var i=0;i<northArr.length;i++){
                  m=document.getElementById(northArr[i]);
                  document.getElementById("hero").appendChild(m);
                  $(m).animate({
                            left:150+i*30,
                            top:80,
                            zIndex:i,
                        });
                 }
                   
                //         /////////////////////////////player2////////////////////////////////
                for(var i=0;i<eastArr.length;i++){
                  m=document.getElementById(eastArr[i]);
                  document.getElementById("hero").appendChild(m);
                  $(m).animate({
                            left:650,
                            top:200+i*25,
                            zIndex:i,
                        });
                      }
                //       /////////////////////////////player3////////////////////////////////
                for(var i=0;i<southArr.length;i++){
                  m=document.getElementById(southArr[i]);
                  document.getElementById("hero").appendChild(m);
                  $(m).animate({
                            left:150+i*30,
                            top:750,
                            zIndex:i,
                        
                          }); 
  
                          cardBtn = document.createElement("BUTTON");
                          cardBtn.className="cardbutton";
                          document.getElementById("hero").appendChild(cardBtn);
                          document.getElementsByClassName("cardbutton")[i].setAttribute("id", btnSouth[i]);
                          $(cardBtn).animate({
                              left:150+i*30,
                              top:750,
                              zIndex:i,
                       
                         }); 
  
                     
                        }  
  
                          
  
  
                //         /////////////////////////////player4////////////////////////////////
                for(var i=0;i<westArr.length;i++){
                  m=document.getElementById(westArr[i]);
                  document.getElementById("hero").appendChild(m);
                  $(m).animate({
                    left:30,
                    top:200+i*25,
                            zIndex:i,
                        });    }  
  
                  }
                }
                var x1 = window.matchMedia("(max-width: 800px)");
                media8(x1); // Call listener function at run time
                x1.addListener(media8);
      // media320
      
      // media767
      
      function media7(x) {
      
          if (x.matches) {
              // If media query matches
      
              //       /////////////////////////////player1////////////////////////////////
      
      
              for (var i = 0; i < northArr.length; i++) {
                  m = document.getElementById(northArr[i]);
                  document.getElementById("hero").appendChild(m);
                  $(m).animate({
                      left: 25 + i * 23,
                      top: 70,
                      zIndex: i,
                  });
      
              }
      
              //         /////////////////////////////player2////////////////////////////////
              for (var i = 0; i < eastArr.length; i++) {
                  m = document.getElementById(eastArr[i]);
                  document.getElementById("hero").appendChild(m);
                  $(m).animate({
                      left: 300,
                      top: 145 + i * 23,
                      zIndex: i,
                  });
              }
              //       /////////////////////////////player3////////////////////////////////
              for (var i = 0; i < southArr.length; i++) {
                  m = document.getElementById(southArr[i]);
                  document.getElementById("hero").appendChild(m);
                  $(m).animate({
                      left: 25 + i * 23,
                      top: 510,
                      zIndex: i,
      
                  });
                  cardBtn = document.createElement("BUTTON");
                  cardBtn.className = "cardbutton";
                  document.getElementById("hero").appendChild(cardBtn);
                  document.getElementsByClassName("cardbutton")[i].setAttribute("id", btnSouth[i]);
                  $(cardBtn).animate({
                      left: 25 + i * 23,
                      top: 510,
                      zIndex: i,
      
                  });
              }
              //         /////////////////////////////player4////////////////////////////////
              for (var i = 0; i < westArr.length; i++) {
                  m = document.getElementById(westArr[i]);
      
                  document.getElementById("hero").appendChild(m);
      
                  $(m).animate({
                      left: 40,
                      top: 145 + i * 23,
                      zIndex: i
      
                  });
              }
          }
      
      }
              var x = window.matchMedia("(max-width: 767px)");
              media7(x); // Call listener function at run time
              x.addListener(media7);
      
              $(".cardbutton").click(function() {
                  btnIndex = $(this).css('z-index');
                  var getIndex = document.getElementById(southArr[btnIndex]);
              
                  $(this).hide();
                  $('#drag-three').append($(getIndex));
                  coY = $('#drag-three').offset().top;
                  coX = $('#drag-three').offset().left;
                  $(getIndex).offset({
                      top: coY,
                      left: coX
                  });
              
                  $(".cardbutton").addClass("dis"); //disables
                  // convert to json format
                  var jsonResult = '[';
                  jsonResult += '   {';
                  jsonResult += '"player1"';
                  jsonResult += ':{ "position" : " ';
                  jsonResult += playerId;
                  jsonResult += '" , "card" : "';
                  jsonResult += southArr[btnIndex];
                  jsonResult += '"}}]';
                  jsonResult = jsonResult.replace(/\s/g, "");
               //   console.log(jsonResult);
              
              });
      }
      else if (document.title == "Player 4")
      {
        $('#oldNorth').attr('id', 'east');
        $('#oldEast').attr('id', 'south');
        $('#oldSouth').attr('id', 'west');
        $('#oldWest').attr('id', 'north');
    
        deck.cards.forEach(function(card, i) { 
            
            cardTemp = card.$el.id;
            for(var y=0;y<westArr.length;y++){
                if (westArr[y]==cardTemp) {
                    card.setSide('front');
                } 
        }
        });
        for (var i = 0; i < eastArr.length; i++) {
            m = document.getElementById(eastArr[i]);
            document.getElementById("west").appendChild(m);
            $(m).addClass("dis"); //disables
            $(m).animate({
                left: -200 + i * 30,
                top: -370,
                zIndex: i,
            });
        }
    
    
        for (var i = 0; i < southArr.length; i++) {
            m = document.getElementById(southArr[i]);
            document.getElementById("west").appendChild(m);
            $(m).addClass("dis"); //disables
            $(m).animate({
                left: 350,
                top: -250 + i * 30,
                zIndex: i,
            });
        }
    
    
        for (var i = 0; i < westArr.length; i++) {
            m = document.getElementById(westArr[i]);
            document.getElementById("west").appendChild(m);
            $(m).addClass("dis"); //disables
            $(m).animate({
                left: -200 + i * 30,
                top: 170,
                zIndex: i,
            });
        }
    
        for (var i = 0; i < northArr.length; i++) {
            m = document.getElementById(northArr[i]);
            document.getElementById("west").appendChild(m);
            $(m).animate({
                left: -350,
                top: -250 + i * 30,
                zIndex: i,
            });
        }
    ////////////////////////////////media query///////////////////////////////////////////////////
    //  function media1280(x2) {
    
    //     if (x2.matches) { // If media query matches
    //         //     
    //         /////////////////////////////player1////////////////////////////////
    //         $('#temp').attr('id', 'temp-1280');
    
    //         for (var i = 0; i < northArr.length; i++) {
    //             m = document.getElementById(northArr[i]);
    //             document.getElementById("temp-1280").appendChild(m);
    //             $(m).animate({
    //                 left: 370 + i * 30,
    //                 top: 60,
    //                 zIndex: i,
    //             });
    //         }
    
    //         //         /////////////////////////////player2////////////////////////////////
    //         for (var i = 0; i < eastArr.length; i++) {
    //             m = document.getElementById(eastArr[i]);
    //             document.getElementById("temp-1280").appendChild(m);
    //             $(m).animate({
    //                 left: 800,
    //                 top: 250 + i * 25,
    //                 zIndex: i,
    //             });
    //         }
    //         //       /////////////////////////////player3////////////////////////////////
    //         for (var i = 0; i < southArr.length; i++) {
    //             m = document.getElementById(southArr[i]);
    //             document.getElementById("temp-1280").appendChild(m);
    //             $(m).animate({
    //                 left: 370 + i * 30,
    //                 top: 750,
    //                 zIndex: i,
    //             });
    //         }
    //         //////////////////////////////////////////player4////////////////////////////////
    //         for (var i = 0; i < westArr.length; i++) {
    //             m = document.getElementById(westArr[i]);
    //             document.getElementById("temp-1280").appendChild(m);
    //             $(m).animate({
    //                 left: 280,
    //                 top: 250 + i * 25,
    //                 zIndex: i
    //             });
    //             cardBtn = document.createElement("BUTTON");
    //             cardBtn.className = "cardbutton";
    //             document.getElementById("temp-1280").appendChild(cardBtn);
    //             document.getElementsByClassName("cardbutton")[i].setAttribute("id", btnSouth[i]);
    //             $(cardBtn).animate({
    //                 left: 280,
    //                 top: 250 + i * 25,
    //                 zIndex: i
    //             });
    //         }
    //     }
    // }
    // var x2 = window.matchMedia("(min-width:1800px)");
    // media1280(x2); // Call listener function at run time
    // x2.addListener(media1280);
    
    
    
    
    
    
    //    ////////////////////////////////media query///////////////////////////////////////////////////
    //    function media1600(x2) {
    
    //     if (x2.matches) { // If media query matches
    //         //     
    //         /////////////////////////////player1////////////////////////////////
    //         $('#temp').attr('id', 'temp-1600');
    
    //         for (var i = 0; i < northArr.length; i++) {
    //             m = document.getElementById(northArr[i]);
    //             document.getElementById("temp-1600").appendChild(m);
    //             $(m).animate({
    //                 left: 370 + i * 30,
    //                 top: 60,
    //                 zIndex: i,
    //             });
    //         }
    
    //         //         /////////////////////////////player2////////////////////////////////
    //         for (var i = 0; i < eastArr.length; i++) {
    //             m = document.getElementById(eastArr[i]);
    //             document.getElementById("temp-1600").appendChild(m);
    //             $(m).animate({
    //                 left: 800,
    //                 top: 250 + i * 25,
    //                 zIndex: i,
    //             });
    //         }
    //         //       /////////////////////////////player3////////////////////////////////
    //         for (var i = 0; i < southArr.length; i++) {
    //             m = document.getElementById(southArr[i]);
    //             document.getElementById("temp-1600").appendChild(m);
    //             $(m).animate({
    //                 left: 370 + i * 30,
    //                 top: 750,
    //                 zIndex: i,
    //             });
    //         }
    //         //////////////////////////////////////////player4////////////////////////////////
    //         for (var i = 0; i < westArr.length; i++) {
    //             m = document.getElementById(westArr[i]);
    //             document.getElementById("temp-1600").appendChild(m);
    //             $(m).animate({
    //                 left: 280,
    //                 top: 250 + i * 25,
    //                 zIndex: i
    //             });
    //             cardBtn = document.createElement("BUTTON");
    //             cardBtn.className = "cardbutton";
    //             document.getElementById("temp-1600").appendChild(cardBtn);
    //             document.getElementsByClassName("cardbutton")[i].setAttribute("id", btnSouth[i]);
    //             $(cardBtn).animate({
    //                 left: 280,
    //                 top: 250 + i * 25,
    //                 zIndex: i
    //             });
    //         }
    //     }
    // }
    // var x2 = window.matchMedia("(min-width:1700px)");
    // media1600(x2); // Call listener function at run time
    // x2.addListener(media1600);
    
    
    
    
    // //              // ////////////////////////////////media query///////////////////////////////////////////////////
    //         function media1300(x2) {
    
    //             if (x2.matches) { // If media query matches
    //                 //     
    //                 /////////////////////////////player1////////////////////////////////
    //                 $('#temp').attr('id', 'temp-1024');
    
    //                 for (var i = 0; i < northArr.length; i++) {
    //                     m = document.getElementById(northArr[i]);
    //                     document.getElementById("temp-1024").appendChild(m);
    //                     $(m).animate({
    //                         left: 370 + i * 30,
    //                         top: 60,
    //                         zIndex: i,
    //                     });
    //                 }
    
    //                 //         /////////////////////////////player2////////////////////////////////
    //                 for (var i = 0; i < eastArr.length; i++) {
    //                     m = document.getElementById(eastArr[i]);
    //                     document.getElementById("temp-1024").appendChild(m);
    //                     $(m).animate({
    //                         left: 800,
    //                         top: 250 + i * 25,
    //                         zIndex: i,
    //                     });
    //                 }
    //                 //       /////////////////////////////player3////////////////////////////////
    //                 for (var i = 0; i < southArr.length; i++) {
    //                     m = document.getElementById(southArr[i]);
    //                     document.getElementById("temp-1024").appendChild(m);
    //                     $(m).animate({
    //                         left: 370 + i * 30,
    //                         top: 750,
    //                         zIndex: i,
    //                     });
    //                 }
    //                 //////////////////////////////////////////player4////////////////////////////////
    //                 for (var i = 0; i < westArr.length; i++) {
    //                     m = document.getElementById(westArr[i]);
    //                     document.getElementById("temp-1024").appendChild(m);
    //                     $(m).animate({
    //                         left: 280,
    //                         top: 250 + i * 25,
    //                         zIndex: i
    //                     });
    //                     cardBtn = document.createElement("BUTTON");
    //                     cardBtn.className = "cardbutton";
    //                     document.getElementById("temp-1024").appendChild(cardBtn);
    //                     document.getElementsByClassName("cardbutton")[i].setAttribute("id", btnSouth[i]);
    //                     $(cardBtn).animate({
    //                         left: 280,
    //                         top: 250 + i * 25,
    //                         zIndex: i
    //                     });
    //                 }
    //             }
    //         }
    //         var x2 = window.matchMedia("(max-width:1024px)");
    //         media1300(x2); // Call listener function at run time
    //         x2.addListener(media1024);
    
    
         // ////////////////////////////////media query///////////////////////////////////////////////////
    function media1024(x2) {
    
        if (x2.matches) { // If media query matches
            //     
            /////////////////////////////player1////////////////////////////////
            for (var i = 0; i < northArr.length; i++) {
                m = document.getElementById(northArr[i]);
                document.getElementById("hero").appendChild(m);
                $(m).animate({
                    left: 370 + i * 30,
                    top: 60,
                    zIndex: i,
                });
            }
    
            //         /////////////////////////////player2////////////////////////////////
            for (var i = 0; i < eastArr.length; i++) {
                m = document.getElementById(eastArr[i]);
                document.getElementById("hero").appendChild(m);
                $(m).animate({
                    left: 800,
                    top: 250 + i * 25,
                    zIndex: i,
                });
            }
            //       /////////////////////////////player3////////////////////////////////
            for (var i = 0; i < southArr.length; i++) {
                m = document.getElementById(southArr[i]);
                document.getElementById("hero").appendChild(m);
                $(m).animate({
                    left: 370 + i * 30,
                    top: 750,
                    zIndex: i,
                });
            }
            //////////////////////////////////////////player4////////////////////////////////
            for (var i = 0; i < westArr.length; i++) {
                m = document.getElementById(westArr[i]);
                document.getElementById("hero").appendChild(m);
                $(m).animate({
                    left: 280,
                    top: 250 + i * 25,
                    zIndex: i
                });
                cardBtn = document.createElement("BUTTON");
                cardBtn.className = "cardbutton";
                document.getElementById("hero").appendChild(cardBtn);
                document.getElementsByClassName("cardbutton")[i].setAttribute("id", btnSouth[i]);
                $(cardBtn).animate({
                    left: 280,
                    top: 250 + i * 25,
                    zIndex: i
                });
            }
        }
    }
    var x2 = window.matchMedia("(max-width: 1024px)");
    media1024(x2); // Call listener function at run time
    x2.addListener(media1024);
    
    // media (800)
    function media8(x1) {
                                                
        if (x1.matches) { // If media query matches
      //     
           /////////////////////////////player1////////////////////////////////
      for(var i=0;i<northArr.length;i++){
        m=document.getElementById(northArr[i]);
        document.getElementById("hero").appendChild(m);
        $(m).animate({
                  left:150+i*30,
                  top:80,
                  zIndex:i,
              });
       }
         
      //         /////////////////////////////player2////////////////////////////////
      for(var i=0;i<eastArr.length;i++){
        m=document.getElementById(eastArr[i]);
        document.getElementById("hero").appendChild(m);
        $(m).animate({
                  left:650,
                  top:200+i*25,
                  zIndex:i,
              });
            }
      //       /////////////////////////////player3////////////////////////////////
      for(var i=0;i<southArr.length;i++){
        m=document.getElementById(southArr[i]);
        document.getElementById("hero").appendChild(m);
        $(m).animate({
                  left:150+i*30,
                  top:750,
                  zIndex:i,
              
                }); 
              }  
      //         /////////////////////////////player4////////////////////////////////
      for(var i=0;i<westArr.length;i++){
        m=document.getElementById(westArr[i]);
        document.getElementById("hero").appendChild(m);
        $(m).animate({
          left:30,
          top:200+i*25,
                  zIndex:i,
              }); 
            
              cardBtn = document.createElement("BUTTON");
                cardBtn.className="cardbutton";
                document.getElementById("hero").appendChild(cardBtn);
                document.getElementsByClassName("cardbutton")[i].setAttribute("id", btnSouth[i]);
                $(cardBtn).animate({
                    left:30,
                    top:200+i*25,
                            zIndex:i,
             
               }); 
            }  
    
        }
      }
      var x1 = window.matchMedia("(max-width: 800px)");
      media8(x1); // Call listener function at run time
      x1.addListener(media8);
    // media320
    
    // media767
    
    function media7(x) {
    
    if (x.matches) {
    // If media query matches
    
    //       /////////////////////////////player1////////////////////////////////
    
    
    for (var i = 0; i < northArr.length; i++) {
        m = document.getElementById(northArr[i]);
        document.getElementById("hero").appendChild(m);
        $(m).animate({
            left: 25 + i * 23,
            top: 70,
            zIndex: i,
        });
    
    }
    
    //         /////////////////////////////player2////////////////////////////////
    for (var i = 0; i < eastArr.length; i++) {
        m = document.getElementById(eastArr[i]);
        document.getElementById("hero").appendChild(m);
        $(m).animate({
            left: 300,
            top: 145 + i * 23,
            zIndex: i,
        });
    }
    //       /////////////////////////////player3////////////////////////////////
    for (var i = 0; i < southArr.length; i++) {
        m = document.getElementById(southArr[i]);
        document.getElementById("hero").appendChild(m);
        $(m).animate({
            left: 25 + i * 23,
            top: 510,
            zIndex: i
    
        });
    }
    //         /////////////////////////////player4////////////////////////////////
    for (var i = 0; i < westArr.length; i++) {
        m = document.getElementById(westArr[i]);
    
        document.getElementById("hero").appendChild(m);
    
        $(m).animate({
            left: 40,
            top: 145 + i * 23,
            zIndex: i
    
        });
        cardBtn = document.createElement("BUTTON");
        cardBtn.className = "cardbutton";
        document.getElementById("hero").appendChild(cardBtn);
        document.getElementsByClassName("cardbutton")[i].setAttribute("id", btnSouth[i]);
        $(cardBtn).animate({
            left: 40,
            top: 145 + i * 23,
            zIndex: i
    
        });
    }
    }
    
    }
    var x = window.matchMedia("(max-width: 767px)");
    media7(x); // Call listener function at run time
    x.addListener(media7);
    
    $(".cardbutton").click(function() {
        btnIndex = $(this).css('z-index');
        var getIndex = document.getElementById(westArr[btnIndex]);
    
        $(this).hide();
        $('#drag-one').append($(getIndex));
        coY = $('#drag-one').offset().top;
        coX = $('#drag-one').offset().left;
        $(getIndex).offset({
            top: coY,
            left: coX
        });
    
        $(".cardbutton").addClass("dis"); //disables
        // convert to json format
        var jsonResult = '[';
        jsonResult += '   {';
        jsonResult += '"player1"';
        jsonResult += ':{ "position" : " ';
        jsonResult += playerId;
        jsonResult += '" , "card" : "';
        jsonResult += southArr[btnIndex];
        jsonResult += '"}}]';
        jsonResult = jsonResult.replace(/\s/g, "");
    //    console.log(jsonResult);
    
    });
      }








   // console.log(cardidShuffle);
    // //convert to json format
}

// function trick
// var player1;         //north        player1.card
// var player2;         //east         player2.card
// var player3;         //south        player3.card
// var player4;         //west
var player;
/// thrown card from 4 tabs 

games.on('PlayedCardBroadcast',function(data){
    player = data;
    // var mainJSON = JSON.parse(jsonResult);
    // var objJSONplayer1 = mainJSON[0].player1 ; //here document.title instead of player1,player2....
    // console.log(objJSONplayer1.card);
                
    var PlayedCardJSON = JSON.parse(data);
    position = PlayedCardJSON[0].position;
    ClickedCard = PlayedCardJSON[0].card;
    cardsActivationBasedOnPlayer(PlayedCardJSON[0].position);
    // console.log(position);
    var ThrownCardID = PlayedCardJSON[0].card;
    // console.log(ThrownCardID);
    var ThrownCardIDElement = document.getElementById(ThrownCardID);
    $('#'+position).append($(ThrownCardIDElement));
    coY = $('#'+position).offset().top;
    coX = $('#'+position).offset().left;
    $(ThrownCardIDElement).offset({
        top: coY,
        left: coX
    });
    deck.cards.forEach(function(card, i) {           
        cardTemp = card.$el.id;
        //for(var y=0;y<westArr.length;y++){
            if (cardTemp==ThrownCardIDElement.id) {
                card.setSide('front');
            }
        //}
    });
    PlayedCardsArr.push(ThrownCardIDElement.id);
    if(PlayedCardsArr.length == 1) {
		//var FirstCardJson = '[{"Card":"' + PlayedCardsArr[0] + '","FirstPosition":"' + position + '"}]';
        //socket.emit('firstplayedcard',FirstCardJson); // 01 Commented by Khaled, Thier is no reason to use Sockets inside another socket 26-7-2019
		//firstplayedcardresult = JSON.parse(FirstCardJson);
		//var subSuit = firstplayedcardresult[0].Card.substr(2, 1);
		//var FirstPosition = firstplayedcardresult[0].FirstPosition;
		var subSuit = PlayedCardsArr[0].substr(2, 1);
		cardActivationBasedOnSuit("", position, subSuit);
	}
    if(PlayedCardsArr.length == 4) {
        
		ResetAfterTrick();
       // trick();
        trick(start,PlayedCardsArr,lastpid);
		PlayedCardsArr = []; // 02 Added by Khaled, We already in socket so we can clear the array here
        //socket.emit('PlayedCardsArr',PlayedCardsArr); // 02 Commented by Khaled 26-7-2019, Why we need that?!!!
    }
});




games.on('st',function(data){
start=data;
});

/*socket.on('firstplayedcardresult',function(data){ // 01 Commented by Khaled, Thier is no reason to use Sockets inside another socket 26-7-2019
    firstplayedcardresult = JSON.parse(data);
	var subSuit = firstplayedcardresult[0].Card.substr(2, 1);
    var FirstPosition = firstplayedcardresult[0].FirstPosition;
    cardActivationBasedOnSuit("", FirstPosition, subSuit);
});*/

/*socket.on('PlayedCardsArr2',function(data){ // 02 Commented by Khaled 26-7-2019, Why we need that?!!!
PlayedCardsArr=data;
});*/

games.on('broadcast2',function(data){
    console.log("card thrown from 2nd tab :"+data);
    player2 = data;
 //  trick();
});


games.on('broadcast3',function(data){
    console.log("card thrown from 3rd tab :"+data);
    player3 = data;
  // trick();
});


games.on('broadcast4',function(data){
    console.log("card thrown from 4th tab :"+data);
    player4 = data;
  // trick();
});



/*function distributecards()
{
 //   init_game();
    $('#oldNorth').attr('id', 'east');
    $('#oldEast').attr('id', 'south');
    $('#oldSouth').attr('id', 'west');
    $('#oldWest').attr('id', 'north');

    deck.cards.forEach(function(card, i) { 
        
        cardTemp = card.$el.id;
        for(var y=0;y<westArr.length;y++){
            if (westArr[y]==cardTemp) {
                card.setSide('front');
            } 
    }
    });
    for (var i = 0; i < eastArr.length; i++) {
        m = document.getElementById(eastArr[i]);
        document.getElementById("west").appendChild(m);
        $(m).addClass("dis"); //disables
        $(m).animate({
            left: -200 + i * 30,
            top: -370,
            zIndex: i,
        });
    }


    for (var i = 0; i < southArr.length; i++) {
        m = document.getElementById(southArr[i]);
        document.getElementById("west").appendChild(m);
        $(m).addClass("dis"); //disables
        $(m).animate({
            left: 350,
            top: -250 + i * 30,
            zIndex: i,
        });
    }


    for (var i = 0; i < westArr.length; i++) {
        m = document.getElementById(westArr[i]);
        document.getElementById("west").appendChild(m);
        $(m).addClass("dis"); //disables
        $(m).animate({
            left: -200 + i * 30,
            top: 170,
            zIndex: i,
        });
    }

    for (var i = 0; i < northArr.length; i++) {
        m = document.getElementById(northArr[i]);
        document.getElementById("west").appendChild(m);
        $(m).animate({
            left: -350,
            top: -250 + i * 30,
            zIndex: i,
        });
    }
////////////////////////////////media query///////////////////////////////////////////////////
//  function media1280(x2) {

//     if (x2.matches) { // If media query matches
//         //     
//         /////////////////////////////player1////////////////////////////////
//         $('#temp').attr('id', 'temp-1280');

//         for (var i = 0; i < northArr.length; i++) {
//             m = document.getElementById(northArr[i]);
//             document.getElementById("temp-1280").appendChild(m);
//             $(m).animate({
//                 left: 370 + i * 30,
//                 top: 60,
//                 zIndex: i,
//             });
//         }

//         //         /////////////////////////////player2////////////////////////////////
//         for (var i = 0; i < eastArr.length; i++) {
//             m = document.getElementById(eastArr[i]);
//             document.getElementById("temp-1280").appendChild(m);
//             $(m).animate({
//                 left: 800,
//                 top: 250 + i * 25,
//                 zIndex: i,
//             });
//         }
//         //       /////////////////////////////player3////////////////////////////////
//         for (var i = 0; i < southArr.length; i++) {
//             m = document.getElementById(southArr[i]);
//             document.getElementById("temp-1280").appendChild(m);
//             $(m).animate({
//                 left: 370 + i * 30,
//                 top: 750,
//                 zIndex: i,
//             });
//         }
//         //////////////////////////////////////////player4////////////////////////////////
//         for (var i = 0; i < westArr.length; i++) {
//             m = document.getElementById(westArr[i]);
//             document.getElementById("temp-1280").appendChild(m);
//             $(m).animate({
//                 left: 280,
//                 top: 250 + i * 25,
//                 zIndex: i
//             });
//             cardBtn = document.createElement("BUTTON");
//             cardBtn.className = "cardbutton";
//             document.getElementById("temp-1280").appendChild(cardBtn);
//             document.getElementsByClassName("cardbutton")[i].setAttribute("id", btnSouth[i]);
//             $(cardBtn).animate({
//                 left: 280,
//                 top: 250 + i * 25,
//                 zIndex: i
//             });
//         }
//     }
// }
// var x2 = window.matchMedia("(min-width:1800px)");
// media1280(x2); // Call listener function at run time
// x2.addListener(media1280);






//    ////////////////////////////////media query///////////////////////////////////////////////////
//    function media1600(x2) {

//     if (x2.matches) { // If media query matches
//         //     
//         /////////////////////////////player1////////////////////////////////
//         $('#temp').attr('id', 'temp-1600');

//         for (var i = 0; i < northArr.length; i++) {
//             m = document.getElementById(northArr[i]);
//             document.getElementById("temp-1600").appendChild(m);
//             $(m).animate({
//                 left: 370 + i * 30,
//                 top: 60,
//                 zIndex: i,
//             });
//         }

//         //         /////////////////////////////player2////////////////////////////////
//         for (var i = 0; i < eastArr.length; i++) {
//             m = document.getElementById(eastArr[i]);
//             document.getElementById("temp-1600").appendChild(m);
//             $(m).animate({
//                 left: 800,
//                 top: 250 + i * 25,
//                 zIndex: i,
//             });
//         }
//         //       /////////////////////////////player3////////////////////////////////
//         for (var i = 0; i < southArr.length; i++) {
//             m = document.getElementById(southArr[i]);
//             document.getElementById("temp-1600").appendChild(m);
//             $(m).animate({
//                 left: 370 + i * 30,
//                 top: 750,
//                 zIndex: i,
//             });
//         }
//         //////////////////////////////////////////player4////////////////////////////////
//         for (var i = 0; i < westArr.length; i++) {
//             m = document.getElementById(westArr[i]);
//             document.getElementById("temp-1600").appendChild(m);
//             $(m).animate({
//                 left: 280,
//                 top: 250 + i * 25,
//                 zIndex: i
//             });
//             cardBtn = document.createElement("BUTTON");
//             cardBtn.className = "cardbutton";
//             document.getElementById("temp-1600").appendChild(cardBtn);
//             document.getElementsByClassName("cardbutton")[i].setAttribute("id", btnSouth[i]);
//             $(cardBtn).animate({
//                 left: 280,
//                 top: 250 + i * 25,
//                 zIndex: i
//             });
//         }
//     }
// }
// var x2 = window.matchMedia("(min-width:1700px)");
// media1600(x2); // Call listener function at run time
// x2.addListener(media1600);




// //              // ////////////////////////////////media query///////////////////////////////////////////////////
//         function media1300(x2) {

//             if (x2.matches) { // If media query matches
//                 //     
//                 /////////////////////////////player1////////////////////////////////
//                 $('#temp').attr('id', 'temp-1024');

//                 for (var i = 0; i < northArr.length; i++) {
//                     m = document.getElementById(northArr[i]);
//                     document.getElementById("temp-1024").appendChild(m);
//                     $(m).animate({
//                         left: 370 + i * 30,
//                         top: 60,
//                         zIndex: i,
//                     });
//                 }

//                 //         /////////////////////////////player2////////////////////////////////
//                 for (var i = 0; i < eastArr.length; i++) {
//                     m = document.getElementById(eastArr[i]);
//                     document.getElementById("temp-1024").appendChild(m);
//                     $(m).animate({
//                         left: 800,
//                         top: 250 + i * 25,
//                         zIndex: i,
//                     });
//                 }
//                 //       /////////////////////////////player3////////////////////////////////
//                 for (var i = 0; i < southArr.length; i++) {
//                     m = document.getElementById(southArr[i]);
//                     document.getElementById("temp-1024").appendChild(m);
//                     $(m).animate({
//                         left: 370 + i * 30,
//                         top: 750,
//                         zIndex: i,
//                     });
//                 }
//                 //////////////////////////////////////////player4////////////////////////////////
//                 for (var i = 0; i < westArr.length; i++) {
//                     m = document.getElementById(westArr[i]);
//                     document.getElementById("temp-1024").appendChild(m);
//                     $(m).animate({
//                         left: 280,
//                         top: 250 + i * 25,
//                         zIndex: i
//                     });
//                     cardBtn = document.createElement("BUTTON");
//                     cardBtn.className = "cardbutton";
//                     document.getElementById("temp-1024").appendChild(cardBtn);
//                     document.getElementsByClassName("cardbutton")[i].setAttribute("id", btnSouth[i]);
//                     $(cardBtn).animate({
//                         left: 280,
//                         top: 250 + i * 25,
//                         zIndex: i
//                     });
//                 }
//             }
//         }
//         var x2 = window.matchMedia("(max-width:1024px)");
//         media1300(x2); // Call listener function at run time
//         x2.addListener(media1024);


     // ////////////////////////////////media query///////////////////////////////////////////////////
function media1024(x2) {

    if (x2.matches) { // If media query matches
        //     
        /////////////////////////////player1////////////////////////////////
        for (var i = 0; i < northArr.length; i++) {
            m = document.getElementById(northArr[i]);
            document.getElementById("hero").appendChild(m);
            $(m).animate({
                left: 370 + i * 30,
                top: 60,
                zIndex: i,
            });
        }

        //         /////////////////////////////player2////////////////////////////////
        for (var i = 0; i < eastArr.length; i++) {
            m = document.getElementById(eastArr[i]);
            document.getElementById("hero").appendChild(m);
            $(m).animate({
                left: 800,
                top: 250 + i * 25,
                zIndex: i,
            });
        }
        //       /////////////////////////////player3////////////////////////////////
        for (var i = 0; i < southArr.length; i++) {
            m = document.getElementById(southArr[i]);
            document.getElementById("hero").appendChild(m);
            $(m).animate({
                left: 370 + i * 30,
                top: 750,
                zIndex: i,
            });
        }
        //////////////////////////////////////////player4////////////////////////////////
        for (var i = 0; i < westArr.length; i++) {
            m = document.getElementById(westArr[i]);
            document.getElementById("hero").appendChild(m);
            $(m).animate({
                left: 280,
                top: 250 + i * 25,
                zIndex: i
            });
            cardBtn = document.createElement("BUTTON");
            cardBtn.className = "cardbutton";
            document.getElementById("hero").appendChild(cardBtn);
            document.getElementsByClassName("cardbutton")[i].setAttribute("id", btnSouth[i]);
            $(cardBtn).animate({
                left: 280,
                top: 250 + i * 25,
                zIndex: i
            });
        }
    }
}
var x2 = window.matchMedia("(max-width: 1024px)");
media1024(x2); // Call listener function at run time
x2.addListener(media1024);

// media (800)
function media8(x1) {
                                            
    if (x1.matches) { // If media query matches
  //     
       /////////////////////////////player1////////////////////////////////
  for(var i=0;i<northArr.length;i++){
    m=document.getElementById(northArr[i]);
    document.getElementById("hero").appendChild(m);
    $(m).animate({
              left:150+i*30,
              top:80,
              zIndex:i,
          });
   }
     
  //         /////////////////////////////player2////////////////////////////////
  for(var i=0;i<eastArr.length;i++){
    m=document.getElementById(eastArr[i]);
    document.getElementById("hero").appendChild(m);
    $(m).animate({
              left:650,
              top:200+i*25,
              zIndex:i,
          });
        }
  //       /////////////////////////////player3////////////////////////////////
  for(var i=0;i<southArr.length;i++){
    m=document.getElementById(southArr[i]);
    document.getElementById("hero").appendChild(m);
    $(m).animate({
              left:150+i*30,
              top:750,
              zIndex:i,
          
            }); 
          }  
  //         /////////////////////////////player4////////////////////////////////
  for(var i=0;i<westArr.length;i++){
    m=document.getElementById(westArr[i]);
    document.getElementById("hero").appendChild(m);
    $(m).animate({
      left:30,
      top:200+i*25,
              zIndex:i,
          }); 
        
          cardBtn = document.createElement("BUTTON");
            cardBtn.className="cardbutton";
            document.getElementById("hero").appendChild(cardBtn);
            document.getElementsByClassName("cardbutton")[i].setAttribute("id", btnSouth[i]);
            $(cardBtn).animate({
                left:30,
                top:200+i*25,
                        zIndex:i,
         
           }); 
        }  

    }
  }
  var x1 = window.matchMedia("(max-width: 800px)");
  media8(x1); // Call listener function at run time
  x1.addListener(media8);
// media320

// media767

function media7(x) {

if (x.matches) {
// If media query matches

//       /////////////////////////////player1////////////////////////////////


for (var i = 0; i < northArr.length; i++) {
    m = document.getElementById(northArr[i]);
    document.getElementById("hero").appendChild(m);
    $(m).animate({
        left: 25 + i * 23,
        top: 70,
        zIndex: i,
    });

}

//         /////////////////////////////player2////////////////////////////////
for (var i = 0; i < eastArr.length; i++) {
    m = document.getElementById(eastArr[i]);
    document.getElementById("hero").appendChild(m);
    $(m).animate({
        left: 300,
        top: 145 + i * 23,
        zIndex: i,
    });
}
//       /////////////////////////////player3////////////////////////////////
for (var i = 0; i < southArr.length; i++) {
    m = document.getElementById(southArr[i]);
    document.getElementById("hero").appendChild(m);
    $(m).animate({
        left: 25 + i * 23,
        top: 510,
        zIndex: i

    });
}
//         /////////////////////////////player4////////////////////////////////
for (var i = 0; i < westArr.length; i++) {
    m = document.getElementById(westArr[i]);

    document.getElementById("hero").appendChild(m);

    $(m).animate({
        left: 40,
        top: 145 + i * 23,
        zIndex: i

    });
    cardBtn = document.createElement("BUTTON");
    cardBtn.className = "cardbutton";
    document.getElementById("hero").appendChild(cardBtn);
    document.getElementsByClassName("cardbutton")[i].setAttribute("id", btnSouth[i]);
    $(cardBtn).animate({
        left: 40,
        top: 145 + i * 23,
        zIndex: i

    });
}
}

}
var x = window.matchMedia("(max-width: 767px)");
media7(x); // Call listener function at run time
x.addListener(media7);

$(".cardbutton").click(function() {
    btnIndex = $(this).css('z-index');
    var getIndex = document.getElementById(westArr[btnIndex]);

    $(this).hide();
    $('#drag-one').append($(getIndex));
    coY = $('#drag-one').offset().top;
    coX = $('#drag-one').offset().left;
    $(getIndex).offset({
        top: coY,
        left: coX
    });

    $(".cardbutton").addClass("dis"); //disables
    // convert to json format
    var jsonResult = '[';
    jsonResult += '   {';
    jsonResult += '"player1"';
    jsonResult += ':{ "position" : " ';
    jsonResult += playerId;
    jsonResult += '" , "card" : "';
    jsonResult += southArr[btnIndex];
    jsonResult += '"}}]';
    jsonResult = jsonResult.replace(/\s/g, "");
//    console.log(jsonResult);

});
}*/







// set pidding id
function setPiddingId() {

    var j = "";
    for (let i = 0; i < pidId.length; i++) {
        j = document.getElementsByClassName("flex-item")[i].setAttribute("id", pidId[i]);
      //  console.log(pidId[i]);
    }

}

if (document.title == "Player 2")
{
console.log("i am player 2");
}


function bidActivation(CurrentPidder){
    if(CurrentPidder == "north"){
        if(document.title == "Player 2" || document.title == "Player 3" || document.title == "Player 4" ){
            for(var i=0;i<pidId.length;i++){
              document.getElementById(pidId[i]).disabled = true;
              document.getElementById(pidId[i]).style.backgroundColor= '#b7bdc2';
           }
           document.getElementById("pass").disabled = true;
       }
    }
    else if(CurrentPidder == "east"){
        if(document.title == "Player 3" || document.title == "Player 4" || document.title == "Player 1" ){
           // console.log("mahy was here");
            for(var i=0;i<pidId.length;i++){
              document.getElementById(pidId[i]).disabled = true;
              document.getElementById(pidId[i]).style.backgroundColor= '#b7bdc2';
           }
           document.getElementById("pass").disabled = true;
       }
    }
    else if(CurrentPidder == "south"){
        if(document.title == "Player 4" || document.title == "Player 1" || document.title == "Player 2" ){
           // console.log("mahy was here");
            for(var i=0;i<pidId.length;i++){
              document.getElementById(pidId[i]).disabled = true;
              document.getElementById(pidId[i]).style.backgroundColor= '#b7bdc2';
           }
           document.getElementById("pass").disabled = true;
       }
    }
    else if(CurrentPidder == "west"){
        if(document.title == "Player 1" || document.title == "Player 2" || document.title == "Player 3" ){
          //  console.log("mahy was here");
            for(var i=0;i<pidId.length;i++){
              document.getElementById(pidId[i]).disabled = true;
              document.getElementById(pidId[i]).style.backgroundColor= '#b7bdc2';
              console.log("reham");
           }
           document.getElementById("pass").disabled = true;
       }
       CurrentPidder="north";
    }
   }

function dummy(){
    ///////////////deacler function///////////////////////////
  //  var declarer=finalPos; //Pass the new variable here 18-6-2019 Written by Khaled
    var declarer = res;
    console.log(declarer); /////////////
    var dummy ="";
    //var start="";

//if(finalPos == "north")
if(declarer == "noth")
{
dummy = "south";
start ="east";
deck.cards.forEach(function(card, i) { 
            
    cardTemp = card.$el.id;
    for(var y=0;y<southArr.length;y++){
        if (southArr[y]==cardTemp) {
            card.setSide('front');
        } 
}
});
}


else if(declarer == "east")
{
dummy = "west";
start ="south";
deck.cards.forEach(function(card, i) { 
            
    cardTemp = card.$el.id;
    for(var y=0;y<westArr.length;y++){
        if (westArr[y]==cardTemp) {
            card.setSide('front');
        } 
}
});
}


else if(declarer == "soth")
{
dummy = "north";
start ="west";
deck.cards.forEach(function(card, i) { 
            
    cardTemp = card.$el.id;
    for(var y=0;y<northArr.length;y++){
        if (northArr[y]==cardTemp) {
            card.setSide('front');
        } 
}
});
}


else if(declarer == "west")
{
dummy = "east";
start ="north";
deck.cards.forEach(function(card, i) { 
            
    cardTemp = card.$el.id;
    for(var y=0;y<eastArr.length;y++){
        if (eastArr[y]==cardTemp) {
            card.setSide('front');
        } 
}
});
}




console.log("declarer is :  "+declarer);
console.log("dummy is :  "+dummy);
console.log("start position is : "+start);
var PreviousPlayer = "";
if(start == "north") {
    PreviousPlayer = "west";
}
else if(start == "east") {
    PreviousPlayer = "north";
}
else if(start == "south") {
    PreviousPlayer = "east";
}
else if(start == "west") {
    PreviousPlayer = "south";
}
cardsActivationBasedOnPlayer(PreviousPlayer);


var jsonResult = '[';
      jsonResult += '   {';
      jsonResult += '"dummy"';
      jsonResult += ':{ "position" : " ';
      jsonResult += dummy;
      jsonResult += '" , "start" : "';
      jsonResult += start ;
      jsonResult += '"}}]';
      jsonResult = jsonResult.replace(/\s/g, "");
      console.log(jsonResult);

}

//pidding button action (able and diasable ) 

let biddingRev = [];
let bgImg = [];
var count = 0;
let input = "";
var Table = document.getElementById("bidDiv");
var pidfinal = 0;

games.on('revBg',function(data){
    bgImg=data;
});
games.on('biddRev',function(data){
    biddingRev=data;
});
console.log("next pidder is "+CurrentPidder);

/*socket.on('PidPressed',function(data){
   
    pidCount = data;
    console.log("pid count "+pidCount);
   
    if (pidCount == 1)
    {
        CurrentPidder="east";
    }
    else if (pidCount == 2)
    {
        CurrentPidder="south";
    }
    else if (pidCount == 3)
    {
        CurrentPidder="west";
    }
    else if (pidCount == 4)
    {
        CurrentPidder="north";
        pidCount=0;
    }

    console.log("next pidder is "+CurrentPidder);
    
    
});*/

function closeModal() {
    document.getElementById('modalOverlay').style.display = 'none';
  }


games.on('PosPressed',function(data){
    var jsonPidResult = JSON.parse(data);
    posCount = jsonPidResult[0].PosCounter;
    CurrentPidder = jsonPidResult[0].CurrentPidder;
    bidActivation(CurrentPidder);
 //   pidcount=data[1];

    console.log("pos count: "+posCount);
    // if(posCount ==1 || posCount == 5 ){
    //     position = "noth";
    //     //CurrentPidder="east";
    //     playerPos.push(position);
    // }
    // else if(posCount ==2 || posCount ==6){
    //     position = "east";
    //   //  CurrentPidder="soth";
    //     playerPos.push(position);
    // }
    // else if(posCount == 3 || posCount ==7){
    //     position = "soth";
    //     //CurrentPidder="west";
    //     playerPos.push(position);
    // }
    // else if(posCount ==4 || posCount ==8){
    //     position = "west";
    //     //CurrentPidder="noth";
    //     playerPos.push(position);
    //    // posCount = 0;
    // }

    if(posCount ==1 || posCount == 5 ||posCount == 9||posCount == 13||posCount == 17||posCount == 21||posCount == 25||posCount == 29 ||
        posCount ==33 || posCount == 37 ||posCount == 41||posCount == 45||posCount == 49||posCount == 53||posCount == 57||posCount == 61 ||
        posCount ==65 || posCount == 69 ||posCount == 73||posCount == 77||posCount == 81||posCount == 85||posCount == 89||posCount == 93||
        posCount ==97 || posCount == 101 ||posCount == 105){
        position = "noth";
        playerPos.push(position);
    }
    else if(posCount ==2 || posCount ==6 ||posCount == 10||posCount ==14 ||posCount == 18||posCount == 22||posCount == 26||posCount == 30 ||
        posCount ==34 || posCount == 38 ||posCount == 42||posCount == 46||posCount == 50||posCount == 54||posCount == 58||posCount == 62 ||
        posCount ==66 || posCount == 70 ||posCount == 74||posCount == 78||posCount == 82||posCount == 86||posCount == 90||posCount == 94 ||
        posCount == 98||posCount == 102 ){
        position = "east";
        playerPos.push(position);
    }
    else if(posCount == 3 || posCount ==7 ||posCount == 11||posCount ==15||posCount == 19||posCount == 23||posCount == 27||posCount == 31 ||
        posCount ==35 || posCount == 39 ||posCount == 43 ||posCount == 47||posCount == 51||posCount == 55||posCount == 59||posCount == 63||
        posCount ==67 || posCount == 71 ||posCount == 75||posCount == 79||posCount == 83||posCount == 87||posCount == 94||posCount == 98||
        posCount == 99||posCount == 103){
        position = "soth";
        playerPos.push(position);
    }
    else if(posCount ==4 || posCount ==8 ||posCount == 12||posCount == 16||posCount == 20||posCount == 24||posCount == 28||posCount == 32||
        posCount ==36 || posCount == 40 ||posCount == 44||posCount == 48||posCount == 52||posCount == 56||posCount == 60||posCount == 64||
        posCount ==68 || posCount == 72 ||posCount == 76||posCount == 80||posCount == 84||posCount == 88||posCount == 95||posCount == 99 ||
        posCount == 100||posCount == 104){
        position = "west";
        playerPos.push(position);
       // posCount = 0;
    }
    

});




games.on("passatstartcount2",function(data){
    count = data;
    if(count == 3 && lastpid=="")
    {
      
    //distributecards();
    console.log("restart game");
    document.getElementById('modalOverlay').style.display = 'none';
  }
  });


console.log(playerPos);
//console.log(playerPos[1]);
//console.log(playerPos.length);
//console.log(playerPos[playerPos.length-4]);
games.on('PassPressed',function(data){

 //   console.log(data);   ///////
    var dataArr = data.split("|");
    count = dataArr[0];
    pidfinal = dataArr[1];
    res=dataArr[2].substring(dataArr[2].length-15,dataArr[2].length-19); // to extract the last pid position 

games.emit('declarer',res);

    if(count == 3) {

        finalBiding = biddingRev[pidfinal - 4];
        finalPos = playerPos[pidfinal - 3];
        document.getElementById("finalBidding").style.backgroundImage = bgImg[pidfinal - 4];
        document.getElementById("finalBidding").textContent = finalBiding;
       

        dummy();
        finalBg = document.getElementById(lastpid).style.backgroundImage;
        document.getElementById("finalBidding").style.backgroundImage = finalBg;
        console.log(finalBg);
        // document.getElementById("buttons").addEventListener("click", closeModal);
        document.getElementById('modalOverlay').style.display = 'none';
    }
});




var dcs=0;
var dcs=0;
var ts=0 ;

games.on('ts',function(data){
    dcs=data[0];
    dfs=data[1];

   ts=dcs+dfs;
   console.log('ts'+ts);

});




function pidClick(clickedBtn) {
    // get id
    pidfinal++;
    // alert(pidfinal);
    //posCount++; 

   // console.log("count array : "+countArr);
   //Will be back, Khaled 8-7-2019
    //socket.emit('PidCounted',pidCount) ;

var pidarray=[];

    input = clickedBtn.id;
   
    games.emit('inputpid',input);
    bg = document.getElementById(input).style.backgroundImage;
    bgImg.push(bg);
    bg = bg.replace('"', '\'');
    biddingRev.push(input);

    games.emit('biddingRev',biddingRev);
    games.emit('revBackground',bgImg);
    
        var bidBtn = document.createElement("BUTTON");
        if(input == "pass" || input == "pn1" || input == "pn2" || input == "pn3" || input == "pn4" || input == "pn5" || input == "pn6" || input == "pn7"){
            lastPidResultHTML += '<button class="bidding-item" margin-top:-13px; style="width: 23%; height:24px; margin-right: 4px;">'+input+'</button>';
        }
        else{
            lastPidResultHTML += '<button class="bidding-item" style="width: 23%; height:24px; margin-right: 4px; background-size: 40px; background-repeat: no-repeat; background-image:'+ bg +'"></button>';
        }
        document.getElementById("div_biddresult").innerHTML = lastPidResultHTML; 
    
  //  if (input == "pass" || input == "pn1" || input == "pn2" || input == "pn3" || input == "pn4" || input == "pn5" || input == "pn6" || input == "pn7" )
    // if (input == "pass" || input == "pn1" || input == "pn2" || input == "pn3" || input == "pn4" || input == "pn5" || input == "pn6" || input == "pn7" ||
    //     input == "ps1" || input == "ps2" || input == "ps3" || input == "ps4" || input == "ps5" || input == "ps6" || input == "ps7" ||
    //     input == "ph1" || input == "ph2" || input == "ph3" || input == "ph4" || input == "ph5" || input == "ph6" || input == "ph7" ||
    //     input == "pd1" || input == "pd2" || input == "pd3" || input == "pd4" || input == "pd5" || input == "pd6" || input == "pd7" ||
    //     input == "pc1" || input == "pc2" || input == "pc3" || input == "pc4" || input == "pc5" || input == "pc6" || input == "pc7" )
     
    //  {
    //     bidBtn.innerHTML = input;
    // }

    // end
    //substring
    var r = input.substring(0, 2); // r for letters
    var n = input.substr(2, 1); // n for number
    var result = [];
    // case pass
    pidfinal++;
    if (r == "pa") {
        games.emit("BiddButtonPressed",count.toString() + "|" + "pass" + "|" + input+"|"+playerPos);
        games.emit("passatstart",count);
    }

   else if (r != "pa") {
        games.emit("BiddButtonPressed",count.toString() + "|" + "nonpass" + "|" + input+"|"+playerPos);
    }
/*
    if(count == 3 && pidfinal == 3){
        finalBiding = "pass";
    }
*/

    
    if (count == 3) {
        finalBiding = biddingRev[pidfinal - 4];
        document.getElementById("finalBidding").style.backgroundImage = bgImg[pidfinal - 4];
        document.getElementById("finalBidding").textContent = finalBiding;
        // document.getElementById('modalOverlay').style.display = 'none';
    }
    
    //---------------------------case no trump ---------------------------------------

    if (r == 'pn') {

        if (n == '1') {

            result = [
                "pn1",
                "ps1",
                "ph1",
                "pd1",
                "pc1"
            ];

       //     console.log(result);
        }



        if (n == '2') {

            result = [
                "pn1", "pn2",
                "ps1", "ps2",
                "ph1", "ph2",
                "pd1", "pd2",
                "pc1", "pc2",
            ];
//
            console.log(result);
        }

        if (n == '3') {
            result = [
                "pn1", "pn2", "pn3",
                "ps1", "ps2", "ps3",
                "ph1", "ph2", "ph3",
                "pd1", "pd2", "pd3",
                "pc1", "pc2", "pc3"
            ];

          //  console.log(result);
        }

        if (n == '4') {
            result = [
                "pn1", "pn2", "pn3", "pn4",
                "ps1", "ps2", "ps3", "ps4",
                "ph1", "ph2", "ph3", "ph4",
                "pd1", "pd2", "pd3", "pd4",
                "pc1", "pc2", "pc3", "pc4"
            ];

          //  console.log(result);
        }

        if (n == '5') {
            result = [
                "pn1", "pn2", "pn3", "pn4", "pn5",
                "ps1", "ps2", "ps3", "ps4", "ps5",
                "ph1", "ph2", "ph3", "ph4", "ph5",
                "pd1", "pd2", "pd3", "pd4", "pd5",
                "pc1", "pc2", "pc3", "pc4", "pc5"
            ];

          //  console.log(result);
        }

        if (n == '6') {
            result = [
                "pn1", "pn2", "pn3", "pn4", "pn5", "pn6",
                "ps1", "ps2", "ps3", "ps4", "ps5", "ps6",
                "ph1", "ph2", "ph3", "ph4", "ph5", "ph6",
                "pd1", "pd2", "pd3", "pd4", "pd5", "pd6",
                "pc1", "pc2", "pc3", "pc4", "pc5", "pc6"
            ];

          //  console.log(result);
        }

        if (n == '7') {
            result = [
                "pn1", "pn2", "pn3", "pn4", "pn5", "pn6", "pn7",
                "ps1", "ps2", "ps3", "ps4", "ps5", "ps6", "ps7",
                "ph1", "ph2", "ph3", "ph4", "ph5", "ph6", "ph7",
                "pd1", "pd2", "pd3", "pd4", "pd5", "pd6", "pd7",
                "pc1", "pc2", "pc3", "pc4", "pc5", "pc6", "pc7"
            ];

          //  console.log(result);
        }
    }

    //---------------------------case spade ---------------------------------------

    if (r == 'ps') {
        //console.log("noo");
        if (n == '1') {
            result = [
                "ph1",
                "ps1",
                "pd1",
                "pc1"
            ];

      //      console.log(result);
        }


        if (n == '2') {
            result = [
                "pn1",
                "ps1", "ps2",
                "ph1", "ph2",
                "pd1", "pd2",
                "pc1", "pc2"
            ];

        //    console.log(result);
        }


        if (n == '3') {
            result = [
                "pn1", "pn2",
                "ps1", "ps2", "ps3",
                "ph1", "ph2", "ph3",
                "pd1", "pd2", "pd3",
                "pc1", "pc2", "pc3"
            ];

          //  console.log(result);
        }


        if (n == '4') {
            result = [
                "pn1", "pn2", "pn3",
                "ps1", "ps2", "ps3", "ps4",
                "ph1", "ph2", "ph3", "ph4",
                "pd1", "pd2", "pd3", "pd4",
                "pc1", "pc2", "pc3", "pc4"
            ];

          //  console.log(result);
        }


        if (n == '5') {
            result = [
                "pn1", "pn2", "pn3", "pn4",
                "ps1", "ps2", "ps3", "ps4", "ps5",
                "ph1", "ph2", "ph3", "ph4", "ph5",
                "pd1", "pd2", "pd3", "pd4", "pd5",
                "pc1", "pc2", "pc3", "pc4", "pc5"
            ];

         //   console.log(result);
        }


        if (n == '6') {
            result = [
                "pn1", "pn2", "pn3", "pn4", "pn5",
                "ps1", "ps2", "ps3", "ps4", "ps5", "ps6",
                "ph1", "ph2", "ph3", "ph4", "ph5", "ph6",
                "pd1", "pd2", "pd3", "pd4", "pd5", "pd6",
                "pc1", "pc2", "pc3", "pc4", "pc5", "pc6"
            ];

         //   console.log(result);
        }


        if (n == '7') {
            result = [
                "pn1", "pn2", "pn3", "pn4", "pn5", "pn6",
                "ps1", "ps2", "ps3", "ps4", "ps5", "ps6", "ps7",
                "ph1", "ph2", "ph3", "ph4", "ph5", "ph6", "ph7",
                "pd1", "pd2", "pd3", "pd4", "pd5", "pd6", "pd7",
                "pc1", "pc2", "pc3", "pc4", "pc5", "pc6", "pc7"
            ];

          //  console.log(result);
        }




    }




    //---------------------------case heart---------------------------------------

    if (r == 'ph') {
        //console.log("noo");
        if (n == '1') {
            result = [
                "ph1",
                "pd1",
                "pc1"
            ];

        //    console.log(result);
        }

        if (n == '2') {
            result = [
                "pn1",
                "ps1",
                "ph1", "ph2",
                "pd1", "pd2",
                "pc1", "pc2",
            ];

         //   console.log(result);
        }

        if (n == '3') {
            result = [
                "pn1", "pn2",
                "ps1", "ps2",
                "ph1", "ph2", "ph3",
                "pd1", "pd2", "pd3",
                "pc1", "pc2", "pc3"
            ];

         //   console.log(result);
        }

        if (n == '4') {
            result = [
                "pn1", "pn2", "pn3",
                "ps1", "ps2", "ps3",
                "ph1", "ph2", "ph3", "ph4",
                "pd1", "pd2", "pd3", "pd4",
                "pc1", "pc2", "pc3", "pc4"
            ];

        //    console.log(result);
        }

        if (n == '5') {
            result = [
                "pn1", "pn2", "pn3", "pn4",
                "ps1", "ps2", "ps3", "ps4",
                "ph1", "ph2", "ph3", "ph4", "ph5",
                "pd1", "pd2", "pd3", "pd4", "pd5",
                "pc1", "pc2", "pc3", "pc4", "pc5"
            ];

          //  console.log(result);
        }

        if (n == '6') {
            result = [
                "pn1", "pn2", "pn3", "pn4", "pn5",
                "ps1", "ps2", "ps3", "ps4", "ps5",
                "ph1", "ph2", "ph3", "ph4", "ph5", "ph6",
                "pd1", "pd2", "pd3", "pd4", "pd5", "pd6",
                "pc1", "pc2", "pc3", "pc4", "pc5", "pc6"
            ];

      //      console.log(result);
        }

        if (n == '7') {
            result = [
                "pn1", "pn2", "pn3", "pn4", "pn5", "pn6",
                "ps1", "ps2", "ps3", "ps4", "ps5", "ps6",
                "ph1", "ph2", "ph3", "ph4", "ph5", "ph6", "ph7",
                "pd1", "pd2", "pd3", "pd4", "pd5", "pd6", "pd7",
                "pc1", "pc2", "pc3", "pc4", "pc5", "pc6", "pc7"
            ];

           // console.log(result);
        }
    }




    //---------------------------case diamond ---------------------------------------

    if (r == 'pd') {
        //console.log("noo");
        if (n == '1') {
            result = [
                "pd1",
                "pc1"
            ];

           // console.log(result);
        }

        if (n == '2') {
            result = [
                "pn1",
                "ps1",
                "ph1",
                "pd1", "pd2",
                "pc1", "pc2"
            ];

            //console.log(result);
        }

        if (n == '3') {
            result = [
                "pn1", "pn2",
                "ps1", "ps2",
                "ph1", "ph2",
                "pd1", "pd2", "pd3",
                "pc1", "pc2", "pc3"
            ];

         //   console.log(result);
        }

        if (n == '4') {
            result = [
                "pn1", "pn2", "pn3",
                "ps1", "ps2", "ps3",
                "ph1", "ph2", "ph3",
                "pd1", "pd2", "pd3", "pd4",
                "pc1", "pc2", "pc3", "pc4"
            ];

         //   console.log(result);
        }

        if (n == '5') {
            result = [
                "pn1", "pn2", "pn3", "pn4",
                "ps1", "ps2", "ps3", "ps4",
                "ph1", "ph2", "ph3", "ph4",
                "pd1", "pd2", "pd3", "pd4", "pd5",
                "pc1", "pc2", "pc3", "pc4", "pc5"
            ];

          //  console.log(result);
        }

        if (n == '6') {
            result = [
                "pn1", "pn2", "pn3", "pn4", "pn5",
                "ps1", "ps2", "ps3", "ps4", "ps5",
                "ph1", "ph2", "ph3", "ph4", "ph5",
                "pd1", "pd2", "pd3", "pd4", "pd5", "pd6",
                "pc1", "pc2", "pc3", "pc4", "pc5", "pc6"
            ];

           // console.log(result);
        }

        if (n == '7') {
            result = [
                "pn1", "pn2", "pn3", "pn4", "pn5", "pn6",
                "ps1", "ps2", "ps3", "ps4", "ps5", "ps6",
                "ph1", "ph2", "ph3", "ph4", "ph5", "ph6",
                "pd1", "pd2", "pd3", "pd4", "pd5", "pd6", "pd7",
                "pc1", "pc2", "pc3", "pc4", "pc5", "pc6", "pc7"
            ];

           // console.log(result);
        }
    }



    //---------------------------case club ---------------------------------------

    if (r == 'pc') {
        //console.log("noo");
        if (n == '1') {
            result = [
                "pc1"
            ];

         //   console.log(result);
        }

        if (n == '2') {
            result = [
                "pn1",
                "ps1",
                "ph1",
                "pd1",
                "pc1", "pc2"
            ];

         //   console.log(result);
        }

        if (n == '3') {
            result = [
                "pn1", "pn2",
                "ps1", "ps2",
                "ph1", "ph2",
                "pd1", "pd2",
                "pc1", "pc2", "pc3"
            ];

         //   console.log(result);
        }

        if (n == '4') {
            result = [
                "pn1", "pn2", "pn3",
                "ps1", "ps2", "ps3",
                "ph1", "ph2", "ph3",
                "pd1", "pd2", "pd3",
                "pc1", "pc2", "pc3", "pc4"
            ];

         ///   console.log(result);
        }

        if (n == '5') {
            result = [
                "pn1", "pn2", "pn3", "pn4",
                "ps1", "ps2", "ps3", "ps4",
                "ph1", "ph2", "ph3", "ph4",
                "pd1", "pd2", "pd3", "pd4",
                "pc1", "pc2", "pc3", "pc4", "pc5"
            ];

         //   console.log(result);
        }

        if (n == '6') {
            result = [
                "pn1", "pn2", "pn3", "pn4", "pn5",
                "ps1", "ps2", "ps3", "ps4", "ps5",
                "ph1", "ph2", "ph3", "ph4", "ph5",
                "pd1", "pd2", "pd3", "pd4", "pd5",
                "pc1", "pc2", "pc3", "pc4", "pc5", "pc6"
            ];

           // console.log(result);
        }

        if (n == '7') {
            result = [
                "pn1", "pn2", "pn3", "pn4", "pn5", "pn6",
                "ps1", "ps2", "ps3", "ps4", "ps5", "ps6",
                "ph1", "ph2", "ph3", "ph4", "ph5", "ph6",
                "pd1", "pd2", "pd3", "pd4", "pd5", "pd6",
                "pc1", "pc2", "pc3", "pc4", "pc5", "pc6", "pc7"
            ];

           // console.log(result);
        }
    }




    //---------------------------case pass ---------------------------------------

    // if(r == 'pa')
    // {   
    // 	console.log('pass');
    // 	result = [];
    // }


    //---------------------------case double ---------------------------------------

    if (r == 'do') {
      //  console.log('double');
        result = [];
    }


    //---------------------------case hint ---------------------------------------

    if (r == 'hi') {
      //  console.log('hint');
        result = [];
    }


    //---------------------------case continue ---------------------------------------

    if (r == 'co') {
      //  console.log('continue');
        result = [];
    }

    for (var i = 0; i < result.length; i++) {
        var disBtn = document.getElementById(result[i]);
        disBtn.disabled = true;
        // disBtn.style.background = "#000 url('images/locker.png') no-repeat center";
        disBtn.innerHTML = "";
    }
    games.emit("BiddModal", document.getElementById("modalOverlay").innerHTML);

    var jsonPid = '[{"posCount":"' + posCount + '","CurrentPidder":"' + CurrentPidder + '"}]';
    games.emit('PosCounted', jsonPid);
}


// review bidding toggle
$('.Show').click(function() {
    $('#targets').toggle(500);
    MyFunction();
});
// retrive elements in bidding review terget div

function MyFunction() {

    for (var i = 0; i < biddingRev.length; i++) {
        var biddingDiv = document.createElement("BUTTON");
        $("#targets").append(biddingDiv);

        biddingDiv.className = "bidding-item";
        biddingDiv.style.width = "23%";
        biddingDiv.style.height = "40px";
        biddingDiv.style.marginRight = "4px";

        // set div bg
        biddingDiv.style.backgroundImage = bgImg[i];
        if (biddingRev[i] == "pass" || biddingRev[i] == "pn1" || biddingRev[i] == "pn2" || biddingRev[i] == "pn3" || biddingRev[i] == "pn4" || biddingRev[i] == "pn5" || biddingRev[i] == "pn6" || biddingRev[i] == "pn7") {
            biddingDiv.innerHTML = biddingRev[i];
        }

    }
    biddingRev = [];
}

//////////////////////////////////////////////////



 

//   suit function
  //var firstplayedcardresult = "07c08";
 