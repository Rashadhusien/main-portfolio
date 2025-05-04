import { navBar } from "@/app/data/navBar";
import Link from "next/link";

function Footer() {
  return (
    <footer className="flex  justify-between py-5 flex-col px-10  sm:flex-row items-center gap-3 sm:gap-0  bg-seconderylight dark:bg-secondery">
      <ul className="flex gap-4 text-center">
        {navBar.map((nav, i) => {
          return (
            <li key={i}>
              <Link
                href={nav.url != "/" ? `/pages/${nav.url}` : nav.url}
                className="  hover:text-orange opacity-90 text-sm font-medium text-[0.88rem] hover:opacit100 hover:text-[0.9rem] transition-all duration-300 text-sub-title-light dark:text-subtitle dark:hover:text-orange"
              >
                {nav.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <p className="text-textfooter capitalize">
        made with &lt;3 by
        <a
          href="mailto:rashadhusein440@gmail.com"
          className="text-orange dark:text-orange px-1"
        >
          rashad
        </a>
        © 2025
      </p>
    </footer>
  );
}

export default Footer;
