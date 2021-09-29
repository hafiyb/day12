var input = document.getElementById('add-to-list')
var todo = document.getElementById('to-do-list')
var complete = document.getElementById('completed-list')
var text

window.addEventListener('keypress', keyPressed)
    
console.log(todo.children)

function keyPressed(evt){
    if(evt.keyCode == 13){
        addToList()
    }
}

function addToList(){

    if(input.value != ''){
        text = input.value
        console.log(text)
    
        var createList = document.createElement('div')
        createList.classList.add('listItem')
        
        var createText = document.createElement('p')
        createText.innerHTML = text
        var createButton = document.createElement('input')
        createButton.type = 'checkbox'
        createButton.classList.add = ('check')
        createButton.onclick = buttonClicked
    
        createList.append(createText)
        createList.append(createButton)
        todo.append(createList)
    
        input.value = ''
    }

    updatePlaceholder()
    
}

function buttonClicked(){
    var listNode = this.parentNode

    var text2 = this.parentNode.querySelector('p').innerHTML

    var createList2 = document.createElement('div')
    createList2.classList.add('listItem')
    
    var createText2 = document.createElement('p')
    createText2.innerHTML = text2
    var createButton2 = document.createElement('button')
    createButton2.onclick = deleteThis
    createButton2.innerHTML = "Delete"

    createList2.append(createText2)
    createList2.append(createButton2)
    complete.append(createList2)

    todo.removeChild(listNode)

    updatePlaceholder()

    // console.log(this.parentNode.parentNode)
    // var allP = this.parentNode.parentNode.querySelectorAll('p')
    // var search = this.parentNode.querySelector('p').innerHTML
    // console.log(allP.indexOf(search))
}

function updatePlaceholder(){
    if(todo.querySelectorAll('p').length > 0){
        document.getElementById('placehold').style.display ='none'
    } else document.getElementById('placehold').style.display ='block'

    if(complete.querySelectorAll('p').length > 0){
        console.log('test')
        document.getElementById('placehold2').style.display ='none'
    } else document.getElementById('placehold2').style.display ='block'
}

function deleteThis(){
    var listNode2 = this.parentNode
    console.log(listNode2)

    complete.removeChild(listNode2)
    updatePlaceholder()
}
