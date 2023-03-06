import { isUndefined, omitBy } from 'lodash'
import { ProductListComfig } from 'src/types/product.type'
import useQueryParams from './useQueryParams'
export type QueryConfigS = {
  [key in keyof ProductListComfig]: string
}
export default function useQueryConfig() {
  const queryParams: QueryConfigS = useQueryParams()
  const queryConfig: QueryConfigS = omitBy(
    {
      page: queryParams.page || 1,
      limit: queryParams.limit || 4,
      sort_by: queryParams.sort_by,
      order: queryParams.order,
      category: queryParams.category,
      name: queryParams.name
    },
    isUndefined
  )
  return queryConfig
}
