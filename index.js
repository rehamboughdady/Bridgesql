var express =require('express');                                             //for delivering files
var app=express();
var serv=require('http').Server(app);
var nn;
const mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'bridge'
  
});

// Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});


app.get('/',function(req, res){
	res.sendFile(__dirname + '/client/bridgeSprint2/main.html');  
                       // gets what in the client folder (index file->which is the front view)

});

// app.get('/createpoststable', (req, res) => {
//     let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
//     db.query(sql, (err, result) => {
//         if(err) throw err;
//         console.log(result);
//         res.send('Posts table created...');
//     });
// });


app.use('/client/bridgeSprint2',express.static(__dirname + '/client/bridgeSprint2/'));
const port = process.env.PORT || 1337;
serv.listen(port);                                                           // listen to port 2000 
console.log('server started');



var count =0; 
var SOCKET_LIST = {};


// var Player = function (id){
// 	var self ={
// 		id:id
// 	}
// 	return self;
// }


var io =require('socket.io')(serv,{});   

/////////////////////////////////////////////////////////////////////////////

var tablecounter=[];
var tables=[];
const gameRooms = [];

for(var i=1;i<=20;i++)
{
	gameRooms.push("r"+i);

}
//console.log(gameRooms);
for(var i=1;i<=20;i++)
{
	for(var j=1;j<=20;j++){

	tablecounter.push("t"+i+j);
	
	}
	
}

//console.log(tablecounter[1]);

for(var i=0;i<=399;i++)
{ 
	
	tablecounter[i]=0;

}
//console.log(tablecounter);
for(var i=1;i<=20;i++)
{
	
		tables.push("t"+i);
			
}

var PlayerNames=[];
for(var i=0;i<=20;i++)
{ 
	
	PlayerNames[i]=0;

}

var rooom;
var table;
var player;
var rn;
var tn;
var k=0;

var RoomName;

///////////////////////////////////////////////////////////////////////////////
                //for communication io object has all the functionality of io library
//io.sockets.on('connection',function(socket){   
io.of("/games").on('connection',function(socket){
	console.log("player connected to the room");

socket.emit("welcome","hello and welcome to the game area");

/////////////////////////////////////////////////////////////


socket.on("playerroom",function(data)
{
  RoomName=data.substr(0,4);	
  rooom=data.substr(0,2);
  table=data.substr(2,4);
 
  player=data.substr(4,6);
  
  rn=rooom.substr(1,1);
  tn=rooom.substr(1,1);
  console.log(data);

  let sql = `SELECT (GameId)
  FROM games
  WHERE GameId = '${RoomName}'`;
  
  
  let query= db.query(sql, (err, result) => {

  //$num_rows = mysqli_num_rows(query);
  
  if (result.length > 0) {
	if (result)
	  console.log("Test:" + result);
  }
  else{
	let sql = `INSERT INTO games (GameId) VALUES ('${RoomName}')`;
	let query = db.query(sql, (err, result) => {
		if(err) throw err;
		console.log(result);
	//      res.send('Post 2 added...');
	});
  }



  
  });
  
  
  


});






socket.on("joinroom", (room) =>
  {
  	socket.on("jointable", (table) =>
     {
console.log("i am in "+room+" and table "+table);

if(gameRooms.includes(room) && tables.includes(table) ){

 k=(((rn-1)*20)+(tn-1));
	
//console.log("room + table"+rn+tn);
//if (i == tn && j == rn){
	console.log("i am in "+table+"" + rooom);
tablecounter[k]++;

	socket.join(table && room);
// 	PlayerNames[k].push(player);
//   console.log(PlayerNames[k]);

if(player == "p1")
{
	let sql = `UPDATE games SET North ='${player}' WHERE GameId = '${RoomName}'`;	
	let query = db.query(sql, (err, result) => {
		if(err) throw err;
		console.log(result);
  //      res.send('Post 2 added...');
	});
  
}

else if(player == "p2")
{
	let sql = `UPDATE games SET East ='${player}' WHERE GameId = '${RoomName}'`;	
	let query = db.query(sql, (err, result) => {
		if(err) throw err;
		console.log(result);
  //      res.send('Post 2 added...');
	});
  
}

if(player == "p3")
{
	let sql = `UPDATE games SET South ='${player}' WHERE GameId = '${RoomName}'`;	
	let query = db.query(sql, (err, result) => {
		if(err) throw err;
		console.log(result);
  //      res.send('Post 2 added...');
	});
  
}

if(player == "p4")
{
	let sql = `UPDATE games SET West ='${player}' WHERE GameId = '${RoomName}'`;	
	let query = db.query(sql, (err, result) => {
		if(err) throw err;
		console.log(result);
  //      res.send('Post 2 added...');
	});
  
}


	   io.of("/games").in(room).in(table).emit("roomcounterm",tablecounter[k]);
       io.of("/games").in(room).in(table).emit("newuser","new player has joined this table "+table+"in this room"+room);
   

   bridge(socket,room,table,tablecounter[k]);

 

      if(tablecounter[k] == 4)
      {
		let sql2 = `INSERT INTO gamerounds (gameid) VALUES ('${RoomName}')`;	
		let query2 = db.query(sql2, (err, result) => {
			if(err) throw err;
			console.log(result);
	  //      res.send('Post 2 added...');
		});	   
     io.of("/games").in(table).emit("roomcountermm","START THE GAME");
  
  
      }


    return socket.emit("success","you have successfully joined the table");    



//	}


//}


//}

}
  else
  {
    return socket.emit("err","ERRor, no table named"+ table);
  }
});
  });

////////////////////////////////////////////////////////////////



	});









