import create from 'zustand'

const useProduct = create(
  (set) => ({
    products: [],
    setProducts: (data) => set(
      () => ({
        products: data,
      }),
    ),
  }),
)

export default useProduct
