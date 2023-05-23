import PropertyListItem from './PropertyListItem';
export default function PropertyList({properties}) {
  return (
    <ul className="Property-list">
      {properties.map((property) => (
        <PropertyListItem key={property.id} {...property} />
      ))}
    </ul>
  );
}
