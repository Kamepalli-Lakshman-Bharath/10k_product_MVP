import SideBarClassroom from "components/classroomComponents/SideBarClassroom";
import "./classroom.css";

export default function HomeLayout({ children }) {
  return (
    <section>
      <SideBarClassroom />
      <main>{children}</main>
    </section>
  );
}
