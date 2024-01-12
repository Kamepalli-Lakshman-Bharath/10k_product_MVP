import ClassroomNavBar from "components/classroomComponents/ClassroomNavBar";
import SessionCard from "components/classroomComponents/SessionCard";

const ClassroomBonus = () => {
  return (
    <main className="w-[calc(100%-240px)] h-[100vh] float-right  flex">
      <div className="mt-[40px] pl-[50px] pb-[50px] flex flex-col gap-[40px]">
        <ClassroomNavBar />
        <div className="flex flex-col mt-[65px] gap-[40px]">
          <div className="flex w-full overflow-hidden flex-col gap-[20px]">
            <p className="text-[16px] font-bold leading-[normal]">Videos</p>
            <div className="flex gap-[16px]">
              <SessionCard
                type="watch"
                img="/classroom_Images/thumbnail.png"
                title="CSS inline, internal, external"
                date="12/06/23"
              />
              <SessionCard
                type="watch"
                img="/classroom_Images/thumbnail.png"
                title="CSS inline, internal, external"
                date="12/06/23"
              />
            </div>
          </div>
          <div className="flex w-full flex-col gap-[20px]">
            <p className="text-[16px] font-bold leading-[normal]">
              Reading Materials
            </p>
            <div className="flex gap-[16px]">
              <SessionCard
                type="document"
                img="/classroom_Images/thumbnail.png"
                title="Selector Tags"
                date="12/06/23"
              />
              <SessionCard
                type="document"
                img="/classroom_Images/thumbnail.png"
                title="Selector Tags"
                date="12/06/23"
              />
            </div>
          </div>
          <div className="flex w-full flex-col gap-[20px]">
            <p className="text-[16px] font-bold leading-[normal]">Quiz</p>
            <div className="flex gap-[16px]">
              <SessionCard
                type="quiz"
                img="/classroom_Images/thumbnail.png"
                title="CSS inline, internal, external"
                date="12/06/23"
              />
              <SessionCard
                type="quiz"
                img="/classroom_Images/thumbnail.png"
                title="CSS inline, internal, external"
                date="12/06/23"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default ClassroomBonus;
