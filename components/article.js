import Link from "next/link";

export default function Article({ post, className = "rounded-lg" }) {
  return (
    <article className={`bg-[#01071f] text-white p-4 mb-2 ${className}`}>
      <Link href={`blog/${post?.slug}`}>
        <h3 className="text-2xl mb-2 font-medium hover:text-yellow-300 cursor-pointer">
          {post?.title}
        </h3>
      </Link>
      <span className="text-gray-300 mb-4 block">
        <span>{post?.date}</span> | {post?.tags?.map((tag) => tag).join(", ")}
      </span>
      <p>{post?.description}</p>
    </article>
  );
}
