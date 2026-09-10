// =============================================
// 所有静态数据集中管理，修改内容只需编辑此文件
// =============================================

// --- 图片资源 ---
import IconImg from '../assets/portrait.jpg';
import Gesture2PropImg from '../assets/Gesture2Prop.png';
import GlazestopiaIMG from '../assets/Glazestopia.png';
import Research3Img from '../assets/Research3.png';
import DigitalTwinsImg from '../assets/DigitalTwins.png';
import ZeroDayImg from '../assets/ZeroDay.png';
import CatImg from '../assets/Cat.png';
import PokerImg from '../assets/Poker.png';
import IntelligentCockpitImg from '../assets/IntelligentCockpit.png';
import PacmanRLImg from '../assets/PacmanRL.png';
import PathTracingImg from '../assets/PathTracing.jpg';

// --- 个人基本信息 ---
export const profileData = {
  name: "刘健泓 LAU KIN WANG",
  title: "Tsinghua University",
  emails: ["kennew2013@gmail.com", "liujianh23@mails.tsinghua.edu.cn"],
  phone:"+86 159 0756 5442",
  avatar: IconImg,

  // ✅ 新增：GPA 和领域标签
  gpa: "3.8",
  focusAreas: [
    "HCI Research",
    "Game Development",
    "Software Development",
    "3D Art",
    "Vehicle Engineering"
  ],

  languages: [
    { name: "Cantonese", level: "Native Speaker" },
    { name: "Mandarin", level: "Daily Conversation" },
    { name: "English", level: "IELTS 6.5" },
    { name: "Japanese", level: "Simple dialogue" },
  ],

  skills: {
    "Programming": ["Python", "C++", "C#", "JavaScript", "HTML/CSS", "React", "FastAPI", "DSA"],
    "Robotics & AI": ["ROS", "YOLOv5", "LangChain", "Arduino"],
    "Game & VR": ["Unreal Engine", "Unity", "VR/AR", "Scene Rendering", "Computer Graphics"],
    "3D Design": ["Blender", "SolidWorks", "Cinema 4D", "3ds Max","Houdini"],
  },

education: [
    {
      school: "Tsinghua University",
      detail: "GPA 3.8/4.0 · Top 15%",
      degree: "School of Vehicle and Mobility ",
      year: "2023.09 - 2027.06",
    },
    {
      school: "Nanyang Technological University",
      detail: "Exchange",
      degree: "School of Art, Design and Media",
      year: "2026.01 - 2026.05",
    },
  ],
};

// --- 实习经历 ---
export const internships = [
  {
    org: "Toyota Motor Engineering & Manufacturing\nR&D (Shanghai) — Robotaxi Project",
    role: "Technical Intern · Autonomous Driving",
    year: "2026.07 – 08",
  },
  {
    org: "Tsinghua University Future Laboratory\nHuman Habitat Interaction Group",
    role: "Research Intern",
    year: "2026.05 – 07",
  },
  {
    org: "Nanyang Technological University Cognitive Interface Lab",
    role: "Visiting Student",
    year: "2026.03 – 05",
  },
];

// --- 科研项目 ---
export const researchProjects = [
  {
    title: "Gesture2Prop: Conditional VR Prop Generation from Hand Gestures and Speech",
    description:
      "Participated in Unity development, conducted research on human-computer interaction based on VR gestures, voice, and AI combined with Quest 3.",
    year: "2025",
    status: "UIST Adjunct '25",
    citation: {
      authors: ["Zhihao Yao*", "Xiwen Yao*", "Qirui Sun", "Haowei Xiong", "Kin Wang Lau", "Haipeng Mi†"],
      highlightAuthor: "Kin Wang Lau",
      publisher: "ACM",
      doi: "https://doi.org/10.1145/3746058.3759017",
    },
    tags: ["Virtual Reality", "3D Content Generation", "Hand Gesture Interaction"],
    image: Gesture2PropImg,
  },
  {
    title: "Glazestopia: A User-Adaptive VR System for Experiencing Chinese Royal Glaze Craftsmanship",
    description:
      "Responsible for UE system development, researching the impact of VR systems on users' learning, understanding, and participation in the royal glassmaking process, including system usability, learning effectiveness, and impact on user interaction methods, and responsible for system development.",
    status: "IEEE ICME 2026 · Presented",
    citation: {
      authors: ["Yadi Liu", "Shaocong Wang", "Jianhong Liu", "Junyi Li", "Yiming Fan", "Qinyu Chen", "Minjing Yu", "Yinghua Ma", "Yong-jin Liu"],
      highlightAuthor: "Jianhong Liu",
      publisher: null,
      doi: null,
    },
    year: "2026",
    tags: ["Cultural Heritage", "Virtual Reality", "Interaction Design", "Immersive Environments"],
    image: GlazestopiaIMG,
  },
];

