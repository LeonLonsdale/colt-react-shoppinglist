export default function PropertyListItem({id, name, price, rating}) {
  return (
    <li key={id} className="Property">
      <h2>{name}</h2>
      <h3>${price} per night</h3>
      <h4>⭐️ {rating}</h4>
    </li>
  );
}
