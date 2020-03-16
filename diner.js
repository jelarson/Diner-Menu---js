
// const pancakes = () => {
//   const pancakeCheck = document.getElementsByClassName('list-left')
//   const pancakesLi = document.createElement('LI')
//   pancakesLi.innerHTML = `All-You-Can-Eat Pancakes - $9.99`
//   pancakeCheck.appendChild(pancakesLi)
// }

let listLeft = []
let listRight = []
let subTotal = 0
subTotalDisplay = document.getElementById("js-sub-total").innerHTML = `$${subTotal}`
grandTotalDisplay = document.getElementById("js-grand-total").innerHTML = `$${subTotal + subTotal * .15 + subTotal * .0675}`

// function grandTotalofCheck(subTotal) {
//   totalTax = subTotal * 0.0675
//   totalTip = subTotal * 0.15
//   grandTotal = totalTax + totalTip + subTotal

//   return grandTotal
// }

function pancakes(subTotal) {

  if (listLeft.length < 6) {
    let node = document.createElement("LI");
    let pancakesLi = document.createTextNode("Pancakes - $9.99");
    node.appendChild(pancakesLi);
    document.getElementById("left").appendChild(node);
    listLeft.push('pancake')
  }
  else {
    let node = document.createElement("LI");
    let pancakesLi = document.createTextNode("Pancakes - $9.99");
    node.appendChild(pancakesLi);
    document.getElementById("right").appendChild(node);
    listRight.push('pancake')
  }

  return subTotal = subTotal + 9.99
}

function frenchToast() {
  subTotal += 6.99

  if (listLeft.length < 6) {
    let node = document.createElement("LI");
    let frenchToastLi = document.createTextNode("French Toast - $6.99");
    node.appendChild(frenchToastLi);
    document.getElementById("left").appendChild(node);
    listLeft.push('french toast')
  }

  else {
    let node = document.createElement("LI");
    let frenchToastLi = document.createTextNode("French Toast - $6.99");
    node.appendChild(frenchToastLi);
    document.getElementById("right").appendChild(node);
    listRight.push('french toast')

  }
}

function burger() {
  subTotal += 8.99

  if (listLeft.length < 6) {
    let node = document.createElement("LI");
    let burgerLi = document.createTextNode("Hamburger - $8.99");
    node.appendChild(burgerLi);
    document.getElementById("left").appendChild(node);
    listLeft.push('hamburger')
  }

  else {
    let node = document.createElement("LI");
    let burgerLi = document.createTextNode("Hamburger - $8.99");
    node.appendChild(burgerLi);
    document.getElementById("right").appendChild(node);
    listRight.push('hamburger')
  }
}

function frenchDip() {
  subTotal += 7.99

  if (listLeft.length < 6) {
    let node = document.createElement("LI");
    let frenchDipLi = document.createTextNode("French Dip - $7.99");
    node.appendChild(frenchDipLi);
    document.getElementById("left").appendChild(node);
    listLeft.push('french dip')
  }

  else {
    let node = document.createElement("LI");
    let frenchDipLi = document.createTextNode("French Dip - $7.99");
    node.appendChild(frenchDipLi);
    document.getElementById("right").appendChild(node);
    listRight.push('french dip')
  }
}

function salmon() {
  subTotal += 20.99

  if (listLeft.length < 6) {
    let node = document.createElement("LI");
    let salmonLi = document.createTextNode("Salmon - $20.99");
    node.appendChild(salmonLi);
    document.getElementById("left").appendChild(node);
    listLeft.push('salmon')
  }

  else {
    let node = document.createElement("LI");
    let salmonLi = document.createTextNode("Salmon - $20.99");
    node.appendChild(salmonLi);
    document.getElementById("right").appendChild(node);
    listRight.push('salmon')
  }
}

function steak() {
  subTotal += 22.99

  if (listLeft.length < 6) {
    let node = document.createElement("LI");
    let steakLi = document.createTextNode("Steak - $22.99");
    node.appendChild(steakLi);
    document.getElementById("left").appendChild(node);
    listLeft.push('steak')
  }

  else {
    let node = document.createElement("LI");
    let steakLi = document.createTextNode("Steak - $22.99");
    node.appendChild(steakLi);
    document.getElementById("right").appendChild(node);
    listRight.push('steak')
  }
}
