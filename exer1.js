var inputPrice = document.getElementsByClassName('inputPrice')
var inputQty = document.getElementsByClassName('inputQty')
var inputContainer = document.getElementById('input-container')
var inputSet = document.getElementsByClassName('input-set')
var subTotal = document.getElementsByClassName('subtotal')
var total = 0
var grandTotal = document.getElementById('grand-total')


function updateSubTotal(){
    total = 0
    for(let i = 0; i < inputPrice.length; i++){
        subTotal[i].innerHTML = Number(inputPrice[i].value) *  Number(inputQty[i].value)
        total += Number(subTotal[i].innerHTML)
    }

    if(Number(subTotal[inputSet.length - 1].innerHTML) > 0){
        var createInputEle = document.createElement('div')
        createInputEle.classList.add('input-set')
        inputContainer.appendChild(createInputEle)
        
        var createInputPrice = document.createElement('input')
        createInputPrice.classList.add('inputPrice')
        inputSet[inputSet.length - 1].appendChild(createInputPrice)
        inputPrice[inputSet.length - 1].setAttribute("placeholder", "Price")
        inputPrice[inputSet.length - 1].setAttribute("onchange", "updateSubTotal()")
        
        var createInputQty = document.createElement('input')
        createInputQty.classList.add('inputQty')
        inputSet[inputSet.length - 1].appendChild(createInputQty)
        inputQty[inputSet.length - 1].setAttribute("placeholder", "Quantity")
        inputQty[inputSet.length - 1].setAttribute("onchange", "updateSubTotal()")
        
        var createP1 = document.createElement('p')
        createP1.innerHTML = "Subtotal : "
        inputSet[inputSet.length - 1].appendChild(createP1)
        
        var createP2 = document.createElement('p')
        createP2.innerHTML = "0"
        createP2.classList.add('subtotal')
        inputSet[inputSet.length - 1].appendChild(createP2)
    }

    grandTotal.innerHTML = total
}


function doCalc(){
    grandTotal.innerHTML = total
}