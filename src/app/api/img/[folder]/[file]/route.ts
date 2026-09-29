import { NextRequest, NextResponse } from "next/server";
import http from "http";

export const dynamic = "force-dynamic";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ folder: string; file: string }> }
) {
  const { folder, file } = await params;

  // Validate allowed folders
  if (folder !== "books_img" && folder !== "author_img") {
    return new NextResponse("Invalid folder", { status: 400 });
  }

  // Sanitize filename to prevent directory traversal
  const sanitizedFile = file.replace(/[^a-zA-Z0-9_\.-]/g, "");
  const remotePath = `/admin/img/${folder}/${sanitizedFile}`;

  return new Promise<NextResponse>((resolve) => {
    const req = http.request(
      {
        host: "104.238.119.47",
        port: 80,
        path: remotePath,
        method: "GET",
        headers: {
          Host: "sarapublication.com",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
        },
        timeout: 8000,
      },
      (res) => {
        if (res.statusCode !== 200) {
          return resolve(new NextResponse("Image not found on origin", { status: res.statusCode || 404 }));
        }

        const contentType = res.headers["content-type"] || (sanitizedFile.endsWith(".png") ? "image/png" : "image/jpeg");
        const chunks: Buffer[] = [];

        res.on("data", (chunk: Buffer) => {
          chunks.push(chunk);
        });

        res.on("end", () => {
          const body = Buffer.concat(chunks);
          resolve(
            new NextResponse(body, {
              status: 200,
              headers: {
                "Content-Type": contentType,
                "Cache-Control": "public, max-age=31536000, immutable",
              },
            })
          );
        });
      }
    );

    req.on("error", (err) => {
      console.error("Proxy error:", err.message);
      resolve(new NextResponse("Origin server unreachable", { status: 502 }));
    });

    req.on("timeout", () => {
      req.destroy();
      resolve(new NextResponse("Origin server timeout", { status: 504 }));
    });

    req.end();
  });
}
