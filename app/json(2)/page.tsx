import { discoverValidationDepths } from "next/dist/server/app-render/instant-validation/instant-validation";
import { json } from "stream/consumers";


export default async function Posts() {
const url = await fetch("https://jsonplaceholder.typicode.com/posts");
const posts = await url.json();
    return (
        <div className="bg-white min-h-screen">
            <div className="">
            <h1 className="text-4xl text-black  font-mono p-24 text-center">Postlar ro'yxati</h1>
            {posts.map((items: any) => (
            <div key={items.id}>
                <h1 className="font-bold text-2xl text-gray-900 font-serif underline">{items.title}</h1>
                <h1 className="text-black">{items.body}</h1>
            </div>
            ))}
        </div>
        </div>
    )
}