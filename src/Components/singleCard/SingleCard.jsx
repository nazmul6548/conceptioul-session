import React from 'react'

function SingleCard({singleCard,handlebuttonclick}) {
    const {title,price,description,image,category} = singleCard
    console.log(singleCard);
  return (
    <div>

       
<div className="card h-[90%] bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl w-[50%]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title.slice(0,15)}</h2>
    <h6>Category : {category}</h6>
    <p>{description.slice(0,25)}</p>
    <p>Price : {price}</p>
    <div className="card-actions">
      <button onClick={() => {handlebuttonclick(singleCard)}} className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>


    </div>
  )
}

export default SingleCard