import { motion } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";

export default function TeamSection() {
    const {
        theme
    } = useTheme();

    const mainBusinesses = [{
        title: "我们的团队",
        description: "具有丰富经验，曾在国际级航运、管理、保险公司、海事律所等相关行业担任高管职位。",
        icon: "fa-chart-line",
        color: "bg-sky-600",
        image: "https://lf-code-agent.coze.cn/obj/x-ai-cn/284621100034/attachment/第四页图片1_20251113121237.png",
        textImage: "https://lf-code-agent.coze.cn/obj/x-ai-cn/284621100034/attachment/团队照片1_20251113165500.jpg"
    }, {
        title: "全球航运服务",
        description: "专业从事船舶资产投资及运营，拥有丰富的海事法律和海商保险知识，具有深厚的人脉和广泛的影响力。",
        icon: "fa-ship",
        color: "bg-sky-700",
        image: "https://lf-code-agent.coze.cn/obj/x-ai-cn/284621100034/attachment/第四页图片2_20251113121256.png",
        textImage: "https://lf-code-agent.coze.cn/obj/x-ai-cn/284621100034/attachment/团队照片2_20251113165510.jpg"
    }, {
        title: "全产业链服务",
        description: "能够为客户提供全产业链包括不限于全程供应链，海事融资，海事经济，海事咨询，海事服务等增值服务。",
        icon: "fa-cogs",
        color: "bg-sky-500",
        image: "https://lf-code-agent.coze.cn/obj/x-ai-cn/284621100034/attachment/第四页图片3_20251113121314.png",
        textImage: "https://lf-code-agent.coze.cn/obj/x-ai-cn/284621100034/attachment/团队照片3_20251113165520.jpg"
    }];

    return (
        <section id="team" className="py-20 bg-white text-slate-800">
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
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">我们的 <span className="text-sky-600">主营业务</span></h2>
                    <div className="w-20 h-1 bg-sky-600 mx-auto mb-6"></div>
                    <p className="max-w-2xl mx-auto text-lg text-black">凭借专业团队和丰富经验，VBS GROUP提供全方位的航运及相关服务，满足客户多样化需求。
                                                                                                                                  </p>
                </motion.div>
                {}
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
                    {mainBusinesses.map((business, index) => <motion.div
                        key={index}
                        className={`overflow-hidden rounded-2xl ${theme === "dark" ? "bg-gray-700 shadow-lg shadow-gray-900/50" : "bg-white shadow-lg shadow-sky-200/50"}`}
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
                        <div className="p-6">
                            {}
                            <div
                                className="mb-4 rounded-lg overflow-hidden"
                                style={{
                                    objectFit: "contain"
                                }}>
                                <img
                                    src="https://s.coze.cn/t/crT6Gz_bz9Y/"
                                    alt={`${business.title} 照片`}
                                    className="w-full h-48 object-cover" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-white">{business.title}</h3>
                            <p
                                className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"} text-sm`}>
                                {business.description}
                            </p>
                        </div>
                    </motion.div>)}
                </div>
                {}
                <motion.div
                    className="mt-20"
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
                    <h3 className="text-2xl font-bold mb-8 text-center">我们的业务优势</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[{
                            title: "专业团队",
                            description: "拥有一支经验丰富、专业高效的管理团队，成员有20年以上的从业资历。",
                            icon: "fa-user-tie"
                        }, {
                            title: "全球网络",
                            description: "建立了覆盖全球主要港口和地区的服务网络，能够为客户提供全球化的航运解决方案。",
                            icon: "fa-globe"
                        }, {
                            title: "优质服务",
                            description: "始终坚持客户至上的服务理念，致力于为客户提供安全、高效、便捷的航运服务。",
                            icon: "fa-award"
                        }].map((advantage, index) => <motion.div
                            key={index}
                            className={`p-8 rounded-2xl ${theme === "dark" ? "bg-gray-800" : "bg-sky-50"}`}
                            whileHover={{
                                y: -5
                            }}
                            transition={{
                                duration: 0.2
                            }}>
                            <div
                                className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-700 text-white mb-6">
                                <i className={`fa-solid ${advantage.icon} text-xl`}></i>
                            </div>
                            <h4 className="text-xl font-semibold mb-4 text-white">{advantage.title}</h4>
                            <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                                {advantage.description}
                            </p>
                        </motion.div>)}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}