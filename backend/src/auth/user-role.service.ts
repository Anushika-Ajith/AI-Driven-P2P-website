import { Injectable } from "@nestjs/common";

/**
 * Resolves app role for a WhatsApp sender. Extend with DB when a User model exists.
 * Optional: WHATSAPP_PHONE_ROLES JSON map, e.g. {"919876543210":"INDIVIDUAL_WHATSAPP_USER"}
 */
@Injectable()
export class UserRoleService {
  private phoneRoleMap: Record<string, string> = {};

  constructor() {
    const raw = process.env.WHATSAPP_PHONE_ROLES;
    if (raw) {
      try {
        this.phoneRoleMap = JSON.parse(raw) as Record<string, string>;
      } catch {
        console.error("WHATSAPP_PHONE_ROLES is not valid JSON; ignoring.");
      }
    }
  }

  async fetchRoleByPhone(phone: string): Promise<string | null> {
    const key = String(phone || "").replace(/\D/g, "");
    if (!key) return null;
    for (const [stored, role] of Object.entries(this.phoneRoleMap)) {
      const s = String(stored).replace(/\D/g, "");
      if (s === key || key.endsWith(s) || s.endsWith(key)) {
        return role;
      }
    }
    return null;
  }
}
