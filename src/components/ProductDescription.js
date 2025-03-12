import React from 'react'

export default function ProductDescription() {
  return (
    <div className='mt-20'>
        <div className='flex gap-3 mb-4'>
            <button className='btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36 '>Description</button>
            <button className='btn_dark_outline !rounded-none !text-xs !py-[6px] w-36 '>Care Guide</button>
            <button className='btn_dark_outline !rounded-none !text-xs !py-[6px] w-36 '>Size Guide</button>
        </div>
        <div className='flex flex-col pb-16'>
            <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias earum consequuntur repellat tenetur sapiente ipsam voluptate quibusdam temporibus omnis dolorum aperiam, numquam voluptates et non cumque id corporis asperiores, incidunt iste enim? Numquam est dolor illum sequi distinctio vitae quibusdam ex maiores rerum ullam quasi culpa voluptas dignissimos, molestias in!
            </p>
            <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias earum consequuntur repellat tenetur sapiente ipsam voluptate quibusdam temporibus omnis dolorum aperiam</p>
        </div>
    </div>
  )
}
