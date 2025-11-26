interface WatchCardProps {
  name: string;
  category: string;
  price: number;
  image: string;
}

const WatchCard = ({ name, category, price, image }: WatchCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden bg-card rounded-lg mb-4 aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      <div className="space-y-1">
        <h3 className="font-display text-xl text-foreground">{name}</h3>
        <p className="text-sm text-muted-foreground uppercase tracking-wider">{category}</p>
        <p className="text-lg font-semibold text-foreground">
          ${price.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default WatchCard;
