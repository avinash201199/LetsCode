import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid'

interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string;
    link: string;
}

const Aboutdata: datatype[] = [
    {
        heading: "Mission.",
        imgSrc: "/images/aboutus/imgOne.svg",
        paragraph: `As the Let's Code community, our unwavering mission is to empower and support every job seeker and tech enthusiast on their journey towards success. We strive to be a beacon of knowledge, sharing regular updates, opportunities, and resources that will elevate their skills and careers. Our inclusive and collaborative platform fosters a community where everyone can freely exchange insights, seek guidance, and grow together..`,
        link: 'Learn more'
    },
    {
        heading: "Vision",
        imgSrc: "/images/aboutus/imgTwo.svg",
        paragraph: "We envision Let's Code as a guiding light, illuminating the path for aspiring developers and tech enthusiasts, igniting their passion for coding, and nurturing their talents to unlock their true potential. By fostering an inclusive and supportive community, we aim to foster a sense of belonging and purpose for every member, where they can confidently embrace challenges, acquire new skills, and flourish in the rapidly evolving tech landscape.",
        link: 'Learn more'
    },
    {
        heading: "Goal",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: "As we embark on our mission to empower job seekers and tech enthusiasts through Let's Code, our overarching goal is to reach and positively impact a diverse community of one million individuals within the next five years. We aim to provide valuable resources, up-to-date information, and learning opportunities to each member, helping them advance their careers and thrive in the tech industry.",
        link: 'Learn more'
    },
]

const Aboutus = () => {
    return (

        <div id="aboutus-section">
            <div className='mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative'>
                <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" />
                <h3 className='text-center text-blue lg:text-65xl text-lg tracking-widest'>ABOUT US</h3> <br></br>
                <h4 className='text-lg font-normal text-black group-hover:text-offwhite mb-5'>At Let's Code , we are dedicated to empowering individuals in their tech journey by providing free study materials and job updates. Our mission is to make quality tech education accessible to everyone, regardless of their background or financial constraints. <br></br><br></br>

We understand the importance of staying up-to-date with the ever-evolving technology landscape. That's why we curate and provide comprehensive study materials on various tech topics, ranging from programming languages and web development to data science, artificial intelligence, and beyond. 

Educational guidance is primarily concerned with the student's success in their educational career. <br></br><br></br> We guide students to achieve their dream jobs by providing proper guidance and resources. We also help students improve their resumes, LinkedIn profiles, and GitHub profiles. So don't wait, reach out to us for any help!
</h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-16 gap-x-16 lg:gap-x-32'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='hover:bg-navyblue bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group'>
                            <h4 className='text-4xl font-semibold  text-black mb-5 group-hover:text-white'>{item.heading}</h4>
                            <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5" />
                            <h4 className='text-lg font-normal text-black group-hover:text-offwhite mb-5'>{item.paragraph}</h4>
                            <Link href="#" className='text-lg font-semibold group-hover:text-white text-blue hover-underline'>
                                {item.link}
                                <ChevronRightIcon width={20} height={20} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Aboutus;
