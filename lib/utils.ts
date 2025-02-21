import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Helper function from Shadcn to manage different class names based on condition without using the template strings.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
