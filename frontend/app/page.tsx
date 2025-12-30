"use client"

import Image from "next/image"
import { useState } from "react"

export default function Page() {
  const [currentFeature, setCurrentFeature] = useState(0)

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
  ]

  const handlePrevious = () => {
    setCurrentFeature((prev) => (prev === 0 ? features.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentFeature((prev) => (prev === features.length - 1 ? 0 : prev + 1))
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 sticky top-0 bg-white z-50">
        <div className="px-3 sm:px-4 lg:px-6 xl:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 h-16 items-center">
            <button onClick={() => scrollToSection("home")} className="flex items-center gap-2">
              <div className="relative h-10 w-10">
                <Image
                  src="/images/logo.png"
                  alt="ODIN Technologies Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-semibold text-gray-900">ODIN Technologies</span>
            </button>

            <nav className="hidden lg:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("features")}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Contact
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home">
        <div className="px-3 sm:px-4 lg:px-6 xl:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center py-12 lg:py-16">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-1.5 text-sm text-red-500">
                <Image src="/images/rocket-icon.png" alt="Rocket" width={20} height={20} className="object-contain" />
                <span className="font-medium">AI-powered excellence</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                AI-Driven Procurement <span className="text-yellow-500">Process</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
                We are redesigning the procure-to-pay process to be agile and 100% transparent. From transcribed voice
                calls to RFQ-linked emails and meetings, we make every vendor-buyer interaction traceable. Leadership
                can step in at any point, and approvals happen instantly on any device. The result? Faster decisions,
                stronger supplier relationships, and complete control over your procurement lifecycle.
              </p>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-5 lg:p-6">
                <Image
                  src="/images/hero.png"
                  alt="AI-Driven Procurement Process Illustration"
                  width={650}
                  height={450}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-4 h-4 bg-amber-500 rounded-sm"></div>
            <span className="text-base font-medium text-amber-600">About Us</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-20 leading-tight text-center">
            Built for <span className="text-[#F5A623]">Transparency.Designed for Speed.</span>
          </h2>

          <div className="max-w-5xl mx-auto">
            {/* Our Story Section */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">📖</span>
                <h3 className="text-2xl font-semibold text-gray-700">Our Story</h3>
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
                <Image
                  src="/images/screenshot-202025-12-30-20203235.png"
                  alt="Alert"
                  width={28}
                  height={28}
                  className="object-contain"
                />
                <h3 className="text-2xl font-semibold text-gray-700">The Need</h3>
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
                <span className="text-2xl">✅</span>
                <h3 className="text-2xl font-semibold text-gray-700">Our Answer</h3>
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
                <span className="text-2xl">📊</span>
                <h3 className="text-2xl font-semibold text-gray-700">Our Proof</h3>
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

      {/* Features Section */}
      <section id="features" className="bg-gray-50 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold text-amber-500">Features</h2>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 w-10 h-10 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
              aria-label="Previous feature"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15 18L9 12L15 6"
                  stroke="#1F2937"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 w-10 h-10 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
              aria-label="Next feature"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="#1F2937"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6">
                      <Image
                        src={feature.iconUrl || "/placeholder.svg"}
                        alt={feature.title}
                        width={112}
                        height={112}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 leading-snug">{feature.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-base font-semibold text-amber-500 mb-6">Contact Us</h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Get in touch with our team
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Ready to transform your workflow? Contact us today and discover how StreamLine can help your team achieve
              extraordinary results.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
