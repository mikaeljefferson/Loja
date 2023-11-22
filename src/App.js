import React from 'react';
import Header from './componentes /header/Header';
import Products from './componentes /Products/Products';
import Cart from './componentes /Cart/Cart';
import Provider from './context/provinder';
function App() {

  return (
    <Provider>
     < Header />
     <Products />
     <Cart />
     </Provider>
  );
}

export default App;