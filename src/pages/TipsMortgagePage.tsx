import { Link } from 'react-router-dom';
import { usePageMeta } from '../utils/usePageMeta';

export default function TipsMortgagePage() {
  usePageMeta(
    '주택담보대출 완전 가이드 - LTV·DSR·금리 비교 (2026)',
    'LTV·DTI·DSR 개념, 은행별 금리 비교 방법, 우대금리 조건, 중도상환수수료, 정부 정책 대출까지 주택담보대출의 모든 것을 정리합니다.'
  );

  return (
    <div className="max-w-3xl mx-auto space-y-10">
      <header className="space-y-3">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Link to="/tips" className="hover:text-slate-700">대출 팁</Link>
          <span className="text-slate-300">›</span>
          <span className="text-blue-600 font-medium">주담대</span>
        </div>
        <h1 className="text-2xl font-bold text-slate-900">주택담보대출 완전 가이드</h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          주택담보대출(주담대)은 가장 금액이 크고 기간이 긴 대출입니다. 금리 0.1%p 차이가 수십만 원의
          이자 차이를 만들 수 있어 꼼꼼한 준비가 필요합니다. 이 글에서는 LTV·DSR 규제부터
          금리 비교, 우대금리 받는 법, 정부 정책 대출까지 주담대의 모든 것을 정리합니다.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          1. LTV·DTI·DSR — 대출 한도를 결정하는 규제
        </h2>
        <div className="space-y-3">
          <div className="rounded-lg border border-slate-200 bg-white p-4 space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-800">LTV (담보인정비율)</p>
              <span className="text-xs bg-blue-50 text-blue-700 rounded px-2 py-0.5">한도 결정</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              주택 가격 대비 대출 가능 금액의 비율입니다.
              <strong> LTV 70%</strong>이면 5억 주택에 최대 3억 5천만원까지 대출 가능합니다.
              투기과열지구는 40~50%, 조정대상지역은 50~60%, 그 외 지역은 70%가 적용됩니다.
              무주택자는 우대 LTV를 적용받아 최대 80%까지 가능한 경우도 있습니다.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-800">DTI (총부채상환비율)</p>
              <span className="text-xs bg-blue-50 text-blue-700 rounded px-2 py-0.5">소득 대비 한도</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              연간 주택담보대출 원리금 + 기타 대출 이자의 합이 연소득에서 차지하는 비율입니다.
              투기과열지구 40%, 조정대상지역 50%, 그 외 60% 이하를 기준으로 합니다.
              연소득 6,000만원이면 DTI 40% 기준 연간 2,400만원(월 200만원) 이내 상환이 가능합니다.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-800">DSR (총부채원리금상환비율)</p>
              <span className="text-xs bg-red-50 text-red-700 rounded px-2 py-0.5">2026년 핵심 규제</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              모든 대출(주담대 + 신용대출 + 카드론 등)의 연간 원리금 상환액이 연소득의
              <strong> 40%</strong>를 초과하면 대출이 제한됩니다. DTI와 달리 모든 부채의 원리금을 합산하므로
              기존 대출이 많을수록 주담대 한도가 줄어듭니다. 대출 전 기존 대출 정리를 고려하세요.
            </p>
          </div>
        </div>
        <div className="rounded-lg bg-amber-50 border border-amber-200 p-4 text-sm text-slate-700">
          <p className="font-semibold text-amber-800 mb-1">계산 예시</p>
          <p className="leading-relaxed">연소득 7,000만원 / DSR 40% 기준 → 연간 원리금 한도 2,800만원 (월 약 233만원)</p>
          <p className="leading-relaxed mt-1">기존 신용대출 월 50만원 있으면 → 주담대 원리금은 월 183만원까지만 가능</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          2. 2026년 주담대 금리 현황
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          2026년 현재 시중은행 주택담보대출 금리는 연 3~5% 수준입니다.
          같은 조건이어도 은행마다 0.3~1%p 이상 차이가 나므로 반드시 여러 곳을 비교해야 합니다.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100">
                <th className="text-left px-4 py-2 border border-slate-200 text-slate-700">대출 종류</th>
                <th className="text-center px-4 py-2 border border-slate-200 text-slate-700">금리 범위 (2026년)</th>
                <th className="text-center px-4 py-2 border border-slate-200 text-slate-700">특징</th>
              </tr>
            </thead>
            <tbody className="text-slate-600">
              <tr>
                <td className="px-4 py-2 border border-slate-200">시중은행 주담대 (변동)</td>
                <td className="text-center px-4 py-2 border border-slate-200">연 3.2~4.5%</td>
                <td className="text-center px-4 py-2 border border-slate-200">코픽스 연동</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-4 py-2 border border-slate-200">시중은행 주담대 (고정)</td>
                <td className="text-center px-4 py-2 border border-slate-200">연 3.5~5.0%</td>
                <td className="text-center px-4 py-2 border border-slate-200">금융채 5년 연동</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-slate-200">특례보금자리론</td>
                <td className="text-center px-4 py-2 border border-slate-200">연 3.25~3.95%</td>
                <td className="text-center px-4 py-2 border border-slate-200">정책 상품, 소득 제한</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-4 py-2 border border-slate-200">디딤돌 대출</td>
                <td className="text-center px-4 py-2 border border-slate-200">연 2.35~3.95%</td>
                <td className="text-center px-4 py-2 border border-slate-200">무주택 서민 대상</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500">* 금리는 시장 상황에 따라 변동되며, 위 수치는 참고용입니다. 실제 금리는 금융기관에 문의하세요.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          3. 우대금리 최대한 받는 법
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          기본 금리에서 우대금리를 받으면 실제 적용 금리를 낮출 수 있습니다.
          우대금리 조건을 미리 확인하고 충족시키면 0.3~0.7%p 절감이 가능합니다.
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { title: '급여이체', desc: '해당 은행으로 급여 이체 설정 시 0.1~0.2%p 우대', point: '가장 쉬운 조건' },
            { title: '카드 실적', desc: '해당 은행 카드 월 30~50만원 이상 사용 시 0.1%p 우대', point: '꾸준히 충족 가능' },
            { title: '자동이체', desc: '공과금, 보험료 등 3건 이상 자동이체 설정 시 0.1%p 우대', point: '간단히 충족' },
            { title: '인터넷/앱 신청', desc: '영업점 방문 대신 앱·인터넷으로 신청 시 0.1%p 우대', point: '바로 적용' },
            { title: '장기 거래', desc: '해당 은행 거래 기간이 길수록 우대 가능', point: '은행마다 다름' },
            { title: '청약 통장', desc: '주택청약종합저축 보유 시 일부 상품 우대', point: '정책 상품 중심' },
          ].map((item) => (
            <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-3 space-y-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-800">{item.title}</p>
                <span className="text-xs bg-green-50 text-green-700 rounded px-2 py-0.5">{item.point}</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          4. 정부 정책 대출 — 서민에게 유리한 상품
        </h2>
        <div className="space-y-3">
          <div className="rounded-lg border border-slate-200 bg-white p-4 space-y-2">
            <p className="text-sm font-semibold text-slate-800">디딤돌 대출</p>
            <p className="text-sm text-slate-600 leading-relaxed">
              무주택 서민을 위한 저금리 주택구입자금 대출입니다.
              부부합산 연소득 6,000만원 이하 (신혼부부 7,000만원), 순자산 3억 4,500만원 이하인 무주택자가 대상입니다.
              금리는 연 2.35~3.95%이며, 한도는 최대 3억원입니다.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 space-y-2">
            <p className="text-sm font-semibold text-slate-800">보금자리론 (u-보금자리론)</p>
            <p className="text-sm text-slate-600 leading-relaxed">
              한국주택금융공사(HF)에서 취급하는 장기 고정금리 상품입니다.
              부부합산 연소득 7,000만원 이하, 주택가격 6억원 이하가 대상입니다.
              최대 3억 6,000만원까지 대출 가능하며, 10~50년 장기 고정금리가 장점입니다.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 space-y-2">
            <p className="text-sm font-semibold text-slate-800">신생아 특례 대출</p>
            <p className="text-sm text-slate-600 leading-relaxed">
              2023년 이후 출생 자녀가 있는 가구를 위한 특례 대출입니다.
              부부합산 연소득 2억원 이하, 주택가격 9억원 이하가 대상입니다.
              구입자금 최대 5억원, 전세자금 최대 3억원까지 저금리로 지원합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          5. 중도상환수수료와 대환대출
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          대출을 조기 상환하거나 다른 은행으로 갈아탈 때 중도상환수수료가 발생합니다.
          보통 잔여 원금의 0.5~1.5%이며, 대출 실행 후 3년이 지나면 면제되는 경우가 많습니다.
        </p>
        <div className="rounded-lg bg-slate-50 border border-slate-200 p-4 text-sm text-slate-700 space-y-2">
          <p className="font-semibold text-slate-800">대환대출이 유리한 경우</p>
          <ul className="list-disc list-inside text-slate-600 space-y-1 leading-relaxed">
            <li>현재 금리가 시장 평균보다 0.5%p 이상 높은 경우</li>
            <li>중도상환수수료 면제 기간(3년)이 지난 경우</li>
            <li>신용점수가 크게 올라 더 낮은 금리를 받을 수 있는 경우</li>
            <li>고정금리에서 금리 하락기에 변동금리로 전환 시</li>
          </ul>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          대환대출 시에는 중도상환수수료, 새 대출의 취급수수료, 근저당 재설정 비용을
          모두 합산해서 실제 절감액을 계산해 보세요.
        </p>
      </section>

      <section className="rounded-lg border border-blue-100 bg-blue-50 p-5 space-y-2">
        <h2 className="text-sm font-bold text-slate-900">주담대 월 상환금 미리 계산하기</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          원금, 금리, 기간을 입력하면 원리금균등·원금균등·만기일시 방식별 상환금을 비교할 수 있습니다.
        </p>
        <Link to="/" className="inline-block rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 transition-colors">
          대출 이자 계산기 바로가기
        </Link>
      </section>

      <div className="flex items-center justify-between gap-3 border-t pt-4">
        <Link to="/tips" className="text-xs text-slate-500 hover:text-slate-700 hover:underline">
          ← 팁 목록으로
        </Link>
        <Link to="/tips/credit-loan" className="inline-flex items-center gap-1 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-3 py-1.5 transition-colors">
          다음: 신용대출 가이드 →
        </Link>
      </div>
    </div>
  );
}
