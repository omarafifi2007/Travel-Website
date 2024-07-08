import React from 'react'
import './Main.css'
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { HiOutlineClipboardCheck } from 'react-icons/hi';
import img1 from '../../Assets/img-1.png';
import img2 from '../../Assets/img-2.png';
import img3 from '../../Assets/img-3.png';
import img4 from '../../Assets/img-4.png';
import img5 from '../../Assets/img-5.png';
import img6 from '../../Assets/img-6.png';
import img7 from '../../Assets/img-7.png';
import img8 from '../../Assets/img-8.png';
import img9 from '../../Assets/img-9.png';


const Data = [
    {
        id: 1,
        imgSrc: img1,
        destTitle: 'Changed',
        location: 'New Zealand',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'The Epitome Of Romance, Bora Bora Is One Of The Best Travel Destinations in the World. This Place Is Known For Its Luxurious Stays And Adventurous Activities.'
    },
    {
        id: 2,
        imgSrc: img2,
        destTitle: 'Machu Picchu',
        location: 'Peru',
        grade: 'CULTURAL RELAX',
        fees: '$600',
        description: 'Huayna Picchu Is A Mountain In Peru, Rising Over Machu Picchu, The so-called Lost City Of Incas. This Place Is Popular Among Tourists As The Sunrise From The Sun Gate Is Simply Spectacular.'
    },
    {
        id: 3,
        imgSrc: img3,
        destTitle: 'Great Barrier Reef',
        location: 'Australia',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'One Of The Most Remarkble Austrailian Natural Gifts Is The Great Barrier Reef The Hallmark Of This Place Is lavish And Beauty Always Interesting To Be In This Place'
    },
    {
        id: 4,
        imgSrc: img4,
        destTitle: 'Cappadocia',
        location: 'Turkey',
        grade: 'CULTURAL RELAX',
        fees: '$800',
        description: 'According To The World Tourism Ranking, 45 Million People Visit Turkey Each Year, And From That About 2 Million Come To Visit Cappadocia. This Place IS Known FOr Its Luxurious Stays And Adventurous Activities.'
    },
    {
        id: 5,
        imgSrc: img5,
        destTitle: 'Guanajauto',
        location: 'Maxico',
        grade: 'CULTURAL RELAX',
        fees: '$1100',
        description: 'A City In Centeral Mixico, Guanajuato Is Known For Its History Of Silver Mining And Colonail Architecture The Houses In The City Are Very Attractively Paitned With THe Most Bright Colors Available. Always Welcome.'
    },
    {
        id: 6,
        imgSrc: img6,
        destTitle: 'Cinque Terre',
        location: 'Italy',
        grade: 'CULTURAL RELAX',
        fees: '$840',
        description: 'The Vibrant Hues Of The Houses Are Its Benchmark And Explain The Beauty Of This Place. Also, If You Are A Foodie And Love Seafood, You Will Be Exhilarted With The Choice You Are About To Get Here. Happy Exploring Great Food!'
    },
    {
        id: 7,
        imgSrc: img7,
        destTitle: 'Angkor Wat',
        location: 'Combodia',
        grade: 'CULTURAL RELAX',
        fees: '$790',
        description: 'Angkot Wat Represents THe Entire Range Of Khmer Art From The 9th To THe 15th Century. This Temple Is Considred the Heart And Soul Of Cambodia. This Place Is Known For Its Luxurious Stays Ans Adventurous Activities.'
    },
    {
        id: 8,
        imgSrc: img8,
        destTitle: 'Taj Mahal',
        location: 'India',
        grade: 'CUL TURAL RELAX',
        fees: '$900',
        description: 'An Immense Mausoleum Of White Marble, Built-in Agra By Mughal Emperor Beautiful. This Place Is Known For Its Luxurious Stays And Adventurous Activities'
    },
    {
        id: 3,
        imgSrc: img9,
        destTitle: 'Bali Island',
        location: 'Indonesia',
        grade: 'CULTURAL RELAX',
        fees: '$500',
        description: 'Bali Is An Indonesian Island And One Of THe Best Holiday Destinations In The Indonesian Archipelago. Bal Is Know For Its Volcanic Mountains History, Art & Culture, Food, Temples And Beautiful Sandy Beaches.'
    },
]


function Main() {
    return (
        <section className='main container section'>
            <div className="secTitle">
                <h3 className='title'>Most Visited Destination</h3>
            </div>
            <div className="secContent grid">
                {
                    Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
                        return (
                            <div key={id} className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>
                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className='icon' />
                                        <span className='name'>{location}</span>
                                    </span>
                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className='desc'>
                                        <p>{description}</p>

                                        <button className='btn flex'>
                                            DETAILS <HiOutlineClipboardCheck className='icon' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Main