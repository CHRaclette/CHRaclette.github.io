import Main from '@/pages/Main/Main.tsx';
import NotFound from '@/pages/404/NotFound.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner.tsx';
import { ThemeProvider } from '@/components/ui/theme-provider';

export default function App() {
    return (
        <>
            <ThemeProvider>
                <BrowserRouter>
                    <Routes>
                        {/* Main */}
                        <Route path="/" element={<Main />} />

                        {/* 404 */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
                <Toaster closeButton richColors visibleToasts={5} />
            </ThemeProvider>
        </>
    );
}
