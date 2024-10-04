export default function padWithZero(n: number): string {
  return n.toString().padStart(2, '0');
} 
