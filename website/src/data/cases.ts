export type CaseLocale = "zh" | "en";

type CaseContent = {
  title: string;
  industry: string;
  scene: string;
  summary: string;
  capabilities: string[];
  background: string;
  problem: string;
  solution: string;
  result: string;
};

export type CaseStudy = {
  id: string;
  href?: string;
  miniProgramPlaceholder?: boolean;
  content: Record<CaseLocale, CaseContent>;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "tradepilot",
    href: "https://app.tradepilot.z-aci.com/",
    content: {
      zh: {
        title: "TradePilot 外贸 AI Agent 集群中枢平台",
        industry: "外贸企业 / 跨境贸易数字化",
        scene: "外贸全流程业务协同与智能执行",
        summary: "以 AI Agent 集群串联外贸全流程，让获客、成交与履约可执行、可追踪、可协同。",
        capabilities: ["多 Agent 编排", "流程执行", "客户资产", "知识库"],
        background: "外贸企业的营销、客服、销售、单证、ERP 与运营工作通常分散在多个系统和岗位中，业务信息难以连续沉淀，跨环节协作成本高，管理者也难以统一复盘业务结果与 Agent 运行效果。",
        problem: "营销线索无法顺畅转化为结构化询盘和客户资产；报价、订单、合同与 ERP 状态之间存在断层；出口履约资料、单证和物流状态依赖人工协同；企业商品、价格、知识与模板资料难以被各业务环节统一调用。",
        solution: "构建以 AI Agent 集群为核心的外贸业务中枢，覆盖营销与投流、智能客服、客户管理、报价与订单、报关发货、数据与知识库、全局看板和系统管理。平台通过 Agent 自动识别询盘、提取需求、辅助追问、匹配商品、生成报价与合同草稿，并基于统一的商品资料、价格规则、企业知识库和单证模板推动业务流转。",
        result: "形成“营销获客 → 智能客服 → 客户管理 → 报价与订单 → 报关发货 → 全局看板”的外贸业务主链路；在 MVP 阶段优先打通营销、客服、客户、报价订单与知识库能力，建立从线索到订单草稿的核心闭环，并为后续出口履约、组织权限和全链路经营复盘提供统一平台基础。",
      },
      en: {
        title: "TradePilot Foreign Trade AI Agent Hub",
        industry: "Foreign Trade Enterprises / Cross-border Trade Digitization",
        scene: "End-to-end foreign trade collaboration and intelligent execution",
        summary: "An AI agent cluster connects the foreign trade workflow, making acquisition, conversion, and fulfillment executable, traceable, and collaborative.",
        capabilities: ["Multi-Agent", "Process Execution", "Customer Assets", "Knowledge Base"],
        background: "Marketing, customer service, sales, documentation, ERP, and operations are typically spread across multiple systems and roles in foreign trade enterprises. Business information does not accumulate continuously, cross-stage collaboration is costly, and managers struggle to review business outcomes and agent performance in one place.",
        problem: "Marketing leads do not flow smoothly into structured inquiries and customer assets. Quotes, orders, contracts, and ERP states are disconnected. Export fulfillment materials, documents, and logistics statuses depend on manual coordination, while product, price, knowledge, and template information cannot be consistently used across the workflow.",
        solution: "Built a foreign trade business hub centered on an AI agent cluster, covering marketing and campaign delivery, intelligent customer service, customer management, quotes and orders, customs declaration and shipment, data and knowledge bases, global dashboards, and system administration. Agents identify inquiries, extract needs, assist follow-up questions, match products, and generate draft quotes and contracts, while unified product data, pricing rules, enterprise knowledge bases, and document templates drive workflow progression.",
        result: "Established the main foreign trade chain of marketing acquisition → intelligent customer service → customer management → quotes and orders → customs declaration and shipment → global dashboard. The MVP prioritizes marketing, customer service, customer management, quotes and orders, and knowledge-base capabilities to establish the core loop from lead to order draft, creating a unified foundation for later export fulfillment, organization permissions, and end-to-end business review.",
      },
    },
  },
  {
    id: "ningxiang-ai-interviewer",
    href: "https://interviewer-hw.z-aci.cn/",
    content: {
      zh: {
        title: "凝想 AI 采访",
        industry: "中老年数字记忆与家庭故事沉淀",
        scene: "AI 实时语音采访与数字记忆档案",
        summary: "让一次自然对话，沉淀为可回看、可编辑、可传承的人生与家庭记忆。",
        capabilities: ["智能体编排", "实时语音交互", "连续追问", "记忆沉淀"],
        background: "50—75 岁中老年用户拥有丰富的人生经历和家庭故事，但缺少低门槛、系统化的记录与整理方式；子女也希望保存父母及长辈的真实记忆。",
        problem: "传统记录方式依赖书写、整理和采访技巧，操作门槛高，口述内容容易碎片化、遗漏，录音、转写和后续内容管理难以形成完整档案。",
        solution: "打造覆盖采访前准备、实时语音采访与采访后内容整理的移动端 APP。AI 采访 Agent 通过主动提问、连续追问、共情回应和阶段总结，引导用户持续讲述；系统自动保存录音、转写与对话，并提取摘要、人物关系、关键事件、时间地点和话题树，支持回看、继续采访、收藏、分享与导出。",
        result: "跑通从登录、新建采访、实时对话、暂停续访到内容结构化整理和历史管理的完整闭环；将分散的口述故事转化为可检索、可编辑、可长期保存的个人与家庭数字记忆档案，并为后续采访机、科学家访谈和家庭多人协作场景奠定基础。",
      },
      en: {
        title: "Ningxiang AI Interviewer",
        industry: "Digital Memories for Older Adults and Family Story Preservation",
        scene: "AI real-time voice interviews and digital memory archives",
        summary: "Turn a natural conversation into life and family memories that can be revisited, edited, and passed on.",
        capabilities: ["Agent Orchestration", "Real-time Voice", "Follow-up Dialogue", "Memory Archive"],
        background: "Adults aged 50–75 have rich life experiences and family stories but lack a low-barrier, systematic way to record and organize them. Their children also want to preserve authentic memories from parents and elders.",
        problem: "Conventional documentation depends on writing, organization, and interviewing skills. Spoken narratives become fragmented or incomplete, while recordings, transcripts, and later content management rarely form a complete archive.",
        solution: "Built a mobile app spanning interview preparation, real-time voice interviews, and post-interview organization. The AI Interview Agent uses proactive questions, follow-up questions, empathetic responses, and stage summaries to sustain storytelling. The system stores recordings, transcripts, and conversations, extracts summaries, relationships, key events, times, places, and topic trees, and supports review, continued interviews, favorites, sharing, and export.",
        result: "Established a complete loop from sign-in and interview creation through real-time dialogue, pause-and-resume, structured content organization, and history management. It turns scattered oral stories into searchable, editable, long-term digital archives for individuals and families, providing a foundation for future interview devices, scientist interviews, and multi-person family collaboration.",
      },
    },
  },
  {
    id: "ouyang-cultural-street",
    miniProgramPlaceholder: true,
    content: {
      zh: {
        title: "欧阳统战文化街区智慧导览小程序",
        industry: "城市文化街区 / 社区文旅导览",
        scene: "移动端文化点位导览、内容展示与语音问答",
        summary: "以地图导览与实时语音助手，让街区文化信息可查、可听、可互动。",
        capabilities: ["应用开发", "智能交互", "语音编排", "文旅数字化"],
        background: "街区拥有丰富的历史、人文与社区文化点位，需要一个面向公众的数字化入口承载导览与文化传播。",
        problem: "文化点位信息分散，游客难以快速理解路线与背景；传统图文导览的互动性和使用便利性有限。",
        solution: "建设微信小程序，整合地图点位、文化介绍与路线浏览；接入服务端语音代理，实现“欧阳路小助手”实时语音问答，并将第三方语音能力与密钥保留在服务端。",
        result: "形成统一的街区数字导览入口，支持文化点位的可视化浏览与语音互动问答，提升游客获取街区信息的便捷性与沉浸感。",
      },
      en: {
        title: "Ouyang Cultural Street Smart Guide Mini Program",
        industry: "Urban Cultural District / Community Cultural Tourism Guide",
        scene: "Mobile cultural site navigation, content presentation, and voice Q&A",
        summary: "Map navigation and a real-time voice assistant make cultural information searchable, listenable, and interactive.",
        capabilities: ["App Development", "Intelligent Interaction", "Voice Orchestration", "Cultural Tourism"],
        background: "The district has rich historical, cultural, and community sites that need a public digital entry point for navigation and cultural communication.",
        problem: "Information about cultural sites was scattered, making routes and context difficult for visitors to understand quickly. Traditional text-and-image guides offered limited interaction and convenience.",
        solution: "Built a WeChat Mini Program that integrates map sites, cultural introductions, and route browsing. A server-side voice proxy powers real-time Q&A with the Ouyang Road Assistant while keeping third-party voice capabilities and credentials on the server.",
        result: "Created a unified digital guide for the district, supporting visual exploration of cultural sites and voice-based Q&A to make local information more accessible and immersive.",
      },
    },
  },
];
