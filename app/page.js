"use client";
import RenderLobbyGames from "@/components/renders/renderLobby";

export default function Home() {
  return (
    <main className="flex max-w-screen-2xl mx-auto min-h-screen flex-col items-center justify-between p-3 lg:p-6">
      <RenderLobbyGames />
    </main>
  );
}
