
import { ReactNode } from "react";

type FeatureProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

const Feature = ({
  icon,
  title,
  description
}: FeatureProps) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-4 h-full">
      <div className="text-brand-light-purple mb-4 text-3xl">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-slate-50">{description}</p>
    </div>
  );
};

export default Feature;
