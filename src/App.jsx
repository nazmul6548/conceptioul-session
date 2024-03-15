import { useEffect } from 'react'
import './App.css'
import { useState } from 'react';
import SingleCard from './Components/singleCard/SingleCard';

function App() {
 
  const [cards,setCards] = useState([])
  const [product,setProduct] =useState([])


  useEffect(() => {
fetch('fakedata.json')
.then(res => res.json())
.then(data => {
  setCards(data); 
})
},[]);
// console.log(cards);


const handlebuttonclick = (p) => {
const isExit = product.find(pd => p.id === pd.id);
// console.log(isExit);
if (!isExit) {
  setProduct([...product,p])
  
}else {
  alert('already in cart')
}



}
const handleDelete =id=>{
 
  const newcart = product.filter(item => item.id !== id);
  setProduct(newcart)
  // console.log(product);
}

  return (
    <>
    
      <h1 className='text-center text-4xl font-bold mt-2 mb-8'>Shopping Cards</h1>
      <div className='grid md:grid-cols-12 gap-10'>
      
      <div className='grid md:grid-cols-3 gap-8 col-span-9 '>
      {
        cards.map(card =><SingleCard singleCard={card} handlebuttonclick={handlebuttonclick}></SingleCard>
          )
      }
      </div>

      <div className='grid col-span-9 md:col-span-3 m-4'>
        
       <div className='w-full md:w-full'>
       <h1 className='text-center font-bold text-3xl'>This is Cart</h1>
       <div className="divider"></div>
       <div className='flex justify-around'>
       <h1>Name</h1>
        <h1>Price</h1>
       </div>
       <div className="divider"></div>
       <div>
       {
        product.map((item,index) =>(

        <div className='flex justify-around'>
          <p>{index+1}</p>
       <h1>{item.title.slice(0,10)}</h1>
        <h1>{item.price}</h1>
        <button onClick={() =>handleDelete(item.id)} class="btn btn-outline btn-primary  mb-2">Delete</button>
       </div>
        ))}
       </div>
       
       </div>
      </div>



      </div>
     
      
    </>
  )
}

export default App
