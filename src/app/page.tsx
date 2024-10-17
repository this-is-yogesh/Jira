import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Button variant="test" size="sm">
        {" "}
        Click Me
      </Button>
      <p className="text-red-400 font-semibold text-xl">Text Red</p>
    </div>
  );
}
