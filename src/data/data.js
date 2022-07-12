import nftDummyBox from '../assets/img/nftdummy.png'

import featureCardImg1 from '../assets/img/featurecard1.png'
import featureCardImg2 from '../assets/img/featurecard2.png'
import featureCardImg3 from '../assets/img/featurecard3.png'
import featureCardImg4 from '../assets/img/featurecard4.png'
import featureCardImg5 from '../assets/img/featurecard5.png'
import featureCardImg6 from '../assets/img/featurecard6.png'

import feature1 from '../assets/img/feature1.png'
import feature2 from '../assets/img/feature2.png'
import feature3 from '../assets/img/feature3.png'
import feature4 from '../assets/img/feature4.png'
import feature5 from '../assets/img/feature5.png'
import feature6 from '../assets/img/feature6.png'

import propertyGif from '../assets/img/Property-Gif.gif'
import advisoryGif from '../assets/img/Advisory-gif.gif'
import renovationGif from '../assets/img/Renovation-gif.gif'
import homeservicesGif from '../assets/img/Home-Services-gif.gif'
import ecommerceGif from '../assets/img/ecom-gif.gif'
import communityGif from '../assets/img/Community-gif.gif'

import videoclip from '../assets/video/IKEA Australia animated video.mp4'


import videoScreenshot from '../assets/img/screenshot.png'

import nftDummyImg from '../assets/img/greendummy.jpg'

export const seriestype = [
    { value: "Advisory", label: "Advisory" },
    { value: "Community", label: "Community" },
    { value: "HomeServices", label: "Home Services" },
    { value: "Property", label: "Property" },
    { value: "Renovation", label: "Renovation" },
    { value: "E-commerce", label: "E-commerce" },

];


export const headgearOptions = [
    { value: "BandanaCap", label: "Bandana Cap" },
    { value: "JungleHat", label: "Jungle Hat" },
    { value: "Knight", label: "Knight" },
    { value: "Wig", label: "Wig" },
    { value: "CowboyHat", label: "Cowboy Hat" },
    { value: "SafetyHelmet", label: "Safety Helmet" },
    { value: "Gentleman", label: "Gentleman" },

];

export const colourOptions = [
    { value: "ocean", label: "Ocean", color: "#00B8D9" },
    { value: "blue", label: "Blue", color: "#0052CC" },
    { value: "purple", label: "Purple", color: "#5243AA" },
    { value: "red", label: "Red", color: "#FF5630" },
    { value: "orange", label: "Orange", color: "#FF8B00" },
    { value: "yellow", label: "Yellow", color: "#FFC400" },
    { value: "green", label: "Green", color: "#36B37E" },
    { value: "forest", label: "Forest", color: "#00875A" },
    { value: "slate", label: "Slate", color: "#253858" },
    { value: "silver", label: "Silver", color: "#666666" }
];


export const mouthOptions = [
    { value: "Stubble", label: "Stubble" },
    { value: "Goatee", label: "Goatee" },
    { value: "Cigar", label: "Cigar" },
    { value: "TobaccoPipe", label: "Tobacco Pipe" },
    { value: "Headset", label: "Headset" },
    { value: "FaceMask", label: "Face Mask" },
    { value: "BandanaMask", label: "Bandana Mask" },

];

export const skinOptions = [
    { value: "white", label: "White", color: "#00B8D9" },
    { value: "teal", label: "Teal", color: "#0052CC" },
    { value: "green", label: "Green", color: "#5243AA" },
    { value: "blue", label: "Blue", color: "#5243AA" },
    { value: "purple", label: "Purple", color: "#FF5630" },
    { value: "orange", label: "Orange", color: "#FF8B00" },
    { value: "yellow", label: "Yellow", color: "#FFC400" },
    { value: "pink", label: "Pink", color: "#36B37E" },

];


export const eyewearOptions = [
    { value: "VRGoggle", label: "VR Goggle" },
    { value: "SquareSunglass", label: "Square Sunglass" },
    { value: "AviatorSunglass", label: "Aviator Sunglass" },
    { value: "RidingGoogle", label: "Riding Google" },
    { value: "ShuttleShades", label: "Shuttle Shades" },
    { value: "Spectacle", label: "Spectacle" },
    { value: "FaceShield", label: "Face Shield" },

];



// Features Data

