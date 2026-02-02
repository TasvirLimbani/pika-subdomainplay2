import useSWR from "swr"
import type { UserProfile } from "@/lib/types"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export function useUserData(uid: string | null) {
  const { data, error, isLoading } = useSWR(uid ? `/api/user/${uid}` : null, fetcher, { revalidateOnFocus: false })

  return {
    userData: data as UserProfile | undefined,
    isLoading,
    isError: error,
  }
}
