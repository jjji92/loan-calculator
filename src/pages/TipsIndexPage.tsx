import { Link } from 'react-router-dom';
import { usePageMeta } from '../utils/usePageMeta';

const ARTICLES = [
  {
    to: '/tips/mortgage',
    title: '주택담보대출 완전 가이드',
    desc: 'LTV·DTI·DSR 개념부터 은행별 금리 비교, 우대금리 조건, 중도상환수수료까지 주담대에 관한 모든 것을 정리합니다.',
    tag: '주담대',
  },
  {
    to: '/tips/credit-loan',
    title: '신용대출 완전 가이드',
    desc: '신용점수에 따른 금리 차이, 한도 계산법, 직장인·사업자 신용대출 비교, 금리 낮추는 방법까지 정리합니다.',
    tag: '신용대출',
  },
  {
    to: '/tips/interest-rate',
    title: '대출 금리 비교와 절약 방법',
    desc: '고정금리 vs 변동금리 선택법, 우대금리 최대한 받는 방법, 금리 인하 요구권 활용까지 이자를 줄이는 전략을 정리합니다.',
    tag: '금리 절약',
  },
];

export default function TipsIndexPage() {
  usePageMeta(
    '대출 팁 모음 - 금리·상환·절약 가이드',
    '주택담보대출, 신용대출, 금리 비교 등 대출을 현명하게 이용하는 데 필요한 실전 가이드를 모았습니다.'
  );

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">대출 팁</h1>
        <p className="text-slate-600">대출을 현명하게 이용하는 실전 가이드 모음입니다.</p>
      </div>

      <div className="space-y-4">
        {ARTICLES.map((a) => (
          <Link
            key={a.to}
            to={a.to}
            className="flex items-start justify-between gap-3 rounded-lg border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group"
          >
            <div className="space-y-1.5">
              <span className="inline-block text-xs font-medium text-blue-700 bg-blue-50 rounded px-2 py-0.5">
                {a.tag}
              </span>
              <h2 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                {a.title}
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">{a.desc}</p>
            </div>
            <svg className="w-4 h-4 text-slate-400 group-hover:text-blue-500 shrink-0 mt-1 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ))}
      </div>

      <div className="mt-10 rounded-lg border border-blue-100 bg-blue-50 p-5 space-y-2">
        <h2 className="text-sm font-bold text-slate-900">대출 이자 미리 계산하기</h2>
        <p className="text-sm text-slate-600">원금, 금리, 기간을 입력하면 월 상환금과 총 이자를 바로 확인할 수 있습니다.</p>
        <Link to="/" className="inline-block rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 transition-colors">
          대출 이자 계산기 바로가기
        </Link>
      </div>
    </div>
  );
}
