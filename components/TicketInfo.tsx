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
      <div className="inline-block bg-[#FECB33]/10 border border-[#FECB33]/50 text-[#FECB33] px-6 py-4 rounded-xl mb-12 max-w-2xl">
        <strong>Attenzione:</strong> {data.description}
      </div>
      <div className="grid sm:grid-cols-3 gap-6">
        {data.prices.map((ticket, idx) => (
          <div
            key={idx}
            className="bg-[#3D4D4D] p-8 rounded-2xl border border-[#418080] hover:border-[#E86D43] transition-colors"
          >
            <h3 className="text-lg text-gray-300 mb-2">{ticket.type}</h3>
            <p className="text-4xl font-black text-white">{ticket.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