export const features = [

    {
        id: 1,
        title: 'Property',
        alias: 'property',
        keyfeatures: [
            {
                keyName: 'Feature 10 that will help make things easier and better',
            },
            {
                keyName: 'Feature 10 that will help make things easier and better',
            },
            {
                keyName: 'Feature 8 that will help make things better and efficient',
            },
            {
                keyName: 'No platform fees for users',
            },
        ],
        character: 'Power character that is cool and nice',
        featureImage: feature1,
        videos: [
            {
                id: 0,
                video: videoclip,
                tumbnail: videoScreenshot
            },
            {
                id: 0,
                video: videoclip,
                tumbnail: videoScreenshot
            },
            {
                id: 1,
                video: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
                tumbnail: videoScreenshot
            },
            {
                id: 2,
                video: videoclip,
                tumbnail: videoScreenshot
            },
            {
                id: 3,
                video: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
                tumbnail: videoScreenshot
            }
        ],
        featuresmallImage: featureCardImg1,
        bgAnimation: propertyGif

    },

    {
        id: 2,
        title: 'Advisory',
        alias: 'advisory',
        keyfeatures: [
            {
                keyName: 'Feature 10 that will help make things easier and better',
            },
            {
                keyName: 'Feature 10 that will help make things easier and better',
            },
            {
                keyName: 'Feature 8 that will help make things better and efficient',
            },
            {
                keyName: 'No platform fees for users',
            },
        ],
        character: 'Power character that is cool and nice',
        featureImage: feature2,
        videos: [
            {
                id: 0,
                video: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
                tumbnail: videoScreenshot
            },
            {
                id: 1,
                video: videoclip,
                tumbnail: videoScreenshot
            },
            {
                id: 2,
                video: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
                tumbnail: videoScreenshot
            },
            {
                id: 3,
                video: videoclip,
                tumbnail: videoScreenshot
            }
        ],
        featuresmallImage: featureCardImg2,
        bgAnimation: advisoryGif

    },

    {
        id: 3,
        title: 'Renovation',
        alias: 'renovation',
        keyfeatures: [
            {
                keyName: 'Feature 10 that will help make things easier and better',
            },
            {
                keyName: 'Feature 10 that will help make things easier and better',
            },
            {
                keyName: 'Feature 8 that will help make things better and efficient',
            },
            {
                keyName: 'No platform fees for users',
            },
        ],
        character: 'Power character that is cool and nice',
        featureImage: feature3,
        videos: [
            {
                id: 0,
                video: videoclip,
                tumbnail: videoScreenshot
            },
            {
                id: 1,
                video: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
                tumbnail: videoScreenshot
            },
            {
                id: 2,
                video: videoclip,
                tumbnail: videoScreenshot
            },
            {
                id: 3,
                video: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
                tumbnail: videoScreenshot
            }
        ],
        featuresmallImage: featureCardImg3,
        bgAnimation: renovationGif

    },
    {
        id: 4,
        title: 'Home Services',
        alias: 'homeservices',
        keyfeatures: [
            {
                keyName: 'Feature 10 that will help make things easier and better',
            },
            {
                keyName: 'Feature 10 that will help make things easier and better',
            },
            {
                keyName: 'Feature 8 that will help make things better and efficient',
            },
            {
                keyName: 'No platform fees for users',
            },
        ],
        character: 'Power character that is cool and nice',
        featureImage: feature4,
        videos: [
            {
                id: 0,
                video: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
                tumbnail: videoScreenshot
            },
            {
                id: 1,
                video: videoclip,
                tumbnail: videoScreenshot
            },
            {
                id: 2,
                video: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
                tumbnail: videoScreenshot
            },
            {
                id: 3,
                video: videoclip,
                tumbnail: videoScreenshot
            }
        ],
        featuresmallImage: featureCardImg4,
        bgAnimation: homeservicesGif

    },
    {
        id: 5,
        title: 'E-Commerce',
        alias: 'ecommerce',
        keyfeatures: [
            {
                keyName: 'Feature 10 that will help make things easier and better',
            },
            {
                keyName: 'Feature 10 that will help make things easier and better',
            },
            {
                keyName: 'Feature 8 that will help make things better and efficient',
            },
            {
                keyName: 'No platform fees for users',
            },
        ],
        character: 'Power character that is cool and nice',
        featureImage: feature5,
        videos: [
            {
                id: 0,
                video: videoclip,
                tumbnail: videoScreenshot
            },
            {
                id: 1,
                video: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
                tumbnail: videoScreenshot
            },
            {
                id: 2,
                video: videoclip,
                tumbnail: videoScreenshot
            },
            {
                id: 3,
                video: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
                tumbnail: videoScreenshot
            }
        ],
        featuresmallImage: featureCardImg5,
        bgAnimation: ecommerceGif

    },
    {
        id: 6,
        title: 'Community',
        alias: 'community',
        keyfeatures: [
            {
                keyName: 'Feature 10 that will help make things easier and better',
            },
            {
                keyName: 'Feature 10 that will help make things easier and better',
            },
            {
                keyName: 'Feature 8 that will help make things better and efficient',
            },
            {
                keyName: 'No platform fees for users',
            },
        ],
        character: 'Power character that is cool and nice',
        featureImage: feature6,
        videos: [
            {
                id: 0,
                video: videoclip,
                tumbnail: videoScreenshot
            },
            {
                id: 1,
                video: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
                tumbnail: videoScreenshot
            },
            {
                id: 2,
                video: videoclip,
                tumbnail: videoScreenshot
            },
            {
                id: 3,
                video: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
                tumbnail: videoScreenshot
            }
        ],
        featuresmallImage: featureCardImg6,
        bgAnimation: communityGif

    },
]


