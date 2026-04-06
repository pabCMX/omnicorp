import type { NewsItem } from "@/types/types";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export function NewsTicker({ newsItems }: { newsItems: NewsItem[] }) {
  return (
    <ScrollArea className="w-full">
      <div className="flex w-max space-x-4 p-2">
        {newsItems.map((newsItem: NewsItem) => (
          <div key={newsItem.newsId}>
            <h2 className="text-2xl font-bold">{newsItem.title}</h2>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
