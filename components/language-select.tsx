import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function LanguageSelect() {
  return (
    <Select>
      <SelectTrigger className="w-auto ml-1">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="hu-HU">HUN</SelectItem>
        <SelectItem value="en-UK">ENG</SelectItem>
      </SelectContent>
    </Select>
  );
}
