import React from 'react';

const SectionTitle: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <span className="text-indigo-400 font-semibold tracking-wider text-sm uppercase">{subtitle}</span>
    <h2 className="text-4xl md:text-5xl font-bold mt-2 text-white">
      {title}
      <span className="block h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"></span>
    </h2>
  </div>
);

export default SectionTitle;