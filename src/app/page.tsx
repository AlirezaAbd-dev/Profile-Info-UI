import Card from "@/components/Card";
import Input from "@/components/Input";
import MainLayout from "@/layout/MainLayout";
import Image from "next/image";

import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <MainLayout>
      <Card>
        {/* Title */}
        <div className="w-full">
          <h1 className="text-lg text-center md:text-left">
            Basic information
          </h1>
        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mt-3">
          {/* Image Section */}
          <section className="flex flex-col justify-start items-center h-min space-y-4 border col-span-1 border-border p-8 rounded-md md:mt-7">
            <Image
              src="https://avatars.githubusercontent.com/u/98334060?v=4"
              alt="profile avatar"
              width={300}
              height={300}
              className="w-30 rounded-full"
            />
            <p className="font-bold text-link text-center md:text-xs cursor-pointer">
              Replace image
            </p>
          </section>

          {/* Form Section */}
          <section className="grid grid-cols-2 col-span-1 md:col-span-2 xl:grid-rows-4 gap-2 md:gap-1 mt-5 md:mt-0">
            <Input col={1} label="First name" placeholder="Alireza" />
            <Input col={1} label="Last name" placeholder="Abedi" />
            <Input col={2} label="Occupation" placeholder="UI/UX Designer" />
            <Input col={2} label="Company" placeholder="NorseProgrammers" />
            <Input
              col={1}
              label="Location"
              placeholder="Iran"
              icon={<ChevronDownIcon className="w-4 mr-2 cursor-pointer" />}
            />
          </section>
        </div>
        <div className="flex justify-end items-center mt-5 space-x-2">
          <button className="bg-background font-bold text-sm p-2 rounded-md">
            Cancel
          </button>
          <button className="bg-white text-xs font-bold text-background p-3 rounded-md">
            Set changes
          </button>
        </div>
      </Card>
    </MainLayout>
  );
}
