import { Link } from 'react-router-dom';
import { usePageMeta } from '../utils/usePageMeta';

export default function TipsCreditLoanPage() {
  usePageMeta(
    '신용대출 완전 가이드 - 한도·금리·신용점수 (2026)',
    '신용점수별 금리 차이, 직장인·사업자 한도 계산법, 여러 은행 비교 방법, 신용점수 올리는 법까지 신용대출에 관한 모든 것을 정리합니다.'
  );

  return (
    <div className="max-w-3xl mx-auto space-y-10">
      <header className="space-y-3">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Link to="/tips" className="hover:text-slate-700">대출 팁</Link>
          <span className="text-slate-300">›</span>
          <span className="text-blue-600 font-medium">신용대출</span>
        </div>
        <h1 className="text-2xl font-bold text-slate-900">신용대출 완전 가이드</h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          신용대출은 담보 없이 신용점수와 소득만으로 받을 수 있어 급전이 필요할 때 많이 활용합니다.
          하지만 금리가 높고 DSR 규제의 영향을 크게 받습니다.
          이 글에서는 신용대출 한도 계산법, 금리를 낮추는 방법, 신용점수 관리법까지 정리합니다.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          1. 신용대출 한도는 어떻게 결정되나
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          신용대출 한도는 크게 <strong>소득</strong>과 <strong>신용점수</strong>로 결정됩니다.
          DSR 40% 규제에 따라 연간 원리금 상환액이 연소득의 40%를 초과할 수 없습니다.
        </p>
        <div className="rounded-lg bg-blue-50 border border-blue-100 p-4 text-sm space-y-2">
          <p className="font-semibold text-slate-800">한도 계산 예시</p>
          <div className="text-slate-600 space-y-1 leading-relaxed">
            <p>연소득 4,000만원 / DSR 40% / 금리 5% / 5년 만기 원리금균등 신용대출</p>
            <p>→ 연간 원리금 한도: 1,600만원 (월 약 133만원)</p>
            <p>→ 5% 금리 5년 기준 월 133만원 → 대출 한도 약 7,000만원</p>
            <p className="text-xs text-slate-400">* 기존 대출 있을 경우 그 원리금을 차감 후 계산</p>
          </div>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          일반적으로 시중은행 신용대출 한도는 연소득의 <strong>1~2배</strong> 수준입니다.
          1금융권(은행)은 최대 1억~1억 5천만원, 2금융권(저축은행, 카드사)은 한도가 낮고 금리가 높습니다.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          2. 신용점수별 금리 차이
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          신용점수(NICE·KCB)는 대출 금리에 직접적인 영향을 줍니다.
          점수가 높을수록 낮은 금리를 받을 수 있습니다.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100">
                <th className="text-left px-4 py-2 border border-slate-200 text-slate-700">신용점수 (NICE 기준)</th>
                <th className="text-center px-4 py-2 border border-slate-200 text-slate-700">등급</th>
                <th className="text-center px-4 py-2 border border-slate-200 text-slate-700">시중은행 대출 금리</th>
              </tr>
            </thead>
            <tbody className="text-slate-600">
              <tr>
                <td className="px-4 py-2 border border-slate-200">900점 이상</td>
                <td className="text-center px-4 py-2 border border-slate-200 text-green-600 font-medium">최우량</td>
                <td className="text-center px-4 py-2 border border-slate-200">연 4~5%</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-4 py-2 border border-slate-200">800~899점</td>
                <td className="text-center px-4 py-2 border border-slate-200 text-blue-600 font-medium">우량</td>
                <td className="text-center px-4 py-2 border border-slate-200">연 5~6%</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-slate-200">700~799점</td>
                <td className="text-center px-4 py-2 border border-slate-200 text-slate-600 font-medium">일반</td>
                <td className="text-center px-4 py-2 border border-slate-200">연 6~8%</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="px-4 py-2 border border-slate-200">600~699점</td>
                <td className="text-center px-4 py-2 border border-slate-200 text-amber-600 font-medium">주의</td>
                <td className="text-center px-4 py-2 border border-slate-200">연 8~12% (2금융권)</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-slate-200">600점 미만</td>
                <td className="text-center px-4 py-2 border border-slate-200 text-red-600 font-medium">위험</td>
                <td className="text-center px-4 py-2 border border-slate-200">1금융권 대출 어려움</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500">* 위 수치는 참고용이며 개인 상황과 금융기관에 따라 다릅니다.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          3. 직장인 vs 사업자 신용대출 차이
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="rounded-lg border border-blue-100 bg-blue-50 p-4 space-y-2">
            <p className="text-sm font-semibold text-blue-800">직장인 신용대출</p>
            <ul className="text-sm text-slate-600 leading-relaxed list-disc list-inside space-y-1">
              <li>재직 증명서·건강보험료 납부확인서로 소득 증명</li>
              <li>대기업·공무원은 우대 금리 가능</li>
              <li>최대 한도 연소득의 1~2배</li>
              <li>인터넷 은행 비대면 대출 가능</li>
              <li>심사 빠름 (1~2일)</li>
            </ul>
          </div>
          <div className="rounded-lg border border-green-100 bg-green-50 p-4 space-y-2">
            <p className="text-sm font-semibold text-green-800">사업자 신용대출</p>
            <ul className="text-sm text-slate-600 leading-relaxed list-disc list-inside space-y-1">
              <li>종합소득세 신고서로 소득 증명</li>
              <li>사업 기간이 짧으면 한도 낮음</li>
              <li>일반적으로 직장인보다 금리 높음</li>
              <li>사업자 전용 대출 상품 활용</li>
              <li>심사 오래 걸림 (3~7일)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          4. 신용점수 올리는 방법
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          신용점수가 올라가면 대출 금리가 낮아지고, 한도도 늘어납니다.
          신용점수 관리는 대출 신청 최소 3~6개월 전부터 시작하는 것이 좋습니다.
        </p>
        <div className="space-y-2">
          {[
            { title: '연체 없이 납부하기', desc: '신용카드, 대출 원리금을 기한 내에 납부하는 것이 가장 중요합니다. 단 하루라도 연체되면 점수가 크게 떨어집니다.', effect: '효과 매우 큼' },
            { title: '카드 사용액 꾸준히 쌓기', desc: '체크카드보다 신용카드가 신용점수에 유리합니다. 매달 일정 금액을 사용하고 전액 납부하면 신용 이력이 쌓입니다.', effect: '효과 큼' },
            { title: '불필요한 대출 조회 줄이기', desc: '대출 한도 조회는 신용점수에 영향이 없지만, 실제 대출 신청 시 조회는 점수에 영향을 줄 수 있습니다.', effect: '효과 중간' },
            { title: '기존 대출 일부 상환', desc: '신용 이용률(사용 중인 한도/총 한도)이 낮을수록 점수에 유리합니다. 가능하면 마이너스통장 잔액을 줄이세요.', effect: '효과 중간' },
            { title: '통신비 납부 실적 등록', desc: 'NICE·KCB에 통신비 납부 실적을 등록하면 신용 이력이 부족한 경우 점수 향상에 도움됩니다.', effect: '효과 소폭' },
          ].map((item) => (
            <div key={item.title} className="flex gap-3 p-4 rounded-lg border border-slate-200 bg-white">
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-slate-800">{item.title}</p>
                  <span className="text-xs bg-green-50 text-green-700 rounded px-2 py-0.5">{item.effect}</span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-base font-bold text-slate-900 border-l-4 border-blue-500 pl-3">
          5. 금리 인하 요구권 활용하기
        </h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          대출 받은 후 신용점수가 오르거나 소득이 증가했다면 <strong>금리 인하 요구권</strong>을 활용할 수 있습니다.
          금리 인하 요구권은 법으로 보장된 권리(금융소비자보호법)로, 은행에 금리 인하를 요구할 수 있습니다.
        </p>
        <div className="rounded-lg bg-slate-50 border border-slate-200 p-4 text-sm space-y-2">
          <p className="font-semibold text-slate-800">금리 인하 요구 방법</p>
          <ol className="list-decimal list-inside text-slate-600 leading-relaxed space-y-1">
            <li>해당 은행 앱 또는 창구에서 신청</li>
            <li>소득 증가 증빙 (이직 후 연봉 인상, 승진 등) 또는 신용점수 향상 확인서 제출</li>
            <li>은행이 10영업일 이내 검토 후 결과 통보</li>
            <li>수락 시 인하된 금리로 변경, 거절 시 이유 제공 의무 있음</li>
          </ol>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          금리 인하 폭은 0.1~0.5%p 수준이지만, 대출 잔액이 크다면 연간 수십만 원 절감 효과가 있습니다.
          1년에 한 번씩 정기적으로 요구해 보세요.
        </p>
      </section>

      <section className="rounded-lg border border-blue-100 bg-blue-50 p-5 space-y-2">
        <h2 className="text-sm font-bold text-slate-900">신용대출 이자 미리 계산하기</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          대출 금액과 금리를 입력하면 월 상환금과 총 이자를 바로 확인할 수 있습니다.
        </p>
        <Link to="/" className="inline-block rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 transition-colors">
          대출 이자 계산기 바로가기
        </Link>
      </section>

      <div className="flex items-center justify-between gap-3 border-t pt-4">
        <Link to="/tips/mortgage" className="text-xs text-slate-500 hover:text-slate-700 hover:underline">
          ← 주담대 가이드
        </Link>
        <Link to="/tips/interest-rate" className="inline-flex items-center gap-1 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium px-3 py-1.5 transition-colors">
          다음: 금리 절약 방법 →
        </Link>
      </div>
    </div>
  );
}
