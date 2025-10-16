
import { IoIosHeartEmpty } from "react-icons/io";
import {
  PiDevicesLight,
  PiPaintBrushBroadLight,
  PiMegaphoneSimpleLight,
  PiGlobeLight,
} from "react-icons/pi";
import { TbBrandWebflow } from "react-icons/tb";
import { LuLightbulb } from "react-icons/lu";
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
  { id: 1, title: "خانه", link: "/" },
  { id: 2, title: "خدمات ما", link: "/services" },
  { id: 3, title: "نمونه کارها", link: "/samples" },
  { id: 4, title: "اموزش ها", link: "/taturials" },
  { id: 5, title: "درمورد ما", link: "/about-us" },
  { id: 6, title: "تماس با ما", link: "/contact" },
];

import {

  PiHeartStraightLight,
  PiRocketLight,
  PiChatsLight,
  PiShieldCheckLight,
} from "react-icons/pi";
import { LuSparkles } from "react-icons/lu";

export const homeFeature = [
  {
    id: 1,
    title: "طراحی مینیمال و مدرن",
    description:
      "در طراحی‌هایمان سادگی، ظرافت و زیبایی را ترکیب می‌کنیم تا تجربه‌ای ماندگار خلق شود.",
    icon: PiPaintBrushBroadLight,
  },
  {
    id: 2,
    title: "کاملاً واکنش‌گرا",
    description:
      "هر پروژه برای تمامی دستگاه‌ها — از موبایل تا دسکتاپ — با دقت و ظرافت بهینه‌سازی می‌شود.",
    icon: PiDevicesLight,
  },
  {
    id: 3,
    title: "ساخته‌شده با عشق و دقت",
    description:
      "تمام جزئیات با عشق، تمرکز و توجه کامل طراحی می‌شوند تا بهترین نتیجه حاصل شود.",
    icon: PiHeartStraightLight,
  },
  {
    id: 4,
    title: "تجربه کاربری درخشان",
    description:
      "با تمرکز بر سادگی و تعامل روان، تجربه‌ای لذت‌بخش و مدرن برای کاربران ایجاد می‌کنیم.",
    icon: LuSparkles,
  },
  {
    id: 5,
    title: "پشتیبانی و ارتباط مداوم",
    description:
      "در تمام مراحل پروژه، در کنار شما هستیم تا بهترین نتیجه را با همکاری مؤثر به‌دست آوریم.",
    icon: PiChatsLight,
  },
  {
    id: 6,
    title: "امنیت و عملکرد بالا",
    description:
      "پروژه‌های ما با رعایت بالاترین استانداردهای امنیتی و عملکردی توسعه داده می‌شوند.",
    icon: PiShieldCheckLight,
  },
];


export const homeService = [
  {
    id: 7,
    title: "طراحی و توسعه وب‌سایت",
    description:
      "طراحی وب‌سایت‌های خلاق، واکنش‌گرا و سریع که تجربه کاربری روان و جذابی برای مشتریان شما فراهم می‌کند.",
    icon: TbBrandWebflow,
  },
  {
    id: 8,
    title: "برندینگ و هویت بصری",
    description:
      "ساخت هویت بصری منحصربه‌فرد برای برند شما؛ از طراحی لوگو تا رنگ، فونت و پیام برند با هماهنگی کامل.",
    icon: PiPaintBrushBroadLight,
  },
  {
    id: 9,
    title: "بازاریابی دیجیتال",
    description:
      "افزایش دیده‌شدن برند شما در فضای دیجیتال از طریق استراتژی‌های هدفمند تبلیغات و شبکه‌های اجتماعی.",
    icon: PiMegaphoneSimpleLight,
  },
  {
    id: 10,
    title: "تولید محتوا و کپی‌رایتینگ",
    description:
      "نوشتن و تولید محتوایی حرفه‌ای که پیام برند شما را به زبان درست و مؤثر به مخاطبان منتقل می‌کند.",
    icon: IoIosHeartEmpty,
  },
  {
    id: 5,
    title: "استراتژی و مشاوره برند",
    description:
      "تحلیل برند، بازار و رقبا برای ایجاد مسیر رشد هوشمندانه و تصمیم‌گیری دقیق در توسعه برند شما.",
    icon: LuLightbulb,
  },
  {
    id: 6,
    title: "سئو و بهینه‌سازی وب",
    description:
      "بهبود رتبه سایت در موتورهای جستجو با تکنیک‌های مدرن سئو برای جذب ترافیک طبیعی و ماندگار.",
    icon: PiGlobeLight,
  },
];

