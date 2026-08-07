type TicketProps = {
  data: {
    description: string;
    prices: { type: string; price: string }[];
  }
};

export default function TicketInfo({ data }: TicketProps) {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-6 text-brand-text">Biglietti</h2>
      <div className="inline-block bg-brand-accent-yellow/10 border border-brand-accent-yellow/50 text-brand-accent-yellow px-6 py-4 rounded-xl mb-12 max-w-2xl shadow-sm">
        <strong>Attenzione:</strong> {data.description}
      </div>
      <div className="grid sm:grid-cols-3 gap-6">
        {data.prices.map((ticket, idx) => (
          <div
            key={idx}
            className="bg-brand-dark p-8 rounded-2xl border border-brand-border hover:border-brand-accent-orange transition-colors"
          >
            <h3 className="text-lg text-brand-text/70 mb-2">{ticket.type}</h3>
            <p className="text-4xl font-black text-brand-text">{ticket.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}