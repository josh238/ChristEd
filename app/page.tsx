// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 pt-4 sm:pt-8 px-4 sm:px-20 font-sans">
     

      {/* Header */}
      <header className="flex justify-between items-center pb-8">
        <div className="flex items-center gap-4">
          {/* Replace '/logo.svg' with the path to your custom ChristEd logo */}
          <Image
            src="/christedu.png"
            alt="ChristEd Logo"
            width={150}
            height={150}
          />
        </div>
        <nav className="space-x-4">
          <Link href="/auth/login" className="text-gray-700 hover:underline">
            Login
          </Link>
          <Link href="/auth/register" className="text-gray-700 hover:underline">
            Register
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="mb-16 text-center sm:text-left">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Learn the Gospel of Christ
          </h2>
          <p className="text-lg text-gray-700">
            Explore gospel topics, engaging videos, and interactive lessons curated to enrich your faith.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">

          <Link className="bg-blue-600 text-white py-2 px-4 rounded  hover:bg-blue-700 transition" href="/topics">
   
    Browse Topics

</Link>

            <Link
              href="/my-video"
              className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition"
            >
              My Videos
            </Link>
            <Link
              href="/search"
              className="px-6 py-3 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
            >
              Search Videos
            </Link>
          </div>
        </section>

        {/* Features/Highlights Section */}
        <section className="grid sm:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Interactive Lessons</h3>
            <p className="text-gray-600">
              Engage with interactive content and deepen your understanding of gospel teachings.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Expert Insights</h3>
            <p className="text-gray-600">
              Learn from leaders and experts, sharing valuable insights and wisdom.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Community & Support</h3>
            <p className="text-gray-600">
              Connect with fellow learners and get the support you need on your spiritual journey.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-4 border-t mt-16 text-center text-gray-600">
        &copy; {new Date().getFullYear()} ChristEd. All rights reserved.
      </footer>
    </div>
  );
}
