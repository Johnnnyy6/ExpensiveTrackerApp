import React from 'react'
import { GlobalContext } from '../context/GlobalState';
import { useContext } from 'react';

export default function Transaction ({ transaction }) {
  const {deleteTransaction} = useContext(GlobalContext)
  const sign = transaction.amount < 0 ? '-' : '+';
  return (
    <li class={transaction.amount < 0 ? 'minus':"plus"}>
        {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)}
        class="delete button">x</button>
    </li>
  )
}
