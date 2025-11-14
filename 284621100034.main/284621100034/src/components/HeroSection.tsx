import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';

export default function HeroSection() {
  const { theme } = useTheme();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-white text-slate-800">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-400 opacity-20 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }} 
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-blue-300 opacity-20 blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.25, 0.2]
          }} 
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                <span className="text-4xl md:text-5xl lg:text-6xl font-bold block mb-2 text-blue-700">VBS GROUP LIMITED</span>
                <span className="text-xl md:text-2xl lg:text-3xl text-blue-800">Value Beyond Shipping</span>
                <br />
               <span className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-800">
                  丰和瑞航  精诚致远
                </span>
              </h1>
              
                <p className={`text-lg md:text-xl mb-8 whitespace-nowrap ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>
                  我们致力于提供稳健的价值投资以及最优的供应链解决方案
                </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.a
                  href="#services"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-lg bg-blue-700 text-white font-medium shadow-lg shadow-blue-700/30 hover:shadow-blue-700/50 transition-all duration-300"
                >
                  探索服务 <i className="fa-solid fa-arrow-right ml-2"></i>
                </motion.a>
                
                <motion.a
                  href="#about"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                    theme === 'dark' 
                      ? 'bg-gray-800 text-white hover:bg-gray-700' 
                      : 'bg-white text-blue-700 shadow-lg hover:shadow-lg/50'
                  }`}
                >
                  了解我们 <i className="fa-solid fa-users ml-2"></i>
                </motion.a>
              </div>
            </motion.div>
          </div>
          
          {/* Right image */}
          <motion.div 
            className="lg:w-5/12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
             <div className={`relative rounded-2xl overflow-hidden shadow-2xl ${theme === 'dark' ? 'shadow-blue-900/20' : 'shadow-blue-700/10'}`}>
               <img 
                 src="https://lf-code-agent.coze.cn/obj/x-ai-cn/284621100034/attachment/首页图_20251113115756.png" 
                 alt="VBS Group" 
                 className="w-full h-auto rounded-2xl"
               />
             </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <p className={`mb-2 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>向下滚动了解更多</p>
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ duration: 2, repeat: Infinity }}
          >
            <i className={`fa-solid fa-chevron-down ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}></i>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}