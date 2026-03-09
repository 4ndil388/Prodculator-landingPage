import { MapPin, DollarSign, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: 'Location Recommendations',
    description: 'Get intelligent suggestions for filming locations based on your script\'s requirements and scenes.',
  },
  {
    icon: DollarSign,
    title: 'Incentive Estimates',
    description: 'Calculate potential tax credits and financial incentives available for different shooting locations.',
  },
  {
    icon: BarChart3,
    title: 'Production Insights',
    description: 'Receive detailed analytics and insights about your production budget and resource allocation.',
  },
];

export function Features() {
  return (
    <section className="relative py-20 px-6" style={{ backgroundColor: '#090c13' }}>
      <div className="max-w-7xl mx-auto">
        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-black/60 border border-gray-800 rounded-xl p-8"
            >
              {/* Icon */}
              <div className="mb-6">
                <feature.icon className="w-6 h-6 text-yellow-500" strokeWidth={2} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}