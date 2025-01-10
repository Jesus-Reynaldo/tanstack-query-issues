import { useQuery } from "@tanstack/react-query"
import { getLabels } from "../action/getLabels"

export const useLabels = () => {
  const labelQuery = useQuery({
    queryKey: ["labels"],
    queryFn: getLabels,
    staleTime: 5000,
  })
  return labelQuery
}