function bridge(socket,room,table,roomcounter)
{
                                                     //whenever there is a connection this fun will called 
socket.id = Math.random();                              // each socket will have unique id 

SOCKET_LIST[socket.id] =socket;
socket.on('disconnect',function(){
delete SOCKET_LIST[socket.id];
console.log(socket.id + "is disconnected");
});

console.log('player ' + count + ' connected');
count++;
console.log(socket.id); 

if (count == 0)
{
	socket.name = "player0";
	console.log(socket.name);
}
if (count == 1)
{
	socket.name = "player1";
	console.log(socket.name);
}
if (count == 2)
{
	socket.name = "player2";
	console.log(socket.name);
}
if (count == 3)
{
	socket.name = "player3";
	console.log(socket.name);
}

if (count == 4)
{
	socket.name = "player4";
	console.log(socket.name);
}
var jsondata=[];

socket.on('PlayedCard',function(data){
	 io.of("/games").in(room).emit('PlayedCardBroadcast',data);
console.log("played cards"+data);

});

socket.on('revBackground',function(data){
	io.of("/games").in(room).emit('revBg',data);

});
socket.on('biddingRev',function(data){
	io.of("/games").in(room).emit('biddRev',data);

});

var declarer;
var RoundNumber=1;
socket.on('declarer',function(data){
	declarer = data;
	let sql = `UPDATE games SET Declarer ='${declarer}' WHERE GameId = '${RoomName}'`;	
	let query = db.query(sql, (err, result) => {
		if(err) throw err;
		console.log(result);
  //      res.send('Post 2 added...');
	});

	let sql2 = `UPDATE gamerounds SET Round ='${RoundNumber}' WHERE GameId = '${RoomName}'`;	
	let query2 = db.query(sql2, (err, result) => {
		if(err) throw err;
		console.log(result);
  //      res.send('Post 2 added...');
	});	 


});

socket.on('BiddModal',function(data){
	 io.of("/games").in(room).emit('BiddModalResult',data);
});

var arr=[socket.id,roomcounter];

socket.emit('id',arr);
socket.emit('NoOfPlayers'.arr);

if(arr[1] == 1)
{
	socket.emit('id1',"jsooooooooooon");

}

var c=0;

socket.on('BiddButtonPressed',function(data)
{
	
	var dataArr = data.split("|");
	var PassCounter = dataArr[0];
	if(PassCounter < 4 && dataArr[1] == "pass") {
		PassCounter++;
			
}
	else if(dataArr[1] != "pass") {
		PassCounter = 0;
	}

	 io.of("/games").in(room).emit('PassPressed',PassCounter + "|" + dataArr[2] + "|" + dataArr[3].toString());
});

//////////////////////////////handel 3 passes at beginning////////////////////////////
socket.on("passatstart",function(data){
	var passatstartcount =data;
	if(passatstartcount < 4)
	{
		passatstartcount++;
	}

	 io.of("/games").in(room).emit("passatstartcount2",passatstartcount)
});

socket.on('PosCounted',function(data)
{

	var jsonPid = JSON.parse(data);
	var PosCounter = jsonPid[0].posCount;
	var CurrentPidder = jsonPid[0].CurrentPidder;
	if(CurrentPidder == "north") {
		CurrentPidder = "east";
	}
	else if(CurrentPidder == "east") {
		CurrentPidder = "south";
	}
	else if(CurrentPidder == "south") {
		CurrentPidder = "west";
	}
	else if(CurrentPidder == "west") {
		CurrentPidder = "north";
	}
	PosCounter++;
	var jsonPidResult = '[{"PosCounter":"' + PosCounter + '","CurrentPidder":"' + CurrentPidder + '"}]';
    io.of("/games").in(room).emit('PosPressed', jsonPidResult);

});

socket.on('inputpid',function(data){
	var inputpid =data;

	if(inputpid != "pass")
	{
		console.log(inputpid);
		io.of("/games").in(room).emit('lastpid',inputpid);


	}

});



socket.on('starttrick',function(data){
console.log("start trick is "+data);
var starttrick=data;
io.of("/games").in(room).emit('st',starttrick);

});


var c1=0;
var c2=0;

socket.on('trickscore',function(data){
	var trickscore=data;
	

	
	
	




	console.log("trickscore"+trickscore);
	if(trickscore[0] ==1)
	{ 
		c1++;
		 io.of("/games").in(room).emit('c1',c1);
		 
	
	// if(declarer == "noth" || declarer == "soth")
	// {
	//    let sql = `UPDATE gamerounds SET Decs ='${c1}' WHERE GameId = '${RoomName}'`;	
	//    let query = db.query(sql, (err, result) => {
	// 	   if(err) throw err;
	// 	   console.log(result);
	//  //      res.send('Post 2 added...');
	//    });	
	   
	// }
	// else {
	// 	let sql5 = `UPDATE gamerounds SET Defs ='${c1}' WHERE GameId = '${RoomName}'`;	
	//    let query5 = db.query(sql5, (err, result) => {
	// 	   if(err) throw err;
	// 	   console.log(result);
	//  //      res.send('Post 2 added...');
	//    });	
	// }
		

	}
	else if(trickscore[1] ==1)

	{
		  c2++;
		   io.of("/games").in(room).emit('c2',c2);
		//   if(declarer == "east" || declarer == "west")
		//    {
		// 	  let sql = `UPDATE gamerounds SET Decs ='${c2}' WHERE GameId = '${RoomName}'`;	
		// 	  let query = db.query(sql, (err, result) => {
		// 		  if(err) throw err;
		// 		  console.log(result);
		// 	//      res.send('Post 2 added...');
		// 	  });	
			
		//    }
		//    else {
		// 	let sql5 = `UPDATE gamerounds SET Defs ='${c2}' WHERE GameId = '${RoomName}'`;	
		//    let query5 = db.query(sql5, (err, result) => {
		// 	   if(err) throw err;
		// 	   console.log(result);
		//  //      res.send('Post 2 added...');
		//    });
		// }

	}



var c12= c1+c2;

});

var decscore;
var defscore;
socket.on('scorearray',function(data){
decscore=data[0];
defscore=data[1];
console.log("decscore"+decscore+"defscore"+defscore);

	  let sql = `UPDATE gamerounds SET Decs ='${decscore}' WHERE GameId = '${RoomName}'`;	
			  let query = db.query(sql, (err, result) => {
				  if(err) throw err;
				  console.log(result);
			//      res.send('Post 2 added...');
			  });	
			  let sql2 = `UPDATE gamerounds SET Defs ='${defscore}' WHERE GameId = '${RoomName}'`;	
			  let query2 = db.query(sql2, (err, result) => {
				  if(err) throw err;
				  console.log(result);
			//      res.send('Post 2 added...');
			  });	


});


socket.on('json',function(data){
   io.of("/games").in(room).emit('cardsJSON', data);

});
socket.on('sendnicknametoserver',function(data){
	 io.of("/games").in(room).emit('nickname',data);
	nn=data;
});
socket.on('sendmsgtoserver',function(data){

    var playername = ("" +nn);

	for (var i in SOCKET_LIST){

		SOCKET_LIST[i].emit('addtochat',playername+":"+data);
	}
});



}




 