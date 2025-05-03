const firebaseConfig = {
  apiKey: "AIzaSyBa1fzqUYWAshoF1zK2x2m1XuR2eMEw8s",
  authDomain: "uproject-2e3c7.firebaseapp.com",
  projectId: "uproject-2e3c7",
  storageBucket: "uproject-2e3c7.appspot.com",
  messagingSenderId: "161272239397",
  appId: "1:161272239397:web-3bb6f53fd53e61934c4504",
  measurementId: "G-96RNXJ8J7X"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const product = button.closest('.product');
    const name = product.dataset.name;
    const price = product.dataset.price;

    db.ref('cart').push({ name, price })
      .then(() => alert(`${name} added to cart.`))
      .catch(err => console.error('Failed to add to cart:', err));
  });
});
