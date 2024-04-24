import { View } from 'react-native'

import { FlashList } from '@shopify/flash-list'
import { Bill } from '@splitter/api/src/entities/bill'

import Avatar from '@/components/fragments/Avatar'
import Badge from '@/components/fragments/Badge'
import Card from '@/components/fragments/Card'
import Skeleton from '@/components/fragments/Skeleton'
import Text from '@/components/fragments/Text'
import { trpc } from '@/services/api'
import { BILL_STATUS } from '@/services/constants'

type Props = {
  onOpenBill?: (data: Bill) => void
}

export default function ListBills({ onOpenBill = () => {} }: Props) {
  const bills = trpc.bills.list.useQuery()

  if (bills.isError) return <></>

  if (!bills.data)
    return (
      <View className="flex-row p-6 gap-4">
        <Skeleton className="w-52 h-64 rounded-3xl" />
        <Skeleton className="w-52 h-64 rounded-3xl" />
      </View>
    )

  if (!bills.data.length) return <></>

  return (
    <FlashList
      horizontal
      data={bills.data}
      estimatedItemSize={8}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ padding: 24 }}
      ItemSeparatorComponent={() => <View className="w-4" />}
      renderItem={({ item }) => (
        <Card.Root
          key={`bill-${item.id}`}
          renderHeader={
            <Card.Header icon={item.icon} iconClassName="bg-neutral-100">
              {item.name}
            </Card.Header>
          }
          renderFooter={
            <Card.Footer>
              <Badge.SplitStatus
                statusClassName={BILL_STATUS[item.status].statusClassName}
              >
                {BILL_STATUS[item.status].statusContent}
              </Badge.SplitStatus>
            </Card.Footer>
          }
          onPress={() => onOpenBill(item)}
        >
          <Card.Content>
            <Text.Subtitle>Your split</Text.Subtitle>
            <Text.Price>{item.splitValue}</Text.Price>
            <Avatar.SmallProfileGroup />
          </Card.Content>
        </Card.Root>
      )}
    />
  )
}
