import React from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

type PaginationProps = {
  count: number
  page: number
  onChange: (event: React.ChangeEvent<unknown>, page: number) => void
}

const PaginationOutlined: React.FC<PaginationProps> = ({
  count,
  page,
  onChange,
}) => {
  return (
    <Stack spacing={2} justifyContent="center" alignItems="center" mb={5}>
      <Pagination
        count={count}
        variant="text"
        shape="rounded"
        page={page}
        onChange={onChange}
        sx={{
          '& .MuiPaginationItem-page.Mui-selected': {
            backgroundColor: '#a7bb9d',
            color: 'white',
          },
        }}
      />
    </Stack>
  )
}

export default PaginationOutlined
