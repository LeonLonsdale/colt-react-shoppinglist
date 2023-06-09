import './App.css';
import ShoppingList from './components/ShoppingList.jsx';
import PropertyList from './components/PropertyList';
import TestArrays from './components/TestArrays';
import ColourCell from './components/ColourCell';

const data = [
  {id: 1, item: 'eggs', quantity: 12, completed: false},
  {id: 2, item: 'milk', quantity: 1, completed: true},
  {id: 3, item: 'chicken breasts', quantity: 4, completed: false},
  {id: 4, item: 'carrots', quantity: 6, completed: false},
];

const properties = [
  {id: 129031, name: 'Desert Yurt', rating: 4.9, price: 150},
  {id: 129032, name: 'Lone Mountain Cabin', rating: 4.8, price: 250},
  {id: 129033, name: 'Cactus Retreat', rating: 4.75, price: 300},
  {id: 129034, name: 'Redwood Treehouse Escape', rating: 4.9, price: 120},
  {id: 129035, name: 'Oceanview Condo', rating: 4.7, price: 140},
  {id: 129036, name: 'Gold Miner Campground', rating: 4.69, price: 96},
];

function App() {
  return (
    <>
      <ColourCell />
      {/* <p>Test</p> */}
      {/* <ShoppingList items={data} />
      <PropertyList properties={properties} />
      <TestArrays /> */}
    </>
  );
}

export default App;
