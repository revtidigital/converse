
import { useState } from "react";

const categories = [
  { id: 1, name: "Sales" },
  { id: 2, name: "Support" },
  { id: 3, name: "Finance" },
  { id: 4, name: "Marketing" },
  { id: 5, name: "E-commerce" },
  { id: 6, name: "Operations" },
];

type CategoryButtonsProps = {
  onCategorySelect?: (category: string) => void;
};

const CategoryButtons = ({ onCategorySelect }: CategoryButtonsProps) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    if (onCategorySelect) {
      onCategorySelect(category);
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {categories.map((category) => (
        <button
          key={category.id}
          className={`px-4 py-1 rounded-full text-sm border transition-colors ${
            activeCategory === category.name
              ? "bg-brand-light-purple text-white border-transparent"
              : "bg-white text-gray-700 border-gray-300 hover:border-brand-purple"
          }`}
          onClick={() => handleCategoryClick(category.name)}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryButtons;
