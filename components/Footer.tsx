import { footerLinks } from '@constants';
import { Logo } from '@public/assets/images';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="border-gray/15 max__wrapper mt-5 flex flex-col border-t">
      <div className="max-md:flex_col flex flex-wrap gap-5 px-6 py-10 sm:px-16">
        <div className="flex flex-1 flex-wrap justify-between gap-20">
          {footerLinks.map((link, index) => (
            <div
              className="flex min-w-[170px] flex-col gap-6 text-base"
              key={index}
            >
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item, index) => (
                <Link
                  className="text-gray underline-offset-4 hover:underline"
                  href={item.url}
                  key={index}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="border-gray/15 flex__between mt-10 flex-wrap border-t px-6 py-10 sm:px-16">
        <div className="flex__start flex-col gap-6">
          <Link href="#">
            <Image
              className="object-contain"
              src={Logo}
              alt="Carhub, retour à l'acceuil."
              width={118}
              height={18}
            />
          </Link>
          <p className="text-gray mb-4 text-base">
            CarHub {date}
            <br />
            Tous droits réservés &copy;
          </p>
        </div>
        <div className="flex flex-col justify-end gap-6">
          <Link
            className="text-gray underline-offset-4 hover:underline"
            href="#"
          >
            Politique de confidentialité
          </Link>
          <Link
            className="text-gray underline-offset-4 hover:underline"
            href="#"
          >
            Conditions d'utilisation
          </Link>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
