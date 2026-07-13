// components/ProcessorsCard.jsx
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
export default function BoxOne({ name, explain ,to}) {
    return (
        <div className="bg-white rounded-2xl p-8  shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between items-start">
            <h2 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                {name}
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-6">
                {explain}
            </p>
            {/* <button className="bg-transparent border-none text-blue-600 font-medium text-base inline-flex items-center gap-2 hover:gap-3 transition-all duration-300 cursor-pointer">
                View All →
            </button> */}
            <Link to={to}>
                <Button variant="text">View All →</Button>
            </Link>
        </div>
    )
}