import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Skilles.css';
import htmlImage from '../../assets/images/html.png';
import jsImage from '../../assets/images/javascript.png';
import reactImage from '../../assets/images/react.png';
import phpImage from '../../assets/images/PHP.png';
import mysqlImage from '../../assets/images/MySQL.png';
import bootstrapImage from '../../assets/images/Bootstrap.png';
import tailwindImage from '../../assets/images/tailwind.png';
import laravelImage from '../../assets/images/laravel.png';
import docker from '../../assets/images/Docker.png';
import Postman from '../../assets/images/postman.png';
import ubuntu from '../../assets/images/ubuntu.png';

const skillsData = [
    { id: 1, name: 'HTML/CSS', image: htmlImage },
    { id: 2, name: 'JavaScript', image: jsImage },
    { id: 3, name: 'React', image: reactImage },
    { id: 4, name: 'PHP', image: phpImage },
    { id: 5, name: 'MySQL', image: mysqlImage },
    { id: 6, name: 'Bootstrap', image: bootstrapImage },
    { id: 7, name: 'Tailwind CSS', image: tailwindImage },
    { id: 8, name: 'Laravel', image: laravelImage },
    { id: 9, name: 'Docker', image: docker },
    { id: 10, name: 'Postman', image: Postman },
    { id: 11, name: 'Ubuntu', image: ubuntu },
];

const Skills = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="min-h-screen flex items-center justify-between bg-gradient-to-r from-gray-800 via-indigo-500 to-yellow-500">
            <div className="relative w-1/4 h-64 flex items-center justify-center">
                <div className="moon animate-fadeInUp"></div>
            </div>
            <div className="w-1/2">
                <Slider {...settings}>
                    {skillsData.map(skill => (
                        <div key={skill.id} className="skill p-4 transition-transform transform hover:scale-105">
                            <img src={skill.image} alt={skill.name} className="rounded-full shadow-lg" />
                            <p className="mt-2 text-center font-bold text-white">{skill.name}</p>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="relative w-1/4 h-64 flex items-center justify-center">
                <div className="sun animate-fadeInUp"></div>
            </div>
        </div>
    );
};

export default Skills;
