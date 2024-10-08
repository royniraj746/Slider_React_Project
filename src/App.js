import logo from './logo.svg';
import './App.css';
import CardComp from "./componet/CardComp"
import reviews from './data';


function App() {
  return (
    <div className='w-full   h-fit sm:h-screen bg-gray-600 flex  p-2 flex-col items-center justify-center'>
      <div>
      <h1 className='sm:text-4xl  text-2xl font-bold p-2 text-white'>Our Testimonial</h1>
      </div>
      <CardComp reviews={reviews} />
      
    </div>
  );
}

export default App;
