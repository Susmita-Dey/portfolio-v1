import Link from "next/link";

export default function Event({
  imgUrl,
  eventName,
  eventLink,
  about,
  eventStatus = "Upcoming",
}) {
  return (
    <div className="flex items-center border-b-2 py-6">
      <img
        src={imgUrl}
        alt="Event-image"
        width="240"
        height="240"
        className="w-1/3 mr-6 rounded-lg"
      />
      <div>
        <h3 className="text-2xl mb-2 font-medium">{eventName}</h3>
        <span className="text-gray-400 mb-4 block">
          <span className="bg-blue-500 hover:bg-blue-700 text-white px-5 py-1.5 mr-4 rounded-xl">
            2022
          </span>
          <Link href={eventLink}>Event Page</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
          <span className="text-gray-100 hover:text-black rounded-lg py-2 px-4 hover:bg-green-300">
            {eventStatus}
          </span>
        </span>
        <p>{about}</p>
      </div>
    </div>
  );
}
