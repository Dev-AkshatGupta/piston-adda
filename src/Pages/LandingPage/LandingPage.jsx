import React from "react";
import { LogInForm } from "Components/Authentication/LogInForm";
import { Footer } from "Components/Footer/Footer";
function LandingPage() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className=" md:pr-16 lg:pr-0 pr-0  lg:w-3/5 md:w-1/2 flex flex-col items-center">
            <div className="h-3/5 w-96">
              <img
                src={require("./../../Assets/Images/LandingLogo.png")}
                alt="Piston-adda Logo"
              />
            </div>
          </div>

          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h1 className=" text-3xl text-center ">
              <span className=" text-accent">Piston</span>

              <span className="ml-1.5 text-slate-900">Adda</span>
            </h1>

            <LogInForm />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export { LandingPage };
