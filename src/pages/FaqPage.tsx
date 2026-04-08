import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../utils/usePageMeta';

const FAQS = [
  {
    q: '원리금균등상환과 원금균등상환 중 어느 것이 유리한가요?',
    a: '총 이자는 원금균등상환이 더 적습니다. 하지만 초기 상환 부담이 크기 때문에 여유 자금이 있다면 원금균등, 월 지출을 일정하게 유지하고 싶다면 원리금균등을 선택하세요. 금액 차이는 대출계산기로 직접 비교해 보는 것이 가장 정확합니다.',
  },
  {
    q: '대출 금리 1%p 차이가 얼마나 큰가요?',
    a: '3억원을 30년 원리금균등으로 빌렸을 때, 금리 3%와 4% 차이는 월 상환금 약 5만원, 총 이자 약 1,800만원 차이입니다. 금리 1%p 차이가 생각보다 큰 영향을 미치므로 대출 전 여러 은행을 비교하는 것이 중요합니다.',
  },
  {
    q: 'DSR이 뭔가요?',
    a: 'DSR(Debt Service Ratio, 총부채원리금상환비율)은 연간 원리금 상환액이 연소득에서 차지하는 비율입니다. 2026년 기준 DSR 40% 규제가 적용되어, 연소득 5,000만원이면 연간 원리금 상환액이 2,000만원(월 약 167만원)을 넘으면 대출이 제한됩니다.',
  },
  {
    q: '중도상환수수료는 언제 안 내도 되나요?',
    a: '대부분의 은행에서 대출 실행 후 3년이 지나면 중도상환수수료가 면제됩니다. 또한 인터넷전문은행(카카오뱅크, 토스뱅크 등)은 중도상환수수료가 없는 상품을 제공하는 경우가 많습니다. 상품 가입 전 반드시 확인하세요.',
  },
  {
    q: '변동금리 대출인데 금리가 오르면 어떻게 되나요?',
    a: '변동금리는 보통 6개월마다 기준금리(코픽스 등)에 따라 조정됩니다. 금리가 오르면 이자 부담이 늘어나고, 원리금균등상환의 경우 월 납입금이 증가합니다. 금리 인상이 우려된다면 고정금리나 혼합형으로 전환을 검토하세요.',
  },
  {
    q: '대출을 빨리 갚는 것이 항상 유리한가요?',
    a: '중도상환수수료가 없다면 빨리 갚을수록 이자가 줄어 유리합니다. 하지만 중도상환수수료가 있는 경우, 수수료와 절감 이자를 비교해야 합니다. 또한 남은 자금을 예금·투자에 활용하면 대출 이자보다 수익이 높을 수도 있어 상황에 따라 판단하세요.',
  },
  {
    q: '신용점수가 낮으면 대출이 불가능한가요?',
    a: '신용점수가 낮아도 대출이 완전히 불가능한 것은 아닙니다. 다만 금리가 높아지거나 한도가 줄어들 수 있습니다. 신용점수를 올리려면 연체 없이 납부하고, 카드값을 꾸준히 갚고, 불필요한 대출 조회를 줄이는 것이 도움됩니다.',
  },
  {
    q: '이 계산기 결과와 실제 대출 상환금이 다를 수 있나요?',
    a: '네, 차이가 있을 수 있습니다. 실제 대출은 취급 수수료, 인지세, 근저당 설정비용 등 부대비용이 추가됩니다. 또한 금리 우대 조건, 보험 가입 여부에 따라 실제 금리가 달라집니다. 본 계산기는 참고용으로만 활용하시고, 정확한 조건은 해당 금융기관에 문의하세요.',
  },
];

export default function FaqPage() {
  usePageMeta(
    '대출 이자 계산 자주 묻는 질문 (FAQ)',
    '원리금균등 vs 원금균등 차이, DSR 계산법, 중도상환수수료, 변동금리 위험 등 대출에 관한 자주 묻는 질문을 정리했습니다.'
  );

  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": FAQS.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a,
        },
      })),
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'faq-schema';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById('faq-schema');
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">자주 묻는 질문</h1>
        <p className="text-slate-600">대출 이자 계산에 관한 궁금증을 정리했습니다.</p>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, i) => (
          <div key={i} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm space-y-2">
            <h2 className="text-sm font-bold text-slate-900">Q. {faq.q}</h2>
            <p className="text-sm text-slate-600 leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-lg border border-blue-100 bg-blue-50 p-5 space-y-3">
        <h2 className="text-sm font-bold text-slate-900">직접 계산해 보세요</h2>
        <p className="text-sm text-slate-600">원금, 금리, 기간을 입력하면 월 상환금과 총 이자를 바로 확인할 수 있습니다.</p>
        <Link to="/" className="inline-block rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 transition-colors">
          대출 이자 계산기 바로가기
        </Link>
      </div>
    </div>
  );
}
