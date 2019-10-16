//This is a good toturial to teach you how to send requests using javascript
//https://www.kirupa.com/html5/making_http_requests_js.htm
// will run if create product form was submitted
function smartAction() {
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
}


///////////////////////////////////////////////////
function submitData(jsonResult) {
    var url = "";
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
}
function AjaxFailed(result) {
	//Fail Action
}
///////////////////////////////////////////////////