// server/api/products.js

export default defineEventHandler((event) => {
  // 定義產品的結構
  const createProduct = id => ({
    id,
    name: `Product ${id}`,
    description: `This is the description for Product ${id}.`,
    price: Math.floor(Math.random() * 1000) + 100, // 隨機價格 100 - 1099
    imageUrl: `https://via.placeholder.com/150?text=Product+${id}`,
    createdAt: new Date(Date.now() - id * 1000 * 60 * 60 * 24).toISOString() // 過去幾天的日期
  })

  // 生成 100 筆產品資料
  const products = Array.from({ length: 100 }, (_, index) => createProduct(index + 1))

  // 取得查詢參數
  const query = getQuery(event)
  let page = parseInt(query.page) || 1 // 頁數，預設為第 1 頁
  let limit = parseInt(query.limit) || 10 // 每頁數量，預設為 10 筆

  // 驗證查詢參數
  if (page < 1) { page = 1 }
  if (limit < 1) { limit = 10 }

  const totalProducts = products.length
  const totalPages = Math.ceil(totalProducts / limit)

  // 如果請求的頁數超過總頁數，回傳空陣列
  if (page > totalPages) {
    return {
      success: false,
      msg: 'Requested page exceeds total pages.',
      data: {
        products: [],
        page,
        limit,
        totalProducts,
        totalPages
      }
    }
  }

  const start = (page - 1) * limit
  const end = start + limit

  const paginatedProducts = products.slice(start, end)

  return {
    success: true,
    msg: 'Products retrieved successfully.',
    data: {
      products: paginatedProducts,
      page,
      limit,
      totalProducts,
      totalPages
    }
  }
})
