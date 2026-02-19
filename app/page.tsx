import Image from 'next/image';
import Link from 'next/link';
import { Smile, Users, Lightbulb, ArrowRight, ExternalLink, Mail, Linkedin } from 'lucide-react';
import { Header } from '@/components/Header';
import { HeroIllustration } from '@/components/HeroIllustration';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="px-8 md:px-16 lg:px-24 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full bg-[#e6f2f1] px-4 py-1.5 text-xs font-bold text-[#135c58]">
              Associate Psychologist & Lecturer
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-[#1a1a1a]">
              Holding space for <br />
              <span className="italic text-[#135c58]">healing</span>,{' '}
              <span className="italic text-[#135c58]">growth</span>, <br />
              and <span className="italic text-[#135c58]">meaning</span>.
            </h1>
            <p className="text-lg text-gray-600 max-w-md leading-relaxed">
              Dedicated to understanding the human experience through compassionate care and rigorous inquiry.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="#contact" className="inline-flex items-center justify-center rounded-full bg-[#135c58] px-8 py-3.5 text-sm font-medium text-white hover:bg-[#0f4a47] transition-colors">
                Get in Touch
              </Link>
              <Link href="#research" className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-transparent px-8 py-3.5 text-sm font-medium text-[#1a1a1a] hover:bg-gray-50 transition-colors">
                View Publications
              </Link>
            </div>
          </div>
          <HeroIllustration />
        </section>

        {/* Mission/Quote Section */}
        <section id="about" className="px-8 md:px-16 lg:px-24 py-24 bg-white text-center flex flex-col items-center justify-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl max-w-4xl leading-tight text-[#1a1a1a]">
            I work at the intersection of clinical practice,{' '}
            <span className="relative inline-block">
              <span className="relative z-10">education</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-[#ffe4e6] -z-10 rounded-sm"></span>
            </span>
            , and{' '}
            <span className="relative inline-block">
              <span className="relative z-10">research</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-[#ffe4e6] -z-10 rounded-sm"></span>
            </span>{' '}
            to foster holistic well-being.
          </h2>
          <div className="w-px h-24 bg-gray-300 mt-16"></div>
        </section>

        {/* Services Section */}
        <section id="services" className="px-8 md:px-16 lg:px-24 py-24 bg-[#fcfcfc]">
          <div className="text-center mb-16 space-y-4">
            <h3 className="text-xs font-bold tracking-widest text-[#135c58] uppercase">What I Offer</h3>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a]">Services &amp; Expertise</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#e6f2f1] rounded-bl-full -z-10 opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="w-12 h-12 rounded-full bg-[#e6f2f1] flex items-center justify-center text-[#135c58] mb-6">
                <Smile className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-2xl mb-4 text-[#1a1a1a]">Individual Therapy</h4>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Tailored one-on-one sessions focusing on personal growth, anxiety management, and emotional resilience using evidence-based approaches.
              </p>
              <Link href="#contact" className="inline-flex items-center text-sm font-medium text-[#135c58] hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffe4e6] rounded-bl-full -z-10 opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="w-12 h-12 rounded-full bg-[#ffe4e6] flex items-center justify-center text-[#be185d] mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-2xl mb-4 text-[#1a1a1a]">Adolescent Support</h4>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Specialized counseling for young adults navigating identity formation, academic pressure, and social dynamics.
              </p>
              <Link href="#contact" className="inline-flex items-center text-sm font-medium text-[#be185d] hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#e6f2f1] rounded-bl-full -z-10 opacity-50 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="w-12 h-12 rounded-full bg-[#e6f2f1] flex items-center justify-center text-[#135c58] mb-6">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-2xl mb-4 text-[#1a1a1a]">Psycho-Education</h4>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Workshops and sessions designed to spread awareness about mental health, destigmatize therapy, and provide actionable tools.
              </p>
              <Link href="#contact" className="inline-flex items-center text-sm font-medium text-[#135c58] hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* Experience & Publications Section */}
        <section id="research" className="px-8 md:px-16 lg:px-24 py-24 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left Col: Academic Career */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h3 className="text-xs font-bold tracking-widest text-[#be185d] uppercase">Academic Career</h3>
                <h2 className="font-serif text-4xl text-[#1a1a1a]">Teaching Roles</h2>
                <p className="text-gray-600 leading-relaxed">
                  As a lecturer, I engage students in critical thinking and the practical application of psychological principles.
                </p>
              </div>

              <div className="relative pl-6 border-l border-gray-200 space-y-10 mt-8">
                {/* Timeline Item 1 */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#135c58] border-4 border-white"></div>
                  <h4 className="text-lg font-bold text-[#1a1a1a]">Lecturer in Psychology</h4>
                  <p className="text-sm text-gray-500 mt-1">University of Central Punjab</p>
                  <p className="text-sm text-gray-400 mt-1">2020 - Present</p>
                </div>
                {/* Timeline Item 2 */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-gray-300 border-4 border-white"></div>
                  <h4 className="text-lg font-bold text-[#1a1a1a]">Research Associate</h4>
                  <p className="text-sm text-gray-500 mt-1">Institute of Clinical Psychology</p>
                  <p className="text-sm text-gray-400 mt-1">2018 - 2020</p>
                </div>
              </div>
            </div>

            {/* Right Col: Publications */}
            <div className="lg:col-span-7 space-y-8">
              <h3 className="text-xs font-bold tracking-widest text-[#135c58] uppercase mb-8">Selected Publications</h3>
              
              <div className="space-y-6">
                {/* Pub 1 */}
                <div className="group block bg-white border border-gray-100 rounded-3xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#135c58] rounded-l-3xl"></div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-serif text-xl font-bold text-[#1a1a1a] mb-2 group-hover:text-[#135c58] transition-colors">
                        The Impact of Mindfulness-Based Interventions on Anxiety Disorders in Young Adults
                      </h4>
                      <p className="text-sm text-gray-500 mb-6">Published in Journal of Clinical Psychology, 2022</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Mindfulness</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Anxiety</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Clinical Study</span>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#135c58] flex-shrink-0 mt-1" />
                  </div>
                </div>

                {/* Pub 2 */}
                <div className="group block bg-white border border-gray-100 rounded-3xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#be185d] rounded-l-3xl"></div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-serif text-xl font-bold text-[#1a1a1a] mb-2 group-hover:text-[#be185d] transition-colors">
                        Cross-Cultural Perspectives on Resilience: A Comparative Analysis
                      </h4>
                      <p className="text-sm text-gray-500 mb-6">Published in International Journal of Psychology, 2021</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Resilience</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Culture</span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">Qualitative</span>
                      </div>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#be185d] flex-shrink-0 mt-1" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-[#135c58] text-white px-8 md:px-16 lg:px-24 py-24 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1a6e69] rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div className="space-y-8">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl">Let&apos;s Connect</h2>
              <p className="text-[#e6f2f1] text-lg max-w-md leading-relaxed">
                Whether you&apos;re looking for therapy, academic collaboration, or just want to say hello, I&apos;d love to hear from you.
              </p>
              
              <div className="space-y-6 pt-8">
                <a href="mailto:hina.usman@example.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-[#e6f2f1] group-hover:text-white transition-colors">hina.usman@example.com</span>
                </a>
                <a href="#" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <span className="text-[#e6f2f1] group-hover:text-white transition-colors">LinkedIn Profile</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-10 text-[#1a1a1a] shadow-2xl">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#135c58] focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#135c58] focus:border-transparent transition-all"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#135c58] focus:border-transparent transition-all resize-none"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full py-4 rounded-xl bg-[#135c58] text-white font-medium hover:bg-[#0f4a47] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0f4a47] text-[#e6f2f1] py-8 px-8 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p>© {new Date().getFullYear()} Hina Usman. All rights reserved.</p>
        <p>Designed with purpose.</p>
      </footer>
    </div>
  );
}
