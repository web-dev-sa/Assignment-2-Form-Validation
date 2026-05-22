/*
  Programming documentation forms:

  Pseudocode - is plain english description of algorithm steps, writen before
  real code so programmer can plan the logic without worry about syntax.

  Flow Charts - is visual diagram with boxes and arrows wich showing the flow
  of decisions and actions through program from start to end.

  Internal Comments in code - is short notes writen directly inside source
  file (like this one) to explain to other developer what code is doing and
  why, not how.
*/

function validateErrors(formField, errorField) {
  theField = document.getElementById(formField);
  theError = document.getElementById(errorField);
  var thePattern = new RegExp("^" + theField.pattern + "$");
  if (!thePattern.test(theField.value)) {
    theField.style.background = "#f3cfb2";
    theError.style.display = "block";
    theError.innerHTML = theField.title;
    return false;
  } else {
    theField.style.background = "#cbf7d5";
    theError.style.display = "none";
    return true;
  }
}

/*
  Function validatePostcode() is checking that postcode wich user typed in
  is matching the australian state wich was selected in dropdown before.
  First it grab value of state select and value of postcode input, then
  also reference to error span and to postcode field itself so we can
  change colour later. After that, switch statement is used to pick the
  correct regular expression pattern depending on wich state code came
  back (SA, NSW, VIC and so on). Switch is used here insted of long if
  else if chain becouse we compare one same variable (state) against many
  fixed values - switch make code much more clean to read, easier to add
  new state in future, and is slightly faster becouse interpreter only
  evaluate the expression one time. Default case just return true so that
  when no state is picked yet, postcode is not blocked.

  Second part of function take the chosen pattern and test it against
  postcode value. If test fail, background of postcode field turn pink,
  error span become visible with message "Invalid postcode for selected
  state" and function return false so form can not submit. If test pass,
  background turn green, error span is hidden and function return true.
  This way user is getting instant visual feedback that postcode and
  state are consistent with each other (for example NSW must start with
  2, QLD must start with 4 and so on).
*/
function validatePostcode() {
  var state = document.getElementById("state").value;
  var postcode = document.getElementById("postcode").value;
  var postcodeError = document.getElementById("postcodeError");
  var postcodeField = document.getElementById("postcode");

  var pattern;

  switch (state) {
    case "SA": pattern = /^5[0-9]{3}$/; break;
    case "NSW": pattern = /^2[0-9]{3}$/; break;
    case "VIC": pattern = /^3[0-9]{3}$/; break;
    case "QLD": pattern = /^4[0-9]{3}$/; break;
    case "TAS": pattern = /^7[0-9]{3}$/; break;
    case "WA": pattern = /^6[0-9]{3}$/; break;
    case "ACT": pattern = /^02[0-9]{2}$/; break;
    case "NT": pattern = /^08[0-9]{2}$/; break;
    default:
      return true;
  }

  if (!pattern.test(postcode)) {
    postcodeField.style.background = "#f3cfb2";
    postcodeError.style.display = "block";
    postcodeError.innerHTML = "Invalid postcode for selected state";
    return false;
  } else {
    postcodeField.style.background = "#cbf7d5";
    postcodeError.style.display = "none";
    return true;
  }
}

function validate() {
  var elements = document.getElementById("Register_New_User").elements;

  for (var i = 0, element; element = elements[i++];) {

    if ((element == '[object HTMLInputElement]' || element == '[object HTMLSelectElement]')
        && (element.style.backgroundColor != 'rgb(203, 247, 213)')) {

      if (element.type != 'color' && element.type != 'submit') {
        alert("Please enter data for any fields that are not green");
        return false;
      }
    }
  }

  if (document.getElementById("colour").value != '#000000') {
    alert("Spam check failed: please select the black colour");
    document.getElementById("colour").focus();
    return false;
  }

  return true;
}
