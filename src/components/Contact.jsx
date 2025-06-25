import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Github, Linkedin, Instagram, Send } from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/IDevSharma1', color: 'hover:text-gray-400' },
    { name: 'LinkedIn', icon: Linkedin, url: 'www.linkedin.com/in/idevsharma', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/idevsharma_/', color: 'hover:text-blue-400' },
    { name: 'Email', icon: Mail, url: 'mailto:devsharma9979@gamil.com', color: 'hover:text-primary' }
  ]

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-text-primary"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-primary mx-auto mb-8"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.p 
            className="text-lg text-text-secondary max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I'm always interested in hearing about new opportunities and exciting projects. 
            Feel free to reach out if you'd like to collaborate or just say hello!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-2xl font-medium text-text-primary mb-6">
              Send a Message
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-dark-gray border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 text-text-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-dark-gray border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 text-text-primary"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text-secondary mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-dark-gray border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 text-text-primary"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-gray border border-gray-700 rounded-lg focus:outline-none focus:border-primary transition-colors duration-300 text-text-primary resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>
              <motion.button
                type="submit"
                className="w-full px-8 py-3 bg-primary text-dark font-medium rounded-lg hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-4 h-4" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-medium text-text-primary mb-6">
                Let's Connect
              </h3>
              <p className="text-text-secondary leading-relaxed mb-8">
                I'm currently available for freelance work and full-time opportunities. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium text-text-primary mb-4">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-dark-gray rounded-lg flex items-center justify-center text-text-secondary transition-all duration-300 ${social.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-dark-gray p-6 rounded-lg">
              <h4 className="text-lg font-medium text-text-primary mb-4">
                Quick Info
              </h4>
              <div className="space-y-3 text-text-secondary">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>devsharma9979@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-primary rounded-full" />
                  <span>Available for new opportunities</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-secondary rounded-full" />
                  <span>Response time: Within 24 hours</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
