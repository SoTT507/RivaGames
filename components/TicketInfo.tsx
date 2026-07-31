type TicketProps = {
  data: {
    description: string;
    prices: { type: string; price: string }[];
  }
};

export default function TicketInfo({ data }: TicketProps) {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-6 text-white">Biglietti</h2>
      <div className="inline-block bg-amber-500/10 border border-amber-500/50 text-amber-200 px-6 py-4 rounded-xl mb-12 max-w-2xl">
        <strong>Attenzione:</strong> {data.description}
      </div>
      <div className="grid sm:grid-cols-3 gap-6">
        {data.prices.map((ticket, idx) => (
          <div
            key={idx}
            className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-fuchsia-500/50 transition-colors"
          >
            <h3 className="text-lg text-slate-400 mb-2">{ticket.type}</h3>
            <p className="text-4xl font-black text-white">{ticket.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
