import React from 'react'

export default function NewsLetter() {
  return (
    <section className='max_padd_container py-12 xl:py-20 bg-white'>
        <div className='mx-auto xl:w-[88%] flexCenter flex-col gap-y-8 w-full max-w-[666px]'>
            <h3 className='h3'>Get Exclusive Offers on Your Email</h3>
            <h4 className='uppercase bold-18'>Subscribe to our newsletter ans stay updated</h4>
            <div className='flexBetween rounded-full ring-1 ring-slate-900/10 hover:ring-slate-900/15 bg-primary w-full max-w-[588px]'>
                <input type="email" placeholder='Enter Your Email' className='w-full bg-transparent ml-7 border-none outline-none regular-16' />
                <button className='btn_dark_rounded'>Subscribe</button>
            </div>
        </div>
    </section>
  )
}
