'use client';

import { motion } from 'framer-motion';
import { ShieldCheckIcon, CpuChipIcon, ChartBarIcon, CogIcon } from '@heroicons/react/24/outline';

const services = [
  {
    name: 'AI Implementation',
    description: 'Custom AI solutions tailored to your business needs, from machine learning models to natural language processing.',
    icon: CpuChipIcon,
  },
  {
    name: 'Cybersecurity Consulting',
    description: 'Comprehensive security assessments, threat modeling, and implementation of robust security measures.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Performance Optimization',
    description: 'Enhance your AI systems' efficiency while maintaining security standards and compliance requirements.',
    icon: ChartBarIcon,
  },
  {
    name: 'Integration Services',
    description: 'Seamlessly integrate AI solutions into your existing infrastructure with enterprise-grade security.',
    icon: CogIcon,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We provide comprehensive AI and cybersecurity solutions to help your business thrive in the digital age.
          </p>
        </motion.div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {services.map((service) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <service.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}