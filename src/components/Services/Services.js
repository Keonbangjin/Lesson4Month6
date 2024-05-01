import React from 'react';
import Image3 from '../../Images/img3.png';
import Image4 from '../../Images/img4.png';
import Image5 from '../../Images/img5.png';

function Services() {
  const cards = [
    {
      image: Image3,
      title: 'Consultation Services',
      services: [
        'Design & Build',
        'Cost analysis',
        'Permits & Processes',
        'Scheduling',
        'Phasing',
        'Resource management'
      ]
    },
    {
      image: Image4,
      title: 'General Construction',
      services: [
        'New Construction',
        'Building Addition',
        'Renovation',
        'Restoration',
        'Rebuilding from Drainage',
        'Drainage'
      ]
    },
    {
      image: Image5,
      title: 'Maintenance Services',
      services: [
        'Windows & Doors Fitting',
        'Siding Repairs',
        'Plumbing',
        'Electrical & Solar Fitting',
        'HVAC',
        'Remodeling'
      ]
    }
  ];

  return (
    <div>
      <p className='text-center pt-[50px] text-[#EC9706] text-[18px] font-bold'>Services</p>
      <h1 className='text-center pt-[15px] text-[30px] '>Building Dreams, Crafting Realities</h1>
      <div className='flex justify-center mt-[50px] space-x-[100px] mb-[90px]'>
        {cards.map((card, index) => (
          <div key={index} className='flex flex-col rounded-md shadow-md shadow-black w-[300px] bg-[#F5F5F5]'>
            <img className='w-[full] h-[150px]' src={card.image} alt={`Image ${index + 3}`} />
            <h1 className='text-[18px] font-bold pt-[15px] pl-[20px]'>{card.title}</h1>
            <ul className='pl-[40px] pt-[15px]'>
              {card.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;