import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
import CardSection from "./components/CardSection";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <div className="pizzas">
        {pizzaData.length > 0 ? (
          pizzaData.map((data) => <Pizza data={data} key={data.name} />)
        ) : (
          <p>Sorry we are not accepting orders righ now..!!</p>
        )}
      </div>
    </div>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHours = 8;
  const closeHour = 22;
  const isOpen = hour >= openHours && hour <= closeHour;
  console.log(isOpen);
  //  if(hour>=openHours && hour<=closeHour){
  //   alert("We're currently open!")
  //  } else{
  //   alert("Sorry we're closed!")
  //  }
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          we're happy to welcome you b/w {openHours}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}
function Order(props) {
  const {closeHour} = props;
  return (
    <div className="order">
      <p>
        we're opened until {closeHour}:00. Come visit us or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
function Pizza(props) {
  const {name,photoName,ingredients,price,soldOut} = props.data;
  return (
    <div className={`pizza ${soldOut ? 'sold-out' : ''}`} style={{ marginTop: "20px" }}>
      <img src={photoName} alt={props.name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <p>{soldOut ? "Sold Out" : price}</p>
      </div>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <CardSection/>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
