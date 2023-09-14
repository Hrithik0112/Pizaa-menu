import React from "react";

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
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizaa Co.</h1>
    </header>
  );
}
function Menu() {
  const pizaas = pizzaData;
  const numPizaas = pizaas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizaas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. {numPizaas} creative dishes to choose from. All from our
            stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizaas.map((pizaa) => (
              <Pizaa pizaaobj={pizaa} key={pizaa.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're Still Working on Our Menu , Please comeback Later :)</p>
      )}
    </main>
  );
}

function Pizaa({ pizaaobj }) {
  return (
    <li className="pizza">
      <img src={pizaaobj.photoName} alt={pizaaobj.name} />
      <div>
        <h3>{pizaaobj.photoName}</h3>
        <p>{pizaaobj.ingredients}</p>
        <span>{pizaaobj.soldOut ? "SOLD OUT" : pizaaobj.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours;
  const openHours = 12;
  const closeHours = 22;
  const isOpen = hour >= openHours && hour <= closeHours;
  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHours={openHours} closeHours={closeHours} />
      ) : (
        <p>
          We're Happy To Welcome you {openHours}:00 to {closeHours}:00
        </p>
      )}
    </footer>
  );
}

function Order({ openHours, closeHours }) {
  return (
    <div className="order">
      <p>
        We're Open From {openHours}:00 to {closeHours}:00. Come Visit Us Or order Online.
      </p>
      <button className="btn">order</button>
    </div>
  );
}

export default App;
