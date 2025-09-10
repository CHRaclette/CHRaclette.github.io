import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Link, useNavigate } from 'react-router-dom';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { LucideMenu, Home, LucidePalette, Github } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from 'react-day-picker';


export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleScrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            setMobileMenuOpen(false);
            element.scrollIntoView({ behavior: 'smooth' });
        } else if (sectionId === 'today') {
            navigate('/');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    interface ColorThemes {
        [key: string]: {
            light: { [key: string]: string };
            dark: { [key: string]: string };
        };
    }

    const colorThemes: ColorThemes = {
        black: {
            light: {
                '--radius': '0.65rem',
                '--background': 'oklch(1 0 0)',
                '--foreground': 'oklch(0.145 0 0)',
                '--card': 'oklch(1 0 0)',
                '--card-foreground': 'oklch(0.145 0 0)',
                '--popover': 'oklch(1 0 0)',
                '--popover-foreground': 'oklch(0.145 0 0)',
                '--primary': 'oklch(0.205 0 0)',
                '--primary-foreground': 'oklch(0.985 0 0)',
                '--secondary': 'oklch(0.97 0 0)',
                '--secondary-foreground': 'oklch(0.205 0 0)',
                '--muted': 'oklch(0.97 0 0)',
                '--muted-foreground': 'oklch(0.556 0 0)',
                '--accent': 'oklch(0.97 0 0)',
                '--accent-foreground': 'oklch(0.205 0 0)',
                '--destructive': 'oklch(0.577 0.245 27.325)',
                '--border': 'oklch(0.922 0 0)',
                '--input': 'oklch(0.922 0 0)',
                '--ring': 'oklch(0.708 0 0)',
                '--chart-1': 'oklch(0.646 0.222 41.116)',
                '--chart-2': 'oklch(0.6 0.118 184.704)',
                '--chart-3': 'oklch(0.398 0.07 227.392)',
                '--chart-4': 'oklch(0.828 0.189 84.429)',
                '--chart-5': 'oklch(0.769 0.188 70.08)',
                '--sidebar': 'oklch(0.985 0 0)',
                '--sidebar-foreground': 'oklch(0.145 0 0)',
                '--sidebar-primary': 'oklch(0.205 0 0)',
                '--sidebar-primary-foreground': 'oklch(0.985 0 0)',
                '--sidebar-accent': 'oklch(0.97 0 0)',
                '--sidebar-accent-foreground': 'oklch(0.205 0 0)',
                '--sidebar-border': 'oklch(0.922 0 0)',
                '--sidebar-ring': 'oklch(0.708 0 0)',
            },
            dark: {
                '--background': 'oklch(0.145 0 0)',
                '--foreground': 'oklch(0.985 0 0)',
                '--card': 'oklch(0.205 0 0)',
                '--card-foreground': 'oklch(0.985 0 0)',
                '--popover': 'oklch(0.205 0 0)',
                '--popover-foreground': 'oklch(0.985 0 0)',
                '--primary': 'oklch(0.922 0 0)',
                '--primary-foreground': 'oklch(0.205 0 0)',
                '--secondary': 'oklch(0.269 0 0)',
                '--secondary-foreground': 'oklch(0.985 0 0)',
                '--muted': 'oklch(0.269 0 0)',
                '--muted-foreground': 'oklch(0.708 0 0)',
                '--accent': 'oklch(0.269 0 0)',
                '--accent-foreground': 'oklch(0.985 0 0)',
                '--destructive': 'oklch(0.704 0.191 22.216)',
                '--border': 'oklch(1 0 0 / 10%)',
                '--input': 'oklch(1 0 0 / 15%)',
                '--ring': 'oklch(0.556 0 0)',
                '--chart-1': 'oklch(0.488 0.243 264.376)',
                '--chart-2': 'oklch(0.696 0.17 162.48)',
                '--chart-3': 'oklch(0.769 0.188 70.08)',
                '--chart-4': 'oklch(0.627 0.265 303.9)',
                '--chart-5': 'oklch(0.645 0.246 16.439)',
                '--sidebar': 'oklch(0.205 0 0)',
                '--sidebar-foreground': 'oklch(0.985 0 0)',
                '--sidebar-primary': 'oklch(0.488 0.243 264.376)',
                '--sidebar-primary-foreground': 'oklch(0.985 0 0)',
                '--sidebar-accent': 'oklch(0.269 0 0)',
                '--sidebar-accent-foreground': 'oklch(0.985 0 0)',
                '--sidebar-border': 'oklch(1 0 0 / 10%)',
                '--sidebar-ring': 'oklch(0.556 0 0)',
            },
        },
        red: {
            light: {
                '--radius': '0.65rem',
                '--background': 'oklch(1 0 0)',
                '--foreground': 'oklch(0.141 0.005 285.823)',
                '--card': 'oklch(1 0 0)',
                '--card-foreground': 'oklch(0.141 0.005 285.823)',
                '--popover': 'oklch(1 0 0)',
                '--popover-foreground': 'oklch(0.141 0.005 285.823)',
                '--primary': 'oklch(0.637 0.237 25.331)',
                '--primary-foreground': 'oklch(0.971 0.013 17.38)',
                '--secondary': 'oklch(0.967 0.001 286.375)',
                '--secondary-foreground': 'oklch(0.21 0.006 285.885)',
                '--muted': 'oklch(0.967 0.001 286.375)',
                '--muted-foreground': 'oklch(0.552 0.016 285.938)',
                '--accent': 'oklch(0.967 0.001 286.375)',
                '--accent-foreground': 'oklch(0.21 0.006 285.885)',
                '--destructive': 'oklch(0.577 0.245 27.325)',
                '--border': 'oklch(0.92 0.004 286.32)',
                '--input': 'oklch(0.92 0.004 286.32)',
                '--ring': 'oklch(0.637 0.237 25.331)',
                '--chart-1': 'oklch(0.646 0.222 41.116)',
                '--chart-2': 'oklch(0.6 0.118 184.704)',
                '--chart-3': 'oklch(0.398 0.07 227.392)',
                '--chart-4': 'oklch(0.828 0.189 84.429)',
                '--chart-5': 'oklch(0.769 0.188 70.08)',
                '--sidebar': 'oklch(0.985 0 0)',
                '--sidebar-foreground': 'oklch(0.141 0.005 285.823)',
                '--sidebar-primary': 'oklch(0.637 0.237 25.331)',
                '--sidebar-primary-foreground': 'oklch(0.971 0.013 17.38)',
                '--sidebar-accent': 'oklch(0.967 0.001 286.375)',
                '--sidebar-accent-foreground': 'oklch(0.21 0.006 285.885)',
                '--sidebar-border': 'oklch(0.92 0.004 286.32)',
                '--sidebar-ring': 'oklch(0.637 0.237 25.331)',
            },
            dark: {
                '--background': 'oklch(0.141 0.005 285.823)',
                '--foreground': 'oklch(0.985 0 0)',
                '--card': 'oklch(0.21 0.006 285.885)',
                '--card-foreground': 'oklch(0.985 0 0)',
                '--popover': 'oklch(0.21 0.006 285.885)',
                '--popover-foreground': 'oklch(0.985 0 0)',
                '--primary': 'oklch(0.637 0.237 25.331)',
                '--primary-foreground': 'oklch(0.971 0.013 17.38)',
                '--secondary': 'oklch(0.274 0.006 286.033)',
                '--secondary-foreground': 'oklch(0.985 0 0)',
                '--muted': 'oklch(0.274 0.006 286.033)',
                '--muted-foreground': 'oklch(0.705 0.015 286.067)',
                '--accent': 'oklch(0.274 0.006 286.033)',
                '--accent-foreground': 'oklch(0.985 0 0)',
                '--destructive': 'oklch(0.704 0.191 22.216)',
                '--border': 'oklch(1 0 0 / 10%)',
                '--input': 'oklch(1 0 0 / 15%)',
                '--ring': 'oklch(0.637 0.237 25.331)',
                '--chart-1': 'oklch(0.488 0.243 264.376)',
                '--chart-2': 'oklch(0.696 0.17 162.48)',
                '--chart-3': 'oklch(0.769 0.188 70.08)',
                '--chart-4': 'oklch(0.627 0.265 303.9)',
                '--chart-5': 'oklch(0.645 0.246 16.439)',
                '--sidebar': 'oklch(0.21 0.006 285.885)',
                '--sidebar-foreground': 'oklch(0.985 0 0)',
                '--sidebar-primary': 'oklch(0.637 0.237 25.331)',
                '--sidebar-primary-foreground': 'oklch(0.971 0.013 17.38)',
                '--sidebar-accent': 'oklch(0.274 0.006 286.033)',
                '--sidebar-accent-foreground': 'oklch(0.985 0 0)',
                '--sidebar-border': 'oklch(1 0 0 / 10%)',
                '--sidebar-ring': 'oklch(0.637 0.237 25.331)',
            },
        },
        rose: {
            light: {
                '--radius': '0.65rem',
                '--background': 'oklch(1 0 0)',
                '--foreground': 'oklch(0.141 0.005 285.823)',
                '--card': 'oklch(1 0 0)',
                '--card-foreground': 'oklch(0.141 0.005 285.823)',
                '--popover': 'oklch(1 0 0)',
                '--popover-foreground': 'oklch(0.141 0.005 285.823)',
                '--primary': 'oklch(0.645 0.246 16.439)',
                '--primary-foreground': 'oklch(0.969 0.015 12.422)',
                '--secondary': 'oklch(0.967 0.001 286.375)',
                '--secondary-foreground': 'oklch(0.21 0.006 285.885)',
                '--muted': 'oklch(0.967 0.001 286.375)',
                '--muted-foreground': 'oklch(0.552 0.016 285.938)',
                '--accent': 'oklch(0.967 0.001 286.375)',
                '--accent-foreground': 'oklch(0.21 0.006 285.885)',
                '--destructive': 'oklch(0.577 0.245 27.325)',
                '--border': 'oklch(0.92 0.004 286.32)',
                '--input': 'oklch(0.92 0.004 286.32)',
                '--ring': 'oklch(0.645 0.246 16.439)',
                '--chart-1': 'oklch(0.646 0.222 41.116)',
                '--chart-2': 'oklch(0.6 0.118 184.704)',
                '--chart-3': 'oklch(0.398 0.07 227.392)',
                '--chart-4': 'oklch(0.828 0.189 84.429)',
                '--chart-5': 'oklch(0.769 0.188 70.08)',
                '--sidebar': 'oklch(0.985 0 0)',
                '--sidebar-foreground': 'oklch(0.141 0.005 285.823)',
                '--sidebar-primary': 'oklch(0.645 0.246 16.439)',
                '--sidebar-primary-foreground': 'oklch(0.969 0.015 12.422)',
                '--sidebar-accent': 'oklch(0.967 0.001 286.375)',
                '--sidebar-accent-foreground': 'oklch(0.21 0.006 285.885)',
                '--sidebar-border': 'oklch(0.92 0.004 286.32)',
                '--sidebar-ring': 'oklch(0.645 0.246 16.439)',
            },
            dark: {
                '--background': 'oklch(0.141 0.005 285.823)',
                '--foreground': 'oklch(0.985 0 0)',
                '--card': 'oklch(0.21 0.006 285.885)',
                '--card-foreground': 'oklch(0.985 0 0)',
                '--popover': 'oklch(0.21 0.006 285.885)',
                '--popover-foreground': 'oklch(0.985 0 0)',
                '--primary': 'oklch(0.645 0.246 16.439)',
                '--primary-foreground': 'oklch(0.969 0.015 12.422)',
                '--secondary': 'oklch(0.274 0.006 286.033)',
                '--secondary-foreground': 'oklch(0.985 0 0)',
                '--muted': 'oklch(0.274 0.006 286.033)',
                '--muted-foreground': 'oklch(0.705 0.015 286.067)',
                '--accent': 'oklch(0.274 0.006 286.033)',
                '--accent-foreground': 'oklch(0.985 0 0)',
                '--destructive': 'oklch(0.704 0.191 22.216)',
                '--border': 'oklch(1 0 0 / 10%)',
                '--input': 'oklch(1 0 0 / 15%)',
                '--ring': 'oklch(0.645 0.246 16.439)',
                '--chart-1': 'oklch(0.488 0.243 264.376)',
                '--chart-2': 'oklch(0.696 0.17 162.48)',
                '--chart-3': 'oklch(0.769 0.188 70.08)',
                '--chart-4': 'oklch(0.627 0.265 303.9)',
                '--chart-5': 'oklch(0.645 0.246 16.439)',
                '--sidebar': 'oklch(0.21 0.006 285.885)',
                '--sidebar-foreground': 'oklch(0.985 0 0)',
                '--sidebar-primary': 'oklch(0.645 0.246 16.439)',
                '--sidebar-primary-foreground': 'oklch(0.969 0.015 12.422)',
                '--sidebar-accent': 'oklch(0.274 0.006 286.033)',
                '--sidebar-accent-foreground': 'oklch(0.985 0 0)',
                '--sidebar-border': 'oklch(1 0 0 / 10%)',
                '--sidebar-ring': 'oklch(0.645 0.246 16.439)',
            },
        },
        orange: {
            light: {
                '--radius': '0.65rem',
                '--background': 'oklch(1 0 0)',
                '--foreground': 'oklch(0.141 0.005 285.823)',
                '--card': 'oklch(1 0 0)',
                '--card-foreground': 'oklch(0.141 0.005 285.823)',
                '--popover': 'oklch(1 0 0)',
                '--popover-foreground': 'oklch(0.141 0.005 285.823)',
                '--primary': 'oklch(0.705 0.213 47.604)',
                '--primary-foreground': 'oklch(0.98 0.016 73.684)',
                '--secondary': 'oklch(0.967 0.001 286.375)',
                '--secondary-foreground': 'oklch(0.21 0.006 285.885)',
                '--muted': 'oklch(0.967 0.001 286.375)',
                '--muted-foreground': 'oklch(0.552 0.016 285.938)',
                '--accent': 'oklch(0.967 0.001 286.375)',
                '--accent-foreground': 'oklch(0.21 0.006 285.885)',
                '--destructive': 'oklch(0.577 0.245 27.325)',
                '--border': 'oklch(0.92 0.004 286.32)',
                '--input': 'oklch(0.92 0.004 286.32)',
                '--ring': 'oklch(0.705 0.213 47.604)',
                '--chart-1': 'oklch(0.646 0.222 41.116)',
                '--chart-2': 'oklch(0.6 0.118 184.704)',
                '--chart-3': 'oklch(0.398 0.07 227.392)',
                '--chart-4': 'oklch(0.828 0.189 84.429)',
                '--chart-5': 'oklch(0.769 0.188 70.08)',
                '--sidebar': 'oklch(0.985 0 0)',
                '--sidebar-foreground': 'oklch(0.141 0.005 285.823)',
                '--sidebar-primary': 'oklch(0.705 0.213 47.604)',
                '--sidebar-primary-foreground': 'oklch(0.98 0.016 73.684)',
                '--sidebar-accent': 'oklch(0.967 0.001 286.375)',
                '--sidebar-accent-foreground': 'oklch(0.21 0.006 285.885)',
                '--sidebar-border': 'oklch(0.92 0.004 286.32)',
                '--sidebar-ring': 'oklch(0.705 0.213 47.604)',
            },
            dark: {
                '--background': 'oklch(0.141 0.005 285.823)',
                '--foreground': 'oklch(0.985 0 0)',
                '--card': 'oklch(0.21 0.006 285.885)',
                '--card-foreground': 'oklch(0.985 0 0)',
                '--popover': 'oklch(0.21 0.006 285.885)',
                '--popover-foreground': 'oklch(0.985 0 0)',
                '--primary': 'oklch(0.646 0.222 41.116)',
                '--primary-foreground': 'oklch(0.98 0.016 73.684)',
                '--secondary': 'oklch(0.274 0.006 286.033)',
                '--secondary-foreground': 'oklch(0.985 0 0)',
                '--muted': 'oklch(0.274 0.006 286.033)',
                '--muted-foreground': 'oklch(0.705 0.015 286.067)',
                '--accent': 'oklch(0.274 0.006 286.033)',
                '--accent-foreground': 'oklch(0.985 0 0)',
                '--destructive': 'oklch(0.704 0.191 22.216)',
                '--border': 'oklch(1 0 0 / 10%)',
                '--input': 'oklch(1 0 0 / 15%)',
                '--ring': 'oklch(0.646 0.222 41.116)',
                '--chart-1': 'oklch(0.488 0.243 264.376)',
                '--chart-2': 'oklch(0.696 0.17 162.48)',
                '--chart-3': 'oklch(0.769 0.188 70.08)',
                '--chart-4': 'oklch(0.627 0.265 303.9)',
                '--chart-5': 'oklch(0.645 0.246 16.439)',
                '--sidebar': 'oklch(0.21 0.006 285.885)',
                '--sidebar-foreground': 'oklch(0.985 0 0)',
                '--sidebar-primary': 'oklch(0.646 0.222 41.116)',
                '--sidebar-primary-foreground': 'oklch(0.98 0.016 73.684)',
                '--sidebar-accent': 'oklch(0.274 0.006 286.033)',
                '--sidebar-accent-foreground': 'oklch(0.985 0 0)',
                '--sidebar-border': 'oklch(1 0 0 / 10%)',
                '--sidebar-ring': 'oklch(0.646 0.222 41.116)',
            },
        },
        green: {
            light: {
                '--radius': '0.65rem',
                '--background': 'oklch(1 0 0)',
                '--foreground': 'oklch(0.141 0.005 285.823)',
                '--card': 'oklch(1 0 0)',
                '--card-foreground': 'oklch(0.141 0.005 285.823)',
                '--popover': 'oklch(1 0 0)',
                '--popover-foreground': 'oklch(0.141 0.005 285.823)',
                '--primary': 'oklch(0.723 0.219 149.579)',
                '--primary-foreground': 'oklch(0.982 0.018 155.826)',
                '--secondary': 'oklch(0.967 0.001 286.375)',
                '--secondary-foreground': 'oklch(0.21 0.006 285.885)',
                '--muted': 'oklch(0.967 0.001 286.375)',
                '--muted-foreground': 'oklch(0.552 0.016 285.938)',
                '--accent': 'oklch(0.967 0.001 286.375)',
                '--accent-foreground': 'oklch(0.21 0.006 285.885)',
                '--destructive': 'oklch(0.577 0.245 27.325)',
                '--border': 'oklch(0.92 0.004 286.32)',
                '--input': 'oklch(0.92 0.004 286.32)',
                '--ring': 'oklch(0.723 0.219 149.579)',
                '--chart-1': 'oklch(0.646 0.222 41.116)',
                '--chart-2': 'oklch(0.6 0.118 184.704)',
                '--chart-3': 'oklch(0.398 0.07 227.392)',
                '--chart-4': 'oklch(0.828 0.189 84.429)',
                '--chart-5': 'oklch(0.769 0.188 70.08)',
                '--sidebar': 'oklch(0.985 0 0)',
                '--sidebar-foreground': 'oklch(0.141 0.005 285.823)',
                '--sidebar-primary': 'oklch(0.723 0.219 149.579)',
                '--sidebar-primary-foreground': 'oklch(0.982 0.018 155.826)',
                '--sidebar-accent': 'oklch(0.967 0.001 286.375)',
                '--sidebar-accent-foreground': 'oklch(0.21 0.006 285.885)',
                '--sidebar-border': 'oklch(0.92 0.004 286.32)',
                '--sidebar-ring': 'oklch(0.723 0.219 149.579)',
            },
            dark: {
                '--background': 'oklch(0.141 0.005 285.823)',
                '--foreground': 'oklch(0.985 0 0)',
                '--card': 'oklch(0.21 0.006 285.885)',
                '--card-foreground': 'oklch(0.985 0 0)',
                '--popover': 'oklch(0.21 0.006 285.885)',
                '--popover-foreground': 'oklch(0.985 0 0)',
                '--primary': 'oklch(0.696 0.17 162.48)',
                '--primary-foreground': 'oklch(0.393 0.095 152.535)',
                '--secondary': 'oklch(0.274 0.006 286.033)',
                '--secondary-foreground': 'oklch(0.985 0 0)',
                '--muted': 'oklch(0.274 0.006 286.033)',
                '--muted-foreground': 'oklch(0.705 0.015 286.067)',
                '--accent': 'oklch(0.274 0.006 286.033)',
                '--accent-foreground': 'oklch(0.985 0 0)',
                '--destructive': 'oklch(0.704 0.191 22.216)',
                '--border': 'oklch(1 0 0 / 10%)',
                '--input': 'oklch(1 0 0 / 15%)',
                '--ring': 'oklch(0.527 0.154 150.069)',
                '--chart-1': 'oklch(0.488 0.243 264.376)',
                '--chart-2': 'oklch(0.696 0.17 162.48)',
                '--chart-3': 'oklch(0.769 0.188 70.08)',
                '--chart-4': 'oklch(0.627 0.265 303.9)',
                '--chart-5': 'oklch(0.645 0.246 16.439)',
                '--sidebar': 'oklch(0.21 0.006 285.885)',
                '--sidebar-foreground': 'oklch(0.985 0 0)',
                '--sidebar-primary': 'oklch(0.696 0.17 162.48)',
                '--sidebar-primary-foreground': 'oklch(0.393 0.095 152.535)',
                '--sidebar-accent': 'oklch(0.274 0.006 286.033)',
                '--sidebar-accent-foreground': 'oklch(0.985 0 0)',
                '--sidebar-border': 'oklch(1 0 0 / 10%)',
                '--sidebar-ring': 'oklch(0.527 0.154 150.069)',
            },
        },
        blue: {
            light: {
                '--radius': '0.65rem',
                '--background': 'oklch(1 0 0)',
                '--foreground': 'oklch(0.141 0.005 285.823)',
                '--card': 'oklch(1 0 0)',
                '--card-foreground': 'oklch(0.141 0.005 285.823)',
                '--popover': 'oklch(1 0 0)',
                '--popover-foreground': 'oklch(0.141 0.005 285.823)',
                '--primary': 'oklch(0.623 0.214 259.815)',
                '--primary-foreground': 'oklch(0.97 0.014 254.604)',
                '--secondary': 'oklch(0.967 0.001 286.375)',
                '--secondary-foreground': 'oklch(0.21 0.006 285.885)',
                '--muted': 'oklch(0.967 0.001 286.375)',
                '--muted-foreground': 'oklch(0.552 0.016 285.938)',
                '--accent': 'oklch(0.967 0.001 286.375)',
                '--accent-foreground': 'oklch(0.21 0.006 285.885)',
                '--destructive': 'oklch(0.577 0.245 27.325)',
                '--border': 'oklch(0.92 0.004 286.32)',
                '--input': 'oklch(0.92 0.004 286.32)',
                '--ring': 'oklch(0.623 0.214 259.815)',
                '--chart-1': 'oklch(0.646 0.222 41.116)',
                '--chart-2': 'oklch(0.6 0.118 184.704)',
                '--chart-3': 'oklch(0.398 0.07 227.392)',
                '--chart-4': 'oklch(0.828 0.189 84.429)',
                '--chart-5': 'oklch(0.769 0.188 70.08)',
                '--sidebar': 'oklch(0.985 0 0)',
                '--sidebar-foreground': 'oklch(0.141 0.005 285.823)',
                '--sidebar-primary': 'oklch(0.623 0.214 259.815)',
                '--sidebar-primary-foreground': 'oklch(0.97 0.014 254.604)',
                '--sidebar-accent': 'oklch(0.967 0.001 286.375)',
                '--sidebar-accent-foreground': 'oklch(0.21 0.006 285.885)',
                '--sidebar-border': 'oklch(0.92 0.004 286.32)',
                '--sidebar-ring': 'oklch(0.623 0.214 259.815)',
            },
            dark: {
                '--background': 'oklch(0.141 0.005 285.823)',
                '--foreground': 'oklch(0.985 0 0)',
                '--card': 'oklch(0.21 0.006 285.885)',
                '--card-foreground': 'oklch(0.985 0 0)',
                '--popover': 'oklch(0.21 0.006 285.885)',
                '--popover-foreground': 'oklch(0.985 0 0)',
                '--primary': 'oklch(0.546 0.245 262.881)',
                '--primary-foreground': 'oklch(0.379 0.146 265.522)',
                '--secondary': 'oklch(0.274 0.006 286.033)',
                '--secondary-foreground': 'oklch(0.985 0 0)',
                '--muted': 'oklch(0.274 0.006 286.033)',
                '--muted-foreground': 'oklch(0.705 0.015 286.067)',
                '--accent': 'oklch(0.274 0.006 286.033)',
                '--accent-foreground': 'oklch(0.985 0 0)',
                '--destructive': 'oklch(0.704 0.191 22.216)',
                '--border': 'oklch(1 0 0 / 10%)',
                '--input': 'oklch(1 0 0 / 15%)',
                '--ring': 'oklch(0.488 0.243 264.376)',
                '--chart-1': 'oklch(0.488 0.243 264.376)',
                '--chart-2': 'oklch(0.696 0.17 162.48)',
                '--chart-3': 'oklch(0.769 0.188 70.08)',
                '--chart-4': 'oklch(0.627 0.265 303.9)',
                '--chart-5': 'oklch(0.645 0.246 16.439)',
                '--sidebar': 'oklch(0.21 0.006 285.885)',
                '--sidebar-foreground': 'oklch(0.985 0 0)',
                '--sidebar-primary': 'oklch(0.546 0.245 262.881)',
                '--sidebar-primary-foreground': 'oklch(0.379 0.146 265.522)',
                '--sidebar-accent': 'oklch(0.274 0.006 286.033)',
                '--sidebar-accent-foreground': 'oklch(0.985 0 0)',
                '--sidebar-border': 'oklch(1 0 0 / 10%)',
                '--sidebar-ring': 'oklch(0.488 0.243 264.376)',
            },
        },
        yellow: {
            light: {
                '--radius': '0.65rem',
                '--background': 'oklch(1 0 0)',
                '--foreground': 'oklch(0.141 0.005 285.823)',
                '--card': 'oklch(1 0 0)',
                '--card-foreground': 'oklch(0.141 0.005 285.823)',
                '--popover': 'oklch(1 0 0)',
                '--popover-foreground': 'oklch(0.141 0.005 285.823)',
                '--primary': 'oklch(0.795 0.184 86.047)',
                '--primary-foreground': 'oklch(0.421 0.095 57.708)',
                '--secondary': 'oklch(0.967 0.001 286.375)',
                '--secondary-foreground': 'oklch(0.21 0.006 285.885)',
                '--muted': 'oklch(0.967 0.001 286.375)',
                '--muted-foreground': 'oklch(0.552 0.016 285.938)',
                '--accent': 'oklch(0.967 0.001 286.375)',
                '--accent-foreground': 'oklch(0.21 0.006 285.885)',
                '--destructive': 'oklch(0.577 0.245 27.325)',
                '--border': 'oklch(0.92 0.004 286.32)',
                '--input': 'oklch(0.92 0.004 286.32)',
                '--ring': 'oklch(0.795 0.184 86.047)',
                '--chart-1': 'oklch(0.646 0.222 41.116)',
                '--chart-2': 'oklch(0.6 0.118 184.704)',
                '--chart-3': 'oklch(0.398 0.07 227.392)',
                '--chart-4': 'oklch(0.828 0.189 84.429)',
                '--chart-5': 'oklch(0.769 0.188 70.08)',
                '--sidebar': 'oklch(0.985 0 0)',
                '--sidebar-foreground': 'oklch(0.141 0.005 285.823)',
                '--sidebar-primary': 'oklch(0.795 0.184 86.047)',
                '--sidebar-primary-foreground': 'oklch(0.421 0.095 57.708)',
                '--sidebar-accent': 'oklch(0.967 0.001 286.375)',
                '--sidebar-accent-foreground': 'oklch(0.21 0.006 285.885)',
                '--sidebar-border': 'oklch(0.92 0.004 286.32)',
                '--sidebar-ring': 'oklch(0.795 0.184 86.047)',
            },
            dark: {
                '--background': 'oklch(0.141 0.005 285.823)',
                '--foreground': 'oklch(0.985 0 0)',
                '--card': 'oklch(0.21 0.006 285.885)',
                '--card-foreground': 'oklch(0.985 0 0)',
                '--popover': 'oklch(0.21 0.006 285.885)',
                '--popover-foreground': 'oklch(0.985 0 0)',
                '--primary': 'oklch(0.795 0.184 86.047)',
                '--primary-foreground': 'oklch(0.421 0.095 57.708)',
                '--secondary': 'oklch(0.274 0.006 286.033)',
                '--secondary-foreground': 'oklch(0.985 0 0)',
                '--muted': 'oklch(0.274 0.006 286.033)',
                '--muted-foreground': 'oklch(0.705 0.015 286.067)',
                '--accent': 'oklch(0.274 0.006 286.033)',
                '--accent-foreground': 'oklch(0.985 0 0)',
                '--destructive': 'oklch(0.704 0.191 22.216)',
                '--border': 'oklch(1 0 0 / 10%)',
                '--input': 'oklch(1 0 0 / 15%)',
                '--ring': 'oklch(0.554 0.135 66.442)',
                '--chart-1': 'oklch(0.488 0.243 264.376)',
                '--chart-2': 'oklch(0.696 0.17 162.48)',
                '--chart-3': 'oklch(0.769 0.188 70.08)',
                '--chart-4': 'oklch(0.627 0.265 303.9)',
                '--chart-5': 'oklch(0.645 0.246 16.439)',
                '--sidebar': 'oklch(0.21 0.006 285.885)',
                '--sidebar-foreground': 'oklch(0.985 0 0)',
                '--sidebar-primary': 'oklch(0.795 0.184 86.047)',
                '--sidebar-primary-foreground': 'oklch(0.421 0.095 57.708)',
                '--sidebar-accent': 'oklch(0.274 0.006 286.033)',
                '--sidebar-accent-foreground': 'oklch(0.985 0 0)',
                '--sidebar-border': 'oklch(1 0 0 / 10%)',
                '--sidebar-ring': 'oklch(0.554 0.135 66.442)',
            },
        },
        violet: {
            light: {
                '--radius': '0.65rem',
                '--background': 'oklch(1 0 0)',
                '--foreground': 'oklch(0.141 0.005 285.823)',
                '--card': 'oklch(1 0 0)',
                '--card-foreground': 'oklch(0.141 0.005 285.823)',
                '--popover': 'oklch(1 0 0)',
                '--popover-foreground': 'oklch(0.141 0.005 285.823)',
                '--primary': 'oklch(0.606 0.25 292.717)',
                '--primary-foreground': 'oklch(0.969 0.016 293.756)',
                '--secondary': 'oklch(0.967 0.001 286.375)',
                '--secondary-foreground': 'oklch(0.21 0.006 285.885)',
                '--muted': 'oklch(0.967 0.001 286.375)',
                '--muted-foreground': 'oklch(0.552 0.016 285.938)',
                '--accent': 'oklch(0.967 0.001 286.375)',
                '--accent-foreground': 'oklch(0.21 0.006 285.885)',
                '--destructive': 'oklch(0.577 0.245 27.325)',
                '--border': 'oklch(0.92 0.004 286.32)',
                '--input': 'oklch(0.92 0.004 286.32)',
                '--ring': 'oklch(0.606 0.25 292.717)',
                '--chart-1': 'oklch(0.646 0.222 41.116)',
                '--chart-2': 'oklch(0.6 0.118 184.704)',
                '--chart-3': 'oklch(0.398 0.07 227.392)',
                '--chart-4': 'oklch(0.828 0.189 84.429)',
                '--chart-5': 'oklch(0.769 0.188 70.08)',
                '--sidebar': 'oklch(0.985 0 0)',
                '--sidebar-foreground': 'oklch(0.141 0.005 285.823)',
                '--sidebar-primary': 'oklch(0.606 0.25 292.717)',
                '--sidebar-primary-foreground': 'oklch(0.969 0.016 293.756)',
                '--sidebar-accent': 'oklch(0.967 0.001 286.375)',
                '--sidebar-accent-foreground': 'oklch(0.21 0.006 285.885)',
                '--sidebar-border': 'oklch(0.92 0.004 286.32)',
                '--sidebar-ring': 'oklch(0.606 0.25 292.717)',
            },
            dark: {
                '--background': 'oklch(0.141 0.005 285.823)',
                '--foreground': 'oklch(0.985 0 0)',
                '--card': 'oklch(0.21 0.006 285.885)',
                '--card-foreground': 'oklch(0.985 0 0)',
                '--popover': 'oklch(0.21 0.006 285.885)',
                '--popover-foreground': 'oklch(0.985 0 0)',
                '--primary': 'oklch(0.541 0.281 293.009)',
                '--primary-foreground': 'oklch(0.969 0.016 293.756)',
                '--secondary': 'oklch(0.274 0.006 286.033)',
                '--secondary-foreground': 'oklch(0.985 0 0)',
                '--muted': 'oklch(0.274 0.006 286.033)',
                '--muted-foreground': 'oklch(0.705 0.015 286.067)',
                '--accent': 'oklch(0.274 0.006 286.033)',
                '--accent-foreground': 'oklch(0.985 0 0)',
                '--destructive': 'oklch(0.704 0.191 22.216)',
                '--border': 'oklch(1 0 0 / 10%)',
                '--input': 'oklch(1 0 0 / 15%)',
                '--ring': 'oklch(0.541 0.281 293.009)',
                '--chart-1': 'oklch(0.488 0.243 264.376)',
                '--chart-2': 'oklch(0.696 0.17 162.48)',
                '--chart-3': 'oklch(0.769 0.188 70.08)',
                '--chart-4': 'oklch(0.627 0.265 303.9)',
                '--chart-5': 'oklch(0.645 0.246 16.439)',
                '--sidebar': 'oklch(0.21 0.006 285.885)',
                '--sidebar-foreground': 'oklch(0.985 0 0)',
                '--sidebar-primary': 'oklch(0.541 0.281 293.009)',
                '--sidebar-primary-foreground': 'oklch(0.969 0.016 293.756)',
                '--sidebar-accent': 'oklch(0.274 0.006 286.033)',
                '--sidebar-accent-foreground': 'oklch(0.985 0 0)',
                '--sidebar-border': 'oklch(1 0 0 / 10%)',
                '--sidebar-ring': 'oklch(0.541 0.281 293.009)',
            },
        },
    };
    type ThemeKey = keyof typeof colorThemes;

    const [theme, setTheme] = useState('black');

    const applyTheme = (themeKey: string) => {
        setTheme(themeKey);
        const theme = colorThemes[themeKey as ThemeKey];
        if (!theme) return;
        const url = new URL(window.location.href);
        url.searchParams.set('theme', themeKey);
        window.history.replaceState({}, '', url.toString());
        if (theme.light) {
            Object.entries(theme.dark).forEach(([key, value]) => {
                document.documentElement.style.setProperty(String(key), String(value));
            });
        }
        const darkRoot = document.querySelector('.dark');
        if (theme.dark && darkRoot) {
            Object.entries(theme.dark).forEach(([key, value]) => {
                (darkRoot as HTMLElement).style.setProperty(String(key), String(value));
            });
        }
    };

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const urlTheme = params.get('theme');
        if (urlTheme && colorThemes[urlTheme]) {
            applyTheme(urlTheme);
        }
    }, []);

    // @ts-ignore
    return (
        <header id={'header'} className="sticky top-0 z-50 h-0 w-auto">
            <div
                className={`supports-[backdrop-filter]:bg-background/60 border-b-primary sticky z-50 container mx-4 mt-4 flex h-16 w-auto items-center justify-between rounded-2xl px-3 backdrop-blur`}
            >
                <div className="flex items-center gap-4">
                    <Select value={theme} onValueChange={(value: string) => applyTheme(value)}>
                        <SelectTrigger className={`bg-primary-foreground`}>
                            <LucidePalette />
                            {theme.charAt(0).toUpperCase() + theme.slice(1)}
                        </SelectTrigger>
                        <SelectContent>
                            {Object.keys(colorThemes).map((key) => (
                                <SelectItem key={key} value={key}>
                                    <LucidePalette /> {key.charAt(0).toUpperCase() + key.slice(1)}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Link to="/Wordle" className="flex items-center gap-2 transition-opacity hover:opacity-80">
                        <h1 className="text-2xl font-bold">Wordle Solutions</h1>
                    </Link>
                </div>

                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                                <Link
                                    to="/Wordle"
                                    className="flex items-center gap-2"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleScrollToSection('today');
                                    }}
                                >
                                    <div className={'flex items-center gap-2'}>
                                        <span>Home</span>
                                        <Home className="h-4 w-4" />
                                    </div>
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
                                <Link to="https://github.com/An0n-00/Wordle" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                    <div className={'flex items-center gap-2'}>
                                        <span>GitHub</span>
                                        <Github className="h-4 w-4" />
                                    </div>
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Mobile Menu */}
                <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <LucideMenu />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="flex flex-col">
                        <div className="flex flex-col space-y-4 py-4">
                            <Link
                                to="/Wordle"
                                className="hover:bg-muted flex items-center gap-2 rounded-md px-4 py-2"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleScrollToSection('hero');
                                }}
                            >
                                <Home className="h-5 w-5" />
                                <span>Home</span>
                            </Link>
                            <Link
                                to="https://github.com/An0n-00/Wordle"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:bg-muted flex items-center gap-2 rounded-md px-4 py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <Github className="h-4 w-4" />
                                <span>GitHub</span>
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}