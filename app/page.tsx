import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Code2,
  Database,
  Layers3,
} from 'lucide-react';

const focusAreas = [
  { icon: Braces, label: 'Backend services', value: 'Python · C# · Java' },
  { icon: Layers3, label: 'Enterprise integration', value: 'OIC · REST · SOAP' },
  { icon: Database, label: 'Data & validation', value: 'SQL · PL/SQL · PostgreSQL' },
];

const projects = [
  {
    number: '01',
    name: 'Fore the Record',
    type: 'Full-stack product',
    status: 'In active development',
    href: 'https://github.com/JackHumphreysDev/Fore-the-Record',
    summary:
      'A golf round and handicap tracker built around the World Handicap System, with resilient course-data lookup and a clear path from scorecard to rolling Handicap Index.',
    detail:
      'The foundation includes a typed React frontend, Express API, tested health endpoint, Prisma data model and Supabase PostgreSQL database. Core handicap logic, profile creation and a two-tier course-ratings lookup are already implemented.',
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Vitest'],
  },
];

const experience = [
  {
    period: 'Oct 2022 — Present',
    role: 'Associate Developer',
    company: 'Civil Service',
    location: 'Sheffield',
    summary:
      'Designing, developing and supporting production backend integration services for Finance and HR teams in an agile enterprise environment.',
    outcomes: [
      'Designed a reusable service pattern and generic customer/site API connector, reducing duplicated integration logic by 60%.',
      'Added structured logging and self-verification patterns that cut manual intervention by more than 70%.',
      'Built reusable Python libraries for difficult HTML-response parsing and JSON sanitisation, alongside complex SQL and PL/SQL validation.',
    ],
    tech: 'Python · SQL / PL/SQL · Oracle Integration Cloud · REST · SOAP · Oracle Fusion',
  },
];

