import ConfirmationCard from "@/components/confirmation-card"

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <h1 className="text-3xl font-bold mb-10 text-center">Vista de pruebas</h1>
      <ConfirmationCard />
    </div>
  )
}
