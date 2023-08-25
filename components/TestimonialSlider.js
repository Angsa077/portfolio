// testimonial data
export const testimonialSlider = [
  {
    image: '/t-avt-1.png',
    name: 'Alvin Malik',
    position: 'Customer',
    message:
      'Saya sangat senang bekerja dengan ka Angga untuk mengembangkan situs web bisnis saya. Kemampuan teknisnya luar biasa dan dia benar-benar memahami visi yang saya miliki. Proses kerjanya sangat terstruktur, dia selalu mengkomunikasikan perkembangan proyek secara efektif. Saya sangat puas dengan hasil akhirnya dan tidak ragu merekomendasikan kepada siapa pun yang membutuhkan solusi web berkualitas tinggi.',
  },
  {
    image: '/t-avt-2.png',
    name: 'Muhammad Hafidh Siddiq',
    position: 'Customer',
    message:
      'Sangat puas dengan hasil kerja dari web developer ini! Desain website yang dibuat sangat menarik dan responsif. Tidak hanya itu, tetapi juga proses kerjanya sangat profesional.',
  },
  {
    image: '/t-avt-3.png',
    name: 'Ade Rohman',
    position: 'Customer',
    message:
      'Website baru yang dibuat oleh web developer ini benar-benar mengubah cara kami berinteraksi dengan pelanggan. Tampilan yang menawan dan user-friendly membuat pengunjung betah berlama-lama.',
  },
];

//impot swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

//import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper';

// icons
import { FaQuoteLeft } from 'react-icons/fa';

// next image
import Image from 'next/image';

const TestimonialSlider = () => {
  return (
    <Swiper 
        navigation={true}
        pagination={{ 
        clickable: true
      }}
      modules={[Navigation, Pagination]}
      className='h-[400px]'
    >
      {testimonialSlider.map((person, index)=> {
        return(
        <SwiperSlide key={index}>
          <div className='flex flex-col items-center md:flex-row gap-x-8 h-full
          px-16'>
              {/*avatar, name, position*/}
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center
              items-center relative mx-auto xl:mx-0'>
                <div className='flex flex-col justify-center text-center'>
                    {/*avatar*/}
                    <div className='mb-2 mx-auto'>
                      <Image src={person.image} width={100} height={100} alt='' />
                    </div>
                    {/*name*/}
                    <div className='text-lg'>{person.name}</div> 
                    {/*position*/}
                    <div className='text-[12px] uppercase font-extralight
                    tracking-widest'>
                      {person.position}
                      </div> 
                  </div>
              </div>
              {/*quote & message*/}
              <div className='flex-1 flex flex-col justify-center
              before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0
              xl:before:h-[200px] relative xl:pl-20'>
                  {/*quote icon*/}
                  <div className='mb-4'>
                    <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto
                    md:mx-0' />
                  </div>
                  {/*message*/}
                  <div className='xl:text-lg text-center md:text-left'>
                    {person.message}
                    </div>
              </div> 
          </div>
        </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;