import { useState } from "react";
import data from "../../data/lang.json";
import type { Footer as FooterType } from "../../models/types";

type Language = "id" | "en";

export default function Footer() {
  const [language, setLanguage] = useState<Language>("id");
  const footer: FooterType = data.footer;

  return (
    <footer className="relative my-10 md:px-10 px-5">
      <div className="container mx-auto px-4">
        {/* Grid 2 kolom untuk kiri-kanan */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left */}
          <div>
            <img src="/logo/logo.png" alt="Logo" className="mb-5 w-44" />
            <p className="text-sm text-gray-600">
              {footer.address.map((line, idx) => (
                <span key={idx}>
                  {line[language]} <br />
                </span>
              ))}
            </p>
          </div>

          {/* Right */}
          <div>
            {/* Grid 3 kolom untuk links, policies, contacts */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Links */}
              <div>
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
              <div>
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

              {/* Contacts + Language Switch */}
              <div>
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

                <div className="mt-4 bg-gray-100 p-4 rounded-lg">
                  <h2 className="text-sm font-semibold mb-2">Ubah Bahasa</h2>
                  <div className="flex gap-2">
                    {/* Bahasa Indonesia */}
                    <button
                      onClick={() => {
                        setLanguage("id");
                        window.scrollTo(0, 0);
                      }}
                      className={`rounded-full ${
                        language === "id" ? "border-4 border-blue-500" : ""
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
                        language === "en" ? "border-4 border-blue-500" : ""
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
        </div>

        <hr className="my-6 border-blue-500 lg:mx-44" />

        <div className="text-center">
          <div className="text-sm text-gray-500 py-1">
            {footer.copyright[language]}
          </div>
        </div>
      </div>
    </footer>
  );
}
