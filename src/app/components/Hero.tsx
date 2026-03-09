import logoImage from "../../assets/images/prodculator.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-12 pb-20 bg-black">
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img 
            src={logoImage} 
            alt="PRODCULATOR" 
            className="h-28 md:h-36 lg:h-44 w-auto object-contain"
          />
        </div>

        {/* New Features Title */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
          <span className="text-white">New Features Coming to</span>
          <span className="text-yellow-500">Prodculator</span>
        </h1>

        {/* Main Headline with mixed colors */}
        <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
          <span className="text-yellow-500">Turn your</span>{' '}
          <span className="text-white">script</span>{' '}
          <span className="text-yellow-500">into</span>
          <br />
          <span className="text-white">Production intelligence</span>
        </h3>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-yellow-500 mb-10">
          with our Scripteligence tool
        </p>

        {/* Supporting text */}
        <p className="text-lg md:text-xl text-white mb-2">
          Upload your script.
        </p>
        <p className="text-lg md:text-xl text-yellow-500 mb-10">
          Discover where it makes the most financial sense to shoot.
        </p>

        {/* Explanation paragraph */}
        <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Prodculator analyses your screenplay to generate location recommendations, 
          incentive estimates, and production insights — all delivered in one clear report.
        </p>
      </div>
    </section>
  );
}