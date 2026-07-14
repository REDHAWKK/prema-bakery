import React from "react";
const ContactForm = ({ formData, setFormData, handleSubmit }) => {
 return (
    <>
              {/* Contact */}
      <section id="contact" className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <span className="text-[#C8A87C] font-semibold tracking-wider uppercase text-sm">Get in Touch</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Visit Us Today</h2>
            <p className="text-lg text-[#4A3728]/80 mb-8 leading-relaxed">
              Whether you're picking up your morning croissant or ordering a custom cake, we'd love to see you. Stop by our shop or reach out.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#C8A87C]/10 rounded-full flex items-center justify-center text-[#C8A87C] shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Address</h4>
                  <p className="text-[#4A3728]/70">124 Artisan Lane, Maple District<br/>Portland, OR 97205</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#C8A87C]/10 rounded-full flex items-center justify-center text-[#C8A87C] shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Phone</h4>
                  <p className="text-[#4A3728]/70">(503) 555-0142</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#C8A87C]/10 rounded-full flex items-center justify-center text-[#C8A87C] shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Hours</h4>
                  <p className="text-[#4A3728]/70">Tue - Sun: 7:00 AM - 7:00 PM<br/>Mon: Closed</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Message sent! We will get back to you shortly.'); }}>
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input type="text" required className="w-full px-4 py-3 rounded-xl bg-[#FFF8F0] border border-[#C8A87C]/20 focus:border-[#C8A87C] focus:outline-none transition-colors" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input type="email" required className="w-full px-4 py-3 rounded-xl bg-[#FFF8F0] border border-[#C8A87C]/20 focus:border-[#C8A87C] focus:outline-none transition-colors" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea required rows={4} className="w-full px-4 py-3 rounded-xl bg-[#FFF8F0] border border-[#C8A87C]/20 focus:border-[#C8A87C] focus:outline-none transition-colors" placeholder="How can we help?"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#4A3728] text-white py-4 rounded-xl font-semibold hover:bg-[#5D4037] transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
 )
}
export default ContactForm;