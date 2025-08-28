'use client';

import DashboardLayout from "@/components/organisms/dashboard/DashboardLayout";

export default function DashboardPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
