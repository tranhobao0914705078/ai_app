import { 
    LayoutDashboard,
    MessageSquare,
    ImageIcon,
    VideoIcon,
    Music,
    Code, 
    Settings
} from "lucide-react"
const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500",
        bgColor: "bg-sky-500/10"
    },
    {
        label: "Conversation",
        icon: MessageSquare,
        href: "/conversation",
        color: "text-violet-500",
        bgColor: "bg-violet-500/10"
    },
    {
        label: "Image Generation",
        icon: ImageIcon,
        href: "/image",
        color: "text-pink-700",
        bgColor: "bg-pink-500/10"
    },
    {
        label: "Video Generation",
        icon: VideoIcon,
        href: "/video",
        color: "text-orange-700",
        bgColor: "bg-orange-500/10"
    },
    {
        label: "Music Generation",
        icon: Music,
        href: "/music",
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10"
    },
    {
        label: "Code Generation",
        icon: Code,
        href: "/code",
        color: "text-green-700",
        bgColor: "bg-green-500/10"
    },
    {
        label: "Settings",
        icon: Settings,
        href: "/settings",
        color: "",
        bgColor: ""
    },
];

export default routes;