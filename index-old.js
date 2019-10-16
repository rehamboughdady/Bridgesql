var express =require('express');                                             //for delivering files
var app=express();
var serv=require('http').Server(app);
var nn;

app.get('/',function(req, res){
	res.sendFile(__dirname + '/client/bridgeSprint2/main.html');                          // gets what in the client folder (index file->which is the front view)

});

app.use('/client/bridgeSprint2',express.static(__dirname + '/client/bridgeSprint2'));
const port = process.env.PORT || 1337;
serv.listen(port);                                                           // listen to port 2000 
//serv.listen(3000);
console.log('server started');

var count =0; 
var SOCKET_LIST = {};


var Player = function (id){
	var self ={
		id:id
	}
	return self;
}


var io =require('socket.io')(serv,{});                    //for communication io object has all the functionality of io library
io.sockets.on('connection',function(socket){             //whenever there is a connection this fun will called 
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

socket.on('jsontoall',function(data){

});



socket.on('nickname',function(data){
var pos;
	if(count == 1)
	{
      pos="north";
	}
	else if (count == 2)
	{
	  pos="east";
	}
	else if (count == 3)
	{
	  pos="south";
	}
	else if (count == 4)
	{
	  pos="west";
	}

        var jsonResult = '[';
            jsonResult += '   {';
            jsonResult += '"player"';
            jsonResult += ':{ "position" : " ';
            jsonResult += pos;
            jsonResult += '" , "nickname" : "';
            jsonResult += data;
            jsonResult += '"}}]';
            jsonResult = jsonResult.replace(/\s/g, "");


});


socket.on('PlayedCard',function(data){
	socket.broadcast.emit('PlayedCardBroadcast',data);
});

socket.on('revBackground',function(data){
	socket.broadcast.emit('revBg',data);

});
socket.on('biddingRev',function(data){
	socket.broadcast.emit('biddRev',data);

});
/*socket.on('firstplayedcard',function(data){ // Commented by Khaled, Thier is no reason to use Sockets inside another socket 26-7-2019
	socket.broadcast.emit('firstplayedcardresult',data);
});*/





socket.on('BiddModal',function(data){
	socket.broadcast.emit('BiddModalResult',data);
});

socket.on('json1',function(data){

});

var arr=[socket.id,count];

socket.emit('id',arr);


if(arr[1] == 1)
{
	socket.emit('id1',"jsooooooooooon");

}


var c=0;

socket.on('BiddButtonPressed',function(data)
{
	//console.log("Pass Pressed: " + data);
	var dataArr = data.split("|");
	var PassCounter = dataArr[0];
	if(PassCounter < 4 && dataArr[1] == "pass") {
		PassCounter++;
	}
	else if(dataArr[1] != "pass") {
		PassCounter = 0;
	}
//	console.log(PassCounter);
	//console.log(dataArr[3]);
	socket.broadcast.emit('PassPressed',PassCounter + "|" + dataArr[2] + "|" + dataArr[3].toString());
});




//////////////////////////////handel 3 passes at beginning////////////////////////////
socket.on("passatstart",function(data){
	var passatstartcount =data;
	if(passatstartcount < 4)
	{
		passatstartcount++;
	}

	socket.broadcast.emit("passatstartcount2",passatstartcount)
});



socket.on('PosCounted',function(data)
{
	//var PosCounter = data;
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
    socket.broadcast.emit('PosPressed', jsonPidResult);

});

/*socket.on('PidCounted',function(data){
	var PidCounter =data;
	PidCounter++;
	// if (PidCounter == 4 )
	// {
	// 	PidCounter = 0;
	// }
	socket.broadcast.emit('PidPressed', PidCounter);

});*/





socket.on('inputpid',function(data){
	var inputpid =data;

	if(inputpid != "pass")
	{
		console.log(inputpid);
		socket.broadcast.emit('lastpid',inputpid);


	}
});

var c1=0;
var c2=0;

socket.on('trickscore',function(data){
	var trickscore=data;
	

	console.log(trickscore);
	if(trickscore[0] ==1)
	{ 
		c1++;
         socket.broadcast.emit('c1',c1);
	}
	else if(trickscore[1] ==1)

	{
		  c2++;
           socket.broadcast.emit('c2',c2);
	}
});

/*socket.on('PlayedCardsArr',function(data){ // 02 Commented by Khaled 26-7-2019, Why we need that?!!!
	var PlayedCardsArr =[];
	socket.broadcast.emit('PlayedCardsArr2',PlayedCardsArr);
});*/

var y;

socket.on('json',function(data){
   socket.broadcast.emit('cardsJSON', data);
});


// nickname 
socket.on('sendnicknametoserver',function(data){
	socket.broadcast.emit('nickname',data);
	nn=data;
	console.log(data);
});

socket.on('sendmsgtoserver',function(data){

	console.log(data);

    var playername = ("" +nn);

	for (var i in SOCKET_LIST){

		SOCKET_LIST[i].emit('addtochat',playername+":"+data);
	}

});


socket.on('sendcardtoserver',function(data){
	//console.log("data has recevied");
	console.log(data);
	var playername = ("" + socket.id).slice(2,7);
	var arr=[playername,data];
	for (var i in SOCKET_LIST){
		SOCKET_LIST[i].emit('cardthrown',arr);
		//console.log(arr[1]);
	
}
});



	});

