
import { Button } from "@/components/ui/button";
import { Popover } from "@/components/ui/popover";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <div className="flex justify-around p-10 bg-green-600">
        <Link className="text-4xl text-black font-bold font-sans drop-shadow-lg shadow-gray-500 border-black rounded-lg bg-white border-1 w-30 text-center drop-shadow-lg shadow-gray-500" href={'/json'}>JSON</Link>
        <Link className="text-4xl text-black font-bold font-sans drop-shadow-lg shadow-gray-500 border-black bg-white rounded-lg border-1 w-30 text-center drop-shadow-lg shadow-gray-500" href={'/json(2)'}>JSON</Link>
        <Link className="text-4xl font-bold border-black border-1 rounded-lg w-50 text-center font-sans bg-white drop-shadow-lg shadow-gray-500" href={'/combobox'}>Combobox</Link>
        <Link className="text-4xl font-bold border-black border-1 rounded-lg w-50 text-center font-sans bg-white drop-shadow-lg shadow-gray-500" href={'/popover'}>Popover</Link>

      </div>

      <div>
        <Button className="text-5xl font-serif font-bold bg-blue-800 flex justify-around p-10 w-65  ">
          <Link href={'/popover'}>Button</Link>
        </Button>
      </div>

    </div>
  );
}
