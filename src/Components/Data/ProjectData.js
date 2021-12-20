import img1 from "../../Images/work1.png"
import img3 from "../../Images/work2.png"
import img2 from "../../Images/work3.png"
import img4 from "../../Images/CityBlastIcons/300x300bb.png"
import img5 from "../../Images/ShipFlipp3D/300x300bb.png"
import img6 from "../../Images/Math Miner/300x300bb.png"
import img7 from "../../Images/Pixel Objects Quiz/300x300bb.png"


import shipflip1 from "../../Images/ShipFlipp3D/1242x2688bb-1.png"
import shipflip2 from "../../Images/ShipFlipp3D/1242x2688bb-2.png"
import shipflip3 from "../../Images/ShipFlipp3D/1242x2688bb-3.png"
import shipflip4 from "../../Images/ShipFlipp3D/1242x2688bb-4.png"
import shipflip5 from "../../Images/ShipFlipp3D/1242x2688bb.png"

import cityblast1 from "../../Images/CityBlastIcons/1242x2688bb-1.png"
import cityblast2 from "../../Images/CityBlastIcons/1242x2688bb-2.png"
import cityblast3 from "../../Images/CityBlastIcons/1242x2688bb-3.png"
import cityblast4 from "../../Images/CityBlastIcons/1242x2688bb-4.png"
import cityblast5 from "../../Images/CityBlastIcons/1242x2688bb-5.png"
import cityblast6 from "../../Images/CityBlastIcons/1242x2688bb-6.png"
import cityblast7 from "../../Images/CityBlastIcons/1242x2688bb-7.png"
import cityblast8 from "../../Images/CityBlastIcons/1242x2688bb-8.png"
import cityblast9 from "../../Images/CityBlastIcons/1242x2688bb.png"

import mathminer1 from "../../Images/Math Miner/1242x2208bb-1.png"
import mathminer2 from "../../Images/Math Miner/1242x2208bb-2.png"
import mathminer3 from "../../Images/Math Miner/1242x2208bb-3.png"

import pixel1 from "../../Images/Pixel Objects Quiz/1242x2688bb-1.png"
import pixel2 from "../../Images/Pixel Objects Quiz/1242x2688bb-2.png"
import pixel3 from "../../Images/Pixel Objects Quiz/1242x2688bb.png"



const projectData = {
    filterData: [{
            icon: "All",
            type: "ALL",
        },
        {
            icon: "React",
            type: "React.js",
        },

        {
            icon: "Swift",
            type: "Swift",
        },
        {
            icon: "Unity",
            type: "Unity",
        },
    ],
    projects: [{
            id: "3",
            link: "https://www.hno-bayenthal.de/",
            title: "HNO-Bayenthal Website",
            text: "",
            type: "React.js",
            img: img3,
            imgs: []
        },
        {
            id: "1",
            link: "https://picsome-maxschneidercodes.netlify.app",
            title: "Pictures E-Commerce",
            text: "",
            type: "React.js",
            img: img1,
            imgs: []
        },
        {
            id: "2",
            link: "https://series-search-maxschneidercodes.netlify.app/",
            title: "React Series Search",
            text: "",
            type: "React.js",
            img: img2,
            imgs: []
        },
        {
            id: "4",
            link: "",
            title: "City Blast Match 3 ",
            text: "",
            type: "Swift",
            img: img4,
            imgs: [cityblast1, cityblast2, cityblast3, cityblast4, cityblast5, cityblast6, cityblast7, cityblast8, cityblast9]
        },
        {
            id: "5",
            link: "",
            title: "Ship Flip 3D",
            text: "",
            type: "Unity",
            img: img5,
            imgs: [shipflip1, shipflip2, shipflip3, shipflip4, shipflip5]
        },
        {
            id: "6",
            link: "",
            title: "Math Miner",
            text: "",
            type: "Swift",
            img: img6,
            imgs: [mathminer1, mathminer2, mathminer3]
        },
        {
            id: "7",
            link: "",
            title: "Pixel Objects Quiz",
            text: "",
            type: "Swift",
            img: img7,
            imgs: [pixel1, pixel2, pixel3],
        }
    ]
}


export default projectData