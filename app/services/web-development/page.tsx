import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function WebDevelopmentPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Web Development</h1>
            <p className="text-lg md:text-xl text-gray-300">
              Crafting beautiful, high-performance websites and applications.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-8 md:p-12 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Approach</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              We believe in a collaborative process, working closely with you to understand your vision and deliver a product that exceeds expectations. Our development process is agile, transparent, and focused on quality. We leverage the latest technologies to build solutions that are not only visually stunning but also robust, scalable, and secure.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Frontend</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0" />React & Next.js</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0" />Vue & Nuxt.js</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0" />Svelte & SvelteKit</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0" />Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Backend</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0" />Node.js & Express</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0" />Python & Django</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0" />PostgreSQL & MongoDB</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0" />GraphQL & REST APIs</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/services" passHref>
              <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30 transition-all duration-300">
                Back to Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
