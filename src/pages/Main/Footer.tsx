
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

export function Footer() {
    return (
        <footer id={'footer'} className="bg-secondary py-8 md:py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-6 grid grid-cols-2 gap-6 md:mb-8 md:grid-cols-4 md:gap-8">
                    <div className="col-span-2 md:col-span-1">
                        <div className="mb-3 flex items-center gap-2 md:mb-4">
                            <h1 className="text-2xl font-bold">Wordle Solutions</h1>
                        </div>
                        <p className="text-muted-foreground text-xs md:text-sm">Get the answer to today's Wordle and explore past and future solutions. Powered by the community, for the community.</p>
                    </div>
                    <div>
                        <h3 className="mb-2 text-sm font-semibold md:mb-4 md:text-base">Links</h3>
                        <ul className="space-y-1 md:space-y-2">
                            <li>
                                <Link to="https://github.com/An0n-00/wordle" className="text-muted-foreground hover:text-foreground text-xs md:text-sm" target="_blank" rel="noopener noreferrer">
                                    GitHub Repository
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="https://github.com/An0n-00/wordle#readme"
                                    className="text-muted-foreground hover:text-foreground text-xs md:text-sm"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    About Project
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="https://github.com/An0n-00/wordle/issues"
                                    className="text-muted-foreground hover:text-foreground text-xs md:text-sm"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Report Issue
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-2 text-sm font-semibold md:mb-4 md:text-base">Resources</h3>
                        <ul className="space-y-1 md:space-y-2">
                            <li>
                                <Link
                                    to="https://www.nytimes.com/games/wordle/index.html"
                                    className="text-muted-foreground hover:text-foreground text-xs md:text-sm"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Play Wordle
                                </Link>
                            </li>
                            <li>
                                <Link to="https://github.com/gnuns/allorigins" className="text-muted-foreground hover:text-foreground text-xs md:text-sm" target="_blank" rel="noopener noreferrer">
                                    AllOrigins API
                                </Link>
                            </li>
                            <li>
                                <Link to="https://ui.shadcn.com" className="text-muted-foreground hover:text-foreground text-xs md:text-sm" target="_blank" rel="noopener noreferrer">
                                    ShadCN UI
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-2 text-sm font-semibold md:mb-4 md:text-base">Contact</h3>
                        <ul className="space-y-1 md:space-y-2">
                            <li>
                                <Link to="https://github.com/An0n-00" className="text-muted-foreground hover:text-foreground text-xs md:text-sm" target="_blank" rel="noopener noreferrer">
                                    An0n-00 on GitHub
                                </Link>
                                <br/>
                                <Link to="https://github.com/CHRaclette" className="text-muted-foreground hover:text-foreground text-xs md:text-sm" target="_blank" rel="noopener noreferrer">
                                    CHRaclette on GitHub
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <Separator className="mb-6 md:mb-8" />
                <div className="flex flex-col items-center justify-between md:flex-row">
                    <p className="text-muted-foreground text-xs md:text-sm">
                        © {new Date().getFullYear()} Wordle Solutions by{' '}
                        <a href="https://github.com/An0n-00/wordle" className="underline" target="_blank" rel="noopener noreferrer">
                            An0n-00
                        </a>
                        . All rights reserved.
                    </p>
                    <div className="mt-4 flex flex-wrap justify-center gap-4 md:mt-0">
                        <Link
                            to="#footer"
                            className="text-muted-foreground hover:text-foreground text-xs md:text-sm"
                            onClick={(e) => {
                                e.preventDefault();
                                toast.success('We do not use/collect any kinds of cookies💪');
                            }}
                        >
                            Cookie Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}