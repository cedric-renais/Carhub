import { Button } from '@components';
import { Logo } from '@public/assets/images';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="absolute z-10 w-full">
      <nav className="flex__between max__wrapper px-6 py-4 sm:px-16">
        <Link className="flex__center" href="#">
          <Image
            className="object-contain"
            src={Logo}
            alt="Carhub, page d'accueil."
            width={118}
            height={18}
          />
        </Link>
        <Button
          title="Se connecter"
          type="button"
          containerStyles="text-white bg-gray border border-transparent hover:bg-white hover:text-gray hover:border-gray transition-colors rounded-full min-w-[130px]"
        />
      </nav>
    </header>
  );
};
export default Navbar;
