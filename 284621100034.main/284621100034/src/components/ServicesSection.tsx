import { motion } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";

export default function ServicesSection() {
    const {
        theme
    } = useTheme();

    const services = [{
        title: "散杂货船板块",
        description: "提供专业的散杂货运输服务，包括钢材、机械设备、农产品等各类散杂货物的海上运输解决方案。",
        icon: "fa-cargo-container",
        color: "bg-sky-600"
    }, {
        title: "集装箱船板块",
        description: "拥有现代化集装箱船队，提供全球主要港口间的集装箱运输服务，确保货物安全、准时送达。",
        icon: "fa-ship",
        color: "bg-sky-700"
    }, {
        title: "油气船运输板块",
        description: "专业的油气运输服务，包括原油、成品油、液化天然气等能源产品的安全运输和配送。",
        icon: "fa-gas-pump",
        color: "bg-sky-500",
        id: "third-service"
    }];

    return (
        <section id="services" className="py-20 bg-sky-50 text-slate-800">
            <div className="container mx-auto px-4">
                {}
                <motion.div
                    className="text-center mb-16"
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    viewport={{
                        once: true
                    }}
                    transition={{
                        duration: 0.6
                    }}>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">我们的 <span className="text-sky-600">航运板块</span></h2>
                    <div className="w-20 h-1 bg-sky-600 mx-auto mb-6"></div>
                    <p className="max-w-2xl mx-auto text-lg text-black">主营全球航线，为全球客户提供全方位的海上运输服务以及各种主流船型资产投资方案。
                                    </p>
                </motion.div>
                {}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => <motion.div
                        id={service.id}
                        key={index}
                        className={`p-8 rounded-2xl transition-all duration-300 ${theme === "dark" ? "bg-gray-800 hover:bg-gray-750 shadow-lg shadow-gray-900/50" : "bg-white hover:bg-sky-100 shadow-lg shadow-sky-100/50"}`}
                        initial={{
                            opacity: 0,
                            y: 30
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}
                        viewport={{
                            once: true
                        }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.1
                        }}
                        whileHover={{
                            y: -8,

                            transition: {
                                duration: 0.2
                            },

                            boxShadow: theme === "dark" ? "0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)" : "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                        }}>
                        <></>
                        <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                        <p
                            className={`mb-6 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                            {service.description}
                        </p>
                        <motion.a
                            href="#contact"
                            className={`inline-flex items-center font-medium text-sky-600 hover:text-sky-700 transition-colors duration-200 ${theme === "dark" ? "hover:text-sky-400" : ""}`}
                            whileHover={{
                                x: 5
                            }}>了解更多 <i className="fa-solid fa-arrow-right ml-2"></i>
                        </motion.a>
                    </motion.div>)}
                </div>
                {}
                <motion.div
                    className={`mt-20 rounded-3xl overflow-hidden ${theme === "dark" ? "bg-blue-900/30" : "bg-gradient-to-r from-blue-700 to-blue-600"}`}
                    initial={{
                        opacity: 0,
                        y: 30
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}
                    viewport={{
                        once: true
                    }}
                    transition={{
                        duration: 0.8
                    }}>
                    <div
                        className="flex flex-col md:flex-row items-center justify-between p-10 md:p-16">
                        <div className="md:w-2/3 mb-10 md:mb-0 text-center md:text-left">
                            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">需要专业的航运解决方案？</h3>
                            <p className="text-lg text-black">联系我们，了解VBS集团如何为您提供安全、高效、可靠的全球航运服务。
                                                </p>
                        </div>
                        <div className="md:w-1/3 text-center md:text-right">
                            <motion.a
                                href="#contact"
                                whileHover={{
                                    scale: 1.05
                                }}
                                whileTap={{
                                    scale: 0.95
                                }}
                                className="px-8 py-4 rounded-lg bg-white text-sky-600 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">立即咨询 <i className="fa-solid fa-headset ml-2"></i>
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}