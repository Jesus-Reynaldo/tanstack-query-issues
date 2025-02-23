import { LoadingSpinner } from "../../shared/componests/LoadingSpinner";
import { useLabels } from "../hooks/useLabels";

export const LabelPicker = () => {
  const labelsQuery = useLabels()
  if (labelsQuery.isLoading) {
    <LoadingSpinner />
  }
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {labelsQuery.data?.map((label) => (
        <span
          className="animate-fadeIn px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer text-white"
          style={{ border: `1px solid #${label.color}` }}
        >
          {label.name}
        </span>
      ))}
    </div>
  );
};
