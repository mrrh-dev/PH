interface Deposit {
  type: string;
  amount: number;
}
interface Withdrawal {
  type: string;
  amount: number;
}
function processTransaction(
  balance: number,
  transaction: Deposit | Withdrawal,
): number {
  if (transaction.type === 'deposit') return balance + transaction.amount;
  else if (transaction.type === 'withdraw' && balance > transaction.amount)
    return balance - transaction.amount;
  else if (transaction.type === 'withdraw' && balance < transaction.amount)
    return balance;
  else return 0;
}
console.log(processTransaction(5000, { type: 'deposit', amount: 2000 }));
console.log(processTransaction(5000, { type: 'withdraw', amount: 2000 }));
console.log(processTransaction(5000, { type: 'withdraw', amount: 7000 }));
console.log(processTransaction(0, { type: 'withdraw', amount: 17000 }));
