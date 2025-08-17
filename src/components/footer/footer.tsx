import { useState } from "react";
import data from "../../data/lang.json"; // sementara ambil JSON ID dulu
import type { Footer as FooterType } from "../../models/types";

type Language = "id" | "en";

export default function Footer() {
  const [language, setLanguage] = useState<Language>("id");
  const footer: FooterType = data.footer;

  return (
    <footer className="relative pt-8 pb-6 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {/* Left */}
          <div className="w-full lg:w-6/12 px-4 mb-10 lg:mb-0">
            <img src="/logo/logo.png" alt="Logo" className="mb-5 w-44" />
            <p className="text-sm text-gray-600">
              {footer.address.map((line, idx) => (
                <span key={idx}>
                  {line} <br />
                </span>
              ))}
            </p>
          </div>

          {/* Right */}
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              {/* Links */}
              <div className="w-full lg:w-4/12 mb-10 lg:mb-0">
                <ul>
                  {footer.links.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href={link.url}
                        className="block pb-2 text-sm hover:text-orange-primary"
                      >
                        {link.label[language]}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Policies */}
              <div className="w-full lg:w-4/12 mb-10 lg:mb-0">
                <ul>
                  {footer.policies.map((policy, idx) => (
                    <li key={idx}>
                      <a
                        href={policy.url}
                        className="block pb-2 text-sm hover:text-orange-primary"
                      >
                        {policy.label[language]}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contacts */}
              <div className="w-full lg:w-4/12 mb-10 lg:mb-0">
                <ul>
                  {footer.contacts.map((contact, idx) => (
                    <li key={idx}>
                      <a
                        href={contact.url}
                        className="block pb-2 text-sm hover:text-orange-primary"
                      >
                        {contact.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center mt-4 gap-2">
                  {/* Bahasa Indonesia */}
                  <button
                    onClick={() => {
                      setLanguage("id");
                      window.scrollTo(0, 0);
                    }}
                    className={`rounded-full ${
                      language === "id" ? "border-4 border-primary" : ""
                    }`}
                  >
                    <img
                      src="/logo/id.svg"
                      alt="Indonesian flag"
                      width={35}
                      height={35}
                    />
                  </button>

                  {/* Bahasa Inggris */}
                  <button
                    onClick={() => {
                      setLanguage("en");
                      window.scrollTo(0, 0);
                    }}
                    className={`rounded-full ${
                      language === "en" ? "border-4 border-primary" : ""
                    }`}
                  >
                    <img
                      src="/logo/us.svg"
                      alt="US flag"
                      width={35}
                      height={35}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-300" />

        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-500 py-1">
              {footer.copyright[language]}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
