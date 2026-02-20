import { Download, ExternalLink } from "lucide-react";

// --- 履历数据 ---
const WORK_EXPERIENCE = [
  {
    id: "work-1",
    role: "Vice President",
    company: "Dynamic Automation, Ningbo",
    duration: "2024 - Present",
    desc: "Overseeing company operations, integrating software architecture and AI innovations into traditional industrial automation processes, and driving digital transformation.",
  },
  // 如果你之前有实习经历，我们后续可以加在这里
];

const EDUCATION = [
  {
    id: "edu-1",
    degree: "M.S. in Electrical and Computer Engineering (ECE)",
    school: "Carnegie Mellon University (CMU)",
    duration: "Fall 2022 - Spring 2024",
    desc: "Focused on advanced software engineering, artificial intelligence, and system architecture.",
  },
  {
    id: "edu-2",
    degree: "B.S. in Computer Science",
    school: "Rensselaer Polytechnic Institute (RPI)",
    duration: "Fall 2018 - Spring 2022",
    desc: "Core coursework in algorithms, data structures, and computer systems.",
  },
  {
    id: "edu-3",
    degree: "High School Diploma",
    school: "Baston School, Ningbo",
    duration: "Fall 2015 - Spring 2018",
    desc: "Prepared for international higher education with a strong foundation in STEM.",
  },
  {
    id: "edu-4",
    degree: "Middle School",
    school: "Xingning Middle School",
    duration: "Fall 2012 - Spring 2015",
    desc: "Early education in Ningbo.",
  },
];

export default function ResumePage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 md:py-20 space-y-16 animate-in slide-in-from-bottom-4 duration-500 fade-in">
      
      {/* 头部标题与下载按钮 */}
      <header className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-12">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight mb-4">Resume</h1>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            My professional journey and academic background.
          </p>
        </div>
        
        {/* 下载 PDF 按钮 (目前是占位符，如果以后你有 PDF 简历，把 href 换成你的 pdf 链接即可) */}
        <a 
          href="#" 
          className="inline-flex text-sm items-center gap-1.5 px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-[#1a1a1a] dark:text-[#e5e5e5] transition-colors w-fit font-medium"
        >
          <Download size={14} /> Download PDF
        </a>
      </header>

      {/* 工作经验模块 */}
      <section>
        <h2 className="text-xl font-semibold tracking-tight mb-8 flex items-center gap-2">
          Experience
        </h2>
        <div className="relative border-l border-gray-200 dark:border-gray-800 ml-3 space-y-10 pb-4">
          {WORK_EXPERIENCE.map(item => (
            <div key={item.id} className="relative pl-8">
              {/* 时间线圆点 */}
              <span className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-500 dark:bg-blue-400 border-[3px] border-white dark:border-[#1d1e20]"></span>
              
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-1">
                <h3 className="text-lg font-medium text-[#1a1a1a] dark:text-[#e5e5e5]">{item.role}</h3>
                <span className="text-sm text-gray-500 font-mono mt-1 md:mt-0">{item.duration}</span>
              </div>
              <h4 className="text-gray-600 dark:text-gray-400 text-sm mb-3 font-medium">{item.company}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-2xl">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 教育经历模块 */}
      <section>
        <h2 className="text-xl font-semibold tracking-tight mb-8 mt-12 flex items-center gap-2">
          Education
        </h2>
        <div className="relative border-l border-gray-200 dark:border-gray-800 ml-3 space-y-10 pb-4">
          {EDUCATION.map((item, index) => (
            <div key={item.id} className="relative pl-8">
              {/* 教育经历用灰色的圆点 */}
              <span className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-gray-600 border-[3px] border-white dark:border-[#1d1e20]"></span>
              
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-1">
                <h3 className="text-lg font-medium text-[#1a1a1a] dark:text-[#e5e5e5]">{item.school}</h3>
                <span className="text-sm text-gray-500 font-mono mt-1 md:mt-0">{item.duration}</span>
              </div>
              <h4 className="text-gray-600 dark:text-gray-400 text-sm mb-2 font-medium">{item.degree}</h4>
              <p className="text-gray-500 dark:text-gray-500 text-sm leading-relaxed max-w-2xl">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}