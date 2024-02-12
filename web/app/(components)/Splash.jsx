export default function Splash() {
    return (
      <div className="flex space-x-4 text-slate-200 justify-between w-full align-middle items-center">
        <div className="w-2/3">
          <h2 className="font-bold text-7xl">Howdy, I'm Brandon</h2>
          <h4 className="text-5xl">Developer, Founder, & Father</h4>
          <p className="mt-8 text-xl">
            With over 16 years of studying software development, and 7+ years of full-stack experience,
            I enjoy learning how to build new things, and especially learning new technlogies.
            <br />
            As of late, I've started to dive in to AI and understanding how to incorporate LLMs into more standard systems.
          </p>
        </div>
        <div className="rounded-full  w-96 h-96">
          <img className="p-2 bg-slate-200 rounded-full" src={'/PersonalProfileImage.png'} alt="Personal Profile Image" />
        </div>
      </div>
    )
  }