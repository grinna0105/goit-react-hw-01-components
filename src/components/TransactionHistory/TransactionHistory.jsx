import PropTypes from 'prop-types';
import css from '../TransactionHistory/TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.headerRow}>
        <tr className={css.valuesRow}>
          <th className={css.headerColumn}>Type</th>
          <th className={css.headerColumn}>Amount</th>
          <th className={css.headerColumn}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={css.valuesRow} key={id}>
            <td className={css.transactionData}>{type}</td>
            <td className={css.transactionData}>{amount}</td>
            <td className={css.transactionData}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
