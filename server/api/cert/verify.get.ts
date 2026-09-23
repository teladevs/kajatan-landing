export default defineEventHandler((event) => {
  const token = getQuery(event).token;

  if (!token || typeof token !== "string") {
    throw createError({ statusCode: 400, statusMessage: "Missing token" });
  }

  setCookie(event, "cert_cometsea_token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 15,
  });

  return { status: true };
});
