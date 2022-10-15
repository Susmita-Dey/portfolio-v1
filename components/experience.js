import { Chrono } from "react-chrono";

export default function Experience() {
  const items = [
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptatem deleniti repudiandae, distinctio labore sapiente doloremque illo sint nulla amet laborum sit cum officia molestiae, obcaecati aperiam pariatur omnis soluta.",
      media: {
        type: "IMAGE",
        source: {
          url: "https://user-images.githubusercontent.com/98955085/184510782-3f699206-4768-4b3a-aa6d-40c924e13578.png",
        },
      },
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      url: "http://www.history.com",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      media: {
        type: "IMAGE",
        source: {
          url: "https://user-images.githubusercontent.com/98955085/184510782-3f699206-4768-4b3a-aa6d-40c924e13578.png",
        },
      },
    },
  ];
  return (
    <section className="px-6">
      <div className="max-w-4xl mx-auto py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold">Experience</h2>
        </div>
        <div>
          <Chrono items={items} slideShow mode="VERTICAL_ALTERNATING" />
        </div>
      </div>
    </section>
  );
}
