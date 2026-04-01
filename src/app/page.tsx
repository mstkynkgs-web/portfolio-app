import Link from "next/link";
import { PROJECTS } from "@/constants/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-blue-100">
      {/* Header Section */}
      <header className="max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
        <h1 className="text-6xl font-black tracking-tighter sm:text-8xl mb-6 bg-linear-to-r from-gray-900 to-gray-500 bg-clip-text text-transparent">
          Portfolio
        </h1>
        <p className="text-gray-500 text-lg sm:text-xl font-medium tracking-tight">
          Web Development & UI/UX Design Archives
        </p>
      </header>

      {/* Project Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              scroll={false} // モーダルを開く際にスクロール位置を保持
              className="group relative flex flex-col bg-white border border-gray-200 rounded-3xl overflow-hidden hover:border-purple-600 hover:shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            >
              {/* Card Header (Optional Badge or ID) */}
              <div className="absolute top-6 left-6 z-10 text-[10px] font-bold tracking-[0.2em] text-gray-400 group-hover:text-purple-600 transition-colors uppercase">
                Project： {project.id}
              </div>

              {/* Card Content Area */}
              <div className="p-10 pt-20 flex flex-col flex-1">
                <h2 className="text-3xl font-bold text-gray-800 mb-4 tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                  {project.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-10 flex-1">
                  {project.concept}
                </p>

                {/* Footer of Card */}
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                  <div className="flex gap-2">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-[10px] px-2 py-1 bg-gray-100 text-gray-500 rounded-full font-bold uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="text-black font-bold text-sm inline-flex items-center group-hover:text-purple-600 transition-colors">
                    Detail <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>

              {/* Hover Overlay Background (Subtle) */}
              <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
            </Link>
          ))}
        </div>
      </section>

      {/* Global Footer (Optional) */}
      <footer className="py-20 border-t border-gray-100 text-center">
        <p className="text-xs font-bold tracking-[0.5em] text-gray-300 uppercase">
          &copy; 2026 TKMS All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}