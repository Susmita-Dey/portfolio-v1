export default function SectionHeader({ title, href }) {
  return (
    <div className="flex justify-between items-center mb-8">
      <h2 className="text-white text-3xl font-bold">{title}</h2>
      <a className="text-green-400 font-bold" href={href}>
        View all
      </a>
    </div>
  );
}
