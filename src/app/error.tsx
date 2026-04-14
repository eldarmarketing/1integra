"use client";
import Link from "next/link";
import { W } from "@/components/constants";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="py-24 md:py-36 text-center">
      <div className={W}>
        <div className="font-heading font-bold text-[60px] md:text-[80px] text-surface-container-high leading-none select-none mb-4">
          Ошибка
        </div>
        <h1 className="font-heading md3-headline-medium text-on-surface mb-3">
          Что-то пошло не&nbsp;так
        </h1>
        <p className="md3-body-large text-on-surface-variant mb-10 max-w-md mx-auto">
          Попробуйте обновить страницу. Если ошибка повторяется — свяжитесь с&nbsp;нами.
        </p>
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={reset}
            className="px-7 py-3 rounded-full bg-primary text-on-primary md3-label-large
              hover:bg-primary/90"
          >
            Попробовать снова
          </button>
          <Link
            href="/"
            className="px-7 py-3 rounded-full border border-outline text-primary md3-label-large
              hover:bg-primary/5"
          >
            На главную
          </Link>
        </div>
      </div>
    </div>
  );
}
