import {
  FormControl,
  FormLabel,
  Input as ChackraInput,
  InputProps as ChackraInputProps,
} from '@chakra-ui/react'
import { useFormContext } from 'react-hook-form'

interface InputProps extends ChackraInputProps {
  name: string
  label?: string
}

export function Input({ name, label, ...rest }: InputProps) {
  const { register } = useFormContext()

  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChackraInput
        id={name}
        {...register(name)}
        focusBorderColor="pink.500"
        bgColor={'gray.900'}
        variant={'filled'}
        _hover={{
          bgColor: 'gray.900',
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
  )
}
