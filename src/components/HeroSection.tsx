
import { Button } from "@/components/ui/button";
import CategoryButtons from "./CategoryButtons";

type HeroSectionProps = {
  title: string;
  subtitle: string;
};

const HeroSection = ({ title, subtitle }: HeroSectionProps) => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
        {title}
      </h1>
      <p className="text-gray-600 md:text-lg mb-6">
        {subtitle}
      </p>
      <CategoryButtons />
    </div>
  );
};

export default HeroSection;
