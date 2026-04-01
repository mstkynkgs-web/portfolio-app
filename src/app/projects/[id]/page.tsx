"use client";

import { use, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "@/constants/projects";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { FaGithub, FaClockRotateLeft } from 'react-icons/fa6';
import { RiVercelLine } from "react-icons/ri";

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);

  const currentIndex = PROJECTS.findIndex((p) => p.id === id);
  const project = PROJECTS[currentIndex];

  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  // キーボードナビゲーション
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") router.push(`/projects/${prevProject.id}`);
      if (e.key === "ArrowRight") router.push(`/projects/${nextProject.id}`);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevProject.id, nextProject.id, router]);

  if (!project) return null;

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-blue-50">
      {/* 1. Header Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-50">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <Link href="/" className="font-black tracking-[0.4em] text-[10px] hover:text-blue-600 transition-colors">
            TKMS-LOG // ARCHIVE
          </Link>
          <Link 
            href="/" 
            className="group flex items-center gap-2 text-[10px] font-bold text-gray-400 hover:text-black transition-colors uppercase tracking-widest"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Gallery
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-40 max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* 2. Left Side: Long Scroll Images (C案) */}
          <motion.div 
            key={`images-${id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-[2] flex flex-col gap-24"
          >
            {project.images?.map((img, index) => (
              <div key={`${img}-${index}`} className="flex flex-col gap-8">
                <div className="relative w-full bg-gray-50 rounded-[32px] border border-gray-100 overflow-hidden shadow-sm shadow-blue-50/20">
                  <Image
                    src={img}
                    alt={`${project.title} detail ${index + 1}`}
                    width={1600}
                    height={1000}sizes="100vw"
                    style={{
                      width: '100%',
                      height: 'auto',
                    }}
                    className="object-contain p-4 md:p-8"
                    priority={index === 0}
                  />
                </div>
                {project.imageComments?.[index] && (
                  <p className="text-gray-500 text-base leading-relaxed max-w-2xl border-l-2 border-blue-100 pl-6 italic">
                    {project.imageComments[index]}
                  </p>
                )}
              </div>
            ))}
          </motion.div>

          {/* 3. Right Side: Sticky Info Panel */}
          <aside className="flex-1 lg:max-w-sm">
            <motion.div 
              key={`info-${id}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sticky top-32 space-y-12"
            >
              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.category?.map((cat) => (
                    <span key={cat} className="text-[10px] px-2.5 py-1 bg-lime-500 text-white rounded-full font-bold uppercase tracking-wider">
                      {cat}
                    </span>
                  ))}
                </div>
                <h1 className="text-5xl font-black tracking-tighter text-gray-900 leading-none mb-4">
                  {project.title}
                </h1>
              </div>

              <div className="space-y-10 border-t border-gray-100 pt-10 text-sm">
                <section>
                  <p className="text-gray-400 text-[10px] mb-3 uppercase font-bold tracking-[0.2em]">Release</p>
                  <p className="flex items-center gap-2 font-mono text-gray-800 text-base">
                    <FaClockRotateLeft className="text-gray-300" /> {project.date}
                  </p>
                </section>

                <section>
                  <p className="text-purple-600 font-bold text-[10px] mb-3 uppercase tracking-[0.2em]">Role / Stack</p>
                  <p className="text-gray-700 text-base font-medium mb-1">{project.job}</p>
                  <p className="text-gray-500 text-sm font-normal italic">{project.application}</p>
                </section>

                <section>
                  <p className="text-purple-600 font-bold text-[10px] mb-4 uppercase tracking-[0.2em]">Brand Identity</p>
                  <div className="flex gap-3">
                    {project.pickColors?.map((color, index) => (
                      <div 
                        key={`${color}-${index}`}
                        className="w-10 h-10 rounded-xl border border-gray-100 shadow-sm relative group/color"
                        style={{ backgroundColor: color }}
                      >
                        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[9px] font-mono text-gray-400 opacity-0 group-hover/color:opacity-100 transition-opacity whitespace-nowrap">
                          {color}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <p className="text-gray-400 text-[10px] mb-4 uppercase font-bold tracking-[0.2em]">Core Concept</p>
                  <p className="text-gray-600 leading-relaxed text-base font-normal">
                    {project.concept}
                  </p>
                </section>

                {/* External Links */}
                <section className="pt-6 flex flex-col gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-gray-700 transition-all shadow-lg shadow-gray-200">
                      <FaGithub size={18} /> GitHub Repository
                    </a>
                  )}
                  {project.deploy && (
                    <a href={project.deploy} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-100">
                      <RiVercelLine size={18} /> Launch Live Site
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
                </section>
              </div>
            </motion.div>
          </aside>
        </div>
      </main>

      {/* 4. Bottom Navigation (Linear) */}
      <footer className="border-t border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto flex divide-x divide-gray-100">
          <Link 
            href={`/projects/${prevProject.id}`}
            scroll={false}
            className="flex-1 px-8 py-16 group hover:bg-white transition-colors"
          >
            <p className="text-[10px] font-bold text-gray-400 mb-2 tracking-[0.3em]">PREVIOUS</p>
            <h4 className="text-xl font-bold text-gray-300 group-hover:text-black transition-colors flex items-center gap-2">
              <ChevronLeft size={20} /> {prevProject.title}
            </h4>
          </Link>
          <Link 
            href={`/projects/${nextProject.id}`}
            scroll={false}
            className="flex-1 px-8 py-16 group hover:bg-white transition-colors text-right"
          >
            <p className="text-[10px] font-bold text-gray-400 mb-2 tracking-[0.3em]">NEXT PROJECT</p>
            <h4 className="text-xl font-bold text-gray-300 group-hover:text-black transition-colors flex items-center justify-end gap-2">
              {nextProject.title} <ChevronRight size={20} />
            </h4>
          </Link>
        </div>
      </footer>
    </div>
  );
}