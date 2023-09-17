export interface Package {
  id: number;
  name: string;
  description: string;
  price: number;
}
export default async function getAllPackages(): Promise<Package[]> {
  return [
    { id: 1, name: "basic", description: "smol one", price: 11.99 },
    { id: 2, name: "medum", description: "mid one", price: 29.99 },
    { id: 3, name: "pro", description: "big one", price: 49.99 },
  ];
}
