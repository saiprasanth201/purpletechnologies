import React from 'react';
import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import {
  Cpu, MapPin, Droplets, Shield, Ticket,
  LockKeyhole, Wifi, Globe
} from 'lucide-react';

// ✅ Sidebar Category List
const productCategories = [
  { id: 'all', label: 'All Products', icon: Globe },
  { id: 'car-gps', label: 'Car GPS Tracker', icon: MapPin },
  { id: 'bike-gps', label: 'Bike GPS Tracker', icon: MapPin },
  { id: 'bus-tracking', label: 'Bus Tracking System', icon: MapPin },
  { id: 'truck-tracking', label: 'Truck Tracking System', icon: MapPin },
  { id: 'video-telematics', label: 'Video Telematics', icon: Shield },
  { id: 'asset-tracking', label: 'Asset Tracking', icon: Ticket },
  { id: 'fuel-monitoring', label: 'Fuel Monitoring', icon: Droplets },
  { id: 'e-lock', label: 'E-Lock with GPS Tracker', icon: LockKeyhole },
  { id: 'wifi-tracking', label: 'Wifi Based Tracking', icon: Wifi },
  { id: 'ev-tracking', label: 'Electric Vehicle', icon: Cpu },
];

const products = [
{
    title: 'ID Card with GPS Tracker',
    category: 'Category:Asset Tracking',
},
{
    title: 'GPS E lock for Truck containers with solar charging -PL1800',
    category: 'Category:Truck Tracking System',
},
{
    title: '4G GPS Tracking Device G18',
    category: 'Category:Truck Tracking System',
},
{
    title: '4G GPS Tracking Device G18',
    category: 'Category:Bus Tracking System',
},
{
    title: '4G GPS Tracking Device G18',
    category: 'Category:Bike GPS Tracker',
},
{
    title: '4G GPS Tracking Device G18',
    category: 'Category:Car GPS Tracker',
},
{
    title: '4G dual lens AI Dashcam',
    category: 'Category:Video Telematics',
},
{
    title: 'Car dashcam with 2 external camera',
    category: 'Category:Video Telematics',
},
{
    title: 'HD AI Dashcam with ADAS features: T98 (1+3)',
    category: 'Category:Video Telematics',
},
{
    title: '4G Dual Dashcam- T98',
    category: 'Category:Video Telematics',
},
{
    title: 'Dashcam 2 Cam with ADAS and DMS T98',
    category: 'Category:Video Telematics',
},
{
    title: 'Dashcam T98 with GPS Tracker',
    category: 'Category:Video Telematics',
},
{
    title: 'E-Lock with Bluetooth PL400',
    category: 'Category:Truck Tracking System',
},
{
    title: 'Smart E Lock for Container Tracking T98E',
    category: 'Category:Truck Tracking System',
},
{
    title: '4G GPS Tracker with Bluetooth PS 10C',
    category: 'Category:Truck Tracking System',
},
{
    title: '4G GPS Tracker with Bluetooth PS 10C',
    category: 'Category:Bus Tracking System',
},
{
    title: '4G GPS Tracker with Bluetooth PS 10C',
    category: 'Category:Car gps tracker',
},
{
    title: '4G GPS Tracker With Analog Input PS10 B',
    category: 'Category:Truck Tracking System',
},
{
    title: '4G GPS Tracker With Analog Input PS10 B',
    category: 'Category:Bus Tracking System',
},
{
    title: '4G GPS Tracker With Analog Input PS10 B',
    category: 'Category:Car gps tracker',
},
{
    title: 'Truck GPS Tracker G17S',
    category: 'Category:Truck Tracking System',
},
{
    title: 'Vehicle GPS Tracker G17S',
    category: 'Category:Bus Tracking System',
},
{
    title: 'Vehicle GPS Tracker G17S',
    category: 'Category:Car GPS Tracker',
},
{
    title: '2G Truck GPS Tracker PT 101B',
    category: 'Category:Truck Tracking System',
},
{
    title: '2G Car GPS Tracker PT 101B',
    category: 'Category:Bus Tracking System',
},
{
    title: '2G Car GPS Tracker PT 101B',
    category: 'Category:Bike GPS Tracker',
},
{
    title: '2G Car GPS Tracker PT 101B',
    category: 'Category:Car gps tracker',
},
{
    title: 'GPS Tracker For Vehicles GS 900',
    category: 'Category:Truck Tracking System',
},
{
    title: 'GPS Tracker For Vehicles GS 900',
    category: 'Category:Bus Tracking System',
},
{
    title: 'GPS Tracker For Vehicles GS 900',
    category: 'Category:Bike GPS Tracker',
},
{
    title: 'GPS Tracker For Vehicles GS 900',
    category: 'Category:Car gps tracker',
},
{
    title: '4G Fleet Tracking Device PS10A',
    category: 'Category:Truck Tracking System',
},
{
    title: '4G Fleet Tracking Device PS10A',
    category: 'Category:Bus Tracking System',
},
{
    title: '4G Fleet Tracking Device PS10A',
    category: 'Category:Car GPS Tracker',
},
{
    title: '4G Fleet Tracking Device PS10G',
    category: 'Category:Truck Tracking System',
},
{
    title: 'BMS IoT device  for EV CONNECT01',
    category: 'Category:Electric vehicle',
},
{
    title: 'Iot Vehicle Tracking System for EV CONNECT 01',
    category: 'Category:Electric vehicle',
},
{
    title: 'BMS iot for Electric vehicle CONNECT 02 Plus',
    category: 'Category:Electric vehicle',
},
{
    title: 'Container E Lock Tracking System GL600',
    category: 'Category:Truck Tracking System',
},
{
    title: 'Magnetic Asset Tracker PT30',
    category: 'Category:Asset Tracking',
},
{
    title: 'Magnetic GPS Tracker PT08',
    category: 'Category:Asset Tracking',
},
{
    title: 'Wireless Asset Tracking System PT08A',
    category: 'Category:Asset Tracking',
},
{
    title: 'OBD Car GPS Tracker PS25',
    category: 'Category:Truck Tracking System',
},
{
    title: 'OBD Car GPS Tracker PS25',
    category: 'Category:Bus Tracking System',
},
{
    title: 'OBD Car GPS Tracker PS25',
    category: 'Category:Car gps tracker',
},
{
    title: 'Fuel Level Sensor : Strela Ws',
    category: 'Category:Fuel Monitoring',
},
{
    title: 'Wireless Fuel Level Sensor STRELA WD',
    category: 'Category:Fuel Monitoring',
},
{
    title: 'Fuel Level Indicator Strela D485',
    category: 'Category:Fuel Monitoring',
},
{
    title: 'BLE Enabled 4G OBD2 Tracker TLD2 D',
    category: 'Category:Truck Tracking System',
},
{
    title: 'BLE Enabled 4G OBD2 Tracker TLD2 D',
    category: 'Category:Bus Tracking System',
},
{
    title: 'BLE Enabled 4G OBD2 Tracker TLD2 D',
    category: 'Category:Car gps tracker',
},
{
    title: 'GPS Tracker with AC and Door Detection P09N',
    category: 'Category:Truck Tracking System',
},
{
    title: 'GPS Tracker with AC and Door Detection P09N',
    category: 'Category:Bus Tracking System',
},
{
    title: 'GPS Tracker with AC and Door Detection P09N',
    category: 'Category:Car GPS Tracker',
},
{
    title: 'Pet GPS Tracker PG08',
    category: 'Category:Asset Tracking',
},
{
    title: 'Wireless GPS Asset Tracker PG06',
    category: 'Category:Asset Tracking',
},
{
    title: 'OBD2 GPS Vehicle Tracker T8608',
    category: 'Category:Truck Tracking System',
},
{
    title: 'OBD2 GPS Vehicle Tracker T8608',
    category: 'Category:Bus Tracking System',
},
{
    title: 'OBD2 GPS Vehicle Tracker T8608',
    category: 'Category:Car gps tracker',
},
{
    title: 'Magnetic Asset Tracker with Temperature Detection PT20T',
    category: 'Category:Asset Tracking',
},
{
    title: 'GPS Tracker with SOS PS06',
    category: 'Category:Truck Tracking System',
},
{
    title: 'PS06 GPS Tracker with SOS',
    category: 'Category:Bus Tracking System',
},
{
    title: 'PS06 GPS Tracker with SOS',
    category: 'Category:Car gps tracker',
},
{
    title: 'PS03 GPS Tracker with AC and Door Detection',
    category: 'Category:Truck Tracking System',
},
{
    title: 'PS03 GPS Tracker with AC and Door Detection',
    category: 'Category:Bus Tracking System',
},
{
    title: 'PS03 GPS Tracker with AC and Door Detection',
    category: 'Category:Car gps tracker',
},
{
    title: 'P19S GPS Tracker with SOS and Voice Monitoring',
    category: 'Category:Truck Tracking System',
},
{
    title: 'P19S GPS Tracker with SOS and Voice Monitoring',
    category: 'Category:Bus Tracking System',
},
{
    title: 'P19S GPS Tracker with SOS and Voice Monitoring',
    category: 'Category:Car gps tracker',
},
{
    title: 'PT17H GPS Tracker',
    category: 'Category:Truck Tracking System',
},
{
    title: 'PT17H GPS Tracker',
    category: 'Category:Bus Tracking System',
},
{
    title: 'PT17H GPS Tracker',
    category: 'Category:Bike GPS Tracker',
},
{
    title: 'PT17H GPS Tracker',
    category: 'Category:Car gps tracker',
},
{
    title: 'PX100 LTECat1 2G GPS tracker',
    category: 'Category:Truck Tracking System',
},
{
    title: 'Advanced GPS Tracker with Door Detection : PX100',
    category: 'Category:Car gps tracker',
},
{
    title: 'GPS Tracker with Humidity and Temperature sensor : PX100',
    category: 'Category:Bus Tracking System',
},
{
    title: 'PT200 Waterproof GPS Tracker with Dual Server Support',
    category: 'Category:Truck Tracking System',
},
{
    title: 'PT200 Waterproof GPS Tracker with Dual Server Support',
    category: 'Category:Bus Tracking System',
},
{
    title: 'PT200 Waterproof GPS Tracker with Dual Server Support',
    category: 'Category:Car GPS Tracker',
},
{
    title: 'PT100 Dual Server Enabled GPS Vehicle Tracker',
    category: 'Category:Car gps tracker',
},
{
    title: 'PT100 Dual Server Enabled GPS Vehicle Tracker',
    category: 'Category:Bus Tracking System',
},
{
    title: 'PT100 Dual Server Enabled GPS Vehicle Tracker',
    category: 'Category:Truck Tracking System',
},
{
    title: 'PT20 4G Magnetic Asset Tracker',
    category: 'Category:Asset Tracking',
},
{
    title: 'PX100 2G Wired GPS Tracker',
    category: 'Category:Truck Tracking System',
},
{
    title: 'IC 200 LoRaWAN Smart Badges for Construction site',
    category: 'Category:Wifi Based Tracking',
},
{
    title: 'BC 100 LoRaWAN Smart Rumen Bolus (Bio Capsule) and Applicator',
    category: 'Category:Wifi Based Tracking',
},
{
    title: 'OD 100 LoRaWAN Outdoor Gateway',
    category: 'Category:Wifi Based Tracking',
},
{
    title: 'GCT 100 LoRaWAN GPS Smart Cattle Tracking Device',
    category: 'Category:Wifi Based Tracking',
},
{
    title: 'TH 100 LoRaWAN Temperature and Humidity Sensor',
    category: 'Category:Wifi Based Tracking',
},
{
    title: 'LGT 100 LoRaWAN GPS Tracker',
    category: 'Category:Wifi Based Tracking',
},
{
    title: 'PC 100 LoRaWAN People Counter',
    category: 'Category:Wifi Based Tracking',
},
{
    title: 'Capacitive Fuel sensor',
    category: 'Category:Accessories',
},
{
    title: 'OBD Connector',
    category: 'Category:Accessories',
},
{
    title: 'OBD Extension cable',
    category: 'Category:Accessories',
},
{
    title: 'D9005 5V converter',
    category: 'Category:Accessories',
},
{
    title: 'Temperature Senosor Professional',
    category: 'Category:Accessories',
},
{
    title: 'Temperature senosr with Door',
    category: 'Category:Accessories',
},
{
    title: 'Relay For Engine Cut',
    category: 'Category:Accessories',
},
{
    title: 'Microphone',
    category: 'Category:Accessories',
},
{
    title: 'Speaker',
    category: 'Category:Accessories',
},
{
    title: 'Wireless Relay',
    category: 'Category:Accessories',
},
{
    title: 'Door Sensor',
    category: 'Category:Accessories',
},
{
    title: 'WIFI Modem GPS Tracker',
    category: 'Category:Accessories',
},
{
    title: 'Wire Temperature Sensor',
    category: 'Category:Accessories',
},
{
    title: 'GPS Tracker OBD Canbus Reader',
    category: 'Category:Accessories',
},
{
    title: 'Relay GPS',
    category: 'Category:Accessories',
},
{
    title: 'Gps Tracker 360 Degree Camera',
    category: 'Category:Accessories',
},
{
    title: 'Key FOB and SOS',
    category: 'Category:Accessories',
},
{
    title: 'Temperature and Humidity Sensor',
    category: 'Category:Accessories',
},
{
    title: 'Temperature Sensor',
    category: 'Category:Accessories',
},
{
    title: 'SOS/ Panic Switch- Orange Imported',
    category: 'Category:Accessories',
},
{
    title: 'GPS Tracker Buzzer',
    category: 'Category:Accessories',
},
{
    title: 'RFID Reader RS232 with Card',
    category: 'Category:Accessories',
},
{
    title: 'Speed Limiter',
    category: 'Category:Accessories',
},
{
    title: 'Ultrasonic Fuel Sensor',
    category: 'Category:Accessories',
},
{
    title: 'Magnetic iButton Reader RS232',
    category: 'Category:Accessories',
},
{
    title: 'Digital input Switch',
    category: 'Category:Accessories',
},
{
    title: 'Magnetic Card Reader RS232',
    category: 'Category:Accessories',
},
{
    title: 'G80 Magnetics GPS Tracker',
    category: 'Category:Asset Tracking',
},
{
    title: 'PS140 GPS Tracker',
    category: 'Category:Truck Tracking System',
},
{
    title: 'PS140 GPS Tracker',
    category: 'Category:Car GPS Tracker',
},
{
    title: 'PS21 OBD2 GPS Tracker',
    category: 'Category:Truck Tracking System',
},
{
    title: 'PS21 OBD2 GPS Tracker',
    category: 'Category:Bus Tracking System',
},
{
    title: 'PS21 OBD2 GPS Tracker',
    category: 'Category:Car gps tracker',
},
{
    title: 'PT104 4G GPS Tracker for Enhanced Vehicle Security and Fleet Management',
    category: 'Category:Truck Tracking System',
},
{
    title: 'PT104 4G GPS Tracker',
    category: 'Category:Bus Tracking System',
},
{
    title: 'PT104 4G  GPS Tracker',
    category: 'Category:Car gps tracker',
},
{
    title: 'PS10 4G Gps Tracker',
    category: 'Category:Truck Tracking System',
},
{
    title: 'PS10 4G Gps Tracker',
    category: 'Category:Bus Tracking System',
},
{
    title: 'PS10 4G Gps Tracker',
    category: 'Category:Car gps tracker',
},
{
    title: 'PS07 GPS Tracker with Temperature Sensor',
    category: 'Category:Truck Tracking System',
},
{
    title: 'PS07 GPS Tracker with Temperature Sensor',
    category: 'Category:Bus Tracking System',
},
{
    title: 'PS07 GPS Tracker with Temperature Sensor',
    category: 'Category:Car GPS Tracker',
},
{
    title: 'Plug and Play 4G OBD GPS Tracker for Trucks- PS22',
    category: 'Category:Truck Tracking System',
},
{
    title: '4G OBD GPS Tracker-PS22',
    category: 'Category:Bus Tracking System',
},
{
    title: 'Car OBD GPS Tracker- PS22',
    category: 'Category:Car GPS Tracker',
},
{
    title: 'PT06 GPS Tracker',
    category: 'Category:Truck Tracking System',
},
{
    title: 'PT06 GPS Tracker',
    category: 'Category:Bus Tracking System',
},
{
    title: 'PT06 GPS Tracker',
    category: 'Category:Bike GPS Tracker',
},
{
    title: 'PT06 GPS Tracker',
    category: 'Category:Car GPS Tracker',
},
{
    title: 'EV02 GPS Tracker',
    category: 'Category:Truck Tracking System',
},
{
    title: 'EV02 GPS Tracker',
    category: 'Category:Bus Tracking System',
},
{
    title: 'EV02 GPS Tracker',
    category: 'Category:Bike GPS Tracker',
},
{
    title: 'EV02 GPS Tracker',
    category: 'Category:Car GPS Tracker',
},
{
    title: 'PT18 GPS Tracker',
    category: 'Category:Truck Tracking System',
},
{
    title: 'PT18 GPS Tracker',
    category: 'Category:Bus Tracking System',
},
{
    title: 'PT18 GPS Tracker',
    category: 'Category:Bike GPS Tracker',
},
{
    title: 'PT18 GPS Tracker',
    category: 'Category:Car gps tracker',
},
{
    title: 'P19H Waterproof GPS Tracker',
    category: 'Category:Truck Tracking System',
},
{
    title: 'P19H Waterproof GPS Tracker',
    category: 'Category:Bus Tracking System',
},
{
    title: 'P19H Waterproof GPS Tracker',
    category: 'Category:Bike GPS Tracker',
},
{
    title: 'P19H Waterproof GPS Tracker',
    category: 'Category:Car GPS Tracker',
},
{
    title: 'PS21A OBD GPS TRACKER',
    category: 'Category:Bus Tracking System',
},
{
    title: 'PS21A OBD GPS TRACKER',
    category: 'Category:Truck Tracking System',
},
{
    title: 'PS21A OBD GPS TRACKER',
    category: 'Category:Car GPS Tracker',
},
{
    title: 'PTID01 ID-Card GPS Tracker',
    category: 'Category:Asset Tracking',
},
{
    title: 'PS140 GPS Tracker',
    category: 'Category:Bus Tracking System',
},
{
    title: 'GPS Tracker - PT915',
    category: 'Category:Asset Tracking',
},
{
    title: 'CLS2 Fuel Level Sensor',
    category: 'Category:Fuel Monitoring',
},
{
    title: 'PT701D E Lock Container Tracking System',
    category: 'Category:Truck Tracking System',
},
{
    title: 'PT20 Magnetic GPS Tracker',
    category: 'Category:Asset Tracking',
}
]

