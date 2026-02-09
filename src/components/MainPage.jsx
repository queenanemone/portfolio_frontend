import { Github, Book, Mail, ArrowDown, Code, Server, Database, Globe, Cpu, Layout } from 'lucide-react';
// Link is not currently used, using anchor tags for internal navigation
// import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative bg-white">
      <div className="max-w-4xl w-full">
        <div className="space-y-6">
          <div className="inline-block">
            <span className="text-sm tracking-wider uppercase text-gray-600 border border-gray-300 px-4 py-2 rounded-full">
              Portfolio
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-black">
            안녕하세요,<br />
            <span className="font-normal">신형석</span>입니다
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl">
            백엔드 개발과 인프라 구축을 아우르는 개발자
          </p>
          
          <div className="flex gap-4 pt-4">
            <a
              href="#about"
              className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              알아보기
              <ArrowDown className="w-4 h-4" />
            </a>
          </div>
          
          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-gray-300 rounded-full hover:border-black text-gray-600 hover:text-black transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://velog.io"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-gray-300 rounded-full hover:border-black text-gray-600 hover:text-black transition-colors"
            >
              <Book className="w-5 h-5" />
            </a>
            <a
              href="mailto:example@email.com"
              className="p-3 border border-gray-300 rounded-full hover:border-black text-gray-600 hover:text-black transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

function Section({ id, title, children, className = "" }) {
  return (
    <section id={id} className={`py-20 px-6 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light mb-12 text-black">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function SkillCard({ icon: Icon, name, description }) {
  return (
    <div className="p-6 border border-gray-200 rounded-xl hover:border-black hover:shadow-lg transition-all bg-white group">
      <div className="mb-4 text-gray-400 group-hover:text-black transition-colors">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-lg font-medium mb-2 text-black">{name}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  );
}

export function MainPage() {
  return (
    <div className="bg-white min-h-screen text-black font-sans">
      <Hero />
      
      <Section id="about" title="About Me" className="bg-gray-50">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            <p>
              안녕하세요. 견고한 백엔드 시스템과 효율적인 인프라 구축에 열정을 가진 개발자 신형석입니다.
            </p>
            <p>
              Java와 Spring Boot를 주력으로 사용하며, 안정적인 서비스 운영을 위한 서버 아키텍처 설계에 깊은 관심을 가지고 있습니다.
            </p>
            <p>
              단순히 기능 구현에 그치지 않고, 코드의 유지보수성과 확장성을 고려하며 개발합니다.
            </p>
          </div>
          {/* Placeholder for profile image or graphical element */}
          <div className="aspect-square bg-gray-200 rounded-2xl flex items-center justify-center">
             <span className="text-gray-400">Profile Image Placeholder</span>
          </div>
        </div>
      </Section>

      <Section id="skills" title="Technical Skills">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <SkillCard icon={Server} name="Java / Spring Boot" description="Robust Backend Development" />
          <SkillCard icon={Database} name="MySQL / JPA" description="Database Design & ORM" />
          <SkillCard icon={Cpu} name="Infrastructure" description="AWS, Docker, CI/CD" />
          <SkillCard icon={Layout} name="React" description="Modern Frontend Interfaces" />
          <SkillCard icon={Globe} name="RESTful API" description="API Design & Integration" />
          <SkillCard icon={Code} name="Algorithms" description="Problem Solving & Optimization" />
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Project Card Example 1 */}
          <div className="group cursor-pointer">
            <div className="aspect-video bg-gray-100 rounded-xl mb-4 overflow-hidden border border-gray-200 group-hover:border-black transition-colors">
               <div className="w-full h-full flex items-center justify-center text-gray-400">Project Image</div>
            </div>
            <h3 className="text-xl font-medium mb-2 group-hover:underline">Portfolio Project</h3>
            <p className="text-gray-500">
              React와 Spring Boot를 활용한 개인 포트폴리오 웹사이트입니다. 모던한 디자인과 반응형 웹을 구현했습니다.
            </p>
            <div className="flex gap-2 mt-4">
              <span className="text-xs px-2 py-1 bg-gray-100 rounded-md text-gray-600">React</span>
              <span className="text-xs px-2 py-1 bg-gray-100 rounded-md text-gray-600">Tailwind</span>
            </div>
          </div>
           {/* Project Card Example 2 */}
           <div className="group cursor-pointer">
            <div className="aspect-video bg-gray-100 rounded-xl mb-4 overflow-hidden border border-gray-200 group-hover:border-black transition-colors">
               <div className="w-full h-full flex items-center justify-center text-gray-400">Project Image</div>
            </div>
            <h3 className="text-xl font-medium mb-2 group-hover:underline">E-commerce Platform</h3>
            <p className="text-gray-500">
              대규모 트래픽 처리를 고려한 쇼핑몰 백엔드 API 서버입니다. Redis 캐싱과 비동기 처리를 도입했습니다.
            </p>
            <div className="flex gap-2 mt-4">
              <span className="text-xs px-2 py-1 bg-gray-100 rounded-md text-gray-600">Spring Boot</span>
              <span className="text-xs px-2 py-1 bg-gray-100 rounded-md text-gray-600">MySQL</span>
            </div>
          </div>
        </div>
      </Section>

      <footer className="py-12 border-t border-gray-200 text-center text-gray-500">
        <p>© 2026 Hyeongseok Shin. All rights reserved.</p>
      </footer>
    </div>
  );
}
