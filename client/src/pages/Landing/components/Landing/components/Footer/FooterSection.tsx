interface Link {
  link: string;
  title: string;
}

interface FooterSectionProps {
  title: string;
  links: Link[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col gap-1 items-center md:items-start">
      <h1 className="tracking-wider font-bold text-neutral-600">{title}</h1>
      <ul className="links flex flex-col items-center md:items-start">
        {links.map((link) => (
          <li>
            <a
              className="text-neutral-300 hover:underline text-sm"
              href={link.link}
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;
