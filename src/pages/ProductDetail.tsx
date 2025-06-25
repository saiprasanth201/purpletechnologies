import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin } from 'lucide-react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const productData: { [key: string]: any } = {
  'gps-device-1': {
    title: 'Vehicle GPS Tracker',
    description:
      'A compact and precise GPS tracker designed for real-time vehicle monitoring with advanced features such as driving behavior analysis and wide voltage input compatibility.',
    specifications: [
      ['Device Name', 'Vehicle GPS Tracker'],
      ['Model', 'PT18 (4G)'],
      ['Features', 'Drive behavior analysis'],
      ['Device Dimension', '85mm(L)*24mm(W)*14mm(H)'],
      ['Device weight', '28g'],
      ['Quad Band', '850/1900/900/1800MHz'],
      ['GPS Accuracy', '<=5m'],
      ['Voltage Input', '9-90v'],
      ['Back-up Battery', '55mAh'],
      ['Positioning Time', 'Hot Start<5S (Open Sky)'],
      ['Locating time', 'Warm Start<30S, Cold Start<40S (Open Sky)'],
      ['GPS Sensitivity', '-144dBm'],
      ['Tracking Sensitivity', '-160dBm'],
      ['Operating Temperature', '-25℃—75℃'],
      ['GPS chip', 'MTK'],
      ['GSM/GPS Antenna', 'Built-in Design'],
      ['SOS button', 'No'],
      ['Power button', 'Yes'],
      ['Vibration sensor', 'Yes'],
      ['Oil/electricity Cut off', 'Yes'],
      ['Microphone', 'No'],
      ['ACC detection', 'Yes'],
      ['GPS light', 'Yellow'],
      ['GSM light', 'Red'],
    ],
    image: 'https://i.pinimg.com/736x/e3/a3/6f/e3a36f0cd78ae2c2a37807ec60e0d30f.jpg',
    icon: MapPin,
  },
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = productData[id as keyof typeof productData];

  if (!product) {
    return (
      <div className="text-white p-8 text-center">
        <h2 className="text-2xl font-bold text-red-400">404 - Product Not Found</h2>
        <p className="text-gray-400 mt-2">The product you're looking for doesn't exist.</p>
      </div>
    );
  }

  const Icon = product.icon;

  return (
    <div className="pt-24 px-4 max-w-5xl mx-auto text-white">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.title}
            className="w-full rounded-2xl border border-white/10"
          />
        </div>

        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold flex items-center gap-3">
            <Icon className="h-8 w-8 text-cyan-400" />
            {product.title}
          </h1>
          <p className="text-gray-300 leading-relaxed">{product.description}</p>

          <div>
            <h2 className="text-2xl font-semibold text-purple-400 mb-3">Product Specifications</h2>
            <table className="w-full text-sm border border-white/10 rounded-lg overflow-hidden">
              <thead className="bg-white/10 text-white text-left">
                <tr>
                  <th className="px-4 py-2">Feature</th>
                  <th className="px-4 py-2">Specification</th>
                </tr>
              </thead>
              <tbody>
                {product.specifications.map(([key, value]: [string, string], index: number) => (
                  <tr key={index} className="border-t border-white/5">
                    <td className="px-4 py-2 font-medium text-white/80">{key}</td>
                    <td className="px-4 py-2 text-gray-300">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
