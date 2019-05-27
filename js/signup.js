$('.account-btn').click(function(e) {
    e.preventDefault();
    if(true) {
        $('.accountTab').addClass('d-none');
        $('.planTab').removeClass('d-none');
        $('.plan').addClass('active tab-active');
    }
});

$(".toggle-password").click(function() {
    $(this).toggleClass("fa-eye-slash fa-eye");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
});

$(".toggle-con-password").click(function() {
    $(this).toggleClass("fa-eye-slash fa-eye");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
});

function showValidate() {
    var validate = true;
    
    if($('.email').val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
        $(".email-error").removeClass("d-none");
        validate = false;
    }
    if($('.fname').val().trim() == '') {
        $('.fname-error').removeClass('d-none');
        validate = false;
    }
    if($('.lname').val().trim() == '') {
        $('.lname-error').removeClass('d-none');
        validate = false;
    }
    if($('.uname').val().trim() == '') {
        $('.uname-error').removeClass('d-none');
        validate = false;
    }if($('.phone').val().trim() == '') {
        $('.phone-error').removeClass('d-none');
        validate = false;
    }if($('.company').val().trim() == '') {
        $('.comp-error').removeClass('d-none');
        validate = false;
    }
    if($('.password').val().trim() == '') {
        $(".toggle-password").addClass("d-none");
        $(".pass-error").removeClass("d-none");
        validate = false;
    }
    if($('.cpassword').val().trim() == '') {
        $(".toggle-con-password").addClass("d-none");
        $(".cpass-error").removeClass("d-none");
        validate = false;
    }
    return validate;
}

$('.validate-form input').each(function(){
    $(this).focus(function(){
        hideValidate(this);
    });
});

function hideValidate(inputs) {
    if($(inputs).attr('name') == 'email') {
        $(".email-error").addClass("d-none");
    }
    if($(inputs).attr('name') == 'fname') {
        $('.fname-error').addClass('d-none');
    }
    if($(inputs).attr('name') == 'lname') {
        $('.lname-error').addClass('d-none');
    }
    if($(inputs).attr('name') == 'uname') {
        $('.uname-error').addClass('d-none');
    }
    if($(inputs).attr('name') == 'phone') {
        $('.phone-error').addClass('d-none');
    }
    if($(inputs).attr('name') == 'company') {
        $('.comp-error').addClass('d-none');
    }
    if($(inputs).attr('name') == 'password') {
        $(".toggle-password").removeClass("d-none");
        $(".pass-error").addClass("d-none");
    }
    if($(inputs).attr('name') == 'cpassword') {
        $(".toggle-con-password").removeClass("d-none");
        $(".cpass-error").addClass("d-none");
    }
}

// dropdown js

var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);
