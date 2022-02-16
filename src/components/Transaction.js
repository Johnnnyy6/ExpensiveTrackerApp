import React from 'react'

export default function Transaction ({ transaction }) {
  return (
    <li class="minus">
        {transaction.text} <span>-$400</span><button class="delete button">x</button>
    </li>
  )
}
