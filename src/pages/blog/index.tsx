import { useRouter } from "next/router";
import { posts } from "@/data/posts";
import Layout from "./layout";
import Image from "next/image";
import "@/app/globals.css";

export default function Pagina() {
  const router = useRouter();

  const goTo = (id: number) => {
    router.push(`/blog/post/${id}`);
  };

  return (
    <Layout>
      <div className="flex flex-col items-center mt-10 space-y-8 font-sans">
        <h1 className="text-3xl font-bold text-orange-700">Recetas destacadas</h1>

        <div className="grid grid-cols-4 gap-6 w-full max-w-6xl px-4">
          {posts.map((post) => (
            <div
              key={post.id}
              onClick={() => goTo(Number(post.id))}
              className="cursor-pointer bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{post.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}