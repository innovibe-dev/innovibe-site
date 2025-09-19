"use client";
import IconifyIcon from "@/components/wrappers/IconifyIcon";

const ProcessFlow = () => {
  const steps = [
    {
      id: 1,
      title: "1. Download",
      description: "Join the millions already benefitting from.",
      icon: "lucide:smartphone",
      bgColor: "bg-green-50",
      borderColor: "border-green-50",
    },
    {
      id: 2,
      title: "2. Set Profile",
      description: "Join the millions already benefitting from.",
      icon: "lucide:file-text",
      bgColor: "bg-red-50",
      borderColor: "border-red-50",
    },
    {
      id: 3,
      title: "3. Start",
      description: "Join the millions already benefitting from.",
      icon: "lucide:rocket",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/10",
    },
  ];

  const handleStepClick = (stepId: number) => {
    // Add your click handler logic here
  };

  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 mt-9">
      {steps.map((step) => (
        <div
          key={step.id}
          className="cursor-pointer hover:transform hover:-translate-y-1 transition-all duration-300"
          onClick={() => handleStepClick(step.id)}
        >
          <div className="flex items-center justify-start">
            <div
              className={`items-center justify-center flex ${step.bgColor} rounded-full h-20 w-20 border border-dashed ${step.borderColor}`}
            >
              <IconifyIcon icon={step.icon} className="h-8 w-8 text-black" />
            </div>
          </div>
          <h1 className="text-xl font-semibold pt-6">{step.title}</h1>
          <p className="text-base text-gray-600 font-normal mt-2">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProcessFlow;
