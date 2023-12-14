//links
import Link from "next/link";

//icons
import { 
  RiGithubLine, 
  RiInstagramLine, 
  RiTiktokLine, 
  RiFacebookLine,  
  RiLinkedinLine
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg'>
        <Link href={'https://github.com/Angsa077'} className='hover:text-accent transition-all duration-300'>
            <RiGithubLine />
        </Link>
        <Link href={'https://www.linkedin.com/in/angsa77/'} className='hover:text-accent transition-all duration-300'>
            <RiLinkedinLine />
        </Link>
        <Link href={'https://www.instagram.com/angsa_77/'} className='hover:text-accent transition-all duration-300'>
            <RiInstagramLine />
        </Link>
        <Link href={'https://www.tiktok.com/@angsa_77'} className='hover:text-accent transition-all duration-300'>
            <RiTiktokLine />
        </Link>
        <Link href={'https://www.facebook.com/Angsa077'} className='hover:text-accent transition-all duration-300'>
            <RiFacebookLine />
        </Link>
    </div>
  );
};

export default Socials;
