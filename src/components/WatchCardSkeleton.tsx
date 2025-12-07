import { Skeleton } from "@/components/ui/skeleton";

const WatchCardSkeleton = () => {
  return (
    <div className="animate-pulse">
      {/* Image skeleton */}
      <div className="relative overflow-hidden bg-card rounded-md md:rounded-lg mb-2 md:mb-4 aspect-square">
        <Skeleton className="w-full h-full" />
      </div>
      
      {/* Text skeleton */}
      <div className="space-y-1.5 md:space-y-2">
        <Skeleton className="h-4 md:h-6 w-3/4" />
        <Skeleton className="h-2.5 md:h-4 w-1/2" />
        <Skeleton className="h-4 md:h-5 w-1/3" />
      </div>
    </div>
  );
};

export default WatchCardSkeleton;
