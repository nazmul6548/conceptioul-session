import { useEffect } from 'react'
import './App.css'
import { useState } from 'react';
import SingleCard from './Components/singleCard/SingleCard';

function App() {
 
  const [cards,setCards] = useState([])


  useEffect(() => {
fetch('../public/fakedata.json')
.then(res => res.json())
.then(data => {
  setCards(data); 
})
},[]);
console.log(cards);

  return (
    <>
    
      <h1 className='text-center text-4xl font-bold mt-2 mb-8'>Shopping Cards</h1>
      <div className='grid grid-cols-12 gap-10'>
      
      <div className='grid grid-cols-3 gap-8 col-span-9 '>
      {
        cards.map(card =><SingleCard singleCard={card}></SingleCard>
          )
      }
      </div>

      <div className='grid col-span-3 m-4'>
        
       <div>
       <h1 className='text-center font-bold text-3xl'>This is Cart</h1>
       <div className="divider"></div>
       <div className='flex justify-between'>
        <h1>Name</h1>
        <h1>Price</h1>
       </div>
       <div className="divider"></div>
       </div>
      </div>



      </div>
     
      
    </>
  )
}

export default App
