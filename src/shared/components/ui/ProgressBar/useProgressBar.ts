import { useCallback, useState } from "react";
import { UseStepProgressOptions, UseStepProgressReturn } from "./types";

export const useStepProgress = ({ totalSteps, initialStep = 0 }: UseStepProgressOptions): UseStepProgressReturn => {
  const [currentStep, setCurrentStep] = useState(initialStep);

  const handleNext = useCallback(() => {
    setCurrentStep((s) => Math.min(totalSteps - 1, s + 1));
  }, [totalSteps]);

  const handlePrevious = useCallback(() => {
    setCurrentStep((s) => Math.max(0, s - 1));
  }, []);

  const setStep = useCallback(
    (step: number) => {
      if (step >= 0 && step < totalSteps) {
        setCurrentStep(step);
      }
    },
    [totalSteps],
  );

  return {
    currentStep,
    handleNext,
    handlePrevious,
    isNextDisabled: currentStep === totalSteps - 1,
    isPreviousDisabled: currentStep === 0,
    setStep,
    totalSteps,
  };
};
