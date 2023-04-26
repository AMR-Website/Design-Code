import React from 'react'
import Logo from '../Images/Navbar/Navbar.png'
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Image,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure();


    return (
        <Box >
          <Flex
            bg={useColorModeValue('white', 'gray.800')}
            color={useColorModeValue('gray.600', 'white')}
            minH={'70px'}
            
            py={{ base: 2 }}
            px={{ base: 4 }}
            borderBottom={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.900')}
            align={'center'}>
            <Flex
              flex={{ base: 1, md: 'auto' }}
              ml={{ base: -2 }}
              display={{ base: 'flex', md: 'none' }}>
              <IconButton
                onClick={onToggle}
                icon={
                  isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                }
                variant={'ghost'}
                aria-label={'Toggle Navigation'}
              />
            </Flex>
            <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start'  }} >
             <Stack width={'160px'} mt={'3px'}>
              <Link to={'/'}>
             <Image  src={Logo}   />
             </Link>
             </Stack>
              <Stack
               justify={'flex-end'}
               direction={'row'}
               spacing={6}
              // border="2px solid"
              >
              <Box display={{ base: 'none', md: 'flex' ,}}  mt={'20px'} ml={"300px"} >
                <DesktopNav />
              </Box>

              </Stack>
             
              
            </Flex>
    
          </Flex>
    
          <Collapse in={isOpen} animateOpacity>
            <MobileNav />
          </Collapse>
        </Box>
      );
}


const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={14} >
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  to={navItem.href ?? '#'}
                  fontSize={'20px'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };


  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Link
        to={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} to={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };

  
  const NAV_ITEMS = [
    {
          label: 'Home',
          // subLabel: 'An exclusive list for contract work',
          href: '/',
        },
     {
      label: 'Services',
      children: [
        {
          label: 'Mining',
          // subLabel: 'See our Ongoing Projects ',
          href: '/mining',
        },
        {
          label: 'Construction',
          // subLabel: 'See our Completed Projects',
          href: '/construction',
        },        {
          label: 'Irrigation',
          // subLabel: 'See our Completed Projects',
          href: '/irrigation',
        },
      ],
    },
    {
      label: 'Projects',
      children: [
        {
          label: 'Ongoing Projects',
          // subLabel: 'See our Ongoing Projects ',
          href: '/ongoingProjects',
        },
        {
          label: 'Completed Projects',
          // subLabel: 'See our Completed Projects',
          href: '/completedProjects',
        },
      ],
    },
   
    {
      label: 'Equipmets',
      href: 'equipement',
    },
    {
      label: 'Media',
      children: [
        {
          label: 'Gallery',
          // subLabel: 'See our Ongoing Projects ',
          href: '/gallery',
        },
        {
          label: 'Certificates',
          // subLabel: 'See our Completed Projects',
          href: '/certificates',
        },
      ],
    },
    {
      label: 'About us',
      children: [
        {
          label: 'Vision And Mission',
          // subLabel: 'Vision And Mission',
          href: '/mission',
        },
        {
          label: 'Financial Report',
          // subLabel: 'An exclusive list for contract work',
          href: '/financialreport',
        },
        {
          label: 'CSR',
          // subLabel: 'An exclusive list for contract work',
          href: 'csr',
        },
        {
          label: 'Leadership',
          // subLabel: 'An exclusive list for contract work',
          href: '/director',
        },
      ],
    },
    // {
    //   label: 'Carrers',
    //   href: '/carrers',
    // },
  ];

export default Navbar