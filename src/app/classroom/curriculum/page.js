import ClassroomNavBar from "components/classroomComponents/ClassroomNavBar";

const ClassroomCurriculum = () => {
  return (
    <main className="w-[calc(100%-240px)] float-right h-[100vh] lg:gap-[50px] flex">
      <div className="mt-[40px] pl-[50px] flex mx-auto flex-col gap-[40px]">
        <ClassroomNavBar />
        <div>
          <p className="font-bold mt-[65px] text-[24px]">
            Cirriculum page is under development
          </p>
        </div>
      </div>
    </main>
  );
};
export default ClassroomCurriculum;
