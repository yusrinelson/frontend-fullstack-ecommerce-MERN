import React, { useEffect, useState } from 'react'
// import POPULAR from '../assets/popular'
import Item from './Item'

export default function Popular() {

  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/popular')
    .then((response) => response.json())
    .then((data) => setPopular(data));
  }, [])

  return (
    <section className='bg-primary'>
        <div className='max_padd_container py-12 xl:py-28 xl:w-[88%]'>
            <h3 className='h3 text-center'>Popular Products</h3>
            <hr className='h-[3px] md:w-1/2 mx-auto bg-gradient-to-l from-transparent via-black to-transparent mb-16'/>
            {/* conatiner */}
            <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {popular.map((item) =>(
                    <Item key={item.id} id={item.id} image={item.image} new_price={item.new_price} old_price={item.old_price} title={item.title}/>
                ))}
            </div>
        </div>
    </section>
  )
}
