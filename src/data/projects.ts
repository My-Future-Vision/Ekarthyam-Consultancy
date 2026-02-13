export interface Project {
    title: string;
    category: string;
    tech: string[];
    description: string;
    image: string;
}

export const projects: Project[] = [
    {
        title: "Enterprise LMS Platform",
        category: "Web Application",
        tech: ["React", "Node.js", "PostgreSQL"],
        description: "A comprehensive learning management system serving 10k+ employees with real-time analytics.",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "AI Customer Support Bot",
        category: "Gen AI Integration",
        tech: ["Python", "OpenAI API", "Vector DB"],
        description: "Intelligent chatbot reducing support ticket volume by 40% through automated query resolution.",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        title: "Performance Analytics Dashboard",
        category: "Data Visualization",
        tech: ["TypeScript", "D3.js", "AWS"],
        description: "Interactive dashboard for HR teams to monitor and evaluate corporate performance metrics.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
];
