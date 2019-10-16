
// function southPosition() {
//     // if(document.title = "Player 1") {
//     //     // rearrange player position
//     //     $('#oldNorth').attr('id', 'south');
//     //     $('#oldEast').attr('id', 'west');
//     //     $('#oldSouth').attr('id', 'north');
//     //     $('#oldWest').attr('id', 'east');
//     //     deck.cards.forEach(function(card, i) {

//     //         cardTemp = card.$el.id;
//     //         for (var y = 0; y < northArr.length; y++) {
//     //             if (northArr[y] == cardTemp) {
//     //                 card.setSide('front');
//     //             }
//     //         }
//     //     });
//     //     for (var i = 0; i < southArr.length; i++) {
//     //         m = document.getElementById(southArr[i]);
//     //         document.getElementById("temp").appendChild(m);
//     //         $(m).animate({
//     //             left: -200 + i * 30,
//     //             top: -370,
//     //             zIndex: i,
//     //         });
//     //     }


//     //     for (var i = 0; i < westArr.length; i++) {
//     //         m = document.getElementById(westArr[i]);
//     //         document.getElementById("temp").appendChild(m);
//     //         $(m).addClass("dis"); //disables
//     //         $(m).animate({
//     //             left: 350,
//     //             top: -250 + i * 30,
//     //             zIndex: i,
//     //         });
//     //     }


//     //     for (var i = 0; i < northArr.length; i++) {
//     //         m = document.getElementById(northArr[i]);
//     //         document.getElementById("temp").appendChild(m);
//     //         $(m).addClass("dis"); //disables
//     //         $(m).animate({
//     //             left: -200 + i * 30,
//     //             top: 170,
//     //             zIndex: i,
//     //         });
//     //     }

//     //     for (var i = 0; i < eastArr.length; i++) {
//     //         m = document.getElementById(eastArr[i]);
//     //         document.getElementById("temp").appendChild(m);
//     //         $(m).addClass("dis"); //disables
//     //         $(m).animate({
//     //             left: -350,
//     //             top: -250 + i * 30,
//     //             zIndex: i,
//     //         });
//     //     }
//     //  }
// //     // // // player east
// //     // else if(document.title = "Player 2") {
// //     //   // rearrange player position
// //     //   $('#oldNorth').attr('id', 'west');
// //     //   $('#oldEast').attr('id', 'north');
// //     //   $('#oldSouth').attr('id', 'east');
// //     //   $('#oldWest').attr('id', 'south');

// //     //   deck.cards.forEach(function(card, i) { 
// //     //           cardTemp = card.$el.id;
// //     //           for(var y=0;y<eastArr.length;y++){
// //     //               if (eastArr[y]==cardTemp) {
// //     //                   card.setSide('front');
// //     //               } 
// //     //       }
// //     //       });
// //     //       for (var i = 0; i < westArr.length; i++) {
// //     //           m = document.getElementById(westArr[i]);
// //     //           document.getElementById("temp").appendChild(m);
// //     //           $(m).addClass("dis"); //disables
// //     //           $(m).animate({
// //     //               left: -200 + i * 30,
// //     //               top: -370,
// //     //               zIndex: i,
// //     //           });
// //     //       }
      
      
// //     //       for (var i = 0; i < northArr.length; i++) {
// //     //           m = document.getElementById(northArr[i]);
// //     //           document.getElementById("temp").appendChild(m);
// //     //           $(m).animate({
// //     //               left: 350,
// //     //               top: -250 + i * 30,
// //     //               zIndex: i,
// //     //           });
// //     //       }
      
      
// //     //       for (var i = 0; i < eastArr.length; i++) {
// //     //           m = document.getElementById(eastArr[i]);
// //     //           document.getElementById("temp").appendChild(m);
// //     //           $(m).addClass("dis"); //disables
// //     //           $(m).animate({
// //     //               left: -200 + i * 30,
// //     //               top: 170,
// //     //               zIndex: i,
// //     //           });
// //     //       }
      
// //     //       for (var i = 0; i < southArr.length; i++) {
// //     //           m = document.getElementById(southArr[i]);
// //     //           document.getElementById("temp").appendChild(m);
// //     //           $(m).addClass("dis"); //disables
// //     //           $(m).animate({
// //     //               left: -350,
// //     //               top: -250 + i * 30,
// //     //               zIndex: i,
// //     //           });
// //     //       }
// //     //  }

