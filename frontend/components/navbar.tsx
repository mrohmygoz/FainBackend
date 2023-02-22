import Link from "next/link";
import Container from "./container";
import NavbarItems from "./navbar-items";
import Image from "next/image";
import LogoImg from "../public/logo.png";

export default function Navbar() {
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex items-center justify-between'>
                    <Link href='/'>
                        <Image
                            src={LogoImg}
                            alt='logo'
                            width={350}
                        />
                    </Link>
                    
                    <NavbarItems 
                        items={[
                            {title: '關於法印', link: '/about'},
                            {title: '最新消息', link: '/news'},
                            {title: '服務項目', link: '/services'},
                            {title: '蔡君如老師', link: '/teacher'},
                            {title: '法印光能學會', link: '/academy'}
                        ]}
                    />
                </div>
            </Container>
        </div>
    )
}