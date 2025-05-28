import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// For smooth scrolling to sections
export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
}

// Format numbers with commas
export function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// For the counter animations
export function animateValue(obj: HTMLElement, start: number, end: number, duration: number) {
  let startTimestamp: number | null = null;
  const step = (timestamp: number) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const currentVal = Math.floor(progress * (end - start) + start);
    obj.textContent = formatNumber(currentVal);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      obj.textContent = formatNumber(end);
    }
  };
  window.requestAnimationFrame(step);
}
