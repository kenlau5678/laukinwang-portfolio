import { 
  Download, 
  FlaskConical,  Mail, GraduationCap, Cpu, Trophy, Layers,
  Briefcase, Languages, Terminal, Bot, 
  Gamepad2, Box
} from 'lucide-react';
import IconImg from '../assets/icon.jpg';
import Gesture2PropImg from '../assets/Gesture2Prop.png';
import GlazestopiaIMG from '../assets/Glazestopia.png';
import Research3Img from '../assets/Research3.png';
import DigitalTwinsImg from '../assets/DigitalTwins.png';
import ZeroDayImg from '../assets/ZeroDay.png';
import WeedingTruckImg from '../assets/WeedingTruck.png';
import CatImg from '../assets/Cat.png';
import PokerImg from '../assets/Poker.png';
const PortfolioPage = () => {
  
  const profileData = {
    name: "刘健泓 LAU KIN WANG",
    title: "Tsinghua University Undergraduate",
    location: "Bangladesh",
    email: "liujianh23@mails.tsinghua.edu.cn",
    languages: [
      { name: "Cantonese", level: "Native Speaker" },
      { name: "Mandarin", level: "Daily Conversation" },
      { name: "English", level: "IELTS 6.5" },
      { name: "Japanese", level: "Simple dialogue" }
    ],
    // 新增：技能列表
    skills: {
      "Programming": ["Python", "C++", "C#", "JavaScript", "HTML/CSS","React","FastAPI","Node.js"],
      "Robotics & AI": ["ROS", "YOLOv5", "LangChain", "Arduino"],
      "Game & VR": ["Unreal Engine", "Unity", "VR/AR", "Scene Rendering", "Computer Graphics"],
      "3D Design": ["Blender", "SolidWorks", "Cinema 4D", "3ds Max"]
    },
    
    // 新增：教育经历
    education: [
      {
        school: "Tsinghua University, School of Vehicle and Mobility",
        year: "2023.09 - 2027.06"
      },
      {
        school: "Nanyang Technological University(Exchange)",
        year: "2026.01 - 2026.05"
      }
    ],
    
  };

  const projectExperience = [
    {
      title: "Building a Low-Altitude Mirror: Architecture and Verification of a Low-Altitude Transportation System Based on Digital Twins",
      role: "Algorithm Research and System Development",
      description: "Implementing a digital twin scenario for drones in UE5.Including heterogeneous UAVs, algorithm simulation, multi-UAV planning.",
      tech: ["Airsim", "UE5", "Python","Yolo"],
      year: "2025.08 - Present",
      image: DigitalTwinsImg
    },
    {
      title: "Game Development: 《ZeroDay》",
      role: "Lead Developer and Technical Development",
      description: "Using UE5 to develop, integrating Blueprint programming, computer graphics, 3D modeling, and animation technologies.",
      tech: ["UE5", "Blender", "C++"],
      year: "2025.01 - 2025.04",
      image: ZeroDayImg
    },
    {
      title: "Game Development: 《Poker》",
      role: "Programmer",
      description: "Using Unity to develop, Card Strategy Game.",
      tech: ["Unity", "C#","DOTWEEN"],
      year: "2025.09 - 2025.11",
      image: PokerImg
    },
    {
      title: "Computer-aided design: The Cat's Amazing Adventure",
      role: "Leaders, Modeling and Animation",
      description: "Modeling, rendering, animation, and post-production editing, blending computer graphics and digital art, resulted in a 2-minute short film.",
      tech: ["Blender", "3DsMax", "SketchUp"],
      year: "2025.01 - 2025.06",
      image: CatImg
    },
    {
      title: "Design and development of intelligent mapping and weeding robot platoons",
      role: "Participate in development",
      description: "Integrating GNSS, IMU, and visual SLAM, centimeter-level positioning was achieved, and DeepLab v3 was used for semantic segmentation of lawns/weeds. RTK positioning and motor control tests were completed to verify path planning and execution capabilities.",
      tech: ["ROS", "SLAM", "Yolo", "Python"],
      year: "2024.10 - 2025.01",
      image: WeedingTruckImg
    }
  ];

  const researchProjects = [
    {
      title: "Gesture2Prop: Conditional VR Prop Generation from Hand Gestures and Speech",
      description: "Participated in Unity development, conducting research on human-computer interaction based on VR gestures, voice, and AI combined with Quest 3.",
      year: "2025",
      status: "UIST 2025 Demos",
      tags: ["Virtual Reality", "3D Content Generation", "Hand Gesture Interaction"],
      image: Gesture2PropImg
    },
    {
      title: "Glazestopia: A User-Adaptive VR System for Experiencing Chinese Royal Glaze Craftsmanship\n",
      description: "Responsible for UE system development, researching the impact of VR systems on users' learning,\nunderstanding, and participation in the royal glassmaking process, including system usability, learning\neffectiveness, and impact on user interaction methods, and responsible for system development",
      status: "IEEEICME2026 Submission",
      year: "2025",
      tags: ["Cultural Heritage", "Virtual Reality", "Interaction Design", "Immersive Environments"],
      image: GlazestopiaIMG
    },
    {
      title: "AI-Powered Writing Assistant Leveraging Advanced Brainstorming Techniques\n",
      description: "Participated in web development, a research of an AI-driven writing assistant designed to innovatively\nintegrate user intention and knowledge, enabling deep interactions with AI agents to generate highly\npersonalized and creative content.",
      year: "2025",
      tags: ["Human-AI Collaboration", "Interactive AI Alignment", "Deliberate Discussion", "Large Language Models"],
      image: Research3Img
    }
  ];

const awards = [
    { title: "Tsinghua University Comprehensive Excellence Scholarship", year: "2025" },
    { title: "Tsinghua University Science and Technology Innovation Outstanding Scholarship", year: "2025" },
    { title: "3rd Prize, Tsinghua University Toyota Future Car Challenge", year: "2025" },
    { title: "2nd Prize, Tsinghua University Future Disaster Control Innovation Competition", year: "2025" },
    { title: "Special Prize, The 8th Tuozhu Cup Tsinghua University Software Design Competition", year: "2025" },
    { title: "Tsinghua University Science and Technology Innovation Outstanding Scholarship", year: "2024" },
    { title: "3rd-Class Scholarship, Ministry of Education for HK, Macao and Overseas Chinese Students", year: "2024" },
    { title: "Tsinghua University Science and Technology Innovation Outstanding Scholarship", year: "2024" },
    { title: "3rd Prize, National Macau University of Science and Technology Innovation Competition", year: "2024" },
    { title: "Special Prize, The 7th Tuozhu Cup Tsinghua University Software Design Competition", year: "2024" },
  ];

  return (
    <div className="min-h-screen bg-[#fcdebb] p-4 md:p-8 font-sans text-[#5a3a2a]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* ================= 左侧栏 (Updated) ================= */}
        <div className="lg:col-span-4 space-y-6">

          {/* 2. Profile Card */}
          <div className="bg-[#fffbf5] rounded-3xl p-8 shadow-sm text-center flex flex-col items-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#fcdebb]/30 to-transparent"></div>
            
            <div className="relative z-10 w-32 h-32 rounded-full p-1 bg-white shadow-lg mb-4">
              <img src={IconImg} alt="Profile" className="w-full h-full object-cover rounded-full"/>
            </div>
            
            <h1 className="text-2xl font-bold mb-1 relative z-10">{profileData.name}</h1>
            <p className="text-sm font-medium opacity-70 mb-4 max-w-xs relative z-10">
              {profileData.title}
            </p>
            
            <button className="relative z-10 w-full flex items-center justify-center gap-2 py-3 border-2 border-[#5a3a2a]/10 rounded-xl text-sm font-bold hover:bg-[#5a3a2a] hover:text-[#fffbf5] hover:border-[#5a3a2a] transition-all duration-300">
              <Download size={16} />
              Download Resume
            </button>
          </div>

          {/* 4. Education (新增) */}
          <div className="bg-[#fffbf5] rounded-3xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4 opacity-80">
              <GraduationCap size={18} />
              <h3 className="font-bold">Education</h3>
            </div>
            <div className="space-y-4">
              {profileData.education.map((edu, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <div className="mt-1 w-2 h-2 rounded-full bg-[#5a3a2a]/30"></div>
                  <div>
                    <h4 className="font-bold text-sm">{edu.school}</h4>
                    <p className="text-xs opacity-50 mt-0.5 font-mono">{edu.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#fffbf5] rounded-3xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4 opacity-80">
              <Languages size={18} />
              <h3 className="font-bold">Languages</h3>
            </div>
            <div className="space-y-3">
              {profileData.languages.map((lang, index) => (
                <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-[#fcdebb]/20 transition-colors">
                  <span className="text-sm font-bold opacity-80">{lang.name}</span>
                  <span className="text-xs font-mono opacity-80 bg-[#fcdebb]/50 px-2 py-1 rounded-md">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* 3. 修改：分类展示 Tech Stack (适配新图标) */}
          <div className="bg-[#fffbf5] rounded-3xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-5 opacity-80">
              <Cpu size={18} />
              <h3 className="font-bold">Tech Stack</h3>
            </div>
            
            <div className="space-y-5">
              {Object.entries(profileData.skills).map(([category, items], index) => (
                <div key={index}>
                  {/* 分类标题 & 图标逻辑 */}
                  <h4 className="text-xs font-bold uppercase tracking-wider opacity-50 mb-2 flex items-center gap-1.5">
                    {category === "Languages" && <Terminal size={12} />}
                    {category === "Robotics & AI" && <Bot size={12} />}
                    {category === "Game & VR" && <Gamepad2 size={12} />}
                    {category === "Web & 3D Design" && <Box size={12} />}
                    {category}
                  </h4>
                  {/* 技术标签 */}
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((skill, sIndex) => (
                      <span key={sIndex} className="px-2.5 py-1 bg-[#5a3a2a]/5 text-[#5a3a2a] rounded-md text-[11px] font-semibold hover:bg-[#5a3a2a]/10 transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Contact Info (增强版) */}
          <div className="bg-[#fffbf5] rounded-3xl p-6 shadow-sm space-y-4 text-sm">
            <h3 className="font-bold opacity-50 text-xs uppercase tracking-wider mb-2">Connect</h3>
            
            <a href={`mailto:${profileData.email}`} className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#fcdebb]/30 transition-colors group">
              <Mail size={18} className="opacity-60 group-hover:scale-110 transition-transform" />
              <div className="flex flex-col">
                <span className="text-xs opacity-50">Email</span>
                <span className="font-medium">{profileData.email}</span>
              </div>
            </a>
          </div>

        </div>

 {/* ================= 右侧内容 ================= */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Research Projects (带图片) */}
          <div className="bg-[#fffbf5] rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <FlaskConical className="w-6 h-6" />
              <h2 className="text-xl font-bold">Research Projects</h2>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {researchProjects.map((item, index) => (
                <div key={index} className="group bg-white/50 border border-[#5a3a2a]/5 rounded-2xl p-4 md:p-5 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col md:flex-row gap-5 overflow-hidden">
                  
                  {/* 图片部分 */}
                  <div className="w-full md:w-72 h-48 md:h-52 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>

                  {/* 内容部分 */}
                  <div className="flex-1 flex flex-col">
                    <div className="mb-3">
                      <h3 className="font-bold text-base mb-1 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm opacity-70 leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {item.tags.map((tag, tIndex) => (
                          <span key={tIndex} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-[#5a3a2a]/5 rounded-md font-semibold opacity-60">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* 修改部分：加入了 justify-between 实现左右两端对齐 */}
                    <div className="flex items-center justify-between text-sm  font-medium mt-auto pt-0">
                      
                      {/* 年份：自动靠左 */}
                      <span className="opacity-60">{item.year}</span>
                      
                      {/* 状态：自动靠右 */}
                      {item.status && (
                        <span className="px-2 py-0.5 bg-[#fcdebb] text-[#5a3a2a] rounded-md opacity-80">
                          {item.status}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Project Experience (带图片) */}
          <div className="bg-[#fffbf5] rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-6 h-6" />
              <h2 className="text-xl font-bold">Project Experience</h2>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {projectExperience.map((project, index) => (
                <div key={index} className="bg-white/50 border border-[#5a3a2a]/5 rounded-2xl p-4 md:p-5 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col md:flex-row gap-5 group overflow-hidden">
                  
                  {/* 1. 图片部分：变宽 (md:w-72) 并固定高度 (md:h-52) 以保持长方形比例 */}
                  <div className="w-full md:w-72 h-48 md:h-48 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  
                  {/* 内容部分 */}
                  <div className="flex-1 flex flex-col">
                    
                    {/* 头部：只保留 Title 和 Role，移除了 Year */}
                    <div className="mb-3">
                        <h3 className="font-bold text-lg group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </h3>
                        <div className="text-xs font-bold opacity-60 uppercase tracking-wide mt-1">
                          {project.role}
                        </div>
                    </div>
                    
                    <p className="text-sm opacity-70 leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    {/* 2. 底部：Tag 和 Year 同一行，左右分布 */}
                    <div className="flex items-end justify-between mt-auto pt-2 border-t border-[#5a3a2a]/5">
                      
                      {/* 左侧：Tech Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, tIndex) => (
                          <div key={tIndex} className="flex items-center gap-1 text-[10px] font-medium px-2 py-1 bg-[#5a3a2a]/5 rounded-md opacity-70">
                            <Layers size={10} />
                            {tech}
                          </div>
                        ))}
                      </div>

                      {/* 右侧：年份 (Year) */}
                      <div className="text-xs font-mono font-medium opacity-80 bg-[#fcdebb] text-[#5a3a2a] px-3 py-1 rounded-lg whitespace-nowrap ml-4">
                        {project.year}
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* 3. 新增：Honors & Awards 部分 */}
                    <div className="bg-[#fffbf5] rounded-3xl p-6 md:p-8 shadow-sm">
                      <div className="flex items-center gap-3 mb-6">
                        <Trophy className="w-6 h-6" />
                        <h2 className="text-xl font-bold">Honors & Awards</h2>
                      </div>

                      <div className="space-y-2">
                        {awards.map((award, index) => (
                          <div key={index} className="bg-white/50 border border-[#5a3a2a]/5 rounded-2xl p-5 hover:bg-white hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row justify-between sm:items-center gap-4 group">
                            <div>
                              <h3 className="font-bold text-base group-hover:text-blue-600 transition-colors">
                                {award.title}
                              </h3>
                            </div>
                            
                            <div className="min-w-[60px] text-right">
                              <span className="inline-block px-3 py-1 bg-[#fcdebb]/40 text-[#5a3a2a] rounded-lg text-xs font-bold font-mono">
                                {award.year}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          };

export default PortfolioPage;