import { IMAGES } from "@/assets/images";
import { OnboardingItems } from "../interfaces";

export const carouselItems: OnboardingItems[] = [
  { id: 1, image: IMAGES.OnboardingImage1, header: "Scan", description: "Description" },
  { id: 2, image: IMAGES.OnboardingImage2, header: "Shop", description: "Description" },
  {
    id: 3,
    image: IMAGES.OnboardingImage3,
    header: "Pay",
    description: "Description",
  },
];
