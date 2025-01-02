import { HighLightText } from '@/components/HighLight'
import { Button } from '@/components/ui/button'
import Homepage from '@/pages/Homepage'
import React from 'react'
import backgroundLayer from '@/assets/blue-purple-1.svg'
import { Features } from '@/pages/Features'

const page = () => {
  return (
    <>
    
   <Homepage/>
   <div className='p-24'><Features/></div>
   
  
   </>
  )
}

export default page