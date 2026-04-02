
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <div className="flex justify-around p-10 ">
        <Link className="text-4xl text-black font-bold font-sans drop-shadow-lg shadow-gray-500 border-black rounded-lg border-1" href={'/json'}>JSON</Link>
        <Link className="text-4xl text-black font-bold font-sans drop-shadow-lg shadow-gray-500 border-black rounded-lg border-1" href={'/json(2)'}>JSON</Link>
      </div>
      
    </div>
  );
}
