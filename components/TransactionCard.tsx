import {
    getCategoryColor,
    getCategoryIcon,
    getCategoryName,
} from "@/constants/categories";
import { Colors } from "@/constants/colors";
import { Transaction } from "@/types";
import { formatters } from "@/utils/formatters";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface TransactionCardProps {
  transaction: Transaction;
  onPress?: () => void;
  onDelete?: () => void;
  onEdit?: () => void;
}

export default function TransactionCard({
  transaction,
  onPress,
  onDelete,
  onEdit,
}: TransactionCardProps) {
  const isIncome = transaction.type === "income";
  const amountColor = isIncome ? Colors.income : Colors.expense;
  const amountPrefix = isIncome ? "+ " : "- ";
  const categoryIcon = getCategoryIcon(transaction.category);
  const categoryName = getCategoryName(transaction.category);
  const categoryColor = getCategoryColor(transaction.category);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.contentContainer}>
        <View
          style={[
            styles.categoryIcon,
            { backgroundColor: categoryColor + "20" },
          ]}
        >
          <Text style={styles.iconText}>{categoryIcon}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.category}>{categoryName}</Text>
          <Text style={styles.description} numberOfLines={1}>
            {transaction.description}
          </Text>
          <Text style={styles.date}>
            {formatters.formatDate(transaction.date, "short")}
          </Text>
        </View>

        <View style={styles.amountContainer}>
          <Text style={[styles.amount, { color: amountColor }]}>
            {amountPrefix}
            {formatters.formatCurrency(transaction.amount, false)}
          </Text>
          {transaction.receiptUrl && <Text style={styles.receiptIcon}>📎</Text>}
        </View>
      </View>

      {onEdit || onDelete ? (
        <View style={styles.actionsContainer}>
          {onEdit && (
            <TouchableOpacity
              style={[styles.actionButton, styles.editButton]}
              onPress={onEdit}
            >
              <Text style={styles.actionText}>✏️</Text>
            </TouchableOpacity>
          )}
          {onDelete && (
            <TouchableOpacity
              style={[styles.actionButton, styles.deleteButton]}
              onPress={onDelete}
              activeOpacity={0.6}
            >
              <Text style={styles.actionText}>🗑️</Text>
            </TouchableOpacity>
          )}
        </View>
      ) : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    marginBottom: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderLeftWidth: 4,
    borderLeftColor: Colors.primary,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  categoryIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  iconText: {
    fontSize: 24,
  },
  infoContainer: {
    flex: 1,
  },
  category: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.text,
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    color: Colors.textTertiary,
  },
  amountContainer: {
    alignItems: "flex-end",
  },
  amount: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 4,
  },
  receiptIcon: {
    fontSize: 14,
  },
  actionsContainer: {
    flexDirection: "row",
    marginTop: 12,
    gap: 8,
  },
  actionButton: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: "center",
  },
  editButton: {
    backgroundColor: "#E3F2FD",
  },
  deleteButton: {
    backgroundColor: "#FFEBEE",
  },
  actionText: {
    fontSize: 16,
  },
});
