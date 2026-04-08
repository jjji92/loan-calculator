import { Link } from 'react-router-dom';
import { usePageMeta } from '../utils/usePageMeta';

export default function TipsInterestRatePage() {
  usePageMeta(
    '대출 금리 비교와 이자 줄이는 방법 - 2026년 완전 가이드',
    '고정금리 vs 변동금리 선택법, 우대금리 최대한 받는 방법, 금리 인하 요구권, 대환대출 타이밍까지 대출 이자를 줄이는 모든 전략을 정리합니다.'
  );

  return (
    <div className="max-w-3xl mx-auto space-y-10">
      <header className="space-y-3">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Link to="/tips" className="hover:text-slate-700">대출 팁</Link>
          <span className="text-slate-300">›</span>
          <span className="text-blue-600 font-medium">금리 절약</span>
        </div>
        <h1 className="text-2xl font-bold text-slate-900">대출 금리 비교와 이자 줄이는 방법</h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          같은 금액을 빌려도 금리와 상환 방식에 따라 총 이자가 수백만 원 차이납니다.
          이 글에서는 금리를 낮추는 모든 방법 — 고정·변동 선택, 우대금리, 금리 인하 요구권,
          대환대출 타이밍까지 — 을 단계별로 정리합니다.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          1. 고정금리 vs 변동금리 — 언제 무엇을 선택할까
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          금리 선택은 앞으로의 금리 방향성에 대한 예측과 본인의 리스크 수용 범위에 따라 결정합니다.
          어느 쪽이 항상 유리하다고 단정할 수 없습니다.
        </p>
        <div className="space-y-3">
          <div className="rounded-lg border border-blue-100 bg-blue-50 p-4 space-y-2">
            <p className="text-sm font-semibold text-blue-800">고정금리를 선택하면 좋은 경우</p>
            <ul className="text-sm text-slate-600 list-disc list-inside leading-relaxed space-y-1">
              <li>기준금리 인상이 예상되는 시기</li>
              <li>대출 기간이 10년 이상 장기인 경우</li>
              <li>월 상환금을 일정하게 유지하고 싶은 경우</li>
              <li>소득이 불안정해 금리 인상 위험을 피하고 싶은 경우</li>
            </ul>
          </div>
          <div className="rounded-lg border border-green-100 bg-green-50 p-4 space-y-2">
            <p className="text-sm font-semibold text-green-800">변동금리를 선택하면 좋은 경우</p>
            <ul className="text-sm text-slate-600 list-disc list-inside leading-relaxed space-y-1">
              <li>기준금리 인하가 예상되는 시기</li>
              <li>대출 기간이 3~5년으로 단기인 경우</li>
              <li>초기 금리를 최대한 낮추고 싶은 경우</li>
              <li>중도 상환 계획이 있는 경우</li>
            </ul>
          </div>
        </div>
        <div className="rounded-lg bg-amber-50 border border-amber-200 p-4 text-sm text-slate-700 space-y-1">
          <p className="font-semibold text-amber-800">혼합형(고정+변동)도 고려하세요</p>
          <p className="leading-relaxed text-slate-600">
            초기 3~5년은 고정금리, 이후 변동금리로 전환되는 혼합형 상품도 있습니다.
            초기 금리 안정성과 장기 변동 혜택을 동시에 누릴 수 있어 많이 활용합니다.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          2. 기준금리와 대출 금리의 관계
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          한국은행이 결정하는 <strong>기준금리</strong>는 모든 대출 금리에 영향을 줍니다.
          기준금리가 오르면 코픽스(COFIX)가 오르고, 변동금리 대출의 이자 부담이 늘어납니다.
        </p>
        <div className="rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-600 space-y-2">
          <p className="font-semibold text-slate-800">대출 금리 구성</p>
          <div className="space-y-1 leading-relaxed">
            <div className="flex justify-between border-b border-slate-100 pb-1">
              <span>기준금리 (코픽스 등 지표금리)</span>
              <span className="text-slate-400">시장에서 결정</span>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-1">
              <span>+ 가산금리 (은행 수익·리스크 반영)</span>
              <span className="text-slate-400">은행이 결정</span>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-1">
              <span>- 우대금리 (조건 충족 시)</span>
              <span className="text-slate-400">고객이 받을 수 있음</span>
            </div>
            <div className="flex justify-between font-semibold text-blue-700 pt-1">
              <span>= 최종 적용 금리</span>
              <span></span>
            </div>
          </div>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          가산금리는 은행마다 다르기 때문에 기준금리가 같아도 은행마다 최종 금리가 다릅니다.
          <strong> 금융감독원 금리비교공시</strong> 사이트에서 은행별 금리를 한눈에 비교할 수 있습니다.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          3. 이자 줄이는 실전 전략 5가지
        </h2>
        <div className="space-y-3">
          <div className="flex gap-3 p-4 rounded-lg border border-slate-200 bg-white">
            <span className="rounded-full bg-blue-600 text-white text-xs font-bold w-6 h-6 flex items-center justify-center shrink-0">1</span>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-slate-800">여러 은행 동시 비교</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                같은 조건이어도 은행마다 0.3~1%p 이상 차이가 납니다. 1금융권 시중은행 3곳 이상,
                인터넷전문은행(카카오뱅크, 토스뱅크, 케이뱅크)도 함께 비교하세요.
                인터넷은행은 중도상환수수료가 없는 경우가 많아 단기 대출에 유리합니다.
              </p>
            </div>
          </div>
          <div className="flex gap-3 p-4 rounded-lg border border-slate-200 bg-white">
            <span className="rounded-full bg-blue-600 text-white text-xs font-bold w-6 h-6 flex items-center justify-center shrink-0">2</span>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-slate-800">우대금리 조건 미리 충족</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                급여이체, 카드 실적, 자동이체 등 우대금리 조건을 대출 신청 전에 미리 충족시키세요.
                대출 후에 조건을 충족해도 소급 적용이 안 되는 경우가 많습니다.
                급여이체 + 카드 사용 + 자동이체 3가지만 충족해도 0.3~0.5%p 우대가 가능합니다.
              </p>
            </div>
          </div>
          <div className="flex gap-3 p-4 rounded-lg border border-slate-200 bg-white">
            <span className="rounded-full bg-blue-600 text-white text-xs font-bold w-6 h-6 flex items-center justify-center shrink-0">3</span>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-slate-800">원금균등상환으로 총 이자 절감</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                원금균등상환은 원리금균등보다 총 이자가 적습니다. 3억원 30년 대출 기준으로
                원금균등이 원리금균등보다 총 이자가 약 2,000만원 이상 적을 수 있습니다.
                초기 부담이 크지만 여유가 있다면 원금균등이 장기적으로 유리합니다.
              </p>
            </div>
          </div>
          <div className="flex gap-3 p-4 rounded-lg border border-slate-200 bg-white">
            <span className="rounded-full bg-blue-600 text-white text-xs font-bold w-6 h-6 flex items-center justify-center shrink-0">4</span>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-slate-800">여유 자금은 중도 상환에 활용</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                중도상환수수료 면제 기간이 지났거나 수수료가 없는 대출이라면, 여유 자금이 생길 때마다
                원금을 줄이세요. 원금이 줄면 이자도 줄어 복리 효과처럼 이자 절감이 가속됩니다.
                예금 금리보다 대출 금리가 높다면 중도 상환이 더 유리합니다.
              </p>
            </div>
          </div>
          <div className="flex gap-3 p-4 rounded-lg border border-slate-200 bg-white">
            <span className="rounded-full bg-blue-600 text-white text-xs font-bold w-6 h-6 flex items-center justify-center shrink-0">5</span>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-slate-800">대환대출로 금리 낮추기</p>
              <p className="text-sm text-slate-600 leading-relaxed">
                신용점수가 올라거나 시장 금리가 내렸을 때, 더 낮은 금리 상품으로 갈아탈 수 있습니다.
                2023년부터 시행된 <strong>온라인 원스톱 대환대출 플랫폼</strong>(금융결제원 운영)을 활용하면
                여러 은행 상품을 비교하고 쉽게 갈아탈 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          4. 금리 1%p 차이로 얼마나 달라지나
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          금리 차이가 얼마나 큰지 직접 숫자로 확인해보세요.
          <strong> 원리금균등, 30년 만기 기준</strong>입니다.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100">
                <th className="text-left px-4 py-2 border border-slate-200 text-slate-700">대출 원금</th>
                <th className="text-center px-4 py-2 border border-slate-200 text-slate-700">금리 3%</th>
                <th className="text-center px-4 py-2 border border-slate-200 text-slate-700">금리 4%</th>
                <th className="text-center px-4 py-2 border border-slate-200 text-red-600">총 이자 차이</th>
              </tr>
            </thead>
            <tbody className="text-slate-600">
              <tr>
                <td className="px-4 py-2 border border-slate-200 font-medium">1억원</td>
                <td className="text-center px-4 py-2 border border-slate-200">월 42만원 / 총이자 5,200만원</td>
                <td className="text-center px-4 py-2 border border-slate-200">월 48만원 / 총이자 7,200만원</td>
                <td className="text-center px-4 py-2 border border-slate-200 text-red-600 font-medium">약 2,000만원</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-4 py-2 border border-slate-200 font-medium">3억원</td>
                <td className="text-center px-4 py-2 border border-slate-200">월 126만원 / 총이자 1.55억</td>
                <td className="text-center px-4 py-2 border border-slate-200">월 143만원 / 총이자 2.15억</td>
                <td className="text-center px-4 py-2 border border-slate-200 text-red-600 font-medium">약 6,000만원</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-slate-200 font-medium">5억원</td>
                <td className="text-center px-4 py-2 border border-slate-200">월 211만원 / 총이자 2.6억</td>
                <td className="text-center px-4 py-2 border border-slate-200">월 239만원 / 총이자 3.6억</td>
                <td className="text-center px-4 py-2 border border-slate-200 text-red-600 font-medium">약 1억원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500">* 위 수치는 참고용 근사값입니다. 정확한 계산은 아래 계산기를 활용하세요.</p>
      </section>

      <section className="rounded-lg border border-blue-100 bg-blue-50 p-5 space-y-2">
        <h2 className="text-sm font-bold text-slate-900">금리별 이자 직접 비교하기</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          같은 원금으로 금리와 상환 방식을 바꿔가며 총 이자를 비교해보세요.
        </p>
        <Link to="/" className="inline-block rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 transition-colors">
          대출 이자 계산기 바로가기
        </Link>
      </section>

      <div className="flex items-center justify-between gap-3 border-t pt-4">
        <Link to="/tips/credit-loan" className="text-xs text-slate-500 hover:text-slate-700 hover:underline">
          ← 신용대출 가이드
        </Link>
        <Link to="/tips" className="inline-flex items-center gap-1 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-3 py-1.5 transition-colors">
          팁 목록으로 →
        </Link>
      </div>
    </div>
  );
}
