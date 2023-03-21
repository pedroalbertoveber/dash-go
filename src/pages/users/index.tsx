import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'

import { RiAddLine, RiPencilLine } from 'react-icons/ri'

import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Icon,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Checkbox,
  useBreakpointValue,
} from '@chakra-ui/react'
import { Pagination } from '@/components/Pagination'
import Link from 'next/link'

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Box>
      <Header />
      <Flex w={'100%'} my="6" maxWidth={1480} mx="auto" px={6}>
        <Sidebar />
        <Box flex={1} borderRadius={8} bg="gray.800" p={8}>
          <Flex mb={8} justify="space-between" align={'center'}>
            <Heading size={'lg'} fontWeight="normal">
              Usuários
            </Heading>
            <Link passHref href="/users/create">
              <Button
                as="a"
                size={'sm'}
                fontSize="sm"
                colorScheme={'pink'}
                leftIcon={<Icon as={RiAddLine} fontSize="22" />}
              >
                Criar Novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme={'whiteAlpha'}>
            <Thead>
              <Tr>
                <Th px={[4, 4, 6]} color="gray.300" width={8}>
                  <Checkbox colorScheme={'pink'} />
                </Th>
                <Th color={'gray.500'}>Usuário</Th>
                {isWideVersion && <Th color={'gray.500'}>Data de Cadastro</Th>}

                <Th color={'gray.500'} width={8}></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={[4, 4, 6]}>
                  <Checkbox colorScheme={'pink'} />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight={'bold'}>Pedro Alberto</Text>
                    <Text fontSize={'small'} color="gray.300">
                      pedro.veber@outlook.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && (
                  <Td>
                    <Text>20 de Março, 2023</Text>
                  </Td>
                )}
                {isWideVersion && (
                  <Td>
                    <Button
                      as="a"
                      size={'sm'}
                      fontSize="sm"
                      colorScheme={'purple'}
                      leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                    >
                      Editar
                    </Button>
                  </Td>
                )}
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}
