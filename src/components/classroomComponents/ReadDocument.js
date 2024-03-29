import { LeftArrow, VideoIcon } from "shared/svgIcons/classroom";
import Link from "next/link";
import Image from "next/image";

export default function ReadDocument() {
  return (
    <div className="flex mt-[70px] gap-[30px]">
      <div className="rounded-[16px] overflow-hidden">
        <div className="bg-Vivid_Tangelo h-[30rem] text-white  flex flex-col gap-[30px]">
          <div className="flex p-[20px] gap-[10px]">
            <LeftArrow />
            <p className="font-[700] text-[16px]">Go back</p>
          </div>
          <div className="font-[700] flex flex-col gap-[10px] pl-[40px] pr-[20px]">
            <p className="text-[24px]  ">Ordered Lists</p>
            <p>
              Estimated time: <span>10mins</span>
            </p>
            <p>
              Deadline: <span>25/06/23</span>
            </p>
            <p className="flex gap-[5px]">
              Type: <VideoIcon fill="white" />
            </p>
          </div>
        </div>
        <div className="bg-white flex items-center justify-center font-bold text-Vivid_Tangelo p-[30px] h-[5rem]">
          +50 Points
        </div>
      </div>
      <div className="flex flex-col  gap-[30px]">
        <div className="h-[320px] w-full relative overflow-hidden rounded-[16px]">
          <Image alt="" src="/classroom_Images/doc1.png" fill />
        </div>
        <div className="bg-white w-[640px] rounded-[16px] flex flex-col gap-[20px] p-[20px]">
          <div className=" text-Vivid_Tangelo">
            <p className="font-bold mb-[5px]">Notes and Links</p>
            <Link
              target="_blank"
              href="https://javascript.info/first-steps"
              className="underline"
            >
              <p>https://javascript.info/first-steps</p>
            </Link>
            <Link
              target="_blank"
              href="https://javascript.info/code-quality"
              className="underline"
            >
              <p> https://javascript.info/code-quality</p>
            </Link>
          </div>
          <p>
            Today, JavaScript can execute not only in the browser, but also on
            the server, or actually on any device that has a special program
            called the JavaScript engine. The browser has an embedded engine
            sometimes called a “JavaScript virtual machine”.
          </p>
        </div>
      </div>
    </div>
  );
}
