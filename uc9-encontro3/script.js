function eventoClick(e){
    e.stopPropagation();
    alert("O elemento " + this.nodeName + " foi clicado!")
}

function eventoFocus(){
    let elePai = this.parentNode
    let eleLbl = elePai.querySelector("label")

    if(eleLbl==null){
        eleLbl = document.createElement("label")
        elePai.appendChild(eleLbl)
    }

    eleLbl.innerText = "Elemento " + this.nodeName + " recebeu o focus"
    this.style.backgroundColor = "burlywood"
}

function eventoBlur(){
    this.style.backgroundColor="white"
}

function Funcaoonload(){
    alert("Formulário carregado com sucesso!")
}


var els = document.querySelectorAll(".clicaveis")

els.forEach(it=>{
    it.addEventListener("click", eventoClick)
})

els=document.querySelectorAll(".focus-habilitado")
els.forEach(it=>{
  it.addEventListener("focus",eventoFocus)
  it.addEventListener("blur",eventoBlur)
})