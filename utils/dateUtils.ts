/**
 * Calcula quantos dias tem no mês
 */
export const getDaysInMonth = (month: number, year: number): number => {
  return new Date(year, month + 1, 0).getDate();
};

/**
 * Calcula o primeiro dia da semana do mês
 */
export const getFirstDayOfMonth = (month: number, year: number): number => {
  return new Date(year, month, 1).getDay();
};

/**
 * Gera array de dias para o calendário
 * Inclui null para dias vazios antes do 1º dia do mês
 */
export const generateCalendarDays = (
  month: number,
  year: number,
): (number | null)[] => {
  const daysInMonth = getDaysInMonth(month, year);
  const firstDay = getFirstDayOfMonth(month, year);
  const days: (number | null)[] = [];

  // Adiciona dias vazios no início
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  // Adiciona dias do mês
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  return days;
};

/**
 * Valida se uma data é válida
 */
export const isValidDate = (date: Date): boolean => {
  return date instanceof Date && !isNaN(date.getTime());
};

/**
 * Formata data como YYYY-MM-DD
 */
export const formatDateISO = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

/**
 * Compara se duas datas são no mesmo mês e ano
 */
export const isSameMonthYear = (
  date1: Date,
  month: number,
  year: number,
): boolean => {
  return date1.getMonth() === month && date1.getFullYear() === year;
};

/**
 * Verifica se é o mesmo dia
 */
export const isSameDay = (date1: Date, date2: Date): boolean => {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
};
