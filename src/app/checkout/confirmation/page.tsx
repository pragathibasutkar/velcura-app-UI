import { ConfirmationClient } from "@/components/confirmation-client";

export default async function ConfirmationPage({ searchParams }: { searchParams: Promise<{ order?: string }> }) {
  const params = await searchParams;
  return <ConfirmationClient orderId={params.order ?? "VLC-9204"} />;
}
