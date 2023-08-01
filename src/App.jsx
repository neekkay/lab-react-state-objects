import Footer from "./Footer";
import Header from "./Header";
import items from "./data";
import { useState } from "react";
import ReactTable from "react-table";  

function App() {
  const [item, setItems] = useState(items);

  return (
    <div className="App">
      <Header />
      <main>
        <aside>
          <table>
          
           <tr>
            
            <th>🍟</th><br></br>
            <th className="item-name">
           <span>Curly Fries</span> <br></br>
          <span> 🌶️🌶️🌶️🌶️🌶️</span></th><br></br>
          <th>$5</th>
          </tr>  
          <tr>
            <th>🥣</th><br></br>
            <th className="item-name">
           <span>Chicken Pickle Chili</span> <br></br>
          <span> 🌶️🌶️🌶️🌶️</span></th><br></br>
          <th>$4</th></tr>

          <tr>

          <th> 🍔 </th><br></br>
            <th className="item-name">
           <span>Cheese Steak with Beet Soup Sauce</span> <br></br>
          <span> 🌶️🌶️🌶️</span></th><br></br>
          <th>$4</th></tr>

          <tr>
          <th> 🥪 </th><br></br>
            <th className="item-name">
           <span>Oreo Fish Burger</span> <br></br>
          <span> 🌶️🌶️</span></th><br></br>
          <th>$12</th></tr>

          <tr>
          <th>🥚</th><br></br>
            <th className="item-name">
           <span>Peanut Butter Deviled Eggs</span> <br></br>
          <span> 🌶️</span></th><br></br>
          <th>$4</th></tr>

          <tr>
          <th>🥧</th><br></br>
            <th className="item-name">
           <span>Mountain Dew Cheesecake</span> <br></br>
          <span> </span></th><br></br>
          <th>$4</th></tr>

          
          </table>
        </aside>
        <section>
          <div>
            <h2>Current Order</h2>
            <ul></ul>
            <h4>Total:</h4>
            <div>
              <button>Tidy order</button>
              <button>Close order</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
