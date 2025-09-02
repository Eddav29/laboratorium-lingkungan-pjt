"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Image from "next/image";

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [counts, setCounts] = useState({
    samples: 0,
    clients: 0,
    years: 0,
    satisfaction: 0
  });
  
  const sectionRef = useRef(null);

  const finalCounts = useMemo(() => ({
    samples: 10000,
    clients: 500,
    years: 24,
    satisfaction: 99
  }), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepTime = duration / steps;

    const counters = Object.keys(finalCounts).map(key => {
      const finalValue = finalCounts[key as keyof typeof finalCounts];
      const increment = finalValue / steps;
      let currentValue = 0;

      return setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValue) {
          currentValue = finalValue;
          clearInterval(counters[Object.keys(finalCounts).indexOf(key)]);
        }
        
        setCounts(prev => ({
          ...prev,
          [key]: Math.floor(currentValue)
        }));
      }, stepTime);
    });

    return () => {
      counters.forEach(counter => clearInterval(counter));
    };
  }, [isVisible, finalCounts]);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const stats = [
    {
      number: `${counts.samples.toLocaleString()}+`,
      label: "Sample diuji",
      color: "text-blue-400"
    },
    {
      number: `${counts.clients}+`,
      label: "Klien Terpercaya",
      color: "text-blue-400"
    },
    {
      number: `${counts.years}+`,
      label: "Tahun Pengalaman",
      color: "text-blue-400"
    },
    {
      number: `${counts.satisfaction}%`,
      label: "Pelanggan Puas",
      color: "text-blue-400"
    }
  ];

  return (
    <>
      {/* Combined Video and Statistics Section */}
      <section className="relative h-screen">
        
        {/* Content Container */}
        <div className="relative z-10 flex flex-col h-full">
          
          {/* Top Section - White Background Area with Title */}
          <div className="h-2/5 bg-white flex flex-col items-center justify-center pb-40">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Temukan Lebih Banyak Tentang Kami
              </h2>
            </div>
          </div>
          
          {/* Bottom Section - Dark Background Area with Statistics */}
          <div className="h-3/5 bg-gray-800 flex items-center justify-center pt-16">
            <div ref={sectionRef} className="container mx-auto px-4 py-16">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color} drop-shadow-lg`}>
                        {stat.number}
                      </div>
                      <div className="text-gray-300 text-sm md:text-base">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Center Video Section - Positioned absolutely to overlap both sections */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none" style={{ top: '-200px' }}>
          <div className="w-full max-w-2xl mx-auto px-4 pointer-events-auto">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <div className="aspect-video relative">
            {!isVideoPlaying ? (
              // Custom Thumbnail
              <>
                <Image
                  src="/assets/images/background_video.png"
                  alt="Video Thumbnail"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={handleVideoPlay}
                />
                {/* Play Button Overlay */}
                <div 
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  onClick={handleVideoPlay}
                >
                  <div className="bg-black bg-opacity-50 rounded-full p-4 hover:bg-opacity-70 transition-all duration-300 transform hover:scale-110">
                <svg 
                  className="w-12 h-12 text-white ml-1" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z"/>
                </svg>
                  </div>
                </div>
              </>
            ) : (
              // YouTube iframe
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/QxB88ZtVQ18?rel=0&showinfo=0&modestbranding=1&autoplay=1"
                title="Company Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Statistics;