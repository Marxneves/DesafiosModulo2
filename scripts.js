const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card")
const modal = document.querySelector(".modal");

for(let card of cards){
    card.addEventListener("click",function(){
        const videoId = card.getAttribute("id")
        modalOverlay.classList.add("active");
        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${videoId}`
    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modalOverlay.querySelector("iframe").src = ""
    modal.classList.remove("max")
})

document.querySelector(".maximize").addEventListener("click", function(){   
        if(modal.classList.contains("max")){
            modal.classList.remove("max")
        }
        else{ 
            modal.classList.add("max")  
        }
    })



