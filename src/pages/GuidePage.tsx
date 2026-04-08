import { Link } from 'react-router-dom';
import { usePageMeta } from '../utils/usePageMeta';

export default function GuidePage() {
  usePageMeta(
    '대출 완전 가이드 - 종류별 특징과 선택 방법',
    '주택담보대출, 신용대출, 전세자금대출 등 대출 종류별 특징과 금리 구조, 상환 방식, 주의사항을 정리한 대출 완전 가이드입니다.'
  );

  return (
    <div className="max-w-3xl mx-auto space-y-10">
      <header className="space-y-3">
        <h1 className="text-2xl font-bold text-slate-900">대출 완전 가이드</h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          대출은 종류마다 금리, 한도, 상환 방식이 크게 다릅니다. 잘못된 대출 선택은 수백만 원의 이자 손실로
          이어질 수 있습니다. 이 가이드에서는 대출의 종류별 특징부터 현명하게 대출받는 방법까지 정리합니다.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          1. 대출의 종류
        </h2>
        <div className="space-y-3">
          <div className="rounded-lg border border-slate-200 bg-white p-4 space-y-2">
            <p className="text-sm font-semibold text-slate-800">주택담보대출 (주담대)</p>
            <p className="text-sm text-slate-600 leading-relaxed">
              보유한 부동산을 담보로 받는 대출입니다. 담보가 있어 금리가 낮고 한도가 높습니다.
              LTV(담보인정비율)에 따라 한도가 결정되며, 주택 가격의 최대 70~80%까지 가능합니다.
              금리는 연 3~5% 수준으로 신용대출보다 낮습니다.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 space-y-2">
            <p className="text-sm font-semibold text-slate-800">신용대출</p>
            <p className="text-sm text-slate-600 leading-relaxed">
              담보 없이 신용점수와 소득을 기준으로 받는 대출입니다. 절차가 간단하고 빠르게 실행되지만
              금리가 연 4~8%로 담보대출보다 높습니다. 한도는 연소득의 1~2배 수준입니다.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 space-y-2">
            <p className="text-sm font-semibold text-slate-800">전세자금대출</p>
            <p className="text-sm text-slate-600 leading-relaxed">
              전세 보증금 마련을 위한 대출로, 전세 계약서와 임대차 보증금을 담보로 합니다.
              HUG, SGI, HF 등 보증기관을 통해 저금리로 이용할 수 있습니다.
              보증금의 최대 80%까지 대출이 가능합니다.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-4 space-y-2">
            <p className="text-sm font-semibold text-slate-800">마이너스통장 (한도대출)</p>
            <p className="text-sm text-slate-600 leading-relaxed">
              미리 한도를 설정해두고 필요할 때마다 인출해 쓰는 방식입니다.
              사용한 금액에만 이자가 붙어 단기 자금 활용에 유리합니다.
              금리는 신용대출보다 약간 높은 편입니다.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          2. 금리 종류 — 고정금리 vs 변동금리
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="rounded-lg border border-blue-100 bg-blue-50 p-4 space-y-2">
            <p className="text-sm font-semibold text-blue-800">고정금리</p>
            <ul className="text-sm text-slate-600 leading-relaxed list-disc list-inside space-y-1">
              <li>대출 기간 내내 금리 동일</li>
              <li>금리 인상 시 유리</li>
              <li>월 상환금 예측 가능</li>
              <li>변동금리보다 초기 금리 높음</li>
              <li>장기 대출에 적합</li>
            </ul>
          </div>
          <div className="rounded-lg border border-green-100 bg-green-50 p-4 space-y-2">
            <p className="text-sm font-semibold text-green-800">변동금리</p>
            <ul className="text-sm text-slate-600 leading-relaxed list-disc list-inside space-y-1">
              <li>시장 금리 따라 주기적 변동</li>
              <li>금리 인하 시 유리</li>
              <li>초기 금리가 고정금리보다 낮음</li>
              <li>상환 부담 예측 어려움</li>
              <li>단기 대출에 적합</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          금리 인상이 예상되는 시기에는 고정금리, 금리 인하가 예상되는 시기에는 변동금리가 유리합니다.
          혼합형(초기 고정 후 변동 전환)도 있으니 은행에 문의해 보세요.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          3. 상환 방식 선택하는 법
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100">
                <th className="text-left px-4 py-2 border border-slate-200 text-slate-700">방식</th>
                <th className="text-center px-4 py-2 border border-slate-200 text-slate-700">월 납입금</th>
                <th className="text-center px-4 py-2 border border-slate-200 text-slate-700">총 이자</th>
                <th className="text-center px-4 py-2 border border-slate-200 text-slate-700">적합한 경우</th>
              </tr>
            </thead>
            <tbody className="text-slate-600">
              <tr>
                <td className="px-4 py-2 border border-slate-200 font-medium">원리금균등</td>
                <td className="text-center px-4 py-2 border border-slate-200">매월 동일</td>
                <td className="text-center px-4 py-2 border border-slate-200">중간</td>
                <td className="text-center px-4 py-2 border border-slate-200">월급 생활자</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-4 py-2 border border-slate-200 font-medium">원금균등</td>
                <td className="text-center px-4 py-2 border border-slate-200">초기 많고 감소</td>
                <td className="text-center px-4 py-2 border border-slate-200">가장 적음</td>
                <td className="text-center px-4 py-2 border border-slate-200">초기 여유 있을 때</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-slate-200 font-medium">만기일시</td>
                <td className="text-center px-4 py-2 border border-slate-200">이자만 납부</td>
                <td className="text-center px-4 py-2 border border-slate-200">가장 많음</td>
                <td className="text-center px-4 py-2 border border-slate-200">단기/전세대출</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          4. 대출 전 반드시 확인할 것
        </h2>
        <div className="space-y-2 text-sm text-slate-600 leading-relaxed">
          <div className="flex gap-3 p-4 rounded-lg border border-slate-200 bg-white">
            <span className="font-bold text-blue-600 shrink-0">01</span>
            <div>
              <p className="font-medium text-slate-700 mb-1">DSR(총부채원리금상환비율) 확인</p>
              <p>연간 원리금 상환액이 연소득의 40%를 넘으면 대출이 어렵습니다. 기존 대출이 있다면 합산해서 계산하세요.</p>
            </div>
          </div>
          <div className="flex gap-3 p-4 rounded-lg border border-slate-200 bg-white">
            <span className="font-bold text-blue-600 shrink-0">02</span>
            <div>
              <p className="font-medium text-slate-700 mb-1">중도상환수수료 확인</p>
              <p>대출 후 일찍 갚으면 수수료가 부과됩니다. 보통 대출 후 3년 이내 상환 시 0.5~1.5% 수수료가 발생합니다.</p>
            </div>
          </div>
          <div className="flex gap-3 p-4 rounded-lg border border-slate-200 bg-white">
            <span className="font-bold text-blue-600 shrink-0">03</span>
            <div>
              <p className="font-medium text-slate-700 mb-1">여러 은행 금리 비교</p>
              <p>같은 조건이라도 은행마다 금리 차이가 0.3~1%p 이상 날 수 있습니다. 금융감독원 금리비교 사이트를 활용하세요.</p>
            </div>
          </div>
          <div className="flex gap-3 p-4 rounded-lg border border-slate-200 bg-white">
            <span className="font-bold text-blue-600 shrink-0">04</span>
            <div>
              <p className="font-medium text-slate-700 mb-1">우대금리 조건 확인</p>
              <p>급여이체, 카드 실적, 자동이체 등 조건을 충족하면 0.1~0.5%p 우대금리를 받을 수 있습니다. 반드시 확인하세요.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-lg border border-blue-100 bg-blue-50 p-5 space-y-2">
        <h2 className="text-sm font-bold text-slate-900">월 상환금 미리 계산하기</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          대출 신청 전에 월 상환금과 총 이자를 미리 계산해보세요.
        </p>
        <Link to="/" className="inline-block rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 transition-colors">
          대출 이자 계산기 바로가기
        </Link>
      </section>
    </div>
  );
}
