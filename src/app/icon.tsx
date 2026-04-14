import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 256, height: 256 };
export const contentType = "image/png";

export default async function Icon() {
  const fontBold = await readFile(
    join(process.cwd(), "public/fonts/gteestiprodisplay_bold.otf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1b5fa8 0%, #0d3a6e 100%)",
          borderRadius: 48,
          fontFamily: "GT Eesti",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 2,
          }}
        >
          <span
            style={{
              fontSize: 140,
              fontWeight: 700,
              color: "white",
              lineHeight: 1,
              letterSpacing: "-4px",
            }}
          >
            1
          </span>
          <span
            style={{
              fontSize: 100,
              fontWeight: 700,
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1,
              letterSpacing: "-2px",
            }}
          >
            И
          </span>
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
      ],
    }
  );
}
