import './App.css';
import ShoppingList from './components/ShoppingList.jsx';

const data = [
  {item: 'eggs', quantity: 12, completed: false},
  {item: 'milk', quantity: 1, completed: true},
  {item: 'chicken breasts', quantity: 4, completed: false},
  {item: 'carrots', quantity: 6, completed: true},
];

function App() {
  return (
    <>
      <ShoppingList items={data} />
    </>
  );
}

export default App;
