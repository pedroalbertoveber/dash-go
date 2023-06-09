import { Stack, Box } from '@chakra-ui/react'
import { PaginationItem } from './PaginationItem'

export function Pagination() {
  return (
    <Stack
      direction={['column', 'row']}
      mt={8}
      justify="space-between"
      spacing={6}
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de 100
      </Box>
      <Stack direction={'row'} spacing="2">
        <PaginationItem isCurrent number={1} />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
      </Stack>
    </Stack>
  )
}
