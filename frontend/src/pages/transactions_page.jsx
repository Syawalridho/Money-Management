import React from 'react';
import TransactionStats from '../components/Transactions/transactions_stats';
import TransactionActions from '../components/Transactions/transactions_actions';
import TransactionsTable from '../components/Transactions/transactions_tables';
import GlassCard from '../components/ui/GlassCard';

const TransactionsPage = () => {
  return (
    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 space-y-6">
      
      <GlassCard title="Statistik Transaksi">
        <TransactionStats />
      </GlassCard>

      <GlassCard>
        <TransactionActions />
      </GlassCard>

      <GlassCard>
        <TransactionsTable />
      </GlassCard>

    </div>
  );
};

export default TransactionsPage;
