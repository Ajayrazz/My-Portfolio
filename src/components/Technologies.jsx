import { BiLogoPostgresql } from "react-icons/bi"
import { DiRedis } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa"
import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"

const Technologies = () => {
  return (
    <div className="pb-24">
        <h1 className="my-20 text-center text-6xl">Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div>
                <RiReactjsLine className="text-7xl text-cyan-400 cursor-pointer" />
            </div>

            <div className="p-4">
                <TbBrandNextjs className="text-7xl cursor-pointer" />
            </div>

            <div className="p-4">
                <SiMongodb className="text-7xl text-cyan-500 cursor-pointer" />
            </div>

            <div className="p-4">
                <DiRedis className="text-7xl text-red-700 cursor-pointer" />
            </div>

            <div className="p-4">
                <FaNodeJs className="text-7xl text-green-500 cursor-pointer" />
            </div>

            <div className="p-4">
                <BiLogoPostgresql className="text-7xl text-sky-500 cursor-pointer" />
            </div>

        </div>
    </div>
  )
}

export default Technologies