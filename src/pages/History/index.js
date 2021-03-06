import React from 'react';
import { connect } from 'react-redux';

import { historySelectors } from 'ducks/history';
import Operation from 'components/Operation';
import cn from 'utils/bem';

import { propTypes } from './props';
import './style.styl';

const b = cn('history-page');

class HistoryPage extends React.Component {
  static propTypes = propTypes;

  render() {
    const { operations } = this.props;
    const isEmpty = !operations.length;

    return (
      <div className={b(null, { empty: isEmpty })}>
        {isEmpty ? (
          <span className={b('empty-message')}>
            There is no exchange history yet.
          </span>
        ) : (
          operations.map(operation => (
            <Operation
              key={operation.id}
              operation={operation}
              className={b('operation')}
            />
          ))
        )}
      </div>
    );
  }
}

export default connect(
  state => ({
    operations: historySelectors.recentOperations(state)
  }),
  null
)(HistoryPage);
