$(".toggle-password").click(function() {
    $(this).toggleClass("fa-eye-slash fa-eye");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
});

var inputs = $(".validate-input .input");

$(".validate-form").on("submit", function() {
    var check = true;

    for (var i = 0; i < inputs.length; i++) {
        if(validate(inputs[i]) == false){
            showValidate(inputs[i]);
            check=false;
        }
    }
    return check;
});

$('.validate-form .input').each(function(){
    $(this).focus(function(){
        hideValidate(this);
    });
});

function validate (inputs) {
    if($(inputs).attr('type') == 'email' || $(inputs).attr('name') == 'email') {
        if($(inputs).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            return false;
        }
    }
    else {
        if($(inputs).val().trim() == ''){
            return false;
        }
    }
}

function showValidate(inputs) {
    if($(inputs).attr('type') == 'email' || $(inputs).attr('name') == 'email'){
        $(".email-error").removeClass("d-none");
    } 
    else {
        $(".toggle-password").addClass("d-none");
        $(".pass-error").removeClass("d-none");
    }
}

function hideValidate(inputs) {
    if($(inputs).attr('type') == 'email' || $(inputs).attr('name') == 'email'){
        $(".email-error").addClass("d-none");
    } 
    else {
        $(".toggle-password").removeClass("d-none");
        $(".pass-error").addClass("d-none");
    }
}
