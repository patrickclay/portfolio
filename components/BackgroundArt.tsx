export function BackgroundArt() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 2400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMin slice"
      >
        <defs>
          {/* Fine grid — top only */}
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(34,211,238,0.06)" strokeWidth="0.5" />
          </pattern>

          {/* Masks for transition */}
          <linearGradient id="mechFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="white" stopOpacity="1" />
            <stop offset="0.35" stopColor="white" stopOpacity="0.5" />
            <stop offset="0.55" stopColor="white" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="organicFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="white" stopOpacity="0" />
            <stop offset="0.35" stopColor="white" stopOpacity="0.2" />
            <stop offset="0.55" stopColor="white" stopOpacity="0.6" />
            <stop offset="1" stopColor="white" stopOpacity="1" />
          </linearGradient>

          <mask id="mechMask">
            <rect width="1440" height="2400" fill="url(#mechFade)" />
          </mask>
          <mask id="organicMask">
            <rect width="1440" height="2400" fill="url(#organicFade)" />
          </mask>
        </defs>

        {/* === MECHANICAL LAYER — curves flowing left to right === */}
        <g mask="url(#mechMask)">
          <rect width="1440" height="2400" fill="url(#grid)" />

          {/* Long sweeping technical curves — left to right */}
          <path d="M -20 120 Q 200 80 400 140 Q 600 200 800 160 Q 1000 120 1200 180 Q 1400 240 1500 200" stroke="rgba(34,211,238,0.10)" strokeWidth="0.7" fill="none" />
          <path d="M -20 125 Q 200 85 400 145 Q 600 205 800 165 Q 1000 125 1200 185 Q 1400 245 1500 205" stroke="rgba(34,211,238,0.06)" strokeWidth="0.4" strokeDasharray="4 8" fill="none" />

          <path d="M -20 320 Q 300 280 500 350 Q 700 420 900 370 Q 1100 320 1300 380 Q 1460 420 1500 400" stroke="rgba(34,211,238,0.08)" strokeWidth="0.7" fill="none" />

          {/* Crosshair nodes along the curves */}
          <circle cx="400" cy="140" r="20" stroke="rgba(34,211,238,0.10)" strokeWidth="0.5" fill="none" />
          <line x1="380" y1="140" x2="420" y2="140" stroke="rgba(34,211,238,0.12)" strokeWidth="0.4" />
          <line x1="400" y1="120" x2="400" y2="160" stroke="rgba(34,211,238,0.12)" strokeWidth="0.4" />

          <circle cx="900" cy="370" r="15" stroke="rgba(34,211,238,0.08)" strokeWidth="0.5" strokeDasharray="2 3" fill="none" />
          <line x1="885" y1="370" x2="915" y2="370" stroke="rgba(34,211,238,0.10)" strokeWidth="0.4" />
          <line x1="900" y1="355" x2="900" y2="385" stroke="rgba(34,211,238,0.10)" strokeWidth="0.4" />

          {/* Dimension arc */}
          <path d="M 150 250 A 80 80 0 0 1 230 330" stroke="rgba(34,211,238,0.10)" strokeWidth="0.5" fill="none" />
          <line x1="150" y1="250" x2="150" y2="340" stroke="rgba(34,211,238,0.06)" strokeWidth="0.4" strokeDasharray="2 4" />

          {/* Circuit trace with bends — flowing right */}
          <path d="M 50 480 L 150 480 Q 200 480 220 460 L 300 380 Q 320 360 360 360 L 500 360 Q 540 360 560 380 L 620 440 Q 640 460 680 460 L 800 460" stroke="rgba(34,211,238,0.08)" strokeWidth="0.7" fill="none" />
          <circle cx="150" cy="480" r="3" fill="rgba(34,211,238,0.14)" />
          <circle cx="500" cy="360" r="3" fill="rgba(34,211,238,0.14)" />
          <circle cx="800" cy="460" r="3" fill="rgba(34,211,238,0.14)" />

          {/* Another flowing trace — higher, right to left */}
          <path d="M 1460 200 L 1300 200 Q 1260 200 1240 220 L 1180 280 Q 1160 300 1120 300 L 1000 300 Q 960 300 940 280 L 880 220" stroke="rgba(34,211,238,0.07)" strokeWidth="0.7" fill="none" />
          <circle cx="1300" cy="200" r="2.5" fill="rgba(34,211,238,0.12)" />
          <circle cx="1000" cy="300" r="2.5" fill="rgba(34,211,238,0.12)" />

          {/* Blueprint arc — large, sweeping */}
          <path d="M 700 100 A 400 200 0 0 1 1100 300" stroke="rgba(34,211,238,0.08)" strokeWidth="0.5" strokeDasharray="6 8" fill="none" />

          {/* Small measurement ticks */}
          <g stroke="rgba(34,211,238,0.10)" strokeWidth="0.4">
            <line x1="1100" y1="145" x2="1100" y2="155" />
            <line x1="1150" y1="145" x2="1150" y2="155" />
            <line x1="1200" y1="145" x2="1200" y2="155" />
            <line x1="1250" y1="145" x2="1250" y2="155" />
            <line x1="1300" y1="145" x2="1300" y2="155" />
            <line x1="1100" y1="150" x2="1300" y2="150" stroke="rgba(34,211,238,0.08)" strokeWidth="0.5" />
          </g>
        </g>

        {/* === TRANSITION — curves loosening === */}
        <g opacity="0.8">
          {/* Lines becoming more organic, flowing left to right */}
          <path d="M -20 850 Q 200 800 450 870 Q 700 940 950 880 Q 1200 820 1460 900" stroke="rgba(34,211,238,0.07)" strokeWidth="0.7" fill="none" />
          <path d="M -20 950 Q 300 920 550 980 T 1100 960 T 1460 1020" stroke="rgba(34,211,238,0.06)" strokeWidth="0.6" fill="none" />

          {/* Dissolving grid fragments */}
          <line x1="200" y1="800" x2="200" y2="950" stroke="rgba(34,211,238,0.03)" strokeWidth="0.4" strokeDasharray="1 10" />
          <line x1="400" y1="830" x2="400" y2="920" stroke="rgba(34,211,238,0.03)" strokeWidth="0.4" strokeDasharray="1 14" />
        </g>

        {/* === ORGANIC LAYER — palm fronds and flowing curves === */}
        <g mask="url(#organicMask)">

          {/* Large sweeping organic curves — left to right */}
          <path d="M -40 1300 Q 200 1250 500 1320 Q 800 1390 1100 1310 Q 1300 1260 1480 1340" stroke="rgba(34,211,238,0.08)" strokeWidth="1" fill="none" />
          <path d="M -40 1500 Q 300 1450 600 1530 Q 900 1610 1200 1520 Q 1400 1460 1480 1510" stroke="rgba(34,211,238,0.06)" strokeWidth="0.8" fill="none" />

          {/* Palm frond 1 — bottom left, curving rightward */}
          <g>
            {/* Main stem */}
            <path d="M -30 2200 Q 150 2050 350 1900 Q 500 1800 650 1700 Q 750 1640 800 1600" stroke="rgba(34,211,238,0.12)" strokeWidth="1.2" fill="none" />
            {/* Leaves — right side */}
            <path d="M 150 2050 Q 220 1990 260 1920 Q 280 1880 270 1830" stroke="rgba(34,211,238,0.08)" strokeWidth="0.7" fill="none" />
            <path d="M 300 1940 Q 380 1880 420 1810 Q 440 1770 430 1720" stroke="rgba(34,211,238,0.08)" strokeWidth="0.7" fill="none" />
            <path d="M 450 1850 Q 540 1790 580 1720 Q 600 1680 590 1640" stroke="rgba(34,211,238,0.07)" strokeWidth="0.6" fill="none" />
            <path d="M 580 1770 Q 660 1720 700 1660 Q 720 1630 720 1590" stroke="rgba(34,211,238,0.07)" strokeWidth="0.6" fill="none" />
            <path d="M 700 1700 Q 760 1660 790 1620 Q 800 1600 800 1570" stroke="rgba(34,211,238,0.06)" strokeWidth="0.6" fill="none" />
            {/* Leaves — left side */}
            <path d="M 100 2100 Q 40 2060 -20 2080 Q -70 2100 -100 2150" stroke="rgba(34,211,238,0.06)" strokeWidth="0.6" fill="none" />
            <path d="M 250 1970 Q 190 1930 130 1940 Q 80 1955 40 1990" stroke="rgba(34,211,238,0.06)" strokeWidth="0.6" fill="none" />
            <path d="M 400 1870 Q 340 1830 280 1840 Q 230 1855 190 1890" stroke="rgba(34,211,238,0.05)" strokeWidth="0.5" fill="none" />
            <path d="M 550 1790 Q 490 1760 430 1770 Q 390 1785 350 1810" stroke="rgba(34,211,238,0.05)" strokeWidth="0.5" fill="none" />
          </g>

          {/* Palm frond 2 — bottom right, curving leftward */}
          <g>
            <path d="M 1480 2100 Q 1300 1970 1150 1850 Q 1020 1760 920 1680 Q 850 1640 820 1610" stroke="rgba(34,211,238,0.10)" strokeWidth="1.2" fill="none" />
            <path d="M 1300 1970 Q 1230 1910 1200 1840 Q 1185 1800 1195 1750" stroke="rgba(34,211,238,0.07)" strokeWidth="0.7" fill="none" />
            <path d="M 1150 1850 Q 1080 1800 1050 1730 Q 1040 1700 1050 1650" stroke="rgba(34,211,238,0.07)" strokeWidth="0.7" fill="none" />
            <path d="M 1020 1760 Q 960 1710 940 1650 Q 930 1620 940 1580" stroke="rgba(34,211,238,0.06)" strokeWidth="0.6" fill="none" />
            <path d="M 920 1680 Q 870 1650 860 1610 Q 855 1590 860 1570" stroke="rgba(34,211,238,0.06)" strokeWidth="0.6" fill="none" />
            {/* Right-side leaves */}
            <path d="M 1380 2030 Q 1430 2000 1470 2020 Q 1500 2040 1520 2080" stroke="rgba(34,211,238,0.05)" strokeWidth="0.6" fill="none" />
            <path d="M 1220 1900 Q 1280 1860 1330 1870 Q 1370 1885 1400 1920" stroke="rgba(34,211,238,0.05)" strokeWidth="0.6" fill="none" />
            <path d="M 1080 1800 Q 1140 1770 1190 1780 Q 1230 1795 1260 1830" stroke="rgba(34,211,238,0.04)" strokeWidth="0.5" fill="none" />
          </g>

          {/* Loose flowing curves across the bottom */}
          <path d="M -20 1800 Q 200 1760 450 1800 Q 700 1840 950 1790 Q 1200 1740 1460 1780" stroke="rgba(34,211,238,0.05)" strokeWidth="0.7" fill="none" />
          <path d="M -20 2000 Q 250 1960 500 2010 Q 750 2060 1000 2000 Q 1250 1940 1480 1990" stroke="rgba(34,211,238,0.04)" strokeWidth="0.6" fill="none" />

          {/* Small leaf shapes */}
          <path d="M 650 1500 Q 680 1470 710 1480 Q 690 1510 650 1500 Z" fill="rgba(34,211,238,0.06)" />
          <path d="M 350 1650 Q 380 1620 410 1635 Q 390 1660 350 1650 Z" fill="rgba(34,211,238,0.05)" />
          <path d="M 1050 1550 Q 1080 1520 1110 1535 Q 1090 1560 1050 1550 Z" fill="rgba(34,211,238,0.05)" />
          <path d="M 800 1450 Q 830 1420 860 1435 Q 840 1460 800 1450 Z" fill="rgba(34,211,238,0.04)" />
        </g>
      </svg>
    </div>
  );
}
