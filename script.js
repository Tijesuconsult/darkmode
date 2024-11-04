const toggle = document.getElementById("toggleDark")
const body = document.querySelector("body");

let backGroundColor = JSON.parse(localStorage.getItem("color")) || []
const colors = {
    background1: body.style.background = "black",
    background2: body.style.background = "gray",
    background3: body.style.background = 'white'
}
backGroundColor.push(colors)
localStorage.setItem("mode", JSON.stringify(backGroundColor))

toggle.addEventListener("click", function(e){
    e.preventDefault();
    this.classList.toggle("fa-sun")
    if(this.classList.toggle('fa-moon')){
    let light =   body.style.background = "white"; 
    //    localStorage.getItem(background2)
       body.style.color = 'black';
       toggle.style.color = 'black'
       body.style.transition = '2s'
    //   return localStorage.setItem("mode", light)
    }
    else if(this.classList.toggle('fa-star')){
      let gray = body.style.background = "gray"; 
    //   localStorage.getItem(background3)
       body.style.color = 'white';
       toggle.style.color = 'white'
       body.style.transition = '2s'
    //    return localStorage.setItem("mode", gray)

    }
    
    else{
        let black = body.style.background = 'black'
        // localStorage.getItem(background1)
        body.style.color = 'white'
        toggle.style.color = "white"
        body.style.transition = '2s'
    //    return localStorage.setItem("mode", black)
    }
})