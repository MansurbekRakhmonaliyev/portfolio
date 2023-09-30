import LinkedIn, { GitHub, GMail, Telegram, Resume } from "../components/Icons";
// import {  Discord, Twitter } from "../components/Icons";
import ResumeLink from "../assets/resume.pdf"
const contactInfo = [
    {
        id: 1,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/mansurbek-rahmonaliyev-a273b0270/",
        icon: <LinkedIn />,
    },
    {
        id: 2,
        name: "GitHub",
        link: "https://github.com/MansurbekRakhmonaliyev",
        icon: <GitHub />,
    },
    {
        id: 3,
        name: "Mail",
        link: "mailto:rahmonaliyev2311@gmail.com",
        icon: <GMail />,
    },

    {
        id: 4,
        name: "Telegram",
        link: "https://t.me/rahmonaliyevmansurbek",
        icon: <Telegram />,
    },
    {
        id: 5,
        name: "Resume",
        link: ResumeLink,
        icon: <Resume />,
        download: true
    }
    // {
    //   id: 6,
    //   name: "Twitter",
    //   link: "twitter.com",
    //   icon: <Twitter />,
    // },
    // {
    //   id: 7,
    //   name: "Discord",
    //   link: "discord.com",
    //   icon: <Discord />,
    // },
];

export default contactInfo;