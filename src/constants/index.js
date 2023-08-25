import { Girl1, Man1, Man2, bali, capeTown, heroTours1, heroTours2, heroTours3, kyoto, morocco, queenstown } from '../assets/images'
import { star, badge, adjustments, flame, wallet, headphones } from '../assets/icons'



export const intro = {
    name: `Traveler <span>Go.</span>`,
    schedule: {
        icon: 'clock svg',
        text: '09:00AM — 05:00PM',
    },
    phone: {
        icon: 'phone svg',
        text: '+380 77 707 00 77',
    },
    btn: {
        text: 'Contact Us'
    },
}

export const navLinks = [
    {href: '#home', label: 'Home'},
    {href: '#tours', label: 'Tours'},
    {href: '#testimonials', label: 'Testimonials'},
    {href: '#contact', label: 'Contact Us'},
]

export const socialMediaLinks = [
    {
        label: 'Instagram',
        logo: '',
        url: '',
    },
    {
        label: 'Facebook',
        logo: '',
        url: '',
    },
    {
        label: 'Twitter',
        logo: '',
        url: '',
    },
    {
        label: 'googlePlus',
        logo: '',
        url: '',
    },
]

export const heroTours = [
    {imgURL: heroTours1, title: 'Forest holidays'},
    {imgURL: heroTours2, title: 'Ocean holidays'},
    {imgURL: heroTours3, title: 'Mountain holidays'},
]

export const ourServices = [
    {title: 'Personalized Matching', desc: 'Our unique matching system lets you find just the tour you want for your next holiday.', svgURL: adjustments},
    {title: 'Wide Variety of Tours', desc: 'We offer a wide variety of personally picked tours with destinations all over the globe.', svgURL: badge},
    {title: 'Highly Qualified Service', desc: 'Our tour managers are qualified, skilled, and friendly to bring you the best service.', svgURL: star},
    {title: '24/7 Support', desc: 'You can always get professional support from our staff 24/7 and ask any question you have.', svgURL: headphones},
    {title: 'Handpicked Hotels', desc: 'Our team offers only the best selection of affordable and luxury hotels to our clients.', svgURL: flame},
    {title: 'Best Price Guarantee', desc: 'If you find tours that are cheaper than ours, we will compensate the difference.', svgURL: wallet},
]

export const hotTours = [
    {imgURl: bali, title: 'Discovering the Magic of Bali, Indonesia', description: 'Experience the allure of Bali, where lush landscapes meet stunning beaches. Immerse yourself in cultural wonders at ancient temples, unwind with traditional spa treatments, and embrace the vibrant nightlife of Seminyak.', price: '780$'},
    {imgURl: capeTown, title: 'Unveiling the Wonders of Cape Town, South Africa', description: 'Embark on an adventure in Cape Town, where Table Mountain sets the backdrop for exploration. From the historic Robben Island to the vibrant V&A Waterfront, and the breathtaking Cape of Good Hope, this journey is a blend of history, nature, and urban charm.', price: '950$'},
    {imgURl: kyoto, title: "Enchanting Journey through Kyoto, Japan", description: "Step into the timeless beauty of Kyoto, Japan's cultural gem. Wander through serene bamboo groves in Arashiyama, uncover the exquisite architecture of Kinkakuji (Golden Pavilion), and partake in a traditional tea ceremony in the heart of Gion's historic streets.", price: '1035$'},
    {imgURl: queenstown, title: 'Serenity and Adventure in Queenstown, New Zealand', description: "Immerse yourself in the colors and flavors of Marrakech. Get lost in the bustling souks of the medina, marvel at the intricate details of the Bahia Palace, and savor the spices and aromas of Moroccan cuisine in Djemaa el-Fna square.", price: '850$'},
    {imgURl: morocco, title: 'Roaming the Vibrant Streets of Marrakech, Morocco', description: "Indulge in the tranquility of Queenstown's pristine nature. Cruise along Lake Wakatipu on a vintage steamship, hike through beech forests in Fiordland National Park, and take a scenic drive to Glenorchy for a breathtaking view of Lake Wakatipu and the surrounding mountains.", price: '850$'},
]

export const reviews = [
    {
        id: 1,
        img: Man1,
        name: 'Rupert Wood',
        text: 'Just wanted to say many, many thanks for helping me set up an amazing Costa Rican adventure! My nephew and I had a great time! All of the accommodations were perfect, thank you!',
    },
    {
        id: 2,
        img: Girl1,
        name: 'Catherine Williams',
        text: 'I wanted to thank you very much for planning the trip to France for my sister and me. It was amazing and exceeded my expectations! We had a wonderful time and were very pleased.',
    },
    {
        id: 3,
        img: Man2,
        name: 'Sam Peterson',
        text: 'We had a marvelous time in our travels to Madagascar, Zimbabwe, and Botswana, we had just wonderful experiences. Your service was amazing and everyone was very attentive!',
    },
]

export const achievs = [
    {
        id: 1,
        number: '60+',
        title: 'Tour programs',
    },
    {
        id: 2,
        number: '700+',
        title: 'Happy clients',
    },
    {
        id: 3,
        number: '10+',
        title: 'International Awards',
    },
]