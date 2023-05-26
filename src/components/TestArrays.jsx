export default function TestArrays() {
  const myArray = [1, 2, 3, 4, 5];
  return (
    <div>
      {myArray.map((e) => (
        <p>{e}</p>
      ))}
    </div>
  );
}
