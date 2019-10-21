

// var Arr=["02c03","03c04","15d03","16d04"];
// trick("east",Arr,"ps1");


function trick(start,PlayedCardsArr,pid) {

console.log("start"+start);

    var player1;
    var player2;
    var player3;
    var player4;
    var start;
    var pid ;   
    var declarerscore;
    var defenderscore;
    
   
    
    if(start == "north")
    {
     player1 = PlayedCardsArr[0];         //north        player1.card
     player2 = PlayedCardsArr[1];         //east         player2.card
     player3 = PlayedCardsArr[2];         //south        player3.card
     player4 = PlayedCardsArr[3];         //west
    }
    
    else if(start == "east")
    {
     player2 = PlayedCardsArr[0];         //east
     player3 = PlayedCardsArr[1];         //south 
     player4 = PlayedCardsArr[2];         //west
     player1 = PlayedCardsArr[3];         //north
    }
    
    else if(start == "south")
    {
     player3 = PlayedCardsArr[0];        //south
     player4 = PlayedCardsArr[1];        //west
     player1 = PlayedCardsArr[2];        //north
     player2 = PlayedCardsArr[3];        //east
    }
    
    else if(start == "west")
    {
     player4 = PlayedCardsArr[0];         //west
     player1 = PlayedCardsArr[1];         //north
     player2 = PlayedCardsArr[2];         //east
     player3 = PlayedCardsArr[3];         //south
    }
    
             //west         player4.card
    var startTrick;
    //socket.emit('PlayedCardsArr',PlayedCardsArr);
    console.log(PlayedCardsArr);
    removeCards(PlayedCardsArr);
    
   console.log(player1);
     


    // scorearray2=score(declarerscoree,defenderscoree,lastpid,0,0,0);
    // games.emit('beforescore','');
    // games.emit('scorearray',scorearray2);

    // console.log("scooooooooore",scorearray2);

    //ableCards(); // Commented By Khaled 11-7-2019
    
    //PlayedCardsArr='';
        var c1 = 0;
        //we(s / n) player 1 or player 3
        var c2 = 0;
        //they(e / w) player 2 or player 4
    
     //   var res = "";
       // var pid = finalBiding;
    //    var pid =lastpid;
   
    console.log("pid"+pid);
        var l = pid.substr(1, 1);
        console.log(l);
    
        //strongest
        var n1 = player1.substr(0, 2);
       //console.log(n1);
        var n2 = player2.substr(0, 2);
      // console.log(n2);
        var n3 = player3.substr(0, 2);
     //  console.log(n3);
        var n4 = player4.substr(0, 2);
      // console.log(n4);
        //suit
        var l1 = player1.substr(2, 1);
      // console.log(l1);
        var l2 = player2.substr(2, 1);
      // console.log(l2);
        var l3 = player3.substr(2, 1);
      // console.log(l3);
        var l4 = player4.substr(2, 1);
     //  console.log(l4);
    //if(((l1==l)||(l3==l)) && ((l2 != l)&& (l4 != l)))             // north or south throw the pid  only (done)
    
    if(((l2 != l) && (l4 != l)) && ((l1 == l) || (l3 == l)))
    {
    

    
    if((l1 == l) && (l3 != l))
    {
        c1++;
        console.log("we");
         console.log(c1);
    startTrick="north";
    console.log(startTrick);
    }
    else if((l3 == l) && (l1 != l))
    {
        c1++;
        console.log("we");
         console.log(c1);
    startTrick="south";
    console.log(startTrick);
    }
    else if((l1 == l) && (l3 == l))
    {
    
        if(n1 > n3)
        {
         startTrick="north";
         console.log(startTrick);
        }
        else
        {
        startTrick="south";
        console.log(startTrick);
        }
    }
    
    
    
    }
    
    else if(((l2==l)||(l4==l)) && ((l1 != l)&& (l3 != l)) )               // east  or west throw the pid only (done)
     {
      c2++;
      console.log("they");
      console.log(c2);
    
    
    
    if((l2 == l) && (l4 != l))
    {
    startTrick="east";
    console.log(startTrick);
    }
    else if((l4 == l) && (l2 != l))
    {
    startTrick="west";
    console.log(startTrick);
    }
    else if((l2 == l) && (l4 == l))
    {
    
        if(n2 > n4)
        {
         startTrick="east";
         console.log(startTrick);
        }
        else
        {
        startTrick="west";
        console.log(startTrick);
        }
    }
    
    
    
    
    
    
    
    
    }
    
    
    
    else if ((l1 == l) && (l2 == l) && (l3 ==l) && (l4 == l))                              //  all thrown the pid suit (done)
    {
        console.log("all pid");

     if((n1 > n2) && (n1 > n3) && (n1 > n4) )
{
     c1++;
         console.log("we");  
    startTrick="north";
     console.log(startTrick); 
}


else if((n2 > n1) && (n2 > n3) && (n2 > n4) )
{
     c2++;
         console.log("they");  
    startTrick="east";
     console.log(startTrick); 
}



else if((n3 > n1) && (n3 > n2) && (n3 > n4) )
{
     c1++;
         console.log("we");  
    startTrick="south";
     console.log(startTrick); 
}

else if((n4 > n1) && (n4 > n2) && (n4 > n3) )
{
     c2++;
         console.log("they");  
    startTrick="west";
     console.log(startTrick); 
}




    //     if(((n1 > n2) &&(n1 > n4)) || ((n3 > n2) &&(n3 > n4)) )
    //   {
    //     console.log("true");
    //     c1++;
    //     console.log("we");
    //    console.log(c1);
    
    
    // if(n1 > n3)
    // {
    //     startTrick="north";
    //    console.log(startTrick);
    // }
    // else
    // {
    //     startTrick="south";
    //    console.log(startTrick);
    
    // }
    
    
    
    
    
    //   }
    //   else
    //   {
    //     console.log("false");
    //     c2++;
    //     console.log("they");
    //     console.log(c2);
        
    
    //     if(n2 > n4)
    //    {
    //     startTrick="east";
    //    console.log(startTrick);
    //    }
    //    else
    //    {
    //     startTrick="west";
    //    console.log(startTrick);
    
    //    }
    
    
    //   } 
    }
    
    
    
    else if ((l1 == l2) && (l2 == l3) && (l3 == l4))                              // no pid thrown from both sides and all have the same suit (done)
    {
        console.log("all same but not pid ");

        if((n1 > n2) && (n1 > n3) && (n1 > n4) )
   {

    console.log("north biggest");
        c1++;
            console.log("we");  
       startTrick="north";
        console.log(startTrick); 
   }
   
   
   else if((n2 > n1) && (n2 > n3) && (n2 > n4) )
   {
    console.log("east biggest");
        c2++;
            console.log("they");  
       startTrick="east";
        console.log(startTrick); 
   }
   
   
   
   else if((n3 > n1) && (n3 > n2) && (n3 > n4) )
   {

    console.log("south biggest");
        c1++;
            console.log("we");  
       startTrick="south";
        console.log(startTrick); 
   }
   
   else if((n4 > n1) && (n4 > n2) && (n4 > n3) )
   {

    console.log("west biggest");
        c2++;
            console.log("they");  
       startTrick="west";
        console.log(startTrick); 
   }
   
   
    
    }
    
    
    
    
    else if (((l1 == l) && (l3 == l)) && ((l2 == l) || (l4 == l)))                     // 3 thrown the pid
    {
    
    
    var t1 = "";
    var t2 = "";
    var pos1="";
    var pos2="";
    if( n1 > n3)
    {
        t1=player1;
      pos1="north";
    }
    else
    {
      console.log("bigger");
        t1=player3;
      pos1="south";
    }
    
    if (l2 == l)
    {
        t2 = player2;
      pos2="east";
    }
    else
    {
     console.log("iam pid");
        t2 =player4;
     pos2="west";
    
    }
    
    var t11 =t1.substr(0,2);
    
    var t22 =t2.substr(0,2);
    
     if (t11 > t22)
     {
    
        c1++;
        console.log("we");
        console.log(c1);
      console.log(pos1);
      if(pos1 == "north")
      {
        startTrick="north";
        console.log(startTrick);
      }
      else{
        startTrick="south";
        console.log(startTrick);
      }
    
     }
     else
     {
        c2++;
        console.log("they");
        console.log(c2);
        console.log(pos2);
    
    
        if(n2 > n4)
       {
        startTrick="east";
       console.log(startTrick);
       }
       else
       {
        startTrick="west";
        console.log(startTrick);
    
       }
    
    
     }  
    
    
    
    }
    
    
    
    else if (((l1 == l) || (l3 == l)) && ((l2 == l) && (l4 == l)))                         // 3 throw the pid 
    {
    
    
    
    var t1 = "";
    var t2 = "";
    var pos1="";
    var pos2="";
    
    
    if (l1 == l)
    {
        t1 = player1;
      pos1="north";
    }
    else
    {
        t1 =player3;
      pos1="south";
    
    }
    
    
    if( n2 > n4)
    {
        t2=player2;
      pos1="east";
    }
    else
    {
        t2=player4;
      pos1="west";
    }
    
    
    
    var t11 =t1.substr(0,2);
    
    var t22 =t2.substr(0,2);
    
     if (t11 > t22)
     {
    
        c1++;
        console.log("we");
        console.log(c1);
     console.log(pos1);
     if(pos1 == "north")
     {
       startTrick="north";
       console.log(startTrick);
     }
     else{
       startTrick="south";
       console.log(startTrick);
     }
    
     }
     else
     {
        c2++;
       console.log("they");
       console.log(c2);
      console.log(pos2);
    
      if(pos2 == "east")
      {
        startTrick="east";
        console.log(startTrick);
      }
      else{
        startTrick="west";
        console.log(startTrick);
      }
    
     }  
    
    
    
    }
    
    
    else if (((l1 == l)|| (l3 == l)) && ((l2 == l) || (l4 == l)))      // if north or south throw the pid and east or west throw the pid
    {
    
    var t1 = "";
    var t2 = "";
    var pos1="";
    var pos2="";
    if (l1 == l)
    {
        t1 = player1;
      pos1="north";
    }
    else
    {
        t1 =player3;
      pos1="south";
    
    }
    
    
    
    if (l2 == l)
    {
        t2 = player2;
      pos2="east";
    }
    else
    {
        t2 =player4;
      pos2="west";
    
    }
    
    var t11 =t1.substr(0,2);
    
    var t22 =t2.substr(0,2);
    
     if (t11 > t22)
     {
    
        c1++;
        console.log("we");
       console.log(c1);
      console.log(pos1);
    
      if(pos1 == "north")
      {
        startTrick="north";
        console.log(startTrick);
      }
      else{
        startTrick="south";
        console.log(startTrick);
      }
    
     }
     else
     {
        c2++;
        console.log("they");
       console.log(c2);
      console.log(pos2);

      if(pos2 == "east")
      {
        startTrick="east";
        console.log(startTrick);
      }
      else{
        startTrick="west";
        console.log(startTrick);
      }
     }  
    
     
     }
    

    
     
    /*************** no pid and compare by the start suit ********/
    else if ((l1!=l) && (l2!=l) && (l3!=l) && (l4!=l))
    {

        
    if (start == "north")             // l1 is start
    {

        console.log("iam here");
        console.log(start);
        
        if((l2!=l1)  && (l3!=l1) && (l4!=l1))      // l2 & l3 &l4   != l1
        {
            
        c1++;
        console.log("we");
         console.log(c1);
         startTrick="north";
         console.log(startTrick);
         }
        
        else if((l2 == l1)  && (l3!=l1) && (l4!=l1) )    //l2= l1   & (l3&l4  != l1) 
        {
            if(n1 > n2)                // l1 > l2
            {
                     
        c1++;
        console.log("we");
         console.log(c1);
         startTrick="north";
         console.log(startTrick);
            }
            else{                       // l2>l1
                c2++;
        console.log("they");
         console.log(c2);
         startTrick="east";
         console.log(startTrick);
            }

        }
        else if((l3 == l1)  && (l2!=l1) && (l4!=l1) )    //l2= l1   & (l3&l4  != l1) 
        {
            if(n1 > n3)                // l1 > l3
            {
                     
        c1++;
        console.log("we");
         console.log(c1);
         startTrick="north";
         console.log(startTrick);
            }
            else{                       // l3>l1
                c1++;
        console.log("we");
         console.log(c1);
         startTrick="south";
         console.log(startTrick);
            }

        }
        else if((l4 == l1)  && (l2!=l1) && (l3!=l1) )    //l4= l1   & (l3&l2  != l1) 
        {
            if(n1 > n4)                // l1 > l4
            {
                     
        c1++;
        console.log("we");
         console.log(c1);
         startTrick="north";
         console.log(startTrick);
            }
            else{                       // l4>l1
                c2++;
        console.log("they");
         console.log(c2);
         startTrick="west";
         console.log(startTrick);
            }

        }
   
        else if((l2 == l1)  && (l3==l1) && (l4!=l1) )    //l2 && l3= l1   & (l4  != l1) 
        {
            if((n1 > n2) && (n1 > n3))                // l1 > l2 && l1 > l3
            {
                     
        c1++;
        console.log("we");
         console.log(c1);
         startTrick="north";
         console.log(startTrick);
            }
            else if ((n2 > n1) && (n2 > n3)){                       // l2 > l1 && l2 > l3
                c2++;
        console.log("they");
         console.log(c2);
         startTrick="east";
         console.log(startTrick);
            }
            else if((n3 > n1) && (n3 > n2))                // l3 > l1 && l3 > l2
            {
                     
        c1++;
        console.log("we");
         console.log(c1);
         startTrick="south";
         console.log(startTrick);
            }

        }

        else if((l2 == l1)  && (l4==l1) && (l3!=l1) )    //l2 && l4= l1   & (l3  != l1) 
        {
            if((n1 > n2) && (n1 > n4))                // l1 > l2 && l1 > l4
            {
                     
        c1++;
        console.log("we");
         console.log(c1);
         startTrick="north";
         console.log(startTrick);
            }
            else if ((n2 > n1) && (n2 > n4)){                       // l2 > l1 && l2 > l4
                c2++;
        console.log("they");
         console.log(c2);
         startTrick="east";
         console.log(startTrick);
            }
            else if((n4 > n1) && (n4 > n2))                // l4 > l1 && l4 > l2
            {
                     
                c2++;
        console.log("they");
         console.log(c2);
         startTrick="west";
         console.log(startTrick);
            }

        }

        else if((l3 == l1)  && (l4==l1) && (l2!=l1) )    //l3 && l4= l1   & (l2  != l1) 
        {
            if((n1 > n3) && (n1 > n4))                // l1 > l3 && l1 > l4
            {
                     
        c1++;
        console.log("we");
         console.log(c1);
         startTrick="north";
         console.log(startTrick);
            }
            else if ((n3 > n1) && (n3 > n4)){                       // l3 > l1 && l3 > l4
                c1++;
        console.log("we");
         console.log(c1);
         startTrick="south";
         console.log(startTrick);
            }
            else if((n4 > n1) && (n4 > n3))                // l4 > l1 && l4 > l3
            {
                     
                c2++;
        console.log("they");
         console.log(c2);
         startTrick="west";
         console.log(startTrick);
            }

        }


    }
    else if (start == "east")          //l2 is start
    {

        
        console.log("iam here");
        console.log(start);
        console.log(player2);
        if((l1!=l2)  && (l3!=l2) && (l4!=l2))      // l1 & l3 &l4   != l2
        {
            
        c2++;
        console.log("they");
         console.log(c2);
         startTrick="east";
         console.log(startTrick);
         }
        
        else if((l1 == l2)  && (l3!=l2) && (l4!=l2) )    //l1= l2   & (l3&l4  != l2) 
        {
            if(n2 > n1)                // l2 > l1
            {
                     
        c2++;
        console.log("they");
         console.log(c2);
         startTrick="east";
         console.log(startTrick);
            }
            else{                       // l1>l2
                c1++;
        console.log("we");
         console.log(c1);
         startTrick="north";
         console.log(startTrick);
            }

        }
        else if((l3 == l2)  && (l1!=l2) && (l4!=l2) )    //l3= l2   & (l1&l4  != l2) 
        {
            if(n2 > n3)                // l2 > l3
            {
                     
                c2++;
        console.log("they");
         console.log(c2);
         startTrick="east";
         console.log(startTrick);
            }
            else{                       // l3>l2
                c1++;
        console.log("we");
         console.log(c1);
         startTrick="south";
         console.log(startTrick);
            }

        }
        else if((l4 == l2)  && (l1!=l2) && (l3!=l2) )    //l4= l2   & (l1&l3  != l2) 
        {
            if(n2 > n4)                // l2 > l4
            {
                     
                c2++;
        console.log("they");
         console.log(c2);
         startTrick="east";
         console.log(startTrick);
            }
            else{                       // l4>l2
                c1++;
        console.log("we");
         console.log(c1);
         startTrick="west";
         console.log(startTrick);
            }

        }
   
        else if((l1 == l2)  && (l3==l2) && (l4!=l2) )    //l1 && l3= l2   & (l4  != l2) 
        {
            if((n2 > n1) && (n2 > n3))                // l2 > l1 && l2 > l3
            {
                     
                c2++;
        console.log("they");
         console.log(c2);
         startTrick="east";
         console.log(startTrick);
            }
            else if ((n3 > n2) && (n3 > n1)){                       // l3 > l2 && l3 > l1
                c1++;
        console.log("we");
         console.log(c1);
         startTrick="south";
         console.log(startTrick);
            }
            else if((n1 > n2) && (n1 > n3))                // l1 > l2 && l1 > l3
            {
                     
        c1++;
        console.log("we");
         console.log(c1);
         startTrick="north";
         console.log(startTrick);
            }

        }

        else if((l3 == l2)  && (l4==l2) && (l1!=l2) )    //l3 && l4= l2   & (l1!= l2) 
        {
            if((n2 > n3) && (n2 > n4))                // l2 > l3 && l2 > l4
            {
                     
                c2++;
        console.log("they");
         console.log(c2);
         startTrick="east";
         console.log(startTrick);
            }
            else if ((n3 > n2) && (n3 > n4)){                       // l3 > l2 && l3 > l4
                c1++;
        console.log("we");
         console.log(c1);
         startTrick="south";
         console.log(startTrick);
            }
            else if((n4 > n2) && (n4 > n3))                // l4 > l2 && l4 > l3
            {
                     
                c2++;
        console.log("they");
         console.log(c2);
         startTrick="west";
         console.log(startTrick);
            }

        }

        else if((l1 == l2)  && (l4==l2) && (l3!=l2) )    //l1 && l4= l2   & (l3  != l2) 
        {
            if((n2 > n1) && (n2 > n4))                // l2 > l1 && l2 > l4
            {
                c2++;
        console.log("they");
         console.log(c2);
         startTrick="east";
         console.log(startTrick);
            }
            else if ((n1 > n2) && (n1 > n4)){                       // l1 > l2 && l1 > l4
                c1++;
        console.log("we");
         console.log(c1);
         startTrick="north";
         console.log(startTrick);
            }
            else if((n4 > n2) && (n4 > n3))                // l4 > l2 && l4 > l3
            {
                     
                c2++;
        console.log("they");
         console.log(c2);
         startTrick="west";
         console.log(startTrick);
            }

        }


    }

    
    else if (start == "south")         //l3 is start
    {
        if((l1!=l3)  && (l2!=l3) && (l4!=l3))      // l1 & l2 &l4   != l3
        {
            
        c1++;
        console.log("we");
         console.log(c1);
         startTrick="south";
         console.log(startTrick);
         }
        
        else if((l2 == l3)  && (l1!=l3) && (l4!=l3) )    //l2= l3   & (l1&l4  != l3) 
        {
            if(n3 > n2)                // l3 > l2
            {
                     
        c1++;
        console.log("we");
         console.log(c1);
         startTrick="south";
         console.log(startTrick);
            }
            else{                       // l2>l3
                c2++;
        console.log("they");
         console.log(c2);
         startTrick="east";
         console.log(startTrick);
            }

        }
        else if((l1 == l3)  && (l2!=l3) && (l4!=l3) )    //l1= l3   & (l2&l4  != l3) 
        {
            if(n3 > n1)                // l3 > l1
            {
                     
        c1++;
        console.log("we");
         console.log(c1);
         startTrick="south";
         console.log(startTrick);
            }
            else{                       // l1>l3
                c1++;
        console.log("we");
         console.log(c1);
         startTrick="north";
         console.log(startTrick);
            }

        }
        else if((l4 == l3)  && (l1!=l3) && (l2!=l3) )    //l4= l3   & (l1&l2  != l3) 
        {
            if(n3 > n4)                // l3 > l4
            {
                     
        c1++;
        console.log("we");
         console.log(c1);
         startTrick="south";
         console.log(startTrick);
            }
            else{                       // l4>l3
                c2++;
        console.log("they");
         console.log(c2);
         startTrick="west";
         console.log(startTrick);
            }

        }
   
        else if((l1 == l3)  && (l2==l3) && (l4!=l3) )    //l1 && l2= l3   & (l4  != l3) 
        {
            if((n1 > n2) && (n1 > n3))                // l1 > l2 && l1 > l3
            {
                     
        c1++;
        console.log("we");
         console.log(c1);
         startTrick="north";
         console.log(startTrick);
            }
            else if ((n2 > n1) && (n2 > n3)){                       // l2 > l1 && l2 > l3
                c2++;
        console.log("they");
         console.log(c2);
         startTrick="east";
         console.log(startTrick);
            }
            else if((n3 > n1) && (n3 > n2))                // l3 > l1 && l3 > l2
            {
                     
        c1++;
        console.log("we");
         console.log(c1);
         startTrick="south";
         console.log(startTrick);
            }

        }

        else if((l1 == l3)  && (l4==l3) && (l2!=l3) )    //l1 && l4= l3   & (l2  != l3) 
        {
            if((n1 > n3) && (n1 > n4))                // l1 > l3 && l1 > l4
            {
                     
        c1++;
        console.log("we");
         console.log(c1);
         startTrick="north";
         console.log(startTrick);
            }
            else if ((n3 > n1) && (n3 > n4)){                       // l3 > l1 && l3 > l4
                c1++;
        console.log("we");
         console.log(c1);
         startTrick="south";
         console.log(startTrick);
            }
            else if((n4 > n1) && (n4 > n3))                // l4 > l1 && l4 > l3
            {
                     
                c2++;
        console.log("they");
         console.log(c2);
         startTrick="west";
         console.log(startTrick);
            }

        }

        else if((l2 == l3)  && (l4==l3) && (l1!=l3) )    //l2 && l4= l3   & (l1  != l3) 
        {
            if((n2 > n3) && (n2 > n4))                // l2 > l3 && l2 > l4
            {
                     
        c2++;
        console.log("they");
         console.log(c2);
         startTrick="east";
         console.log(startTrick);
            }
            else if ((n3 > n2) && (n3 > n4)){                       // l3 > l2 && l3 > l4
                c1++;
        console.log("we");
         console.log(c1);
         startTrick="south";
         console.log(startTrick);
            }
            else if((n4 > n2) && (n4 > n3))                // l4 > l1 && l4 > l3
            {
                     
                c2++;
        console.log("they");
         console.log(c2);
         startTrick="west";
         console.log(startTrick);
            }

        }

        
    }
    
    
    else if (start == "west")           //l4 is start
    {
        if((l1!=l4)  && (l2!=l4) && (l3!=l4))      // l1 & l2 &l3   != l4
        {
            
        c2++;
        console.log("they");
         console.log(c2);
         startTrick="west";
         console.log(startTrick);
         }
        
        else if((l1 == l4)  && (l2!=l4) && (l3!=l4) )    //l1= l4   & (l2&l3  != l4) 
        {
            if(n4 > n1)                // l4 > l1
            {
                     
        c2++;
        console.log("they");
         console.log(c2);
         startTrick="west";
         console.log(startTrick);
            }
            else{                       // l1>l4
                c1++;
        console.log("we");
         console.log(c1);
         startTrick="north";
         console.log(startTrick);
            }

        }
        else if((l2 == l4)  && (l1!=l4) && (l3!=l4) )    //l2= l4   & (l1&l3  != l4) 
        {
            if(n4 > n2)                // l4 > l2
            {
                     
                c2++;
        console.log("they");
         console.log(c2);
         startTrick="west";
         console.log(startTrick);
            }
            else{                       // l2>l4
                c2++;
        console.log("they");
         console.log(c2);
         startTrick="east";
         console.log(startTrick);
            }

        }
        else if((l3 == l4)  && (l1!=l4) && (l2!=l4) )    //l3= l4   & (l1&l2  != l4) 
        {
            if(n4 > n3)                // l4 > l3
            {
                     
                c2++;
        console.log("they");
         console.log(c2);
         startTrick="west";
         console.log(startTrick);
            }
            else{                       // l3>l4
                c1++;
        console.log("we");
         console.log(c1);
         startTrick="south";
         console.log(startTrick);
            }

        }
   
        else if((l1 == l4)  && (l2==l4) && (l3!=l4) )    //l1 && l2= l4   & (l3  != l4) 
        {
            if((n1 > n4) && (n1 > n2))                // l1 > l2 && l1 > l4
            {
                     
                c1++;
        console.log("we");
         console.log(c1);
         startTrick="north";
         console.log(startTrick);
            }
            else if ((n2 > n4) && (n2 > n1)){                       // l2 > l4 && l2 > l1
                c2++;
        console.log("they");
         console.log(c2);
         startTrick="east";
         console.log(startTrick);
            }
            else if((n4 > n1) && (n4 > n2))                // l4 > l1 && l4 > l2
            {
                     
        c2++;
        console.log("they");
         console.log(c2);
         startTrick="west";
         console.log(startTrick);
            }

        }

        else if((l1 == l4)  && (l3==l4) && (l2!=l4) )    //l1 && l3= l4   & (l2!= l4) 
        {
            if((n1 > n3) && (n1 > n4))                // l1 > l3 && l1 > l4
            {
                     
                c1++;
        console.log("we");
         console.log(c1);
         startTrick="north";
         console.log(startTrick);
            }
            else if ((n3 > n1) && (n3 > n4)){                       // l3 > l1 && l3 > l4
                c1++;
        console.log("we");
         console.log(c2);
         startTrick="south";
         console.log(startTrick);
            }
            else if((n4 > n1) && (n4 > n3))                // l4 > l1 && l4 > l3
            {
                     
                c2++;
        console.log("they");
         console.log(c2);
         startTrick="west";
         console.log(startTrick);
            }

        }

        else if((l2 == l4)  && (l3==l4) && (l1!=l4) )    //l2 && l3= l4   & (l1  != l4) 
        {
            if((n2 > n3) && (n2 > n4))                // l2 > l3 && l2 > l4
            {
                c2++;
        console.log("they");
         console.log(c2);
         startTrick="east";
         console.log(startTrick);
            }
            else if ((n3 > n2) && (n3 > n4)){                       // l3 > l2 && l3 > l4
                c1++;
        console.log("we");
         console.log(c1);
         startTrick="south";
         console.log(startTrick);
            }
            else if((n4 > n2) && (n4 > n3))                // l4 > l2 && l4 > l3
            {
                     
                c2++;
        console.log("they");
         console.log(c2);
         startTrick="west";
         console.log(startTrick);
            }

        }
    }


    }
    console.log("start: "+start+"starttrick: "+startTrick);


    games.emit('starttrick',startTrick);
    

    start=startTrick;
    
      var trickscore=[c1,c2];
       games.emit('trickscore',trickscore);
    
    
    
  
    if(res == "noth" || res == "soth")
    {
        console.log("reees"+res);
    games.on('c1',function(data){
      //var data1=data1+data;
      we.innerHTML = "Declarer:" + data;
      console.log(  "weeeee"+ we.innerHTML );
        console.log("declarer"+res);
    declarerscore=data;
   // alert("dec "+declarerscore);
   games.emit("decscore",declarerscore);
    });
    games.on('c2',function(data){
    
       //  var data2=data2+data;
       they.innerHTML = "Defender :" + data;
       console.log(  "theeeeeeeey"+ they.innerHTML );
        defenderscore=data;
        games.emit("defscore",defenderscore);
    //    alert("def "+defenderscore);
    });
    }
    
    
    
    else if(res == "east" || res == "west")
    {
        console.log("reees"+res);
    games.on('c2',function(data){
      //var data1=data1+data;
       we.innerHTML = "Declarer:" + data;
       console.log(  "weeeee"+ we.innerHTML );
        declarerscore=data;
        games.emit("decscore",declarerscore);
    
    });
    games.on('c1',function(data){
    
       //  var data2=data2+data;
       they.innerHTML = "Defender :" + data;
       console.log(  "theeeeeeeey"+ they.innerHTML );
        defenderscore=data;
        games.emit("defscore",defenderscore);
    });

    }





    // var dfs;
    // var ts;
    // games.on('dcs',function(data){
    // dcs =data;
    // });
    
    
    // games.on('dfs',function(data){
    //     dfs=data;
    // });
    
    // ts=dcs+dfs;
    
    
    // alert("ts"+ts);
    
    


    //alert("dec "+declarerscore);
    //alert("def "+defenderscore);
    var startTrickPlayer="";
    
    if(startTrick == "north")
    {
        startTrickPlayer="west";
    }
    if(startTrick == "east")
    {
        startTrickPlayer="north";
    }
    if(startTrick == "south")
    {
        startTrickPlayer="east";
    }
    if(startTrick == "west")
    {
        startTrickPlayer="south";
    }
    
    
   cardsActivationBasedOnPlayer(startTrickPlayer);
    
    }
    