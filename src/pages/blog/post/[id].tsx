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
      <div className="max-w-2xl mx-auto px-4 py-10 font-sans">
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={400}
          className="rounded-lg shadow mb-6 w-full h-auto object-cover"
        />
        <h1 className="text-3xl font-bold text-orange-700 mb-4">{post.title}</h1>
        <p className="text-gray-800 leading-relaxed text-lg">{post.content}</p>
      </div>
    </Layout>
  );
}
