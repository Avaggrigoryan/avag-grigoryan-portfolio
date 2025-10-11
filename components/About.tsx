'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle, Globe, Users, Award } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const highlights = [
    'Hands-on experience in ERP system implementation and consulting',
    'Accounting and reporting background with IFRS familiarity',
    'Skilled in financial analysis, Excel modeling, and automation tools',
    'Strong communication and client interaction experience',
    'Multilingual: English, Armenian, Russian'
  ]

  const stats = [
    { icon: Users, label: 'Clients Served', value: '50+' },
    { icon: Award, label: 'Projects Completed', value: '25+' },
    { icon: Globe, label: 'Languages', value: '3' },
    { icon: CheckCircle, label: 'Years Experience', value: '2+' }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I am a finance and enterprise automation specialist with experience in accounting, ERP systems, and process optimization.
            </p>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Currently, I work at <span className="font-semibold text-primary-600">Armsoft</span> as a FinTech Role Engineer/Economist, where I help large enterprises implement and optimize their ERP systems.
            </p>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Previously, I worked at <span className="font-semibold text-primary-600">BDO Armenia</span> as a Junior Accountant and Payroll Specialist, handling financial reporting and IFRS-based accounting tasks.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I enjoy improving business workflows through digital tools, connecting financial logic with data systems, and helping organizations make smarter, data-driven decisions. My long-term goal is to become an international finance automation consultant capable of leading digital transformation in large organizations.
            </p>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircle className="text-primary-600 mt-1 mr-3 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats and Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-gradient-to-br from-primary-50 to-accent-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <stat.icon className="text-primary-600 mx-auto mb-3" size={32} />
                  <div className="text-3xl font-bold text-primary-600 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Professional Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl p-8 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary-200 to-accent-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="text-4xl font-bold text-primary-600">AG</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Avag Grigoryan</h3>
                <p className="text-primary-600 font-medium">Finance & Enterprise Automation Specialist</p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent-500 rounded-full"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
