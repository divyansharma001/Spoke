import React from 'react'
import { MarqueeDemo } from './filesDemo'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { FaFileContract } from "react-icons/fa6";

const SaveFiles = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Right Column - Content */}
        <div className="space-y-8">
          {/* Feature Badge */}
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="px-4 py-1 text-sm flex items-center gap-2">
              <FaFileContract className="text-blue-500 text-lg" />
              <span>File Management</span>
            </Badge>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
              Share & Save Files Effortlessly
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Share files of any type within your chats and keep them organized. Access your shared files 
              anytime, with automatic saving and easy retrieval across all your conversations.
            </p>

            {/* Feature List */}
            <ul className="space-y-4">
              {[
                'Secure file storage and sharing in chats',
                'Instant preview for images and documents',
                'Easy file organization by chat or date'
              ].map((feature, index) => (
                <li 
                  key={index}
                  className="flex items-center space-x-3"
                >
                  <svg className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="pt-6">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Manage Files
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6 rounded-xl shadow-lg hidden lg:block">
          <MarqueeDemo/>
        </div>
      </div>
    </section>
  )
}

export default SaveFiles