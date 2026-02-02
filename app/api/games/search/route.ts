const GAMES_API = "https://raw.githubusercontent.com/TasvirLimbani/Atme/refs/heads/main/game.json"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("q")?.toLowerCase() || ""
    const limit = Number.parseInt(searchParams.get("limit") || "10")

    const gamesRes = await fetch(GAMES_API)
    const gamesData = await gamesRes.json()
    let games = gamesData.games || []

    if (query) {
      games = games.filter((game: any) => game.name?.toLowerCase().includes(query))
    }

    return Response.json({
      results: games.slice(0, limit),
      total: games.length,
    })
  } catch (error) {
    return Response.json({ error: "Search failed" }, { status: 500 })
  }
}
