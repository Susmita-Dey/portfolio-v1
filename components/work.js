import Image from "next/image";

export default function Work({
  workTitle,
  imageUrl,
  year = "2022",
  tagName = "Website",
  about = "Hello World",
}) {
  return (
    <div className="flex items-center border-b-2 py-6">
      <div className="mr-6">
        <Image
          src={imageUrl}
          alt="Work-image"
          width="500"
          height="300"
          className="rounded-lg"
        />
      </div>
      <div>
        <h3 className="text-2xl mb-2 font-medium">{workTitle}</h3>
        <span className="text-gray-300 mb-4 block">
          <date className="bg-blue-500 hover:bg-blue-700 text-white px-5 py-1.5 mr-4 rounded-xl">
            {year}
          </date>
          {tagName}
        </span>
        <p className="text-white">{about}</p>
      </div>
    </div>
  );
}
