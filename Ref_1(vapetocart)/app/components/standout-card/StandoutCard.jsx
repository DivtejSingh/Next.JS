import "./standout-card.css";
import React from "react";
import imageArrowYellow from "@/public/assets/images/arrow-yellow.avif";
import Image from "next/image";

const StandoutCard = () => {
  return (
    <div className="standout-card p-3 b-shadow rounded-2 bgColor-light position-relative z-1 overflow-hidden">
      <Image
        src={imageArrowYellow}
        alt="Arrow right"
        priority={true}
        quality="80"
        layout="intrinsic"
        className="position-absolute top-50 end-0 translate-middle-y object-fit-cover z-n1"
      />
      <h4 className="fw-bold fs-6 mb-2">Quick and Effective Delivery</h4>
      <p>
        We have a strong working relationship with courier services DPD and
        Royal Mail to ensure our customers receive their products efficiently.
      </p>
    </div>
  );
};

export default StandoutCard;
