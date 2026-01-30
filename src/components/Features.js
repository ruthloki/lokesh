import React from 'react';

const Features = () => {
  const features = [
    {
      name: 'Fast Performance',
      description: 'Built with React for lightning-fast user experiences and optimal performance.',
      icon: '⚡',
    },
    {
      name: 'Responsive Design',
      description: 'Tailwind CSS ensures your site looks perfect on all devices and screen sizes.',
      icon: '📱',
    },
    {
      name: 'Modern UI',
      description: 'Clean, modern interface with beautiful components and smooth animations.',
      icon: '🎨',
    },
    {
      name: 'Easy to Customize',
      description: 'Highly customizable components that can be easily modified to fit your brand.',
      icon: '🔧',
    },
    {
      name: 'SEO Optimized',
      description: 'Built with SEO best practices to help your site rank higher in search results.',
      icon: '🔍',
    },
    {
      name: 'Developer Friendly',
      description: 'Clean code structure with modern development practices and tools.',
      icon: '👨‍💻',
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to build amazing websites
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our React and Tailwind CSS combination provides all the tools you need to create stunning, responsive websites.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white text-2xl">
                    {feature.icon}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;