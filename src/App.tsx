/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  Mail, 
  MapPin, 
  Calendar, 
  GraduationCap, 
  Briefcase, 
  Languages, 
  Award, 
  Linkedin, 
  Instagram, 
  Youtube, 
  Facebook, 
  Twitter,
  ChevronRight,
  Sun,
  Camera,
  Plane,
  Heart,
  Sparkles,
  Info,
  X,
  Coins,
  Video
} from "lucide-react";
import { AnimatePresence } from "motion/react";

const Section = ({ title, children, icon: Icon, delay = 0, className = "" }: { title: string, children: React.ReactNode, icon: any, delay?: number, className?: string }) => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`mb-8 ${className}`}
  >
    <div className="flex items-center gap-3 mb-6">
      <div className="p-3 bg-white rounded-2xl text-[#A9C47F] shadow-[0_4px_12px_-4px_rgba(169,196,127,0.4)] border border-[#E5EAD0]">
        <Icon size={22} strokeWidth={2.5} />
      </div>
      <h2 className="text-2xl font-black text-[#2D3A1F] tracking-tight relative">
        {title}
        <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#A9C47F] rounded-full opacity-30"></span>
      </h2>
    </div>
    {children}
  </motion.section>
);

const DecorativeAvocado = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 120" className={`w-16 h-20 opacity-10 pointer-events-none fill-[#A9C47F] ${className}`}>
    <path d="M50 5C30 5 15 25 15 55C15 85 30 115 50 115C70 115 85 85 85 55C85 25 70 5 50 5Z" />
    <circle cx="50" cy="75" r="18" className="fill-[#7B5E4D]" />
  </svg>
);

