// Replace these with your own Firebase project values
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  databaseURL: "https://your-app.firebaseio.com",
  projectId: "your-app-id",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "1234567890",
  appId: "your-app-appid"
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