// //     // // // player south
// //     // else if(document.title = "Player 3") {
        
// //     //     $('#oldNorth').attr('id', 'north');
// //     //     $('#oldEast').attr('id', 'east');
// //     //     $('#oldSouth').attr('id', 'south');
// //     //     $('#oldWest').attr('id', 'west');
// //     //      deck.cards.forEach(function(card, i) { 
                
// //     //             cardTemp = card.$el.id;
// //     //             for(var y=0;y<southArr.length;y++){
// //     //                 if (southArr[y]==cardTemp) {
// //     //                     card.setSide('front');
// //     //                 } 
// //     //         }
// //     //         });
// //     //         for (var i = 0; i < northArr.length; i++) {
// //     //             m = document.getElementById(northArr[i]);
// //     //             document.getElementById("temp").appendChild(m);
// //     //             $(m).addClass("dis"); //disables
// //     //             $(m).animate({
// //     //                 left: -200 + i * 30,
// //     //                 top: -370,
// //     //                 zIndex: i,
// //     //             });
// //     //         }
        
        
// //     //         for (var i = 0; i < eastArr.length; i++) {
// //     //             m = document.getElementById(eastArr[i]);
// //     //             document.getElementById("temp").appendChild(m);
// //     //             $(m).addClass("dis"); //disables
// //     //             $(m).animate({
// //     //                 left: 350,
// //     //                 top: -250 + i * 30,
// //     //                 zIndex: i,
// //     //             });
// //     //         }
        
        
// //     //         for (var i = 0; i < southArr.length; i++) {
// //     //             m = document.getElementById(southArr[i]);
// //     //             document.getElementById("temp").appendChild(m);
// //     //             $(m).animate({
// //     //                 left: -200 + i * 30,
// //     //                 top: 170,
// //     //                 zIndex: i,
// //     //             });
// //     //         }
        
// //     //         for (var i = 0; i < westArr.length; i++) {
// //     //             m = document.getElementById(westArr[i]);
// //     //             document.getElementById("temp").appendChild(m);
// //     //             $(m).addClass("dis"); //disables
// //     //             $(m).animate({
// //     //                 left: -350,
// //     //                 top: -250 + i * 30,
// //     //                 zIndex: i,
// //     //             });
// //     //         }
// //     //  }
// //     // player west
//     if(document.title = "Player 4") {
        
//         init_game();
//         $('#oldNorth').attr('id', 'east');
//         $('#oldEast').attr('id', 'south');
//         $('#oldSouth').attr('id', 'west');
//         $('#oldWest').attr('id', 'north');


//         deck.cards.forEach(function(card, i) { 
                        
//             cardTemp = card.$el.id;
//             for(var y=0;y<westArr.length;y++){
//                 if (westArr[y]==cardTemp) {
//                     card.setSide('front');
//                 } 
//         }
//         });
//         for (var i = 0; i < eastArr.length; i++) {
//             m = document.getElementById(eastArr[i]);
//             document.getElementById("temp").appendChild(m);
//             $(m).addClass("dis"); //disables
//             $(m).animate({
//                 left: -200 + i * 30,
//                 top: -370,
//                 zIndex: i,
//             });
//         }


//         for (var i = 0; i < southArr.length; i++) {
//             m = document.getElementById(southArr[i]);
//             document.getElementById("temp").appendChild(m);
//             $(m).addClass("dis"); //disables
//             $(m).animate({
//                 left: 350,
//                 top: -250 + i * 30,
//                 zIndex: i,
//             });
//         }


//         for (var i = 0; i < westArr.length; i++) {
//             m = document.getElementById(westArr[i]);
//             document.getElementById("temp").appendChild(m);
//             $(m).addClass("dis"); //disables
//             $(m).animate({
//                 left: -200 + i * 30,
//                 top: 170,
//                 zIndex: i,
//             });
//         }

//         for (var i = 0; i < northArr.length; i++) {
//             m = document.getElementById(northArr[i]);
//             document.getElementById("temp").appendChild(m);
//             $(m).animate({
//                 left: -350,
//                 top: -250 + i * 30,
//                 zIndex: i,
//             });
//         }
//         }

//         }