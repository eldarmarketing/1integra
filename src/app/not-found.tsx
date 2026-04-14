import Link from "next/link";
import { W } from "@/components/constants";

export default function NotFound() {
  return (
    <div className="py-24 md:py-36 text-center">
      <div className={W}>
        <div className="font-heading font-bold text-[80px] md:text-[120px] text-surface-container-high leading-none select-none mb-4">
          404
        </div>
        <h1 className="font-heading md3-headline-large text-on-surface mb-3">
          Страница не&nbsp;найдена
        </h1>
        <p className="md3-body-large text-on-surface-variant mb-10 max-w-md mx-auto">
          Возможно, она была перемещена или удалена. Попробуйте начать с&nbsp;главной.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link
            href="/"
            className="px-7 py-3 rounded-full bg-primary text-on-primary md3-label-large
              hover:bg-primary/90"
          >
            На главную
          </Link>
          <Link
            href="/uslugi"
            className="px-7 py-3 rounded-full border border-outline text-primary md3-label-large
              hover:bg-primary/5"
          >
            Услуги
          </Link>
        </div>
      </div>
    </div>
  );
}
