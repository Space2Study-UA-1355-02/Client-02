import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import AppChipList from '~/components/app-chips-list/AppChipList'
import { expect, it, vi, describe } from 'vitest'

describe('AppChipList Component', () => {
  it('should show chips', () => {
    const items = ['first-item', 'second-item']
    render(<AppChipList defaultQuantity={2} items={items} />)
    expect(screen.getByText('first-item')).toBeInTheDocument()
    expect(screen.getByText('second-item')).toBeInTheDocument()
  })

  it('should show chip with +3', () => {
    const items = Array.from({ length: 10 }, (_, i) => `item-${i + 1}`)
    render(<AppChipList defaultQuantity={7} items={items} />)
    expect(screen.getByText('+3')).toBeInTheDocument()
  })

  it('should show only 7 chips', () => {
    const items = Array.from({ length: 10 }, (_, i) => `item-${i + 1}`)
    render(<AppChipList defaultQuantity={7} items={items} />)
    const chip = screen.getAllByTestId('chip')
    expect(chip).toHaveLength(7)
  })

  it('should show only 10 chips', () => {
    const items = Array.from({ length: 5 }, (_, i) => `item-${i + 1}`)
    render(<AppChipList defaultQuantity={10} items={items} />)
    const chips = screen.getAllByTestId('chip')
    expect(chips).toHaveLength(5)
    expect(screen.queryByText(/\+\d+/)).toBeNull()
  })

  it('should delete 1 chip', async () => {
    const handleChipDelete = vi.fn()
    const items = ['item1']
    render(
      <AppChipList
        defaultQuantity={1}
        handleChipDelete={handleChipDelete}
        items={items}
      />
    )
    const deleteButton = screen.getByTestId('close-btn')
    await userEvent.click(deleteButton)
    expect(handleChipDelete).toHaveBeenCalledWith('item1')
  })
})
