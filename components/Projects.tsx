'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'

const projects = [
  {
    title: 'ERP Workflow Automation',
    description: 'Developed optimized ERP process flows for a multi-entity client at Armsoft. Mapped accounting cycles, reporting timelines, and approval structures to digital workflows.',
    technologies: ['ERP Systems', 'Process Mapping', 'Workflow Design', 'Client Consultation'],
    image: '🏢',
    category: 'Enterprise Automation',
    featured: true
  },
  {
    title: 'Financial Analysis & Forecasting Model',
    description: 'Built an Excel-based financial forecasting and variance analysis model for client reporting. Used dynamic formulas and pivot structures to automate reporting cycles.',
    technologies: ['Excel', 'Financial Modeling', 'VBA', 'Data Analysis'],
    image: '📊',
    category: 'Financial Analysis',
    featured: true
  },
  {
    title: 'QR-Based Lesson Tracking System',
    description: 'Developed a prototype for a QR-based lesson tracking system for a driving school, enabling automatic progress tracking for students. Designed database and process logic.',
    technologies: ['Database Design', 'QR Technology', 'Process Logic', 'Prototyping'],
    image: '📱',
    category: 'Process Innovation',
    featured: false
  }
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of the key projects I&apos;ve worked on, showcasing my expertise in finance, automation, and process optimization.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Project Image/Icon */}
              <div className={`h-48 bg-gradient-to-br ${
                project.featured 
                  ? 'from-primary-500 to-accent-500' 
                  : 'from-primary-100 to-accent-100'
              } flex items-center justify-center relative overflow-hidden`}>
                <div className="text-6xl mb-4">{project.image}</div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-50 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-50 transition-colors"
                    >
                      <Github size={20} />
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent-100 text-accent-800">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-primary-100 hover:text-primary-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200"
                    >
                      View Project
                      <ArrowRight className="ml-2" size={16} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition-colors duration-200"
                    >
                      <Github className="mr-2" size={16} />
                      Code
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-8">
            Interested in seeing more of my work or discussing a potential project?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            View All Projects
            <ArrowRight className="ml-2" size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
