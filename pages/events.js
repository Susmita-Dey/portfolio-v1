import Head from "next/head";
import Event from "../components/event";
import ParticlesComponent from "../components/particles";

export default function Events() {
  return (
    <div>
      <Head>
        <title>Susmita Dey | Events</title>
        <meta
          name="description"
          content="Events hosted by Susmita Dey - The Creative Web Developer"
        />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="px-6">
        <div>
          <ParticlesComponent />
        </div>
        <div className="max-w-4xl mx-auto gap-14 items-center flex-col-reverse md:flex-row">
          <h2 className="text-3xl font-bold mb-6 p-4 text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-cyan-300 to-pink-300">
            Events
          </h2>
          <div className="text-white">
            <Event
              imgUrl="/Developer stories podcast series.png"
              eventName="Developer Stories Podcast"
              eventLink="https://youtube.com/channel/UCsuzc8lqAbgUYo4yzpjtfSw"
              about="It is a series of developer stories where developers and tech enthusiast will join me to share their journey of getting into tech. I'm planning to call folks from all over the world to make this podcast rock."
            />
            <Event
              imgUrl="/Hacktoberfest.png"
              eventName="Demystifying Hacktoberfest"
              eventLink="https://lu.ma/plxynaxv"
              eventStatus="Ended"
              about="It is 3 hours long virtual event hosted by us to teach everyone about open source and hacktoberfest from the beginning to the end by talented folks. We will cover all the things related to open source so that anyone who never heard about the open source can learn and start helping the community."
            />
            <Event
              imgUrl="/GitHub Profile review livestream.png"
              eventName="GitHub Profile review livestream"
              eventLink="https://youtube.com/playlist?list=PLEvX_vrDiWMMmdi9OI060yBc8NqMsrrnc"
              eventStatus="Ongoing"
              about="I often do this kind of livestream on my YouTube channel and help folks in the community to improve their GitHub profiles. More such livestreams are way to come."
            />
            <Event
              imgUrl="/My first Twitter Space.png"
              eventName="Opportunities that come along with communities in tech"
              eventLink="https://youtu.be/oqlujS7HkII"
              eventStatus="Ended"
              about="This was my first Twitter space - Opportunities that come along with communities.
              Join us to get your questions answered and learn more about opportunities in tech. "
            />
          </div>
        </div>
      </section>
    </div>
  );
}
