import React from 'react'
import s from "./navbar.module.scss"
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className={s.navbar}>
      <div className="search">
        <Image
          src={"/logo/search_black.png"}
          alt='Search'
          width={40}
          height={40}
          className={s.searchIcon}
        />
      </div>
      <ul className={s.navLinks}>
        <li className={s.navItem}><a href="#/">Country Guide</a></li>
        <li className={s.navItem}><a href="#/">City Guide</a></li>
        <li className={s.navItem}><a href="#/">Features</a></li>
        <li className={s.navItem}><a href="#/">Food & Drinks</a></li>
        <li className={s.navItem}><a href="#/">Flights</a></li>
        <li className={s.navItem}><a href="#/">Accomodation</a></li>
      </ul>
    </nav>
  )
}
