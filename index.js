function keyPress() {
    let chars = "qwertyuiopasd fghjklzxcvbnm123456789 0!\"£$%^& *()-_=+|\\`¬{}[];:'@#~ ,./<>?"
    let termKeyWords = ["cat", "nano", "touch", "hack", "ls", "cd", "run", "python", "go", "mod", "main.py", ".txt", "new", "mkdir"]
    let o = document.getElementById("output")
    for (let i = 0; i < 10; i++) {
      let nl = Math.floor(Math.random() * 101)
      console.log(nl)
      if (nl < 5) {
        o.innerHTML += "<br />"
      }
      let n = Math.floor(Math.random() * termKeyWords.length)
      o.innerHTML += termKeyWords[n] + " "
      n = Math.floor(Math.random() * chars.length)
      o.innerHTML += chars[n]
    }
    // SCROLLING NOT WORKING
    window.scrollTo(o.height - window.innerHeight, o.height - window.innerHeight)
  }