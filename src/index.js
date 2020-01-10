console.log('%c HI', 'color: firebrick')
function createElement(item){
    let li = document.createElement("li")
    document.getElementById('dog-breeds').appendChild(li)
    let img = document.createElement('img')
    img.src = item
    li.appendChild(img)
}
function createElementRedux(item){
    let lee = document.createElement("li")
    lee.innerText = item
    document.getElementById('dog-breeds').appendChild(lee)
}
document.addEventListener('click',function(){
    if(event.target.innerText.length > 1){
        console.log(event.target.innerText)
        event.target.style.color = "blue"
    } else {
        let valu = event.target.innerText
        let newArray = Array.from(document.getElementById('dog-breeds').children).filter(item => item.innerText.charAt(0) === valu)
        Array.from(document.getElementById('dog-breeds').children).forEach(element => {if(!newArray.includes(element)){element.remove()}})
    }
})
const imgUrl = "https://dog.ceo/api/breeds/list/all"
fetch(imgUrl)
.then(function(response) {
  return response.json();
})
.then(function(jayson){
    console.log(jayson)
    Object.getOwnPropertyNames(jayson.message).forEach(element => createElementRedux(element))
})