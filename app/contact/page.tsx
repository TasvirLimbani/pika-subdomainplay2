"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
    alert("Thank you for your message! We'll get back to you soon.")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">Contact Us</h1>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-slate-800/50 backdrop-blur border border-purple-500/30 rounded-xl p-6 text-center">
            <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Email</h3>
            <p className="text-slate-300" style={{ fontSize: '10px' }}>radhesoftwaresolutions2025@gmail.com</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur border border-purple-500/30 rounded-xl p-6 text-center">
            <Phone className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
            <p className="text-slate-300">+91 96649 17815</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur border border-purple-500/30 rounded-xl p-6 text-center">
            <MapPin className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Location</h3>
            <p className="text-slate-300">Global, 24/7 Support</p>
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur border border-purple-500/30 rounded-xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-slate-900/50 border border-purple-500/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-slate-900/50 border border-purple-500/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-slate-900/50 border border-purple-500/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 bg-slate-900/50 border border-purple-500/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}
