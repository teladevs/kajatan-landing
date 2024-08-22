export default defineEventHandler(({ req, res, context }) => {
  const hostname = req.headers.host || "landing.kajatan.telanusa.id"

  const mainDomain = ["localhost:3000", "landing.kajatan.telanusa.id"]

  console.log({ hostname })
  if (!mainDomain.includes(hostname)) {
    const currentHost =
      process.env.NODE_ENV === "production"
        ? hostname.replace(`.landing.kajatan.telanusa.id`, "")
        : hostname.replace(`.localhost:3000`, "")

    context.subdomain = currentHost
  }
})
