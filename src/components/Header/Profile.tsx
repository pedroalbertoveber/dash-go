import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

interface ProfielProps {
  showProfileData: boolean
}

export function Profile({ showProfileData = true }: ProfielProps) {
  return (
    <Flex align={'center'}>
      {showProfileData && (
        <Box mr={4} textAlign="right">
          <Text>Pedro Alberto</Text>
          <Text color={'gray.300'} fontSize="small">
            pedro.veber@outlook.com
          </Text>
        </Box>
      )}

      <Avatar
        size={'md'}
        name="Pedro Alberto"
        src="https://github.com/pedroalbertoveber.png"
      />
    </Flex>
  )
}
