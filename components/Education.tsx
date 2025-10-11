'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Award, BookOpen, Calendar, ExternalLink } from 'lucide-react'

const education = [
  {
    degree: "Bachelor's in Accounting, Taxation, and Economics",
    institution: "University",
    status: "Expected Graduation: May 2026",
    description: "Focus: Financial Reporting, Taxation, Economics, and IFRS-based analysis",
    icon: GraduationCap,
    color: "from-blue-500 to-blue-600",
    current: true
  }
]

const certifications = [
  {
    name: "ACCA",
    description: "Exempted from first four exams, planning to take Financial Reporting (FR) in September 2025",
    status: "In Progress",
    icon: Award,
    color: "from-green-500 to-green-600"
  },
  {
    name: "CFA Level 1",
    description: "Self-study preparation for Chartered Financial Analyst Level 1 examination",
    status: "In Progress",
    icon: BookOpen,
    color: "from-purple-500 to-purple-600"
  },
  {
    name: "Microsoft Excel Certification",
    description: "Preparing for official Microsoft Excel certification to validate advanced skills",
    status: "Preparing",
    icon: Award,
    color: "from-orange-500 to-orange-600"
  },
  {
    name: "TOEFL iBT",
    description: "English proficiency test preparation using Official Guide, 6th Edition",
    status: "Preparing",
    icon: BookOpen,
    color: "from-red-500 to-red-600"
  }
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Continuous learning and professional development are key to staying current in the rapidly evolving field of finance and technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <GraduationCap className="mr-3 text-primary-600" size={28} />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                  className="relative bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  {edu.current && (
                    <div className="absolute -top-3 -right-3 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Current
                    </div>
                  )}
                  
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${edu.color} flex items-center justify-center text-white flex-shrink-0`}>
                      <edu.icon size={28} />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h4>
                      <p className="text-primary-600 font-semibold mb-2">{edu.institution}</p>
                      <div className="flex items-center text-gray-600 mb-3">
                        <Calendar className="mr-2" size={16} />
                        {edu.status}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Award className="mr-3 text-primary-600" size={28} />
              Certifications & Learning
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-primary-200"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${cert.color} flex items-center justify-center text-white flex-shrink-0`}>
                      <cert.icon size={20} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-bold text-gray-900">{cert.name}</h4>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          cert.status === 'In Progress' 
                            ? 'bg-blue-100 text-blue-800' 
                            : cert.status === 'Preparing'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {cert.status}
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{cert.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Learning Philosophy</h3>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            I believe in continuous learning and staying current with industry trends. My approach combines formal education, 
            professional certifications, and hands-on experience to develop a comprehensive understanding of finance and technology. 
            This commitment to growth enables me to provide innovative solutions and stay ahead in the rapidly evolving field of 
            enterprise automation and financial analysis.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
