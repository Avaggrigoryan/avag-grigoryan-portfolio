'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Database, 
  Calculator, 
  BarChart3, 
  Users, 
  Globe, 
  Code, 
  FileText, 
  TrendingUp,
  Settings,
  Brain,
  MessageCircle
} from 'lucide-react'

const skillCategories = [
  {
    title: 'Technical & Analytical',
    icon: Code,
    color: 'from-blue-500 to-blue-600',
    skills: [
      { name: 'ERP Systems (Armsoft Enterprise)', level: 90 },
      { name: 'Microsoft Excel (Advanced)', level: 95 },
      { name: 'SQL (Learning)', level: 60 },
      { name: 'C# (Learning)', level: 40 },
      { name: 'Financial Modeling & Forecasting', level: 85 },
      { name: 'Business Process Automation', level: 80 },
      { name: 'Data Analysis (Excel, Power BI)', level: 75 }
    ]
  },
  {
    title: 'Accounting & Finance',
    icon: Calculator,
    color: 'from-green-500 to-green-600',
    skills: [
      { name: 'IFRS Financial Reporting', level: 85 },
      { name: 'Payroll Accounting', level: 90 },
      { name: 'Financial Statement Preparation', level: 80 },
      { name: 'Budgeting & Variance Analysis', level: 75 },
      { name: 'Taxation Basics', level: 70 }
    ]
  },
  {
    title: 'Soft Skills',
    icon: Users,
    color: 'from-purple-500 to-purple-600',
    skills: [
      { name: 'Client Communication', level: 90 },
      { name: 'Analytical Thinking', level: 85 },
      { name: 'Presentation & Training', level: 80 },
      { name: 'Team Collaboration', level: 85 }
    ]
  },
  {
    title: 'Languages',
    icon: Globe,
    color: 'from-orange-500 to-orange-600',
    skills: [
      { name: 'English — Proficient', level: 85 },
      { name: 'Armenian — Native', level: 100 },
      { name: 'Russian — Proficient', level: 80 }
    ]
  }
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills</h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive set of technical, analytical, and soft skills that enable me to deliver exceptional results in finance and enterprise automation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center mb-8">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center text-white mr-4`}>
                  <category.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.4 + categoryIndex * 0.2 + skillIndex * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-primary-600 font-semibold">{skill.level}%</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.6 + categoryIndex * 0.2 + skillIndex * 0.1 }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Key Competencies</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Database, name: 'ERP Implementation', description: 'Enterprise systems' },
              { icon: BarChart3, name: 'Financial Analysis', description: 'Data-driven insights' },
              { icon: Settings, name: 'Process Automation', description: 'Workflow optimization' },
              { icon: Brain, name: 'Problem Solving', description: 'Analytical thinking' },
              { icon: FileText, name: 'IFRS Reporting', description: 'Compliance & standards' },
              { icon: TrendingUp, name: 'Business Growth', description: 'Strategic planning' },
              { icon: MessageCircle, name: 'Client Relations', description: 'Communication' },
              { icon: Users, name: 'Team Leadership', description: 'Collaboration' }
            ].map((competency, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                  <competency.icon className="text-primary-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{competency.name}</h4>
                <p className="text-sm text-gray-600">{competency.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
