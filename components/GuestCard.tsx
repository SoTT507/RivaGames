type GuestProps = {
  guest: {
    name: string;
    role: string;
    image: string;
    description: string;
  }
};

export default function GuestCard({ guest }: GuestProps) {
  return (
    <div className="group relative bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all duration-300">
      <div className="aspect-[4/5] bg-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent z-10" />
      </div>
      <div className="absolute bottom-0 left-0 w-full p-6 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform">
        <p className="text-cyan-400 text-sm font-bold uppercase tracking-wider mb-1">
          {guest.role}
        </p>
        <h3 className="text-2xl font-bold text-white mb-2">
          {guest.name}
        </h3>
        <p className="text-slate-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-100">
          {guest.description}
        </p>
      </div>
    </div>
  );
}
