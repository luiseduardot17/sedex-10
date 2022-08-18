import React from 'react'
import Card from '../Card/Card'
import S from './Aside.module.css'

const Aside = () => {
  return (
    <aside className={S.aside}>
        <h2 className={S.titulo}>Histórico</h2>
        <div>
          <Card />
        </div>
    </aside>
  )
}

export default Aside
