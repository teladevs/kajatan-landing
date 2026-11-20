export default defineEventHandler((event) => {
  const token = getCookie(event, "cert_cometsea_token");
  return { valid: !!token };
});
