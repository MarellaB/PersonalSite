import Link from "next/link";
import { TbFileSad } from "react-icons/tb";
import { GoTriangleRight } from "react-icons/go";

export default function ProjectContainer({ project }) {
  return (
    <div className="m-auto">
      <div className={"grid grid-cols-4 gap-6 text-white w-full" }>
        <Link href={project.linkTo} className="group border-2 border-white rounded-lg h-48 flex-none">
          {project.imageSource && <img className="w-full h-full object-cover m-2 rounded-md group-hover:m-0 transition-all" src={project.imageSource} alt={project.name} />}
          {!project.imageSource && <div className="w-full h-full bg-slate-800 object-cover m-2 rounded-md group-hover:m-0 transition-all text-slate-500 font-bold text-center flex flex-col items-center justify-center text-lg" alt={project.name} >
            <TbFileSad className="w-16 h-16"/>
            Project Image Not Found
          </div>}
        </Link>
        <div className={"flex-none col-span-3 w-2/3 flex flex-col justify-between py-2"}>
          <div>
            <h2 className="text-3xl font-bold">{project.name}{project.subtitle && <span className="text-xl opacity-60 ml-2">{project.subtitle}</span>}</h2>
            <p className="text-sm opacity-80">{project.description}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold opacity-60">Technologies Used</h3>
            <div className="flex space-x-2 mt-1">
              {project.technologies.map((technology, index) => (
                <Link className="bg-white px-3 rounded-full border-2 border-white text-slate-800 hover:bg-transparent hover:text-white font-bold transition-colors" href={technology.link} key={index}>{technology.name}</Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      {project.detailSections?.length > 0 &&  <ProjectWalkthrough project={project} />}
    </div>
  )
}

function ProjectWalkthrough({ project }) {
  return (
    <div className="mt-6">
      <input type="checkbox" id={"project-walkthrough-" + project.name} className="hidden peer" />
      <label htmlFor={"project-walkthrough-" + project.name} className="text-white rounded-lg cursor-pointer">
        <div className="w-full text-center flex items-center group">
          <div className="border-b-2 border-white w-full"></div>
          <h3 className="w-96 border-2 border-white group-hover:bg-slate-800 transition-all font-bold">Learn More</h3>
          <div className="border-b-2 border-white w-full"></div>
        </div>
      </label>
      <div className="h-0 peer-checked:h-fit overflow-hidden border-l-2 border-r-2 border-b-2 peer-checked:border-white border-transparent peer-checked:-mt-3 peer-checked:py-6 px-2">
        <div className="p-2 text-white grid grid-cols-2 gap-8">
          <div className="col-span-2">
            <h2 className="text-4xl font-bold underline underline-offset-4 mb-3">Why Build This?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quibusdam ipsum impedit minima beatae fuga nemo deleniti sapiente est praesentium dolor iure corporis sequi consequatur asperiores modi ad, magni dolore!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quibusdam ipsum impedit minima beatae fuga nemo deleniti sapiente est praesentium dolor iure corporis sequi consequatur asperiores modi ad, magni dolore!</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold underline underline-offset-4 mb-3">Challenges Faced</h2>
            <ul className="flex flex-col space-y-2">
              <li>
                <label className="cursor-pointer">
                  <input type="checkbox" className="hidden peer" />
                  <GoTriangleRight className="peer-checked:rotate-90 float-left w-6 h-6 transition-all" />
                  <p className="font-bold">Finding First Customers</p>
                  <div className="relative peer-checked:h-fit h-0 overflow-hidden border-l-2 border-white ml-3 pl-6 peer-checked:py-2">
                    <div className="absolute w-full h-full bg-slate-800 opacity-60 -z-10 left-0 top-0"></div>
                    <p>After determining the product, I began to look for where the ideal customer would be before any work was done. </p>
                  </div>
                </label>
              </li>

              <li>
                <label className="cursor-pointer">
                  <input type="checkbox" className="hidden peer" />
                  <GoTriangleRight className="peer-checked:rotate-90 float-left w-6 h-6 transition-all" />
                  <p className="font-bold">Finding First Customers</p>
                  <div className="relative peer-checked:h-fit h-0 overflow-hidden border-l-2 border-white ml-3 pl-6 peer-checked:py-2">
                    <div className="absolute w-full h-full bg-slate-800 opacity-60 -z-10 left-0 top-0"></div>
                    <p>After determining the product, I began to look for where the ideal customer would be before any work was done. </p>
                  </div>
                </label>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="text-4xl font-bold underline underline-offset-4 mb-3">Why The Tech Stack?</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure dolore aliquid, maxime quia voluptatem dolorum velit blanditiis tempore molestias ducimus sequi maiores ad totam aperiam natus consectetur. Officia, iusto similique.</p>
          </div>
        </div>
      </div>
    </div>
  )
}