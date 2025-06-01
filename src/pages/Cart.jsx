import React, { lazy, Suspense, useEffect, useCallback, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectCartItems,
  selectCartState,
  selectTotalAmount,
  selectTotalQuantity,
  setClearCartItems,
  setCloseCart,
  setGetTotals,
} from '../app/features/cart/cartSlice.js'
// Lazy-loaded components with error boundaries
const CartCount = lazy(() => import('../components/cart/CartCount.jsx'))
const CartEmpty = lazy(() => import('../components/cart/CartEmpty.jsx'))
const CartItem = lazy(() => import('../components/cart/CartItem.jsx'))
// Loading Component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
  </div>
)
const Cart = memo(() => {
  const dispatch = useDispatch()
  const ifCartState = useSelector(selectCartState)
  const cartItems = useSelector(selectCartItems)
  const totalAmount = useSelector(selectTotalAmount)
  const totalQTY = useSelector(selectTotalQuantity)
  useEffect(() => {
    dispatch(setGetTotals())
  }, [cartItems, dispatch])
  const onCartToggle = useCallback(() => {
    dispatch(setCloseCart())
  }, [dispatch])
  const onClearCartItems = useCallback(() => {
    dispatch(setClearCartItems())
  }, [dispatch])
  return (
    <div
      className={`fixed inset-0 blur-effect-theme duration-500 w-full h-screen z-[250] ${
        ifCartState
          ? 'opacity-100 visible translate-x-0'
          : 'opacity-0 invisible translate-x-8'
      }`}
    >
      <div
        className={`blur-effect-theme duration-500 h-screen max-w-xl w-full absolute right-0 ${
          ifCartState
            ? 'opacity-100 visible translate-x-0'
            : 'opacity-0 invisible translate-x-8'
        }`}
      >
        <Suspense fallback={<LoadingSpinner />}>
          <CartCount
            totalQTY={totalQTY}
            onCartToggle={onCartToggle}
            onClearCartItems={onClearCartItems}
          />
        </Suspense>
        {cartItems.length === 0 ? (
          <Suspense fallback={<LoadingSpinner />}>
            <CartEmpty onCartToggle={onCartToggle} />
          </Suspense>
        ) : (
          <>
            <div className="flex flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] py-3 scroll-smooth">
              {cartItems.map((item) => (
                <Suspense key={item.id} fallback={<LoadingSpinner />}>
                  <CartItem item={item} />
                </Suspense>
              ))}
            </div>
            <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
              <div className="flex items-center justify-between">
                <h1 className="text-base font-semibold uppercase">SubTotal</h1>
                <h1 className="text-sm rounded bg-theme-cart text-slate-100 px-1 py-0.5">
                  ${totalAmount.toFixed(2)}
                </h1>
              </div>
              <div className="grid items-center gap-2">
                <p className="text-sm font-medium text-center">
                  Taxes and Shipping Will Calculate At Shipping
                </p>
                <button
                  type="button"
                  className="button-theme bg-theme-cart text-white"
                  onClick={() => {
                    // Add checkout logic here
                    console.log('Proceeding to checkout...')
                  }}
                >
                  Check Out
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
})
Cart.displayName = 'Cart'
export default Cart
