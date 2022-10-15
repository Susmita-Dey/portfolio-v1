export default function Article({ className = "rounded-lg" }) {
  return (
    <article className={`bg-white p-4 ${className}`}>
      <h3 className="text-2xl mb-2 font-medium">Post Title</h3>
      <span className="text-gray-600 mb-4 block">
        <date>15 Oct 22</date> | GitHub
      </span>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatem
        deleniti repudiandae, distinctio labore sapiente doloremque illo sint
        nulla amet laborum sit cum officia molestiae, obcaecati aperiam pariatur
        omnis soluta.
      </p>
    </article>
  );
}
