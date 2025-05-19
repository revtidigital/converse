import HeroSection from "@/components/HeroSection";
import LeadForm from "@/components/LeadForm";
import BrandLogo from "@/components/BrandLogo";
import Feature from "@/components/Feature";
import { Bot, Clock, Sparkles } from "lucide-react";
const Index = () => {
  return <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-purple-800">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          {/* Left side - Content */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex flex-col items-center md:items-start">
            <BrandLogo />
            <div className="text-white max-w-lg">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                SCENARIO-BASED CHATGPT PROMPTS
              </h1>
              <p className="text-lg md:text-xl mb-6">
                For Your Business - Download Free PDF Now!
              </p>
              <p className="text-sm md:text-base mb-8">Communicate smarter, grow faster with our curated collection of industry-specific prompts designed to maximize your AI productivity.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <Feature icon={<Bot />} title="AI-Optimized" description="Prompts fine-tuned for the latest ChatGPT models" />
                <Feature icon={<Clock className="bg-transparent" />} title="Save Hours" description="Get better results in less time with proven frameworks" />
                <Feature icon={<Sparkles />} title="Boost Results" description="See immediate improvements in AI output quality" />
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="w-full md:w-2/5">
            <LeadForm />
          </div>
        </div>
        
        <div className="text-center text-white/80 text-xs mt-12">
          <p>© 2025 Converse AI. All rights reserved.</p>
          <p className="mt-1">Your data is securely processed according to our privacy policy.</p>
        </div>
      </div>
    </div>;
};
export default Index;