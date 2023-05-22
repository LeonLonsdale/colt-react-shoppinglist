import './App.css';
import ShoppingList from './components/ShoppingList.jsx';

const data = [
  {id: 1, item: 'eggs', quantity: 12, completed: false},
  {id: 2, item: 'milk', quantity: 1, completed: true},
  {id: 3, item: 'chicken breasts', quantity: 4, completed: false},
  {id: 4, item: 'carrots', quantity: 6, completed: false},
];

function App() {
  return (
    <>
      <ShoppingList items={data} />
    </>
  );
}

export default App;
