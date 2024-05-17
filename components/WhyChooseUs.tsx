import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="bg-white min-h-section w-full py-20 px-28 text-center">
      <div className="max-w-[680px] mx-auto">
        <p className="text-small text-[rgba(0,0,0,0.7)]">best in business</p>
        <h2 className="font-cinzel text-5xl mt-2">Why choose us</h2>
        <h4 className="font-cinzel text-productName mt-4s">
          Cras malesuada dolor sit amet est egestas ullamcorper. Nullam in
          tortor mi. Maecenas vulputate libero
        </h4>
      </div>
      <div className="mt-8 mb-10 h-px w-12 bg-rani mx-auto"></div>
      <div className="grid grid-cols-3 gap-8">
        <Card
          image="/assets/discount.png"
          title="Big Discounts"
          description="Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo."
        />
        <Card
          image="/assets/wallet.png"
          title="Secure Payments"
          description="Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo."
        />
        <Card
          image="/assets/location.png"
          title="Order Tracking"
          description="Integer euismod blandit nunc sit amet sollicitudin. Fusce quis orci viverra, cursus justo."
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;

const Card = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="row-span-1 text-left">
      <Image src={image} alt="promp" height={76} width={101} />
      <h5 className="font-cinzel text-[1.467rem] my-2">{title}</h5>
      <p className="font-cinzel text-[rgba(0,0,0,0.7)]">{description}</p>
    </div>
  );
};
