
import HeaderItem from './HeaderItem';
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/outline"
import Link from 'next/link';
const Header= ()=>{
    return(
        <header className='flex flex-col sm:flex-row justify-between m-5 items-center h-auto'>
            <div className='flex flex-grow justify-evenly max-w-2xl'>
                <Link href='/'><a><HeaderItem title='Home' Icon={HomeIcon}></HeaderItem></a></Link>
                <HeaderItem title='TRENDING' Icon={LightningBoltIcon}></HeaderItem>
                <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon}></HeaderItem>
                <HeaderItem title='COLLECTIONS' Icon={CollectionIcon}></HeaderItem>
                <HeaderItem title='SEARCH' Icon={SearchIcon}></HeaderItem>
                <HeaderItem title='ACCOUNT' Icon={UserIcon}></HeaderItem>
            </div>
            <div className='hover:scale-110  transform origin-x transition duration-300 ease-out'>
                <Link href='/'><a className="   text-5xl font-black bg-clip-text bg-gradient-to-t from-[#810c0c] to-[#270202] text-transparent">JAMBO</a></Link>
            </div>
                {/* <Image className='object-contain' src='https://links.papareact.com/ua6' width={200} height={100}></Image> */}

        </header>
            )
}
export default Header;