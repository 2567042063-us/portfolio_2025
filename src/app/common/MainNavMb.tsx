"use client";

import { Fragment, useState } from "react";
// import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import clsx from "clsx";

import { MAIN_NAV } from "@shared/constant";
import { CloseIcon, DotsVerticalRoundedIcon } from "@shared/icons";

import ThemeSwitch from "./ThemeSwitch";

export default function MainNavMb() {
  const currentRoute = usePathname();
  const [isModalOpen, setModalOpen] = useState(false);

  function closeModal() {
    setModalOpen(false);
  }

  function openModal() {
    setModalOpen(true);
  }

  return (
    <>
      <div className="absolute top-0 right-0 bottom-0 flex items-center lg:hidden">
        <button
          type="button"
          onClick={openModal}
          className="hover:text-primary flex h-8 w-8 items-center justify-center p-5 text-slate-500 dark:text-slate-400 dark:hover:text-slate-300"
        >
          <span className="sr-only">Navigation</span>
          <DotsVerticalRoundedIcon aria-hidden="true" />
        </button>
      </div>

      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80"
              aria-hidden
            />
          </TransitionChild>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel className="dark:highlight-white/5 fixed top-4 right-4 w-full max-w-xs rounded-lg bg-white p-6 text-base font-semibold text-slate-900 shadow-lg dark:bg-slate-800 dark:text-slate-400">
              <button
                type="button"
                onClick={closeModal}
                className="hover:text-primary absolute top-3 right-3 flex h-8 w-8 items-center justify-center text-slate-500 dark:text-slate-400 dark:hover:text-slate-300"
              >
                <span className="sr-only">Close navigation</span>
                <CloseIcon />
              </button>

              {/* <div className="pt-2">
                <SignInHeader />
              </div> */}

              <ul className="mt-3 space-y-6">
                {MAIN_NAV.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      className={clsx(
                        "block text-lg font-light lowercase hover:text-sky-500 dark:hover:text-sky-400",
                        {
                          "text-primary dark:text-primary-dark":
                            currentRoute === item.href,
                        },
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-slate-200 pt-6 dark:border-slate-200/10">
                <ThemeSwitch isMobile />
              </div>
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  );
}
