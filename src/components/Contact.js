import React from "react";
import { motion } from "framer-motion";

import { fadeIn } from "../variants";




// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";



// const firebaseConfig = {
//   apiKey: "AIzaSyD1iLqBOF79lceKoQDD8Pgeyn-ekKiGrRA",
//   authDomain: "victor-osarobo.firebaseapp.com",
//   projectId: "victor-osarobo",
//   storageBucket: "victor-osarobo.appspot.com",
//   messagingSenderId: "818928810445",
//   appId: "1:818928810445:web:84075a7ada1013bfb56c84",
//   measurementId: "G-KBHNFCG2RS"
// };


// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const Contact = () => {
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 flex justify-start items-center">
            <div>
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>

              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together!
              </h2>
            </div>
          </div>

          <form className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start">
            <input
              className="bg-transparent  border-b py-3 outline-none w-full placeholder:text-black focus:border-accent transition-all"
              type="text"
              placeholder="Your name"
            />

            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-black focus:border-accent transition-all"
              type="text"
              placeholder="Your email"
            />

            <textarea className="bg-transparent border-b py-3 outline-none w-full placeholder:text-black focus:border-accent transition-all resize-none mb-12" placeholder="Your message"></textarea>
            <button className="btn btn-lg">Send message</button>
            
          </form>
        </div>

        <div></div>
      </div>
    </section>
  );
};

export default Contact;
