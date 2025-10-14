import { homeFeature } from "../../../constant";

export default function Features() {
  return (
    <div className='relative z-10 bg-my-bg py-20'>
      <div className='grid md:grid-cols-3 grid-cols-1 md:gap-5 gap-7 md:max-w-5xl sm:w-[90%] w-[95%] mx-auto'>
        {homeFeature.map((item) => (
          <div
            className='flex items-center text-center flex-col gap-3'
            key={item.id}>
            {item.icon && <item.icon className='text-7xl' />}
            <h4 className='font-bold text-xl'>{item.title}</h4>
            <p className='text-my-white/80 md:text-[15px] text-[13px]'>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
