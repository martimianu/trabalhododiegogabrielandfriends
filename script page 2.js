let pizzaSize;
let maxFlavors = 1;
let selectedFlavors = [];

function openSizeSelection() {
  document.getElementById("sizeSelection").style.display = "flex";
}

function selectPizzaSize(size) {
  pizzaSize = size;

  
  if (size === 6) {
    maxFlavors = 1;
  } else {
    maxFlavors = 2; 
  }

  document.getElementById("sizeSelection").style.display = "none";
  document.getElementById("flavorSelection").style.display = "flex";
}

function addFlavor(flavor) {
  if (selectedFlavors.length < maxFlavors) {
    selectedFlavors.push(flavor);
    alert(`Você selecionou: ${flavor}`);
  } else {
    alert(`Você pode escolher até ${maxFlavors} sabores.`);
  }
}

function nextToDetails() {
  if (selectedFlavors.length === 0) {
    alert("Por favor, selecione pelo menos 1 sabor.");
    return;
  }

  document.getElementById("flavorSelection").style.display = "none";
  document.getElementById("finalStep").style.display = "flex";
}

function sendOrder() {
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const phone = document.getElementById("phone").value;

  const flavorsText = selectedFlavors.join(", ");
  const message = `Olá, boa noite, sou o(a) ${name}, fiz meu pedido no site:\nPizza: ${pizzaSize} fatias com sabores: ${flavorsText}\nEndereço: ${address}\nNúmero de celular: ${phone}`;

  const whatsappNumber = "11965281895";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappUrl, "_blank");

  closeModal();
}

function closeModal() {
  document.getElementById("sizeSelection").style.display = "none";
  document.getElementById("flavorSelection").style.display = "none";
  document.getElementById("finalStep").style.display = "none";
  selectedFlavors = [];
  document.getElementById("name").value = "";
  document.getElementById("address").value = "";
  document.getElementById("phone").value = "";
}
