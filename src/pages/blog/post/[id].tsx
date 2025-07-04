import { useRouter } from "next/router";
import "@/app/globals.css";
import Layout from "../layout";
import { posts } from "@/data/posts";
import Image from "next/image";

export default function PostPage() {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return <p className="text-center mt-10 text-gray-600">Cargando...</p>;

  const post = posts.find((p) => p.id === String(id));
  if (!post) return <p className="text-center mt-10 text-red-500">Post no encontrado.</p>;

  return (
    <Layout>
      <div className="max-w-2xl mx-auto px-4 py-10 font-sans space-y-6">
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={400}
          className="rounded-lg shadow mb-4 w-full h-auto object-cover"
        />

        <span className="bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full">
          {post.category}
        </span>

        <h1 className="text-3xl font-bold text-orange-700">{post.title}</h1>

        <p className="text-gray-800 leading-relaxed text-lg">{post.content}</p>

        <div className="flex items-center gap-1 mt-2">
          <span className="text-sm text-gray-600">Valoración:</span>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, index) => (
              <span
                key={index}
                className={`text-xl ${
                  index < post.rating ? "text-yellow-500" : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Ingredientes</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
              {post.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Preparación</h2>
            <ol className="list-decimal list-inside text-gray-600 space-y-1 text-sm">
              {post.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </Layout>
  );
}
