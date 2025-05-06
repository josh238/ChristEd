// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Browse Gospel Topics
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          <TopicCard 
            title="Salvation"
            description="Understand the message of salvation through Jesus Christ."
            href="#"
          />
          <TopicCard 
            title="Sound Doctrine"
            description="The gospel is the doctrine of CHRIST."
            href="#"
          />
          <TopicCard 
            title="Spiritual Warfare"
            description="What is the Warfare all about"
            href="#"
          />
        </div>

        <div className="bg-blue-600 rounded-lg p-8 shadow-lg transform transition hover:scale-105">
          <h2 className="text-2xl font-semibold text-white mb-4">
            The Forgiveness of Sins
          </h2>
          <p className="text-lg text-blue-100 mb-6">
            Discover the quality of the forgiveness of sins you have received in Christ
          </p>
          <Link 
            href="#" 
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors"
          >
            Discover More
          </Link>
        </div>
      </div>
    </div>
  );
}

interface TopicCardProps {
  title: string;
  description: string;
  href: string;
}

function TopicCard({ title, description, href }: TopicCardProps) {
  return (
    <Link 
      href={href}
      className="group bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </Link>
  );
}