import { BsHeart } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { PiDevicesLight, PiPaintBrushBroadLight } from "react-icons/pi";

type servicesType = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  url?: string;
};

export const servicesSeed: servicesType[] = [
  {
    id: 1,
    title: "برندینگ",
    description: "بازطراحی فروشگاه اینترنتی با صفحات محصول سریع و حرفه‌ای.",
    tags: ["Webdesign", "E-Commerce"],
    image: "/assets/services/branding.jpg",
    url: "#",
  },
  {
    id: 2,
    title: "طراحی وب‌سایت",
    description: "طراحی لوگو و هویت بصری کامل برای برندهای تکنولوژی.",
    tags: ["Branding", "Illustration"],
    image: "/assets/services/web.jpg",
    url: "#",
  },
  {
    id: 3,
    title: "بازاریابی شبکه‌های اجتماعی",
    description: "پوسترهای مفهومی با تایپوگرافی مینیمال و مدرن.",
    tags: ["Poster Design", "Art"],
    image: "/assets/services/social.jpg",
    url: "#",
  },
  {
    id: 4,
    title: "طراحی پوستر",
    description: "تصویرسازی اختصاصی برای رابط کاربری اپلیکیشن.",
    tags: ["Illustration", "Webdesign"],
    image: "/assets/services/poster.jpg",
    url: "#",
  },
  {
    id: 5,
    title: "تولید محتوا",
    description: "چاپ‌های خاص و محدود برای نمایشگاه و فروش گالری.",
    tags: ["Prints", "Art"],
    image: "/assets/services/content-creation.webp",
    url: "#",
  },
  {
    id: 6,
    title: "استراتژی خلاق و مشاوره",
    description: "طراحی سیستم کامپوننت برای داشبوردهای تحلیلی.",
    tags: ["UI/UX", "Webdesign"],
    image: "/assets/services/Creative-strategy-sonsulting.jpg",
    url: "#",
  },
];

export const menu = [
  {id:1,title:"خانه",link:"/"},
  {id:2,title:"خدمات ما",link:"/services"},
  {id:3,title:"نمونه کارها",link:"/samples"},
  {id:4,title:"اموزش ها",link:"/taturials"},
  {id:5,title:"درمورد ما",link:"/about-us"},
  {id:6,title:"تماس با ما",link:"/contact"},
]

export const homeFeature = [
  {
    id: 1,
    title: "طراحی مینیمال و تمیز",
    description:
      "در طراحی‌هایمان سادگی و ظرافت را حفظ می‌کنیم تا تجربه‌ای مدرن و چشم‌نواز ارائه دهیم.",
    icon: PiPaintBrushBroadLight,
  },
  {
    id: 2,
    title: "سازگاری کامل",
    description:
      "طراحی و پیاده‌سازی بهینه برای انواع دستگاه‌ها و پلتفرم‌ها با اندازه‌های مختلف.",
    icon: PiDevicesLight,
  },
  {
    id: 3,
    title: "ساخته‌شده با عشق",
    description:
      "تمام پروژه‌ها با عشق، دقت و توجه به جزئیات ساخته می‌شوند تا رضایت کامل شما را به‌همراه داشته باشند.",
    icon: IoIosHeartEmpty,
  },
];

