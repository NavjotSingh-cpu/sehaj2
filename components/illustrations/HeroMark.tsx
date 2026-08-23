export function HeroMark({ className = "" }: { className?: string }) {
  return <svg viewBox="0 0 520 460" className={className} role="img" aria-label="A simple Sahaj application status card">
    <rect x="34" y="28" width="452" height="404" rx="34" fill="#FFFFFF" stroke="#DCE7E0" strokeWidth="2" />
    <rect x="34" y="28" width="452" height="104" rx="34" fill="#0B7564" /><rect x="34" y="98" width="452" height="34" fill="#0B7564" />
    <text x="72" y="75" fontFamily="ui-sans-serif, system-ui" fontSize="16" fontWeight="700" fill="#FFFFFF">Your application</text><text x="72" y="103" fontFamily="ui-sans-serif, system-ui" fontSize="13" fill="#C7F2E6">LL-2026-4471209 · Demo application</text>
    <rect x="72" y="164" width="376" height="84" rx="16" fill="#E5F4EE" /><circle cx="104" cy="206" r="17" fill="#0B7564" /><path d="M96 206 L102 212 L114 199" fill="none" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    <text x="138" y="198" fontFamily="ui-sans-serif, system-ui" fontSize="15" fontWeight="700" fill="#17342F">Documents checked</text><text x="138" y="220" fontFamily="ui-sans-serif, system-ui" fontSize="13" fill="#54716A">Everything looks good. You can continue.</text>
    <text x="72" y="290" fontFamily="ui-sans-serif, system-ui" fontSize="12" fontWeight="700" fill="#54716A">WHAT HAPPENS NEXT</text><line x1="88" y1="326" x2="88" y2="386" stroke="#B6DCD1" strokeWidth="2" /><circle cx="88" cy="326" r="9" fill="#0B7564" /><circle cx="88" cy="356" r="9" fill="#FFFFFF" stroke="#B6DCD1" strokeWidth="2" /><circle cx="88" cy="386" r="9" fill="#FFFFFF" stroke="#B6DCD1" strokeWidth="2" />
    <text x="112" y="331" fontFamily="ui-sans-serif, system-ui" fontSize="14" fontWeight="650" fill="#17342F">Confirm application details</text><text x="112" y="361" fontFamily="ui-sans-serif, system-ui" fontSize="14" fill="#54716A">Pay the ₹350 demo fee</text><text x="112" y="391" fontFamily="ui-sans-serif, system-ui" fontSize="14" fill="#54716A">Choose your RTO visit</text>
    <rect x="342" y="344" width="106" height="44" rx="22" fill="#0B7564" /><text x="366" y="372" fontFamily="ui-sans-serif, system-ui" fontSize="13" fontWeight="700" fill="#FFFFFF">Continue</text>
  </svg>;
}
