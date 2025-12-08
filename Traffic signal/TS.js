    const redLight    = document.getElementById("redLight");
    const yellowLight = document.getElementById("yellowLight");
    const greenLight  = document.getElementById("greenLight");

    function clearLights() {
      redLight.className = "light1";
      yellowLight.className = "light2";
      greenLight.className = "light3";
    }

    function stopLight() {
      clearLights();
      redLight.classList.add("red");
    }

    function waitLight() {
      clearLights();
      yellowLight.classList.add("yellow");
    }

    function goLight() {
      clearLights();
      greenLight.classList.add("green");
    }