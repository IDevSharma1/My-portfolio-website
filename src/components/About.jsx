import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Database, Smartphone, Globe } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skills = [
    { name: 'Frontend', icon: Code, description: 'React, Vue, TypeScript' },
    { name: 'Backend', icon: Database, description: 'Node.js, Python, SQL' },
    { name: 'Mobile', icon: Smartphone, description: 'React Native, Flutter' },
    { name: 'DevOps', icon: Globe, description: 'Docker, AWS, CI/CD' }
  ]

  return (
    <section id="about" className="py-20 px-4 relative">
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
            About Me
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-primary mx-auto mb-8"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl font-medium mb-6 text-text-primary">
              Passionate Developer & Problem Solver
            </h3>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                I'm a Computer Science student with a deep passion for technology and innovation. 
                My journey in software development started with simple HTML pages and has evolved 
                into building complex, scalable applications.
              </p>
              <p>
                I believe in writing clean, maintainable code and creating user experiences that 
                not only look great but also solve real-world problems. When I'm not coding, 
                you'll find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community.
              </p>
              <p>
                Currently focused on full-stack development, I'm always eager to learn new 
                technologies and take on challenging projects that push my boundaries.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-dark-gray p-6 rounded-lg text-center hover:bg-primary/10 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <skill.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h4 className="font-medium text-text-primary mb-2">{skill.name}</h4>
                <p className="text-sm text-text-secondary font-mono">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
