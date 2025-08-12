export default function MenuSection() {
  return (
    <section className="flex items-start justify-start max-w-[1440px] w-full px-20 pt-0 pb-24 relative">
      <main className="flex items-start justify-start rounded-[48px] w-full relative gap-16 z-2">
        
        {/* Left Side - Image */}
        <div className="flex items-center justify-center flex-grow-[0.8] h-[1305px] overflow-hidden sticky top-0 py-8 will-change-transform z-1 gap-2.5">
          <div className="flex items-center justify-center rounded-2xl flex-grow h-full overflow-hidden relative gap-2.5">
            <div className="contents">
              <div className="absolute left-[0.0990099%] top-0 h-full w-full overflow-hidden z-1">
                <div className="absolute bottom-0 left-0 right-0 top-0" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Menu */}
        <div className="flex flex-col items-start justify-start self-stretch flex-grow py-8 relative gap-4">
          <div className="flex flex-col items-center justify-start h-min w-full relative">
            <div className="flex flex-col items-start justify-start w-full relative gap-16" />
          </div>
        </div>
      </main>
    </section>
  );
}
