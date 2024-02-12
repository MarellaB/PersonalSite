import LanguageScroller from "./(components)/LanguageScroller";
import Splash from "./(components)/Splash";
import ProjectContainer from "./(components)/ProjectContainer";
import ContactSection from "./(components)/Contact";

export default function Home() {
  const projects = [
    {
      name: 'Chloe AI',
      subtitle: 'Your Personal Librarian',
      linkTo: 'https://meetchloeai.com/',
      imageSource: '/ChloeAI_Screenshot.png',
      description: 'My first professional foray into the world of AI. Chloe AI is a personalized AI librarian with a focus on Public Libraries & avid readers. It is built using OpenAI\'s GPT-3.5 and Weaviate\'s knowledge graph to reduce hallucinations.',
      technologies: [
        {name: 'NextJS', link: 'https://nextjs.org'},
        {name: 'Open AI', link: 'https://openai.com'},
        {name: 'Weaviate', link: 'https://weaviate.io'},
        {name: 'Tailwind CSS', link: 'https://tailwindcss.com'},
      ],
      detailSections: []
    }
  ]

  return (
    <main className="flex min-h-screen flex-col items-center space-y-24">
      <div className="w-full h-screen flex flex-col justify-center space-y-16 container">
        <Splash />
        <LanguageScroller />
      </div>

      <div className="w-full">
        <h3 className="text-5xl font-bold text-white text-center mb-16">My Work</h3>

        <div className="flex flex-col space-y-32 container">
          {projects.map((project, index) => (
            <ProjectContainer project={project} key={index} />
          ))}
          <div className="flex items-center justify-around">
            <div className="bg-white w-2 h-2 rounded-full"></div>
            <div>
              <h3 className="text-lg font-bold text-center text-white">More Projects & Details Coming Soon</h3>
              <p className="text-center text-white">Website was recently re-done so slowly adding my newer projects first!</p>
            </div>
            <div className="bg-white w-2 h-2 rounded-full"></div>
          </div>
        </div>
      </div>

      <ContactSection />
    </main>
  );
}
