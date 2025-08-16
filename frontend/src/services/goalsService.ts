import { http } from "../lib/apiClient";
import type { Goal } from "../types/goal";

// Sesuaikan prefix bila perlu (mis. "/v1/goals")
const PREFIX = "/goals";

export async function fetchGoals(): Promise<Goal[]> {
  return http.get<Goal[]>(`${PREFIX}`);
}

export type CreateGoalDTO = Omit<Goal, "id" | "createdAt" | "updatedAt">;
export async function createGoal(payload: CreateGoalDTO): Promise<Goal> {
  return http.post<Goal>(`${PREFIX}`, payload);
}

export type UpdateGoalDTO = Partial<CreateGoalDTO>;
export async function updateGoal(id: string, payload: UpdateGoalDTO): Promise<Goal> {
  return http.patch<Goal>(`${PREFIX}/${id}`, payload);
}

export async function deleteGoal(id: string): Promise<void> {
  return http.del<void>(`${PREFIX}/${id}`);
}
