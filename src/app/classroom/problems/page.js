import ClassroomNavBar from "components/classroomComponents/ClassroomNavBar";

const ClassroomProblems=() =>{
  return (
    <main className="float-right w-[calc(100%-240px)] min-h-[100vh] flex">
      <div className="mt-[40px] pl-[50px] flex mx-auto flex-col gap-[40px]">
        <ClassroomNavBar />
        <div className="mt-[65px]">
          <p className="font-bold text-[24px] text-center">
            Problems page is under development
          </p>
        </div>
      </div>
    </main>
  );
}
export default ClassroomProblems;