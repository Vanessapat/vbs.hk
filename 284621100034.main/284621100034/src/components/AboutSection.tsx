import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';

export default function AboutSection() {
  const { theme } = useTheme();
  
  const visionMissionValues = [
    {
      title: "我们的愿景",
      description: "成为行业领先的企业解决方案提供商，通过创新和卓越服务推动全球企业的可持续发展。",
      icon: "fa-eye"
    },
    {
      title: "我们的使命",
      description: "赋能企业数字化转型，提供高效、创新的解决方案，帮助客户应对挑战并把握机遇。",
      icon: "fa-bullseye"
    },
    {
      title: "我们的价值观",
      description: "诚信、创新、卓越、协作、责任 - 这些核心价值观指导我们的每一个决策和行动。",
      icon: "fa-heart"
    }
  ];
  
  return (
    <section id="about" className="py-20 bg-white text-slate-800">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">关于 <span className="text-sky-600">VBS GROUP</span></h2>
          <div className="w-20 h-1 bg-sky-600 mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-lg text-black">
               VBS 成立于2020年，运营总部位于中国香港，拥有近百万载重吨运力，业务板块包含多个领域。
             </p>
        </motion.div>
        
        {/* About content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left image */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
             <div className={`relative rounded-2xl overflow-hidden shadow-xl ${theme === 'dark' ? 'shadow-blue-900/20' : 'shadow-blue-700/10'}`}>
              <img 
                src="https://lf-code-agent.coze.cn/obj/x-ai-cn/284621100034/attachment/第二页图片_20251113120920.png" 
                alt="VBS Group Ship" 
                className="w-full h-auto rounded-2xl"
              />
               <div className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full ${theme === 'dark' ? 'bg-blue-700/20' : 'bg-blue-200'} blur-2xl`}></div>
            </div>
          </motion.div>
          
          {/* Right content */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
           >
            <h3 className="text-2xl font-semibold mb-6">公司简介</h3>
             <p className="mb-6 text-lg text-black">
               VBS 成立于2020年，运营总部位于中国香港，拥有近百万载重吨运力，业务板块包含集装箱班轮运输、散杂货运输、油气运输、船舶管理和船舶融资等多个领域。服务遍及五大洲。
             </p>
             <p className="mb-8 text-lg text-black">
               一直以来，VBS 凭借稳健的经营和管理，与国际主流大型企业建立了长期稳定的合作关系，赢得客户和行业的盛誉。VBS 扎根全球航运市场，始终秉承品牌和服务创建，坚持产业集群深度协同战略，致力于提供稳健的价值投资以及最优的供应链解决方案。
             </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-8">
              {[
                 { label: "成立年份", value: "2020" },
                { label: "服务客户", value: "500+" },
                { label: "业务覆盖", value: "20+" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                   className={`p-4 rounded-xl text-center ${theme === 'dark' ? 'bg-gray-800' : 'bg-sky-50'}`}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                   <p className="text-3xl font-bold text-blue-700">{stat.value}</p>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Vision, Mission, Values */}
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visionMissionValues.map((item, index) => (
               <motion.div
                key={index}
                className={`p-8 rounded-2xl ${theme === 'dark' ? 'bg-gray-700 hover:bg-gray-650' : 'bg-sky-50 hover:bg-sky-100'} transition-all duration-300`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-sky-600 text-white mb-6">
                  <i className={`fa-solid ${item.icon} text-xl`}></i>
                </div>
                 <h3 className="text-xl font-semibold mb-4 text-white">{item.title}</h3>
                 <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                   {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}