const planets = document.querySelectorAll(".planet")
const container = document.querySelector(".container")



for (const planet of planets) {
    planet.addEventListener("click", getData)
}


async function getData() {
    // console.log(this.dataset.id);
    let element = this.dataset.id
    console.log(element);
    return await getFetch(element)
}



async function getFetch(file) {
    const response = await fetch(`assets/json/${file}.json`)
    const data = await response.json()
    console.log(data);
    container.innerHTML = `
    
  
    <div class="hero">

            <div class="hero-left-side">
            <img src="${data[0].images.planet}" alt="">
            <img class="viewOptionThereimg" style="display: none;"src="${data[0].images.geology}" alt="">
            </div>
        
            <div class="hero-right-side">
        
                <h1>${data[0].name}</h1>
                <p>${data[0].overview.content}</p>
                <div class="wikipedia">
                <div class="divA"><a href="${data[0].overview.source}"><span> Source : </span> <span class="underline-style">Wikipedia </span>  </a></div> 
                <img src="assets/img/arrow.png" alt="">
                </div>  
               
                
                <div class="hero-right-viewoptions">
                    <div class="viewoptions viewoptions-one">
                    <h4>01</h4>
                    <span>OVERVIEW</span>
                    </div>
                    <div class="viewoptions viewoptions-two">
                        <h4>02</h4>
                        <span>Internal Structure</span>
                    </div>
                    <div class="viewoptions viewoptions-there">
                        <h4>03</h4>
                        <span>Surface Geology</span>
                    </div>
                </div>
            </div>
    </div>

    <div class="footer">
        
            <div class="footer-box">
                    <h6>ROTATION TIME</h6>
                    <h1>${data[0].rotation}</h1>
            </div>


            <div class="footer-box">
                    <h6>REVOLUTION TIME</h6>
                    <h1>${data[0].revolution}</h1>
            </div>


            <div class="footer-box">
                <h6>radius</h6>
                <h1>${data[0].radius}</h1>
            </div>


            <div class="footer-box">
                <h6>AVERAGE TEMP.</h6>
                <h1>${data[0].temperature}</h1>
            </div>

    </div>

    `

    const viewoptionsOne = document.querySelector(".viewoptions-one")
    const viewoptionsTwo = document.querySelector(".viewoptions-two")
    const viewoptionsthere = document.querySelector(".viewoptions-there")
    const viewOptionThereimg = document.querySelector(".viewOptionThereimg")
    const wikipedia = document.querySelector(".divA")
    const heroleftside = document.querySelector(".hero-left-side")

    viewoptionsOne.addEventListener("click", function () {
        console.log("fkngfkonb");
        this.parentElement.parentElement.children[1].innerHTML = `${data[0].overview.content}`
        this.parentElement.parentElement.parentElement.children[0].innerHTML = `
            <img src="${data[0].images.planet}" alt="">
            `;
        wikipedia.innerHTML = `
            <a href="${data[0].geology.source}"><span> Source : </span> <span class="underline-style">Wikipedia </span>  </a>
            `
    })


    viewoptionsTwo.addEventListener("click", function () {
        this.parentElement.parentElement.children[1].innerHTML = `${data[0].structure.content}`
        this.parentElement.parentElement.parentElement.children[0].innerHTML = `
            <img class="internal" src="${data[0].images.internal}" alt="">
            `;
        wikipedia.innerHTML = `
            <a href="${data[0].structure.source}"><span> Source : </span> <span class="underline-style">Wikipedia </span>  </a>
            `
    })



    viewoptionsthere.addEventListener("click", function () {
        console.log("fkngfkonb");
        viewOptionThereimg.style.display = "block"
        heroleftside.innerHTML = `
        <img src="${data[0].images.planet}" alt="">
        <img class="viewOptionThereimg"  src="${data[0].images.geology}" alt="">
        `
        this.parentElement.parentElement.children[1].innerHTML = `${data[0].geology.content}`
    })
}

// function bindEvents(){

// }



getFetch()
