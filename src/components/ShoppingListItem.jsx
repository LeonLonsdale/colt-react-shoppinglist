export default function ShoppingListItem({item, quantity, completed, id}) {
  const styles = {
    color: completed ? 'grey' : 'red',
    textDecoration: completed ? 'line-through' : 'none',
  };
  return (
    <li key={id} style={styles}>
      {item} - {quantity}
    </li>
  );
}
