import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DevOpsPage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">DevOps & Infrastructure</h1>
            <p className="text-lg md:text-xl text-gray-300">
              Streamlining development and deployment for maximum efficiency.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-8 md:p-12 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Services</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
            We provide end-to-end DevOps solutions to help you build, test, and release software faster and more reliably. Our services are designed to improve collaboration, automate processes, and enhance the overall quality of your software. We work with you to create a seamless and efficient development lifecycle.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Key Areas</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0" />Continuous Integration & Delivery (CI/CD)</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0" />Infrastructure as Code (IaC)</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0" />Cloud Architecture & Migration</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0" />Monitoring & Logging</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Tools & Technologies</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0" />Docker & Kubernetes</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0" />Terraform & Ansible</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0" />Jenkins & GitLab CI</li>
                  <li className="flex items-center"><div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0" />Prometheus & Grafana</li>
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
