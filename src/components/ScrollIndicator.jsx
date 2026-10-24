export default function ScrollIndicator() {
  return (
    <div
      className="scroll-indicator absolute inset-y-0 right-4 sm:right-8 z-20 flex items-center pointer-events-none"
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-4">
        <span className="scroll-hint text-[10px] uppercase tracking-[0.4em] text-white/50 [writing-mode:vertical-rl]">
          Scroll
        </span>
        <div className="relative h-32 w-px bg-white/15">
          <div className="scroll-fill absolute inset-0 origin-top bg-white" />
        </div>
        <span className="hidden sm:block text-[10px] tabular-nums text-white/50">
          <span className="progress-value">0</span>%
        </span>
      </div>
    </div>
  )
}
