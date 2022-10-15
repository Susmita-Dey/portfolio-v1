export default function Work() {
  return (
    <div className="flex items-center border-b-2 py-6">
      <img
        src="https://user-images.githubusercontent.com/98955085/184510782-3f699206-4768-4b3a-aa6d-40c924e13578.png"
        alt="Work-image"
        width="240"
        height="240"
        className="w-1/3 mr-6 rounded-lg"
      />
      <div>
        <h3 className="text-2xl mb-2 font-medium">Work title</h3>
        <span className="text-gray-600 mb-4 block">
          <date className="bg-blue-800 text-white px-5 py-1.5 mr-4 rounded-xl">
            2022
          </date>
          Website
        </span>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
    </div>
  );
}