// --- 项目经历 ---
export const projectExperience = [
  {
    category: "research",
    title: "AIGC and VR-Based Intelligent Cockpit Interaction Simulation Platform",
    role: "VR Prototype Development and Multimodal Interaction",
    description:
      "Developing a Tsinghua–Mercedes-Benz intelligent cockpit prototyping platform that combines voice and gesture interaction with LLM-based intent recognition, allowing designers to create and refine in-vehicle experiences directly in VR.",
    tech: ["UE5", "Virtual Reality", "Multimodal Interaction", "AIGC", "LLM"],
    year: "2026 · In Progress",
    image: IntelligentCockpitImg,
  },
  {
    category: "research",
    title: "Building a Low-Altitude Mirror: Architecture and Verification of a Low-Altitude Transportation System Based on Digital Twins",
    role: "Algorithm Research and System Development",
    description:
      "Implementing a digital twin scenario for drones in UE5. Including heterogeneous UAVs, algorithm simulation, multi-UAV planning.",
    tech: ["Airsim", "UE5", "Python"],
    year: "2025.08 - Present",
    image: DigitalTwinsImg,
  },
  {
    category: "research",
    title: "AI-Powered Writing Assistant Leveraging Advanced Brainstorming Techniques",
    role: "Web Development and Research",
    description:
      "Participated in web development, a research of an AI-driven writing assistant designed to innovatively integrate user intention and knowledge, enabling deep interactions with AI agents to generate highly personalized and creative content.",
    tech: ["Human-AI Collaboration", "Interactive AI Alignment", "Deliberate Discussion", "Large Language Models"],
    year: "2025",
    image: Research3Img,
  },
  {
    category: "fun",
    title: "Pacman AI: Classical Search and Reinforcement Learning",
    role: "Algorithm Implementation and Evaluation",
    description:
      "Implemented classical search with DFS, BFS, UCS, and A*, followed by value iteration, Q-learning, and approximate Q-learning. Added weight persistence and cross-map evaluation.",
    tech: ["Python", "Search Algorithms", "Reinforcement Learning", "Q-Learning"],
    year: "2026",
    image: PacmanRLImg,
  },
  {
    category: "fun",
    title: "Path Tracing Renderer",
    role: "Computer Graphics Course Project",
    description:
      "Implemented a CPU-based renderer featuring ray casting, Whitted-style reflection and refraction, path tracing, area lights, soft shadows, Russian roulette, BVH acceleration",
    tech: ["C++", "Path Tracing"],
    year: "2026",
    image: PathTracingImg,
  },
  {
    category: "fun",
    title: "Game Development: 《Poker》",
    visible: false,
    role: "Programmer",
    description: "Using Unity to develop, Card Strategy Game.",
    tech: ["Unity", "C#", "DOTWEEN"],
    year: "2025.09 - 2025.11",
    image: PokerImg,
  },
  {
    category: "fun",
    title: "Game Development: 《ZeroDay》",
    role: "Lead Developer and Technical Development",
    description:
      "Using UE5 to develop, integrating Blueprint programming, computer graphics, 3D modeling, and animation technologies.",
    tech: ["UE5", "Blender", "C++"],
    year: "2025.01 - 2025.04",
    image: ZeroDayImg,
  },
  {
    category: "fun",
    title: "Computer-aided design: The Cat's Amazing Adventure",
    role: "Leaders, Modeling and Animation",
    description:
      "Modeling, rendering, animation, and post-production editing, blending computer graphics and digital art, resulted in a 2-minute short film.",
    tech: ["Blender", "3DsMax", "SketchUp"],
    year: "2025.01 - 2025.06",
    image: CatImg,
  },
];

// --- 荣誉与奖项 ---
export const awards = [
  { title: "1st Prize, Beijing & Tsinghua Virtual Simulation Creative Design Competition", year: "2026" },
  { title: "1st Prize, The 2nd Toyota Future Car Challenge", year: "2026" },
  { title: "2nd Prize, Tsinghua 'Challenge Cup' Tech Works Competition (Humanities Track)", year: "2026" },
  { title: "3rd Prize, Tsinghua 'Challenge Cup' Tech Works Competition (Info Track)", year: "2026" },

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
