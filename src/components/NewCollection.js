import React, { useEffect } from 'react'
// import LATEST from '../assets/latest'
import Item from './Item'
export default function NewCollection() {

  const [new_collection, setNewCollection] = React.useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/newcollections')
    .then((response) => response.json())
    .then((data) => setNewCollection(data));
  }, [])

  return (
    <section className='bg-primary'>
        <div className='max_padd_container py-12 xl:py-28 xl:w-[88%]'>
            <h3 className='h3 text-center'>Latest Products</h3>
            <hr className='h-[3px] md:w-1/2 mx-auto bg-gradient-to-l from-transparent via-black to-transparent mb-16'/>
            {/* conatiner */}
            <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {new_collection.map((item) =>(
                    <Item key={item.id} id={item.id} image={item.image} new_price={item.new_price} old_price={item.old_price} title={item.title}/>
                ))}
            </div>
        </div>
    </section>
  )
}
