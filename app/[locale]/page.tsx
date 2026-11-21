/**
 * @file page.tsx
 * @description Página principal de la aplicación.
 */

"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

// Import of components custom
import { Icon, Typography } from "@/components/atomic-design/atoms";
import { ButtonIcon } from "@/components/atomic-design/molecules";

// Import of utilities
import { SOCIAL_MEDIA } from "@/app/utils";
import { HOME_DATA } from "@/components/pages";
import { APP_LINKS, ICONS, MULTIMEDIA } from "@/config";
import { useRouter } from "@/app/[locale]/i18n-navigation";

export default function Home() {
  // Hooks
  const router = useRouter();
  const t = useTranslations("home");
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="relative h-[calc(100vh-96px)]"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 grid grid-cols-2 gap-5 justify-center">
        {/* Social Media */}
        <div>
          <div className="relative z-20 w-fit flex flex-col items-center gap-5">
            <div className="w-px h-24 bg-foreground" />
            {SOCIAL_MEDIA.map((socialMedia) => (
              <Link
                key={socialMedia.name}
                href={socialMedia.url}
                className="hover:scale-110 transition-all duration-300"
                target="_blank"
              >
                <Icon
                  icon={socialMedia.icon}
                  className="size-6 text-foreground cursor-pointer"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Email */}
        <div className="relative z-20 flex items-end justify-end">
          <div className="flex flex-col items-center h-full justify-end">
            <Typography className="font-bold text-xs! tracking-widest [writing-mode:vertical-rl] [text-orientation:mixed] mb-4">
              <Link
                href={APP_LINKS.GENERALS.SOCIAL_MEDIA.EMAIL.url}
                className="hover:underline"
              >
                {APP_LINKS.GENERALS.SOCIAL_MEDIA.EMAIL.url.replace(
                  "mailto:",
                  ""
                )}
              </Link>
            </Typography>
            <div className="w-px h-24 bg-foreground" />
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="relative z-10 h-full w-full max-w-11/12 md:max-w-4/5 mx-auto grid grid-cols-1 xl:grid-cols-2 content-center gap-5">
        {/* Column 1 - Image */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="relative min-h-40 lg:min-h-80 flex items-center justify-center"
        >
          <Image
            src={MULTIMEDIA.BACKGROUNDS.PHOTO_PROFILE}
            alt="Photo Profile"
            quality={100}
            fill
            className="object-contain drop-shadow-lg"
          />
        </motion.div>

        {/* Column 2 - Content */}
        <div className="space-y-5">
          <div>
            <Typography
              variant="lead"
              className="text-sm! md:text-base! uppercase tracking-widest"
            >
              {t("seniority")}
            </Typography>
            <Typography
              variant="h1"
              color="gradient"
              className="text-4xl! md:text-6xl! lg:text-7xl! 2xl:text-8xl!"
            >
              {t("title")}
            </Typography>
            <Typography>{t("description")}</Typography>
          </div>
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-5">
            {HOME_DATA?.buttons?.map((button) => {
              return (
                <ButtonIcon
                  key={button.label}
                  icon={ICONS.ARROW_RIGHT_01}
                  text={t(button.label)}
                  onClick={() => router.push(button.url)}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Copyright */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center">
        <Typography className="text-[9px]! text-center max-w-56 md:max-w-full text-sm/3">
          {t("copyright", { year: new Date().getFullYear() })}
        </Typography>
      </div>
    </motion.div>
  );
}
