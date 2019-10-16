$ ("#start").click (function () {
  $ ("#btn-signup ").trigger ("click");
});

// password
$(document).ready(function () {
  $('#methods').click(function () {
    $('#password').attr('type', $(this).is(':checked') ? 'text' : 'password');
    $('.wrap').toggleClass('background');
  });
});


// email validation
var email = document.querySelector('.email');
var update = document.querySelector('.update');

email.addEventListener("input", inputEmail);

function inputEmail(e) {
  var input = e.target.value;
  var exp = /(^\w.*@\w+\.\w)/;
  if (input && exp.test(input)) {
    update.textContent = 'Valid Email!';
    update.classList.add('success');
    update.classList.remove('failure');
  }
  else if(input == ""){
    update.style.display = "none";
  }
  else {
    update.style.display = "block";
    update.textContent = 'enter valid mail ...';
    update.classList.remove('success');
    update.classList.add('failure');
  }
};


$('#smart-form').submit(function(e) {
  // $('#name').text($("#email").val());
  var jsonResult = '{';
  var elements = document.getElementById("smart-form").elements; //Change with your form ID
  for(var i = 0 ; i < elements.length ; i++){
      var item = elements.item(i);
      if(item.type != "checkbox") {
          jsonResult += '"' + item.id + '":"' + item.value + '",';
      }
      else {
          var checkboxValue = 0;
          if(document.getElementById(item.id).checked == true) {
              checkboxValue = 1;
          }
          jsonResult += '"' + item.id + '":"' + checkboxValue + '",';
      }
  }
  jsonResult = jsonResult.substring(0, jsonResult.length - 1);
  jsonResult += '}';
  submitData(jsonResult);
  // Prevent reload page
  e.preventDefault();
});
// password




// send email
function submitData(jsonResult) {
var url = "http://www.egytwins.com/mahitab/backend/webservices/General_ua_list/create.php";
$.ajax({
    type: "POST",
    url: url, // where you wanna post
    data: jsonResult,
    processData: false,
    contentType: 'application/json; charset=utf-8',
    error: AjaxFailed,
    success: AjaxSucceeded
});
}
function AjaxSucceeded(result) {
//Success Action
console.log("success");
alert("sucess");
}
function AjaxFailed(result) {
//Fail Action
console.log("fail");
alert("sorry,try again");
}
///////////////////////////////////////////////////