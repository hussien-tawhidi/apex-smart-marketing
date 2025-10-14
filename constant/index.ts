import { BsHeart } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { PiDevicesLight, PiPaintBrushBroadLight } from "react-icons/pi";

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

