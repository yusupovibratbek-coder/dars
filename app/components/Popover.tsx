import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>

      <PopoverContent className="w-80">
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Title</h4>
          <p className="text-sm text-muted-foreground">
            Bu yerda popover ichidagi kontent yoziladi.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  )
}