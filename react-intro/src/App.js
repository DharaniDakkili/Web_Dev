import Card from './components/Card';
import './App.css';

const foodItems = [
  {
      title: "Spaghetti Carbonara",
      image: "https://source.unsplash.com/1600x800/?spaghetti",
      price: 199,
      rating: 4.5,
      desc: "Classic Italian pasta dish with creamy egg sauce, pancetta, and Parmesan cheese.",
      votes: 410
  },
  {
      title: "Margherita Pizza",
      image: "https://source.unsplash.com/1600x800/?pizza",
      price: 200,
      rating: 3.2,
      desc: "Traditional Italian pizza topped with fresh tomatoes, mozzarella cheese, and basil.",
      votes: 198
  },
  {
      title: "Caesar Salad",
      image: "https://source.unsplash.com/1600x800/?salad",
      price: 300,
      rating: 4.9,
      desc: "Fresh romaine lettuce, croutons, Parmesan cheese, and Caesar dressing.",
      votes: 218
  },
  {
      title: "Sushi Platter",
      image: "https://source.unsplash.com/1600x800/?sushi",
      price: 100,
      rating: 3.8,
      desc: "Assortment of fresh sushi rolls including nigiri, sashimi, and maki.",
      votes: 312
  }
];





function App() {
  return (
    <div className='flex'>
      {
     foodItems.map((foodItem)=>{
      return <Card title={foodItem.title} img={foodItem.image} price={foodItem.price} rating={foodItem.rating} votes={foodItem.votes} desc={foodItem.desc}/>
     })
    }
    </div>
  );
}

export default App;
