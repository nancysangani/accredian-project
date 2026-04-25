import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

interface Lead {
  id: string;
  name: string;
  email: string;
  company: string;
  timestamp: string;
  userAgent: string;
  ipAddress: string;
}

interface LeadsData {
  leads: Lead[];
  count: number;
  lastUpdated: string;
}

const LEADS_FILE = path.join(process.cwd(), "data", "leads.json");

// Ensure data directory exists
async function ensureDataDir() {
  try {
    await fs.mkdir(path.dirname(LEADS_FILE), { recursive: true });
  } catch (error) {
    console.error("Error creating data directory:", error);
  }
}

// Read existing leads
async function readLeads(): Promise<LeadsData> {
  try {
    await ensureDataDir();
    const data = await fs.readFile(LEADS_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    // File doesn't exist yet, return empty structure
    return {
      leads: [],
      count: 0,
      lastUpdated: new Date().toISOString(),
    };
  }
}

// Write leads to file
async function writeLeads(data: LeadsData): Promise<void> {
  try {
    await ensureDataDir();
    await fs.writeFile(LEADS_FILE, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error writing leads:", error);
    throw new Error("Failed to save lead data");
  }
}

// Generate unique ID
function generateId(): string {
  return `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Validate email
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company } = body;

    // Validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { message: "Name is required" },
        { status: 400 },
      );
    }

    if (!email || typeof email !== "string" || !isValidEmail(email)) {
      return NextResponse.json(
        { message: "Valid email is required" },
        { status: 400 },
      );
    }

    // Read existing leads
    const leadsData = await readLeads();

    // Check for duplicate email (within last 24 hours)
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const isDuplicate = leadsData.leads.some(
      (lead) => lead.email === email && new Date(lead.timestamp) > oneDayAgo,
    );

    if (isDuplicate) {
      return NextResponse.json(
        {
          message:
            "This email was recently submitted. Please check your inbox.",
        },
        { status: 429 },
      );
    }

    // Get client IP
    const ipAddress =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // Create new lead
    const newLead: Lead = {
      id: generateId(),
      name: name.trim(),
      email: email.toLowerCase().trim(),
      company: company?.trim() || "",
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get("user-agent") || "unknown",
      ipAddress,
    };

    // Add lead to data
    leadsData.leads.push(newLead);
    leadsData.count = leadsData.leads.length;
    leadsData.lastUpdated = new Date().toISOString();

    // Save to file
    await writeLeads(leadsData);

    // Return success response
    return NextResponse.json(
      {
        message: "Lead captured successfully",
        id: newLead.id,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error processing lead:", error);
    return NextResponse.json(
      { message: "Failed to process request" },
      { status: 500 },
    );
  }
}

// GET endpoint to retrieve leads (optional - for admin use)
export async function GET(request: NextRequest) {
  // Add a simple auth check if needed
  const authHeader = request.headers.get("authorization");
  const expectedToken = process.env.LEADS_API_KEY || "demo-key";

  if (authHeader !== `Bearer ${expectedToken}`) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const leadsData = await readLeads();
    return NextResponse.json(leadsData);
  } catch (error) {
    console.error("Error reading leads:", error);
    return NextResponse.json(
      { message: "Failed to retrieve leads" },
      { status: 500 },
    );
  }
}