export const nftDropList = [
    // {
    //     id: 2202,
    //     title: '0.3 ETH',
    //     image: nftDummyBox,
    //     sold: false

    // },
    // {
    //     id: 2202,
    //     title: '0.3 ETH',
    //     image: nftDummyBox,
    //     sold: false
    // },
    // {
    //     id: 2203,
    //     title: '0.3 ETH',
    //     image: nftDummyBox,
    //     sold: false
    // },
    // {
    //     id: 2203,
    //     title: '0.3 ETH',
    //     image: nftDummyBox,
    //     sold: false
    // },
    // {
    //     id: 2213,
    //     title: '0.3 ETH',
    //     image: nftDummyBox
    // },
    // {
    //     id: 2213,
    //     title: '0.3 ETH',
    //     image: nftDummyBox,
    //     sold: false
    // },
    // {
    //     id: 2254,
    //     title: '0.3 ETH',
    //     image: nftDummyBox,
    //     sold: false
    // },
    // {
    //     id: 2254,
    //     title: null,
    //     image: nftDummyBox,
    //     sold: true
    // },
    // {
    //     id: 22061,
    //     title: '0.3 ETH',
    //     image: nftDummyBox,
    //     sold: false
    // },
    // {
    //     id: 22061,
    //     title: null,
    //     image: nftDummyBox,
    //     sold: true
    // },
    // {
    //     id: 2206,
    //     title: '0.3 ETH',
    //     image: nftDummyBox,
    //     sold: false
    // },
    // {
    //     id: 2206,
    //     title: '0.3 ETH',
    //     image: nftDummyBox,
    //     sold: false
    // },

];


export const forsaleList = [
    // {
    //     id: 2202,
    //     title: '1.2 ETH',
    //     image: nftDummyBox
    // },
    // {
    //     id: 2202,
    //     title: '1.2 ETH',
    //     image: nftDummyBox
    // },
    // {
    //     id: 2203,
    //     title: '0.5 ETH',
    //     image: nftDummyBox
    // },
    // {
    //     id: 2203,
    //     title: '0.5 ETH',
    //     image: nftDummyBox
    // },
    // {
    //     id: 2202,
    //     title: '1.2 ETH',
    //     image: nftDummyBox
    // },
    // {
    //     id: 2202,
    //     title: '1.2 ETH',
    //     image: nftDummyBox
    // },
    // {
    //     id: 2203,
    //     title: '0.5 ETH',
    //     image: nftDummyBox
    // },
    // {
    //     id: 2203,
    //     title: '0.5 ETH',
    //     image: nftDummyBox
    // },
    // {
    //     id: 2202,
    //     title: '1.2 ETH',
    //     image: nftDummyBox
    // },
    // {
    //     id: 2202,
    //     title: '1.2 ETH',
    //     image: nftDummyBox
    // },
    // {
    //     id: 2203,
    //     title: '0.5 ETH',
    //     image: nftDummyBox
    // },
    // {
    //     id: 2203,
    //     title: '0.5 ETH',
    //     image: nftDummyBox
    // },
    // {
    //     id: 2202,
    //     title: '1.2 ETH',
    //     image: nftDummyBox
    // },
    // {
    //     id: 2202,
    //     title: '1.2 ETH',
    //     image: nftDummyBox
    // },
    // {
    //     id: 2203,
    //     title: '0.5 ETH',
    //     image: nftDummyBox
    // },
    // {
    //     id: 2203,
    //     title: '0.5 ETH',
    //     image: nftDummyBox
    // },

];



