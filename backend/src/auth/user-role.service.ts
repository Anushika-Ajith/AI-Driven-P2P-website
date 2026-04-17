// import { Injectable } from "@nestjs/common";

// /**
//  * Resolves app role for a WhatsApp sender. Extend with DB when a User model exists.
//  * Optional: WHATSAPP_PHONE_ROLES JSON map, e.g. {"919876543210":"INDIVIDUAL_WHATSAPP_USER"}
//  */
// @Injectable()
// export class UserRoleService {
//   private phoneRoleMap: Record<string, string> = {};

//   constructor() {
//     const raw = process.env.WHATSAPP_PHONE_ROLES;
//     if (raw) {
//       try {
//         this.phoneRoleMap = JSON.parse(raw) as Record<string, string>;
//       } catch {
//         console.error("WHATSAPP_PHONE_ROLES is not valid JSON; ignoring.");
//       }
//     }
//   }

//   async fetchRoleByPhone(phone: string): Promise<string | null> {
//     const key = String(phone || "").replace(/\D/g, "");
//     if (!key) return null;
//     for (const [stored, role] of Object.entries(this.phoneRoleMap)) {
//       const s = String(stored).replace(/\D/g, "");
//       if (s === key || key.endsWith(s) || s.endsWith(key)) {
//         return role;
//       }
//     }
//     return null;
//   }
// }


import { Injectable } from "@nestjs/common";

/**
 * Resolves app role for a WhatsApp sender. Extend with DB when a User model exists.
 * Optional: WHATSAPP_PHONE_ROLES JSON map, e.g. {"919876543210":"INDIVIDUAL_WHATSAPP_USER"}
 */
@Injectable()
export class UserRoleService {
  private phoneRoleMap: Record<string, string> = {};
  private authApiBaseUrl: string = "";

  constructor() {
    this.authApiBaseUrl = String(process.env.AUTH_API_BASE_URL || "").trim();
    const raw = process.env.WHATSAPP_PHONE_ROLES;
    if (raw) {
      try {
        this.phoneRoleMap = JSON.parse(raw) as Record<string, string>;
      } catch {
        console.error("WHATSAPP_PHONE_ROLES is not valid JSON; ignoring.");
      }
    }
  }

  getRoleLookupUrl(phone: string): string | null {
    const key = String(phone || "").replace(/\D/g, "");
    if (!key || !this.authApiBaseUrl) return null;
    const base = this.authApiBaseUrl.replace(/\/+$/, "");
    return `${base}/auth/user-roles/by-phone/internal?phoneNumber=${encodeURIComponent(
      key
    )}`;
  }

  private resolveRoleFromMap(phone: string): string | null {
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

  async fetchRoleByPhone(phone: string): Promise<string | null> {
    const url = this.getRoleLookupUrl(phone);
    if (url) {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          console.error(
            `Role lookup API failed with status ${response.status} for ${url}`
          );
        } else {
          const payload = await response.json();
          const role =
            payload?.role ??
            payload?.data?.role ??
            payload?.userRole ??
            payload?.data?.userRole ??
            payload?.roleNames?.[0] ??
            payload?.data?.roleNames?.[0] ??
            payload?.roleAssignments?.[0]?.roleName ??
            payload?.data?.roleAssignments?.[0]?.roleName ??
            null;
          if (role != null) {
            return String(role);
          }
        }
      } catch (error: any) {
        console.error("Role lookup API error:", error?.message || error);
      }
    }
    return this.resolveRoleFromMap(phone);
  }
}
