import React from "react";
import ThankYou from "../assets/images/icon-thank-you.svg";

const Confirm = () => {
  return (
    <section className="grid place-items-center grid-cols-1 gap-2">
      <div>
        <img src={ThankYou} alt="" />
        <h1>Thank You!</h1>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com
        </p>
      </div>
    </section>
  );
};

export default Confirm;
