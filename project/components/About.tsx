'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Proxima</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Founded in 2023, Proxima has been at the forefront of bridging the gap between cutting-edge AI technology and enterprise-grade security solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"
        >
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
            <div className="relative pl-9">
              <div className="text-base font-semibold leading-7 text-gray-900">
                <span className="absolute left-1 top-1 h-5 w-5 text-blue-600">01</span>
                Our Mission
              </div>
              <div className="mt-2 text-base leading-7 text-gray-600">
                To empower organizations with secure, efficient AI solutions that drive innovation while maintaining the highest standards of cybersecurity.
              </div>
            </div>
            <div className="relative pl-9">
              <div className="text-base font-semibold leading-7 text-gray-900">
                <span className="absolute left-1 top-1 h-5 w-5 text-blue-600">02</span>
                Our Vision
              </div>
              <div className="mt-2 text-base leading-7 text-gray-600">
                To be the global leader in integrated AI and cybersecurity solutions, setting industry standards for secure AI implementation.
              </div>
            </div>
            <div className="relative pl-9">
              <div className="text-base font-semibold leading-7 text-gray-900">
                <span className="absolute left-1 top-1 h-5 w-5 text-blue-600">03</span>
                Our Values
              </div>
              <div className="mt-2 text-base leading-7 text-gray-600">
                Innovation, security, integrity, and excellence guide everything we do, ensuring we deliver the best solutions for our clients.
              </div>
            </div>
            <div className="relative pl-9">
              <div className="text-base font-semibold leading-7 text-gray-900">
                <span className="absolute left-1 top-1 h-5 w-5 text-blue-600">04</span>
                Our Approach
              </div>
              <div className="mt-2 text-base leading-7 text-gray-600">
                We combine deep technical expertise with a thorough understanding of business needs to deliver tailored, secure AI solutions.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}