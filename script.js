console.log("Script started");

function changeStyle() {
    console.log("click");

    let p = document.getElementById("text");
    p.style.margin = "50px";
    p.style.color = "yellow";
    p.style.fontSize = "35px";
}

function resetStyle() {
    console.log("click");

    let p = document.getElementById("text");
}