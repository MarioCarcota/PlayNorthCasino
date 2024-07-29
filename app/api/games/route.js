import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search") || "";
  const pageNumber = searchParams.get("pageNumber") || "1";
  const pageSize = searchParams.get("pageSize") || "20";

  try {
    const response = await fetch(
      `https://casino.api.kansino.nl/v1/kansino/en/games/tiles?search=${search}&pageNumber=${pageNumber}&pageSize=${pageSize}`
    );
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch games" },
      { status: 500 }
    );
  }
}
