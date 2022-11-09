import { Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { useUser } from '../../../context/UserContext'
//import { sortTransaction } from './sortingTransactions'
import TransactionCard from './TransactionCard'
import ViewAll from './ViewAll'

function MyTransactions() {
    const { user, sortTransaction } = useUser()
    const transactions = user.transactions
    //sortTransaction(transactions, user.sortState)

    return (
        <Flex height={275} width={1000} p={2} direction={'column'}>
            
            { ((!transactions || transactions.length===0)) ?
            <>
            <Heading fontSize={'2rem'}>{'My Transactions'}</Heading>
            <Flex height={'100%'} bg={'primary.snow'} mt={2} borderRadius={'md'} p={4} direction={'column'}
                    boxShadow={'2px 4px 10px #818181'}
                >
                <Flex justify='center' align='center' height={'100%'}>
                    <Text fontSize={'1.25rem'} color={'primary.dark'}>
                        You have no transaction history
                    </Text>
                </Flex>
            </Flex>
            </>
                :
                <>
                <Flex direction={'row'} justify={'space-between'} align={'center'} p={2} height={100}>
                    <Heading fontSize={'1.25rem'}>{'My Transactions'}</Heading>
                    <ViewAll />
                </Flex>
                <Flex height={'100%'} bg={'primary.snow'} borderRadius={'md'} p={4} direction={'column'}
                    boxShadow={'2px 4px 10px #818181'}
                >
                
                    {transactions.map((transaction, index) => 
                        (index<4) &&
                        <TransactionCard
                            category={transaction.category}
                            date={transaction.date}
                            amount={transaction.amount}
                            recipiant={transaction.recipiant}
                            sender={transaction.sender}
                            isAll={false}
                        />
                    )}
                    
                </Flex>
                </>
            }
            </Flex>
    )
}

export default MyTransactions