// lib/categoryConfig.ts
import {
  Inbox,
  BookOpen,
  Briefcase,
  Lightbulb,
  Archive,
} from "lucide-react";

export const CATEGORY_CONFIG: Record<
  string,
  {
    icon: any;
    colorKey: string;
  }
> = {
  Inbox: { icon: Inbox, colorKey: "neutral" },
  Learning: { icon: BookOpen, colorKey: "yellow" },
  Work: { icon: Briefcase, colorKey: "bluegray" },
  Ideas: { icon: Lightbulb, colorKey: "violet" },
  Archive: { icon: Archive, colorKey: "gray" },
};
