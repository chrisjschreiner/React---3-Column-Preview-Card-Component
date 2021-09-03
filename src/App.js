import './App.css';
import Card1 from './cards/Card1';
import Card2 from './cards/Card2';
import Card3 from './cards/Card3';
import img1 from './images/icon-sedans.svg';
import img2 from './images/icon-suvs.svg';
import img3 from './images/icon-luxury.svg';

function App() {
  const card1 = {
    image: img1,
    title: 'SEDANS',
    description:
      'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
    button: 'Learn More',
  };
  const card2 = {
    image: img2,
    title: 'SUVS',
    description:
      'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
    button: 'Learn More',
  };
  const card3 = {
    image: img3,
    title: 'LUXURY',
    description:
      'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
    button: 'Learn More',
  };
  return (
    <div className="container">
      <Card1
        image={card1.image}
        title={card1.title}
        description={card1.description}
        button={card1.button}
      />
      <Card2
        image={card2.image}
        title={card2.title}
        description={card2.description}
        button={card2.button}
      />
      <Card3
        image={card3.image}
        title={card3.title}
        description={card3.description}
        button={card3.button}
      />
    </div>
  );
}

export default App;
