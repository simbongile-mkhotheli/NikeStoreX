import React, { lazy, Suspense } from 'react'

const Title = lazy(() => import('../utils/Title.tsx'))
const Item = lazy(() => import('../utils/Item.tsx'))

const Sales = ({ ifExists, endpoint: { title, items } }) => {
  return (
    <>
      <div className="nike-container">
        <Suspense
          fallback={<div className="text-sm text-center">Loading title...</div>}
        >
          <Title title={title} />
        </Suspense>
        <div
          className={`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 ${ifExists ? 'grid-cols-3 xl:grid-cols-2 sm:grid-cols-1' : 'grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'}`}
        >
          <Suspense
            fallback={
              <div className="text-sm text-center">Loading items...</div>
            }
          >
            {items?.map((item, i) => (
              <Item {...item} key={i} ifExists={ifExists} />
            ))}
          </Suspense>
        </div>
        console.log(items)
      </div>
    </>
  )
}

export default Sales
