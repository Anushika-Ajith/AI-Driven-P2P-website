"use client"

import Image from "next/image"

import { useState, useEffect } from "react"

export default function Page() {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  const features = [
    {
      iconUrl: "/images/screenshot-202025-12-30-20210626.png",
      title: "Digitalized Supplier Onboarding",
    },
    {
      iconUrl: "/images/screenshot-202025-12-30-20210655.png",
      title: "Fully Digitized Supplier Invoicing",
    },
    {
      iconUrl: "/images/screenshot-202025-12-30-20210715.png",
      title: "AI-Driven Demand Forecasting",
    },
    {
      iconUrl: "/images/screenshot-202025-12-30-20210626.png",
      title: "Smart Contract Management",
    },
    {
      iconUrl: "/images/screenshot-202025-12-30-20210655.png",
      title: "Automated Purchase Orders",
    },
    {
      iconUrl: "/images/screenshot-202025-12-30-20210715.png",
      title: "Real-Time Inventory Tracking",
    },
  ]

  const [itemsPerView, setItemsPerView] = useState(3)

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1) // mobile
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2) // tablet
      } else {
        setItemsPerView(3) // desktop
      }
    }
  
    updateItemsPerView()
    window.addEventListener("resize", updateItemsPerView)
  
    return () => window.removeEventListener("resize", updateItemsPerView)
  }, [])
  

  const MAX_INDEX = Math.max(features.length - itemsPerView, 0)


  const handlePrevious = () => {
    setCurrentFeature((prev) => (prev === 0 ? MAX_INDEX : prev - 1))
  }

  const handleNext = () => {
    setCurrentFeature((prev) => (prev === MAX_INDEX ? 0 : prev + 1))
  }

  const [isPaused, setIsPaused] = useState(false)
  useEffect(() => {
    if (isPaused) return
  
    const interval = setInterval(() => {
      setCurrentFeature((prev) =>
        prev >= MAX_INDEX ? 0 : prev + 1
      )
    }, 4000)
  
    return () => clearInterval(interval)
  }, [isPaused])
  
  


  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
  <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-8">
  {/* Header */}
      <header className="border-b border-gray-100 sticky top-0 bg-white z-50">
      <div className="pl-6 pr-8 sm:pl-8 sm:pr-12 lg:pl-[20px] lg:pr-20 xl:pl-[24px] xl:pr-28">
      <div className="flex items-center h-20 w-full">
      <button
            title="Go to home section"
          aria-label="Go to home section"
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-200"
            >
              <div className="relative h-10 w-10">
                <Image
                  src="/images/logo.png"
                  alt="ODIN Technologies Logo"
                  title="ODIN Technologies Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-semibold text-gray-900">ODIN Technologies</span>
            </button>
            {/* Mobile Hamburger Button */}
              <button
                className="lg:hidden text-gray-700 absolute right-6 sm:right-8"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
                title="Open navigation menu"
              >
                ☰
              </button>

            <nav className="hidden lg:flex items-center gap-10 ml-auto">
            <button
              title="View platform features"
              aria-label="View platform features"
                onClick={() => scrollToSection("features")}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Features
              </button>
              <button
                title="View about us"
                aria-label="View about us"
                onClick={() => scrollToSection("about")}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                About
              </button>
              <button
                title="View contact us"
                aria-label="View contact us"
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Contact
              </button>
            </nav>
            {/* Mobile Menu */}
          {menuOpen && (
            <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-t border-gray-100 shadow-md">
              <div className="flex flex-col p-4 gap-4">
                <button
                  onClick={() => {
                    scrollToSection("features")
                    setMenuOpen(false)
                  }}
                  className="text-left text-sm font-medium text-gray-700"
                >
                  Features
                </button>

                <button
                  onClick={() => {
                    scrollToSection("about")
                    setMenuOpen(false)
                  }}
                  className="text-left text-sm font-medium text-gray-700"
                >
                  About
                </button>

                <button
                  onClick={() => {
                    scrollToSection("contact")
                    setMenuOpen(false)
                  }}
                  className="text-left text-sm font-medium text-gray-700"
                >
                  Contact
                </button>
              </div>
            </div>
          )}

          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-2 lg:pt-2">
        <div className="
          px-8 sm:px-10 lg:px-16 xl:px-20

        ">

          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2.5fr] gap-8 lg:gap-16 items-center py-3 lg:py-4">


            {/* Left Content */}
            <div className="space-y-4 overflow-visible lg:-mt-6">

            <div
                  className="relative lg:-mt-6 text-xs font-medium text-amber-600"
                  title="AI-powered excellence tagline"
                  aria-label="AI-powered excellence tagline"
                >
                  <span>🚀</span> AI-powered excellence
            
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">

                <span className="block lg:inline">AI-Driven Procurement</span>{" "}
                <span className="text-yellow-500 block lg:inline">Process</span>
              </h1>



              <p className="text-sm sm:text-base text-gray-600 leading-5 max-w-xl">

                We are redesigning the procure-to-pay process to be agile and 100% transparent. From transcribed voice
                calls to RFQ-linked emails and meetings, we make every vendor-buyer interaction traceable. Leadership
                can step in at any point, and approvals happen instantly on any device. The result? Faster decisions,
                stronger supplier relationships, and complete control over your procurement lifecycle.
              </p>
            </div>

            <div className="relative lg:-mt-2 lg:ml-4">
            <div className="bg-white rounded-2xl shadow-xl 
                p-2 lg:p-3 
               min-h-[260px] sm:min-h-[300px] lg:min-h-[340px]
                flex items-center justify-center"
                title="AI-Driven Procurement Process Illustration"
                aria-label="AI-Driven Procurement Process Illustration"
              >

            <Image
                  src="/images/hero.png"
                  alt="AI-Driven Procurement Process Illustration"
                  width={932}
                  height={632}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Features Section */}

      <section id="features" className="pt-8 pb-12 lg:pt-10 lg:pb-14">

        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">

          <div className="text-center mb-6">
            <h2 className="text-base font-semibold text-amber-500">Features</h2>
          </div>

          <div className="relative max-w-6xl mx-auto">

            {/* Left Arrow */}
            <button
              onClick={handlePrevious}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-7 z-10
                bg-white rounded-full p-2 shadow-sm
                opacity-70 hover:opacity-100 hover:scale-110
                transition-all cursor-pointer"
              >
              <Image
                src="/images/arrow.png"
                alt="Previous"
                width={24}
                height={24}
                className="rotate-180"
              />

            </button>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-7 z-10
                bg-white rounded-full p-2 shadow-sm
                opacity-70 hover:opacity-100 hover:scale-110
                transition-all cursor-pointer"
            >
              <Image
                src="/images/arrow.png"
                alt="Next"
                width={24}
                height={24}
              />

            </button>


            {/* Carousel */}
           
            <div
              className="overflow-hidden py-4"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >

            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{
                transform: `translateX(-${currentFeature * (100 / itemsPerView)}%)`
,
              }}
            >

                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="w-full sm:w-1/2 lg:w-1/3 px-4 flex-shrink-0"
                  >
                    <div
                      className="bg-white rounded-xl p-6 min-h-[210px]
                                flex flex-col items-center justify-center text-center
                                shadow-md
                                transition-all duration-300 ease-out
                                hover:-translate-y-1 hover:shadow-xl hover:scale-[1.01]"
