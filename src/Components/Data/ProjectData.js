import img1 from "../../Images/work1.png"
import img3 from "../../Images/work2.png"
import img2 from "../../Images/work3.png"
import img4 from "../../Images/CityBlastIcons/300x300bb.png"
import img5 from "../../Images/ShipFlipp3D/300x300bb.png"
import img6 from "../../Images/Math Miner/300x300bb.png"
import img7 from "../../Images/Pixel Objects Quiz/300x300bb.png"

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
    projects: [

        {
            id: "3",
            link: "https://www.hno-bayenthal.de/",
            title: "HNO-Bayenthal Website",
            text: "",
            type: "React.js",
            img: img3
        },
        {
            id: "1",
            link: "https://picsome-maxschneidercodes.netlify.app",
            title: "Pictures E-Commerce",
            text: "",
            type: "React.js",
            img: img1
        },
        {
            id: "2",
            link: "https://series-search-maxschneidercodes.netlify.app/",
            title: "React Series Search",
            text: "",
            type: "React.js",
            img: img2
        },
        {
            id: "4",
            link: "",
            title: "City Blast Match 3 ",
            text: "",
            type: "Swift",
            img: img4
        },
        {
            id: "5",
            link: "",
            title: "Ship Flip 3D",
            text: "",
            type: "Unity",
            img: img5
        },
        {
            id: "6",
            link: "",
            title: "Math Miner",
            text: "",
            type: "Swift",
            img: img6
        },
        {
            id: "7",
            link: "",
            title: "Pixel Objects Quiz",
            text: "",
            type: "Swift",
            img: img7
        }
    ]
}


export default projectData