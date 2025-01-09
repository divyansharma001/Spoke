
import Banner from '@/components/Banner'
import Features from '@/pages/Features'
import Homepage from '@/pages/Homepage'
import React from 'react'



const page = () => {
  return (
    <>
    <div>
   <Homepage/>
   <div className='lg:p-24 lg:pt-24 pt-8 p-2'><Features/></div>
   <div className='p-14'><Banner/></div>
   </div>
   
   </>
  )
}

export default page