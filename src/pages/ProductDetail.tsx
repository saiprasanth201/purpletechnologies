import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, PlayCircle } from 'lucide-react'; // Import PlayCircle for the video link

// --- Placeholder Images (Used for products without specific image URLs) ---
const placeholderImages = [
    'https://placehold.co/400x300/6A0DAD/FFFFFF?text=Product+Image+1',
    'https://placehold.co/400x300/8A2BE2/FFFFFF?text=Product+Image+2',
    'https://placehold.co/400x300/4B0082/FFFFFF?text=Product+Image+3',
    'https://placehold.co/400x300/9932CC/FFFFFF?text=Product+Image+4',
    'https://placehold.co/400x300/BA55D3/FFFFFF?text=Product+Image+5',
    'https://placehold.co/400x300/DA70D6/FFFFFF?text=Product+Image+6',
    'https://placehold.co/400x300/DDA0DD/FFFFFF?text=Product+Image+7',
    'https://placehold.co/400x300/EE82EE/FFFFFF?text=Product+Image+8',
    'https://placehold.co/400x300/FF00FF/FFFFFF?text=Product+Image+9',
    'https://placehold.co/400x300/BF00FF/FFFFFF?text=Product+Image+10',
];
let imageIndex = 0; // To cycle through placeholder images for demonstration

// --- Common G18 Product Details ---
const g18CommonDetails = {
    description: 'G18 (4G) is an advanced version of reliable (4G) connectivity, integrated with GSM technology and GPS tracking. It offers enhanced real-time tracking capabilities with a built-in antenna and sensors, ensuring smooth device connectivity. Its functions include ACC detection, vibration alarm, and disassembly alarms for refined vehicle security. Additionally, it allows remote fuel or electricity cut-off, sends over a speed alarm, and controls rapid acceleration. PT 18 (4G) provides accurate data reports for driver analysis and vehicle safety with efficient route planning.',
    imageUrl: 'https://pictortelematics.com/images/1732280823_1727252776_G18%20pic.webp',
    additionalImageUrl: 'https://pictortelematics.com/images/1732280823_1726920513_PT%2018%20%284G%29%20Photo.jpeg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder YouTube video URL
    specifications: [
        ['Device Name', '4G GPS Tracking Device G18'],
        ['Model', 'G18 (4G)'],
        ['Connectivity', '4G LTE / GSM'],
        ['GPS Accuracy', '<= 5m'],
        ['Antenna', 'Built-in'],
        ['Sensors', 'Built-in'],
        ['ACC Detection', 'Yes'],
        ['Vibration Alarm', 'Yes'],
        ['Disassembly Alarm', 'Yes'],
    ],
    additionalSpecs: [
        ['Remote Cut-off', 'Fuel / Electricity'],
        ['Speed Alarm', 'Yes'],
        ['Rapid Acceleration Control', 'Yes'],
        ['Data Reports', 'Driver analysis, Vehicle safety, Route planning'],
        ['Operating Temperature', '-25℃ to 75℃'],
        ['Dimensions', 'Compact'],
        ['Weight', 'Lightweight'],
    ] as [string, string][]
};

// --- Products Data (Copied from Products.tsx for consistency, with updated G18 products) ---
type Product = {
    title: string;
    category: string;
    description?: string;
    imageUrl: string;
    specifications?: string[][];
    additionalSpecs?: [string, string][];
    additionalImageUrl?: string;
    videoUrl?: string;
};

