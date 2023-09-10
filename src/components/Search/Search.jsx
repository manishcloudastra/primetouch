import { allProducts } from '@/app/(mock-data)/products';
import { lato } from '@/app/font';
import {
    Box,
    Flex,
    Image,
    Input,
    InputGroup,
    InputLeftElement,
    Tag,
    Text,
    useOutsideClick,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';


export const Search = () => {

    const ref = useRef();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState([]);

    useOutsideClick({
        ref: ref,
        handler: () => {
            setIsModalOpen(false);
            setProducts([]);
            setSearchText('');
        },
    });


    useEffect(() => {
        const fetchProducts = () => {
            setIsLoading(true);
            const timeout = setTimeout(() => {
                setIsLoading(false);
                setProducts(allProducts);
            }, 2000);
            return () => {
                clearTimeout(timeout);
            };
        };

        if (searchText.trim().length !== 0) {
            fetchProducts();
        }
    }, [searchText]);

    return (
        <Box pos="relative"  w={{ base: '10%', md: '12rem', lg: '22rem', xl: '32rem' }} rounded='md' ref={ref} className='-mt-1' >
            <InputGroup size='md' w={{ base: '10%', md: '12rem', lg: '22rem', xl: '32rem' }} rounded='md'  className={' bg-white ' + lato.className}>
                <InputLeftElement
                    pointerEvents="none"
                    children={<AiOutlineSearch color='gray' />}
                    fontSize='1.2em'
                />
                <Input
                    className=' text-base'
                    focusBorderColor='#DD8560'
                    type="text"
                    placeholder="Search...(e.g. Classic)"
                    value={searchText}
                    color={'black'}
                    onClick={() => setIsModalOpen(true)}
                    onChange={(e) => setSearchText(e.target.value)}
                    rounded='md'
                />
            </InputGroup>

            {isModalOpen && (
                <Box
                    pos="absolute"
                    bg="white"
                    shadow="md"
                    // padding="0.5rem"
                    w="100%"
                    marginTop="1"
                    boxSizing="border-box"
                    maxH="500px"
                    overflowY="auto"
                >
                    {products.filter(item => item.productName.toLowerCase().includes(searchText.toLowerCase())).length === 0 && searchText.trim().length !== 0 ? (
                        isLoading ? (
                            <p className='text-black p-[0.5rem] '>Loading...</p>
                        ) : (
                            <p className='text-black p-[0.5rem]'>No Products Found</p>
                        )
                    ) : (
                        searchText.trim().length !== 0 && <SearchedProductList products={products} searchText={searchText} />
                    )}
                </Box>
            )}
        </Box>
    );
};

const SearchedProductList = ({ products, searchText }) => {
    return (
        <>
            {
                products.filter(item => item.productName.toLowerCase().includes(searchText.toLowerCase())).map((product) => (
                    <Link key={product.id} href={`/${product.category}/${product.slug}`}>
                        <Box
                            borderTopWidth="1px"
                            borderTopColor="gray.200"
                            p="2"
                            _hover={{ bgColor: 'gray.100' }}
                        >
                            <Flex align="center">
                                <Image
                                    alt={product.productName}
                                    src={product.imageSrc}
                                    boxSize="24px"
                                    mr="10px"
                                />
                                <Text className='text-black' >{product.productName}</Text>
                            </Flex>
                            <Flex justify="flex-end">
                                <Tag size="sm">{product.category}</Tag>
                            </Flex>
                        </Box>
                    </Link>
                ))}
        </>
    );
};
