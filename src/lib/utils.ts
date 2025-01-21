import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function extractPlaceholders(template: string): string[] {
  const placeholderRegex = /\[([^\]]+)\]/g;
  const matches = template.match(placeholderRegex) || [];
  return matches.map(match => match.slice(1, -1));
}

export function replacePlaceholders(template: string, questions: Record<string, string>): string {
  return template.replace(/\[([^\]]+)\]/g, (match, placeholder) => {
    return questions[placeholder] || match;
  });
}