// $("add_more_").click(function(){
//     var newtextbox ='';
//     newtextbox += '<input type="text" id="textInput" value="..." />'; 
//     document.getElementById('tbox_div').innerHTML+=newtextbox;
// });

$(document).ready(function() {
    $("#add_more_").click(function() {
      $("#add_more_").after('<p>Doctor</p>','<input type="text" id="docOneCode" value="" placeholder = "Doctor Unique Number">','<input type="text" id="doc_name" value="" placeholder = "Doctor Name">',);
    });
  });

//   what clicking the login button does
$("#login").click(function(){
    var phone_number = $("#phoneNumber").val();
    var password = $("#password").val();

    if(phone_number == "026" && password == "jess"){
        $(document).ready(function() {
            var appKey = "yqi2o5izi1ymu6ovipon";
            var widget = new RingCaptcha.Widget('#xyz', {
                    app: appKey,
                    events: {
                            // When widget is read
                            ready: function(event) {
                            },
                            // Add JavaScript Callbacks
                            verified: function(event) {
                                    const dataString = localStorage.getItem('ringcaptcha.widget.' + appKey);
                                    const data = dataString ? JSON.parse(dataString) : null;
                                    const phone = data.phoneNumber;
                                    alert("Phone number verified:" + phone);
                                    // Make the widget disappear
                                    $('div.ringcaptcha.widget.no-brand').hide();
                            }
                    }
            }).setup();
        })
        document.location.href = "Users.html";
    }else if(phone_number == "027" && password == "kloy"){
        document.location.href = "Doctor.html"
    }else{
        var login_message = document.getElementById("login_message");
        login_message.style.display = "block";
 
    }
    

//     console.log("Didnt");  
});