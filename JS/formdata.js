/*
  Local storage in this file is used to keep user input alive between the
  diferent form pages (form1, form2, form3) and also after browser is
  refreshed or closed, becouse localStorage save data on the client side
  in key value pairs wich are not expire automaticaly. The triger is the
  setInterval call on first line - every 2000 miliseconds (2 sec) it call
  function savedata() wich grab current value of every input on the page
  using document.querySelector and write each one to localStorage by
  localStorage.setItem('keyname', value). This mean user dont need to
  press any button for saving, it happen in background automaticaly.

  Second part is function retrievedata() wich is triger by onload event
  of the body tag in HTML. When page is loading, browser call this
  function, it read back every key from localStorage using
  localStorage.getItem("keyname") and put the value into matching input
  field. So when user navigate to next page or come back later, all
  fields are already pre filled with last saved data, and at the end it
  also call changeState() so state dropdown is rebuild correctly for the
  remembered country.
*/

var myInterval = setInterval(savedata, 2000);

function savedata(){
var username = document.querySelector("#username").value;
var fname = document.querySelector("#fname").value;
var address = document.querySelector("#address").value;
var suburb = document.querySelector("#suburb").value;
var city = document.querySelector("#city").value;
var country = document.querySelector("#country").value;
var state = document.querySelector("#state").value;
var postcode = document.querySelector("#postcode").value;
var email = document.querySelector("#email").value;
var phone = document.querySelector("#phone").value;
var website = document.querySelector("#website").value;
var age = document.querySelector("#age").value;
localStorage.setItem('username', username);
localStorage.setItem('fname', fname);
localStorage.setItem('address', address);
localStorage.setItem('suburb', suburb);
localStorage.setItem('city', city);
localStorage.setItem('country', country);
localStorage.setItem('state', state);
localStorage.setItem('postcode', postcode);
localStorage.setItem('email', email);
localStorage.setItem('phone', phone);
localStorage.setItem('website', website);
localStorage.setItem('age', age);
}

function retrievedata(){
var username = localStorage.getItem("username");
var fname = localStorage.getItem("fname");
var address = localStorage.getItem("address");
var suburb = localStorage.getItem("suburb");
var city = localStorage.getItem("city");
var country = localStorage.getItem("country");
var state = localStorage.getItem("state");
var postcode = localStorage.getItem("postcode");
var email = localStorage.getItem("email");
var phone = localStorage.getItem("phone");
var website = localStorage.getItem("website");
var age = localStorage.getItem("age");
document.querySelector("#fname").value = fname;
document.querySelector("#username").value = username;
document.querySelector("#address").value = address;
document.querySelector("#suburb").value = suburb;
document.querySelector("#city").value = city;
document.querySelector("#country").value = country;
document.querySelector("#state").value = state;
document.querySelector("#postcode").value = postcode;
document.querySelector("#email").value = email;
document.querySelector("#phone").value = phone;
document.querySelector("#website").value = website;
document.querySelector("#age").value = age;

changeState();
}
