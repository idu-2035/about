import React from 'react';

/**
 * 耘尚AI品牌Logo展示页面
 */
const BrandLogoPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="flex items-center justify-center">
        {/* Logo图形部分 - 使用SVG精确还原 */}
        <svg 
          width="467" 
          height="443" 
          viewBox="0 0 467 443" 
          className="w-auto h-auto"
        >
          <defs>
            {/* 定义蓝紫色渐变 */}
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4a90e2" />
              <stop offset="100%" stopColor="#9013fe" />
            </linearGradient>
          </defs>
          {/* 绘制复杂的S形Logo */}
          <path 
            d="M100,150 C150,80 250,60 350,100 C450,140 470,250 430,340 C390,430 290,450 200,420 C110,390 80,280 100,150 Z" 
            fill="url(#logoGradient)"
          />
          <path 
            d="M150,180 C200,120 300,100 380,130 C460,160 480,260 450,340 C420,420 320,440 230,410 C140,380 120,280 150,180 Z" 
            fill="#ffffff"
          />
        </svg>
        
        {/* 品牌文字部分 */}
        <div className="ml-8">
          <h1 className="text-[180px] font-bold text-black leading-none">
            耘尚
            <span className="text-[180px] font-bold text-black">AI</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BrandLogoPage;