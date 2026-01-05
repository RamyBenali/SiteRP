import locationMap from "@/assets/location-map.png";

const Revelation = () => {
  return (
    <div className="flex flex-col items-center gap-12 w-full max-w-5xl mx-auto px-6 animate-revelation">
      <div className="text-center space-y-6">
        <p className="text-lg md:text-xl leading-relaxed text-foreground font-light">
          « Le moment de la vérité est enfin arrivé.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-foreground font-light">
          Je vous observe désormais depuis le haut de la...
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-primary font-medium">
          Et je ne voulais pas partir sans vous apporter des réponses.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-muted-foreground font-light italic mt-8">
          Rendez-vous ici, mes explications vous y attendent. »
        </p>
      </div>

      <div className="relative w-full mt-8 animate-image-reveal">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-transparent z-10 pointer-events-none" />
        <img
          src={locationMap}
          alt="Position des documents"
          className="w-full h-auto rounded-sm shadow-2xl border border-border/30"
        />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      </div>
    </div>
  );
};

export default Revelation;
