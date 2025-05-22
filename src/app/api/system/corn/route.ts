// src/app/api/system/cron/route.ts
import { NextResponse } from 'next/server';
import { initCronJobs } from '@/lib/cornScheduler';

let cronJobsInitialized = false;
let cronJobs: any = null;

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const secretKey = url.searchParams.get('key');
    
    if (secretKey !== process.env.CRON_SECRET_KEY) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    if (!cronJobsInitialized) {
      cronJobs = initCronJobs();
      cronJobsInitialized = true;
      return NextResponse.json({ message: "Cron jobs initialized successfully" });
    } else {
      return NextResponse.json({ message: "Cron jobs already running" });
    }
  } catch (error) {
    return NextResponse.json({ 
      error: "Failed to initialize cron jobs", 
      message: error instanceof Error ? error.message : "Unknown error" 
    }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get('authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    const token = authHeader.split(' ')[1];
    
    if (token !== process.env.CRON_WEBHOOK_TOKEN) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }
    
    const { job } = await req.json();
    
    if (job === 'inactiveUsers') {
      const { updateInactiveUsers } = await import('@/lib/inactiveUsers');
      const result = await updateInactiveUsers();
      return NextResponse.json(result);
    } else {
      return NextResponse.json({ error: "Invalid job specified" }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ 
      error: "Failed to execute job", 
      message: error instanceof Error ? error.message : "Unknown error" 
    }, { status: 500 });
  }
}