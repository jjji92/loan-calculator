import { useState, useMemo } from 'react';
import { usePageMeta } from '../utils/usePageMeta';

type RepaymentType = 'equal-installment' | 'equal-principal' | 'bullet';

function formatNum(n: number) {
  return Math.round(n).toLocaleString('ko-KR');
}

interface Schedule {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
}

function calcSchedule(
  principal: number,
  annualRate: number,
  months: number,
  type: RepaymentType
): Schedule[] {
  const r = annualRate / 100 / 12;
  const schedule: Schedule[] = [];
  let balance = principal;

  if (type === 'equal-installment') {
    // 원리금균등상환
    const payment = r === 0 ? principal / months : (principal * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
    for (let m = 1; m <= months; m++) {
      const interest = balance * r;
      const princ = payment - interest;
      balance -= princ;
      schedule.push({ month: m, payment, principal: princ, interest, balance: Math.max(0, balance) });
    }
  } else if (type === 'equal-principal') {
    // 원금균등상환
    const princ = principal / months;
    for (let m = 1; m <= months; m++) {
      const interest = balance * r;
      const payment = princ + interest;
      balance -= princ;
      schedule.push({ month: m, payment, principal: princ, interest, balance: Math.max(0, balance) });
    }
  } else {
    // 만기일시상환
    for (let m = 1; m <= months; m++) {
      const interest = balance * r;
      const princ = m === months ? principal : 0;
      const payment = interest + princ;
      balance -= princ;
      schedule.push({ month: m, payment, principal: princ, interest, balance: Math.max(0, balance) });
    }
  }

  return schedule;
}

export default function LoanCalculatorPage() {
  usePageMeta(
    '대출 이자 계산기 - 원리금균등·원금균등·만기일시 상환',
    '대출 원금, 금리, 기간을 입력하면 월 상환금, 총 이자, 상환 스케줄을 즉시 계산합니다. 원리금균등·원금균등·만기일시 상환 방식을 비교해보세요.'
  );

  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [months, setMonths] = useState('');
  const [type, setType] = useState<RepaymentType>('equal-installment');
  const [showAll, setShowAll] = useState(false);

  const p = parseFloat(principal.replace(/,/g, '')) * 10000 || 0;
  const r = parseFloat(rate) || 0;
  const m = parseInt(months) || 0;

  const schedule = useMemo(() => {
    if (p <= 0 || r <= 0 || m <= 0) return [];
    return calcSchedule(p, r, m, type);
  }, [p, r, m, type]);

  const totalPayment = schedule.reduce((s, x) => s + x.payment, 0);
  const totalInterest = schedule.reduce((s, x) => s + x.interest, 0);
  const firstPayment = schedule[0]?.payment ?? 0;

  const displaySchedule = showAll ? schedule : schedule.slice(0, 12);

  const TYPES = [
    { value: 'equal-installment', label: '원리금균등' },
    { value: 'equal-principal', label: '원금균등' },
    { value: 'bullet', label: '만기일시' },
  ] as const;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold text-slate-900">대출 이자 계산기</h1>
        <p className="text-sm text-slate-500">원금·금리·기간 입력 후 월 상환금과 총 이자를 확인하세요</p>
      </div>

      {/* 입력 */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 space-y-5 shadow-sm">
        {/* 상환 방식 */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">상환 방식</label>
          <div className="grid grid-cols-3 gap-2">
            {TYPES.map((t) => (
              <button
                key={t.value}
                onClick={() => setType(t.value)}
                className={`py-2 rounded-lg text-sm font-medium border transition-colors ${
                  type === t.value
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* 대출 원금 */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-slate-700">대출 원금 (만원)</label>
          <div className="relative">
            <input
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
              placeholder="예: 30000 (3억)"
              className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400">만원</span>
          </div>
          {p > 0 && (
            <p className="text-xs text-slate-500">{formatNum(p)}원</p>
          )}
        </div>

        {/* 연이율 */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-slate-700">연이율 (%)</label>
          <div className="relative">
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              placeholder="예: 4.5"
              step="0.1"
              className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400">%</span>
          </div>
        </div>

        {/* 대출 기간 */}
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-slate-700">대출 기간</label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="number"
                value={months}
                onChange={(e) => setMonths(e.target.value)}
                placeholder="예: 360 (30년)"
                className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400">개월</span>
            </div>
            <div className="flex gap-1">
              {[12, 24, 60, 120, 240, 360].map((mo) => (
                <button
                  key={mo}
                  onClick={() => setMonths(String(mo))}
                  className={`px-2 py-1 rounded text-xs border transition-colors ${
                    months === String(mo)
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-slate-500 border-slate-200 hover:border-blue-300'
                  }`}
                >
                  {mo >= 12 ? `${mo / 12}년` : `${mo}개월`}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 결과 */}
      {schedule.length > 0 && (
        <>
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-xl border border-blue-100 bg-blue-50 p-4 text-center space-y-1">
              <p className="text-xs text-slate-500">{type === 'equal-installment' ? '월 상환금' : type === 'bullet' ? '월 이자' : '첫달 상환금'}</p>
              <p className="text-lg font-bold text-blue-700">{formatNum(firstPayment)}원</p>
            </div>
            <div className="rounded-xl border border-red-100 bg-red-50 p-4 text-center space-y-1">
              <p className="text-xs text-slate-500">총 이자</p>
              <p className="text-lg font-bold text-red-600">{formatNum(totalInterest)}원</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center space-y-1">
              <p className="text-xs text-slate-500">총 상환금액</p>
              <p className="text-lg font-bold text-slate-700">{formatNum(totalPayment)}원</p>
            </div>
          </div>

          {/* 스케줄 표 */}
          <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="px-5 py-3 border-b border-slate-100 flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-800">상환 스케줄</p>
              <p className="text-xs text-slate-400">총 {m}개월</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 text-xs text-slate-500">
                    <th className="text-center px-4 py-2 font-medium">회차</th>
                    <th className="text-right px-4 py-2 font-medium">월 상환금</th>
                    <th className="text-right px-4 py-2 font-medium">원금</th>
                    <th className="text-right px-4 py-2 font-medium">이자</th>
                    <th className="text-right px-4 py-2 font-medium">잔액</th>
                  </tr>
                </thead>
                <tbody>
                  {displaySchedule.map((row) => (
                    <tr key={row.month} className="border-t border-slate-50 hover:bg-slate-50 transition-colors">
                      <td className="text-center px-4 py-2 text-slate-500">{row.month}회</td>
                      <td className="text-right px-4 py-2 font-medium text-slate-800">{formatNum(row.payment)}</td>
                      <td className="text-right px-4 py-2 text-blue-600">{formatNum(row.principal)}</td>
                      <td className="text-right px-4 py-2 text-red-500">{formatNum(row.interest)}</td>
                      <td className="text-right px-4 py-2 text-slate-500">{formatNum(row.balance)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {schedule.length > 12 && (
              <div className="border-t border-slate-100 p-3 text-center">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  {showAll ? '접기 ▲' : `전체 ${schedule.length}개월 보기 ▼`}
                </button>
              </div>
            )}
          </div>
        </>
      )}

      {/* 설명 */}
      <div className="rounded-xl border border-slate-200 bg-white p-5 space-y-4 shadow-sm">
        <h2 className="text-sm font-bold text-slate-800">상환 방식 비교</h2>
        <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
          <div>
            <span className="font-semibold text-slate-700">원리금균등상환</span> — 매달 동일한 금액을 납부합니다.
            초기에는 이자 비중이 높고 후반으로 갈수록 원금 비중이 높아집니다.
            월 지출 계획을 세우기 쉬워 가장 많이 사용하는 방식입니다.
          </div>
          <div>
            <span className="font-semibold text-slate-700">원금균등상환</span> — 매달 동일한 원금을 납부합니다.
            초기 상환 부담이 크지만 총 이자가 원리금균등보다 적습니다.
            초기에 여유가 있다면 유리한 방식입니다.
          </div>
          <div>
            <span className="font-semibold text-slate-700">만기일시상환</span> — 대출 기간 동안 이자만 납부하고
            만기에 원금 전액을 상환합니다. 월 부담은 가장 적지만 총 이자가 가장 많습니다.
            전세자금대출, 사업자대출에 주로 사용됩니다.
          </div>
        </div>
      </div>
    </div>
  );
}
