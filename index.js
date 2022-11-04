document.getElementById("get-color").addEventListener("submit", function(e) {
    e.preventDefault()
    const baseColor = document.getElementById("base").value
    const mode = document.getElementById("mode").value
    const data = {
        base: baseColor,
        mode: mode
    }
    console.log(data)
    fetch("https://www.thecolorapi.com/scheme?hex=ff0000&mode=complement&count=6 ")
        .then(response => response.json())
        .then(res => console.log(res))
})