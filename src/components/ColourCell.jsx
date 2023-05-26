import {useState} from 'react';
import './ColourCell.css';

export default function ColourCell() {
  const randomRgb = () => {
    const {round, random} = Math;
    return `rgb(${round(random() * 255)},${round(random() * 255)},${round(random() * 255)})`;
  };

  const [color, setColor] = useState(randomRgb());

  const handleClick = () => {
    setColor(randomRgb());
  };

  return <div className="ColourCell" style={{backgroundColor: color}} onClick={handleClick}></div>;
}
