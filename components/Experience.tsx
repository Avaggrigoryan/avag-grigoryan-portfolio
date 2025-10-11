'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Building2, MapPin, Calendar, ChevronRight } from 'lucide-react'

const experiences = [
  {
    company: 'Armsoft',
    position: 'FinTech Role Engineer / Economist',
    location: 'Armenia',
    period: 'June 2025 – Present',
    description: 'Responsible for implementing, modeling, and supporting Armsoft Enterprise ERP for large companies. Collaborate with IT and finance teams to automate workflows, test new modules, and ensure smooth product deployment.',
    achievements: [
      'Designed and implemented ERP workflows for multi-department clients',
      'Modeled finance and accounting processes for system automation',
      'Supported testing, documentation, and user training for enterprise systems'
    ],
    current: true
  },
  {
    company: 'BDO Armenia',
    position: 'Junior Payroll Specialist / Junior Accountant',
    location: 'Armenia',
    period: 'Oct 2024 – June 2025',
    description: 'Assisted in preparing financial statements, handling payroll, and performing accounting tasks under IFRS standards. Gained experience in compliance, data accuracy, and client advisory work.',
    achievements: [
      'Managed payroll calculations and statutory reports',
      'Supported month-end financial closings and reconciliations',
      'Improved accuracy through Excel-based automation templates'
    ],
    current: false
  }
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-primary-300 to-primary-100"></div>
                )}
                
                <div className="flex items-start space-x-6">
                  {/* Timeline dot */}
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      exp.current 
                        ? 'bg-primary-600 text-white' 
                        : 'bg-white border-4 border-primary-200 text-primary-600'
                    } shadow-lg`}>
                      <Building2 size={24} />
                    </div>
                    {exp.current && (
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.position}</h3>
                        <div className="flex items-center text-primary-600 font-semibold mb-2">
                          <Building2 size={20} className="mr-2" />
                          {exp.company}
                        </div>
                      </div>
                      {exp.current && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800 mb-4 sm:mb-0">
                          Current Position
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 mb-6 space-y-2 sm:space-y-0 sm:space-x-6">
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        {exp.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements:</h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.li
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, delay: 0.6 + index * 0.2 + achIndex * 0.1 }}
                            className="flex items-start"
                          >
                            <ChevronRight className="text-primary-600 mt-1 mr-3 flex-shrink-0" size={16} />
                            <span className="text-gray-700">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
