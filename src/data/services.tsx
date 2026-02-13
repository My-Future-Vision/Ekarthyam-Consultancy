import { Code, Brain, BookOpen, BarChart3 } from 'lucide-react';

export interface Service {
    icon: React.ReactNode;
    title: string;
    description: string;
    highlight: string;
}

export const services: Service[] = [
    {
        icon: <Code size={40} />,
        title: "Software Consultancy",
        description: "Expert guidance on enterprise architecture, tech stack selection, and digital roadmap planning.",
        highlight: "Strategic"
    },
    {
        icon: <Brain size={40} />,
        title: "Gen AI Implementation",
        description: "End-to-end integration of Large Language Models and intelligent automation workflows.",
        highlight: "Trending"
    },
    {
        icon: <BookOpen size={40} />,
        title: "LMS Solutions",
        description: "Custom Learning Management Systems for corporate training and educational institutions.",
        highlight: "Education"
    },
    {
        icon: <BarChart3 size={40} />,
        title: "PMS Systems",
        description: "Performance Management Systems to track, analyze, and optimize employee productivity.",
        highlight: "Analytics"
    }
];
