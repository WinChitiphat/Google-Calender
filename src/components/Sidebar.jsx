import CreateEventButton from "./CreateEventButton";
import Label from "./Label";
import SmallCalendar from "./SmallCalendar";
export function Sidebar() {
  return (
    <aside className="relative border p-5 w-64">
      <CreateEventButton />
      <SmallCalendar />
      <Label />
    </aside>
  );
}
