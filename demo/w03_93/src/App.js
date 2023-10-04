import { useState } from 'react';
import'./App.css';
import menu_data from './data';
import Menu_93 from './components/Menu_93';
import Categories_93 from './components/Categories_93';

const App = () => {
  // const [menu, setMenu] = useState(menu_data);
  // console.log(menu);
  const categories = ['all','breakfast','lunch','dinner','dessert','shakes'];
  return (
    <section className="menu">
    <div className="title">
      <h2>our menu - 211410146</h2>
      <div className="underline"></div>
    </div>
    <Categories_93 categories={categories}/>
    <Menu_93 menu={menu_data} />
  </section>
  );
}
export default App;