import { BiLogoPostgresql } from "react-icons/bi"
import { DiRedis } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa"
import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import { motion } from "framer-motion"

const iconVariants = (duration) => ({
    initial: { y: -10},
    animate: {
        y: [10, 10],
        transition: {
            duration: duration,
            ease: "Linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
  return (
    <div className="pb-24">
        <motion.h2 className="my-20 text-center text-6xl"
            whileInView={{ opacity: 1, y: 0}}
            initial={{ opacity: 0, y: -100}}
            transition={{ duration: 1.5}}
            >Technologies
        </motion.h2>
        <motion.div className="flex flex-wrap items-center justify-center gap-4"
            whileInView={{ opacity: 1, x: 0}}
            initial={{ opacity: 0, x: -100}}
            transition={{ duration: 1.5 }}>
            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(2.5)}>
                <RiReactjsLine className="text-7xl text-cyan-400 cursor-pointer" />
            </motion.div>

            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(3)}
                className="p-4">
                <TbBrandNextjs className="text-7xl cursor-pointer" />
            </motion.div>

            <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(5)}
                className="p-4">
                <SiMongodb className="text-7xl text-cyan-500 cursor-pointer" />
            </motion.div>

            <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(2)}
                className="p-4">
                <DiRedis className="text-7xl text-red-700 cursor-pointer" />
            </motion.div>

            <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(6)}
                className="p-4">
                <FaNodeJs className="text-7xl text-green-500 cursor-pointer" />
            </motion.div>

            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(4)}
                className="p-4">
                <BiLogoPostgresql className="text-7xl text-sky-500 cursor-pointer" />
            </motion.div>

        </motion.div>
    </div>
  )
}

export default Technologies