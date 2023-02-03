function keyPress() {
    alert("pressed!")
    let o = document.getElementById("output")
    let nl = Math.floor(Math.random() * 2)
    if (nl == 1) {
        o = o + "\n"
    }
    let n = Math.floor(Math.random() * 128)
    o = o + String.fromCharCode(n)
}