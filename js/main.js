function getVariables() {
    getstart = document.getElementById("start");
    start = getstart.options[getstart.selectedIndex].value;
    getdestination = document.getElementById("destination");
    destination = getdestination.options[getdestination.selectedIndex].value;
  }

  function defineRoutes() {
    routesArray = ["gpo", "cbd", "cic", "prestige", "adams", "karen"];
  }

  $(document).ready(function() {
    getVariables();
    defineRoutes();
    $("#button").click(function() {
        descriptionObject = {
            aa : ['hello', 'Ngong', 20,],
        }
        locations = (start+destination);
        alert(descriptionObject[locations][0]);
    });
  });