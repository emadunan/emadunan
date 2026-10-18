"use client";

import { useState } from "react";
import { RadioGroup } from "@emadunan/react-ui";

const plans = [
  { value: "free", label: "Free" },
  { value: "pro", label: "Pro" },
  { value: "team", label: "Team" },
];

export default function RadioGroupBasic() {
  const [plan, setPlan] = useState("free");

  return (
    <RadioGroup name="plan" legend="Choose a plan" options={plans} value={plan} onChange={setPlan} />
  );
}
