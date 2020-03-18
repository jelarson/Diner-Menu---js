
let currentCheckList = []
let subTotal = 0
let grandTotal = 0
document.getElementById("js-sub-total").innerHTML = `$${subTotal}`
document.getElementById("js-grand-total").innerHTML = `$${grandTotal}`

function addComment() {
  prompt("Add any special instructions here:", "Ex: Medium rare, no onions, extra mayo")
}

function updateSubTotal(price) {
  subTotal = Math.round((subTotal + price) * 100) / 100
  document.getElementById("js-sub-total").innerHTML = `$${subTotal}`
}

function updateGrandTotal() {
  grandTotal = (Math.round((subTotal + subTotal * 0.15 + subTotal * .0675) * 100)) / 100
  document.getElementById("js-grand-total").innerHTML = `$${grandTotal}`
}

i = 0

function boxChecker() {
  return i += 1
}

let today = new Date()

function pancakes() {
  if (currentCheckList.length === 18) {
    alert(`You can only have 18 items in your cart.`)
    return
  }

  if (i > 2) {
    alert('You can only select 2 sides')
    return
  }

  if (today.getHours() > 11) {
    alert('We are no longer serving breakfast today')
    return
  }

  updateSubTotal(9.99)
  updateGrandTotal()

  if (currentCheckList.length < 18) {
    let node = document.createElement("LI");
    document.getElementById("current-check").appendChild(node);
    currentCheckList.push('pancake')
    node.innerHTML =
      `Pancakes - $9.99 
    <button onclick="deleteFunc('.pancake-item', -9.99)" id='delete'><i class="fas fa-trash-alt"></i></button>
    <button onclick='addComment()' id='comment'><i class="fas fa-comment-alt"></i></button>`
    node.setAttribute('class', 'pancake-item')
    return
  }
}

function sideMenuPopup(name) {

  let element = document.querySelector(name)
  attOfElement = element.getAttribute("is-hidden")

  if (attOfElement === "True") {
    element.setAttribute("is-hidden", "False")
    return
  }
  if (attOfElement === "False") {
    element.setAttribute("is-hidden", "True")
    return
  }
}

function deleteFunc(name, price) {
  let element = document.querySelector(name);
  element.parentNode.removeChild(element);
  updateSubTotal(price)
  updateGrandTotal()
  currentCheckList.pop()
}

function frenchToast() {
  if (currentCheckList.length === 18) {
    alert(`You can only have 18 items in your cart.`)
    return
  }

  if (today.getHours() > 11) {
    alert('We are no longer serving breakfast today')
    return
  }

  updateSubTotal(6.99)
  updateGrandTotal()

  if (currentCheckList.length < 18) {
    let node = document.createElement("LI");
    document.getElementById("current-check").appendChild(node);
    currentCheckList.push('french toast')
    node.innerHTML =
      `French Toast - $6.99 
    <button onclick="deleteFunc('.french-toast-item', -6.99)" id='delete'><i class="fas fa-trash-alt"></i></button>
    <button onclick='addComment()' id='comment'><i class="fas fa-comment-alt"></i></button>`
    node.setAttribute('class', 'french-toast-item')
    return
  }
}


function burger() {
  if (currentCheckList.length === 18) {
    alert(`You can only have 18 items in your cart.`)
    return
  }

  if (today.getHours() > 16) {
    alert('We are no longer serving lunch today')
    return
  }

  if (today.getHours() < 11) {
    alert("We are not serving lunch yet today")
  }

  updateSubTotal(8.99)
  updateGrandTotal()

  if (currentCheckList.length < 18) {
    let node = document.createElement("LI");
    document.getElementById("current-check").appendChild(node);
    currentCheckList.push('hamburger')
    node.innerHTML =
      `Hamburger - $8.99 
    <button onclick="deleteFunc('.burger-item', -8.99)" id='delete'><i class="fas fa-trash-alt"></i></button>
    <button onclick='addComment()' id='comment'><i class="fas fa-comment-alt"></i></button>`
    node.setAttribute('class', 'burger-item')
    return
  }
}

function frenchDip() {
  if (currentCheckList.length === 18) {
    alert(`You can only have 18 items in your cart.`)
    return
  }

  if (today.getHours() > 16) {
    alert('We are no longer serving lunch today')
    return
  }

  if (today.getHours() < 11) {
    alert("We are not serving lunch yet today")
  }

  updateSubTotal(7.99)
  updateGrandTotal()

  if (currentCheckList.length < 18) {
    let node = document.createElement("LI");
    document.getElementById("current-check").appendChild(node);
    currentCheckList.push('french dip')
    node.innerHTML =
      `French Dip - $7.99 
    <button onclick="deleteFunc('.french-dip-item', -7.99)" id='delete'><i class="fas fa-trash-alt"></i></button>
    <button onclick='addComment()' id='comment'><i class="fas fa-comment-alt"></i></button>`
    node.setAttribute('class', 'french-dip-item')
    return
  }
}

function salmon() {
  if (currentCheckList.length === 18) {
    alert(`You can only have 18 items in your cart.`)
    return
  }

  if (today.getHours() <= 16) {
    alert('We are not serving dinner yet today')
    return
  }

  updateSubTotal(20.99)
  updateGrandTotal()

  if (currentCheckList.length < 18) {
    let node = document.createElement("LI");
    document.getElementById("current-check").appendChild(node);
    currentCheckList.push('salmon')
    node.innerHTML =
      `Salmon - $20.99 
    <button onclick="deleteFunc('.salmon-item', -20.99)" id='delete'><i class="fas fa-trash-alt"></i></button>
    <button onclick='addComment()' id='comment'><i class="fas fa-comment-alt"></i></button>`
    node.setAttribute('class', 'salmon-item')
    return
  }
}

function steak() {
  if (currentCheckList.length === 18) {
    alert(`You can only have 18 items in your cart.`)
    return
  }

  if (today.getHours() <= 16) {
    alert('We are not serving dinner yet today')
    return
  }

  updateSubTotal(22.99)
  updateGrandTotal()

  if (currentCheckList.length < 18) {
    let node = document.createElement("LI");
    document.getElementById("current-check").appendChild(node);
    currentCheckList.push('steak')
    node.innerHTML =
      `Steak - $22.99 
    <button onclick="deleteFunc('.steak-item', -22.99)" id='delete'><i class="fas fa-trash-alt"></i></button>
    <button onclick='addComment()' id='comment'><i class="fas fa-comment-alt"></i></button>`
    node.setAttribute('class', 'steak-item')
    return
  }
}


function checkout() {
  if (grandTotal > 0) {
    alert(`Thank you for your order! Your food will be ready in 30 minutes. Your order number is ${Math.floor(Math.random() * Math.floor(100))}. Please be ready to pay $${grandTotal} with cash or card.`)
  }

  else {
    alert(`You have nothing in your cart.`)
  }
}