const Products = () => {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category') || 'all';

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Products</span>
          </h1>
          <p className="text-gray-300 text-lg">Browse by category or explore all products.</p>
        </motion.div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10">
          {/* Sidebar */}
          <aside className="bg-white/10 p-6 rounded-xl border border-white/10 space-y-4 backdrop-blur max-h-[80vh] overflow-y-auto">
            <h2 className="text-xl font-semibold text-white">Categories</h2>
            <ul className="space-y-3">
              {productCategories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/products?category=${cat.id}`}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition ${
                      selectedCategory === cat.id
                        ? 'bg-purple-500/30 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-purple-500/10'
                    }`}
                  >
                    <cat.icon className="w-5 h-5 text-cyan-400" />
                    <span>{cat.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>

          {/* Product Titles */}
          <section className="space-y-4">
            {filteredProducts.length === 0 ? (
              <p className="text-gray-300 text-lg">No products found in this category.</p>
            ) : (
              filteredProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-white/10 p-4 rounded-lg border border-white/10"
                >
                  <h3 className="text-white text-lg font-semibold">{product.title}</h3>
                  <p className="text-gray-400 text-sm">
                    Category:{' '}
                    {
                      productCategories.find(cat => cat.id === product.category)?.label ||
                      product.category
                    }
                  </p>
                </div>
              ))
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Products;