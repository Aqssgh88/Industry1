import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className="text-center">
        <a className="items-center cursor-pointer w-36 mx-auto mb-2">
          <h1 className="text-[32px] font-bold tracking-wide">
            <span style={{ fontFamily: "'Ovo', serif" }}>Faizi Industry</span>
            <span className="text-[#e642a3]">.</span>
          </h1>
        </a>
        <a href="mailto:arslananjum15@gmail.com" className='w-max cursor-pointer flex items-center gap-2 mx-auto'>
          <Image src={assets.mail_icon} alt='' className='w-6' />
          faiziindustry01@gmail.com
        </a>

      </div>
      
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6' >
        <p>© 2025 Faizi Industry. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-cemter mt-4 sm:mt-0'>
        <li><a target="_blank" href="https://wa.me/923127159395">Whatsapp</a></li>
          <li><a target="_blank" href='https://www.instagram.com/faizi_industry_?igsh=MW1tcmtyYXEyenR4Yg%3D%3D&utm_source=qr '>Instagram</a></li>
          <li><a target="_blank" href='https://www.facebook.com/share/1FJJXcjpQG/?mibextid=wwXIfr'>Facebook</a></li>
          <li><a target="_blank" href='https://www.etsy.com/shop/FaiziIndustry'>Etsy Shop</a></li>
        </ul>
      </div>
      
    </div>
  );
}

export default Footer;
