import Link from "next/link"
// import clsx from "clsx"


const links = [
    {
        path: '/',
        title: 'Home'
    },
    {
        path: '/services',
        title: 'Services'
    },
    {
        path: '/about',
        title: 'About'
    },
    {
        path: '/projects',
        title: 'Projects'
    },
    {
        path: '/contact',
        title: 'Contact'
    },
]

export default function NavLinks() {
    return (
       <>
        {links.map(link => {
            return (
                <Link key={link.path} href={link.path} >{link.title}</Link>
            )
        })}
       </>
    )
}