import React from 'react'
import banner2 from "../assets/privatebanner1.png";
import banner3 from "../assets/privatebanner2.png";
import banner4 from "../assets/privatebanner3.png";


const featuresData = [
    {
      title: "Business Email Security",
      description: "Ensure your communication is always protected with industry-leading encryption and anti-spam measures.",
      benefits: [
        " Privacy: Safeguard sensitive data with robust privacy controls and secure login options.",
        "Spam Protection: Block unwanted messages with advanced anti-spam filters.",
        "Data Security: Keep your emails confidential with encrypted transmission and storage."
      ],
      image: banner2,
    },
    {
      title: "Secure File Sharing",
      description: "Share documents, images, and files with encrypted file transfer protocols.",
      benefits: [
        "Encryption: Protects your files with robust encryption during transfer.",
        "Convenience: Easily share documents, images, and files with just a few clicks.",
        "Privacy: Ensures that only intended recipients can access the shared files."
      ],
      image: banner3,
    },
    {
      title: "Customizable User Interface",
      description: "Personalize the dashboard according to user preferences, offering a tailored experience.",
      benefits: [
        "Personalization: Tailor the dashboard to match individual user preferences.",
        "Flexibility: Choose layout options and themes for a unique look and feel.",
        "Enhanced Experience: Create a user-friendly environment that enhances productivity."
      ],
      image: banner4,
    },
  ];

const BussinessFeature = () => {
  return (
    <section className='mx-5 md:container md:mx-auto'>
    {featuresData.map((feature, index) => (
      <div key={index} className="flex flex-col lg:flex-row items-center gap-10 lg:justify-between p-10 lg:p-20 h-auto lg:h-[100vh] lg:mt-0">
        {/* Alternate layout based on the index for large devices */}
        <div className={`lg:w-1/2 flex justify-center  bg-center bg-no-repeat bg-cover bg-origin-border  ${index % 2 === 0 ? "order-1" : "order-2"} mt-10 lg:mt-0`}>
          <img src={feature.image} alt={`${feature.title} Example`} className="w-full h-auto max-w-lg" />
        </div>

        <div className={`lg:w-1/2 text-center lg:text-left ${index % 2 === 0 ? "order-2" : "order-1"}`}>
          <h1 className="text-2xl lg:text-4xl leading-normal font-semibold">
            {feature.title}{" "}
            <span className="text-blue-500">Platform</span>
          </h1>
          <p className=" my-6 text-gray-700">
            {feature.description}
          </p>
          <ul className="list-none space-y-4">
            {feature.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-center">
                <span className="text-yellow-500 mr-2">✔️</span> {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </section>
  )
}

export default BussinessFeature