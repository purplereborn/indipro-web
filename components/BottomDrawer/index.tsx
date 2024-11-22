import React, { ReactNode } from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { IoIosArrowDown } from "react-icons/io";

interface IBottomDrawer {
  buttonTitle: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export default function BottomDrawer({
  buttonTitle,
  title,
  subtitle,
  children,
}: IBottomDrawer) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="flex items-center space-x-1 text-black hover:border-gray-500 border-gray-300 font-medium border-[1px] rounded-full px-3 py-1.5 ">
          <button className="text-sm">{buttonTitle}</button>
          <IoIosArrowDown />
        </div>
      </DrawerTrigger>
      <DrawerContent className="px-4 lg:px-12">
        <DrawerHeader className="text-black px-0">
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription className="text-base">
            {subtitle}
          </DrawerDescription>
        </DrawerHeader>
        <div className="space-y-3 text-black">{children}</div>
        <DrawerFooter>
          <DrawerClose asChild></DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
