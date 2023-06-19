import Link from "next/link";

export default function SectionHeader({ title, url = "#" }) {
  return (
    <div className="flex justify-between items-center mb-8">
      <h2 className="text-white text-3xl font-bold">{title}</h2>
      <Link className="text-green-400 font-bold" href={url}>
        View all
      </Link>
    </div>
  );
}
