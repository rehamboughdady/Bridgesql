

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
var ln;
var jsonResult = '';
//play

var $container = document.getElementById('container');

// create Deck
var deck = Deck();

// add to DOM
deck.mount($container);
setId();

deck.shuffle();

socket.on('cardsJSON',function(data){
   jsonResult = data;
   fillArrays();
   distForFirstThreePlayers();
});
dist();
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
    socket.emit('json', jsonResult);
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

// append child to card div in other tabs
function  cliclCards1(){
    var cardNorth = document.getElementById(ln);
            $('#north').append($(cardNorth));
            coY = $('#north').offset().top;
            coX = $('#north').offset().left;
            $(cardNorth).offset({
                top: coY,
                left: coX
            });
}
//////////////// End Global Functions /////////////////////

function distForFirstThreePlayers() {
    var dumy1 = [];
    var cardTemp = "";
    if (document.title == "Player 1") {
        deck.cards.forEach(function(card, i) {

            cardTemp = card.$el.id;
            for (var y = 0; y < northArr.length; y++) {
                if (northArr[y] == cardTemp) {
                    card.setSide('front');
                }
            }
        });
        for (var i = 0; i < northArr.length; i++) {
            m = document.getElementById(northArr[i]);
            document.getElementById("south").appendChild(m);
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
            $(m).addClass("dis"); //disables
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
                ln = $(this).attr("id");
                $('#'+position).append($(this));
                coY = $('#'+position).offset().top;
                coX = $('#'+position).offset().left;
                $(this).offset({
                    top: coY,
                    left: coX
                });
    
                checkIfMax();
    
                function checkIfMax() {
                    $(".card").addClass("dis"); //disables
    
                }
    
                // convert to json format
                var jsonResult = '[';
                jsonResult += '   {';
                jsonResult += '"player1"';
                jsonResult += ':{ "position" : " ';
                jsonResult += position;
                jsonResult += '" , "card" : "';
                jsonResult += ln;
                jsonResult += '"}}]';
                jsonResult = jsonResult.replace(/\s/g, "");
                console.log(jsonResult);
                var mainJSON = JSON.parse(jsonResult);
                var objJSONplayer1 = mainJSON[0].player1;
                console.log(objJSONplayer1.card);
                socket.emit('card1', ln);
                
            });

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
            console.log(jsonResult);

        });
    } else if (document.title == "Player 2") {
        deck.cards.forEach(function(card, i) { 
                cardTemp = card.$el.id;
                for(var y=0;y<eastArr.length;y++){
                    if (eastArr[y]==cardTemp) {
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
                $(m).animate({
                    left: 350,
                    top: -250 + i * 30,
                    zIndex: i,
                });
            }
        
        
            for (var i = 0; i < southArr.length; i++) {
                m = document.getElementById(southArr[i]);
                document.getElementById("south").appendChild(m);
                $(m).addClass("dis"); //disables
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

            // click function on screen and return json for player id and card id
            $(".card").click(function() {
                var l = $(this).attr("id");
                $('#east').append($(this));
                coY = $('#east').offset().top;
                coX = $('#east').offset().left;
                $(this).offset({
                    top: coY,
                    left: coX
                });
                
                checkIfMax();
            
                function checkIfMax() {
                    $(".card").addClass("dis"); //disables
            
                }
            
                // convert to json format
                var jsonResult = '[';
                jsonResult += '   {';
                jsonResult += '"player2"';
                jsonResult += ':{ "position" : " ';
                jsonResult += 'east';
                jsonResult += '" , "card" : "';
                jsonResult += l;
                jsonResult += '"}}]';
                jsonResult = jsonResult.replace(/\s/g, "");
                console.log(jsonResult);
                var mainJSON = JSON.parse(jsonResult);
                var objJSONplayer2 = mainJSON[0].player2 ;
                console.log(objJSONplayer2.card);
                socket.emit('card2',l);
            });




     socket.on('result3',function(data){
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
            console.log(jsonResult);
        
        });
    } else if (document.title == "Player 3") {
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
            // click function on screen and return json for player id and card id
            $(".card").click(function() {
                var l = $(this).attr("id");
                $('#south').append($(this));
                coY = $('#south').offset().top;
                coX = $('#south').offset().left;
                $(this).offset({
                    top: coY,
                    left: coX
                });
                
                checkIfMax();
            
                function checkIfMax() {
                    $(".card").addClass("dis"); //disables
            
                }
            
                // convert to json format
                var jsonResult = '[';
                jsonResult += '   {';
                jsonResult += '"player3"';
                jsonResult += ':{ "position" : " ';
                jsonResult += 'south';
                jsonResult += '" , "card" : "';
                jsonResult += l;
                jsonResult += '"}}]';
                jsonResult = jsonResult.replace(/\s/g, "");
                console.log(jsonResult);
                socket.emit('card3',l);
            });
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
                console.log(jsonResult);
            
            });
    }
}

function dist() {
    var dumy1 = [];
    var cardTemp = "";
// we handle tab according to its player position and card (position & clicks)
    socket.on('id',function (data) {
        // player north
        if(data[1] == 1) {
            document.title = "Player 1";
        }
        // player east
        else if(data[1] == 2) {
            document.title = "Player 2";
        }

        // player south
        else if(data[1] == 3) {
            document.title = "Player 3";
        }
        // player west
        else if(data[1] == 4) {
            document.title = "Player 4";
            init_game();
            deck.cards.forEach(function(card, i) { 
                
                cardTemp = card.$el.id;
                for(var y=0;y<westArr.length;y++){
                    if (westArr[y]==cardTemp) {
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
                $(m).addClass("dis"); //disables
                $(m).animate({
                    left: -200 + i * 30,
                    top: 170,
                    zIndex: i,
                });
            }
        
            for (var i = 0; i < westArr.length; i++) {
                m = document.getElementById(westArr[i]);
                document.getElementById("south").appendChild(m);
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
            // click function on screen and return json for player id and card id
            $(".card").click(function() {
                var l = $(this).attr("id");
                $('#west').append($(this));
                coY = $('#west').offset().top;
                coX = $('#west').offset().left;
                $(this).offset({
                    top: coY,
                    left: coX
                });
                
                checkIfMax();
            
                function checkIfMax() {
                    $(".card").addClass("dis"); //disables
            
                }
            
                // convert to json format
                var jsonResult = '[';
                jsonResult += '   {';
                jsonResult += '"player4"';
                jsonResult += ':{ "position" : " ';
                jsonResult += 'west';
                jsonResult += '" , "card" : "';
                jsonResult += l;
                jsonResult += '"}}]';
                jsonResult = jsonResult.replace(/\s/g, "");
                console.log(jsonResult);
                socket.emit('card4',l);
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
            console.log(jsonResult);
        
        });
        }
      });
    
    
    console.log(cardidShuffle);
    // //convert to json format
}

// function trick
var player1;         //north        player1.card
var player2;         //east         player2.card
var player3;         //south        player3.card
var player4; 

/// thrown card from 4 tabs 

socket.on('broadcast',function(data){
    console.log("card thrown from 1st tab :"+data);
    player1 = data;
    trick();
})


socket.on('broadcast2',function(data){
    console.log("card thrown from 2nd tab :"+data);
    player2 = data;
   trick();
})


socket.on('broadcast3',function(data){
    console.log("card thrown from 3rd tab :"+data);
    player3 = data;
   trick();
})


socket.on('broadcast4',function(data){
    console.log("card thrown from 4th tab :"+data);
    player4 = data;
   trick();
})

var we = document.getElementById("we");
var they = document.getElementById("they");
function trick(){
var c1=0;  // we (s/n)                   player 1 or player 3
var c2=0;  //they (e/w)                  player 2 or player 4

var res="";
var pid = finalBiding;
console.log(pid);
//var l=pid.substr(1,1);
//console.log(l);

// strongest
 var n1=player1.substr(0,2);
 console.log(n1);
 var n2=player2.substr(0,2);
 console.log(n2);
 var n3=player3.substr(0,2);
 console.log(n3);
 var n4=player4.substr(0,2); 
console.log(n4);
//suit
 var l1=player1.substr(2,1);
 //console.log(l1);
 var l2=player2.substr(2,1);
 //console.log(l2);
 var l3=player3.substr(2,1);
 //console.log(l3);
 var l4=player4.substr(2,1); 
//console.log(l4);


if(((l1==l)||(l3==l)) && ((l2 != l)&& (l4 != l)) )             // north or south throw the pid  only (done)
{

  c1++;
  console.log("we");
  console.log(c1);
}

else if(((l2==l)||(l4==l)) && ((l1 != l)&& (l3 != l)) )               // east  or west throw the pid only (done)
 {
  c2++;
  console.log("they");
  console.log(c2);
}



else if ((l1 == l) && (l2 == l) && (l3 ==l) && (l4 == l))                              //  all thrown the pid suit (done)
{
	if((n1 > (n2 && n4)) || (n3 > (n2 && n4)) )
  {
  	//console.log("true");
	c1++;
	console.log("we");
	console.log(c1);

  }
  else
  {
  	//console.log("false");
	c2++;
	console.log("they");
	console.log(c2);
	//console.log(n2);
	//console.log(n4);

  }	
}



else if ((l1 == l2) && (l2 == l3) && (l3 == l4))                              // no pid thrown from both sides and all have the same suit (done)
{
	if((n1 > (n2 && n4)) || (n3 > (n2 && n4))) 
  {
	c1++;
	console.log("we");
	console.log(c1);

  }
  else
  {
	c2++;
	console.log("they");
	console.log(c2);

  }	
}




else if (((l1 == l) && (l3 == l)) && ((l2 == l) || (l4 == l)))                     // 3 thrown the pid
{


var t1 = "";
var t2 = "";

if( n1 > n3)
{
	t1=player1;
}
else
{
	t1=player3;
}

if (l2 == l)
{
	t2 = player2;
}
else
{
	t2 =player4;

}

var t11 =t1.substr(3,2);

var t22 =t2.substr(3,2);

 if (t11 > t22)
 {

	c1++;
	console.log("we");
	console.log(c1);

 }
 else
 {
	c2++;
	console.log("they");
	console.log(c2);
	//console.log(t22);

 } 	



}



else if (((l1 == l) || (l3 == l)) && ((l2 == l) && (l4 == l)))                         // 3 throw the pid 
{



var t1 = "";
var t2 = "";


if (l1 == l)
{
	t1 = player1;
}
else
{
	t1 =player3;

}


if( n2 > n4)
{
	t2=player2;
}
else
{
	t2=player4;
}



var t11 =t1.substr(3,2);

var t22 =t2.substr(3,2);

 if (t11 > t22)
 {

	c1++;
	console.log("we");
	console.log(c1);

 }
 else
 {
	c2++;
	console.log("they");
	console.log(c2);
	//console.log(t22);

 } 	



}


else if (((l1 == l)|| (l3 == l)) && ((l2 == l) || (l4 == l)))      // if north or south throw the pid and east or west throw the pid
{

var t1 = "";
var t2 = "";

if (l1 == l)
{
	t1 = player1;
}
else
{
	t1 =player3;

}



if (l2 == l)
{
	t2 = player2;
}
else
{
	t2 =player4;

}

var t11 =t1.substr(3,2);

var t22 =t2.substr(3,2);

 if (t11 > t22)
 {

	c1++;
	console.log("we");
	console.log(c1);

 }
 else
 {
	c2++;
	console.log("they");
	console.log(c2);
	//console.log(t22);

 } 	

 
 }


/*************** no pid and compare by the start suit ********/

else if((l1 != l) && (l2 != l) && (l3 != l) && (l4 != l)  ) 
{
    
    if ((l2 != l1 ) && (l3 == l1 ) && (l4 == l1))
    {
	if((n1 || n3 ) >  n4 )
	{
		c1++;
		console.log("we");
		console.log(c1);
	}
    }

   else if ((l2 != l1) && (l3 != l1 ) && (l4 != l1))
   {
   	c1++;
   		console.log("we");
		console.log(c1);
	}



   else if((n1 || n3 ) > (n2 && n4 ))
	{
		c1++;
		console.log("we");
		console.log(c1);
	}
	else if( (n2 || n4) > (n1 && n3 ) )
	{
		c2++;
		console.log("they");
		console.log(c2);
	}
   

}


else
{
	console.log("hi");
}


we.innerHTML = "Deaclar:" + c1;
they.innerHTML = "Defender :" + c2;

} 


var pidId = []
// set pidding id
function setPiddingId() {

    var j = "";
    var pidId = ["pc1", "pd1", "ph1", "ps1", "pn1",
        "pc2", "pd2", "ph2", "ps2", "pn2",
        "pc3", "pd3", "ph3", "ps3", "pn3",
        "pc4", "pd4", "ph4", "ps4", "pn4",
        "pc5", "pd5", "ph5", "ps5", "pn5",
        "pc6", "pd6", "ph6", "ps6", "pn6",
        "pc7", "pd7", "ph7", "ps7", "pn7",
    ]

    for (var i = 0; i < pidId.length; i++) {
        j = document.getElementsByClassName("flex-item")[i].setAttribute("id", pidId[i]);
        console.log(pidId[i]);
    }

}
//pidding button action (able and diasable ) 

let biddingRev = [];
let bgImg = [];
var count = 0;
let input = "";
var Table = document.getElementById("bidDiv");
var pidfinal = 0;
var posCount = 0;
var x ={"position":"south","pid":"pc2"};

$(".pidClick").click(function() {
    // get id
    pidfinal++;
    posCount++;
    if(posCount ==1){
        x.position = "north";
    }
    else if(posCount ==2){
        x.position = "east";
    }
    else if(posCount == 3){
        x.position = "south";
    }
    else if(posCount ==4){
        x.position = "west";
        posCount = 0;
    }
    

    input = $(this).attr("id");
    var bg = $(this).css('background-image');
    bgImg.push(bg);
    biddingRev.push(input);

    var bidBtn = document.createElement("BUTTON");
    bidBtn.className = "bidding-item";
    Table.appendChild(bidBtn);
    bidBtn.style.width = "23%";
    bidBtn.style.height = "40px";
    bidBtn.style.marginRight = "4px";
    bidBtn.style.backgroundImage = bg;
  //  if (input == "pass" || input == "pn1" || input == "pn2" || input == "pn3" || input == "pn4" || input == "pn5" || input == "pn6" || input == "pn7" )
    if (input == "pass" || input == "pn1" || input == "pn2" || input == "pn3" || input == "pn4" || input == "pn5" || input == "pn6" || input == "pn7" ||
        input == "ps1" || input == "ps2" || input == "ps3" || input == "ps4" || input == "ps5" || input == "ps6" || input == "ps7" ||
        input == "ph1" || input == "ph2" || input == "ph3" || input == "ph4" || input == "ph5" || input == "ph6" || input == "ph7" ||
        input == "pd1" || input == "pd2" || input == "pd3" || input == "pd4" || input == "pd5" || input == "pd6" || input == "pd7" ||
        input == "pc1" || input == "pc2" || input == "pc3" || input == "pc4" || input == "pc5" || input == "pc6" || input == "pc7" )
     
     {
        bidBtn.innerHTML = input;
        console.log(bidBtn.innerHTML);
        socket.emit("BiddButtonPressed",input);
    }




    // end
    //substring
    var r = input.substring(0, 2); // r for letters
    var n = input.substr(2, 1); // n for number
    var result = [];
    // case pass

    if (r == "pa") {
        count = count + 1;
    }

    if (r != "pa") {
        count = 0;
    }

    if (count == 3) {
        finalBiding = biddingRev[pidfinal - 4];
        document.getElementById("finalBidding").style.backgroundImage = bgImg[pidfinal - 4];

        document.getElementById('modalOverlay').style.display = 'none'
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

            console.log(result);
        }



        if (n == '2') {

            result = [
                "pn1", "pn2",
                "ps1", "ps2",
                "ph1", "ph2",
                "pd1", "pd2",
                "pc1", "pc2",
            ];

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

            console.log(result);
        }

        if (n == '4') {
            result = [
                "pn1", "pn2", "pn3", "pn4",
                "ps1", "ps2", "ps3", "ps4",
                "ph1", "ph2", "ph3", "ph4",
                "pd1", "pd2", "pd3", "pd4",
                "pc1", "pc2", "pc3", "pc4"
            ];

            console.log(result);
        }

        if (n == '5') {
            result = [
                "pn1", "pn2", "pn3", "pn4", "pn5",
                "ps1", "ps2", "ps3", "ps4", "ps5",
                "ph1", "ph2", "ph3", "ph4", "ph5",
                "pd1", "pd2", "pd3", "pd4", "pd5",
                "pc1", "pc2", "pc3", "pc4", "pc5"
            ];

            console.log(result);
        }

        if (n == '6') {
            result = [
                "pn1", "pn2", "pn3", "pn4", "pn5", "pn6",
                "ps1", "ps2", "ps3", "ps4", "ps5", "ps6",
                "ph1", "ph2", "ph3", "ph4", "ph5", "ph6",
                "pd1", "pd2", "pd3", "pd4", "pd5", "pd6",
                "pc1", "pc2", "pc3", "pc4", "pc5", "pc6"
            ];

            console.log(result);
        }

        if (n == '7') {
            result = [
                "pn1", "pn2", "pn3", "pn4", "pn5", "pn6", "pn7",
                "ps1", "ps2", "ps3", "ps4", "ps5", "ps6", "ps7",
                "ph1", "ph2", "ph3", "ph4", "ph5", "ph6", "ph7",
                "pd1", "pd2", "pd3", "pd4", "pd5", "pd6", "pd7",
                "pc1", "pc2", "pc3", "pc4", "pc5", "pc6", "pc7"
            ];

            console.log(result);
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

            console.log(result);
        }


        if (n == '2') {
            result = [
                "pn1",
                "ps1", "ps2",
                "ph1", "ph2",
                "pd1", "pd2",
                "pc1", "pc2"
            ];

            console.log(result);
        }


        if (n == '3') {
            result = [
                "pn1", "pn2",
                "ps1", "ps2", "ps3",
                "ph1", "ph2", "ph3",
                "pd1", "pd2", "pd3",
                "pc1", "pc2", "pc3"
            ];

            console.log(result);
        }


        if (n == '4') {
            result = [
                "pn1", "pn2", "pn3",
                "ps1", "ps2", "ps3", "ps4",
                "ph1", "ph2", "ph3", "ph4",
                "pd1", "pd2", "pd3", "pd4",
                "pc1", "pc2", "pc3", "pc4"
            ];

            console.log(result);
        }


        if (n == '5') {
            result = [
                "pn1", "pn2", "pn3", "pn4",
                "ps1", "ps2", "ps3", "ps4", "ps5",
                "ph1", "ph2", "ph3", "ph4", "ph5",
                "pd1", "pd2", "pd3", "pd4", "pd5",
                "pc1", "pc2", "pc3", "pc4", "pc5"
            ];

            console.log(result);
        }


        if (n == '6') {
            result = [
                "pn1", "pn2", "pn3", "pn4", "pn5",
                "ps1", "ps2", "ps3", "ps4", "ps5", "ps6",
                "ph1", "ph2", "ph3", "ph4", "ph5", "ph6",
                "pd1", "pd2", "pd3", "pd4", "pd5", "pd6",
                "pc1", "pc2", "pc3", "pc4", "pc5", "pc6"
            ];

            console.log(result);
        }


        if (n == '7') {
            result = [
                "pn1", "pn2", "pn3", "pn4", "pn5", "pn6",
                "ps1", "ps2", "ps3", "ps4", "ps5", "ps6", "ps7",
                "ph1", "ph2", "ph3", "ph4", "ph5", "ph6", "ph7",
                "pd1", "pd2", "pd3", "pd4", "pd5", "pd6", "pd7",
                "pc1", "pc2", "pc3", "pc4", "pc5", "pc6", "pc7"
            ];

            console.log(result);
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

            console.log(result);
        }

        if (n == '2') {
            result = [
                "pn1",
                "ps1",
                "ph1", "ph2",
                "pd1", "pd2",
                "pc1", "pc2",
            ];

            console.log(result);
        }

        if (n == '3') {
            result = [
                "pn1", "pn2",
                "ps1", "ps2",
                "ph1", "ph2", "ph3",
                "pd1", "pd2", "pd3",
                "pc1", "pc2", "pc3"
            ];

            console.log(result);
        }

        if (n == '4') {
            result = [
                "pn1", "pn2", "pn3",
                "ps1", "ps2", "ps3",
                "ph1", "ph2", "ph3", "ph4",
                "pd1", "pd2", "pd3", "pd4",
                "pc1", "pc2", "pc3", "pc4"
            ];

            console.log(result);
        }

        if (n == '5') {
            result = [
                "pn1", "pn2", "pn3", "pn4",
                "ps1", "ps2", "ps3", "ps4",
                "ph1", "ph2", "ph3", "ph4", "ph5",
                "pd1", "pd2", "pd3", "pd4", "pd5",
                "pc1", "pc2", "pc3", "pc4", "pc5"
            ];

            console.log(result);
        }

        if (n == '6') {
            result = [
                "pn1", "pn2", "pn3", "pn4", "pn5",
                "ps1", "ps2", "ps3", "ps4", "ps5",
                "ph1", "ph2", "ph3", "ph4", "ph5", "ph6",
                "pd1", "pd2", "pd3", "pd4", "pd5", "pd6",
                "pc1", "pc2", "pc3", "pc4", "pc5", "pc6"
            ];

            console.log(result);
        }

        if (n == '7') {
            result = [
                "pn1", "pn2", "pn3", "pn4", "pn5", "pn6",
                "ps1", "ps2", "ps3", "ps4", "ps5", "ps6",
                "ph1", "ph2", "ph3", "ph4", "ph5", "ph6", "ph7",
                "pd1", "pd2", "pd3", "pd4", "pd5", "pd6", "pd7",
                "pc1", "pc2", "pc3", "pc4", "pc5", "pc6", "pc7"
            ];

            console.log(result);
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

            console.log(result);
        }

        if (n == '2') {
            result = [
                "pn1",
                "ps1",
                "ph1",
                "pd1", "pd2",
                "pc1", "pc2"
            ];

            console.log(result);
        }

        if (n == '3') {
            result = [
                "pn1", "pn2",
                "ps1", "ps2",
                "ph1", "ph2",
                "pd1", "pd2", "pd3",
                "pc1", "pc2", "pc3"
            ];

            console.log(result);
        }

        if (n == '4') {
            result = [
                "pn1", "pn2", "pn3",
                "ps1", "ps2", "ps3",
                "ph1", "ph2", "ph3",
                "pd1", "pd2", "pd3", "pd4",
                "pc1", "pc2", "pc3", "pc4"
            ];

            console.log(result);
        }

        if (n == '5') {
            result = [
                "pn1", "pn2", "pn3", "pn4",
                "ps1", "ps2", "ps3", "ps4",
                "ph1", "ph2", "ph3", "ph4",
                "pd1", "pd2", "pd3", "pd4", "pd5",
                "pc1", "pc2", "pc3", "pc4", "pc5"
            ];

            console.log(result);
        }

        if (n == '6') {
            result = [
                "pn1", "pn2", "pn3", "pn4", "pn5",
                "ps1", "ps2", "ps3", "ps4", "ps5",
                "ph1", "ph2", "ph3", "ph4", "ph5",
                "pd1", "pd2", "pd3", "pd4", "pd5", "pd6",
                "pc1", "pc2", "pc3", "pc4", "pc5", "pc6"
            ];

            console.log(result);
        }

        if (n == '7') {
            result = [
                "pn1", "pn2", "pn3", "pn4", "pn5", "pn6",
                "ps1", "ps2", "ps3", "ps4", "ps5", "ps6",
                "ph1", "ph2", "ph3", "ph4", "ph5", "ph6",
                "pd1", "pd2", "pd3", "pd4", "pd5", "pd6", "pd7",
                "pc1", "pc2", "pc3", "pc4", "pc5", "pc6", "pc7"
            ];

            console.log(result);
        }
    }



    //---------------------------case club ---------------------------------------

    if (r == 'pc') {
        //console.log("noo");
        if (n == '1') {
            result = [
                "pc1"
            ];

            console.log(result);
        }

        if (n == '2') {
            result = [
                "pn1",
                "ps1",
                "ph1",
                "pd1",
                "pc1", "pc2"
            ];

            console.log(result);
        }

        if (n == '3') {
            result = [
                "pn1", "pn2",
                "ps1", "ps2",
                "ph1", "ph2",
                "pd1", "pd2",
                "pc1", "pc2", "pc3"
            ];

            console.log(result);
        }

        if (n == '4') {
            result = [
                "pn1", "pn2", "pn3",
                "ps1", "ps2", "ps3",
                "ph1", "ph2", "ph3",
                "pd1", "pd2", "pd3",
                "pc1", "pc2", "pc3", "pc4"
            ];

            console.log(result);
        }

        if (n == '5') {
            result = [
                "pn1", "pn2", "pn3", "pn4",
                "ps1", "ps2", "ps3", "ps4",
                "ph1", "ph2", "ph3", "ph4",
                "pd1", "pd2", "pd3", "pd4",
                "pc1", "pc2", "pc3", "pc4", "pc5"
            ];

            console.log(result);
        }

        if (n == '6') {
            result = [
                "pn1", "pn2", "pn3", "pn4", "pn5",
                "ps1", "ps2", "ps3", "ps4", "ps5",
                "ph1", "ph2", "ph3", "ph4", "ph5",
                "pd1", "pd2", "pd3", "pd4", "pd5",
                "pc1", "pc2", "pc3", "pc4", "pc5", "pc6"
            ];

            console.log(result);
        }

        if (n == '7') {
            result = [
                "pn1", "pn2", "pn3", "pn4", "pn5", "pn6",
                "ps1", "ps2", "ps3", "ps4", "ps5", "ps6",
                "ph1", "ph2", "ph3", "ph4", "ph5", "ph6",
                "pd1", "pd2", "pd3", "pd4", "pd5", "pd6",
                "pc1", "pc2", "pc3", "pc4", "pc5", "pc6", "pc7"
            ];

            console.log(result);
        }

        ///////////////deacler function///////////////////////////
        var declarer=x.position;
        var dummy ="";
        var start="";



if(x.position == "north")
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


else if(x.position == "east")
{
	dummy = "west";
	start ="south";
}


else if(x.position == "south")
{
	dummy = "north";
	start ="west";
}


else if(x.position == "west")
{
	dummy = "east";
	start ="north";
}




console.log("declarer is :  "+declarer);
console.log("dummy is :  "+dummy);
console.log("start position is : "+start);


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




    //---------------------------case pass ---------------------------------------

    // if(r == 'pa')
    // {   
    // 	console.log('pass');
    // 	result = [];
    // }


    //---------------------------case double ---------------------------------------

    if (r == 'do') {
        console.log('double');
        result = [];
    }


    //---------------------------case hint ---------------------------------------

    if (r == 'hi') {
        console.log('hint');
        result = [];
    }


    //---------------------------case continue ---------------------------------------

    if (r == 'co') {
        console.log('continue');
        result = [];
    }

    for (var i = 0; i < result.length; i++) {
        var disBtn = document.getElementById(result[i]);
        disBtn.disabled = true;
        disBtn.style.background = "#000 url('images/locker.png') no-repeat center";
        disBtn.innerHTML = "";
    }

});


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




// click function on screen and return json for player id and card id

// let playerId = "1";
// var coY = 0;
// var coX = 0;

// // 
// $(".card").click(function() {
//     var l = $(this).attr("id");
//     $('#south').append($(this));
//     coY = $('#south').offset().top;
//     coX = $('#south').offset().left;
//     $(this).offset({
//         top: coY,
//         left: coX
//     });
//     console.log(coX);
//     console.log(coY);

//     checkIfMax();

//     function checkIfMax() {
//         $(".card").addClass("dis"); //disables

//     }

//     // convert to json format
//     var jsonResult = '[';
//     jsonResult += '   {';
//     jsonResult += '"player1"';
//     jsonResult += ':{ "position" : " ';
//     jsonResult += playerId;
//     jsonResult += '" , "card" : "';
//     jsonResult += l;
//     jsonResult += '"}}]';
//     jsonResult = jsonResult.replace(/\s/g, "");
//     console.log(jsonResult);

// });
//////////////////////////////////////////////////



  var emojis = JSON.parse('[{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":null,"width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/smirking-face_1f60f.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/persevering-face_1f623.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/disappointed-but-relieved-face_1f625.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/face-with-open-mouth_1f62e.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/hushed-face_1f62f.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/sleepy-face_1f62a.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/tired-face_1f62b.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/sleeping-face_1f634.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/relieved-face_1f60c.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/face-with-stuck-out-tongue_1f61b.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/face-with-stuck-out-tongue-and-winking-eye_1f61c.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/face-with-stuck-out-tongue-and-tightly-closed-eyes_1f61d.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/unamused-face_1f612.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/face-with-cold-sweat_1f613.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/pensive-face_1f614.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/confused-face_1f615.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/astonished-face_1f632.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/slightly-frowning-face_1f641.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/confounded-face_1f616.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/disappointed-face_1f61e.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/worried-face_1f61f.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/face-with-look-of-triumph_1f624.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/crying-face_1f622.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/loudly-crying-face_1f62d.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/frowning-face-with-open-mouth_1f626.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/anguished-face_1f627.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/fearful-face_1f628.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/weary-face_1f629.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/grimacing-face_1f62c.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/face-with-open-mouth-and-cold-sweat_1f630.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/face-screaming-in-fear_1f631.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/flushed-face_1f633.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/dizzy-face_1f635.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/pouting-face_1f621.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/angry-face_1f620.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/face-with-medical-mask_1f637.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/smiling-face-with-halo_1f607.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/smiling-face-with-horns_1f608.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/imp_1f47f.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/japanese-ogre_1f479.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/japanese-goblin_1f47a.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/skull_1f480.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/ghost_1f47b.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/extraterrestrial-alien_1f47d.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/alien-monster_1f47e.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/pile-of-poo_1f4a9.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/smiling-cat-face-with-open-mouth_1f63a.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/grinning-cat-face-with-smiling-eyes_1f638.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/cat-face-with-tears-of-joy_1f639.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/smiling-cat-face-with-heart-shaped-eyes_1f63b.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/cat-face-with-wry-smile_1f63c.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/kissing-cat-face-with-closed-eyes_1f63d.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/weary-cat-face_1f640.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/crying-cat-face_1f63f.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/pouting-cat-face_1f63e.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/see-no-evil-monkey_1f648.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/hear-no-evil-monkey_1f649.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/speak-no-evil-monkey_1f64a.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/baby_1f476.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/boy_1f466.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/girl_1f467.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/man_1f468.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/woman_1f469.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/older-man_1f474.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/older-woman_1f475.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/police-officer_1f46e.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/guardsman_1f482.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/construction-worker_1f477.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/princess_1f478.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/man-with-turban_1f473.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/man-with-gua-pi-mao_1f472.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/person-with-blond-hair_1f471.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/bride-with-veil_1f470.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/baby-angel_1f47c.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/father-christmas_1f385.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/person-frowning_1f64d.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/person-with-pouting-face_1f64e.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/face-with-no-good-gesture_1f645.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/face-with-ok-gesture_1f646.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/information-desk-person_1f481.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/happy-person-raising-one-hand_1f64b.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/person-bowing-deeply_1f647.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/face-massage_1f486.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/haircut_1f487.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/pedestrian_1f6b6.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/runner_1f3c3.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/dancer_1f483.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/woman-with-bunny-ears_1f46f.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/bath_1f6c0.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/bust-in-silhouette_1f464.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/busts-in-silhouette_1f465.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/horse-racing_1f3c7.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/snowboarder_1f3c2.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/surfer_1f3c4.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/rowboat_1f6a3.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/swimmer_1f3ca.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/bicyclist_1f6b4.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/man-and-woman-holding-hands_1f46b.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/two-men-holding-hands_1f46c.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/two-women-holding-hands_1f46d.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/kiss_1f48f.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/couple-with-heart_1f491.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/family_1f46a.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/flexed-biceps_1f4aa.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/white-left-pointing-backhand-index_1f448.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/white-right-pointing-backhand-index_1f449.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/white-up-pointing-backhand-index_1f446.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/white-down-pointing-backhand-index_1f447.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/victory-hand_270c.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/raised-hand_270b.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/ok-hand-sign_1f44c.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/thumbs-up-sign_1f44d.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/thumbs-down-sign_1f44e.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/fisted-hand-sign_1f44a.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/waving-hand-sign_1f44b.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/clapping-hands-sign_1f44f.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/open-hands-sign_1f450.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/person-raising-both-hands-in-celebration_1f64c.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/person-with-folded-hands_1f64f.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/nail-polish_1f485.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/ear_1f442.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/nose_1f443.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/footprints_1f463.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/eyes_1f440.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/eye_1f441.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/tongue_1f445.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/mouth_1f444.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/kiss-mark_1f48b.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/heart-with-arrow_1f498.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/heavy-black-heart_2764.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/beating-heart_1f493.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/broken-heart_1f494.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/two-hearts_1f495.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/sparkling-heart_1f496.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/growing-heart_1f497.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/blue-heart_1f499.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/green-heart_1f49a.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/yellow-heart_1f49b.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/purple-heart_1f49c.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/heart-with-ribbon_1f49d.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/revolving-hearts_1f49e.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/heart-decoration_1f49f.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/love-letter_1f48c.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/sleeping-symbol_1f4a4.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/anger-symbol_1f4a2.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/bomb_1f4a3.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/collision-symbol_1f4a5.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/splashing-sweat-symbol_1f4a6.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/dash-symbol_1f4a8.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/dizzy-symbol_1f4ab.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/speech-balloon_1f4ac.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/thought-balloon_1f4ad.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/eyeglasses_1f453.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/necktie_1f454.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/t-shirt_1f455.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/jeans_1f456.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/dress_1f457.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/kimono_1f458.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/bikini_1f459.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/womans-clothes_1f45a.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/purse_1f45b.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/handbag_1f45c.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/pouch_1f45d.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/school-satchel_1f392.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/mans-shoe_1f45e.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/athletic-shoe_1f45f.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/high-heeled-shoe_1f460.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/womans-sandal_1f461.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/womans-boots_1f462.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/crown_1f451.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/womans-hat_1f452.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/top-hat_1f3a9.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/graduation-cap_1f393.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/lipstick_1f484.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/ring_1f48d.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/gem-stone_1f48e.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/monkey-face_1f435.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/monkey_1f412.png","width":"72","height":"72"},{"name":"https://emojipedia-us.s3.amazonaws.com/thumbs/72/mozilla/36/dog-face_1f436.png","width":"72","height":"72"}]');
  
  // Selectors
  
  var messages = document.querySelector('.messages')
  var btn = document.querySelector('.btns')
  var outPut = document.querySelector('.inputs textarea')
  var emojiholder = document.querySelector('.emoji-holder')
  var emojiwrapper = document.querySelector('.emoji-wrapper')
  var emojibtn = document.querySelector('.emoji-btn')
  var wave = document.getElementById('wave');
  
  // Button/Enter Key
  btn.addEventListener('click', sendMessage)
//   outPut.addEventListener('keyup', function(evt){
//       $('#typing').show();
//      //new line in text area
//     if (event.keyCode == 13 && event.shiftKey) {
//         this.value+='<br>';
//         // var caret = getCaret(this);
//         // this.value = content.substring(0,caret)+"\n"+content.substring(caret,content.length-1);
//         event.stopPropagation(); 
//     }
//     //   else if(evt.keyCode == 13){
//     //     $('#typing').hide();
//     //     sendMessage();
//     // } 
//     $('#typing').hide();
//      });
  emojibtn.addEventListener('click', function(e){
     e.stopPropagation()
     this.classList.toggle('open')
  })
  document.body.addEventListener('click', function(){
     emojibtn.classList.remove('open')
  })
  
  // Messenger Functions
  function sendMessage(){
     var msg = outPut.value;
     socket.emit('sendmsgtoserver',outPut.value);
   //  outPut.value = ''
     writeLine(msg)
  }






  function addMessage(evt){
     console.log(evt);
     var msg = evt.data ? JSON.parse(evt.data) : evt;
     writeLine(`${msg.FROM}: ${msg.MESSAGE}`)
     console.log(evt.data);
  }
  



/////////////////////receive chat data and not repeated ///////////////////////////////////////////
    socket.on('addtochat',function(text)
    {
    console.log(text);
    messages.innerHTML +=   text  + "</br>";
    // messages.appendChild(message);
     messages.scrollTop = messages.scrollHeight;
    });




//////////////////////////i think it not necessary//////////////////////////////////////////////////////////////////////
  function writeLine(data){
    //  var message = document.createElement('div')
    //  message.classList.add('message')
    //  socket.on('addtochat',function(text){
    //      console.log(text);
    //     messages.innerHTML += 'player says: ' + text  + "</br>";
    //     // messages.appendChild(message);
    //  messages.scrollTop = messages.scrollHeight;
    // });
  }
  
  // Load the Emojies
  for(var i = 0; i < emojis.length; i++){
     if(emojis[i].name == null) continue
     emojiwrapper.innerHTML += `
        <img class="emoji-img" src="${emojis[i].name}"/>
     `
  }
  
  // Emoji Events
  var emojiElements = []
  setTimeout(function(){
     emojiElements = document.querySelectorAll('.emoji-popup .emoji-img')
     for(var i = 0; i < emojiElements.length; i++){
        emojiElements[i].addEventListener('click', function(){
           outPut.value = `<img style="width:48px; height: 48px" src="${this.getAttribute('src')}"/>`
           sendMessage()
           emojibtn.classList.remove('open')
        })
     }
  })
  
  //header toggle
  $(function(){
    $('.chat-header').click(function(){
      $(this).toggleClass('offline');
      $(this).toggleClass('online');
      $('.chat-window').toggleClass('docked');
    });
    
    setInterval(function(){
      $('.progress-indicator').toggleClass('hide');
    },7846);
  });