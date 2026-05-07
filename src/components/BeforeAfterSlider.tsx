import { useState, useRef } from "react";
import beforeImage from "@/assets/before-garden.jpg";
import afterImage from "@/assets/after-garden.jpg";

const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 animate-fade-in">
          <span className="text-secondary text-sm font-medium uppercase tracking-wider">
            Transformación
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Antes & Después
          </h2>
        </div>

        <div
          ref={containerRef}
          className="relative w-full max-w-5xl mx-auto aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated cursor-ew-resize select-none animate-scale-in"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
          role="slider"
          aria-label="Comparador antes y después"
          aria-valuenow={Math.round(sliderPosition)}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") setSliderPosition((p) => Math.max(0, p - 5));
            if (e.key === "ArrowRight") setSliderPosition((p) => Math.min(100, p + 5));
          }}
        >
          {/* After Image (Background) */}
          <img
            src={afterImage}
            alt="Jardín después de la renovación"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Before Image (Clipped) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img
              src={beforeImage}
              alt="Jardín antes de la renovación"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-foreground/90 shadow-lg"
            style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-foreground shadow-lg flex items-center justify-center">
              <div className="flex items-center gap-0.5">
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[8px] border-r-background" />
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-background" />
              </div>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-4 px-3 py-1.5 bg-background/80 backdrop-blur-sm rounded-lg text-sm font-medium text-foreground">
            ANTES
          </div>
          <div className="absolute top-4 right-4 px-3 py-1.5 bg-primary/80 backdrop-blur-sm rounded-lg text-sm font-medium text-primary-foreground">
            DESPUÉS
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;
