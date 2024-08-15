const h1 = document.querySelector('.helloworld')
const button = document.getElementsByTagName('button')[0]
button.addEventListener('click',function(){
    h1.textContent = "Bye world"
    document.style.color = pink
    let newPara = document.createElement('p')
    newPara.textContent = "popopopo"
    document.body.appendChild(newPara)
})