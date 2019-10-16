$ ("#start").click (function () {
    $ ("#btn-signup ").trigger ("click");
  });




function GoToTabels(id)
{
	sessionStorage.setItem("roomid", id);
	window.location.href = "tables.html";
}