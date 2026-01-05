const WaitingMessage = () => {
  return (
    <div className="text-center max-w-2xl mx-auto px-6 animate-fade-in">
      <p className="text-lg md:text-xl leading-relaxed text-muted-foreground font-light italic">
        « Certaines vérités ne peuvent pas être dites trop tôt.
      </p>
      <p className="text-lg md:text-xl leading-relaxed text-muted-foreground font-light italic mt-4">
        Ce qui doit être compris le sera ce soir.
      </p>
      <p className="text-lg md:text-xl leading-relaxed text-muted-foreground font-light italic mt-4">
        Le temps fera le reste. »
      </p>
    </div>
  );
};

export default WaitingMessage;
