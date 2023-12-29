import React from 'react'

const Footer = () => {
    const current_year = new Date().getFullYear()
  return (
    <div>
        <p className=' text-center md:text-xl sm:text-lg text-sm dark:text-white'>
            Copyright © {current_year}. Designed by Enitan Odupitan
        </p>

    </div>
  )
}

export default Footer