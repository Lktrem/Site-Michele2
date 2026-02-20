import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useSecurityProtection from "@/hooks/useSecurityProtection";

// Retry wrapper for lazy imports to handle stale module cache
const lazyWithRetry = (importFn: () => Promise<any>) =>
  lazy(() =>
    importFn().catch(() => {
      // Retry once after a brief delay (handles stale cached modules)
      return new Promise<any>((resolve) => setTimeout(resolve, 100)).then(importFn);
    })
  );

// Lazy load pages for better performance
const Home = lazyWithRetry(() => import("./pages/Home"));
const Igrejas = lazyWithRetry(() => import("./pages/Igrejas"));
const Escolas = lazyWithRetry(() => import("./pages/Escolas"));
const Empresas = lazyWithRetry(() => import("./pages/Empresas"));
const Industria = lazyWithRetry(() => import("./pages/Industria"));
const Drifts = lazyWithRetry(() => import("./pages/Drifts"));
const Institucionais = lazyWithRetry(() => import("./pages/Institucionais"));
const Governos = lazyWithRetry(() => import("./pages/Governos"));
const Fitness = lazyWithRetry(() => import("./pages/Fitness"));
const Departamentos = lazyWithRetry(() => import("./pages/Departamentos"));
const DriFit = lazyWithRetry(() => import("./pages/DriFit"));
const InformacoesTecnicas = lazyWithRetry(() => import("./pages/InformacoesTecnicas"));
const Sobre = lazyWithRetry(() => import("./pages/Sobre"));
const NotFound = lazyWithRetry(() => import("./pages/NotFound"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (previously cacheTime)
      retry: 1,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
    },
    mutations: {
      retry: 1,
    },
  },
});

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
      <p className="text-muted-foreground text-sm font-institutional">Carregando...</p>
    </div>
  </div>
);

// Security wrapper component
const SecurityWrapper = ({ children }: { children: React.ReactNode }) => {
  useSecurityProtection();
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SecurityWrapper>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/igrejas" element={<Igrejas />} />
              <Route path="/escolas" element={<Escolas />} />
              <Route path="/empresas" element={<Empresas />} />
              <Route path="/industria" element={<Industria />} />
              <Route path="/drifts" element={<Drifts />} />
              <Route path="/institucionais" element={<Institucionais />} />
              <Route path="/governos" element={<Governos />} />
              <Route path="/fitness" element={<Fitness />} />
              <Route path="/departamentos" element={<Departamentos />} />
              <Route path="/dri-fit" element={<DriFit />} />
              <Route path="/informacoes-tecnicas" element={<InformacoesTecnicas />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </SecurityWrapper>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;