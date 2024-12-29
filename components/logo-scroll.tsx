'use client'


import Image from 'next/image'

const logos = [
  { src: '/placeholder.svg?height=60&width=120'},
  { src: '/placeholder.svg?height=60&width=120' },
  { src: '/placeholder.svg?height=60&width=120'},
  { src: '/placeholder.svg?height=60&width=120' },
  { src: '/placeholder.svg?height=60&width=120'},
  // Second row
  { src: '/placeholder.svg?height=60&width=120' },
  { src: '/placeholder.svg?height=60&width=120' },
  { src: '/placeholder.svg?height=60&width=120' },
  { src: '/placeholder.svg?height=60&width=120' },
  { src: '/placeholder.svg?height=60&width=120' },
]

export function LogoScroll() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Number */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-[20rem] font-bold text-gray-100/10">04</span>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">Ils nous font confiance</h2>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          {/* First Row */}
          <div className="relative">
            <div className="flex gap-8 animate-scroll-left">
              {[...logos.slice(0, 5), ...logos.slice(0, 5)].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-white/5 backdrop-blur-sm rounded-2xl p-8 relative group hover:bg-white/10 transition-colors"
                >
                  <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${logo}`} />
                  <div className="w-[120px] h-[60px] relative grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                    <Image
                      src={logo.src}
                      alt="Partner logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row */}
          <div className="relative mt-8">
            <div className="flex gap-8 animate-scroll-right">
              {[...logos.slice(5), ...logos.slice(5)].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-white/5 backdrop-blur-sm rounded-2xl p-8 relative group hover:bg-white/10 transition-colors"
                >
                  <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${logo}`} />
                  <div className="w-[120px] h-[60px] relative grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                    <Image
                      src={logo.src}
                      alt="Partner logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

