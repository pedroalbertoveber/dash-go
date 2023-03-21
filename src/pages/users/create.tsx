import { Input } from '@/components/Form/Input'
import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'

import {
  Box,
  Flex,
  Heading,
  Divider,
  Stack,
  SimpleGrid,
  Button,
} from '@chakra-ui/react'
import Link from 'next/link'
import { z } from 'zod'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const createUserFormSchema = z
  .object({
    name: z
      .string({ required_error: 'O nome deve ser informado!' })
      .min(3, 'O nome precisa ter ao menos 3 dígitos'),
    email: z
      .string({ required_error: 'O e-mail é um campo obrigatório!' })
      .email({ message: 'Você deve informar um e-mail válido!' }),
    password: z
      .string({ required_error: 'A senha é um campo obrigatório!' })
      .min(8, 'A senha deve possuir ao menos 8 dígitos'),
    password_confirmation: z.string({
      required_error: 'A confirmação de senha é um campo obrigatório!',
    }),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: 'As senhas precisam ser iguais!',
    path: ['password_confirmation'],
  })

type CreateUserFormData = z.infer<typeof createUserFormSchema>

export default function CreateUser() {
  const methods = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema),
    defaultValues: {
      email: '',
      name: '',
      password: '',
      password_confirmation: '',
    },
  })

  function handleCreateUser() {}

  return (
    <Box>
      <Header />
      <Flex w={'100%'} my="6" maxWidth={1480} mx="auto" px={6}>
        <Sidebar />
        <Box flex={1} borderRadius={8} bg="gray.800" p={[6, 8]}>
          <Heading size={'lg'} fontWeight={'normal'}>
            Criar Usuários
          </Heading>

          <Divider my={6} borderColor="gray.700" />

          <Box as="form" onSubmit={methods.handleSubmit(handleCreateUser)}>
            <FormProvider {...methods}>
              <Stack spacing={8}>
                <SimpleGrid minChildWidth={'240px'} spacing={[6, 8]} w={'100%'}>
                  <Input name="name" label="Nome Completo" />
                  <Input name="email" label="E-mail" type={'email'} />
                </SimpleGrid>

                <SimpleGrid minChildWidth={'240px'} spacing={[6, 8]} w={'100%'}>
                  <Input name="password" label="Senha" type={'password'} />
                  <Input
                    name="password_confirmation"
                    label="Confirmação de Senha"
                    type={'password'}
                  />
                </SimpleGrid>
              </Stack>
            </FormProvider>

            <Flex mt={8} justify="flex-end" gap={4}>
              <Link href={'/users'}>
                <Button as={'a'} colorScheme={'whiteAlpha'} type="button">
                  Cancelar
                </Button>
              </Link>
              <Button colorScheme={'pink'} type="submit">
                Salvar
              </Button>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}
