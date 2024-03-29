import ClassroomNavBar from "components/classroomComponents/ClassroomNavBar";
import ReadDocument from "components/classroomComponents/ReadDocument";
import WatchVideo from "components/classroomComponents/WatchVideo";
import WriteCode from "components/classroomComponents/WriteCode";

import { OrangeTickImage, VideoIcon } from "shared/svgIcons/classroom";

const Assignment = () => {
  const PendingCard = () => {
    return (
      <div className="p-[16px] rounded-[16px] flex flex-col w-[295px] gap-[8px] bg-white">
        <p className="text-oceanEmerald text-[24px] font-bold leading-[normal]">
          +50 Points
        </p>
        <p className="text-[24px] font-bold leading-normal">Ordered Lists</p>
        <p className="font-[400] text-[16px] leading-[normal]">
          Estimated time : <span>10 mins</span>
        </p>
        <p className="font-[400] text-[16px] leading-[normal]">
          Deadline : <span>25/06/23</span>
        </p>
        <p className="font-[400] flex gap-[4px] items-center text-[16px] leading-[normal]">
          Type : <VideoIcon />
        </p>
      </div>
    );
  };
  const CompletedCard = () => {
    return (
      <div className="p-[16px] relative text-boulder rounded-[16px] flex flex-col w-[295px] gap-[8px] bg-white">
        <OrangeTickImage className="absolute top-[10px] right-[10px]" />
        <p className=" text-[24px] font-bold leading-[normal]">+50 Points</p>
        <p className="text-[24px] font-bold leading-normal">Ordered Lists</p>
        <p className="font-[400] text-[16px] leading-[normal]">
          Estimated time : <span>10 mins</span>
        </p>
        <p className="font-[400] text-[16px] leading-[normal]">
          Deadline : <span>25/06/23</span>
        </p>
        <p className="font-[400] gap-[4px] items-center flex text-[16px] leading-[normal]">
          Type : <VideoIcon />
        </p>
      </div>
    );
  };
  return (
    <main className="w-[calc(100%-240px)] border float-right min-h-[100vh] flex">
      <div className="mt-[40px] pl-[50px] flex w-full flex-col gap-[40px]">
        <ClassroomNavBar />
        {
          <div className="flex flex-col mt-[65px] gap-[40px]">
            <div className="flex w-full overflow-hidden flex-col gap-[20px]">
              <p className="text-[16px] font-bold leading-[normal]">Pending</p>
              <div className="flex overflow-hidden w-full gap-[16px]">
                <PendingCard />
                <PendingCard />
              </div>
            </div>
            <div className="flex w-full flex-col gap-[20px]">
              <p className="text-[16px] font-bold leading-[normal]">
                Completed
              </p>
              <div className="flex gap-[16px]">
                <CompletedCard />
                <CompletedCard />
                <CompletedCard />
              </div>
            </div>
          </div>
        }
        {/* <WatchVideo/> */}
        {/* <ReadDocument/> */}
        {/* <WriteCode/> */}
      </div>
    </main>
  );
};
export default Assignment;
