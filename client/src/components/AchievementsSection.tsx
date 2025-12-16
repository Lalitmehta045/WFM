import { useEffect, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface CounterProps {
  end: number;
  duration?: number;
  shouldStart?: boolean;
}

const Counter = ({ end, duration = 2000, shouldStart = false }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;
    
    let start = 0;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end, duration, shouldStart]);

  return <span>{count}+</span>;
};

export default function Achievements() {
  const [ref, isVisible] = useScrollAnimation(0.1);
  
  const items = [
    { label: "Experience", value: 7 },
    { label: "Metro Clients", value: 150 },
    { label: "Cities", value: 10 },
    { label: "Employees", value: 100 },
    { label: "Clients Served", value: 100 },
  ];

  return (
    <section 
      ref={ref}
      className={`w-full py-16 bg-white text-black transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className={`text-center mb-12 transition-all duration-700 delay-200 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}>
        <h2 className="text-3xl font-bold">
          Our Achievements at a Glance
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 text-center">
        {items.map((item, idx) => (
          <div 
            key={idx} 
            className={`flex flex-col items-center transition-all duration-700 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 ${
              idx === items.length - 1 && items.length % 2 !== 0 ? 'col-span-2 sm:col-span-1 mx-auto max-w-[200px]' : ''
            } ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{
              transitionDelay: isVisible ? `${300 + idx * 100}ms` : '0ms'
            }}
          >
            <div className="text-3xl sm:text-4xl font-extrabold" style={{ color: '#550000' }}>
              <Counter end={item.value} shouldStart={isVisible} />
            </div>
            <p className="text-sm sm:text-base mt-2 font-medium text-gray-700">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
