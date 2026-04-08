import { lazy, Suspense } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

const LoanCalculatorPage = lazy(() => import('./pages/LoanCalculatorPage'));
const GuidePage = lazy(() => import('./pages/GuidePage'));
const FaqPage = lazy(() => import('./pages/FaqPage'));
const TipsIndexPage = lazy(() => import('./pages/TipsIndexPage'));
const TipsMortgagePage = lazy(() => import('./pages/TipsMortgagePage'));
const TipsCreditLoanPage = lazy(() => import('./pages/TipsCreditLoanPage'));
const TipsInterestRatePage = lazy(() => import('./pages/TipsInterestRatePage'));

const NAV_ITEMS = [
  { to: '/', label: '계산기' },
  { to: '/guide', label: '가이드' },
  { to: '/faq', label: 'FAQ' },
  { to: '/tips', label: '대출 팁' },
];

function Loading() {
  return <div className="text-center py-12 text-slate-400">로딩 중...</div>;
}

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="text-lg font-bold text-blue-600 hover:text-blue-700 shrink-0">
            대출 이자 계산기
          </Link>
          <nav className="flex gap-1 overflow-x-auto ml-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`px-3 py-1.5 rounded-md text-sm whitespace-nowrap transition-colors ${
                  location.pathname === item.to
                    ? 'bg-blue-50 text-blue-600 font-medium'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1 px-4 py-8">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<LoanCalculatorPage />} />
            <Route path="/guide" element={<GuidePage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/tips" element={<TipsIndexPage />} />
            <Route path="/tips/mortgage" element={<TipsMortgagePage />} />
            <Route path="/tips/credit-loan" element={<TipsCreditLoanPage />} />
            <Route path="/tips/interest-rate" element={<TipsInterestRatePage />} />
          </Routes>
        </Suspense>
      </main>

      <footer className="bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-6 text-sm text-slate-500">
          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-3">
            <Link to="/" className="hover:text-slate-700">계산기</Link>
            <Link to="/guide" className="hover:text-slate-700">가이드</Link>
            <Link to="/faq" className="hover:text-slate-700">FAQ</Link>
            <Link to="/tips" className="hover:text-slate-700">대출 팁</Link>
          </div>
          <p className="text-slate-400">&copy; 2026 대출 이자 계산기. 본 계산기는 참고용이며 실제 대출 조건과 차이가 있을 수 있습니다.</p>
        </div>
      </footer>
    </div>
  );
}