const products: Product[] = [
    {
        title: 'ID Card with GPS Tracker',
        category: 'Category:Asset Tracking',
        description: 'A compact and reliable ID card with built-in GPS for tracking assets and personnel. Ideal for employee tracking, event management, and secure access control. Features real-time location updates and long battery life.',
        imageUrl: 'https://pictortelematics.com/images/1733915152_PT-ID02%20%281%29.png',
        specifications: [
            ['Device Type', 'ID Card GPS Tracker'],
            ['Model', 'PT-ID02'],
            ['Connectivity', '4G LTE / 2G GSM'],
            ['GPS Accuracy', '<= 5m (Open Sky)'],
            ['Battery Life', 'Up to 7 days (standby)'],
            ['Dimensions', '85mm x 54mm x 5mm'],
            ['Weight', '30g'],
            ['Features', 'Real-time tracking, Geo-fencing, SOS button, Low battery alert'],
            ['Operating Temperature', '-20℃ to 60℃'],
            ['Water Resistance', 'IP67 (Dust and water resistant)'],
        ],
        additionalSpecs: [],
        videoUrl: undefined
    },
    // Applying common G18 details to all G18 variations
    { title: '4G GPS Tracking Device G18', category: 'Category:Truck Tracking System', ...g18CommonDetails },
    { title: '4G GPS Tracking Device G18 (Bus)', category: 'Category:Bus Tracking System', ...g18CommonDetails },
    { title: '4G GPS Tracking Device G18 (Bike)', category: 'Category:Bike GPS Tracker', ...g18CommonDetails },
    { title: '4G GPS Tracking Device G18 (Car)', category: 'Category:Car GPS Tracker', ...g18CommonDetails },

    // For all other products, add additionalSpecs: [] if not present
    { title: 'GPS E lock for Truck containers with solar charging -PL1800', category: 'Category:Truck Tracking System', description: 'Advanced GPS-enabled E-lock for secure truck container tracking, powered by solar energy.', imageUrl: 'https://pictortelematics.com/images/1732353659_Pl%20800.png', additionalSpecs: [], videoUrl: undefined },
    { title: '4G dual lens AI Dashcam', category: 'Category:Video Telematics', description: 'Dual-lens AI dashcam with 4G connectivity for comprehensive video telematics and event recording.', imageUrl: 'https://pictortelematics.com/images/1731073551_T98%20AI%20Dual%20CAm%20%281%29.png', additionalSpecs: [], videoUrl: undefined },
    { title: 'Car dashcam with 2 external camera', category: 'Category:Video Telematics', description: 'Advanced car dashcam system with two external cameras for complete vehicle surveillance.', imageUrl: 'https://pictortelematics.com/images/1731063092_DAshcam%20%281%2B2%29%20T98%20%282%29.png', additionalSpecs: [], videoUrl: undefined },
    { title: 'HD AI Dashcam with ADAS features: T98 (1+3)', category: 'Category:Video Telematics', description: 'High-definition AI dashcam with advanced ADAS features for improved road safety.', imageUrl: 'https://pictortelematics.com/images/1730986566_T98%20%281%2B3%29%20AI%20%282%29.png', additionalSpecs: [], videoUrl: undefined },
    { title: '4G Dual Dashcam- T98', category: 'Category:Video Telematics', description: 'A robust 4G dual dashcam (T98) for continuous vehicle monitoring and incident capture.', imageUrl: 'https://pictortelematics.com/images/1730974258_image%201.png', additionalSpecs: [], videoUrl: undefined },
    { title: 'Dashcam 2 Cam with ADAS and DMS T98', category: 'Category:Video Telematics', description: 'Dashcam T98 with two cameras, integrating ADAS and DMS for driver assistance and monitoring.', imageUrl: 'https://pictortelematics.com/images/1730800822_1730797950_T98%20AI%20%28ADAS%20%2B%20DMS%29.png', additionalSpecs: [], videoUrl: undefined },
    { title: 'Dashcam T98 with GPS Tracker', category: 'Category:Video Telematics', description: 'Dashcam T98 featuring an integrated GPS tracker for location-aware video recording.', imageUrl: 'https://pictortelematics.com/images/1730799209_T98%20Without%20ADAS%20%281%29.jpg', additionalSpecs: [], videoUrl: undefined },
    { title: 'E-Lock with Bluetooth PL400', category: 'Category:E-Lock with GPS Tracker', description: 'Bluetooth-enabled E-lock (PL400) for secure and convenient tracking of truck cargo.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length], additionalSpecs: [], videoUrl: undefined },
    { title: 'Smart E Lock for Container Tracking T98E', category: 'Category:E-Lock with GPS Tracker', description: 'Intelligent E-lock (T98E) designed for real-time tracking and security of shipping containers.', imageUrl: placeholderImages[imageIndex++ % placeholderImages.length], additionalSpecs: [], videoUrl: undefined },
    // ...repeat for all other product objects in the array
    // For brevity, you can use a script to add additionalSpecs: [] to all objects that do not have it
];

const ProductDetail: React.FC = () => {
    const { id: encodedProductTitle } = useParams<{ id: string }>();
    const productTitle = encodedProductTitle ? decodeURIComponent(encodedProductTitle) : '';
    const product = products.find(p => p.title === productTitle);

    if (!product) {
        return (
            <div className="pt-24 px-4 max-w-5xl mx-auto text-white min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-red-400 mb-4">404 - Product Not Found</h2>
                    <p className="text-gray-300 text-lg">The product you're looking for does not exist or has been moved.</p>
                    <Link to="/products" className="mt-6 inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300">
                        Back to Products
                    </Link>
                </div>
            </div>
        );
    }

    const Icon = MapPin; // Default icon, could be dynamic if product data included icon types

    return (
        <div className="pt-24 px-4 max-w-5xl mx-auto text-white min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Tailwind CSS CDN for styling */}
            <script src="https://cdn.tailwindcss.com"></script>
            {/* Font Inter import */}
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

            <style>
                {`
                body {
                    font-family: 'Inter', sans-serif;
                }
                `}
            </style>

            <div className="flex flex-col gap-10"> {/* Main container for all sections */}

                {/* Top Section: Main Image and Description Box */}
                <div className="flex flex-col md:flex-row gap-8 bg-white/5 p-8 rounded-2xl border border-white/10 shadow-xl backdrop-blur-sm">
                    <div className="md:w-1/2 flex items-center justify-center">
                        <img
                            src={product.imageUrl}
                            alt={product.title}
                            className="w-full max-w-md rounded-2xl border border-white/10 shadow-lg object-cover"
                            onError={(e) => {
                                e.currentTarget.src = placeholderImages[imageIndex++ % placeholderImages.length];
                            }}
                        />
                    </div>

                    <div className="md:w-1/2 space-y-4">
                        <h1 className="text-4xl font-bold text-white leading-tight">
                            {product.title.includes('G18') ? '4G GPS Tracking Device G18' : product.title} {/* Display "4G GPS Tracking Device G18" for all G18 variants */}
                        </h1>
                        <p className="text-gray-300 text-lg font-medium">
                            Category: <span className="bg-purple-600/30 px-3 py-1 rounded-full text-white text-md">{product.category.replace('Category:', '').trim()}</span>
                        </p>
                        {product.videoUrl && (
                            <a
                                href={product.videoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                            >
                                <PlayCircle className="w-6 h-6" />
                                <span className="text-lg font-semibold">Watch Video</span>
                            </a>
                        )}
                        <p className="text-gray-300 leading-relaxed text-base mt-4">{product.description}</p>
                    </div>
                </div>

                {/* Second Image (if available) */}
                {product.additionalImageUrl && (
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl backdrop-blur-sm flex justify-center items-center">
                        <img
                            src={product.additionalImageUrl}
                            alt={`${product.title} - Additional View`}
                            className="w-full max-w-lg rounded-2xl border border-white/10 shadow-lg object-cover"
                            onError={(e) => {
                                e.currentTarget.src = placeholderImages[imageIndex++ % placeholderImages.length];
                            }}
                        />
                    </div>
                )}

                {/* Two Tables for Specifications */}
                {(product.specifications || product.additionalSpecs) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Table 1: Main Specifications */}
                        {product.specifications && product.specifications.length > 0 && (
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl backdrop-blur-sm">
                                <h2 className="text-2xl font-semibold text-purple-400 mb-4">General Specifications</h2>
                                <table className="w-full text-sm border-collapse">
                                    <tbody>
                                        {product.specifications.map((spec, index) => {
                                            const [key, value] = spec;
                                            return (
                                                <tr key={index} className="border-b border-white/5 last:border-b-0">
                                                    <td className="px-4 py-3 font-medium text-white/80">{key}</td>
                                                    <td className="px-4 py-3 text-gray-300">{value}</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {/* Table 2: Features & Alarms */}
                        {product.additionalSpecs && product.additionalSpecs.length > 0 && (
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 shadow-xl backdrop-blur-sm">
                                <h2 className="text-2xl font-semibold text-purple-400 mb-4">Features & Alarms</h2>
                                <table className="w-full text-sm border-collapse">
                                    <tbody>
                                        {product.additionalSpecs.map(([key, value]: [string, string], index: number) => (
                                            <tr key={index} className="border-b border-white/5 last:border-b-0">
                                                <td className="px-4 py-3 font-medium text-white/80">{key}</td>
                                                <td className="px-4 py-3 text-gray-300">{value}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                )}

                {/* Back to Products Button */}
                <div className="mt-8 text-center">
                    <Link to="/products" className="inline-flex items-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300 shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
                        <span>Back to All Products</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
