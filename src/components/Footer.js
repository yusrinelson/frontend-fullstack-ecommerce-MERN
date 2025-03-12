import React from 'react'
import { Link } from 'react-router-dom'
import FOOTER_LINKS from '../assets/footer_links'
import FOOTER_CONTACT_INFO from '../assets/footer_contact'
import SOCIALS from '../assets/socials'

export default function Footer() {
  return (
    <footer className='flexCenter pb-24 pt-20'>
      <div className='max_padd_container flex w-full flex-col gap-14'>
        <div className='flex flex-col items-center justify-center gap-[10%] md:flex-row'>
          <Link to='/' className='mb-18 bold-28'>Shoppee</Link>
          <div className='flex flex-wrap gap-8 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((col) => (
              <FooterColumn title={col.title} key={col.title}>
                <ul className='flex flex-col gap-4 regular-14 text-gray-20'>
                  {col.links.map((link) => (
                    <Link to='/' key={link}>{link}</Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <div className='flex flex-col gap-5'>
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link key={link.label} className='flex gap-4 md:flex-col lg:flex-row'>
                    <p>{link.label}:</p><p>{link.value}</p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
            <div>
              <FooterColumn>
                <ul>
                  {SOCIALS.links.map((link) => (
                    <Link to='/' key={link}>
                      <img src={link} alt="socials" height={22} width={22} />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
        <div className='border border-gray-50'>
          <p className='text-center regular-12 text-gray-30'>2024 shopppee | All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

const FooterColumn = ({title, children}) => {
  return (
    <div className='flex flex-col gap-5'>
      <h4 className='bold-20 whitespace-nowrap'>{title}</h4>
      {children}
    </div>
  )
}
