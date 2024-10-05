import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import menu1 from '../assets/menu1.webp'
import menu2 from '../assets/menu2.webp'
import menu3 from '../assets/menu3.webp'
import vertical1 from '../assets/vertical1.jpg'
import item1 from '../assets/item1.jpg'
import item2 from '../assets/item2.jpg'
import item3 from '../assets/item3.jpg'

const Menu = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    })
  }, [])
  return (
    <>
      <section className='w-full bg-slate-950 h-fit px-20 py-28 flex flex-col lg:flex-row justify-center items-center gap-16'>
        <div data-aos="slide-up" data-aos-delay="200" className='flex justify-center items-center bg-center bg-cover lg:h-[350px] lg:w-[300px] h-[300px] w-[300px] rounded-xl' style={{ backgroundImage: `url(${menu1})` }}>
          <h1 className='text-white font-bold text-3xl'>FRESH FOOD</h1>
        </div>

        <div data-aos="slide-up" data-aos-delay="200" className='flex justify-center items-center bg-center bg-cover lg:h-[350px] lg:w-[300px] h-[300px] w-[300px] rounded-xl'style={{ backgroundImage: `url(${menu2})` }}>
          <h1 className='text-white font-bold text-3xl'>SPICY FOOD</h1>
        </div>

        <div data-aos="slide-up" data-aos-delay="200" className='flex justify-center items-center bg-center bg-cover lg:h-[350px] lg:w-[300px] h-[300px] w-[300px] rounded-xl'style={{ backgroundImage: `url(${menu3})` }}>
          <h1 className='text-white font-bold text-3xl'>HEALTHY FOOD</h1>
        </div>
      </section>

      <section id='about' className='flex flex-col lg:flex-row justify-center items-center gap-10 lg:py-24 py-20 px-10 lg:px-20 bg-slate-950 w-full h-fit'>
        <div id='left' className='lg:w-[50%] w-full flex flex-col justify-end items-center lg:items-start gap-10 '>
          <h1 data-aos="zoom-in" className='text-6xl text-white font-bold'>About <span className='text-green-500 italic'>Us</span></h1>
          <div data-aos="zoom-in">
            <p className='text-white text-xl font-semibold text-center lg:text-start mt-3'>
              Your cravings, <span className='text-2xl text-yellow-300'>delivered:</span> <span className='text-blue-400'>deliciousness just a tap away!</span>
            </p>
            <p className='text-white text-xl font-semibold text-center lg:text-start mt-3'>
            At Delicious Delights, we connect food lovers with a variety of cuisines, delivering fresh, quality meals right to your doorstep. Join us for a culinary adventure where every craving is satisfied!
            </p>
            <button data-aos="zoom-in-up" data-os-delay="400" className='bg-orange-500 px-8 py-4 rounded-full hover:bg-yellow-300 text-black text-bold mt-6 text-lg'>
              ORDER NOW
            </button>
          </div>
        </div>

        <div id='about-image' data-aos="slide-left" data-aos-delay="200" className='flex justify-center items-center lg:w-[50%] w-full'>
          <img src={vertical1} alt="about image" width={500} height={500} className='rounded-xl' />
        </div>

      </section>
    </>
  )
}

export default Menu