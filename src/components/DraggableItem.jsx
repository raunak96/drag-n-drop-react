import { Flex, Text } from "@chakra-ui/react";

const DraggableItem = ({ column, tasks }) => {
	return (
		<Flex
			rounded="3px"
			bg="column-bg"
			w="400px"
			maxH="500px"
			flexDir="column">
			<Flex
				align="center"
				h="60px"
				bg="column-header-bg"
				roundedTop="3px"
				px="1.5rem"
				mb="1.5rem">
				<Text fontSize="17px" fontWeight={600} color="subtle-text">
					{column.title}
				</Text>
			</Flex>
			<Flex px="1.5rem" flexDir="column" flex={1} overflowY="auto">
				{tasks.map(task => (
					<Flex
						key={task.id}
						mb="1rem"
						h="65px"
						bg="card-bg"
						rounded="3px"
						p="1.5rem"
						draggable>
						<Text>{task.content}</Text>
					</Flex>
				))}
			</Flex>
		</Flex>
	);
};
export default DraggableItem;
