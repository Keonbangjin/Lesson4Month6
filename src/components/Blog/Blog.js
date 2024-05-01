import React from 'react';
import Image7 from '../../Images/img7.png';
import Image8 from '../../Images/img8.png';
import Image9 from '../../Images/img9.png';

function Blog() {
  const cards = [
    {
      image: Image7,
      date: '24 October 2022',
      title: 'What are the processes involved in putting up a building?',
      description: 'The process of putting up a building is usually done in phases and understanding this phases is important to a client in terms...',
    },
    {
      image: Image8,
      date: '3 November 2022',
      title: 'What is Minimalist Architecture and Minimal Design Space?',
      description: 'Minimalism in architecture is a form that can be characterized using various aspects with the sole aim of reducing clutter and...',
    },
    {
      image: Image9,
      date: '5 January 2023',
      title: 'Integrating Technology for Modern Construction',
      description: 'In the realm of modern construction, the integration of smart home innovations has emerged as a transformative force...',
    }
  ];

 return (
    <div>
      <p className='text-center text-[20px] text-[#EC9706] font-bold pt-[50px]'>Blog</p>
      <h1 className='text-center pt-[10px] text-[30px] font-bold'>Insightful blogs about the construction industry.</h1>
      <div className='flex justify-center items-center mt-[30px]'>
        {cards.map((card, index) => (
          <div key={index} className='w-[300px] shadow-xl shadow-black rounded-md mr-[90px] mb-[60px]'>
            <img className='w-full h-[200px]' src={card.image} alt={`Image ${index + 7}`} />
            <p className='pl-[15px] pt-[10px] text-slate-500 text-[17px]'>{card.date}</p>
            <p className='pl-[15px] pt-[10px] text-[#EC9706] text-[17px]'>{card.title}</p>
            <p className='w-[280px] h-[90px] pl-[15px] pt-[10px] text-[14px] text-slate-500'>{card.description}</p>
            <button className='text-center mb-[10px] mt-[20px] ml-[15px] w-[150px] h-[35px] rounded-md text-white bg-[#EC9706]'>Read more</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
