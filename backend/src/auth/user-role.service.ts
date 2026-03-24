import { Injectable } from "@nestjs/common";
import axios from "axios";
import * as jwt from "jsonwebtoken";

/**
 * Fetches WhatsApp user role from the auth service.
 * The auth API validates Bearer tokens with JWT_PUBLIC_KEY on its side.
 * This service sends either AUTH_ACCESS_TOKEN / ACCESS_TOKEN, or a short-lived
 * JWT signed with AUTH_JWT_PRIVATE_KEY (the key pair matching JWT_PUBLIC_KEY).
 */
@Injectable()
export class UserRoleService {
  private normalizePem(raw: string): string {
    return String(raw || "")
      .replace(/\\n/g, "\n")
      .trim();
  }

  private toE164(whatsappFrom: string): string {
    const trimmed = String(whatsappFrom || "").trim();
    if (!trimmed) return trimmed;
    const digits = trimmed.startsWith("+")
      ? trimmed.slice(1).replace(/\D/g, "")
      : trimmed.replace(/\D/g, "");
    return `+${digits}`;
  }

  private getBearerToken(): string {
    const privateKeyRaw = process.env.AUTH_JWT_PRIVATE_KEY;
    if (privateKeyRaw) {
      const privateKey = this.normalizePem(privateKeyRaw);
      const payload: jwt.JwtPayload = {
        sub: process.env.AUTH_JWT_SUB || "whatsapp-backend",
      };
      if (process.env.AUTH_JWT_AUDIENCE) {
        payload.aud = process.env.AUTH_JWT_AUDIENCE;
      }
      if (process.env.AUTH_JWT_ISSUER) {
        payload.iss = process.env.AUTH_JWT_ISSUER;
      }
      const expiresIn = (process.env.AUTH_JWT_EXPIRES_IN ?? "5m") as jwt.SignOptions["expiresIn"];
      const options: jwt.SignOptions = {
        algorithm: "RS256",
        expiresIn,
      };
      if (process.env.AUTH_JWT_KID) {
        options.keyid = process.env.AUTH_JWT_KID;
      }
      return jwt.sign(payload, privateKey, options);
    }

    const token =
      process.env.AUTH_ACCESS_TOKEN ||
      process.env.ACCESS_TOKEN ||
      "";
    if (!token) {
      console.warn(
        "UserRoleService: set AUTH_ACCESS_TOKEN, ACCESS_TOKEN, or AUTH_JWT_PRIVATE_KEY (pair with JWT_PUBLIC_KEY on auth service)."
      );
    }
    return token;
  }

  private parseRole(data: unknown): string | null {
    if (data == null) return null;
    if (typeof data === "string") {
      const s = data.trim();
      return s || null;
    }
    if (typeof data !== "object") return null;
    const o = data as Record<string, unknown>;
    const candidates = [
      o.role,
      o.userRole,
      (o.data as Record<string, unknown> | undefined)?.role,
      (o.user as Record<string, unknown> | undefined)?.role,
    ];
    for (const c of candidates) {
      if (typeof c === "string" && c.trim()) return c.trim();
    }
    return null;
  }

  async fetchRoleByPhone(whatsappFrom: string): Promise<string | null> {
    const base =
      process.env.AUTH_API_BASE_URL ||
      process.env.AUTH_SERVICE_URL ||
      "http://localhost:3000";
    const token = this.getBearerToken();
    if (!token) return null;

    const phoneNumber = this.toE164(whatsappFrom);
    if (!phoneNumber || phoneNumber === "+") return null;

    try {
      const url = `${base.replace(/\/$/, "")}/auth/user-roles/by-phone`;
      const { data } = await axios.get(url, {
        params: { phoneNumber },
        headers: { Authorization: `Bearer ${token}` },
        timeout: 15_000,
        validateStatus: (s) => s >= 200 && s < 300,
      });
      return this.parseRole(data);
    } catch (err: unknown) {
      const ax = err as { response?: { status?: number; data?: unknown }; message?: string };
      console.error(
        "UserRoleService: role fetch failed:",
        ax.response?.status,
        ax.response?.data ?? ax.message
      );
      return null;
    }
  }
}
