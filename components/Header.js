import { useEffect, useRef } from 'react'
import Link from 'next/link'
import BLOG from '@/blog.config'
import { useLocale } from '@/lib/locale'

const NavBar = () => {
  const locale = useLocale()
  const links = [
    { id: 0, name: locale.NAV.INDEX, to: BLOG.path || '/', show: true },
    { id: 1, name: locale.NAV.ABOUT, to: '/about', show: BLOG.showAbout },
    { id: 2, name: locale.NAV.RSS, to: '/feed', show: true },
    { id: 3, name: locale.NAV.SEARCH, to: '/search', show: true }
  ]
  return (
    <div className="flex-shrink-0">
      <ul className="flex flex-row">
        {links.map(
          link =>
            link.show && (
              <li
                key={link.id}
                className="block ml-4 text-black dark:text-gray-50 nav"
              >
                <Link href={link.to}>
                  <a>{link.name}</a>
                </Link>
              </li>
            )
        )}
      </ul>
    </div>
  )
}

const Header = ({ navBarTitle, fullWidth }) => {
  const useSticky = !BLOG.autoCollapsedNavBar
  const navRef = useRef(null)
  const sentinalRef = useRef([])
  const handler = ([entry]) => {
    if (navRef && navRef.current && useSticky) {
      if (!entry.isIntersecting && entry !== undefined) {
        navRef.current.classList.add('sticky-nav-full')
      } else {
        navRef.current.classList.remove('sticky-nav-full')
      }
    } else {
      navRef.current.classList.add('remove-sticky')
    }
  }
  useEffect(() => {
    const obvserver = new window.IntersectionObserver(handler)
    obvserver.observe(sentinalRef.current)
    // Don't touch this, I have no idea how it works XD
    // return () => {
    //   if (sentinalRef.current) obvserver.unobserve(sentinalRef.current)
    // }
  }, [sentinalRef])
  return (
    <>
      <div className="observer-element h-4 md:h-12" ref={sentinalRef}></div>
      <div
        className={`sticky-nav m-auto w-full h-6 flex flex-row justify-between items-center mb-2 md:mb-12 py-8 bg-opacity-60 ${
          !fullWidth ? 'max-w-3xl px-4' : 'px-4 md:px-24'
        }`}
        id="sticky-nav"
        ref={navRef}
      >
        <div className="flex items-center">
          <Link href="/">
            <a>
              <div className="h-6">
              <svg width="120" height="129" viewBox="0 0 120 129" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_ii)">
                <path d="M108.75 0H11.25C5.0368 0 0 4.47715 0 10V110C0 115.523 5.0368 120 11.25 120H108.75C114.963 120 120 115.523 120 110V10C120 4.47715 114.963 0 108.75 0Z" fill="url(#paint0_linear)"/>
                <path d="M108.75 0H11.25C5.0368 0 0 4.47715 0 10V110C0 115.523 5.0368 120 11.25 120H108.75C114.963 120 120 115.523 120 110V10C120 4.47715 114.963 0 108.75 0Z" fill="url(#paint1_radial)" fill-opacity="0.8"/>
                <path d="M108.75 0H11.25C5.0368 0 0 4.47715 0 10V110C0 115.523 5.0368 120 11.25 120H108.75C114.963 120 120 115.523 120 110V10C120 4.47715 114.963 0 108.75 0Z" fill="url(#paint2_radial)" fill-opacity="0.8"/>
                <path d="M108.75 0H11.25C5.0368 0 0 4.47715 0 10V110C0 115.523 5.0368 120 11.25 120H108.75C114.963 120 120 115.523 120 110V10C120 4.47715 114.963 0 108.75 0Z" fill="url(#paint3_radial)" fill-opacity="0.8"/>
                </g>
                <g filter="url(#filter1_dii)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M32.787 58.4602C32.8066 61.4251 35.2261 63.8128 38.191 63.7931L54.2966 63.6865L54.6971 63.6691C57.4736 63.4458 59.6483 61.1127 59.6295 58.2825L59.4874 36.8084C59.4678 33.8435 57.0483 31.4558 54.0834 31.4755C51.1184 31.4951 48.7308 33.9146 48.7504 36.8795L48.8495 51.8515C48.8536 52.4775 48.3495 52.9884 47.7234 52.9925L38.12 53.0561C35.155 53.0757 32.7674 55.4952 32.787 58.4602ZM87.5111 62.2877C87.5111 59.3227 85.1075 56.9191 82.1425 56.9191L66.0366 56.9191L65.6359 56.9338C62.858 57.1387 60.668 59.4575 60.668 62.2877L60.668 83.7622C60.668 86.7272 63.0716 89.1308 66.0366 89.1308C69.0016 89.1308 71.4052 86.7272 71.4052 83.7622L71.4052 68.7899C71.4052 68.1639 71.9128 67.6563 72.5388 67.6563H82.1425C85.1075 67.6563 87.5111 65.2527 87.5111 62.2877Z" fill="white"/>
                </g>
                <defs>
                <filter id="filter0_ii" x="-13.108" y="-9.43161" width="133.108" height="129.432" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="-13.108"/>
                <feGaussianBlur stdDeviation="13.108"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.80575 0 0 0 0 0.7375 0 0 0 0 1 0 0 0 0.3 0"/>
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="-9.43161"/>
                <feGaussianBlur stdDeviation="6.28774"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.1755 0 0 0 0 0 0 0 0 0 0.675 0 0 0 0.65 0"/>
                <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow"/>
                </filter>
                <filter id="filter1_dii" x="9.20785" y="23.6157" width="101.882" height="104.814" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="15.7193"/>
                <feGaussianBlur stdDeviation="11.7895"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.227561 0 0 0 0 0.00928819 0 0 0 0 0.445833 0 0 0 0.7 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="-6.28774"/>
                <feGaussianBlur stdDeviation="3.92984"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.32 0 0 0 0 0 0 0 0 0 1 0 0 0 0.5 0"/>
                <feBlend mode="normal" in2="shape" result="effect2_innerShadow"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="-3.17429"/>
                <feGaussianBlur stdDeviation="2.11619"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.975833 0 0 0 0 0.879167 0 0 0 0 1 0 0 0 0.75 0"/>
                <feBlend mode="normal" in2="effect2_innerShadow" result="effect3_innerShadow"/>
                </filter>
                <linearGradient id="paint0_linear" x1="120" y1="-12.6087" x2="8.02806" y2="130.404" gradientUnits="userSpaceOnUse">
                <stop stop-color="#7041EE"/>
                <stop offset="0.527788" stop-color="#8D41EE"/>
                <stop offset="1" stop-color="#D641EE"/>
                </linearGradient>
                <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(32.5424 -26.087) rotate(96.1584) scale(146.935 244.927)">
                <stop stop-color="#52B6FF"/>
                <stop offset="1" stop-color="#8F41EE" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(32.0339 6.95652) rotate(62.2005) scale(59.9643 172.113)">
                <stop stop-color="#9DD6FF"/>
                <stop offset="1" stop-color="#8F41EE" stop-opacity="0"/>
                </radialGradient>
                <radialGradient id="paint3_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(176.949 91.7391) rotate(144.328) scale(101.399 139.465)">
                <stop stop-color="#5263FF"/>
                <stop offset="1" stop-color="#8F41EE" stop-opacity="0"/>
                </radialGradient>
                </defs>
                </svg>

              </div>
            </a>
          </Link>
          {navBarTitle
            ? (
            <p className="ml-2 font-medium text-day dark:text-night header-name">
              {navBarTitle}
            </p>
              )
            : (
            <p className="ml-2 font-medium text-day dark:text-night header-name">
              {BLOG.title},{' '}
              <span className="font-normal">{BLOG.description}</span>
            </p>
              )}
        </div>
        <NavBar />
      </div>
    </>
  )
}

export default Header
