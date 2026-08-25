import type { ComponentType } from "react";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiVuedotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiAnthropic,
  SiOpenai,
  SiAmazonwebservices,
  SiShopify,
  SiGithub,
  SiGitlab,
  SiVisualstudiocode,
  SiFigma,
  SiJira,
  SiTrello,
  SiAsana,
  SiAirtable,
  SiZendesk,
  SiSlack,
  SiSap,
  SiZapier,
  SiOracle,
} from "react-icons/si";
import {
  MousePointer2,
  Sparkles,
  BarChart3,
  Brain,
  LineChart,
  Repeat,
  Columns3,
  KanbanSquare,
  GitBranch,
  TestTube2,
  ShoppingCart,
  ShoppingBag,
  FileCode2,
  Search,
  Users,
  Network,
  Workflow,
  Zap,
  Tag,
} from "lucide-react";

type IconComp = ComponentType<{ size?: number; color?: string; className?: string }>;
export type IconEntry = { Icon: IconComp; color: string };

export const TECH_ICONS: Record<string, IconEntry> = {
  // Languages / stacks
  Python: { Icon: SiPython, color: "#3776AB" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  React: { Icon: SiReact, color: "#61DAFB" },
  "Node.js": { Icon: SiNodedotjs, color: "#5FA04E" },
  Vue: { Icon: SiVuedotjs, color: "#4FC08D" },
  "HTML/CSS": { Icon: SiHtml5, color: "#E34F26" },
  CSS: { Icon: SiCss3, color: "#1572B6" },
  Tailwind: { Icon: SiTailwindcss, color: "#06B6D4" },
  MySQL: { Icon: SiMysql, color: "#4479A1" },
  MongoDB: { Icon: SiMongodb, color: "#47A248" },

  // AI & data
  "Claude Code": { Icon: SiAnthropic, color: "#D97757" },
  "OpenAI Codex": { Icon: SiOpenai, color: "#412991" },
  Cursor: { Icon: MousePointer2, color: "#A78BFA" },
  "Prompt engineering": { Icon: Sparkles, color: "#F472B6" },
  "LLM evaluation": { Icon: TestTube2, color: "#F472B6" },
  "Machine learning": { Icon: Brain, color: "#F472B6" },
  ML: { Icon: Brain, color: "#F472B6" },
  "AI-assisted development": { Icon: Sparkles, color: "#F472B6" },
  "Data analytics": { Icon: BarChart3, color: "#F472B6" },
  "Data visualization": { Icon: LineChart, color: "#67E8F9" },
  "Data insights": { Icon: LineChart, color: "#F472B6" },

  // Platforms & tools
  AWS: { Icon: SiAmazonwebservices, color: "#FF9900" },
  Shopify: { Icon: SiShopify, color: "#7AB55C" },
  Liquid: { Icon: SiShopify, color: "#7AB55C" },
  "SAP Hybris": { Icon: SiSap, color: "#0FAAFF" },
  GitHub: { Icon: SiGithub, color: "#F5F5F5" },
  GitLab: { Icon: SiGitlab, color: "#FC6D26" },
  "VS Code": { Icon: SiVisualstudiocode, color: "#007ACC" },
  Figma: { Icon: SiFigma, color: "#F24E1E" },
  Jira: { Icon: SiJira, color: "#0052CC" },
  Trello: { Icon: SiTrello, color: "#0079BF" },
  Asana: { Icon: SiAsana, color: "#F06A6A" },
  Airtable: { Icon: SiAirtable, color: "#18BFFF" },
  Zendesk: { Icon: SiZendesk, color: "#03363D" },
  Slack: { Icon: SiSlack, color: "#4A154B" },
  Zapier: { Icon: SiZapier, color: "#FF4A00" },
  Make: { Icon: Workflow, color: "#6D5DFB" },
  n8n: { Icon: Zap, color: "#EA4B71" },
  NetSuite: { Icon: SiOracle, color: "#C74634" },

  // Practices
  "Agile / Scrum": { Icon: Repeat, color: "#FBBF24" },
  Kanban: { Icon: KanbanSquare, color: "#FBBF24" },
  SDLC: { Icon: Columns3, color: "#FBBF24" },
  TDD: { Icon: TestTube2, color: "#FBBF24" },
  "CI/CD": { Icon: GitBranch, color: "#FBBF24" },
  "Unit & automated testing": { Icon: TestTube2, color: "#FBBF24" },
  "Project management": { Icon: KanbanSquare, color: "#FBBF24" },
  "E-commerce operations": { Icon: ShoppingCart, color: "#FBBF24" },
  "EDI / XML / XSLT mapping": { Icon: FileCode2, color: "#FBBF24" },
  "BI reporting": { Icon: LineChart, color: "#FBBF24" },
  VBA: { Icon: FileCode2, color: "#FBBF24" },

  // Domain
  "E-commerce": { Icon: ShoppingBag, color: "#7AB55C" },
  SEO: { Icon: Search, color: "#A78BFA" },
  "Team leadership": { Icon: Users, color: "#A78BFA" },
  EDI: { Icon: FileCode2, color: "#A78BFA" },
  "XML/XSLT": { Icon: FileCode2, color: "#A78BFA" },
  "B2B integrations": { Icon: Network, color: "#A78BFA" },
  "BI Publisher": { Icon: LineChart, color: "#A78BFA" },
  "Systems analysis": { Icon: Workflow, color: "#A78BFA" },
};

export function resolveIcon(name: string): IconEntry {
  if (TECH_ICONS[name]) return TECH_ICONS[name];
  const base = name.replace(/\(.*?\)/g, "").split("/")[0].trim();
  if (TECH_ICONS[base]) return TECH_ICONS[base];
  return { Icon: Tag, color: "#A78BFA" };
}

export function TechChip({ name, size = 14 }: { name: string; size?: number }) {
  const { Icon, color } = resolveIcon(name);
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg-card/60 px-2.5 py-1 text-xs text-ink-muted">
      <Icon size={size} color={color} />
      {name}
    </span>
  );
}
