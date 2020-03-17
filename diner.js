
// const pancakes = () => {
//   const pancakeCheck = document.getElementsByClassName('list-left')
//   const pancakesLi = document.createElement('LI')
//   pancakesLi.innerHTML = `All-You-Can-Eat Pancakes - $9.99`
//   pancakeCheck.appendChild(pancakesLi)
// }

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

function pancakes() {
  if (currentCheckList.length === 18) {
    alert(`You can only have 18 items in your cart.`)
    return
  }

  updateSubTotal(9.99)
  updateGrandTotal()

  if (currentCheckList.length < 18) {
    let node = document.createElement("LI");
    let pancakesLi = document.createTextNode("Pancakes - $9.99");
    node.appendChild(pancakesLi);
    document.getElementById("current-check").appendChild(node);
    currentCheckList.push('pancake')
    node.innerHTML = `Pancakes - $9.99 <button onclick='deletePancakes()' id='delete'><i class="fas fa-trash-alt"></i></button><button onclick='addComment()' id='comment'><i class="fas fa-comment-alt"></i></button>`
    node.setAttribute('id', 'pancake-item')
    return
  }
}

// function deleteFunc(name, price) {
//   let element = document.getElementById(name);
//   element.parentNode.removeChild(element);
//   updateSubTotal(price)
//   updateGrandTotal()
//   currentCheckList.pop()
// }

function deletePancakes() {
  let element = document.getElementById('pancake-item');
  element.parentNode.removeChild(element);
  updateSubTotal(-9.99)
  updateGrandTotal()
  currentCheckList.pop()
}

function frenchToast() {
  if (currentCheckList.length === 18) {
    alert(`You can only have 18 items in your cart.`)
    return
  }

  updateSubTotal(6.99)
  updateGrandTotal()

  if (currentCheckList.length < 18) {
    let node = document.createElement("LI");
    let frenchToastLi = document.createTextNode("French Toast - $6.99");
    node.appendChild(frenchToastLi);
    document.getElementById("current-check").appendChild(node);
    currentCheckList.push('french toast')
    node.innerHTML = `French Toast - $6.99 <button onclick='deleteFrenchToast()' id='delete'><i class="fas fa-trash-alt"></i></button><button onclick='addComment()' id='comment'><i class="fas fa-comment-alt"></i></button>`
    node.setAttribute('id', 'french-toast-item')
    return
  }
}

function deleteFrenchToast() {
  let element = document.getElementById('french-toast-item');
  element.parentNode.removeChild(element);
  updateSubTotal(-6.99)
  updateGrandTotal()
  currentCheckList.pop()
}

function burger() {
  if (currentCheckList.length === 18) {
    alert(`You can only have 18 items in your cart.`)
    return
  }

  updateSubTotal(8.99)
  updateGrandTotal()

  if (currentCheckList.length < 18) {
    let node = document.createElement("LI");
    let burgerLi = document.createTextNode("Hamburger - $8.99");
    node.appendChild(burgerLi);
    document.getElementById("current-check").appendChild(node);
    currentCheckList.push('hamburger')
    node.innerHTML = `Hamburger - $8.99 <button onclick='deleteBurger()' id='delete'><i class="fas fa-trash-alt"></i></button><button onclick='addComment()' id='comment'><i class="fas fa-comment-alt"></i></button>`
    node.setAttribute('id', 'burger-item')
    return
  }
}

function deleteBurger() {
  let element = document.getElementById('burger-item');
  element.parentNode.removeChild(element);
  updateSubTotal(-8.99)
  updateGrandTotal()
  currentCheckList.pop()
}

function frenchDip() {
  if (currentCheckList.length === 18) {
    alert(`You can only have 18 items in your cart.`)
    return
  }

  updateSubTotal(7.99)
  updateGrandTotal()

  if (currentCheckList.length < 18) {
    let node = document.createElement("LI");
    let frenchDipLi = document.createTextNode("French Dip - $7.99");
    node.appendChild(frenchDipLi);
    document.getElementById("current-check").appendChild(node);
    currentCheckList.push('french dip')
    node.innerHTML = `French Dip - $7.99 <button onclick='deleteFrenchDip()' id='delete'><i class="fas fa-trash-alt"></i></button><button onclick='addComment()' id='comment'><i class="fas fa-comment-alt"></i></button>`
    node.setAttribute('id', 'french-dip-item')
    return
  }
}

function deleteFrenchDip() {
  let element = document.getElementById('french-dip-item');
  element.parentNode.removeChild(element);
  updateSubTotal(-7.99)
  updateGrandTotal()
  currentCheckList.pop()
}

function salmon() {
  if (currentCheckList.length === 18) {
    alert(`You can only have 18 items in your cart.`)
    return
  }

  updateSubTotal(20.99)
  updateGrandTotal()

  if (currentCheckList.length < 18) {
    let node = document.createElement("LI");
    let salmonLi = document.createTextNode("Salmon - $20.99");
    node.appendChild(salmonLi);
    document.getElementById("current-check").appendChild(node);
    currentCheckList.push('salmon')
    node.innerHTML = `Salmon - $20.99 <button onclick='deleteSalmon()' id='delete'><i class="fas fa-trash-alt"></i></button><button onclick='addComment()' id='comment'><i class="fas fa-comment-alt"></i></button>`
    node.setAttribute('id', 'salmon-item')
    return
  }
}

function deleteSalmon() {
  let element = document.getElementById('salmon-item');
  element.parentNode.removeChild(element);
  updateSubTotal(-20.99)
  updateGrandTotal()
  currentCheckList.pop()
}

function steak() {
  if (currentCheckList.length === 18) {
    alert(`You can only have 18 items in your cart.`)
    return
  }

  updateSubTotal(22.99)
  updateGrandTotal()

  if (currentCheckList.length < 18) {
    let node = document.createElement("LI");
    let steakLi = document.createTextNode("Steak - $22.99");
    node.appendChild(steakLi);
    document.getElementById("current-check").appendChild(node);
    currentCheckList.push('steak')
    node.innerHTML = `Steak - $22.99 <button onclick='deleteSteak()' id='delete'><i class="fas fa-trash-alt"></i></button><button onclick='addComment()' id='comment'><i class="fas fa-comment-alt"></i></button>`
    node.setAttribute('id', 'steak-item')
    return
  }
}

function deleteSteak() {
  let element = document.getElementById('steak-item');
  element.parentNode.removeChild(element);
  updateSubTotal(-22.99)
  updateGrandTotal()
  currentCheckList.pop()
}

function checkout() {
  if (grandTotal > 0) {
    alert(`Thank you for your order! Your food will be ready in 30 minutes. Your order number is ${Math.floor(Math.random() * Math.floor(100))}. Please be ready to pay $${grandTotal} with cash or card.`)
  }

  else {
    alert(`You have nothing in your cart.`)
  }
}

// function popup() {
//   var popwindow = document.getElementById("checkBundle");
//   if (popwindow.style.display === "none") {
//     popwindow.style.display = "block";
//   } else {
//     popwindow.style.display = "none";
//   }
// };