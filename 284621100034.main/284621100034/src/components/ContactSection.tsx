import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/useTheme';
import { useState } from 'react';
import { toast } from 'sonner';

export default function ContactSection() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast('感谢您的留言，我们会尽快回复您！');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };
  
  const contactInfo = [
    {
      title: "地址",
      description: "中国香港北角蚬壳街9-23号秀明中心 18楼F室",
      icon: "fa-map-marker-alt"
    },
    {
      title: "电话",
      description: "+852-37099649",
      icon: "fa-phone-alt"
    },
    {
      title: "邮箱",
      description: "info@vbs.hk",
      icon: "fa-envelope"
    }
  ];
  
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 to-white text-slate-800">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">联系 <span className="text-sky-600">我们</span></h2>
          <div className="w-20 h-1 bg-sky-600 mx-auto mb-6"></div>
           <p className="max-w-2xl mx-auto text-lg text-black">
            无论您有任何问题或需求，我们的团队都随时准备为您提供帮助。
          </p>
        </motion.div>
        
        {/* Contact content */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact information */}
          <motion.div 
            className="lg:w-2/5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
             <div className={`p-8 rounded-2xl mb-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg shadow-blue-100/50`}>
              <h3 className="text-2xl font-semibold mb-6">联系信息</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                 <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-700 text-white mr-4">
                      <i className={`fa-solid ${info.icon}`}></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-1 text-white">{info.title}</h4>
                      <p className="text-white">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Map (just a placeholder) */}
            <motion.div 
               className={`h-64 rounded-2xl overflow-hidden shadow-lg shadow-blue-100/50 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
               whileHover={{ y: -5 }}
               transition={{ duration: 0.2 }}
            >
                 <img 
                  src="https://lf-code-agent.coze.cn/obj/x-ai-cn/284621100034/attachment/第五页图片_20251113121146.png" 
                  alt="Ship Deck at Sea" 
                  className="w-full h-full object-cover"
                />
            </motion.div>
          </motion.div>
          
          {/* Contact form */}
          <motion.div 
            className="lg:w-3/5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
             <div className={`p-8 rounded-2xl shadow-lg shadow-blue-100/50 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <h3 className="text-2xl font-semibold mb-6">发送消息</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className={`block mb-2 text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      姓名
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border ${
                        theme === 'dark' 
                          ? 'bg-gray-700 border-gray-600 text-white focus:border-sky-500' 
                          : 'bg-white border-gray-300 text-gray-900 focus:border-sky-500'
                      } focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-200`}
                      placeholder="您的姓名"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={`block mb-2 text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      邮箱
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border ${
                        theme === 'dark' 
                          ? 'bg-gray-700 border-gray-600 text-white focus:border-sky-500' 
                          : 'bg-white border-gray-300 text-gray-900 focus:border-sky-500'
                      } focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-200`}
                      placeholder="您的邮箱地址"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className={`block mb-2 text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    主题
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border ${
                      theme === 'dark' 
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-sky-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-sky-500'
                    } focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-200`}
                    placeholder="消息主题"
                  />
                </div>
                <div>
                  <label htmlFor="message" className={`block mb-2 text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    消息
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      theme === 'dark' 
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-sky-500' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-sky-500'
                    } focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all duration-200 resize-none`}
                    placeholder="请输入您的消息..."
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-4 rounded-lg bg-blue-700 text-white font-medium shadow-lg shadow-blue-700/30 hover:shadow-blue-700/50 hover:bg-blue-800 transition-all duration-300 flex items-center justify-center"
                >
                  发送消息 <i className="fa-paper-plane ml-2"></i>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}