import React from "react";

// Import of components custom
import { Title, Text } from "@/components/atomic-design/atoms";

interface CounterSectionProps {
  text?: string;
  value: string;
}

export const CounterSection: React.FC<CounterSectionProps> = ({
  text,
  value,
}) => {
  return (
    <div>
      <Title
        variant="gradient"
        className="text-7xl! md:text-8xl! xl:text-9xl! underline"
      >
        {value}
      </Title>
      {text && <Text>{text}</Text>}
    </div>
  );
};
