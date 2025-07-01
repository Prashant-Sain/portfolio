import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiGeeksforgeeks } from "react-icons/si";

function ContactSection() {
  return (
    <section id="contact" className="py-12 px-4 md:px-8 lg:px-16 bg-[#0d1224] text-white">
      <h2 className="text-3xl font-bold mb-6 text-pink-500">Contact Me</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          {typeof personalData.email === "string" && personalData.email.trim() !== "" && (
            <div className="flex items-center gap-3">
              <MdEmail size={24} />
              <a
                href={`mailto:${personalData.email}`}
                className="hover:text-pink-500 transition"
              >
                {personalData.email}
              </a>
            </div>
          )}

          {typeof personalData.phone === "string" && personalData.phone.trim() !== "" && (
            <div className="flex items-center gap-3">
              <MdPhone size={24} />
              <a
                href={`tel:${personalData.phone}`}
                className="hover:text-pink-500 transition"
              >
                {personalData.phone}
              </a>
            </div>
          )}

          {typeof personalData.address === "string" && personalData.address.trim() !== "" && (
            <div className="flex items-center gap-3">
              <MdLocationOn size={24} />
              <p>{personalData.address}</p>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Connect</h3>
          <div className="flex gap-5">
            {typeof personalData.github === "string" && personalData.github.trim() !== "" && (
              <Link
                href={personalData.github}
                target="_blank"
                className="hover:text-pink-500 transition"
              >
                <BsGithub size={28} />
              </Link>
            )}

            {typeof personalData.linkedIn === "string" && personalData.linkedIn.trim() !== "" && (
              <Link
                href={personalData.linkedIn}
                target="_blank"
                className="hover:text-pink-500 transition"
              >
                <BsLinkedin size={28} />
              </Link>
            )}

            {typeof personalData.GFG === "string" && personalData.GFG.trim() !== "" && (
              <Link
                href={personalData.GFG}
                target="_blank"
                className="hover:text-pink-500 transition"
              >
                <SiGeeksforgeeks size={28} />
              </Link>
            )}
          </div>

          {typeof personalData.resume === "string" && personalData.resume.trim() !== "" && (
            <div>
              <Link
                href={personalData.resume}
                target="_blank"
                className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-pink-500 to-violet-600 rounded-full text-white font-semibold transition hover:scale-105"
              >
                View Resume
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
