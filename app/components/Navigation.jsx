import Link from 'next/link'
import { routes } from '../config/routes'
import styles from '../styles/Navigation.module.css'

export default function Navigation () {
  const brand = routes.find(route => route.path === '/')

  return (
    <nav className={styles.navigation}>
      <div className='flex shrink-0 w-full justify-between items-center'>
        <Link
          href={brand.path} className='font-semibold text-2xl bg-gradient-text bg-clip-text text-transparent'
        >{brand.label}
        </Link>
        <ul className='flex justify-center items-start gap-6'>
          {routes.slice(1).map((route, index) => (
            <li key={index} className='hover:underline'>
              <Link href={route.path}>{route.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
