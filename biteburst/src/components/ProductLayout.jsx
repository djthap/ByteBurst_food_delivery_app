import React from 'react'

export default function ProductLayout({item}) {
  return (
    <div className="col-1 text-center">
    <img
        src={'/pizzaIcon.png'}
        width={70}
        height={70}
        alt={'pizzaicon'}
        className="icon"
    />
    <p>Pizza</p>
</div>
  )
}
