import { Input } from '@/components/Form/Input'
import { Flex, Button, Stack, Text } from '@chakra-ui/react'
import { useForm, FormProvider } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const signInFormSchema = z.object({
  email: z
    .string({
      required_error: 'O e-mail é obrigatório!',
    })
    .email({ message: 'Insira um e-mail váido!' }),
  password: z.string().min(8, 'Sua senha precisa ter ao menos 8 dígitos'),
})

type SignInFormData = z.infer<typeof signInFormSchema>

export default function SignIn() {
  const methods = useForm<SignInFormData>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  function handleSignIn() {}

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width={'100%'}
        maxWidth={360}
        bg="gray.800"
        p={8}
        borderRadius={8}
        flexDirection="column"
        onSubmit={methods.handleSubmit(handleSignIn)}
      >
        <FormProvider {...methods}>
          <Stack spacing={4}>
            <Input name="email" type="email" label="E-mail" />
            <Text color={'gray.300'} fontSize={'sm'}>
              {methods.formState.errors.email?.message}
            </Text>
            <Input name="password" type="password" label="Senha" />
            <Text color={'gray.300'} fontSize={'sm'}>
              {methods.formState.errors.password?.message}
            </Text>
          </Stack>
        </FormProvider>

        <Button
          type="submit"
          mt={6}
          colorScheme="pink"
          size={'lg'}
          isLoading={methods.formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
