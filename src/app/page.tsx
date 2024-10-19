import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex gap-4">
      <Input />
      <Button size="sm"> Primarym12</Button>
      <Button variant="destructive" size="sm">
        {" "}
        Destructive
      </Button>
      <Button variant="outline" size="sm">
        {" "}
        Click 3
      </Button>
      <Button variant="muted" size="sm">
        {" "}
        Click 4
      </Button>
      <Button variant="territary" size="sm">
        {" "}
        Click 5
      </Button>
    </div>
  );
}
