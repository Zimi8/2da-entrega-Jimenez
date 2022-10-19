
import './App.css';
import React from 'react' ;
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './componentes/navbar/navbar';

import ItemListContainer from './componentes/itemlistcontainer/itemlistcontainer'

import Counter from './componentes/Counter/ItemCount'
function App() {
  return (<BrowserRouter>
<Fragment>
(<BrowserRouter> 
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={'Annah Deco Great Design'}/>
    <br></br>
      <Counter/>
      <br></br>
    </div>


<Routes>

< Route path='/' element={<ItemListContainer />} />
< Route path='/' element={<ItemListContainer />} />
< Route path='/item/:productId' element={<ItemDetailContainer />} />
< Route path='*' element={<h1>Set Deco no localizado</h1>} />
</Routes>

</BrowserRouter>
</Fragment>
  
  );
}

export default App;
