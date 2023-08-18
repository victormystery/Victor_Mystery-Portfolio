import React,{ useState } from "react";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";




import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};




const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
