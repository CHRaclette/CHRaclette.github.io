
import { ArrowRight, LucideChevronsLeft, LucideChevronsRight, ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { toast } from 'sonner';
import { Header } from '@/pages/Main/Header';
import { Footer } from '@/pages/Main/Footer';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover';

export default function Main() {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
        setTimeout(() => {
            const element = document.getElementById(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    }

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <Today />
            <Footer />
        </div>
    );
}



type WordleData = {
    id: number;
    solution: string;
    print_date: string;
    days_since_launch: number;
    editor: string;
};

function formatDate(date: Date) {
    return date.toISOString().slice(0, 10);
}

function addDays(date: Date, days: number) {
    const d = new Date(date);
    d.setDate(d.getDate() + days);
    return d;
}

export function Today() {
    const [date, setDate] = useState(() => {
        const now = new Date();
        return now;
    });
    const [data, setData] = useState<WordleData | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // check if ?date=YYYY-MM-DD is present in the url and if it is a valid date
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const urlDate = params.get('date');
        if (urlDate) {
            const d = new Date(urlDate);
            if (!isNaN(d.getTime())) {
                setDate(d);
            }
        }
    }, []);

    useEffect(() => {
        setLoading(true);
        setError(null);
        setData(null);
        const url = `https://api.allorigins.win/raw?url=https://www.nytimes.com/svc/wordle/v2/${formatDate(date)}.json`;
        fetch(url)
            .then(async (res) => {
                if (!res.ok) {
                    toast.error('Error fetching data: No data for this date.');
                    throw new Error('No data for this date.');
                }
                const data = await res.json();
                toast.success('Data fetched successfully!');
                // add ?date=YYYY-MM-DD to the url without reloading the page
                const url = new URL(window.location.href);
                url.searchParams.set('date', formatDate(date));
                window.history.replaceState({}, '', url.toString());
                return data;
            })
            .then(setData)
            .catch((e) => {
                toast.error('Error fetching data: ' + e.message);
                setError(e.message);
            })
            .finally(() => setLoading(false));
    }, [date]);

    const goTo = (days: number) => setDate((d) => addDays(d, days));

    return (
        <section id="today" className="relative container mx-auto flex min-h-[100vh] w-full flex-col items-center px-4 py-25 text-center">
            <div className="z-1 container mx-auto mt-8 flex flex-col items-center text-center sm:mt-16">
                <h1 className="mb-6 flex flex-wrap items-center justify-center gap-2 text-3xl font-bold tracking-tight md:text-4xl lg:text-6xl">
                    <span className="text-primary">Wordle Solutions</span>
                </h1>
                <p className="text-muted-foreground mb-8 max-w-[800px] text-base md:text-xl">
                    This website provides you the solution of today&apos;s Wordle along with the solutions of previous days and also the ones in the near future. YES THIS WEBSITE CAN PREDICT THE
                    FUTURE!
                </p>
                <Card className="bg-card/80 border-border w-full max-w-md border-2 shadow-xl">
                    <CardHeader>
                        <CardTitle className="text-2xl">
                            {loading && 'Loading...'}
                            {error && 'Error'}
                            {!loading && !error && (!data || !data.print_date) && 'The Future seems too cloudy!'}
                            <div className="mt-6 flex w-full justify-center">
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            className="px-4 py-6 text-[30px]"
                                        >
                                            {date
                                                ? date.toLocaleDateString("de-DE", { day: "2-digit", month: "long", year: "numeric" })
                                                : "Datum wählen"}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent
                                        side="right"
                                        sideOffset={10}
                                        align="end"
                                        className="p-0 w-[500px] mt-195 ml-200"
                                    >
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={(d) => {
                                                if (d) setDate(d)
                                            }}
                                            className="bg-background rounded-md border text-lg p-4"
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>



                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                            {data && data.editor ? (
                                `Editor: ${data.editor}`
                            ) : !loading && !error && (!data || !data.editor) ? (
                                <>
                                    Please go back to today.<br></br>
                                    <Button onClick={() => setDate(new Date())} className="mt-4 w-full text-sm">
                                        Today
                                    </Button>
                                </>
                            ) : (
                                ''
                            )}
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center gap-4">
                        {loading && <span className="text-primary animate-pulse">Loading...</span>}
                        {error && (
                            <>
                                <span className="text-destructive">
                                    <strong>{error}.</strong>
                                    <br></br> <strong>It looks like you may have clicked a button too many times, or the server might be temporarily unavailable.</strong>
                                    <br></br>
                                    <br></br> Please avoid abusing this service. We rely on the free and generous API provided by{' '}
                                    <a className="underline" href="https://github.com/gnuns/allorigins">
                                        gnuns' AllOrigins
                                    </a>
                                    , which is available for everyone to use. Excessive or abusive use can lead to rate limits or even getting blocked — so please don't push the limits. You also might
                                    have gotten this error on load or after one button click. That is normal. Just bare with me👍<br></br>
                                    <br></br>
                                    If this error persists, please do not hesitate to open an issue on{' '}
                                    <a className="underline" href="https://github.com/An0n-00/wordle/issues">
                                        GitHub
                                    </a>
                                    .<br></br>
                                    Thanks for your understanding. An0n-00
                                </span>
                                <Button onClick={() => setDate(new Date())} className="mt-4 w-full text-sm">
                                    Try Again (Today)
                                </Button>
                            </>
                        )}
                        {data && !error && !loading && typeof data.solution === 'string' && data.solution && (
                            <>
                                <span
                                    className="from-primary to-secondary text-primary-foreground relative w-full cursor-pointer rounded-xl bg-gradient-to-r py-2 font-mono text-4xl font-bold tracking-widest shadow-lg transition-transform duration-200 select-all hover:scale-105 active:scale-95"
                                    title="Click to copy"
                                    onClick={() => {
                                        navigator.clipboard.writeText(data.solution);
                                        toast.success('Copied to clipboard!');
                                    }}
                                >
                                    <span className="dark:text-secondary-foreground inline-block">{typeof data.solution === 'string' ? data.solution.toUpperCase() : ''}</span>
                                </span>
                                <Button onClick={() => setDate(new Date())} className="mt-4 w-full text-sm">
                                    Today
                                </Button>
                                <div className="flex w-full gap-2">
                                    <Button variant="outline" onClick={() => goTo(-7)} className="hidden flex-1 text-sm sm:flex">
                                        <LucideChevronsLeft />
                                        -1w
                                    </Button>
                                    <Button variant="outline" onClick={() => goTo(-1)} className="flex-1 text-sm">
                                        <ArrowLeft />
                                        Yesterday
                                    </Button>
                                    <Button variant="outline" onClick={() => goTo(1)} className="flex-1 text-sm">
                                        Tomorrow
                                        <ArrowRight />
                                    </Button>
                                    <Button variant="outline" onClick={() => goTo(7)} className="hidden flex-1 text-sm sm:flex">
                                        +1w
                                        <LucideChevronsRight />
                                    </Button>
                                </div>
                            </>
                        )}
                    </CardContent>
                </Card>

            </div>
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center w-full h-full ">
                <div className="bg-primary rounded-full blur-[98px] w-[550px] h-[300px]"></div>
            </div>

        </section>
    );
}