export default function App() {
  const [selectedItinerary, setSelectedItinerary] = React.useState<any>(null);

  const travelDays = [
    { 
      id: 1, 
      title: "泰國六天五夜", 
      icon: Plane, 
      city: "清萊", 
      desc: "清萊、美塞與大其力的深度整備之旅", 
      color: "bg-[#D4E2B2]", 
      link: null,
      details: {
        budget: "30,000 元台幣",
        days: [
          {
            day: "Day 1：抵達清萊 — 建立後勤基地",
            content: "行程： 抵達清萊機場 (CEI) 後，直接在機場計程車櫃台或使用 Grab 叫車前往市中心飯店。辦理入住後，前往「清萊第一巴士站」確認後天往美塞的車次。晚上去清萊夜市 (Night Bazaar) 補齊基本生活用品。",
            transport: "交通： 機場到市區約 20 分鐘。Grab 價格約 200 泰銖，藍色機場巴士 CR Bus 僅需 20 泰銖。",
            todo: "必辦： 購買泰國長期電信卡、換足泰銖現鈔。"
          },
          {
            day: "Day 2：文化洗禮 — 清萊經典巡禮",
            content: "行程： 早上先去 Khao Soy Maesai 吃最道地的泰北咖哩麵。下午依序跑完「白廟」與「藍廟」。這兩座廟都在市區近郊，視覺張力極強，是進入緬甸前最值得留念的景點。",
            transport: "交通： 建議包一台雙條車 (Songthaew) 或 Grab 往返。白廟門票 100 泰銖。",
            todo: "必辦： 採買防蚊液、腸胃藥與個人常備藥。"
          },
          {
            day: "Day 3：推進邊界 — 清萊 ➔ 美塞",
            content: "行程： 上午參觀「黑屋博物館 (黑廟)」。下午前往第一巴士站搭車前往泰國最北端城市「美塞 (Mae Sai)」。抵達美塞後入住靠近口岸的旅館。",
            transport: "交通： 清萊到美塞可搭乘 Local Bus (無空調，45 泰銖) 或 Minivan (有空調，100 泰銖)，車程約 2 小時。抵達美塞巴士站後，轉搭藍色雙條車 (20 泰銖) 抵達口岸。",
            todo: "必辦： 複印所有證件（護照、簽證、工作合約），實體本與數位檔分開存放。"
          },
          {
            day: "Day 4：地理實測 — 金三角區域",
            content: "行程： 從美塞包車前往「金三角地標」。參觀「鴉片博物館」，了解這個區域的歷史背景。站在河岸觀察三國交界地形，對即將進入的地理環境建立空間感。",
            transport: "交通： 美塞到金三角約 30 分鐘，建議與司機談好來回包車，約 500-800 泰銖。",
            todo: "必辦： 下載 Google Maps 涵蓋大其力周邊 50 公里的「離線地圖」。"
          },
          {
            day: "Day 5：最後整備 — 備戰狀態",
            content: "行程： 上午去「翠峰茶園」享受最後的精緻下午茶，下午回美塞市區做最後的物資衝刺。購買大容量行動電源、瓶裝水、乾糧。晚上與工作對接人確認翌日交接細節。",
            transport: "交通： 美塞市區內步行或搭雙條車即可。",
            todo: "必辦： 確保手機已安裝 2 套以上 VPN，測試在泰國端是否能正常翻牆。"
          },
          {
            day: "Day 6：正式跨國 — 進入緬甸大其力",
            content: "行程： 08:00 準時抵達美塞海關辦理泰國出境。步行跨過「友誼大橋」。進入緬甸大其力海關，提交 e-Visa 與護照查驗。10:30 前正式踏入緬甸與接頭人碰面，轉往工作地點。",
            transport: "交通： 步行跨橋約 10 分鐘。進入大其力後，搭乘當地嘟嘟車前往指定地點，車費約 50-100 泰銖。",
            todo: "必辦： 入境後第一時間確認手機漫遊或當地卡訊號，並將定位傳給台灣緊急聯絡人。"
          }
        ]
      }
    },
    { id: 2, title: "清萊至大其力", icon: Sun, city: "清萊", desc: "古色古香的街道與手工藝體驗", color: "bg-[#C2D5A8]", link: "https://a111182116-beep.github.io/1234/" },
    { id: 3, title: "清萊至大其力", icon: Camera, city: "清萊", desc: "漫步鵝卵石海灘，欣賞太平洋海景", color: "bg-[#B1C89E]", link: "https://a111182116-beep.github.io/2234/" },
    { id: 4, title: "清萊至大其力", icon: Heart, city: "清萊", desc: "雄偉的大理石峽谷與自然景觀", color: "bg-[#A0BB94]", link: "https://a111182116-beep.github.io/4321/" },
  ];

  return (
    <div className="min-h-screen bg-[#F7F9ED] font-sans selection:bg-[#D4E2B2] text-[#2D3A1F]">
      {/* Dynamic Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden opacity-40">
        <DecorativeAvocado className="absolute top-20 left-10 rotate-12 scale-150" />
        <DecorativeAvocado className="absolute bottom-40 right-10 -rotate-12 scale-125" />
        <DecorativeAvocado className="absolute top-1/2 left-1/3 rotate-45 scale-75" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-[#A9C47F]/10 rounded-full blur-3xl"></div>
      </div>

      {/* Modern Compact Navbar */}
      <nav className="bg-white/60 backdrop-blur-xl border-b border-[#E5EAD0] sticky top-0 z-50 px-6 py-4 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-3">
          <motion.div 
            whileHover={{ rotate: 15 }}
            className="w-10 h-10 bg-[#A9C47F] rounded-2xl flex items-center justify-center text-white"
          >
            <Sparkles size={20} />
          </motion.div>
          <span className="text-lg font-black tracking-tighter text-[#2D3A1F]">TENG HSINPEI</span>
        </div>
        <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#A9C47F] hidden sm:block">
          Maritime Professional Portfolio
        </div>
      </nav>

      <main className="container mx-auto px-4 md:px-8 py-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Personal Profile & Travel (Sticky on large screens) */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
            
            {/* Profile Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_-15px_rgba(45,58,31,0.15)] border border-[#E5EAD0] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#F0F4E1] rounded-bl-[100px] -z-0"></div>
              
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-40 h-40 rounded-full border-4 border-[#A9C47F] p-1 mb-6 bg-white shadow-xl relative group">
                  <img 
                    referrerPolicy="no-referrer"
                    src="./profile.jpg" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = ".profile.jpg";
                    }}
                    alt="鄧欣佩" 
                    className="w-full h-full rounded-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 rounded-full bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <Camera size={24} className="text-white drop-shadow-md" />
                  </div>
                </div>
                
                <h1 className="text-3xl font-black mb-2 text-[#2D3A1F]">鄧欣佩</h1>
                <div className="text-sm text-[#5C7040] font-bold mb-6 text-center space-y-1">
                  <div className="flex items-center justify-center gap-2"><Calendar size={14} className="text-[#A9C47F]" /> 07.25 | Leo | Type B</div>
                  <div className="flex items-center justify-center gap-2 tracking-tight"><Mail size={14} className="text-[#A9C47F]" /> A111182116@nkust.edu.tw</div>
                </div>

                <div className="flex gap-3 mb-8">
                  {[Linkedin, Instagram, Youtube, Facebook, Twitter].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-xl bg-[#F7F9ED] flex items-center justify-center text-[#2D3A1F] hover:bg-[#A9C47F] hover:text-white transition-all transform hover:-translate-y-1">
                      <Icon size={18} />
                    </a>
                  ))}
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E5EAD0] to-transparent mb-8"></div>

                {/* Travel Buttons - Enlarged */}
                <div className="w-full space-y-4">
                  <h3 className="text-xs font-black uppercase tracking-[0.22em] text-[#A9C47F] mb-4 text-center">行程規劃・目的地</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {travelDays.map((day) => {
                      const Content = (
                        <>
                          <div className={`p-4 rounded-2xl ${day.color} text-[#2D3A1F] shadow-sm group-hover:scale-110 transition-transform`}>
                            <day.icon size={24} strokeWidth={2.5} />
                          </div>
                          <div>
                            <div className="text-[10px] font-black text-[#A9C47F] mb-0.5 uppercase tracking-widest">{day.city}</div>
                            <div className="text-lg font-black text-[#2D3A1F] leading-tight">{day.title}</div>
                          </div>
                        </>
                      );

                      if (day.link) {
                        return (
                          <a 
                            key={day.id} 
                            href={day.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-6 bg-[#F7F9ED] rounded-[2rem] border border-[#E5EAD0] hover:border-[#A9C47F] group transition-all text-left flex items-center gap-5 shadow-sm hover:shadow-md cursor-pointer"
                          >
                            {Content}
                          </a>
                        );
                      }

                      return (
                        <button 
                          key={day.id} 
                          onClick={() => day.details && setSelectedItinerary(day)}
                          className="p-6 bg-[#F7F9ED] rounded-[2rem] border border-[#E5EAD0] hover:border-[#A9C47F] group transition-all text-left flex items-center gap-5 shadow-sm hover:shadow-md"
                        >
                          {Content}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Detailed Info Sections */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Introduction Card */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#A9C47F] rounded-3xl p-8 text-white relative overflow-hidden shadow-lg shadow-[#A9C47F]/20"
            >
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              <h2 className="text-xl font-black mb-4 flex items-center gap-2">
                <div className="w-8 h-px bg-white/40"></div>
                HELLO THERE
              </h2>
              <p className="text-lg md:text-xl font-medium leading-relaxed opacity-95">
                您好，我是欣佩，目前就讀於國立高雄科技大學航運技術系航海科五專四年級。我具有認真負責與獨立思考的能力，做事細心謹慎，不輕易放棄，並持續學習與精進專業。
              </p>
            </motion.section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="space-y-8">
                <Section title="教育背景" icon={GraduationCap}>
                  <div className="bg-white rounded-2xl p-5 border border-[#E5EAD0] hover:shadow-md transition-shadow">
                    <div className="text-[10px] font-black text-[#A9C47F] mb-1 uppercase tracking-wider">2022-09 ~ 2027-06</div>
                    <h3 className="text-lg font-black text-[#2D3A1F]">高科大 航海科</h3>
                    <p className="text-xs font-bold text-[#5C7040]">航運技術系・五專四年級</p>
                  </div>
                </Section>

                <Section title="工作經驗" icon={Briefcase}>
                  <div className="space-y-4">
                    <div className="bg-white rounded-2xl p-5 border border-[#E5EAD0] hover:shadow-md transition-shadow">
                      <div className="text-[10px] font-black text-[#A9C47F] mb-1 uppercase tracking-wider">2023/09 - 2025/11</div>
                      <h3 className="text-lg font-black text-[#2D3A1F]">MUMU POKE</h3>
                      <p className="text-xs font-bold text-[#5C7040]">服務人員 / PT</p>
                    </div>
                    <div className="bg-white rounded-2xl p-5 border border-[#E5EAD0] hover:shadow-md transition-shadow">
                      <div className="text-[10px] font-black text-[#A9C47F] mb-1 uppercase tracking-wider">2025/10 - 2026/03</div>
                      <h3 className="text-lg font-black text-[#2D3A1F]">定食八</h3>
                      <p className="text-xs font-bold text-[#5C7040]">服務人員 / PT</p>
                    </div>
                    <div className="bg-white rounded-2xl p-5 border border-[#E5EAD0] hover:shadow-md transition-shadow">
                      <div className="text-[10px] font-black text-[#A9C47F] mb-1 uppercase tracking-wider">2026/04 - Present</div>
                      <h3 className="text-lg font-black text-[#2D3A1F]">Ocean bakery</h3>
                      <p className="text-xs font-bold text-[#5C7040]">服務人員 / PT</p>
                    </div>
                  </div>
                </Section>

                <Section title="語言專長" icon={Languages}>
                  <div className="flex gap-4">
                    <div className="flex-1 bg-[#2D3A1F] p-4 rounded-2xl text-white text-center">
                      <div className="text-[10px] font-black opacity-60 mb-1 uppercase">TAIWANESE</div>
                      <div className="text-lg font-black">台語精通</div>
                    </div>
                    <div className="flex-1 bg-white p-4 rounded-2xl text-[#2D3A1F] border border-[#E5EAD0] text-center">
                      <div className="text-[10px] font-black text-[#A9C47F] mb-1">ENGLISH</div>
                      <div className="text-lg font-black">英語略懂</div>
                    </div>
                  </div>
                </Section>

                <Section title="旅遊影片" icon={Video}>
                  <div className="grid grid-cols-1 gap-4">
                    <a 
                      href="https://www.youtube.com/watch?v=JkDQdkX67Zk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="aspect-video bg-[#FDFEF9] rounded-[2.5rem] border-4 border-dashed border-[#E5EAD0] flex flex-col items-center justify-center text-[#A9C47F] group hover:border-[#A9C47F] transition-all relative overflow-hidden shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] cursor-pointer block"
                    >
                      <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#A9C47F] shadow-md group-hover:scale-110 transition-transform relative z-10">
                        <Video size={32} fill="currentColor" className="opacity-80" />
                      </div>
                      <div className="relative z-10 mt-4 text-center">
                        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#2D3A1F]">點擊查看旅遊紀錄</p>
                        <p className="text-[10px] font-bold text-[#5C7040] opacity-50 mt-1">YouTube 影片連結</p>
                      </div>
                      {/* Placeholder for future video/thumbnail */}
                      <div className="absolute inset-0 bg-[#A9C47F]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </a>
                  </div>
                </Section>
              </div>

              <div className="space-y-8">
                <Section title="專業海事證照" icon={Award}>
                  <div className="space-y-4">
                    {[
                      { name: "基本安全培訓 (BST)", code: "BST" },
                      { name: "進階滅火培訓", code: "AFFF" },
                      { name: "救生艇筏及救難艇操縱", code: "PSC" },
                      { name: "保全意識/職責", code: "SA/SDSD" },
                      { name: "醫療急救訓練", code: "MFA" }
                    ].map((cert, i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-[#E5EAD0] group hover:bg-[#F7F9ED] transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-[#A9C47F]"></div>
                          <span className="font-bold text-[#2D3A1F] text-sm">{cert.name}</span>
                        </div>
                        <span className="text-[10px] font-black text-[#A9C47F] bg-[#A9C47F]/10 px-2 py-1 rounded-md">{cert.code}</span>
                      </div>
                    ))}
                  </div>
                </Section>

                <Section title="個人3D公仔" icon={Sparkles}>
                  <a 
                    href="https://studio.tripo3d.ai/workspace/generate/female-character-wearing-beige-knit-sweater-dress-and-black-knee-high-7a36ff37-63c8-4327-b4d7-ea9b1393b038"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FDFEF9] rounded-[3rem] border-4 border-dashed border-[#A9C47F]/30 aspect-square flex flex-col items-center justify-center text-[#A9C47F] group hover:border-[#A9C47F] transition-all overflow-hidden relative shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] cursor-pointer block"
                  >
                    <img 
                      referrerPolicy="no-referrer"
                      src="/Gemini_Generated_Image_c816snc816snc816.png" 
                      alt="3D Avatar Result"
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 z-10"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                    <div className="flex flex-col items-center justify-center p-10 text-center group-hover:scale-105 transition-transform">
                      <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#F7F9ED] to-white flex items-center justify-center mb-6 shadow-md border border-[#E5EAD0]/50 relative">
                        <div className="absolute inset-0 rounded-full bg-[#A9C47F]/5 animate-pulse"></div>
                        <Sparkles size={56} className="text-[#A9C47F] relative z-10" strokeWidth={1} />
                      </div>
                      <h4 className="text-sm font-black uppercase tracking-[0.3em] text-[#2D3A1F] mb-3">3D 造型成果</h4>
                      <p className="text-[11px] font-bold text-[#5C7040] opacity-60 leading-relaxed max-w-[200px]">
                         點擊查看 3D 模型 <br/>
                        <span className="text-[#A9C47F]">"Tripo AI 成果展示"</span>
                      </p>
                    </div>
                  </a>
                </Section>

                <Section title="公仔原圖" icon={Camera}>
                  <div className="bg-[#FDFEF9] rounded-[3rem] border-4 border-dashed border-[#E5EAD0] aspect-[3/4] flex flex-col items-center justify-center text-[#A9C47F] group hover:border-[#A9C47F] transition-all relative overflow-hidden shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]">
                     <img 
                       referrerPolicy="no-referrer"
                       src="./avatar_3d.jpg" 
                       alt="Your Photo"
                       className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 z-10"
                       onError={(e) => {
                         (e.target as HTMLImageElement).style.display = 'none';
                       }}
                     />
                     <div className="flex flex-col items-center justify-center p-10 text-center group-hover:scale-105 transition-transform">
                        <div className="w-20 h-20 rounded-3xl bg-[#F7F9ED] flex items-center justify-center mb-4 shadow-sm border border-[#E5EAD0]/50 -rotate-3 group-hover:rotate-0 transition-transform">
                          <Camera size={40} strokeWidth={1.5} className="text-[#A9C47F]" />
                        </div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-[#A9C47F] mb-1">avatar_3d.jpg</h4>
                        <p className="text-[11px] font-bold text-[#2D3A1F]">公仔原圖 (您的照片)</p>
                     </div>
                  </div>
                </Section>
              </div>

            </div>
          </div>
        </div>
      </main>

      <footer className="py-20 bg-[#FDFEF9] text-center border-t border-[#E5EAD0]">
        <DecorativeAvocado className="mx-auto mb-6 opacity-30 grayscale" />
        <p className="text-[10px] font-black tracking-[0.5em] text-[#A9C47F] uppercase mb-1">Maritime Portfolio • 2026</p>
        <p className="text-[#5C7040] text-[10px] font-bold opacity-30 italic">Crafted with Avocado Vibes</p>
      </footer>

      {/* Itinerary Modal */}
      <AnimatePresence>
        {selectedItinerary && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItinerary(null)}
              className="absolute inset-0 bg-[#2D3A1F]/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-[#F7F9ED] rounded-[3rem] shadow-2xl overflow-hidden flex flex-col max-h-[85vh] border-4 border-white"
            >
              {/* Modal Header */}
              <div className="p-8 pb-4 flex justify-between items-start bg-white/50 border-b border-[#E5EAD0]">
                <div className="flex items-center gap-4">
                  <div className={`p-4 rounded-2xl ${selectedItinerary.color} text-[#2D3A1F]`}>
                    <selectedItinerary.icon size={28} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black text-[#2D3A1F] leading-tight">{selectedItinerary.title}</h2>
                    <div className="flex items-center gap-2 mt-1">
                      <Coins size={14} className="text-[#A9C47F]" />
                      <span className="text-xs font-bold text-[#5C7040]">預算：{selectedItinerary.details.budget}</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedItinerary(null)}
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#2D3A1F] hover:bg-[#FF6B6B] hover:text-white transition-all shadow-sm"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="flex-1 overflow-y-auto p-8 pt-6 space-y-8 scrollbar-hide">
                {selectedItinerary.details.days.map((item: any, idx: number) => (
                  <div key={idx} className="relative pl-8 border-l-2 border-dashed border-[#A9C47F]/30">
                    <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-[#A9C47F] border-4 border-[#F7F9ED]"></div>
                    <h3 className="text-lg font-black text-[#2D3A1F] mb-3 bg-[#E5EAD0]/30 inline-block px-3 py-1 rounded-lg">
                      {item.day}
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-white rounded-2xl p-5 border border-[#E5EAD0] shadow-sm">
                        <div className="text-[10px] font-black text-[#A9C47F] mb-2 uppercase tracking-widest">行程內容</div>
                        <p className="text-sm font-bold text-[#5C7040] leading-relaxed">{item.content}</p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-[#FDFEF9] rounded-xl p-4 border border-[#E5EAD0]/50">
                          <div className="text-[9px] font-black text-[#A9C47F] mb-1 uppercase tracking-widest">交通建議</div>
                          <p className="text-xs font-bold text-[#5C7040]">{item.transport}</p>
                        </div>
                        <div className="bg-[#A9C47F]/5 rounded-xl p-4 border border-[#A9C47F]/20">
                          <div className="text-[9px] font-black text-[#A9C47F] mb-1 uppercase tracking-widest">特別提醒</div>
                          <p className="text-xs font-bold text-[#5C7040]">{item.todo}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Modal Footer */}
              <div className="p-6 bg-white/50 border-t border-[#E5EAD0] text-center">
                <p className="text-[10px] font-black tracking-[0.2em] text-[#A9C47F] uppercase opacity-50">
                  Enjoy your maritime adventure
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
