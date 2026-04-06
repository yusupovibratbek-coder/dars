
import { Button } from "@/components/ui/button";
import { Popover } from "@/components/ui/popover";
import { discoverValidationDepths } from "next/dist/server/app-render/instant-validation/instant-validation";
import Link from "next/link";
import { json } from "stream/consumers";

export default async function Posts() {
    const url = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await url.json();

    return (
        <div className="bg-white min-h-screen">
           
            <div className="">
                <h1 className="text-4xl text-black  font-mono p-24 text-center">Postlar ro'yxati</h1>
                     <div className="justify-around ">
                        <Link className="items-center p-1 border-white border-1 rounded-4xl text-4xl bg-blue-700 text-white font-bold " href={'/combobox'}>Combobox</Link>
                     </div>
                {posts.map((items: any) => (
                    <div key={items.id}>
                        <h1 className="font-bold text-2xl text-gray-900 font-serif underline">{items.title}</h1>
                        <h1 className="text-black">{items.body}</h1>
                    </div>
                ))}
            </div>
            <div >
                <Popover></Popover>
                <Popover></Popover>
                <Popover></Popover>
                <Popover></Popover>
            </div>
        </div>
    )
}