>

                      <Image
                        src={feature.iconUrl}
                        alt={feature.title}
                        width={96}
                        height={96}
                        className="mb-4 object-contain"
                      />
                      <h3 className="text-lg font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
          <div className="flex items-center justify-center gap-2 mb-8">
            {/* <div className="w-4 h-4 bg-amber-500 rounded-sm"></div> */}
            <span className="text-base font-semibold text-amber-500">🟨 About Us</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12 leading-tight text-center">
            Built for <span className="text-[#F5A623]">Transparency. Designed for Speed.</span>
          </h2>

          <div className="max-w-5xl mx-auto">
            {/* Our Story Section */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                {/* <span className="text-2xl">📖</span> */}
                <h3 className="text-2xl font-semibold text-gray-700">📖 Our Story</h3>
              </div>
              <p className="text-base text-gray-600 leading-relaxed">
                It all started with a simple observation: buyers and vendors talk more than they document. In hospitals
                and enterprises, critical procurement decisions were buried in emails, scattered meetings, and phone
                calls no one tracked. We knew there had to be a better way—one that made communication traceable,
                approvals seamless, and management fully in control.
              </p>
            </div>

            {/* The Need Section */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                {/* <Image
                  src="/images/screenshot-202025-12-30-20203235.png"
                  alt="Alert"
                  width={28}
                  height={28}
                  className="object-contain"
                /> */}
                <h3 className="text-2xl font-semibold text-gray-700">🚨 The Need</h3>
              </div>
              <p className="text-base text-gray-600 leading-relaxed">
                Procurement is no longer just a back-office function. It's a strategic lever. Yet most tools lack
                visibility, auditability, and real-time collaboration. Disconnected systems lead to delayed approvals,
                misaligned vendors, and broken trust.
              </p>
            </div>

            {/* Our Answer Section */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                {/* <span className="text-2xl">✅</span> */}
                <h3 className="text-2xl font-semibold text-gray-700">✅ Our Answer</h3>
              </div>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                We're building an agile procure-to-pay (P2P) platform with transparency at the core:
              </p>
              <ul className="space-y-3 text-base text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1.5 text-xs">●</span>
                  <span>Transcribe every buyer-vendor conversation with AI-powered voice-to-text</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1.5 text-xs">●</span>
                  <span>Track every email, call, and meeting against the RFQ number</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1.5 text-xs">●</span>
                  <span>Let management join or monitor the negotiation anytime</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1.5 text-xs">●</span>
                  <span>Approve anywhere, from any device</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1.5 text-xs">●</span>
                  <span>We don't just automate procurement—we transform how decisions are made.</span>
                </li>
              </ul>
            </div>

            {/* Our Proof Section */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                {/* <span className="text-2xl">📊</span> */}
                <h3 className="text-2xl font-semibold text-gray-700">📊 Our Proof</h3>
              </div>
              <p className="text-base text-gray-600 leading-relaxed mb-4">In early rollouts:</p>
              <ul className="space-y-3 text-base text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1.5 text-xs">●</span>
                  <span>Clients cut approval delays by 45%</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1.5 text-xs">●</span>
                  <span>Reduced procurement miscommunications by 60%</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1.5 text-xs">●</span>
                  <span>Gained 100% traceability from requisition to PO</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1.5 text-xs">●</span>
                  <span>
                    We're not just building a product. We're enabling trust and transparency through technology.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-base font-semibold text-amber-500 mb-6">Contact Us</h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Get in touch with our team
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
              Ready to transform your workflow? Contact us today and discover how StreamLine can help your team achieve
              extraordinary results.
            </p>

            {/* Contact Form */}
            <div
                className="bg-white rounded-lg shadow-sm p-8 max-w-2xl mx-auto hover:shadow-md transition-shadow duration-300"
                title="Contact form"
                aria-label="Contact form"
              >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-left">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      title="Email address"
                      aria-label="Email address"
                      placeholder="Enter your email address"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent hover:border-gray-400 transition-colors duration-200"
                    />
                  </div>

                  <div className="text-left">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      title="Phone number"
                      aria-label="Phone number"
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent hover:border-gray-400 transition-colors duration-200"
                    />
                  </div>

                  <div className="text-left">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      title="First name"
                      aria-label="First name"
                      placeholder="Enter your first name"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent hover:border-gray-400 transition-colors duration-200"
                    />
                  </div>

                  <div className="text-left">
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      title="Full name"
                      aria-label="Full name"
                      placeholder="Enter your full name"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent hover:border-gray-400 transition-colors duration-200"
                    />
                  </div>
                </div>

                <div className="text-left">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    title="Describe your project or message"
                    aria-label="Describe your project or message"
                    placeholder="Tell us about your project and how we can help..."
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent hover:border-gray-400 transition-colors duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#F5A623] hover:bg-[#E59512] hover:scale-[1.02] text-gray-900 font-semibold py-3 px-6 rounded-md transition-all duration-200 flex items-center justify-center gap-2"
                  title="Send your message to ODIN Technologies"
                  aria-label="Send your message to ODIN Technologies"
                >
                  Send Message
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
