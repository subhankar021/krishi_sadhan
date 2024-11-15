import React from 'react';


const FastagSection = () => {
  return (
    <div>
      

      {/* Fastag Section */}
      <section className="bg-purple-900 py-8 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content Wrapper with Rounded Corners */}
          <div className="bg-purple-800 rounded-lg md:rounded-xl p-6 md:p-12 shadow-lg">
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
              
              {/* Left side: Mobile display with FASTag graphic */}
              <div className="relative w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
                <div className="w-40 sm:w-48 md:w-64 lg:w-72 h-auto relative">
                  {/* Mock phone display */}
                  <img 
                    src="phone-image-placeholder.png" 
                    alt="Phone Display" 
                    className="w-full max-w-full h-auto"
                  />
                  {/* FASTag graphic and balance overlay */}
                  <div className="absolute top-6 left-6">  
                  </div>
                </div>
              </div>

              {/* Right side: Information text */}
              <div className="lg:w-1/2 lg:pl-12 text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4">BlackBuck FASTag</h2>
                <p className="text-base sm:text-lg mb-6">Seamless tolling for truckers</p>

                <ul className="space-y-4 text-sm sm:text-base">
                  <li className="flex items-start justify-center lg:justify-start">
                    <span className="inline-block text-green-500 mr-2">&#10003;</span>
                    <span>33% market share of commercial vehicle tolling in FY 24</span>
                  </li>
                  <li className="flex items-start justify-center lg:justify-start">
                    <span className="inline-block text-green-500 mr-2">&#10003;</span>
                    <span>FASTag Gold feature to avoid Blacklisting</span>
                  </li>
                  <li className="flex items-start justify-center lg:justify-start">
                    <span className="inline-block text-green-500 mr-2">&#10003;</span>
                    <span>Fastest resolution in the industry for chargebacks</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FastagSection;
