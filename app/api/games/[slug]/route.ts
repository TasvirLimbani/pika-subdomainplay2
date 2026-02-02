// const GAMES_API = "https://raw.githubusercontent.com/TasvirLimbani/Atme/refs/heads/main/game.json"
// const DETAILS_BASE = "https://raw.githubusercontent.com/TasvirLimbani/Atme/refs/heads/main/games"

// export async function GET(request: Request, { params }: { params: { slug: string } }) {
//   try {
//     const slug = (await params).slug

//     // Fetch all games to find the one matching the slug
//     const gamesRes = await fetch(GAMES_API)
//     if (!gamesRes.ok) {
//       return Response.json({ error: "Failed to fetch games" }, { status: 500 })
//     }

//     const gamesData = await gamesRes.json()
//     const game = gamesData.games?.find((g: any) => g.slug === slug)

//     if (!game) {
//       return Response.json({ error: "Game not found" }, { status: 404 })
//     }

//     let description = `Experience ${game.name} - one of our most popular games! With ${(game.totalPlayed / 1000000).toFixed(1)}M plays and a ${game.manualRating}/5 rating, this game offers exciting gameplay and endless fun.`
//     let instructions = "Click Play Game to launch. Use mouse or keyboard controls to play. Have fun!"
//     let gameEmbedUrl = ""

//     try {
//       const detailsUrl = `${DETAILS_BASE}/${slug}.json`
//       console.log("[v0] Fetching game details from:", detailsUrl)

//       const detailsRes = await fetch(detailsUrl)
//       if (detailsRes.ok) {
//         const details = await detailsRes.json()

//         console.log("[v0] Raw details object keys:", Object.keys(details))
//         console.log("[v0] Full details:", JSON.stringify(details).substring(0, 500))

//         if (details.game.game.description) description = details.game.game.description
//         if (details.game.game.instructions) instructions = details.game.game.instructions

//         if (details.game.game.script) {
//           gameEmbedUrl = String(details.game.game.script).trim().replace(/\r/g, "").replace(/\n/g, "")
//           console.log("[v0] Found script property:", {
//             original: details.game.game.script,
//             processed: gameEmbedUrl,
//           })
//         } else if (details.url) {
//           gameEmbedUrl = String(details.url).trim().replace(/\r/g, "").replace(/\n/g, "")
//           console.log("[v0] Using url property as fallback:", gameEmbedUrl)
//         } else if (details.gameUrl) {
//           gameEmbedUrl = String(details.gameUrl).trim().replace(/\r/g, "").replace(/\n/g, "")
//           console.log("[v0] Using gameUrl property as fallback:", gameEmbedUrl)
//         }

//         console.log("[v0] Script URL after processing:", {
//           hasUrl: !!gameEmbedUrl,
//           length: gameEmbedUrl.length,
//           isValid: gameEmbedUrl.startsWith("http"),
//         })
//       } else {
//         console.warn("[v0] Failed to fetch details:", {
//           slug,
//           status: detailsRes.status,
//           statusText: detailsRes.statusText,
//         })
//       }
//     } catch (detailsError) {
//       console.error("[v0] Error fetching details:", detailsError)
//     }

//     const enrichedGame: any = {
//       ...game,
//       description,
//       instructions,
//       script: gameEmbedUrl,
//       url: gameEmbedUrl,
//       category: getCategoryFromName(game.name),
//       releaseDate: new Date(game.addDate).toLocaleDateString(),
//       metaTitle: game.metaTitle,
//       metaDesc: game.metaDesc,
//       metaKeyword: game.metaKeyword,
//     }

//     console.log("[v0] Final game response:", {
//       slug,
//       name: enrichedGame.name,
//       hasScript: !!enrichedGame.script,
//       scriptLength: enrichedGame.script?.length || 0,
//     })

//     return Response.json(enrichedGame)
//   } catch (error) {
//     console.error("[v0] Game details API error:", error)
//     return Response.json({ error: "Failed to fetch game details" }, { status: 500 })
//   }
// }

// function getCategoryFromName(name: string): string {
//   const nameLower = name.toLowerCase()
//   if (
//     nameLower.includes("cricket") ||
//     nameLower.includes("soccer") ||
//     nameLower.includes("football") ||
//     nameLower.includes("baseball") ||
//     nameLower.includes("basketball")
//   ) {
//     return "sports"
//   }
//   if (nameLower.includes("pool") || nameLower.includes("billiard") || nameLower.includes("snooker")) {
//     return "sports"
//   }
//   if (nameLower.includes("puzzle") || nameLower.includes("block") || nameLower.includes("match")) {
//     return "puzzle"
//   }
//   return "all"
// }


