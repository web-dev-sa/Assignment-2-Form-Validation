function changeState() {
  var country = document.getElementById("country").value;
  var state = document.getElementById("state");

  if (country === "AU") {
    state.innerHTML = "";

    state.options[state.options.length] = new Option("-- select state --", "0");
    state.options[state.options.length] = new Option("South Australia", "SA");
    state.options[state.options.length] = new Option("New South Wales", "NSW");
    state.options[state.options.length] = new Option("Victoria", "VIC");
    state.options[state.options.length] = new Option("Queensland", "QLD");
    state.options[state.options.length] = new Option("Tasmania", "TAS");
    state.options[state.options.length] = new Option("Western Australia", "WA");
    state.options[state.options.length] = new Option(
      "Australian Capital Territory",
      "ACT",
    );
    state.options[state.options.length] = new Option(
      "Northern Territory",
      "NT",
    );
  }
  else if (country === "NZ") {
    state.innerHTML = "";
  }
  else {
    state.innerHTML = "";
    state.options[state.options.length] = new Option(
      "-- select country first --",
      "",
    );
  }

  if (document.getElementById("country").value == "0") {
    document.getElementById("country").style.background = "#f3cfb2";
  } else {
    document.getElementById("country").style.background = "#cbf7d5";
  }
}

function stateColours() {
  if (document.getElementById("state").value == "0") {
    document.getElementById("state").style.background = "#f3cfb2";
  } else {
    document.getElementById("state").style.background = "#cbf7d5";
  }
}
