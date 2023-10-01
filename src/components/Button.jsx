import React from 'react'

const Button = ({text1, text2, svg1, svg2, onClick, variant}) => {
  const variantClasses = variant === 'icon' ? 'px-3 py-3' : 'px-6 py-0';

  return (
  <button onClick={onClick} className={`relative inline-flex items-center justify-center ${variantClasses} overflow-hidden font-medium transition duration-300 ease-out border-[1px] border-primary rounded-full group text-xs md:text-lg xl:text-2xl px-10 py-0 md:px-16 xl:px-24`}>
      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-secondary duration-300 -translate-x-full bg-primary rounded-full group-hover:translate-x-0 ease gap-2">
        {text2}{svg2}
      </span>
      <span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease gap-2">{text1}{svg1}</span>
      <span className="relative invisible">{text2}{svg2}</span>
    </button>
  )
}

export default Button