// constants/projects.ts
import { Project } from "@/types/project";

export const PROJECTS: Project[] = [
  {
    id: "eiketsu-taisen",
    title: "英傑大戦.net",
    date: "2026-04-01",
    category: ["Web Design"],
    job: "Web Designer、 UI Designer",
    application: "Adobe Photoshop、Adobe Illustrator、Microsoft VSCode、Eclipse",
    concept: "サイトイメージは和風。\nパターン‧模様等のイメージとして木‧紙‧和服といった非金属を主体とした、マテリアルイメージを意識。\n金‧銀などの装飾イメージのベースに安土桃山〜江戸中期に広まった「琳派」をデザインの基礎とした。",
    description: "アーケードゲーム英傑大戦の会員向Webサービス。\nバトルパスやカード情報、戦績などプレイヤーに必要な情報を掲載・運用",
    link: "https://eiketsu-taisen.net/",
    tags: ["HTML5","CSS 3","javaScript (ES6)","ThymeLeaf"],
    images: [
      "/images/projects/et/et01.png",
      "/images/projects/et/et02.png",
      "/images/projects/et/et03.png",
      "/images/projects/et/et04.png",
      "/images/projects/et/et05.png",
      "/images/projects/et/et06.png",
      "/images/projects/et/et07.png",
      "/images/projects/et/et08.png",
      "/images/projects/et/et09.png",
      "/images/projects/et/et10.png",
      "/images/projects/et/et11.png"
    ]
  },
  {
    id: "kc",
    title: "ウェルビーイング経営研究所",
    date: "2026-04-01",
    category: ["Web Design"],
    job: "Web Designer",
    application: "Adobe Photoshop、Adobe Illustrator、Adobe xD、Microsoft VSCode",
    pickColors: ["#ffffff","#b2d041", "#0d7acc"],
    concept: "赤黒基調のサイトイメージをウェルビーイングのイメージに合わせて、変更。",
    description: "wordpressのテンプレートのカスタマイズ・リニューアル・サイト情報の更新等、サイト運用・管理を担当",
    link: "https://www.wellbeing-management-labo.co.jp",
    tags: ["HTML5","CSS 3","javaScript (ES6)"],
    images: [
      "/images/projects/kc/kc01.png",
      "/images/projects/kc/kc02.png",
      "/images/projects/kc/kc03.png",
      "/images/projects/kc/kc04.png",
      "/images/projects/kc/kc05.png",
      "/images/projects/kc/kc06.png"
    ]
  },
  {
    id: "portfolio",
    title: "portfolio",
    date: "2026-04-01",
    category: ["Web Design"],
    job: "Web Designer、 UI Designer",
    application: "Figma、Next.js",
    pickColors: ["#f9fafb","#ffffff", "#9810fa"],
    concept: "ポートフォリオ。\n 見た目をシンプルにしつつ、Next.jsによる動的な操作を意識して制作。",
    description: "Next.js及びTypeScriptのスキル向上と制作物の公開を目標に制作。\n１ヶ月以内公開を目標に制作を進め、3週間で公開できる形にしてデプロイ。",
    github: "https://github.com/mstkynkgs-web/todo-app/",
    deploy: "https://todo-app-eight-mu-28.vercel.app/",
    tags: ["Next.js", "React", "Tailwind", "GitHub"],
    images: ["/images/projects/portfolio/portfolio01.png", "/images/projects/portfolio/portfolio02.png"]
  },
  {
    id: "todo-app",
    title: "Todo-app",
    date: "2026-03-29",
    category: ["Web App"],
    job: "Web Designer、 UI Designer",
    application: "Figma、Next.js",
    pickColors: ["#ffffff", "#1447e6"],
    concept: "Next.js, React, Tailwind CSSを使用したタスク管理アプリ。ローカルストレージでのデータ保存を実装済み。",
    description: "Next.js, React, Tailwind CSSを使用したタスク管理アプリ。",
    github: "https://github.com/mstkynkgs-web/todo-app/",
    deploy: "https://todo-app-eight-mu-28.vercel.app/",
    tags: ["Next.js", "React", "Tailwind", "GitHub"],
    images: ["/images/projects/todo-app/todo-app01.png", "/images/projects/todo-app/todo-app02.png"]
  },
  {
    id: "cat-image-generator",
    title: "Cat-image-random-generator",
    date: "2026-03-29",
    category: ["Web App"],
    job: "Web Designer、 UI Designer",
    application: "Figma、Next.js",
    pickColors: ["#ffffff", "#000000"],
    concept: "GitHubで管理している、猫の画像を生成・表示するプロジェクト。",
    description: "GitHubで管理している、猫の画像を生成・表示するプロジェクト。",
    github: "https://github.com/mstkynkgs-web/random-cat",
    deploy: "https://random-cat-rho-nine.vercel.app/",
    tags: ["JavaScript", "GitHub"],
    images: ["/images/projects/cat-image-generator/cat-image-generator01.png"]
  },
  {
    id: "chat-app",
    title: "Chat-app",
    date: "2026-03-29",
    category: ["Web App"],
    job: "Web Designer、 UI Designer",
    application: "Figma、Next.js",
    pickColors: ["#F1F3F7", "#006BD6", "#00afd6"],
    concept: "ユーザーが入力したテキストをボットが鸚鵡返しするチャット。デザインはMaterial UI（MUI）を利用。",
    description: "MUIを利用したチャットアプリの実装プロジェクト。",
    github: "https://github.com/mstkynkgs-web/chat-app",
    deploy: "https://chat-app-delta-wine.vercel.app/",
    tags: ["Next.js", "JavaScript", "GitHub", "MUI"],
    images: ["/images/projects/chat-app/chat-app01.png"]
  }
];