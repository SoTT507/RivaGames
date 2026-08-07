import { FaInstagram, FaTiktok, FaFacebook } from 'react-icons/fa';

// Mappa i nomi dei social alle icone
const socialIcons: { [key: string]: React.ElementType } = {
  Instagram: FaInstagram,
  TikTok: FaTiktok,
  Facebook: FaFacebook,
};

interface SocialItem {
  nome: string;
  link: string;
}

interface SocialBarProps {
  social: SocialItem[];
}

export default function SocialBar({ social }: SocialBarProps) {
  // Filtra solo i social con link valido
  const activeSocial = social.filter((s) => s.link && s.link.trim() !== '');

  if (activeSocial.length === 0) {
    return (
      <div className="w-full bg-brand-dark/50 border-y border-brand-border py-6 md:py-8 text-center text-brand-text/40">
        Nessun social disponibile
      </div>
    );
  }

  return (
    <div className="w-full bg-brand-dark/50 border-y border-brand-border py-6 md:py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-4">
        {/* Titolo */}
        <h3 className="text-sm md:text-base font-semibold text-brand-text/60 uppercase tracking-wider">
          Seguici sui social
        </h3>

        {/* Icone social */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          {activeSocial.map((socialItem, idx) => {
            const Icon = socialIcons[socialItem.nome];
            
            // Se non troviamo l'icona, mostriamo solo il testo
            if (!Icon) {
              return (
                <a
                  key={idx}
                  href={socialItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-text/60 hover:text-brand-accent-yellow transition-all duration-300 hover:scale-110 text-sm font-medium"
                >
                  {socialItem.nome}
                </a>
              );
            }

            return (
              <a
                key={idx}
                href={socialItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-brand-text/60 hover:text-brand-accent-yellow transition-all duration-300 hover:scale-110"
                aria-label={socialItem.nome}
              >
                <Icon className="w-6 h-6 md:w-7 md:h-7" />
                <span className="text-sm font-medium hidden sm:inline">
                  {socialItem.nome}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
