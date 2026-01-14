import { Card, CardContent } from "@/components/ui/card";
import { useCountUp } from "@/hooks/useCountUp";
import { ACHIEVEMENT_DATA } from "@/constants/data";
import { AchievementCardProps } from "@/types";

const Achievement = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ACHIEVEMENT_DATA.map((data) => (
            <AchievementCard
              key={data.id}
              Icon={data.Icon}
              value={data.value}
              label={data.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const AchievementCard = ({ Icon, value, label }: AchievementCardProps) => {
  const { ref, displayValue } = useCountUp(value);

  return (
    <Card
      ref={ref as React.RefObject<HTMLDivElement>}
      className="bg-white shadow-lg border-none overflow-hidden transition-all duration-300 hover:shadow-xl"
    >
      <CardContent className="p-8 flex flex-col items-center text-center">
        <div className="mb-4 p-4 rounded-full bg-gray-50 transition-colors">
          <Icon className="w-8 h-8 text-black" />
        </div>

        <h3 className="text-5xl font-black text-black mb-3">{displayValue}</h3>

        <p className="text-sm font-bold uppercase tracking-widest text-gray-500">
          {label}
        </p>

        <div className="w-12 h-1 bg-amber-500 mt-4" />
      </CardContent>
    </Card>
  );
};

export default Achievement;
