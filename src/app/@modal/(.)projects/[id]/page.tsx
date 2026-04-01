"use client";

import { useRouter } from "next/navigation";
import { use } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/constants/projects";
import { ExternalLink } from "lucide-react";
import { FaGithub } from 'react-icons/fa';
import { RiVercelLine } from "react-icons/ri";
import { FaClockRotateLeft } from "react-icons/fa6";

export default function ProjectModal({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);

  const currentIndex = PROJECTS.findIndex((p) => p.id === id);
  const project = PROJECTS[currentIndex];

  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  //繊維用関数:replace
  const navigateToProject = (projectId: string) => {
    router.replace(`/projects/${projectId}`, { scroll: false });
  }

if(!project) return null;

  // old params
  // const resolvedParams = use(params);
  // const currentId = resolvedParams.id;
  // const project = PROJECTS.find((p) => p.id === currentId);


  return (
    <AnimatePresence mode="wait">
      {/* 背景オーバーレイ: ライトモードに合わせて明るいブラーに */}
      <motion.div
        key={id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-white/60 backdrop-blur-md p-4"
        onClick={() => router.back()}
      >
        {/* モーダル本体 */}
        <motion.div
          key={id}
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-6xl h-[90vh] bg-white text-gray-900 rounded-3xl overflow-hidden flex flex-col shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-gray-100"
          onClick={(e) => e.stopPropagation()}
        >
          
          {/* --- Header / Close Area --- */}
          <div className="flex justify-end p-6 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
            <button 
              onClick={() => router.back()} 
              className="text-2xl text-gray-400 hover:text-black hover:rotate-90 transition-all duration-300 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100"
            >
              ×
            </button>
          </div>

          <div className="flex flex-1 overflow-hidden flex-col md:flex-row">
            {/* main (左側) */}
            <div key={`images-${id}`} className="flex-[2] m-6 flex flex-col gap-4 overflow-y-auto pr-2 custom-scrollbar">

              {project.images?.map((img, index) => (
                <motion.div
                  key={`${id}-${index}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex flex-col gap-6"
                >
                  {/* 画像本体 */}
                  <div className="relative w-full bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden shadow-sm shadow-blue-50/50">
                    <Image
                      src={img}
                      alt={`${project.title} screenshot ${index + 1}`}
                      width={1200} 
                      height={800} // 仮の値。実際は画像の比率に合わせるsizes="100vw"
                      style={{
                        width: '100%',
                        height: 'auto',
                      }}
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                      priority={index === 0} // 最初の画像だけ優先読み込み
                    />
                  </div>

                  {/* デザイナーとしての一言コメント（データの構造変更が必要ですが、あると説得力が増します） */}
                  {project.imageComments && project.imageComments[index] && (
                    <p className="text-gray-500 text-sm leading-relaxed max-w-2xl mx-auto border-l-2 border-blue-100 pl-4">
                      {project.imageComments[index]}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>

            {/* data area (右側): 清潔感のあるタイポグラフィ */}
            <aside className="flex-1 p-10 overflow-y-auto bg-white border-l border-gray-50">
              <h3 className="text-gray-500 text-3xl font-bold mb-2 uppercase tracking-[0.2em] font-features-['palt']">{project.title}</h3>
              
              <div className="space-y-6 text-sm">

                <section>
                  {project.category?.map((cat) => (
                        <span key={cat} className="text-[14px] px-2 py-1 bg-lime-500 text-white rounded-full font-bold uppercase">
                          {cat}
                        </span>
                      ))}
                </section>

                <section>
                  <p className="text-gray-400 text-[16px] mb-2 uppercase font-bold tracking-widest">Released Date</p>
                  <p className=" flex items-center gap-2 font-mono text-sm text-gray-800 border-b border-gray-100 pb-2"><FaClockRotateLeft /> {project.date}</p>
                </section>

                <section>
                  <p className="text-purple-600 font-bold text-[16px] mb-2 uppercase tracking-widest">My Role</p>
                  <p className="text-gray-700 text-base font-medium">{project.job}</p>
                </section>

                <section>
                  <p className="text-purple-600 font-bold text-[16px] mb-2 uppercase tracking-widest">Tech Stack</p>
                  <p className="text-gray-700 text-base font-medium">{project.application}</p>
                </section>

                <section>
                  <p className="text-purple-600 font-bold text-[16px] mb-5 uppercase tracking-widest">Brand Identity</p>
                  <div className="flex gap-4">
                    {project.pickColors?.map((color, index) => (
                      <motion.div 
                        key={`${color}-${index}`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.4 + (index * 0.1) }}
                        className="w-12 h-12 rounded-2xl border border-gray-100 shadow-sm cursor-help relative group/color transition-transform active:scale-90"
                        style={{ backgroundColor: color }}
                        whileHover={{ y: -5 }}
                      >
                        <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[10px] px-3 py-1.5 rounded-lg opacity-0 group-hover/color:opacity-100 transition-opacity whitespace-nowrap font-mono shadow-xl z-20">
                          {color}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </section>

                <section className="pt-10 border-t border-gray-100">
                  <p className="text-gray-400 text-[16px] mb-3 uppercase font-bold tracking-widest">Core Concept</p>
                  <p className="text-gray-600 leading-relaxed font-normal text-base">
                    {project.concept}
                  </p>
                </section>

                <section className="pt-10 border-t border-gray-100 flex flex-col gap-3">
                  <p className="text-gray-400 text-[16px] mb-1 uppercase font-bold tracking-widest">Links</p>
                  <div className="flex gap-4">
                    {/* GitHubボタン */}
                    
                    {project.github && (<a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-900 text-white rounded-xl text-xs font-bold hover:bg-gray-700 transition-all active:scale-95 shadow-sm"
                    >
                      <FaGithub size={16} />
                      GitHub
                    </a>
                    )}

                    {/* Vercel / Live Demoボタン */}
                    {project.deploy && (
                      <a 
                        href={project.deploy} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-500 transition-all active:scale-95 shadow-md shadow-blue-100"
                      >
                        <RiVercelLine size={16} />
                        Vercel
                      </a>
                    )}

                    {/* 通常のExternalLink */}
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#874abd] text-white rounded-xl text-xs font-bold hover:bg-[#AB78D8] transition-all active:scale-95 shadow-md shadow-blue-100"
                      >
                        <ExternalLink size={16} />
                        Link
                      </a>
                    )}
                  </div>
                </section>
              </div>
            </aside>
          </div>

          {/* footer: リニアナビゲーション */}
          <footer className="p-6 border-t border-gray-50 flex justify-between items-center bg-white">
            {/* PREV ボタン */}
            <button 
              onClick={() => navigateToProject(prevProject.id)}
              className="group flex flex-col items-start gap-1 transition-all outline-none cursor-pointer"
            >
              <span className="text-[10px] font-bold tracking-[0.2em] text-gray-300 group-hover:text-blue-600 transition-colors">
                PREVIOUS
              </span>
              <span className="text-xs font-bold text-gray-400 group-hover:text-gray-900 transition-colors">
                {prevProject.title}
              </span>
            </button>

            <div className="hidden sm:block text-[10px] font-black tracking-[0.5em] text-gray-200">
              TKMS-LOG // ARCHIVE
            </div>

            {/* NEXT ボタン */}
            <button 
              onClick={() => navigateToProject(nextProject.id)}
              className="group flex flex-col items-end gap-1 transition-all text-right outline-none cursor-pointer"
            >
              <span className="text-[10px] font-bold tracking-[0.2em] text-gray-300 group-hover:text-blue-600 transition-colors">
                NEXT PROJECT
              </span>
              <span className="text-xs font-bold text-gray-400 group-hover:text-gray-900 transition-colors">
                {nextProject.title}
              </span>
            </button>
          </footer> 
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}