import React from 'react';
import { AnimatedListDemo } from '@/components/notifications';
import { MdOutlineNotificationsActive } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const NotificationFeature = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Left Column - Chat Notifications Demo */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6 rounded-xl shadow-lg">
        <AnimatedListDemo />
      </div>
      
      {/* Right Column - Content */}
      <div className="space-y-8">
        {/* Feature Badge */}
        <div className="flex items-center space-x-2">
          <Badge variant="secondary" className="px-4 py-1 text-sm flex items-center gap-2">
            <MdOutlineNotificationsActive className="text-blue-500 text-lg" />
            <span>Live Chat Notifications</span>
          </Badge>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            Never Miss Important Messages
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Stay connected with real-time chat notifications. Get instant alerts when new messages 
            arrive, even when you&apos;re in another chat or away from the active window.
          </p>

          {/* Feature List */}
          <ul className="space-y-4">
            {[
              'Instant message notifications via Socket.io',
              'Real-time message delivery status',
              'Unread message indicators'
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
              View Notifications
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default NotificationFeature