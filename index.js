document.getElementById("get-color").addEventListener("submit", function(e) {
    e.preventDefault()
    // Added the slice to get rid of the "#" in the hex baseColor
    const baseColor = document.getElementById("base").value.slice(1,7)
    const mode = document.getElementById("mode").value
    // Test log
    console.log(mode)

    
    fetch("https://www.thecolorapi.com/scheme?hex=" + baseColor + "&mode=" + mode + "&count=6 ")
        .then(response => res = response.json())
        .then(data => {
            // Save colors from api
            const color1 = data.colors[0].hex.value
            const color2 = data.colors[1].hex.value
            const color3 = data.colors[2].hex.value
            const color4 = data.colors[3].hex.value

            // Color the divs, color 0 is the baseColor
            document.getElementById("color-0").style.background  = "#" + baseColor;
            document.getElementById("color-1").style.background  = color1;
            document.getElementById("color-2").style.background  = color2;
            document.getElementById("color-3").style.background  = color3;
            document.getElementById("color-4").style.background  = color4;

            //Set the names 
            document.getElementById("name-0").innerHTML  = "#" + baseColor;
            document.getElementById("name-1").innerHTML  = color1;
            document.getElementById("name-2").innerHTML  = color2;
            document.getElementById("name-3").innerHTML  = color3;
            document.getElementById("name-4").innerHTML  = color4;
        })
       
    
        

})