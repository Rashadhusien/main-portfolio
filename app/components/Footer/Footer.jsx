import { navBar } from "@/app/data/navBar";
import Link from "next/link";

function Footer() {
  return (
    <footer className="flex justify-between pb-12 flex-col sm:flex-row items-center gap-3 sm:gap-0 mt-10">
      <ul className="flex gap-4">
        {navBar.map((nav, i) => {
          return (
            <li key={i}>
              <Link
                href={nav.url != "/" ? `/pages/${nav.url}` : nav.url}
                className="  hover:text-blueElzero opacity-90 text-sm font-medium text-[0.88rem] hover:opacit100 hover:text-[0.9rem] transition-all duration-300 text-sub-title-light dark:text-subtitle dark:hover:text-orange"
              >
                {nav.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <p className="text-textfooter capitalize">
        made with love by
        <a
          href="mailto:rashadhusein440@gmail.com"
          className="text-blueElzero dark:text-orange"
        >
          rashad
        </a>
        © 2024
      </p>
    </footer>
  );
}

export default Footer;
