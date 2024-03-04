import React, { useState } from 'react';

const ChartComponent = () => {
  const [chartData] = useState([112, 10, 225, 134, 101, 80, 50, 100, 200]);
  const [labels] = useState(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']);

  const [tooltipContent, setTooltipContent] = useState('');
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [tooltipX, setTooltipX] = useState(0);
  const [tooltipY, setTooltipY] = useState(0);

  const showTooltip = (e) => {
    setTooltipContent(e.target.textContent);
    setTooltipX(e.target.offsetLeft - e.target.clientWidth);
    setTooltipY(e.target.clientHeight + e.target.clientWidth);
    setTooltipOpen(true);
  };

  const hideTooltip = () => {
    setTooltipContent('');
    setTooltipOpen(false);
    setTooltipX(0);
    setTooltipY(0);
  };

  return (
    <div>
     
      <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
      <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>

      <div className="max-w-2xl py-10">
        <div className="shadow p-6 rounded-lg bg-white">
          <div className="md:flex md:justify-between md:items-center">
            <div>
              <h2 className="text-xl text-gray-800 font-bold leading-tight">Product Sales</h2>
              <p className="mb-2 text-gray-600 text-sm">Monthly Average</p>
            </div>

            <div className="mb-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 mr-2 rounded-full"></div>
                <div className="text-sm text-gray-700">Sales</div>
              </div>
            </div>
          </div>

          <div className="line my-8 relative">
      
            {tooltipOpen && (
              <div
                className="p-0 m-0 z-10 shadow-lg rounded-lg absolute h-auto block"
                style={{ bottom: `${tooltipY}px`, left: `${tooltipX}px` }}
              >
                <div className="shadow-xs rounded-lg bg-white p-2">
                  <div className="flex items-center justify-between text-sm">
                    <div>Sales:</div>
                    <div className="font-bold ml-2">
                      <span dangerouslySetInnerHTML={{ __html: tooltipContent }}></span>
                    </div>
                  </div>
                </div>
              </div>
            )}

           
            <div className="flex -mx-2 items-end mb-2">
              {chartData.map((data, index) => (
                <div key={index} className="px-2 w-1/6">
                  <div
                    style={{ height: `${data}px` }}
                    className="transition ease-in duration-200 bg-blue-600 hover:bg-blue-400 relative"
                    onMouseEnter={showTooltip}
                    onMouseLeave={hideTooltip}
                  >
                    <div className="text-center absolute top-0 left-0 right-0 -mt-6 text-gray-800 text-sm">{data}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-400 mx-auto" style={{ height: '1px', width: `${100 - (1 / chartData.length) * 100 + 3}%` }}></div>
            <div className="flex -mx-2 items-end">
              {labels.map((data, index) => (
                <div key={index} className="px-2 w-1/6">
                  <div className="bg-red-600 relative">
                    <div className="text-center absolute top-0 left-0 right-0 h-2 -mt-px bg-gray-400 mx-auto" style={{ width: '1px' }}></div>
                    <div className="text-center absolute top-0 left-0 right-0 mt-3 text-gray-700 text-sm">{data}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
