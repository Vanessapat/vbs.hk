import { motion } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";

export default function Footer() {
    const {
        theme
    } = useTheme();

    const quickLinks = [{
        name: "首页",
        href: "#"
    }, {
        name: "关于我们",
        href: "#about"
    }, {
        name: "航运板块",
        href: "#services"
    }, {
        name: "主营业务",
        href: "#team"
    }, {
        name: "联系我们",
        href: "#contact"
    }];

    const servicesLinks = [{
        name: "数字化转型咨询",
        href: "#services"
    }, {
        name: "企业IT解决方案",
        href: "#services"
    }, {
        name: "数据 analytics",
        href: "#services"
    }, {
        name: "云计算服务",
        href: "#services"
    }, {
        name: "网络安全服务",
        href: "#services"
    }];

    const socialLinks = [{
        icon: "fa-facebook-f",
        href: "#"
    }, {
        icon: "fa-twitter",
        href: "#"
    }, {
        icon: "fa-linkedin-in",
        href: "#"
    }, {
        icon: "fa-instagram",
        href: "#"
    }, {
        icon: "fa-youtube",
        href: "#"
    }];

    return (
        <footer className="bg-slate-800 text-slate-200 pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
                    <motion.div
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
                        <div className="text-2xl font-bold text-blue-400 mb-6 flex items-center">
                            <i className="fa-solid fa-building mr-2"></i>
                            <span>VBS GROUP</span>
                        </div>
                        <p
                            className={`mb-6 ${theme === "dark" ? "text-gray-400" : "text-gray-300"}`}>VBS GROUP LIMITED是一家全球领先的企业解决方案提供商，专注于帮助企业应对数字化转型的挑战。
                                        </p>
                        {}
                    </motion.div>
                    {}
                    <motion.div
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
                            duration: 0.6,
                            delay: 0.1
                        }}>
                        <h3 className="text-lg font-semibold mb-6">快速链接</h3>
                        <ul className="space-y-4">
                            {quickLinks.map((link, index) => <motion.li key={index}>
                                <a
                                    href={link.href}
                                    className={`${theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-300 hover:text-white"} transition-colors duration-200 flex items-center`}>
                                    <i className="fa-solid fa-chevron-right mr-2 text-blue-400"></i>
                                    {link.name}
                                </a>
                            </motion.li>)}
                        </ul>
                    </motion.div>
                    <motion.div
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
                            duration: 0.6,
                            delay: 0.3
                        }}>
                        <h3 className="text-lg font-semibold mb-6">联系我们</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <i className="fa-solid fa-map-marker-alt mr-3 mt-1 text-blue-400"></i>
                                <span className="text-white">中国香港北角蚬壳街9-23号秀明中心 18楼F室
                                                       </span>
                            </li>
                            <li className="flex items-start">
                                <i className="fa-solid fa-phone-alt mr-3 mt-1 text-blue-400"></i>
                                <span className="text-white">+852-37099649
                                                      </span>
                            </li>
                            <li className="flex items-start">
                                <i className="fa-solid fa-envelope mr-3 mt-1 text-blue-400"></i>
                                <span className="text-white">info@vbs.hk
                                                      </span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
                {}
                <motion.div
                    className={`pt-8 border-t ${theme === "dark" ? "border-gray-800" : "border-gray-700"} text-center`}
                    initial={{
                        opacity: 0
                    }}
                    whileInView={{
                        opacity: 1
                    }}
                    viewport={{
                        once: true
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.4
                    }}>
                    <p
                        className={`${theme === "dark" ? "text-gray-500" : "text-gray-400"} text-sm`}>© {new Date().getFullYear()}VBS GROUP LIMITED. 保留所有权利。
                                  </p>
                </motion.div>
            </div>
        </footer>
    );
}