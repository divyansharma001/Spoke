'use client';
import { MailIcon, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Mockup from '@/assets/Mockup.png';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  };

export default function Banner(){
    return(
        <>
          <div className="wrapper group">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.75,
          type: 'spring',
          damping: 10,
          stiffness: 100,
        }}
        className="relative flex h-[75vh] w-full flex-col overflow-hidden rounded-3xl bg-gradient-to-b from-[#1b5ef5] to-[#173bb6] p-8 md:h-[45vh] md:flex-col"
      >
        <div className="flex flex-col justify-end gap-4">
          <div className="flex flex-col gap-2 md:w-[70%]">
            <h3 className="text-3xl font-bold tracking-tighter text-white md:text-4xl">
              Join the waitlist for{' '}
              <span className="font-extrabold tracking-tighter">
                Spoke App
              </span>
              , your all-in-one communication platform
            </h3>

            <p className="text-lg font-medium text-white/80 md:text-xl">
              Be the first to experience our upcoming app featuring Realtime Chat for instant messaging, crystal-clear Voice Calls, smooth Video Calls, and easy File Sharing
            </p>
          </div>
          <div className="flex flex-col gap-2 md:flex-row">
            <Link
              href="/"
              target="_blank"
            >
              <Button
                size={'lg'}
                variant={'default'}
                className="flex w-full items-center gap-2 md:w-fit"
              >
                <Sparkles className="size-4" />
                Join App Waitlist
              </Button>
            </Link>
            <Link
              href="/"
              target="_blank"
            >
              <Button
                size={'lg'}
                variant={'secondary'}
                className="flex w-full items-center gap-2 md:w-fit"
              >
                <MailIcon className="size-4" />
                Request Features
              </Button>
            </Link>
          </div>
        </div>
        <Link
          href="/"
          target="_blank"
        >
          <motion.div
            animate={floatingAnimation}
            className="absolute mx-auto w-full justify-end md:right-6 md:top-12"
          >
            <Image
              src={Mockup}
              alt="Mockup"
              className="absolute w-[80%] rotate-3 transition-all duration-300 group-hover:-translate-y-4 group-hover:rotate-6 md:right-6 md:w-[30%]"
            />
          </motion.div>
        </Link>
      </motion.div>
    </div>
        </>
    )
}