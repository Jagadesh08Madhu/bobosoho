import { FaRegCircleCheck } from "react-icons/fa6";
import banner2 from "../assets/LandingBanner2.png";
import banner3 from "../assets/LandingBanner3.png";
import banner4 from "../assets/spam.png";

const featuresData = [
  {
    title: [
      "Secured, private, user friendly social environment for ",
      <span key="bobosoho" className="text-primary">
        email and chat sharing
      </span>,
    ],
    description:
      "Now join as an individual or with a group of friends family and create new image photos, videos, chat. Create your text message within seconds and share instantly to your group with unlimited users. Bobosoho integrated chat to connect in full security no sharing of your private info, respecting your privacy policy, bobosoho is your secured private environment to chat share photos videos and more, create unlimited groups with unlimited users, family or friends and instantly share with them",
    benefits: [
      "Smart Search: Quickly using the search bar find the emails or friends by their name or email, mobile number not required, but can be used and build your social group with unlimited users",
      "Real-Time Updates: Keep track of new messages with real-time notifications and an intuitive inbox layout.",
      "Seamless Navigation: Switch between contacts, settings, and other features using the sidebar, making email management a breeze.",
    ],
    image: banner2,
  },
  {
    title: [
      "Bobosoho is a collaboration platform for ",
      <span key="bobosoho" className="text-primary">
        Private & Business use
      </span>,
    ],
    description:
      "Enhanced project sharing and team work with our secured communication features, enabling smooth quick instant sharing.",
    benefits: [
      "Instant Messaging: Communicate instantly with your team without leaving the platform.",
      "File Sharing: Share documents securely and efficiently with just a few clicks.",
      "Task Management: Assign and track tasks to ensure everyone is on the same page.",
      "Creating groups: Create unlimited groups and email instantly bobosoho to bobosoho or send direct to any other email address.",
      "Secured: To most secured email platforms",
      "Spam Managing: Spam manager controlling who and what you want to receive in your inbox box.",
      "Easy to save: Easy to save messages in new create categories like save files and each to delete spam, unwanted messages with all select delete instantly ",
    ],
    image: banner3,
  },
  {
    title: [
      "The Most ",
      <span key="secured" className="text-primary">
        Secured Email{" "}
      </span>,
      "chat share",
    ],
    description:
      "Ensure the highest level of security for your communication with our advanced protection features, giving you peace of mind.",
    benefits: [
      "Data Encryption: Total secured environment respecting your privacy.",
      "Secure Access:Bobosoho respects your data, its yours, your space no sharing of data totally ",
      "Threat Detection: Detect and block unauthorized access attempts with real-time monitoring.",
    ],
    image: banner4,
  },
];

export default function Features() {
  return (
    <section className="mx-5 md:container md:mx-auto md:min-h-screen">
      {featuresData.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row gap-16 py-10 md:py-20 h-auto lg:h-[100vh] items-center justify-between"
        >
          {/* Alternate layout based on the index for large devices */}
          <div
            className={`lg:w-1/2  ${index % 2 === 0 ? "order-1" : "order-2"} `}
          >
            <img
              src={feature.image}
              alt={`${feature.title} Example`}
              className="w-full h-fit"
            />
          </div>

          <div
            className={`lg:w-1/2  text-left ${
              index % 2 === 0 ? "order-2" : "order-1"
            }`}
          >
            <h1 className="text-4xl leading-normal font-semibold capitalize">
              {feature.title}
            </h1>
            <p className="pt-3 pb-6 text-lg text-gray-600">
              {feature.description}
            </p>
            <ul className="space-y-4 text-lg text-gray-600">
              {feature.benefits.map((benefit, idx) => (
                <li key={idx} className="flex gap-3.5">
                  <FaRegCircleCheck className="mt-1.5 min-w-fit text-primary" />{" "}
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
