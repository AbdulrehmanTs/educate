import React from 'react'
import appStore from '../../assets/images/appStore.png';
import googlePlay from '../../assets/images/googlePlay.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div className='bg-gray py-[60px] '>
      <div className='container'>
        <div className='flex flex-wrap'>
          <div className='lg:w-[25%] md:w-[33%] w-100% pr-[15px] '>
            <h4 className='text-[18px] mb-[10px] font-semibold'>Educate online Teaching App</h4>
            <p className='text-gray-400 leading-[30px]'>Educate App is a free Online Tutoring App specially designed for tutors and coaching institutes.</p>
          </div>
          <div className='lg:w-[25%] md:w-[33%] w-100% lg:pl-[30px]'>
            <h4 className='text-[18px] mb-[10px] font-semibold'>IMPORTANT LINKS</h4>
            <ul className='text-gray-400'>
              <li>Home</li>
              <li>Login / Sign up</li>
              <li>Pricing</li>
              <li>About Us</li>
              <li>FAQ's</li>
              <li>Terms & Condition</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='lg:w-[25%] md:w-[33%] w-100% '>
            <h4 className='text-[18px] mb-[10px] font-semibold'>CONNECT WITH US</h4>
            <p className='text-gray-400 leading-[30px]'>+917831818181</p>
            <p className='text-gray-400 leading-[30px]'>info@wiseapp.live</p>
          </div>
          <div className='lg:w-[25%] md:w-[33%] w-100% '>
            <h4 className='text-[18px] mb-[10px] font-semibold'>DOWNLOAD OUR APP</h4>
            <div className='flex'>
              <a><img src={appStore} className='w-[130px] mr-[10px]' /></a>
              <a><img src={googlePlay} className='w-[130px]' /></a>
            </div>
            <h4 className='text-[18px] mt-[10px] mb-[10px] font-semibold'>WE ARE SOCIAL</h4>
            <div>
              <span className='text-[#df2d69] mr-[10px]'>
              <InstagramIcon />
              </span>
              <span className='text-[#69ace0] mr-[10px]'>
              <TwitterIcon />
              </span>
              <span className='text-[#007bb4] mr-[10px]'>
              <FacebookIcon />
              </span>
              <span className='text-[#345897]'>
              <LinkedInIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer