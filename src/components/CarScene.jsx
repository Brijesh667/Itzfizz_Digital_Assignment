export default function CarScene() {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none pb-12 sm:pb-0">
      <div className="car-lane relative w-[70vw] max-w-[900px]">
        <div
          aria-hidden="true"
          className="lane-line lane-dashes absolute left-1/2 -ml-[50vw] w-[160vw] will-change-transform bottom-full mb-6"
        />
        <div
          aria-hidden="true"
          className="lane-line lane-dashes absolute left-1/2 -ml-[50vw] w-[160vw] will-change-transform top-full mt-6"
        />

        <div className="car-group relative">
          <div
            aria-hidden="true"
            className="car-glow absolute inset-x-[8%] inset-y-[20%] rounded-full bg-white/10 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="speed-streaks absolute right-full inset-y-0 w-[30vw]"
          >
            <div className="speed-streak absolute right-0 top-[35%] h-px w-full origin-right bg-linear-to-r from-transparent to-white/40" />
            <div className="speed-streak absolute right-0 top-1/2 h-px w-3/4 origin-right bg-linear-to-r from-transparent to-white/40" />
            <div className="speed-streak absolute right-0 top-[65%] h-px w-1/2 origin-right bg-linear-to-r from-transparent to-white/40" />
          </div>

          <img
            className="hero-car w-full h-auto select-none will-change-transform"
            src={`${import.meta.env.BASE_URL}car.png`}
            alt="A sports car seen from above"
            draggable={false}
          />
        </div>
      </div>
    </div>
  )
}
