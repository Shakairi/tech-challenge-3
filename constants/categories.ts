import { Category } from "@/types";

export const DEFAULT_CATEGORIES: Category[] = [
  {
    id: "food",
    name: "Alimentação",
    icon: "🍔",
    color: "#FF6B6B",
  },
  {
    id: "transport",
    name: "Transporte",
    icon: "🚗",
    color: "#4ECDC4",
  },
  {
    id: "entertainment",
    name: "Entretenimento",
    icon: "🎬",
    color: "#FFE66D",
  },
  {
    id: "health",
    name: "Saúde",
    icon: "⚕️",
    color: "#95E1D3",
  },
  {
    id: "education",
    name: "Educação",
    icon: "📚",
    color: "#A8D8EA",
  },
  {
    id: "shopping",
    name: "Compras",
    icon: "🛍️",
    color: "#FFB7C5",
  },
  {
    id: "utilities",
    name: "Contas",
    icon: "💡",
    color: "#DDA0DD",
  },
  {
    id: "salary",
    name: "Salário",
    icon: "💰",
    color: "#90EE90",
  },
  {
    id: "freelance",
    name: "Freelance",
    icon: "💻",
    color: "#87CEEB",
  },
  {
    id: "investment",
    name: "Investimentos",
    icon: "📈",
    color: "#FFD700",
  },
  {
    id: "other-income",
    name: "Outra Receita",
    icon: "📊",
    color: "#C0C0C0",
  },
  {
    id: "other-expense",
    name: "Outras",
    icon: "📌",
    color: "#A9A9A9",
  },
];

export function getCategoryById(id: string): Category | undefined {
  return DEFAULT_CATEGORIES.find((cat) => cat.id === id);
}

export function getCategoryIcon(id: string): string {
  return getCategoryById(id)?.icon || "📌";
}

export function getCategoryColor(id: string): string {
  return getCategoryById(id)?.color || "#A9A9A9";
}

export function getCategoryName(id: string): string {
  return getCategoryById(id)?.name || "Outra";
}
