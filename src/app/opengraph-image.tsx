import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "1ИНТЕГРА — Внедрение и интеграция 1С под ключ";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const fontBold = await readFile(
    join(process.cwd(), "public/fonts/gteestiprodisplay_bold.otf")
  );
  const fontRegular = await readFile(
    join(process.cwd(), "public/fonts/gteestiprodisplay_regular.otf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 80px",
          background: "linear-gradient(135deg, #00387e 0%, #001d42 60%, #000f22 100%)",
          fontFamily: "GT Eesti",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(59, 130, 246, 0.15)",
            filter: "blur(60px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -60,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(99, 102, 241, 0.12)",
            filter: "blur(50px)",
          }}
        />

        {/* Top: badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 16px",
              borderRadius: 100,
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.8)",
              fontSize: 18,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#34d399",
              }}
            />
            Студия внедрения 1С
          </div>
        </div>

        {/* Middle: heading */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "white",
              lineHeight: 1.1,
              letterSpacing: "-1px",
            }}
          >
            Внедряем 1С
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "white",
              lineHeight: 1.1,
              letterSpacing: "-1px",
            }}
          >
            целиком
          </div>
          <div
            style={{
              fontSize: 24,
              color: "rgba(255,255,255,0.5)",
              marginTop: 8,
              lineHeight: 1.4,
            }}
          >
            32 направления · 263 модуля · Одна команда вместо десяти подрядчиков
          </div>
        </div>

        {/* Bottom: stats + brand */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div style={{ display: "flex", gap: 32 }}>
            {[
              ["Постоплата", "0₽ авансов"],
              ["×3 быстрее", "ERP за 5 мес."],
              ["Гарантия", "сроков и цены"],
            ].map(([title, sub]) => (
              <div
                key={title}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <div style={{ fontSize: 18, fontWeight: 700, color: "white" }}>
                  {title}
                </div>
                <div style={{ fontSize: 15, color: "rgba(255,255,255,0.4)" }}>
                  {sub}
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: "white",
              letterSpacing: "-0.5px",
            }}
          >
            1integra.ru
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "GT Eesti",
          data: fontBold,
          weight: 700,
          style: "normal",
        },
        {
          name: "GT Eesti",
          data: fontRegular,
          weight: 400,
          style: "normal",
        },
      ],
    }
  );
}
