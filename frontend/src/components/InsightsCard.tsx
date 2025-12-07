export default function InsightsCard({ text }: { text: string }) {
  return (
    <div className="p-4 bg-gray-700 rounded-xl w-80">
      <h2 className="text-lg font-bold mb-2">Insights da IA</h2>
      <p className="text-gray-200">{text}</p>
    </div>
  );
}
