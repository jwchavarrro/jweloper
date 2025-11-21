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
      <Title level={1} className="text-[15rem] font-bold">
        {value}
      </Title>
      {text && <Text>{text}</Text>}
    </div>
  );
};
