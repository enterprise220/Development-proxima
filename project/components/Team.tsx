'use client';

import { motion } from 'framer-motion';

const team = [
  {
    name: 'Dr. Sarah Chen',
    role: 'CEO & AI Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Ph.D. in Machine Learning with 15+ years of experience in AI implementation and strategy.',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Chief Security Officer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Former cybersecurity advisor for Fortune 500 companies, specializing in AI security frameworks.',
  },
  {
    name: 'Dr. James Wilson',
    role: 'Research Director',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Leading our research initiatives in advanced AI algorithms and security protocols.',
  },
  {
    name: 'Emily Zhang',
    role: 'Integration Specialist',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Expert in seamlessly integrating AI solutions while maintaining security compliance.',
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Meet our team of experts dedicated to advancing AI technology while ensuring the highest standards of security.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-4 sm:grid-cols-2">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200">
                <img
                  className="mx-auto h-24 w-24 rounded-full"
                  src={member.image}
                  alt={member.name}
                />
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900 text-center">
                  {member.name}
                </h3>
                <p className="text-sm leading-6 text-blue-600 text-center">{member.role}</p>
                <p className="mt-4 text-sm leading-6 text-gray-600 text-center">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}