import { FormControl, FormLabel, Input } from '@chakra-ui/react'

const BillingInput = ({ title, placeholder, isRequired }) => {
    return (
        <FormControl className='pb-7' isRequired={isRequired}>
            <FormLabel className='text-gray-500'>{title}</FormLabel>
            <Input size={{ base: 'md', md: 'lg', lg: 'lg' }} variant='filled' className='text-sm' placeholder={placeholder} />
        </FormControl>
    )
}

export default BillingInput