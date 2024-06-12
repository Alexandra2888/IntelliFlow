"use client";

const testimonials = [
  {
    name: "Jamal S.",
    avatar: "J",
    title: "Senior Software Engineer",
    description: "This is the best application I've ever used!",
  },
  {
    name: "Jorge J.",
    avatar: "J",
    title: "Culinary Operations Orchestration Specialist",
    description: "It's so easy, even I could use it!",
  },
  {
    name: "Isaac S.",
    avatar: "I",
    title: "Logistics Automation Technician",
    description: "Couldn't have finished work without this!",
  },
  {
    name: "Armando C.",
    avatar: "A",
    title: "Rail Transit Systems Maintenance Engineer",
    description: "Was able to fix a railroad twice as fast with this tool!",
  },
];
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const LandingContent = () => {
  return (
    <div className='px-10 pb-20'>
      <h2 className='text-center text-4xl text-white font-extrabold mb-10'>Testimonials</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {testimonials.map((item) => (
          <Card key={item.description} className='bg-[#192339] border-none text-white'>
            <CardHeader>
              <CardTitle className='flex items-center gap-x-2'>
                <div>
                  <p className='text-lg'>{item.name}</p>
                  <p className='text-zinc-400 text-sm'>{item.title }</p>
              </div>
              </CardTitle>
              <CardContent className='pt-4 px-0'>
                {item.description}
              </CardContent>
            </CardHeader>
  </Card>
))}
      </div>
    </div>
  )
}

export default LandingContent
