import NavbarItem from "../interfaces/navbar-item"
import Link from 'next/link'

type Props = {
    items: NavbarItem[]
}

export default function NavbarItems({ items }: Props) {
    return (
        <ul className='flex'>
            {items.map((item) => (
                <li>
                    <Link href={item.link}>{item.title}</Link>
                </li>
            ))}
        </ul>
    )
}