const skillGroups = [
  {
    index: '01',
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'C#', 'Java', 'SQL / PL-SQL', 'HTML & CSS'],
  },
  {
    index: '02',
    title: 'Backend & integration',
    skills: ['Oracle Integration Cloud', 'REST APIs', 'SOAP services', 'Node.js', 'Express', 'PostgreSQL', 'Prisma'],
  },
  {
    index: '03',
    title: 'Platforms & tools',
    skills: ['Git & GitHub', 'Oracle Fusion', 'Supabase', 'Postman', 'SoapUI'],
  },
];

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Jack Humphreys, home">
          JH<span>.</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#capabilities">Capabilities</a>
          <a className="nav-contact" href="https://github.com/JackHumphreysDev" target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-main">
          <p className="kicker"><span /> Software engineer · Sheffield, UK</p>
          <h1>I turn tangled systems into <em>dependable software.</em></h1>
          <p className="hero-copy">
            Backend and integration engineer building production services with Python, JavaScript, SQL and Oracle Integration Cloud—focused on reliable data movement, clear business logic and maintainable systems.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="#work">
              Explore my work <ArrowDownRight aria-hidden="true" />
            </a>
            <a className="text-link" href="https://github.com/JackHumphreysDev" target="_blank" rel="noreferrer">
              <Code2 aria-hidden="true" /> github.com/JackHumphreysDev
            </a>
          </div>
        </div>

        <aside className="hero-aside" aria-label="Engineering focus">
          <div className="status-line"><span /> Open to software engineering opportunities</div>
          <p className="aside-label">Engineering focus</p>
          <div className="focus-list">
            {focusAreas.map(({ icon: Icon, label, value }) => (
              <div className="focus-row" key={label}>
                <Icon aria-hidden="true" />
                <div><strong>{label}</strong><span>{value}</span></div>
              </div>
            ))}
          </div>
          <div className="aside-foot"><span>03</span> production disciplines</div>
        </aside>
      </section>

      <section className="proof-strip" aria-label="Career highlights">
        <div className="shell proof-grid">
          <div><strong>60%</strong><span>less duplicated integration logic</span></div>
          <div><strong>70%+</strong><span>less manual intervention</span></div>
          <div><strong>3+</strong><span>years building production services</span></div>
          <div><strong>2022</strong><span>building production backend integrations since</span></div>
        </div>
      </section>

      <section className="projects-section shell" id="work">
        <div className="section-heading">
          <p className="kicker"><span /> Selected work</p>
          <div>
            <h2>Software with a reason to exist.</h2>
            <p className="section-intro">Personal products where domain logic, resilient data and useful interfaces meet.</p>
          </div>
        </div>

        {projects.map((project) => (
          <article className="project-case" key={project.name}>
            <div className="project-meta">
              <span className="project-number">{project.number}</span>
              <div>
                <span>{project.type}</span>
                <span>{project.status}</span>
              </div>
            </div>
            <div className="project-story">
              <h3>{project.name}</h3>
              <p className="project-lead">{project.summary}</p>
              <p>{project.detail}</p>
              <div className="tag-list" aria-label={`${project.name} technology stack`}>
                {project.stack.map((item) => <span key={item}>{item}</span>)}
              </div>
              <a className="case-link" href={project.href} target="_blank" rel="noreferrer">
                View source on GitHub <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
            <div className="architecture" aria-label="Fore the Record system architecture">
              <div className="architecture-head"><span>System architecture</span><span>v0.1</span></div>
              <div className="system-node node-ui"><span>01</span><strong>React UI</strong><small>Typed client</small></div>
              <div className="system-line"><span>HTTP / JSON</span></div>
              <div className="system-node node-api"><span>02</span><strong>Express API</strong><small>Domain services</small></div>
              <div className="system-split">
                <div className="system-node"><span>03</span><strong>PostgreSQL</strong><small>Prisma ORM</small></div>
                <div className="system-node"><span>04</span><strong>Course data</strong><small>API + fallback</small></div>
              </div>
              <div className="architecture-foot"><span /> Foundation implemented</div>
            </div>
          </article>
        ))}

        <div className="project-future">
          <span>Next build</span>
          <p>This portfolio is designed to grow. New project entries can be added from one project data list.</p>
          <ArrowRight aria-hidden="true" />
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="shell">
          <div className="section-heading experience-heading">
            <p className="kicker"><span /> Experience</p>
            <div>
              <h2>Building for the real world.</h2>
              <p className="section-intro">Production thinking shaped by enterprise integration, complex business rules and measurable reliability gains.</p>
            </div>
          </div>

          <div className="timeline">
            {experience.map((item, index) => (
              <article className="timeline-item" key={`${item.company}-${item.role}`}>
                <div className="timeline-rail"><span>{String(index + 1).padStart(2, '0')}</span></div>
                <div className="timeline-meta">
                  <p>{item.period}</p>
                  <span>{item.location}</span>
                </div>
                <div className="timeline-body">
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                  <p className="role-summary">{item.summary}</p>
                  <ul>
                    {item.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
                  </ul>
                  <p className="role-tech">{item.tech}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="capabilities-section shell" id="capabilities">
        <div className="section-heading">
          <p className="kicker"><span /> Capabilities</p>
          <div>
            <h2>Broad toolkit. Backend bias.</h2>
            <p className="section-intro">I’m most at home making systems exchange data clearly, safely and predictably.</p>
          </div>
        </div>
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article className="skill-group" key={group.title}>
              <div className="skill-title"><span>{group.index}</span><h3>{group.title}</h3></div>
              <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="profile-section">
        <div className="shell profile-grid">
          <div>
            <p className="kicker"><span /> Profile</p>
            <h2>Systems thinking, end to end.</h2>
          </div>
          <div className="profile-copy">
            <p className="profile-lead">I’m a software engineer who enjoys the point where complex business rules have to become clear, maintainable code.</p>
            <p>My experience centres on enterprise integration, backend services and full-stack personal products. That perspective helps me see beyond an isolated ticket—how data moves, where systems fail and what a useful outcome looks like for the person at the other end.</p>
            <div className="education-card">
              <span>Sep 2013 — Jun 2016</span>
              <div>
                <h3>BSc (Hons) Computer Forensics & Security</h3>
                <p>Leeds Beckett University</p>
                <small>Final dissertation: designed and developed an automated text-analysis application that collected chat-room transcripts, processed conversational content to identify potential linguistic indicators of online grooming, and generated structured text reports for investigator review.</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact">
        <div className="shell footer-grid">
          <div>
            <p className="kicker"><span /> Let’s talk</p>
            <h2>Looking for an engineer who cares how it works?</h2>
          </div>
          <div className="footer-action">
            <p>I’m open to software engineering opportunities where dependable systems and thoughtful problem-solving matter.</p>
            <a href="https://github.com/JackHumphreysDev" target="_blank" rel="noreferrer">
              Start with my GitHub <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="shell footer-bottom">
          <span>© 2026 Jack Humphreys</span>
          <span>Software engineer · Sheffield, UK</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
