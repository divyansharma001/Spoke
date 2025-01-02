import React from 'react'
import Image from 'next/image'
import nextjsLogo from '@/assets/nextjs.1024x617.png'
import tailwindLogo from '@/assets/tallwind.png'
import prismaLogo from '@/assets/prismaLogo.png'
import neonLogo from '@/assets/neon.png'
import tsLogo from '@/assets/ts-logo-128.png'

const TechStack = () => {
  return (
    <>
      <div className="flex justify-center text-center text-gray-400 text-xl">
        Supported and backed by
      </div>
      <div className="flex justify-center items-center text-gray-400 p-6 pt-4 space-x-6">
        <div className="flex flex-col items-center">
          <Image className="invert" src={nextjsLogo} alt="Next.js Logo" width={80} height={80} />
        </div>
        <div className="flex flex-col items-center">
          <Image src={tailwindLogo} alt="Tailwind CSS Logo" width={50} height={50} />
        </div>
        <div className="flex flex-col items-center">
          <Image src={prismaLogo} alt="Prisma Logo" width={80} height={80} />
        </div>
        <div className="flex flex-col items-center">
          <Image src={neonLogo} alt="Neon Logo" width={80} height={80} />
        </div>
        <div className="flex flex-col items-center">
          <Image src={tsLogo} alt="Ts Logo" width={30} height={30} />
        </div>
      </div>
    </>
  )
}

export default TechStack