const GAMES_API = "https://raw.githubusercontent.com/TasvirLimbani/Atme/refs/heads/main/game.json"
const DETAILS_BASE = "https://raw.githubusercontent.com/TasvirLimbani/Atme/refs/heads/main/games"

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  try {
    const slug = (await params).slug

    // Fetch all games to find the one matching the slug
    const gamesRes = await fetch(GAMES_API)
    if (!gamesRes.ok) {
      return Response.json({ error: "Failed to fetch games" }, { status: 500 })
    }

    const gamesData = await gamesRes.json()
    const game = gamesData.games?.find((g: any) => g.slug === slug)

    if (!game) {
      return Response.json({ error: "Game not found" }, { status: 404 })
    }

    // Default values
    let description = `Experience ${game.name} - one of our most popular games! With ${(game.totalPlayed / 1000000).toFixed(1)}M plays and a ${game.manualRating}/5 rating, this game offers exciting gameplay and endless fun.`
    let instructions = "Click Play Game to launch. Use mouse or keyboard controls to play. Have fun!"
    let gameEmbedUrl = ""
    let metaTitle = game.metaTitle || `${game.name} - Play Free Online Game`
    let metaDesc = game.metaDesc || `Play ${game.name} online! Enjoy exciting gameplay and free entertainment.`
    let metaKeyword = game.metaKeyword || `${game.name}, free games, online games`

    try {
      const detailsUrl = `${DETAILS_BASE}/${slug}.json`
      console.log("[v0] Fetching game details from:", detailsUrl)

      const detailsRes = await fetch(detailsUrl)
      if (detailsRes.ok) {
        const details = await detailsRes.json()

        const gameDetails = details.game?.game || {}

        // Update fields from details JSON if available
        if (gameDetails.description) description = gameDetails.description
        if (gameDetails.instructions || gameDetails.instruction) {
          instructions = gameDetails.instructions || gameDetails.instruction
        }

        // Handle meta fields from details JSON
        if (gameDetails.metaTitle) metaTitle = gameDetails.metaTitle
        if (gameDetails.metaDesc) metaDesc = gameDetails.metaDesc
        if (gameDetails.metaKeyword) metaKeyword = gameDetails.metaKeyword

        // Find playable script URL
        if (gameDetails.script) {
          gameEmbedUrl = String(gameDetails.script).trim().replace(/\r/g, "").replace(/\n/g, "")
        } else if (details.url) {
          gameEmbedUrl = String(details.url).trim().replace(/\r/g, "").replace(/\n/g, "")
        } else if (details.gameUrl) {
          gameEmbedUrl = String(details.gameUrl).trim().replace(/\r/g, "").replace(/\n/g, "")
        }

      } else {
        console.warn("[v0] Failed to fetch details:", {
          slug,
          status: detailsRes.status,
          statusText: detailsRes.statusText,
        })
      }
    } catch (detailsError) {
      console.error("[v0] Error fetching details:", detailsError)
    }

    const enrichedGame: any = {
      ...game,
      description,
      instructions,
      script: gameEmbedUrl,
      url: gameEmbedUrl,
      category: getCategoryFromName(game.name),
      releaseDate: new Date(game.addDate).toLocaleDateString(),
      metaTitle,
      metaDesc,
      metaKeyword,
    }

    console.log("[v0] Final game response:", {
      slug,
      name: enrichedGame.name,
      hasScript: !!enrichedGame.script,
      scriptLength: enrichedGame.script?.length || 0,
      metaTitle,
    })

    return Response.json(enrichedGame)
  } catch (error) {
    console.error("[v0] Game details API error:", error)
    return Response.json({ error: "Failed to fetch game details" }, { status: 500 })
  }
}

function getCategoryFromName(name: string): string {
  const nameLower = name.toLowerCase()
  if (
    nameLower.includes("cricket") ||
    nameLower.includes("soccer") ||
    nameLower.includes("football") ||
    nameLower.includes("baseball") ||
    nameLower.includes("basketball")
  ) {
    return "sports"
  }
  if (nameLower.includes("pool") || nameLower.includes("billiard") || nameLower.includes("snooker")) {
    return "sports"
  }
  if (nameLower.includes("puzzle") || nameLower.includes("block") || nameLower.includes("match")) {
    return "puzzle"
  }
  return "all"
}
