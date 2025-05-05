// app/topics/page.tsx


import React from 'react';

const topics = [
  {
    id: '1',
    title: 'Salvation',
    description: 'Understand the message of salvation through Jesus Christ.',
  },
  {
    id: '2',
    title: 'Faith',
    description: 'Learn how to grow your faith and trust in God.',
  },
  {
    id: '3',
    title: 'Holy Spirit',
    description: 'Discover the role of the Holy Spirit in the believer’s life.',
  },
];

export default function TopicsPage() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Browse Gospel Topics</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <div
            key={topic.id}
            className="bg-white p-5 rounded-2xl shadow hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold">{topic.title}</h2>
            <p className="mt-2 text-gray-600">{topic.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
