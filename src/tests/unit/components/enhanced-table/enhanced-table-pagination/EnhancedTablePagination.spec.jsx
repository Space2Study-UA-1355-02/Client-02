import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import EnhancedTablePagination from '~/components/enhanced-table/enhanced-table-pagination/EnhancedTablePagination'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key
  })
}))

describe('EnhancedTablePagination', () => {
  const handleChangePage = vi.fn()
  const handleChangeRowsPerPage = vi.fn()
  const handleChangePageInput = vi.fn()
  const handlePageSubmit = vi.fn()

  const paginationProps = {
    page: 1,
    pageInput: 1,
    rowsPerPage: 5,
    pageCount: 5,
    itemsCount: 25,
    handleChangePage,
    handleChangeRowsPerPage,
    handleChangePageInput,
    handlePageSubmit
  }

  beforeEach(() => {
    render(<EnhancedTablePagination pagination={paginationProps} />)
  })

  it('should render first page', () => {
    const paginationInput = screen.getByTestId('pagination-page-input')
    expect(paginationInput).toHaveValue(1)
  })

  it('should change page from 1 to 2', async () => {
    const page2Button = screen.getByRole('button', { name: /Go to page 2/i })

    await userEvent.click(page2Button)

    expect(handleChangePage).toHaveBeenCalledWith(expect.anything(), 2)
  })
})
