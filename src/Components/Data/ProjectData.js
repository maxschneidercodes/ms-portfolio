import img1 from "../../Images/work1.png"
import img3 from "../../Images/work2.png"
import img2 from "../../Images/work3.png"
import img4 from "../../Images/CityBlastIcons/300x300bb.png"
import img5 from "../../Images/ShipFlipp3D/300x300bb.png"


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
            githubLink: "",
            link: "https://www.hno-bayenthal.de/",
            title: "HNO-Bayenthal Website",
            text: "",
            type: "React.js",
            img: img3,
            imgs: []
        },
        {
            id: "1",
            githubLink: "https://github.com/maxschneidercodes/pic-some",
            link: "https://picsome-maxschneidercodes.netlify.app",
            title: "Pictures E-Commerce",
            text: "",
            type: "React.js",
            img: img1,
            imgs: []
        },
        {
            id: "2",
            githubLink: "https://github.com/maxschneidercodes/series-search",
            link: "https://series-search-maxschneidercodes.netlify.app/",
            title: "React Series Search",
            text: "",
            type: "React.js",
            img: img2,
            imgs: []
        },
        {
            id: "4",
            githubLink: "https://github.com/maxschneidercodes/Cityscapes-Match-3-master-master",
            link: "",
            title: "City Blast Match 3 ",
            text: "",
            type: "Swift",
            img: img4,
            imgs: []
        },
        {
            id: "5",
            githubLink: "https://github.com/maxschneidercodes/Sailed3D-master-master",
            link: "",
            title: "Ship Flip 3D",
            text: "",
            type: "Unity",
            img: img5,
            imgs: []
        }
    ]
}


export default projectData