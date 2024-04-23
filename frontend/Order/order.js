const container = document.getElementById('container');

// Exemple de données de produits
const products = [
{ image: 'image1.jpg', name: 'Produit 1', price: '10€' },
{ image: 'image2.jpg', name: 'Produit 2', price: '20€' },
{ image: 'image3.jpg', name: 'Produit 3', price: '30€' }
];

// Générer les cartes de produits
products.forEach(product => {
const card = document.createElement('div');
card.classList.add('card');

const img = document.createElement('img');
img.src = product.image;
img.alt = product.name;

const info = document.createElement('div');
info.classList.add('info');
info.innerHTML = `
<h3>${product.name}</h3>
<p>${product.price}</p>
`;

const quantity = document.createElement('div');
quantity.classList.add('quantity');
quantity.innerHTML = `
<button>-</button>
<input type="text" value="0">
<button>+</button>
`;

const orderBtn = document.createElement('button');
orderBtn.classList.add('order-btn');
orderBtn.textContent = 'Valider l\'achat';

card.appendChild(img);
card.appendChild(info);
card.appendChild(quantity);
card.appendChild(orderBtn);
container.appendChild(card);
});