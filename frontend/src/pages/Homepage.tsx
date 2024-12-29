import { HighLightText } from '@/components/HighLight'
import FlipText from '@/components/ui/flip-text'
import React from 'react'

const Homepage = () => {
  return (
   <>
    <HighLightText/>
    <div>
    <div className='text-7xl text-center mt-10'>
      From <span className="font font-thin italic text-pretty text-[#2979ff]">Chats</span> to <span className="font font-thin italic text-pretty text-[#2979ff]">Connections</span>
      <br />
      <FlipText
      className="text-7xl -tracking-widest text-white md:text-7xl md:leading-[5rem]"
      word="We've got you Covered !"
    />
    </div>
    </div>
   </>
  )
}

export default Homepage