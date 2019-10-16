/*$ ("#start").click (function () {
    $ ("#btn-signup ").trigger ("click");
  });

  $( ".btn-empty" ).click(function() {
    $(this).hide();
    $("#player1-Name").show(); 
    $("#player1-Name").after( $( "p" ) );
    $( "#player1-Name" ).css( "display", "inline-block" );
  });*/


var PlayerId='';
var RoomId='';
var PlayerRoom='';


  InitRoom();

  function InitRoom()
  {
    RoomId=sessionStorage.getItem("roomid");
  	console.log(RoomId);
    var RoomName=RoomId.replace('r','room ');
    console.log(RoomName);
    document.getElementById("lbl_title").innerHTML= RoomName;
  }


function GetPlayers(PlayerId) {
	PlayerId = PlayerId;
	console.log(PlayerId);
	PlayerRoom=RoomId+PlayerId;
	console.log(PlayerRoom);
	
sessionStorage.setItem("playerid", PlayerRoom);
// window.location.href = "main.html";
 window.open('main.html', "_blank");
}

