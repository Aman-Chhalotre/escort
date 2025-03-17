import React from 'react'
import logo from "../../../public/images/logo.png"

function Footer() {
  return (
    <>
      <footer className="bg-white text-gray-600 py-10 mt-10">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Logo & Address */}
        <div>
          <img src={logo} alt=""  className="sm:h-24 h-20 rounded-lg"/>
          <p className="mt-3 text-sm">
          PALMA'S #1 ESCORT AGENCY OFFERS HIGH-CLASS FEMALE ESCORTS FOR ANY OCCASION,
            AVAILABLE 24/7 TO FULFILL YOUR DESIRES WITH UNRIVALED ELEGANCE.
          </p>
          <p className="mt-2 font-bold">ADDRESS:</p>
          <p className="text-sm">
            16 WARDOUR MEWS, Palma W1F 8AP, UNITED KINGDOM
            <br /> OPEN 24 HOURS A DAY
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-pink-400 border-b border-pink-400 pb-1">NAVIGATION:</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li>About Us</li>
            <li>Contacts</li>
            <li>Reviews</li>
            <li>Privacy Policy</li>
            <li>Cookies Policy</li>
            <li>Refund Policy</li>
            <li>PALMA Escort Jobs</li>
            <li>Sitemap</li>
          </ul>
        </div>

        {/* Popular */}
        <div>
          <h3 className="text-pink-400 border-b border-pink-400 pb-1">POPULAR:</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li>Age</li>
            <li>Escorts Gallery</li>
            <li className="text-red-500 font-bold">Local Escorts Near Me</li>
            <li>Escort Services</li>
            <li>Fetish Escort Service</li>
            <li>International Escorts</li>
            <li>Escort Guide to Types</li>
            <li>Verification of Escorts</li>
            <li>Booking Escorts</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Contacts */}
        <div>
          <h3 className="text-pink-400 border-b border-pink-400 pb-1">CONTACTS:</h3>
          <ul className="mt-2 space-y-1 text-sm">
            <li>📞 37254619660</li>
            <li>📞 37254619674</li>
            <li>✉ @ESCORT_PALMA</li>
            <li>📩 INFO@ESCORT-PALMA.COM</li>
            <li>📺 ESCORT-Palma</li>
            <li>🐦 ESCORTPALMA</li>
          </ul>
          <div className="mt-3">
            <span className="bg-green-500 text-xs px-2 py-1 rounded">DMCA PROTECTED</span>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="text-center text-xs mt-6 border-t border-gray-500 pt-3">
        © Escort PALMA 2025. All rights reserved. <br />
        Escort Club is strictly an adult-only website. All visitors must be 18 years of age or older. If you are under 18, please leave this site immediately.
      </div>
    </footer>
    </>
  )
}

export default Footer