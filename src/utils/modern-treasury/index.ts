import ModernTreasury from "modern-treasury";

export const modernTreasury = new ModernTreasury({
  apiKey: process.env.MODERN_TREASURY_API_KEY,
  organizationId: process.env.MODERN_TREASURY_ORG_ID,
});
