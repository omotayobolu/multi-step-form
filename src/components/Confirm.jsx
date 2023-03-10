import React from "react";
import ThankYou from "../assets/images/icon-thank-you.svg";

const Confirm = () => {
  return (
    <section className="lg:h-[90vh] h-screen">
      <div className="bg-white drop-shadow-2xl md:drop-shadow-none lg:m-0 lg:p-0 mx-[4%] px-[5%] py-[15%] rounded-lg z-10 lg:h-full text-center flex flex-col items-center justify-center gap-4">
        <img src={ThankYou} alt="" />
        <h1>Thank You!</h1>
        <p className="lg:mx-[5%]">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com
        </p>
      </div>
    </section>
  );
};

export default Confirm;
