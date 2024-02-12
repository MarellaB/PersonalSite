import { DiJavascript1, DiReact, DiMongodb, DiNodejsSmall } from "react-icons/di";
import { SiTailwindcss, SiOpenai } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { DiJava } from "react-icons/di";

export default function LanguageScroller() {
  const logoClasses = "w-12 h-12 border-2 p-1 border-white rounded-lg";
  const languagesScroll = [
    { name: 'JavaScript', logo: <DiJavascript1 className={logoClasses} /> },
    { name: 'React JS', logo: <DiReact className={logoClasses} /> },
    { name: 'MongoDB', logo: <DiMongodb className={logoClasses} /> },
    { name: 'Open AI', logo: <SiOpenai className={logoClasses} /> },
    { name: 'NodeJS', logo: <DiNodejsSmall className={logoClasses} /> },
    { name: 'Tailwind CSS', logo: <SiTailwindcss className={logoClasses} /> },
    { name: 'NextJS', logo: <TbBrandNextjs className={logoClasses} /> },
    { name: 'Java', logo: <DiJava className={logoClasses} /> },
  ]

  return (
    <div className="w-full h-12 relative overflow-hidden">
      <div className="absolute z-10 left-0 top-0 h-full w-16 bg-gradient-to-r from-[#01020E]"></div>
      <div className="flex space-x-12 w-fit test">
        <div className="flex space-x-16">
          {languagesScroll.map((language, index) => (
            <div className="flex space-x-4" key={index}>
              {language.logo}
              <h2>{language.name}</h2>
            </div>
          ))}
          {languagesScroll.map((language, index) => (
            <div className="flex space-x-4" key={index}>
              {language.logo}
              <h2>{language.name}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute z-10 right-0 top-0 h-full w-16 bg-gradient-to-l from-[#01020E]"></div>
    </div>
  )
}