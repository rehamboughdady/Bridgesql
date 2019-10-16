

   
//score(13,0,"pc7",0,1,0);

  
 function score(declarer_score,defender_score,pid,vuln,double,re_double){


   var declarer_score;
   var defender_score;
   var pid;
   var l =pid.substr(1,1);
   var n =pid.substr(2,1);
   //console.log(n);
   
   var pts;
   var points; 
   var tricks;
   var add_tricks;
   var und_tricks;
   var under_tricks;
   var vuln ;
   var over_tricks;
   var grand_slam;
   var slam_bonus ;
   var bounus;
   var overtrick_points;
   var contract_points;
   var undertrick_penalty;
   var they_under;
   var double  ;
   var re_double;
  // var contract_points;
   var overtrick_points;
   var double_bonus;
   var undertrick_penalty;
   var honor_bonus;
   var score=[];
   
   //////////////////////pid suit//////////////////////////////////////////////////////////////////////////
   
   if (l == 's' ||  l  =='h' || l == 'n')
   {
   pts = 30;
   }
   
   else if(l == 'c' || l =='d')
   {
     pts = 20;
   }
   
   
 
   /////////////////////vulun state/////////////////////////////////////////////////////////////////////////
   if(vuln == 0)
   {
 
   
   if( n == 1)
   {
   
    if(declarer_score == 7)
     {
       if(l == 'n')
       {
        if(double == 1)
         {
           points=80;
           contract_points=points;
           double_bonus=50;
           console.log("double_bonus = "+double_bonus);
           console.log("score is contract_points = "+contract_points);
         }
        else if(re_double == 1)
        {
           points=160;
           contract_points=points;
           double_bonus=100;
           console.log("double_bonus = "+double_bonus);
           console.log("score is contract_points = "+contract_points);
        }
        else
        {
           points=40;
           contract_points=points;
           console.log("score is contract_points = "+contract_points);
        }
       }
      else   // case s or h or d or c 
       {
         if(double == 1)
           {
            if(l == 's'||l == 'h')
             {
              points=60;
             
             }
              else
              {
              points=40;
              }
              contract_points=points;
              double_bonus=50;
              console.log("double_bonus = "+double_bonus);
              console.log("score is contract_points = "+contract_points);
            }
         else if(re_double == 1)
           {
              if(l == 's'||l == 'h')
              {
              points=120;
            
              }
              else
              {
              points=80;
              }
              contract_points=points;
              double_bonus=100;
              console.log("double_bonus = "+double_bonus);
              console.log("score is contract_points = "+contract_points);
            }
         else
          {
              points=pts;
              contract_points=points;
               console.log("score is contract_points = "+contract_points);
          }
          }
          }
         //  if((contract_points || they_under) >= 100)
         //  {
         // alert("game is won");
         //  }
    
    else if(declarer_score > 7)
     {
       add_tricks=declarer_score-7; 
       if(l == 'n')
       {
       
       if (double == 1)
       {
       contract_points=80;
       overtrick_points=(50*2*add_tricks);
       double_bonus=50;
       console.log("double_bonus = "+double_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       else if (re_double == 1)
       {
       contract_points=160;
       overtrick_points=(50*4*add_tricks);
       double_bonus=100;
       console.log("double_bonus = "+double_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       else 
       {
        contract_points=40;
        overtrick_points=add_tricks*30;
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       // if((contract_points || they_under) >= 100)
       // {
       //   alert("game is won");
       // }
       }
       else
       {
       if (double == 1)
       {
           if(l=='s'||l=='h')
           {
               points=60;
              
           }
           else
           {
               points=40;
           }  
       contract_points=points;
       overtrick_points=(50*2*add_tricks);
       double_bonus=50;
       console.log("double_bonus = "+double_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       
       }
       else if(re_double == 1)
       {
           if(l=='s'||l=='h')
           {
               points=120;
             
           }
           else
           {
               points=80;
           }
       contract_points=points;
       overtrick_points=(50*4*add_tricks);
       double_bonus=100;
       console.log("double_bonus = "+double_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       else
       {
       contract_points=pts;
       overtrick_points=add_tricks*pts; 
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       }
       // if((contract_points || they_under) >= 100)
       // {
       //   alert("game is won");
       // }
     }
   
          else if(declarer_score<7){
           n=-(declarer_score-7);
              undertrick_penalty=undertricks(vuln,double,re_double,n);
              console.log("undertrick_penalty",undertrick_penalty);
          }
    
      
   } 
   
   /////////////////////////////////////////n = 2/////////////////////////////////////////////////////////////////////
   
   
   if( n == 2)
   {
    if(declarer_score == 8)
     {
       if(l == 'n')
       {
        if(double == 1)
         {
           points=80;
           double_bonus=50;
           console.log("double_bonus = "+double_bonus);
           contract_points=points+60;
           console.log("score is contract_points = "+contract_points);
         }
        else if(re_double == 1)
        {
           points=160;
           double_bonus=100;
           console.log("double_bonus = "+double_bonus);
           contract_points=points+120;
           console.log("score is contract_points = "+contract_points);
        }
        else
        {
           points=40+30;
           contract_points=points;
           console.log("score is contract_points = "+contract_points);
        }
       }
      else   // case s or h or d or c 
       {
         if(double == 1)
           {
            if(l == 's'||l == 'h')
             {
              points=60;
             
             }
              else
              {
              points=40;
              }
              contract_points=points*n;
              double_bonus=50;
              console.log("double_bonus = "+double_bonus);
              console.log("score is contract_points = "+contract_points);
            }
         else if(re_double == 1)
           {
              if(l == 's'||l == 'h')
              {
              points=120;
             
  
              }
              else
              {
              points=80;
              }
              contract_points=points*n;
              double_bonus=100;
              console.log("double_bonus = "+double_bonus);
              console.log("score is contract_points = "+contract_points);
            }
         else
          {
              points=pts*n;
              contract_points=points;
               console.log("score is contract_points = "+contract_points);
          }
          }
          }
        
    
    else if(declarer_score > 8)
     {
       add_tricks=declarer_score-8; 
       if(l == 'n')
       {
       
       if (double == 1)
       {
       contract_points=80+60;
       overtrick_points=(50*2*add_tricks);
       double_bonus=50;
       console.log("double_bonus = "+double_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       else if (re_double == 1)
       {
       contract_points=160+120;
       overtrick_points=(50*4*add_tricks);
       double_bonus=100;
       console.log("double_bonus = "+double_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       else 
       {
        contract_points=40+30;
        overtrick_points=add_tricks*30;
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
      
       }
       else
       {
       if (double == 1)
       {
           if(l=='s'||l=='h')
           {
               points=60;
            
      
           }
           else
           {
               points=40;
           }  
       contract_points=points*n;
       overtrick_points=(50*2*add_tricks);
       double_bonus=50;
       console.log("double_bonus = "+double_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       else if(re_double == 1)
       {
           if(l=='s'||l=='h')
           {
               points=120;
               
       
           }
           else
           {
               points=80;
           }
       contract_points=points*n;
       overtrick_points=(50*4*add_tricks);
       double_bonus=100;
       console.log("double_bonus = "+double_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       else
       {
       contract_points=pts*n;
       overtrick_points=add_tricks*pts; 
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       }
       // if((contract_points || they_under) >= 100)
       // {
       //   alert("game is won");
       // }
     }
   
          else if(declarer_score<8){
           n=-(declarer_score-8);
              undertrick_penalty=undertricks(vuln,double,re_double,n);
              console.log("undertrick_penalty",undertrick_penalty);
          }
    
      
   } 
   /////////////////////////////////////////n = 3/////////////////////////////////////////////////////////////////////
   
   
   if( n == 3)
   {
    if(declarer_score == 9)
     {
       if(l == 'n')
       {
        if(double == 1)
         {
           points=80;
           contract_points=points+(60*n);
           double_bonus=50;
           console.log("double_bonus = "+double_bonus);
           console.log("score is contract_points = "+contract_points);
         }
        else if(re_double == 1)
        {
           points=160;
           contract_points=points+(120*n);
           double_bonus=100;
           console.log("double_bonus = "+double_bonus);
           console.log("score is contract_points = "+contract_points);
        }
        else
        {
           points=40+(30*n);
           contract_points=points;
           console.log("score is contract_points = "+contract_points);
        }
       }
      else   // case s or h or d or c 
       {
         if(double == 1)
           {
            if(l == 's'||l == 'h')
             {
              points=60;
             
         
             }
              else
              {
              points=40;
              }
              contract_points=points*n;
              double_bonus=50;
              console.log("double_bonus = "+double_bonus);
              console.log("score is contract_points = "+contract_points);
            }
         else if(re_double == 1)
           {
              if(l == 's'||l == 'h')
              {
              points=120;
              
       
              }
              else
              {
              points=80;
              }
              contract_points=points*n;
              double_bonus=100;
               console.log("double_bonus = "+double_bonus);
              console.log("score is contract_points = "+contract_points);
            }
         else
          {
              points=pts*n;
              contract_points=points;
               console.log("score is contract_points = "+contract_points);
          }
          }
          }
         //  if((contract_points || they_under) >= 100)
         //  {
         // alert("game is won");
         //  }
    
    else if(declarer_score > 9)
     {
       add_tricks=declarer_score-9; 
       if(l == 'n')
       {
       
       if (double == 1)
       {
       contract_points=80+(60*n);
       overtrick_points=(50*2*add_tricks);
       double_bonus=50;
       console.log("double_bonus = "+double_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       else if (re_double == 1)
       {
       contract_points=160+(120*n);
       overtrick_points=(50*4*add_tricks);
       double_bonus=100;
       console.log("double_bonus = "+double_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       else 
       {
        contract_points=40+(30*n);
        overtrick_points=add_tricks*30;
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       // if((contract_points || they_under) >= 100)
       // {
       //   alert("game is won");
       // }
       }
       else
       {
       if (double == 1)
       {
           if(l=='s'||l=='h')
           {
               points=60;
              
          
           }
           else
           {
               points=40;
           }  
       contract_points=points*n;
       overtrick_points=(50*2*add_tricks);
       double_bonus=50;
       console.log("double_bonus = "+double_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       else if(re_double == 1)
       {
           if(l=='s'||l=='h')
           {
               points=120;
               
  
           }
           else
           {
               points=80;
           }
       contract_points=points*n;
       overtrick_points=(50*4*add_tricks);
       double_bonus=100;
       console.log("double_bonus = "+double_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       else
       {
       contract_points=pts*n;
       overtrick_points=add_tricks*pts; 
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       }
       // if((contract_points || they_under) >= 100)
       // {
       //   alert("game is won");
       // }
     }
   
          else if(declarer_score<9){
            console.log("here");
           n=-(declarer_score-9);
        
              undertrick_penalty=undertricks(vuln,double,re_double,n);
              console.log("undertrick_penalty",undertrick_penalty);
          }
    
      
   }
   
   
   ////////////////////////////////////////n = 4//////////////////////////////////////////////////////////////////////
   
   
   if( n == 4)
   {
    if(declarer_score == 10)
     {
       if(l == 'n')
       {
        if(double == 1)
         {
           points=80;
           contract_points=points+(60*n);
           double_bonus=50;
           console.log("double_bonus = "+double_bonus);
           console.log("score is contract_points = "+contract_points);
         }
        else if(re_double == 1)
        {
           points=160;
           contract_points=points+(120*n);
           double_bonus=100;
           console.log("double_bonus = "+double_bonus);
           console.log("score is contract_points = "+contract_points);
        }
        else
        {
           points=40+(30*n);
           contract_points=points;
           console.log("score is contract_points = "+contract_points);
        }
       }
      else   // case s or h or d or c 
       {
         if(double == 1)
           {
            if(l == 's'||l == 'h')
             {
              points=60;
             
         
             }
              else
              {
              points=40;
              }
              contract_points=points*n;
              double_bonus=50;
              console.log("double_bonus = "+double_bonus);
              console.log("score is contract_points = "+contract_points);
            }
         else if(re_double == 1)
           {
              if(l == 's'||l == 'h')
              {
              points=120;
            
           
              }
              else
              {
              points=80;
              }
              contract_points=points*n;
              double_bonus=100;
             console.log("double_bonus = "+double_bonus);
              console.log("score is contract_points = "+contract_points);
            }
         else
          {
              points=pts*n;
              contract_points=points;
               console.log("score is contract_points = "+contract_points);
          }
          }
          }
         //  if((contract_points || they_under) >= 100)
         //  {
         // alert("game is won");
         //  }
    
    else if(declarer_score > 10)
     {
       add_tricks=declarer_score-10; 
       if(l == 'n')
       {
       
       if (double == 1)
       {
       contract_points=80+(60*n);
       overtrick_points=(50*2*add_tricks);
       double_bonus=50;
       console.log("double_bonus = "+double_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       else if (re_double == 1)
       {
       contract_points=160+(120*n);
       overtrick_points=(50*4*add_tricks);
       double_bonus=100;
       console.log("double_bonus = "+double_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       else 
       {
        contract_points=40+(30*n);
        overtrick_points=add_tricks*30;
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       // if((contract_points || they_under) >= 100)
       // {
       //   alert("game is won");
       // }
       }
       else
       {
       if (double == 1)
       {
           if(l=='s'||l=='h')
           {
               points=60;
               
           
           }
           else
           {
               points=40;
           }  
       contract_points=points*n;
       overtrick_points=(50*2*add_tricks);
       double_bonus=50;
       console.log("double_bonus = "+double_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       else if(re_double == 1)
       {
           if(l=='s'||l=='h')
           {
               points=120;
              
             
 
           }
           else
           {
               points=80;
           }
       contract_points=points*n;
       overtrick_points=(50*4*add_tricks);
       double_bonus=100;
       console.log("double_bonus = "+double_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       else
       {
       contract_points=pts*n;
       overtrick_points=add_tricks*pts; 
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       }
       // if((contract_points || they_under) >= 100)
       // {
       //   alert("game is won");
       // }
     }
   
          else if(declarer_score<10){
           n=-(declarer_score-10);
              undertrick_penalty=undertricks(vuln,double,re_double,n);
              console.log("undertrick_penalty",undertrick_penalty);
          }
    
      
   }
   
   
   ////////////////////////////////////////n = 5//////////////////////////////////////////////////////////////////////
   
   
   if( n == 5)
   {
    if(declarer_score == 11)
     {
       if(l == 'n')
       {
        if(double == 1)
         {
           points=80;
           contract_points=points+(60*n);
           double_bonus=50;
          console.log("double_bonus = "+double_bonus);
           console.log("score is contract_points = "+contract_points);
         }
        else if(re_double == 1)
        {
           points=160;
           contract_points=points+(120*n);
           double_bonus=100;
          console.log("double_bonus = "+double_bonus);
           console.log("score is contract_points = "+contract_points);
        }
        else
        {
           points=40+(30*n);
           contract_points=points;
           console.log("score is contract_points = "+contract_points);
        }
       }
      else   // case s or h or d or c 
       {
         if(double == 1)
           {
            if(l == 's'||l == 'h')
             {
              points=60;
            
         
             }
              else
              {
              points=40;
              }
              contract_points=points*n;
              double_bonus=50;
              console.log("double_bonus = "+double_bonus);
              console.log("score is contract_points = "+contract_points);
            }
         else if(re_double == 1)
           {
              if(l == 's'||l == 'h')
              {
              points=120;
             
          
              }
              else
              {
              points=80;
              }
              contract_points=points*n;
              double_bonus=100;
              console.log("double_bonus = "+double_bonus);
              console.log("score is contract_points = "+contract_points);
            }
         else
          {
              points=pts*n;
              contract_points=points;
               console.log("score is contract_points = "+contract_points);
          }
          }
          }
         //  if((contract_points || they_under) >= 100)
         //  {
         // alert("game is won");
         //  }
    
    else if(declarer_score > 11)
     {
       add_tricks=declarer_score-11; 
       if(l == 'n')
       {
       
       if (double == 1)
       {
       contract_points=80+(60*n);
       overtrick_points=(50*2*add_tricks);
       double_bonus=50;
       console.log("double_bonus = "+double_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       else if (re_double == 1)
       {
       contract_points=160+(120*n);
       overtrick_points=(50*4*add_tricks);
       double_bonus=100;
       console.log("double_bonus = "+double_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       else 
       {
        contract_points=40+(30*n);
        overtrick_points=add_tricks*30;
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       // if((contract_points || they_under) >= 100)
       // {
       //   alert("game is won");
       // }
       }
       else
       {
       if (double == 1)
       {
           if(l=='s'||l=='h')
           {
               points=60;
               
         
           }
           else
           {
               points=40;
           }  
       contract_points=points*n;
       overtrick_points=(50*2*add_tricks);
       double_bonus=50;
       
       console.log("double_bonus = "+double_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       else if(re_double == 1)
       {
           if(l=='s'||l=='h')
           {
               points=120;
              
          
           }
           else
           {
               points=80;
           }
       contract_points=points*n;
       overtrick_points=(50*4*add_tricks);
       double_bonus=100;
       console.log("double_bonus = "+double_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       else
       {
       contract_points=pts*n;
       overtrick_points=add_tricks*pts; 
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       }
       // if((contract_points || they_under) >= 100)
       // {
       //   alert("game is won");
       // }
     }
   
          else if(declarer_score<11){
           n=-(declarer_score-11);
              undertrick_penalty=undertricks(vuln,double,re_double,n);
              console.log("undertrick_penalty",undertrick_penalty);
              
          }
    
      
   }
   
   ////////////////////////////////////////n = 6//////////////////////////////////////////////////////////////////////
   
   
   
   if( n == 6)
   {
    if(declarer_score == 12)
     {
       if(l == 'n')
       {
        if(double == 1)
         {
           points=80;
           contract_points=points+(60*n);
           slam_bonus=500;
           double_bonus=50;
          console.log("double_bonus = "+double_bonus);
           console.log("score is contract_points = "+contract_points);
           console.log("score is slam_points = "+ slam_bonus);
         }
        else if(re_double == 1)
        {
           points=160;
           contract_points=points+(120*n);
           slam_bonus=500;
           double_bonus=100;
          console.log("double_bonus = "+double_bonus);
           console.log("score is contract_points = "+contract_points);
           console.log("score is slam_points = "+ slam_bonus);
        }
        else
        {
           points=40+(30*n);
           contract_points=points;
           slam_bonus=500;
           console.log("score is contract_points = "+contract_points);
           console.log("score is slam_points = "+ slam_bonus);
        }
       }
      else   // case s or h or d or c 
       {
         if(double == 1)
           {
            if(l == 's'||l == 'h')
             {
              points=60;
              
        
             }
              else
              {
              points=40;
              }
              contract_points=points*n;
              slam_bonus=500;
              double_bonus=50;
            console.log("double_bonus = "+double_bonus);
              console.log("score is contract_points = "+contract_points);
              console.log("score is slam_points = "+ slam_bonus);
            }
         else if(re_double == 1)
           {
              if(l == 's'||l == 'h')
              {
              points=120;
              
         
              }
              else
              {
              points=80;
              }
              contract_points=points*n;
             slam_bonus=500;
             double_bonus=100;
              console.log("double_bonus = "+double_bonus);
              console.log("score is contract_points = "+contract_points);
              console.log("score is slam_points = "+ slam_bonus);
            }
         else
          {
              points=pts*n;
              contract_points=points;
              slam_bonus=500;
               console.log("score is contract_points = "+contract_points);
               console.log("score is slam_points = "+ slam_bonus);
          }
          }
          }
         //  if((contract_points || they_under) >= 100)
         //  {
         // alert("game is won");
         //  }
    
    else if(declarer_score > 12)
     {
       add_tricks=declarer_score-12; 
       if(l == 'n')
       {
       
       if (double == 1)
       {
       contract_points=80+(60*n);
       overtrick_points=(50*2*add_tricks);
       slam_bonus=500;
       double_bonus=50;
       console.log("score is slam_points = "+ slam_bonus);
       console.log("double_bonus = "+double_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
    
       }
       else if (re_double == 1)
       {
       contract_points=160+(120*n);
       overtrick_points=(50*4*add_tricks);
       slam_bonus=500;
       double_bonus=100;
       console.log("score is slam_points = "+ slam_bonus);
       console.log("double_bonus = "+double_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       else 
       {
        contract_points=40+(30*n);
        overtrick_points=(add_tricks*30);
        slam_bonus=500;
        console.log("score is slam_points = "+ slam_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       // if((contract_points || they_under) >= 100)
       // {
       //   alert("game is won");
       // }
       }
       else
       {
       if (double == 1)
       {
           if(l=='s'||l=='h')
           {
               points=60;
             
           }
           else
           {
               points=40;
           }  
       contract_points=points*n;
       overtrick_points=(50*2*add_tricks);
       slam_bonus=500;
       double_bonus=50;
       console.log("score is slam_points = "+ slam_bonus);
       console.log("double_bonus = "+double_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       else if(re_double == 1)
       {
           if(l=='s'||l=='h')
           {
               points=120;
          
           }
           else
           {
               points=80;
           }
       contract_points=points*n;
       overtrick_points=(50*4*add_tricks);
       slam_bonus=500;
       double_bonus=100;
       console.log("score is slam_points = "+ slam_bonus);
       console.log("double_bonus = "+double_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       else
       {
       contract_points=pts*n;
       overtrick_points=(add_tricks*pts); 
       slam_bonus=500;
       console.log("score is slam_points = "+ slam_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       }
       // if((contract_points || they_under) >= 100)
       // {
       //   alert("game is won");
       // }
     }
   
          else if(declarer_score<12){
           n=-(declarer_score-12);
              undertrick_penalty=undertricks(vuln,double,re_double,n);
              console.log("undertrick_penalty",undertrick_penalty);
          }
    
      
   }
   
   
   
   
   ////////////////////////////////////////n = 7//////////////////////////////////////////////////////////////////////
   
   
   
   
   if( n == 7)
   {
    if(declarer_score == 13)
     {
       if(l == 'n')
       {
        if(double == 1)
         {
           points=80;
           contract_points=points+(60*n);
           slam_bonus=1000;
           double_bonus=50;
         
          console.log("double_bonus = "+double_bonus);
           console.log("score is contract_points = "+contract_points);
           console.log("score is slam_points = "+ slam_bonus);
         }
        else if(re_double == 1)
        {
           points=160;
           contract_points=points+(120*n);
           slam_bonus=1000;
           double_bonus=100;
         
          console.log("double_bonus = "+double_bonus);
           console.log("score is contract_points = "+contract_points);
           console.log("score is slam_points = "+ slam_bonus);
        }
        else
        {
           points=40+(30*n);
           contract_points=points;
          slam_bonus=1000;
           console.log("score is contract_points = "+contract_points);
           console.log("score is slam_points = "+slam_bonus);
        }
       }
      else   // case s or h or d or c 
       {
         if(double == 1)
           {
            if(l == 's'||l == 'h')
             {
              points=60;
             
             }
              else
              {
              points=40;
              }
              contract_points=points*n;
              slam_bonus=1000;
              double_bonus=50;
              console.log("double_bonus = "+double_bonus);
              console.log("score is slam_points = "+ slam_bonus);
              console.log("score is contract_points = "+contract_points);
            
            }
         else if(re_double == 1)
           {
              if(l == 's'||l == 'h')
              {
              points=120;
              
              }
              else
              {
              points=80;
              }
              contract_points=points*n;
              slam_bonus=1000;
              double_bonus=100;
              console.log("double_bonus = "+double_bonus);
              console.log("score is slam_points = "+ slam_bonus);
             console.log("score is contract_points = "+contract_points);
          
            }
         else
          {
              points=pts*n;
              contract_points=points;
              slam_bonus=1000;
           
              console.log("score is slam_points = "+ slam_bonus);   
               console.log("score is contract_points = "+contract_points);
             
          }
          }
          
         //  if((contract_points || they_under) >= 100)
         //  {
         // alert("game is won");
         //  }
    }
   
          else if(declarer_score<13){
           n=-(declarer_score-13);
              undertrick_penalty=undertricks(vuln,double,re_double,n);
              console.log("undertrick_penalty",undertrick_penalty);
          }
    
    
      
   }
   
   
   
 }
   
   
   /////////////////////vulun state/////////////////////////////////////////////////////////////////////////
   if(vuln == 1)
   {
   
   if( n == 1)
   {
    if(declarer_score == 7)
     {
       if(l == 'n')
       {
        if(double == 1)
         {
           points=80;
           contract_points=points;
           double_bonus=50;
           console.log("double_bonus = "+double_bonus);
           console.log("score is contract_points = "+contract_points);
         }
        else if(re_double == 1)
        {
           points=160;
           contract_points=points;
           double_bonus=100;
           console.log("double_bonus = "+double_bonus);
           console.log("score is contract_points = "+contract_points);
        }
        else
        {
           points=40;
           contract_points=points;
           console.log("score is contract_points = "+contract_points);
        }
       }
      else   // case s or h or d or c 
       {
         if(double == 1)
           {
            if(l == 's'||l == 'h')
             {
              points=60;
             }
              else
              {
              points=40;
              }
              contract_points=points;
              double_bonus=50;
           console.log("double_bonus = "+double_bonus);
              console.log("score is contract_points = "+contract_points);
            }
         else if(re_double == 1)
           {
              if(l == 's'||l == 'h')
              {
              points=120;
              }
              else
              {
              points=80;
              }
              contract_points=points;
              double_bonus=100;
           console.log("double_bonus = "+double_bonus);
              console.log("score is contract_points = "+contract_points);
            }
         else
          {
              points=pts;
              contract_points=points;
               console.log("score is contract_points = "+contract_points);
          }
          }
          }
         //  if((contract_points || they_under) >= 100)
         //  {
         // alert("game is won");
         //  }
    
    else if(declarer_score > 7)
     {
       add_tricks=declarer_score-7; 
       if(l == 'n')
       {
       
       if (double == 1)
       {
       contract_points=80;
       overtrick_points=(100*2*add_tricks);
       double_bonus=50;
           console.log("double_bonus = "+double_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       else if (re_double == 1)
       {
       contract_points=160;
       overtrick_points=(100*4*add_tricks);
       double_bonus=100;
           console.log("double_bonus = "+double_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       else 
       {
        contract_points=40;
        overtrick_points=add_tricks*30;
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       // if((contract_points || they_under) >= 100)
       // {
       //   alert("game is won");
       // }
       }
       else
       {
       if (double == 1)
       {
           if(l=='s'||l=='h')
           {
               points=60;
           }
           else
           {
               points=40;
           }  
       contract_points=points;
       overtrick_points=(100*2*add_tricks);
       double_bonus=50;
           console.log("double_bonus = "+double_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       else if(re_double == 1)
       {
           if(l=='s'||l=='h')
           {
               points=120;
           }
           else
           {
               points=80;
           }
       contract_points=points;
       overtrick_points=(100*4*add_tricks);
       double_bonus=100;
           console.log("double_bonus = "+double_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       else
       {
       contract_points=pts;
       overtrick_points=add_tricks*pts; 
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       }
       // if((contract_points || they_under) >= 100)
       // {
       //   alert("game is won");
       // }
     }
   
          else if(declarer_score<7){
           n=-(declarer_score-7);
              undertrick_penalty=undertricks(vuln,double,re_double,n);
              console.log("undertrick_penalty",undertrick_penalty);
          }
    
      
   } 
   
   /////////////////////////////////////////n = 2/////////////////////////////////////////////////////////////////////
   
   
   if( n == 2)
   {
    if(declarer_score == 8)
     {
       if(l == 'n')
       {
        if(double == 1)
         {
           points=80;
           contract_points=points+60;
           double_bonus=50;
           console.log("double_bonus = "+double_bonus);
           console.log("score is contract_points = "+contract_points);
         }
        else if(re_double == 1)
        {
           points=160;
           contract_points=points+120;
           double_bonus=100;
           console.log("double_bonus = "+double_bonus);
           console.log("score is contract_points = "+contract_points);
        }
        else
        {
           points=40+30;
           contract_points=points;
           console.log("score is contract_points = "+contract_points);
        }
       }
      else   // case s or h or d or c 
       {
         if(double == 1)
           {
            if(l == 's'||l == 'h')
             {
              points=60;
             }
              else
              {
              points=40;
              }
              contract_points=points*n;
              double_bonus=50;
           console.log("double_bonus = "+double_bonus);
              console.log("score is contract_points = "+contract_points);
            }
         else if(re_double == 1)
           {
              if(l == 's'||l == 'h')
              {
              points=120;
              }
              else
              {
              points=80;
              }
              contract_points=points*n;
              double_bonus=100;
           console.log("double_bonus = "+double_bonus);
              console.log("score is contract_points = "+contract_points);
            }
         else
          {
              points=pts*n;
              contract_points=points;
               console.log("score is contract_points = "+contract_points);
          }
          }
          }
         //  if((contract_points || they_under) >= 100)
         //  {
         // alert("game is won");
         //  }
    
    else if(declarer_score > 8)
     {
       add_tricks=declarer_score-8; 
       if(l == 'n')
       {
       
       if (double == 1)
       {
       contract_points=80+60;
       overtrick_points=(100*2*add_tricks);
       double_bonus=50;
           console.log("double_bonus = "+double_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       else if (re_double == 1)
       {
       contract_points=160+120;
       overtrick_points=(100*4*add_tricks);
       double_bonus=100;
           console.log("double_bonus = "+double_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       else 
       {
        contract_points=40+30;
        overtrick_points=add_tricks*30;
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       // if((contract_points || they_under) >= 100)
       // {
       //   alert("game is won");
       // }
       }
       else
       {
       if (double == 1)
       {
           if(l=='s'||l=='h')
           {
               points=60;
           }
           else
           {
               points=40;
           }  
       contract_points=points*n;
       overtrick_points=(100*2*add_tricks);
       double_bonus=50;
           console.log("double_bonus = "+double_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       else if(re_double == 1)
       {
           if(l=='s'||l=='h')
           {
               points=120;
           }
           else
           {
               points=80;
           }
       contract_points=points*n;
       overtrick_points=(100*4*add_tricks);
       double_bonus=100;
           console.log("double_bonus = "+double_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       else
       {
       contract_points=pts*n;
       overtrick_points=add_tricks*pts; 
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       }
       // if((contract_points || they_under) >= 100)
       // {
       //   alert("game is won");
       // }
     }
   
          else if(declarer_score<8){
           n=-(declarer_score-8);
              undertrick_penalty=undertricks(vuln,double,re_double,n);
              console.log("undertrick_penalty",undertrick_penalty);
          }
    
      
   } 
   /////////////////////////////////////////n = 3/////////////////////////////////////////////////////////////////////
   
   
   
   
   if( n == 3)
   {
    if(declarer_score == 9)
     {
       if(l == 'n')
       {
        if(double == 1)
         {
           points=80;
           contract_points=points+(60*n);
           double_bonus=50;
           console.log("double_bonus = "+double_bonus);
           console.log("score is contract_points = "+contract_points);
         }
        else if(re_double == 1)
        {
           points=160;
           contract_points=points+(120*n);
           double_bonus=100;
           console.log("double_bonus = "+double_bonus);
           console.log("score is contract_points = "+contract_points);
        }
        else
        {
           points=40+(30*n);
           contract_points=points;
           console.log("score is contract_points = "+contract_points);
        }
       }
      else   // case s or h or d or c 
       {
         if(double == 1)
           {
            if(l == 's'||l == 'h')
             {
              points=60;
             }
              else
              {
              points=40;
              }
              contract_points=points*n;
              double_bonus=50;
           console.log("double_bonus = "+double_bonus);
              console.log("score is contract_points = "+contract_points);
            }
         else if(re_double == 1)
           {
              if(l == 's'||l == 'h')
              {
              points=120;
              }
              else
              {
              points=80;
              }
              contract_points=points*n;
              double_bonus=100;
           console.log("double_bonus = "+double_bonus);
              console.log("score is contract_points = "+contract_points);
            }
         else
          {
              points=pts*n;
              contract_points=points;
               console.log("score is contract_points = "+contract_points);
          }
          }
          }
         //  if((contract_points || they_under) >= 100)
         //  {
         // alert("game is won");
         //  }
    
    else if(declarer_score > 9)
     {
       add_tricks=declarer_score-9; 
       if(l == 'n')
       {
       
       if (double == 1)
       {
       contract_points=80+(60*n);
       overtrick_points=(100*2*add_tricks);
       double_bonus=50;
           console.log("double_bonus = "+double_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       else if (re_double == 1)
       {
       contract_points=160+(120*n);
       overtrick_points=(100*4*add_tricks);
       double_bonus=100;
           console.log("double_bonus = "+double_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       else 
       {
        contract_points=40+(30*n);
        overtrick_points=add_tricks*30;
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       // if((contract_points || they_under) >= 100)
       // {
       //   alert("game is won");
       // }
       }
       else
       {
       if (double == 1)
       {
           if(l=='s'||l=='h')
           {
               points=60;
           }
           else
           {
               points=40;
           }  
       contract_points=points*n;
       overtrick_points=(100*2*add_tricks);
       double_bonus=50;
           console.log("double_bonus = "+double_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       else if(re_double == 1)
       {
           if(l=='s'||l=='h')
           {
               points=120;
           }
           else
           {
               points=80;
           }
       contract_points=points*n;
       overtrick_points=(100*4*add_tricks);
       double_bonus=100;
           console.log("double_bonus = "+double_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       else
       {
       contract_points=pts*n;
       overtrick_points=add_tricks*pts; 
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       }
       // if((contract_points || they_under) >= 100)
       // {
       //   alert("game is won");
       // }
     }
   
          else if(declarer_score<9){
           n=-(declarer_score-9);
              undertrick_penalty=undertricks(vuln,double,re_double,n);
              console.log("undertrick_penalty",undertrick_penalty);
          }
    
      
   }
   
   
   
   
   ////////////////////////////////////////n = 4//////////////////////////////////////////////////////////////////////
   
   
   
   if( n == 4)
   {
    if(declarer_score == 10)
     {
       if(l == 'n')
       {
        if(double == 1)
         {
           points=80;
           contract_points=points+(60*n);
           double_bonus=50;
           console.log("double_bonus = "+double_bonus);
           console.log("score is contract_points = "+contract_points);
         }
        else if(re_double == 1)
        {
           points=160;
           contract_points=points+(120*n);
           double_bonus=100;
           console.log("double_bonus = "+double_bonus);
           console.log("score is contract_points = "+contract_points);
        }
        else
        {
           points=40+(30*n);
           contract_points=points;
           console.log("score is contract_points = "+contract_points);
        }
       }
      else   // case s or h or d or c 
       {
         if(double == 1)
           {
            if(l == 's'||l == 'h')
             {
              points=60;
             }
              else
              {
              points=40;
              }
              contract_points=points*n;
              double_bonus=50;
           console.log("double_bonus = "+double_bonus);
              console.log("score is contract_points = "+contract_points);
            }
         else if(re_double == 1)
           {
              if(l == 's'||l == 'h')
              {
              points=120;
              }
              else
              {
              points=80;
              }
              contract_points=points*n;
              double_bonus=100;
           console.log("double_bonus = "+double_bonus);
              console.log("score is contract_points = "+contract_points);
            }
         else
          {
              points=pts*n;
              contract_points=points;
               console.log("score is contract_points = "+contract_points);
          }
          }
          }
         //  if((contract_points || they_under) >= 100)
         //  {
         // alert("game is won");
         //  }
    
    else if(declarer_score > 10)
     {
       add_tricks=declarer_score-10; 
       if(l == 'n')
       {
       
       if (double == 1)
       {
       contract_points=80+(60*n);
       overtrick_points=(100*2*add_tricks);
       double_bonus=50;
           console.log("double_bonus = "+double_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       else if (re_double == 1)
       {
       contract_points=160+(120*n);
       overtrick_points=(100*4*add_tricks);
       double_bonus=100;
           console.log("double_bonus = "+double_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       else 
       {
        contract_points=40+(30*n);
        overtrick_points=add_tricks*30;
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       // if((contract_points || they_under) >= 100)
       // {
       //   alert("game is won");
       // }
       }
       else
       {
       if (double == 1)
       {
           if(l=='s'||l=='h')
           {
               points=60;
           }
           else
           {
               points=40;
           }  
       contract_points=points*n;
       overtrick_points=(100*2*add_tricks);
       double_bonus=50;
           console.log("double_bonus = "+double_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       else if(re_double == 1)
       {
           if(l=='s'||l=='h')
           {
               points=120;
           }
           else
           {
               points=80;
           }
       contract_points=points*n;
       overtrick_points=(100*4*add_tricks);
       double_bonus=100;
           console.log("double_bonus = "+double_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       else
       {
       contract_points=pts*n;
       overtrick_points=add_tricks*pts; 
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       }
       // if((contract_points || they_under) >= 100)
       // {
       //   alert("game is won");
       // }
     }
   
          else if(declarer_score<10){
           n=-(declarer_score-10);
              undertrick_penalty=undertricks(vuln,double,re_double,n);
              console.log("undertrick_penalty",undertrick_penalty);
          }
    
      
   }
   
   
   ////////////////////////////////////////n = 5//////////////////////////////////////////////////////////////////////
   
   
   
   if( n == 5)
   {
    if(declarer_score == 11)
     {
       if(l == 'n')
       {
        if(double == 1)
         {
           points=80;
           contract_points=points+(60*n);
           double_bonus=50;
           console.log("double_bonus = "+double_bonus);
           console.log("score is contract_points = "+contract_points);
         }
        else if(re_double == 1)
        {
           points=160;
           contract_points=points+(120*n);
           double_bonus=100;
           console.log("double_bonus = "+double_bonus);
           console.log("score is contract_points = "+contract_points);
        }
        else
        {
           points=40+(30*n);
           contract_points=points;
           console.log("score is contract_points = "+contract_points);
        }
       }
      else   // case s or h or d or c 
       {
         if(double == 1)
           {
            if(l == 's'||l == 'h')
             {
              points=60;
             }
              else
              {
              points=40;
              }
              contract_points=points*n;
              double_bonus=50;
           console.log("double_bonus = "+double_bonus);
              console.log("score is contract_points = "+contract_points);
            }
         else if(re_double == 1)
           {
              if(l == 's'||l == 'h')
              {
              points=120;
              }
              else
              {
              points=80;
              }
              contract_points=points*n;
              double_bonus=100;
           console.log("double_bonus = "+double_bonus);
              console.log("score is contract_points = "+contract_points);
            }
         else
          {
              points=pts*n;
              contract_points=points;
               console.log("score is contract_points = "+contract_points);
          }
          }
          }
         //  if((contract_points || they_under) >= 100)
         //  {
         // alert("game is won");
         //  }
    
    else if(declarer_score > 11)
     {
       add_tricks=declarer_score-11; 
       if(l == 'n')
       {
       
       if (double == 1)
       {
       contract_points=80+(60*n);
       overtrick_points=(100*2*add_tricks);
       double_bonus=50;
           console.log("double_bonus = "+double_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       else if (re_double == 1)
       {
       contract_points=160+(120*n);
       overtrick_points=(100*4*add_tricks);
       double_bonus=100;
           console.log("double_bonus = "+double_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       else 
       {
        contract_points=40+(30*n);
        overtrick_points=add_tricks*30;
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       // if((contract_points || they_under) >= 100)
       // {
       //   alert("game is won");
       // }
       }
       else
       {
       if (double == 1)
       {
           if(l=='s'||l=='h')
           {
               points=60;
           }
           else
           {
               points=40;
           }  
       contract_points=points*n;
       overtrick_points=(100*2*add_tricks);
       double_bonus=50;
           console.log("double_bonus = "+double_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       else if(re_double == 1)
       {
           if(l=='s'||l=='h')
           {
               points=120;
           }
           else
           {
               points=80;
           }
       contract_points=points*n;
       overtrick_points=(100*4*add_tricks);
       double_bonus=100;
           console.log("double_bonus = "+double_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       else
       {
       contract_points=pts*n;
       overtrick_points=add_tricks*pts; 
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       }
       // if((contract_points || they_under) >= 100)
       // {
       //   alert("game is won");
       // }
     }
   
          else if(declarer_score<11){
           n=-(declarer_score-11);
              undertrick_penalty=undertricks(vuln,double,re_double,n);
              console.log("undertrick_penalty",undertrick_penalty);
          }
    
      
   }
   
   
   ////////////////////////////////////////n = 6//////////////////////////////////////////////////////////////////////
   
   
   if( n == 6)
   {
    if(declarer_score == 12)
     {
       if(l == 'n')
       {
        if(double == 1)
         {
           points=80;
           contract_points=points+(60*n);
           slam_bonus=750;
           double_bonus=50;
           console.log("double_bonus = "+double_bonus);
           console.log("score is contract_points = "+contract_points);
           console.log("score is slam_points = "+slam_bonus);
         }
        else if(re_double == 1)
        {
           points=160;
           contract_points=points+(120*n);
           slam_bonus=750;
           double_bonus=100;
           console.log("double_bonus = "+double_bonus);
           console.log("score is slam_points = "+slam_bonus);
           console.log("score is contract_points = "+contract_points);
           
        }
        else
        {
           points=40+(30*n);
           contract_points=points;
           slam_bonus=750;
           
           console.log("score is contract_points = "+contract_points);
           console.log("score is slam_points = "+slam_bonus);
        }
       }
      else   // case s or h or d or c 
       {
         if(double == 1)
           {
            if(l == 's'||l == 'h')
             {
              points=60;
             }
              else
              {
              points=40;
              }
              contract_points=points*n;
           
              slam_bonus=750;
           double_bonus=50;
           console.log("double_bonus = "+double_bonus);
           console.log("score is slam_points = "+slam_bonus);
              console.log("score is contract_points = "+contract_points);
              
            }
         else if(re_double == 1)
           {
              if(l == 's'||l == 'h')
              {
              points=120;
              }
              else
              {
              points=80;
              }
              contract_points=points*n;
              slam_bonus=750;
           double_bonus=100;
           console.log("double_bonus = "+double_bonus);
           console.log("score is slam_points = "+slam_bonus);
              console.log("score is contract_points = "+contract_points);
              
            }
         else
          {
              points=pts*n;
              contract_points=points;
              slam_bonus=750;
              console.log("score is slam_points = "+slam_bonus);
               console.log("score is contract_points = "+contract_points);
              
          }
          }
          }
         //  if((contract_points || they_under) >= 100)
         //  {
         // alert("game is won");
         //  }
    
    else if(declarer_score > 12)
     {
       add_tricks=declarer_score-12; 
       if(l == 'n')
       {
       
       if (double == 1)
       {
       contract_points=80+(60*n);
       overtrick_points=(100*2*add_tricks);
       slam_bonus=750;
           double_bonus=50;
           console.log("double_bonus = "+double_bonus);
           console.log("score is slam_points = "+slam_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       else if (re_double == 1)
       {
       contract_points=160+(120*n);
       overtrick_points=(100*4*add_tricks);
       slam_bonus=750;
           double_bonus=100;
           console.log("double_bonus = "+double_bonus);
           console.log("score is slam_points = "+slam_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       else 
       {
        contract_points=40+(30*n);
        overtrick_points=(add_tricks*30);
        slam_bonus=750;
              console.log("score is slam_points = "+slam_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       // if((contract_points || they_under) >= 100)
       // {
       //   alert("game is won");
       // }
       }
       else
       {
       if (double == 1)
       {
           if(l=='s'||l=='h')
           {
               points=60;
           }
           else
           {
               points=40;
           }  
       contract_points=points*n;
       overtrick_points=(100*2*add_tricks);
       slam_bonus=750;
           double_bonus=50;
           console.log("double_bonus = "+double_bonus);
           console.log("score is slam_points = "+slam_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       else if(re_double == 1)
       {
           if(l=='s'||l=='h')
           {
               points=120;
           }
           else
           {
               points=80;
           }
       contract_points=points*n;
       overtrick_points=(100*4*add_tricks);
       slam_bonus=750;
           double_bonus=100;
           console.log("double_bonus = "+double_bonus);
           console.log("score is slam_points = "+slam_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       else
       {
       contract_points=pts*n;
       overtrick_points=(add_tricks*pts); 
       slam_bonus=750;
           console.log("score is slam_points = "+slam_bonus);
       console.log("score is contract_points = "+contract_points);
       console.log("score is overtrick_points = "+overtrick_points);
       }
       }
       // if((contract_points || they_under) >= 100)
       // {
       //   alert("game is won");
       // }
     }
   
          else if(declarer_score<12){
          n=-(declarer_score-12);
              undertrick_penalty=undertricks(vuln,double,re_double,n);
              console.log("undertrick_penalty",undertrick_penalty);
          }
    
      
   }
   
   
   ////////////////////////////////////////n = 7//////////////////////////////////////////////////////////////////////
   
   
   
   
   
   if( n == 7)
   {
    if(declarer_score == 13)
     {
       if(l == 'n')
       {
        if(double == 1)
         {
           points=80;
           contract_points=points+(60*n);
          
           slam_bonus=1500;
           double_bonus=50;
           console.log("double_bonus = "+double_bonus);
           console.log("score is slam_points = "+slam_bonus);
           console.log("score is contract_points = "+contract_points);
           
         }
        else if(re_double == 1)
        {
           points=160;
           contract_points=points+(120*n);
           slam_bonus=1500;
           double_bonus=100;
           console.log("double_bonus = "+double_bonus);
           console.log("score is slam_points = "+slam_bonus);
           console.log("score is contract_points = "+contract_points);
         
        }
        else
        {
           points=40+(30*n);
           contract_points=points;
           slam_bonus=1500;
         
           console.log("score is slam_points = "+slam_bonus);
           console.log("score is contract_points = "+contract_points);
     
        }
       }
      else   // case s or h or d or c 
       {
         if(double == 1)
           {
            if(l == 's'||l == 'h')
             {
              points=60;
             }
              else
              {
              points=40;
              }
              contract_points=points*n;
              
              slam_bonus=1500;
           double_bonus=50;
           console.log("double_bonus = "+double_bonus);
           console.log("score is slam_points = "+slam_bonus);
              console.log("score is contract_points = "+contract_points);
           
            }
         else if(re_double == 1)
           {
              if(l == 's'||l == 'h')
              {
              points=120;
              }
              else
              {
              points=80;
              }
              contract_points=points*n;
              slam_bonus=1500;
           double_bonus=100;
           console.log("double_bonus = "+double_bonus);
           console.log("score is slam_points = "+slam_bonus);
              console.log("score is contract_points = "+contract_points);
             
            }
         else
          {
              points=pts*n;
              contract_points=points;
              slam_bonus=1500;
        
           console.log("score is slam_points = "+slam_bonus);
               console.log("score is contract_points = "+contract_points);
        
          }
          }
          
         //  if((contract_points || they_under) >= 100)
         //  {
         // alert("game is won");
         //  }
   }
          else if(declarer_score<13){
          n=-(declarer_score-13);
          undertrick_penalty=undertricks(vuln,double,re_double,n);
          console.log("undertrick_penalty is "+undertrick_penalty);
          }
    
    
      
   }
   
   
   
   
   
   
 }


score.push(contract_points);
score.push(overtrick_points);
score.push(slam_bonus);
score.push(double_bonus);
score.push(undertrick_penalty);

 return score;
} 
// console.log(undertricks(0,0,0,1));


 function undertricks(vuln,double,re_double,n){
     if(n==1)
     {
       if(vuln==0)
       {
         if(double==1)
         { 
           undertrick_penalty=100;

         }
         else if(re_double==1)
         {
           undertrick_penalty=200;
         }
         else
         {
           undertrick_penalty=50;
         }
       }
       else if (vuln=1)
       {
         if(double==1)
         { 
           undertrick_penalty=200;

         }
         else if(re_double==1)
         {
           undertrick_penalty=400;
         }
         else
         {
           undertrick_penalty=100;
         }
       }

     }
     if(n==2)
     {
       if(vuln==0)
       {
         if(double==1)
         { 
           undertrick_penalty=300;

         }
         else if(re_double==1)
         {
           undertrick_penalty=600;
         }
         else
         {
           undertrick_penalty=100;
         }
       }
       else if (vuln=1)
       {
         if(double==1)
         { 
           undertrick_penalty=500;

         }
         else if(re_double==1)
         {
           undertrick_penalty=1000;
         }
         else
         {
           undertrick_penalty=200;
         }
       }

     }
     if(n==3)
     {
       if(vuln==0)
       {
         if(double==1)
         { 
           undertrick_penalty=500;

         }
         else if(re_double==1)
         {
           undertrick_penalty=1000;
         }
         else
         {
           undertrick_penalty=150;
         }
       }
       else if (vuln=1)
       {
         if(double==1)
         { 
           undertrick_penalty=800;

         }
         else if(re_double==1)
         {
           undertrick_penalty=1600;
         }
         else
         {
           undertrick_penalty=300;
         }
       }

     }
     if(n==4)
     {
       if(vuln==0)
       {
         if(double==1)
         { 
           undertrick_penalty=800;

         }
         else if(re_double==1)
         {
           undertrick_penalty=1600;
         }
         else
         {
           undertrick_penalty=200;
         }
       }
       else if (vuln=1)
       {
         if(double==1)
         { 
           undertrick_penalty=1100;

         }
         else if(re_double==1)
         {
           undertrick_penalty=2200;
         }
         else
         {
           undertrick_penalty=400;
         }
       }

     }
     if (n==5)
     {
       if(vuln==0)
       {
         if(double==1)
         { 
           undertrick_penalty=1100;

         }
         else if(re_double==1)
         {
           undertrick_penalty=2200;
         }
         else
         {
           undertrick_penalty=500;
         }
       }
       else if (vuln=1)
       {
         if(double==1)
         { 
           undertrick_penalty=1400;

         }
         else if(re_double==1)
         {
           undertrick_penalty=2800;
         }
         else
         {
           undertrick_penalty=500;
         }
       }

     }
     if(n==6)
     {
       if(vuln==0)
       {
         if(double==1)
         { 
           undertrick_penalty=1400;

         }
         else if(re_double==1)
         {
           undertrick_penalty=2800;
         }
         else
         {
           undertrick_penalty=300;
         }
       }
       else if (vuln=1)
       {
         if (double==1)
         { 
           undertrick_penalty=1700;

         }
         else if(re_double==1)
         {
           undertrick_penalty=3400;
         }
         else
         {
           undertrick_penalty=600;
         }
       }

     }

   return undertrick_penalty;
   }


