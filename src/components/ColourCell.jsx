import {useState} from 'react';

export default function ColourCell() {
  const randomRgb = () => {
    const rnd = Math.round,
      rndm = Math.random,
      max = 255;
    return `rgba(${rnd(rndm() * max)},${rnd(rndm() * max)},${rnd(rndm() * max)}, 1)`;
  };

  const [color, setColor] = useState(randomRgb());

  const handleClick = () => {
    const color = randomRgb();
    setColor(color);
  };
  return (
    <div
      style={{width: '50px', height: '50px', backgroundColor: color}}
      onClick={handleClick}
    ></div>
  );
}
