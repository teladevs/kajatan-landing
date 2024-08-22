export default defineEventHandler(({ req, res, context }) => {
  const hostname = req.headers.host || "telanusa.id"

  const mainDomain = ["localhost:3000", "telanusa.id"]

  if (!mainDomain.includes(hostname)) {
    const currentHost =
        hostname.replace(`.telanusa.id`, "")

    console.log({ currentHost })
    context.subdomain = currentHost
  }
})
