import { fireEvent, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, vi } from 'vitest'

import AddResourceWithInput from '~/containers/my-resources/add-resource-with-input/AddResourceWithInput'
import { renderWithProviders } from '~tests/test-utils'

const fetchDataMock = vi.fn()
const text = 'test search'
const route = '/my-resources'


const props = {
  btnText: 'myResourcesPage.quizzes.newQuizBtn',
  fetchData: fetchDataMock,
  link: '#',
  searchRef: { current: '' },
  selectedItems: []
}

describe('AddResourceWithInput test', () => {
  beforeEach(async () => {
    fetchDataMock.mockClear()
    await waitFor(() => {
      renderWithProviders(<AddResourceWithInput {...props} />, {
        initialEntries: route
      })
    })
  })

  it('should render search with button', () => {
    const addBtn = screen.getByText('myResourcesPage.quizzes.newQuizBtn')
    const searchInput = screen.getByPlaceholderText('common.search')

    expect(addBtn).toBeInTheDocument()
    expect(searchInput).toBeInTheDocument()
  })

  it('should change and clear search input', async () => {
    const user = userEvent.setup()
    const searchInput = screen.getByPlaceholderText('common.search')

    await user.type(searchInput, text)
    expect(searchInput).toHaveValue(text)

    const clearButton = screen.getByTestId('clearIcon')
    fireEvent.click(clearButton)

    expect(searchInput).toHaveValue('')
    expect(fetchDataMock).toHaveBeenCalled()
  })

  it('should call fetchData when typing with debounce', async () => {
    const user = userEvent.setup()
    const searchInput = screen.getByPlaceholderText('common.search')

    await user.type(searchInput, text)

    await waitFor(() => {
      expect(fetchDataMock).toHaveBeenCalled()
    })
  })

  it('should set searchRef when typing', async () => {
    const user = userEvent.setup()
    const searchInput = screen.getByPlaceholderText('common.search')

    await user.type(searchInput, text)

    await waitFor(() => {
      expect(props.searchRef.current).toBe(text)
    })
  })

  it('should have hidden class if search is empty', () => {
    const searchInput = screen.getByPlaceholderText('common.search')
    expect(searchInput).toHaveClass('hidden')
  })

  it('should have visible class if search is not empty', async () => {
    const user = userEvent.setup()
    const searchInput = screen.getByPlaceholderText('common.search')

    await user.type(searchInput, text)

    await waitFor(() => {
      expect(searchInput).toHaveClass('visible')
    })
  })
})
