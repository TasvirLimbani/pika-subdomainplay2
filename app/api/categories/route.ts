const CATEGORIES_API = "https://raw.githubusercontent.com/TasvirLimbani/Atme/refs/heads/main/category.json"

export async function GET() {
  try {
    const res = await fetch(CATEGORIES_API)
    const data = await res.json()
    return Response.json(data.result || [])
  } catch (error) {
    return Response.json({ error: "Failed to fetch categories" }, { status: 500 })
  }
}