export const recentTransactions = [
    // {
    //     id: 2202,
    //     title: '0.5 ETH',
    //     image: nftDummyBox,
    //     sold: true
    // },
    // {
    //     id: 2202,
    //     title: '0.5 ETH',
    //     image: nftDummyBox,
    //     sold: true
    // },
    // {
    //     id: 2203,
    //     title: '0.5 ETH',
    //     image: nftDummyBox,
    //     sold: true
    // },
    // {
    //     id: 2203,
    //     title: '0.5 ETH',
    //     image: nftDummyBox,
    //     sold: true
    // },
    // {
    //     id: 2202,
    //     title: '0.5 ETH',
    //     image: nftDummyBox,
    //     sold: true
    // },
    // {
    //     id: 2202,
    //     title: '1.2 ETH',
    //     image: nftDummyBox,
    //     sold: true

    // },
    // {
    //     id: 2203,
    //     title: '0.5 ETH',
    //     image: nftDummyBox,
    //     sold: true
    // },
    // {
    //     id: 2203,
    //     title: '0.5 ETH',
    //     image: nftDummyBox,
    //     sold: true
    // },
    // {
    //     id: 2202,
    //     title: '1.2 ETH',
    //     image: nftDummyBox,
    //     sold: true
    // },
    // {
    //     id: 2202,
    //     title: '1.2 ETH',
    //     image: nftDummyBox,
    //     sold: true
    // },
    // {
    //     id: 2203,
    //     title: '0.5 ETH',
    //     image: nftDummyBox,
    //     sold: true
    // },
    // {
    //     id: 2203,
    //     title: '0.5 ETH',
    //     image: nftDummyBox,
    //     sold: true
    // },
    // {
    //     id: 2202,
    //     title: '1.2 ETH',
    //     image: nftDummyBox,
    //     sold: true
    // },
    // {
    //     id: 2202,
    //     title: '1.2 ETH',
    //     image: nftDummyBox,
    //     sold: true
    // },
    // {
    //     id: 2203,
    //     title: '0.5 ETH',
    //     image: nftDummyBox,
    //     sold: true
    // },
    // {
    //     id: 2203,
    //     title: '0.5 ETH',
    //     image: nftDummyBox,
    //     sold: true
    // },

];


// My NFTS
export const myNfts = [
    {
        id: 1300,
        title: 'E-Commerce',
        image: nftDummyImg
    },
    {
        id: 1301,
        title: 'Property',
        image: nftDummyImg
    },
    {
        id: 1302,
        title: 'E-Commerce',
        image: nftDummyImg
    },
    {
        id: 1303,
        title: 'Property',
        image: nftDummyImg
    }
    , {
        id: 1304,
        title: 'E-Commerce',
        image: nftDummyImg
    }
    , {
        id: 1305,
        title: 'Property',
        image: nftDummyImg
    }
    , {
        id: 1306,
        title: 'E-Commerce',
        image: nftDummyImg
    }
]


// Past Transactions
export const pastTransactions = [
    {
        date: 'Mar 10, 2022',
        type: 'Bought',
        amount: '0.11',
        value: '$200',
        serialno: '00321',
        from: '0x323',
        to: '0x123'
    },
    {
        date: 'Mar 02, 2022',
        type: 'Offer',
        amount: '0.2',
        value: '$200',
        serialno: '01000',
        from: '',
        to: ''
    },
    {
        date: 'Feb 02, 2022',
        type: 'Bid',
        amount: '0.11',
        value: '$300',
        serialno: '01080',
        from: '',
        to: '0x523'
    },
    {
        date: 'Jan 02, 2022',
        type: 'Bid',
        amount: '0.08',
        value: '$200',
        serialno: '08888',
        from: '',
        to: '0x623'
    }
    ,
    {
        date: 'Mar 10, 2022',
        type: 'Bought',
        amount: '0.11',
        value: '$200',
        serialno: '00321',
        from: '0x323',
        to: '0x123'
    },
    {
        date: 'Dec 12, 2021',
        type: 'Sold',
        amount: '0.18',
        value: '$200',
        serialno: '06969',
        from: '0x323',
        to: '0x123'
    },
    {
        date: 'Dec 02, 2021',
        type: 'Transfer',
        amount: '0.',
        value: '',
        serialno: '09230',
        from: '0x923',
        to: '0x123'
    },
    {
        date: 'Dec 02, 2021',
        type: 'Transfer',
        amount: '0.',
        value: '',
        serialno: '09230',
        from: '0x123',
        to: '0x923'
    }
]

// List of Ticket Holder
export const listofTicketHolder = [
    {
        id: 1,
        account: 0xa858ddc04325f8,
        ticketOwned: 3
    },
    {
        id: 2,
        account: 0xa858ddc04425d8,
        ticketOwned: 1
    },
    {
        id: 3,
        account: 0xa858ddc04425d8,
        ticketOwned: 10
    }
]