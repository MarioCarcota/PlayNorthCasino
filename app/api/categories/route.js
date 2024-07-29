import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://casino.api.kansino.nl/v1/kansino/en/config"
    );
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}
